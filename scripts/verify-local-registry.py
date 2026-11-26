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
deliveries=DATA/"deliveries"
if deliveries.exists():
    for p in deliveries.iterdir():
        if p.is_dir() and (p/"UI-ASSET-LOCK.json").is_file():
            lock=json.loads((p/"UI-ASSET-LOCK.json").read_text())
            hashes.update(f["sha256"] for f in lock["files"] if f["path"].endswith((".jsx",".js")))
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
    assert len(assets) == len(public) + len(private) and len(private) == len({(p["project"],a["id"]) for p in json.loads((DATA/"workspace/pilot-index.json").read_text()) for v in p["versions"] for a in json.loads((DATA/"workspace/snapshots"/p["project"]/(v["key"]+".json")).read_text())["assets"]})
    assert all(not a["copyable"] for a in private)
    assert all(a in assets for a in public)
    route = "/demos/private-registry/private-mrr-data-table/index.html"
    rejected("/content/assets.json", {"Sec-Fetch-Site": "cross-site"})
    rejected(route, {"Sec-Fetch-Site": "same-site"})
    rejected(route, {"Host": "evil.example"})
    rejected("/workspace/pilot-index.json", expected=404)
    rejected("/demos/private-registry/unknown/index.html", expected=404)
    with sync_playwright() as pw:
        engine=os.environ.get("UI_VAULT_BROWSER","chromium")
        browser = (pw.chromium.launch(channel="msedge") if engine=="edge" else getattr(pw,engine).launch())
        page = browser.new_page(viewport={"width": 1440, "height": 960})
        page.goto(base + "/?asset=private-mrr-data-table", wait_until="domcontentloaded")
        expect(page.locator("h1#preview-title")).to_have_text("MRR · 数据表格", timeout=15000)
        for selector in ("#sidebar", "#project-panel", "#main"):
            expect(page.locator(selector)).to_be_visible()
        frame = page.frame_locator("iframe.live-frame")
        expect(frame.get_by_role("heading", name="MRR · 数据表格")).to_be_visible(timeout=10000)
        expect(frame.get_by_text(__import__("re").compile(r"历史修订 · \d+ 份项目快照"))).to_be_visible()
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
        if live_index.exists() and any(r["kind"]=="isolated-live-component" for r in live_rows):
            page.goto(base+"/?asset=private-mrr-dialog",wait_until="domcontentloaded")
            frame=page.frame_locator("iframe.live-frame")
            expect(frame.get_by_role("heading",name="同类组件视觉研究")).to_be_visible()
            expect(frame.get_by_alt_text("同类资产固定版本截图").first).to_be_visible()
            frame.get_by_role("link",name="同类比较",exact=True).click()
            expect(frame.get_by_role("heading",name="同类组件视觉研究")).to_be_in_viewport()
            page.screenshot(path=str(DATA/("fifth-third-comparison-preview-"+engine+".png")))
            page.goto(base+"/?asset=private-todo-smart-select",wait_until="domcontentloaded")
            frame=page.frame_locator("iframe.live-frame")
            expect(frame.get_by_role("heading",name="私有源码交付候选")).to_be_visible()
            frame.get_by_role("link",name="交付与预检").click()
            expect(frame.get_by_text("版本锁与文件清单")).to_be_visible()
            page.screenshot(path=str(DATA/("fifth-third-delivery-preview-"+engine+".png")))
        if len(private)>=18:
            page.goto(base+"/?asset=private-mrr-dialog",wait_until="domcontentloaded")
            page.get_by_role("button",name="选择资产预览：历史与源码").click()
            page.locator("#private-view-listbox").get_by_role("option",name="并排运行比较").click()
            try:
                expect(page.locator(".private-study-header strong")).to_have_text("同类组件运行比较",timeout=10000)
            except Exception:
                page.screenshot(path=str(DATA/("fourth-comparison-failed-"+engine+".png")))
                print("comparison diagnostic",page.locator("#private-view").get_attribute("value"),page.locator("#preview-title").inner_text(),page.locator("#preview-stage").inner_text()[:500],flush=True)
                raise
            expect(page.locator(".private-study-frame iframe")).to_have_count(2)
            expect(page.locator(".private-study-frame iframe").first).not_to_have_attribute("sandbox", __import__("re").compile("allow-same-origin"))
            for i in range(2):
                frame=page.frame_locator(".private-study-frame iframe").nth(i)
                frame.get_by_role("button",name="打开编辑弹窗").click()
                expect(frame.get_by_role("dialog")).to_be_visible()
                if i==0:
                    frame.get_by_role("button",name="确定").click()
                    expect(frame.locator("#state")).to_have_text("已确认")
                else:
                    frame.get_by_role("dialog").locator("input").fill("合成分组")
                    frame.get_by_role("button",name="保存").click()
                    expect(frame.locator("#state")).to_have_text("合成分组")
            page.screenshot(path=str(DATA/("fifth-fourth-live-comparison-"+engine+".png")))
            page.get_by_role("button",name="选择资产预览：并排运行比较").click()
            page.locator("#private-view-listbox").get_by_role("option",name="项目资产组合").click()
            expect(page.locator(".private-study-header strong")).to_have_text("项目资产组合")
            expect(page.locator(".private-study-frame iframe")).to_have_count(2)
            with page.expect_download() as download:
                page.get_by_role("button",name="下载组合 JSON").click()
            profile=json.loads(open(download.value.path()).read())
            assert profile["project"]=="mrr" and len(profile["composition"])==6 and all(len(s["snapshot"])==64 for s in profile["composition"])
            page.screenshot(path=str(DATA/("fifth-fourth-composition-"+engine+".png")))
            page.set_viewport_size({"width":390,"height":844})
            expect(page.locator(".private-study-header strong")).to_have_text("项目资产组合")
            assert page.locator(".private-study").evaluate("(e)=>e.scrollWidth===e.clientWidth")
            page.set_viewport_size({"width":1440,"height":960})
            page.goto(base+"/?asset=private-mrr-filter-bar",wait_until="domcontentloaded")
            frame=page.frame_locator("iframe.live-frame")
            expect(frame.get_by_text("实际源码差异 · Git diff",exact=True).first).to_be_visible()
            frame.get_by_text("实际源码差异 · Git diff",exact=True).first.click()
            expect(frame.locator("pre").filter(has_text="diff --git").first).to_be_visible()
        if any(a["id"]=="private-frameslice-media-timeline" for a in private):
            page.goto(base+"/?asset=private-frameslice-media-timeline",wait_until="domcontentloaded")
            page.get_by_role("button",name="选择资产预览：历史与源码").click()
            page.locator("#private-view-listbox").get_by_role("option").filter(has_text="a12cee0").click()
            frame=page.frame_locator("iframe.live-frame")
            expect(frame.get_by_role("group",name="交互时间轴")).to_be_visible()
            frame.get_by_role("button",name="放大时间轴").click()
            expect(frame.get_by_text("2×",exact=True)).to_be_visible()
            page.screenshot(path=str(DATA/("fifth-fourth-frameslice-timeline-"+engine+".png")))
            page.goto(base+"/?asset=private-frameslice-caption-workspace",wait_until="domcontentloaded")
            expect(page.frame_locator("iframe.live-frame").get_by_role("heading",name="FRAMESLICE · 字幕工作台")).to_be_visible()
            if next(a for a in private if a["id"]=="private-frameslice-caption-workspace").get("privateViews"):
                page.get_by_role("button",name="选择资产预览：历史与源码").click()
                page.locator("#private-view-listbox").get_by_role("option").filter(has_text="a12cee0").click()
                expect(page.frame_locator("iframe.live-frame").get_by_role("toolbar",name="字幕工作台操作")).to_be_visible(timeout=15000)
            else:assert not next(a for a in private if a["id"]=="private-frameslice-caption-workspace").get("privateViews")
        # Local navigation, existing recipe integration and GET-only version preflight.
        page.goto(base+"/?asset=private-todo-smart-select",wait_until="domcontentloaded")
        page.get_by_role("button",name="筛选真实项目 TODO · 本地项目").click()
        expect(page.get_by_role("button",name="筛选真实项目 TODO · 本地项目")).to_have_attribute("aria-pressed","true")
        expect(page.locator("#gallery .project-item")).to_have_count(10)
        page.get_by_role("button",name="全部资源",exact=True).click()
        expect(page.get_by_role("button",name="筛选真实项目 TODO · 本地项目")).to_have_attribute("aria-pressed","false")
        page.goto(base+"/?asset=private-todo-smart-select",wait_until="domcontentloaded")
        page.get_by_role("button",name="选择资产预览：历史与源码").click()
        page.locator("#private-view-listbox").get_by_role("option",name="版本交付与预检").click()
        expect(page.get_by_role("heading",name="版本交付与预检")).to_be_visible()
        page.get_by_role("textbox",name="已交付目录名").fill("fourth-smart-select")
        page.get_by_role("button",name="检查更新影响").click()
        expect(page.get_by_role("status").filter(has_text="文件预检通过")).to_be_visible(timeout=10000)
        page.get_by_role("textbox",name="新候选目录名").fill("fifth-ui-review-only")
        expect(page.get_by_role("button",name="复制隔离候选命令")).to_be_enabled()
        assert not (DATA/"deliveries/fifth-ui-review-only").exists()
        page.screenshot(path=str(DATA/("fifth-version-"+engine+".png")))
        page.get_by_role("textbox",name="已交付目录名").fill("smart-select-third-conflict")
        page.get_by_role("button",name="检查更新影响").click()
        expect(page.get_by_role("status").filter(has_text="存在冲突")).to_be_visible(timeout=10000)
        assert page.get_by_role("button",name="复制隔离候选命令").count()==0
        snapshot=next(a for a in private if a["id"]=="private-todo-smart-select")["privateDeliveryVersions"][-1]["snapshot"]
        url="/demos/private-registry/private-todo-smart-select/preflight.json?name=fourth-smart-select&snapshot="+snapshot
        rejected(url,{"Sec-Fetch-Site":"cross-site"})
        rejected(url.replace("fourth-smart-select","../escape"),expected=400)
        # The existing public recipe is still the primary asset. Private
        # references are only attached to explicit local composition exports.
        page.goto(base+"/?asset=design-recipe-lab",wait_until="domcontentloaded")
        page.locator("#preview-info").click()
        page.locator("#tab-page-info").click()
        page.get_by_role("button",name="查看 AI 复用证据").click()
        page.locator(".knowledge-composition > summary").click()
        page.get_by_role("button",name="引用 FRAMESLICE 组合").click()
        with page.expect_download() as d:
            page.locator(".knowledge-composition").get_by_role("button",name="下载组合 JSON",exact=True).click()
        comp=json.loads(open(d.value.path()).read())
        assert len(comp["privateReferences"])==5 and all(r["runtime"] for r in comp["privateReferences"])
        assert all(not f["path"].startswith("private-") for f in comp["files"])
        page.locator(".design-plan > summary").click()
        expect(page.get_by_role("button",name="下载设计规范 JSON")).to_be_visible()
        with page.expect_download() as d:
            page.get_by_role("button",name="下载设计规范 JSON",exact=True).click()
        plan=json.loads(open(d.value.path()).read())
        assert plan["composition"]["privateReferences"]==comp["privateReferences"]
        page.get_by_role("textbox",name="设计方案名称").fill("private-test")
        expect(page.get_by_role("button",name="保存设计方案",exact=True)).to_be_disabled()
        assert "private-frameslice" not in page.evaluate("localStorage.getItem('ui-vault:design-plans:v1')||''")
        page.screenshot(path=str(DATA/("fifth-recipe-"+engine+".png")))
        page.goto(base+"/?asset=ui-foundation-kit",wait_until="domcontentloaded")
        expect(page.locator("h1#preview-title")).not_to_have_text("TODO · 日期选择器")
        expect(page.locator("iframe.live-frame")).to_be_visible(timeout=15000)
        browser.close()
    print(json.dumps({"public": len(public), "private": len(private), "blobHashesExcluded": len(hashes), "browser": os.environ.get("UI_VAULT_BROWSER","chromium"), "result": "passed"}, ensure_ascii=False))
finally:
    proc.terminate()
    try:
        proc.wait(timeout=5)
    except subprocess.TimeoutExpired:
        proc.kill()
        proc.wait()
