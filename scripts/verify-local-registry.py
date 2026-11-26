"""Explicit local/private integration check. Requires existing Playwright + Chromium."""
import hashlib
import json
import os
from pathlib import Path
import socket
import subprocess
import time
import urllib.request
from urllib.error import HTTPError
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parent.parent
DATA = Path(os.environ["UI_VAULT_DATA"]).resolve()
DIST = ROOT / "dist"
with socket.socket() as sock:
    sock.bind(("127.0.0.1", 0))
    port = sock.getsockname()[1]
base = f"http://127.0.0.1:{port}"
def get(path, headers=None):
    with urllib.request.urlopen(urllib.request.Request(base + path, headers=headers or {}), timeout=5) as r:
        return r.read()
def rejected(path, headers=None, expected=403):
    try:
        get(path, headers)
    except HTTPError as exc:
        assert exc.code == expected, (path, exc.code)
    else:
        raise AssertionError("private route not rejected")
public = json.loads((DIST / "content/assets.json").read_text())
hashes = {p.name for p in (DATA / "workspace/blobs").iterdir() if p.is_file()}
evidence = DATA / "evidence"
if evidence.exists():
    hashes.update(hashlib.sha256(p.read_bytes()).hexdigest() for p in evidence.glob("*.png"))
live_index=DATA/"runtime-v2/verified.json"
if live_index.exists():
    live_rows=json.loads(live_index.read_text())
    hashes.update(r["sha256"] for r in live_rows)
    hashes.update(r["validation"]["sha256"] for r in live_rows)
    hashes.update(r["sha256"] for r in json.loads((DATA/"runtime-v2/differences.json").read_text()))
    trial=DATA/"reuse-trial/index.json"
    if trial.exists(): hashes.update(r["sha256"] for r in json.loads(trial.read_text()))
for path in DIST.rglob("*"):
    if path.is_file():
        assert path.name not in hashes
        assert hashlib.sha256(path.read_bytes()).hexdigest() not in hashes, f"private blob in dist: {path}"
