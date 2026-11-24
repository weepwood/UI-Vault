#!/usr/bin/env python3
"""发布经过人工登记的 Foundation 源码工程，验证离线 Token 构建。"""
from pathlib import Path
import hashlib
import json
import subprocess
import sys
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "subprojects" / "ui-foundation-kit"
TARGET = ROOT / "dist" / "downloads" / "ui-foundation-kit-project.zip"
FILES = (
    "AGENTS.md", "INTEGRATION.md", "LICENSE", "README.md", "STACK.md", "THIRD_PARTY.md", "package.json",
    "adapters/gpui/README.md",
    "adapters/react/PRIMITIVES.md", "adapters/react/README.md", "adapters/react/UiButton.jsx",
    "adapters/react/UiInput.jsx", "adapters/react/UiPrimitives.jsx", "adapters/react/UiSwitch.jsx",
    "adapters/vue/PRIMITIVES.md", "adapters/vue/README.md", "adapters/vue/index.html",
    "adapters/vue/package.json", "adapters/vue/src/App.vue", "adapters/vue/src/app.css",
    "adapters/vue/src/components/UiButton.vue", "adapters/vue/src/components/UiCard.vue",
    "adapters/vue/src/components/UiInput.vue", "adapters/vue/src/components/UiPrimitives.js",
    "adapters/vue/src/components/UiSwitch.vue", "adapters/vue/src/main.ts",
    "adapters/vue/tsconfig.json", "adapters/vue/vite.config.ts",
    "demo/index.html", "scripts/build-tokens.mjs", "scripts/check.mjs", "scripts/install.mjs",
    "styles/base.css", "styles/components.css", "tokens/foundation.json", "tokens/themes.json",
)
GENERATED = ("dist/theme.css", "dist/tokens.json", "dist/tokens.ts", "dist/tokens.rs")

def sha(data):
    return hashlib.sha256(data).hexdigest()

def contents():
    result = {}
    base = SOURCE.resolve(strict=True)
    for name in (*FILES, *GENERATED):
        target = SOURCE / name
        if target.is_symlink() or not target.is_file() or not target.resolve(strict=True).is_relative_to(base):
            raise ValueError("不安全或缺失的 Foundation 文件：" + name)
        if target.stat().st_size > 2 * 1024 * 1024:
            raise ValueError("Foundation 文件过大：" + name)
        result[name] = target.read_bytes()
    version = json.loads(result["package.json"])["version"]
    result["PROJECT-MANIFEST.json"] = (json.dumps({
        "format": "ui-vault-foundation-project", "version": 1, "projectVersion": version,
        "build": "node scripts/build-tokens.mjs", "check": "node scripts/check.mjs",
        "dependencyNotice": "Token 构建不需要 npm 依赖；Vue 示例需要自行安装依赖；未打包 node_modules。",
        "files": [{"path": name, "bytes": len(data), "sha256": sha(data)} for name, data in result.items()],
    }, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    return result

def build():
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(TARGET, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
        for name, data in contents().items():
            info = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, data)
    print("Foundation 源码工程 ZIP 构建完成")

def verify():
    expected = contents()
    with zipfile.ZipFile(TARGET) as archive, tempfile.TemporaryDirectory(prefix="ui-foundation-project-") as tmp:
        if archive.namelist() != list(expected) or archive.testzip() is not None:
            raise ValueError("Foundation ZIP 文件清单或 CRC 不一致")
        root = Path(tmp)
        for name, data in expected.items():
            actual = archive.read(name)
            if actual != data:
                raise ValueError("Foundation ZIP 内容不一致：" + name)
            if name not in GENERATED:
                path = root / name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(actual)
        subprocess.run(["node", "scripts/build-tokens.mjs"], cwd=root, check=True, timeout=30)
        subprocess.run(["node", "scripts/check.mjs"], cwd=root, check=True, timeout=30)
        for name in GENERATED:
            if (root / name).read_bytes() != expected[name]:
                raise ValueError("离线重新生成结果不一致：" + name)
    print("Foundation 源码工程 ZIP 内容、离线构建和 Token 检查通过")

if __name__ == "__main__":
    if len(sys.argv) != 2 or sys.argv[1] not in ("--build", "--verify"):
        raise SystemExit("用法：python scripts/build-foundation-project.py --build|--verify")
    (build if sys.argv[1] == "--build" else verify)()
