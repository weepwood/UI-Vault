#!/usr/bin/env python3
"""Build self-hosted, unicode-ranged WOFF2 subsets of LXGW 975 Yuan for UI-Vault.

Dependencies: python -m pip install -r scripts/requirements-fonts.txt
Source is pinned to an immutable upstream Git commit; generated files are NOT committed.
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
import fontTools

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "fonts"
CACHE = ROOT / ".cache" / "fonts" / "975yuan"
UPSTREAM = "37b753f408b25d3ab3d25cbddb5dd9dacca0289a"
BASE = f"https://raw.githubusercontent.com/lxgw/975Yuan/{UPSTREAM}/"
WEIGHTS = {400: "LXGW975YuanSC-400W.ttf", 500: "LXGW975YuanSC-500W.ttf", 700: "LXGW975YuanSC-700W.ttf"}
VERS = f"{fontTools.__version__}/{UPSTREAM}/v2"
LATIN_POINTS = set(range(0x20, 0x250)) | set(range(0x2000, 0x2070)) | set(range(0x20A0, 0x20D0)) | set(range(0x2190, 0x2200))
FILES = [
    ROOT / "index.html",
    *sorted((ROOT / "assets").rglob("*.js")),
    *sorted((ROOT / "content").rglob("*.json")),
    *sorted((ROOT / "catalog" / "assets").glob("*.json")),
]


def text_points() -> set[int]:
    # Dynamic source-based coverage: adding a new project title automatically includes its glyphs.
    return {ord(ch) for path in FILES if path.is_file()
            for ch in path.read_text("utf-8") if ord(ch) > 127}


def common_han() -> set[int]:
    # GB2312 first level: 3,755 everyday Han glyphs, loaded only if needed.
    result = set()
    for lead in range(0xB0, 0xD8):
        for trail in range(0xA1, 0xFF):
            try:
                result.add(ord(bytes((lead, trail)).decode("gb2312")))
            except (UnicodeDecodeError, TypeError):
                continue
    return result


def download(relative: str, target: Path, max_bytes: int) -> bytes:
    if target.is_file() and 0 < target.stat().st_size <= max_bytes:
        return target.read_bytes()
    target.parent.mkdir(parents=True, exist_ok=True)
    url = BASE + relative
    req = urllib.request.Request(url, headers={"User-Agent": "UI-Vault font builder"})
    with urllib.request.urlopen(req, timeout=90) as response:
        payload = response.read(max_bytes + 1)
    if not payload or len(payload) > max_bytes:
        raise RuntimeError(f"Unexpected upstream download size: {relative}")
    target.write_bytes(payload)
    return payload


def ranges(points: set[int]) -> str:
    ordered = sorted(points)
    if not ordered:
        raise RuntimeError("Cannot create an empty unicode-range")
    spans = []
    start = previous = ordered[0]
    for cp in ordered[1:]:
        if cp == previous + 1:
            previous = cp
        else:
            spans.append((start, previous))
            start = previous = cp
    spans.append((start, previous))
    return ", ".join(f"U+{a:04X}" if a == b else f"U+{a:04X}-{b:04X}" for a, b in spans)


def build():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    CACHE.mkdir(parents=True, exist_ok=True)
    license_text = download("OFL.txt", CACHE / "OFL.txt", 20000)
    if b"SIL OPEN FONT LICENSE" not in license_text.upper():
        raise RuntimeError("Upstream license is not the expected OFL text")
    (OUTPUT / "OFL.txt").write_bytes(license_text)

    corpus = text_points()
    signature = hashlib.sha256(
        (VERS + ":" + ",".join(map(str, sorted(corpus)))).encode("utf-8")
    ).hexdigest()[:20]
    meta = OUTPUT / "manifest.json"
    expected = {f"975yuan-{weight}-{name}.woff2" for weight in WEIGHTS for name in ("latin", "ui", "common")}
    if meta.exists():
        try:
            if json.loads(meta.read_text("utf-8")).get("signature") == signature and all((OUTPUT / file).is_file() for file in expected):
                print("975 Yuan subsets cached locally; no rebuild necessary")
                return
        except (ValueError, OSError):
            pass

    # Download only the upstream pinned full font; never ship TTF files in the site.
    latin = LATIN_POINTS
    ui = corpus - latin
    common = common_han() - latin - ui
    css = ["/* LXGW 975 Yuan SC · self-hosted WOFF2 subsets · OFL-1.1 (OFL.txt) */"]
    manifest = {"signature": signature, "upstream": UPSTREAM, "fonts": []}
    total = 0
    for weight, filename in WEIGHTS.items():
        source = CACHE / filename
        data = download("TTF/" + filename, source, 20_000_000)
        if data[:4] not in (b"\x00\x01\x00\x00", b"true", b"OTTO"):
            raise RuntimeError("Unexpected TTF header for " + filename)
        font = TTFont(source, lazy=True)
        available = set(font.getBestCmap())
        font.close()
        for name, requested in (("latin", latin), ("ui", ui), ("common", common)):
            chars = requested & available
            if not chars:
                raise RuntimeError(f"Missing glyphs in {filename}/{name}")
            result_name = f"975yuan-{weight}-{name}.woff2"
            result_path = OUTPUT / result_name
            original = TTFont(source)
            options = subset.Options()
            options.flavor = "woff2"
            options.recalc_timestamp = False
            subsetter = subset.Subsetter(options=options)
            subsetter.populate(unicodes=chars)
            subsetter.subset(original)
            original.flavor = "woff2"
            original.save(result_path)
            original.close()
            with TTFont(result_path) as verified:
                if verified.flavor != "woff2" or not chars.issubset(verified.getBestCmap()):
                    raise RuntimeError("Bad WOFF2 subset " + result_name)
            length = result_path.stat().st_size
            total += length
            css.append(f'''@font-face {{
  font-family: "975 Yuan";
  src: url("./{result_name}") format("woff2");
  font-style: normal;
  font-weight: {400 if weight == 400 else 500 if weight == 500 else 650} {499 if weight == 400 else 649 if weight == 500 else 900};
  font-display: swap;
  unicode-range: {ranges(chars)};
}}''')
            manifest["fonts"].append({"file": result_name, "bytes": length, "glyphs": len(chars), "weight": weight, "group": name})
            print(f"  {result_name}: {length / 1024:.1f} KiB / {len(chars)} codepoints")
    (OUTPUT / "975-yuan.css").write_text("\n".join(css) + "\n", "utf-8")
    meta.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"975 Yuan WOFF2 total {total / (1024 * 1024):.2f} MiB across 9 lazy subsets; originals are excluded")
    if total > 12_000_000:
        raise RuntimeError("Generated subsets exceed the 12MB size safety limit")


if __name__ == "__main__":
    try:
        build()
    except Exception as exc:
        print(f"Font build failed: {exc}", file=sys.stderr)
        sys.exit(1)