assert not any(a.get("privateSnapshot") or a["id"].startswith("private-") for a in public)
assert not (DIST / "demos/private-registry").exists()
proc = subprocess.Popen(["node", "scripts/serve-local.mjs"], cwd=ROOT, env={**os.environ, "PORT": str(port)}, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
try:
    for _ in range(50):
        try:
            assets = json.loads(get("/content/assets.json"))
            break
        except OSError:
            if proc.poll() is not None:
                raise RuntimeError(proc.stdout.read().decode())
            time.sleep(.1)
    else:
        raise RuntimeError("server not ready")
    private = [a for a in assets if a.get("privateSnapshot")]
    assert len(assets) == len(public) + len(private) and len(private) == 10
    assert all(not a["copyable"] for a in private)
    assert all(a in assets for a in public)
    route = "/demos/private-registry/private-mrr-data-table/index.html"
    rejected("/content/assets.json", {"Sec-Fetch-Site": "cross-site"})
    rejected(route, {"Sec-Fetch-Site": "same-site"})
    rejected(route, {"Host": "evil.example"})
    rejected("/workspace/pilot-index.json", expected=404)
    rejected("/demos/private-registry/unknown/index.html", expected=404)
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 960})
        page.goto(base + "/?asset=private-mrr-data-table", wait_until="domcontentloaded")
        expect(page.locator("h1#preview-title")).to_have_text("MRR · 数据表格", timeout=15000)
        for selector in ("#sidebar", "#project-panel", "#main"):
            expect(page.locator(selector)).to_be_visible()
        frame = page.frame_locator("iframe.live-frame")
        expect(frame.get_by_role("heading", name="MRR · 数据表格")).to_be_visible(timeout=10000)
        expect(frame.get_by_text("历史修订 · 2 份项目快照")).to_be_visible()
        expect(frame.get_by_text("未验证完整依赖与交付；本页不是实时组件运行预览。", exact=False)).to_be_visible()
        expect(page.locator("#preview-github")).to_be_hidden()
        expect(page.locator("iframe.live-frame")).not_to_have_attribute("sandbox", __import__("re").compile("allow-same-origin"))
        page.screenshot(path=str(DATA / "mrr-archive-preview.png"))
        page.locator("#preview-search").click()
        page.locator("#compact-search-input").fill("TODO 日期选择器")
        result = page.get_by_role("option").filter(has_text="TODO · 日期选择器")
        # Global search result buttons may expose a role=option.
        if result.count() == 0:
            result = page.locator("#compact-search-results button").filter(has_text="TODO · 日期选择器")
        expect(result.first).to_be_visible(timeout=10000)
        result.first.click()
        expect(page.locator("h1#preview-title")).to_have_text("TODO · 日期选择器")
        frame = page.frame_locator("iframe.live-frame")
        expect(frame.get_by_role("heading", name="TODO · 日期选择器")).to_be_visible()
        page.screenshot(path=str(DATA / "todo-archive-preview.png"))
        if (evidence / "index.json").is_file():
            for asset in ("private-mrr-pagination", "private-todo-smart-select"):
                page.goto(base + "/?asset=" + asset, wait_until="domcontentloaded")
                frame = page.frame_locator("iframe.live-frame")
                expect(frame.get_by_role("heading", name="真实隔离组件运行证据")).to_be_visible(timeout=15000)
                image = frame.get_by_alt_text("真实组件隔离测试截图")
                expect(image).to_be_visible()
                assert image.evaluate("(img) => img.complete && img.naturalWidth > 0")
        if live_index.exists():
            page.goto(base+"/?asset=private-todo-smart-select",wait_until="domcontentloaded")
            frame=page.frame_locator("iframe.live-frame")
            expect(frame.get_by_role("heading",name="固定环境历史视觉证据")).to_be_visible()
            expect(frame.get_by_role("heading",name="跨项目复用候选证据")).to_be_visible()
            page.get_by_role("button",name="选择资产预览：历史与源码").click()
            page.locator("#private-view-listbox").get_by_role("option").filter(has_text="6d73408").click()
            expect(frame.get_by_text("公共组件展厅",exact=True)).to_be_visible(timeout=15000)
            expect(page.locator("iframe.live-frame")).not_to_have_attribute("sandbox", __import__("re").compile("allow-same-origin"))
            path=page.locator("iframe.live-frame").get_attribute("data-preview-url").removeprefix(base)
            rejected(path,{"Sec-Fetch-Site":"cross-site"})
            with urllib.request.urlopen(base+path) as r:
                csp=r.headers["Content-Security-Policy"]
                assert "script-src 'sha256-" in csp and "connect-src 'none'" in csp and "form-action 'none'" in csp
            page.get_by_role("button",name=__import__("re").compile("选择资产预览：6d73408")).click()
            page.locator("#private-view-listbox").get_by_role("option",name="历史与源码").click()
            expect(frame.get_by_role("heading",name="固定环境历史视觉证据")).to_be_visible()
            page.locator("#preview-info").click()
            expect(page.get_by_role("heading",name="同类设计研究")).to_be_visible()
            page.get_by_role("button",name="Workbench UI 组件展厅 · 设计参考候选").click()
            expect(page.locator("h1#preview-title")).to_have_text("Workbench UI 组件展厅")
        page.goto(base+"/?asset=ui-foundation-kit",wait_until="domcontentloaded")
        expect(page.locator("h1#preview-title")).not_to_have_text("TODO · 日期选择器")
        expect(page.locator("iframe.live-frame")).to_be_visible(timeout=15000)
        browser.close()
    print(json.dumps({"public": len(public), "private": len(private), "blobHashesExcluded": len(hashes), "browser": "Chromium", "result": "passed"}, ensure_ascii=False))
finally:
    proc.terminate()
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        proc.kill()
        proc.wait()
