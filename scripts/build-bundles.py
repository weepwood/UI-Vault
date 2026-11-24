#!/usr/bin/env python3
"""基于显式元数据打包独立静态 Demo，绝不扫描仓库、下载外站或读取私有文件。"""
from __future__ import annotations
import json
import sys
import zipfile
import re
import posixpath
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
MANIFEST = ROOT / "content" / "assets.json"
MAX_FILE_SIZE = 15 * 1024 * 1024
MAX_TOTAL_SIZE = 30 * 1024 * 1024


def plans():
    items = json.loads(MANIFEST.read_text(encoding="utf-8"))
    for asset in items:
        if "bundleFiles" not in asset:
            continue
        identifier = asset["id"]
        if not identifier or any(c not in "abcdefghijklmnopqrstuvwxyz0123456789-" for c in identifier):
            raise ValueError("无效资产 ID")
        preview = PurePosixPath(asset["preview"])
        root = preview.parent
        entries = []
        seen = set()
        for path in asset["bundleFiles"]:
            member = PurePosixPath(path)
            if member.is_absolute() or ".." in member.parts or "." in member.parts or not member.is_relative_to(root):
                raise ValueError(f"{identifier}: 跨项目或不安全的路径 {path}")
            local = member.relative_to(root).as_posix()
            if local in seen or local in ("README.txt", ""):
                raise ValueError(f"{identifier}: 重复或保留的文件 {local}")
            seen.add(local)
            entries.append((path, local))
        if asset["preview"] not in asset["bundleFiles"]:
            raise ValueError(f"{identifier}: 打包清单缺少预览入口")
        yield asset, entries


def read_output(path):
    target = DIST / path
    real = target.resolve(strict=True)
    if not real.is_relative_to(DIST.resolve()) or target.is_symlink() or not target.is_file():
        raise ValueError(f"不允许打包符号链接或仓库外文件：{path}")
    if target.stat().st_size > MAX_FILE_SIZE:
        raise ValueError(f"单个文件过大：{path}")
    return target.read_bytes()


def readme(asset):
    return (
        f"{asset['title']}\n"
        "UI-Vault 独立静态演示文件包\n\n"
        f"入口文件：{PurePosixPath(asset['preview']).name}（请使用浏览器打开，涉及浏览器 API 时通过本地 HTTP 服务运行）\n"
        "本包只包含明确列入资产清单的已公开文件，不含 UI-Vault 主工作台依赖。\n"
        "如需框架源代码、工具链或原始版本历史，请访问对应 GitHub 仓库。\n\n"
        f"资产 ID：{asset['id']}\n"
        f"资源许可说明：{asset['license']}\n"
        "第三方商标、字体及图片仍受各自权利人条款约束；本包不授予额外许可。\n"
    ).encode("utf-8")


class RuntimeRefs(HTMLParser):
    """只校验明显的静态依赖，不把跳转到第三方文档的链接当作运行依赖。"""
    def __init__(self):
        super().__init__()
        self.refs = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "script" and attrs.get("src"):
            self.refs.append(attrs["src"])
        elif tag == "link" and "stylesheet" in (attrs.get("rel") or "").lower().split() and attrs.get("href"):
            self.refs.append(attrs["href"])
        elif tag in ("img", "source", "video", "audio") and attrs.get("src"):
            self.refs.append(attrs["src"])
        elif tag == "a" and attrs.get("href", "").lower().split("?")[0].endswith(".html"):
            href = attrs["href"]
            url = urlsplit(href)
            if not url.scheme and not url.netloc:
                self.refs.append(href)


def verify_static_deps(asset, files):
    """防止 ZIP 中页面引用未交付的相对 CSS / JS / 图片等，且不接受外部运行时 URL。"""
    names = {name for name, _ in files}
    for name, payload in files:
        refs = []
        if name.endswith(".html"):
            doc = RuntimeRefs()
            doc.feed(payload.decode("utf-8"))
            refs = doc.refs
        elif name.endswith(".css"):
            source = payload.decode("utf-8")
            refs = re.findall(r"url\(\s*['\"]?([^'\"\)]+)", source)
            refs += re.findall(r"@import\s+['\"]([^'\"]+)['\"]", source)
        for ref in refs:
            ref = ref.strip()
            url = urlsplit(ref)
            if not url.path and not url.scheme and not url.netloc:
                continue
            if url.scheme in ("data", "blob"):
                continue
            if url.scheme or url.netloc or url.path.startswith("/"):
                raise ValueError(f"{asset['id']}: {name} 引用了非独立运行资源：{ref}")
            target = posixpath.normpath(posixpath.join(posixpath.dirname(name), unquote(url.path)))
            if target not in names:
                raise ValueError(f"{asset['id']}: {name} 缺少打包资源：{ref} → {target}")


def contents(asset, entries):
    result = []
    total = 0
    for path, name in entries:
        data = read_output(path)
        total += len(data)
        if total > MAX_TOTAL_SIZE:
            raise ValueError(f"{asset['id']}: 打包总大小超过限制")
        result.append((name, data))
    verify_static_deps(asset, result)
    result.append(("README.txt", readme(asset)))
    return result


def verify_parameter_demo_sources():
    """覆盖所有声明可复制的单文件；静态引用校验不能替代浏览器运行验收。"""
    assets = json.loads(MANIFEST.read_text(encoding="utf-8"))
    for asset in assets:
        if asset.get("copyable") is not True:
            continue
        identifier = asset["id"]
        if asset["source"] != "local" or not asset.get("copyable") or asset["preview"] != asset.get("code"):
            raise ValueError(f"{identifier}: 单文件交付协议不一致")
        path = asset["preview"]
        verify_static_deps(asset, [(PurePosixPath(path).name, read_output(path))])
        print(f"单文件 Demo 静态资源校验通过：{identifier}")


def build():
    verify_parameter_demo_sources()
    directory = DIST / "downloads"
    directory.mkdir(parents=True, exist_ok=True)
    for asset, entries in plans():
        target = directory / f"{asset['id']}.zip"
        data = contents(asset, entries)
        with zipfile.ZipFile(target, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
            for name, payload in data:
                info = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = 0o100644 << 16
                archive.writestr(info, payload, compress_type=zipfile.ZIP_DEFLATED, compresslevel=8)
        print(f"独立演示包：{target.relative_to(DIST)}（{len(entries)} 个文件）")


def verify():
    verify_parameter_demo_sources()
    for asset, entries in plans():
        target = DIST / "downloads" / f"{asset['id']}.zip"
        expected = contents(asset, entries)
        with zipfile.ZipFile(target, "r") as archive:
            names = archive.namelist()
            if names != [name for name, _ in expected]:
                raise ValueError(f"{asset['id']}: ZIP 文件清单不一致")
            if archive.testzip() is not None:
                raise ValueError(f"{asset['id']}: ZIP CRC 校验失败")
            for name, payload in expected:
                if archive.read(name) != payload:
                    raise ValueError(f"{asset['id']}: ZIP 内容不一致：{name}")
        print(f"独立演示包验收通过：{asset['id']}")


if __name__ == "__main__":
    if len(sys.argv) != 2 or sys.argv[1] not in ("--build", "--verify"):
        raise SystemExit("用法：python3 scripts/build-bundles.py --build|--verify")
    (build if sys.argv[1] == "--build" else verify)()
