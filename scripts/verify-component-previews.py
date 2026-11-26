"""Validate independent fixtures in the real UI-Vault sandbox; retain existing evidence."""
import hashlib,json,os,socket,subprocess,time,urllib.request,datetime,re
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
P=DATA/"runtime-v2"; rows=json.loads((P/"component-candidates.json").read_text())
with socket.socket() as sock:sock.bind(("127.0.0.1",0));port=sock.getsockname()[1]
base=f"http://127.0.0.1:{port}"
proc=subprocess.Popen(["node","scripts/serve-local.mjs"],cwd=ROOT,env={**os.environ,"PORT":str(port),"UI_VAULT_TEST_CANDIDATES":"1"},stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
try:
    for _ in range(100):
        try:urllib.request.urlopen(base+"/content/assets.json",timeout=2).close();break
        except OSError:
            if proc.poll() is not None:raise RuntimeError(proc.stdout.read().decode())
            time.sleep(.1)
    else:raise RuntimeError("server unavailable")
    with sync_playwright() as pw:
        browser=pw.chromium.launch()
        for r in rows:
            aid=r["asset"];asset="private-"+r["project"]+"-"+aid
            context=browser.new_context(viewport={"width":1440,"height":960},device_scale_factor=1,locale="zh-CN",timezone_id="Asia/Tokyo",color_scheme="light",reduced_motion="reduce")
            context.route("**/*",lambda route:route.continue_() if route.request.url.startswith(base+"/") else route.abort())
            page=context.new_page();page.set_default_timeout(8000);page.clock.set_fixed_time(datetime.datetime(2026,11,26,9,0,tzinfo=datetime.timezone.utc))
            errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
            page.goto(base+"/?asset="+asset,wait_until="domcontentloaded")
            page.get_by_role("button",name="选择资产预览：历史与源码").click()
            page.locator("#private-view-listbox").get_by_role("option").filter(has_text=r["commit"][:8]).click()
            frame=page.frame_locator("iframe.live-frame")
            expect(frame.locator(".fixture-stage")).to_be_visible(timeout=15000)
            frame.get_by_label("主题",exact=True).select_option("dark")
            expect(frame.locator("html")).to_have_attribute("data-theme","dark") if r["project"]=="todo" else expect(frame.locator("html")).to_have_class(re.compile("dark"))
            frame.get_by_label("宽度",exact=True).select_option("240")
            expect(frame.locator(".fixture-target")).to_have_css("width","240px")
            frame.get_by_label("宽度",exact=True).select_option("360" if r["project"]=="todo" else "560")
            checks=["原组件真实渲染","主题切换","容器宽度切换"]
            if r["project"]=="frameslice" and aid=="pagination":
                frame.get_by_role("button",name="下一页").click();expect(frame.locator("#state")).to_have_text("当前页 2")
                frame.get_by_role("button",name="上一页").click();expect(frame.get_by_role("button",name="上一页")).to_be_disabled();checks+=["实际分页回调","边界禁用"]
            elif aid=="media-timeline":
                frame.get_by_role("button",name="放大时间轴").click();expect(frame.get_by_text("2×",exact=True)).to_be_visible()
                frame.get_by_role("group",name="交互时间轴").press("ArrowRight");expect(frame.locator("#state")).to_contain_text("10.1")
                frame.get_by_role("button",name="添加关键帧分割点").click();expect(frame.locator("#state")).to_contain_text("切点 1")
                frame.get_by_role("button",name="生成缩略图").click();expect(frame.get_by_role("button",name="取消缩略图")).to_be_visible()
                frame.get_by_role("button",name="取消缩略图").click();checks+=["缩放","键盘定位","切点回调","加载取消"]
            elif aid=="smart-select":
                control=frame.get_by_role("combobox",name="测试选项")
                control.click();expect(frame.get_by_role("option",name="禁用选项")).to_have_attribute("data-disabled","")
                frame.get_by_role("option",name="选项 B").click();expect(frame.locator("#state")).to_have_text("b")
                frame.get_by_label("禁用",exact=True).check();expect(control).to_be_disabled()
                checks+=["选项回调","禁用选项与禁用控件"]
            elif aid=="search-field":
                field=frame.get_by_role("textbox",name="测试搜索");field.fill("alpha")
                expect(frame.locator("#state")).to_have_text("alpha")
                frame.get_by_role("button",name="清除搜索内容").click();expect(field).to_have_value("")
                checks+=["搜索输入回调","清除搜索"]
            elif aid=="number-control":
                frame.get_by_role("button",name="测试数量增加").click();expect(frame.locator("#state")).to_have_text("6")
                frame.get_by_role("spinbutton",name="测试数量").fill("10")
                expect(frame.get_by_role("button",name="测试数量增加")).to_be_disabled()
                frame.get_by_label("禁用",exact=True).check();expect(frame.get_by_role("spinbutton",name="测试数量")).to_be_disabled()
                checks+=["数值步进","边界禁用","控件禁用"]
            elif aid=="segmented":
                frame.get_by_role("button",name="进行中",exact=True).click();expect(frame.locator("#state")).to_have_text("active")
                expect(frame.get_by_role("button",name="进行中",exact=True)).to_have_attribute("aria-pressed","true")
                expect(frame.get_by_role("button",name="禁用",exact=True)).to_be_disabled();checks+=["导航选中状态","禁用项"]
            elif aid=="status-tag":
                expect(frame.locator(".mrr-status-tag")).to_have_class(re.compile("mrr-status-tag--live"))
                frame.get_by_label("状态",exact=True).select_option("failed")
                expect(frame.locator(".mrr-status-tag")).to_have_class(re.compile("mrr-status-tag--danger"))
                checks+=["运行状态","失败状态"]
            elif aid=="date-picker":
                frame.get_by_role("button",name="测试日期",exact=True).click()
                frame.get_by_role("textbox",name="测试日期直接输入").fill("2026-02-30")
                frame.get_by_role("button",name="应用",exact=True).click()
                expect(frame.get_by_text("日期无效，请使用 YYYY-MM-DD")).to_be_visible()
                frame.get_by_role("textbox",name="测试日期直接输入").fill("2026-12-01")
                frame.get_by_role("button",name="应用",exact=True).click()
                expect(frame.locator("#state")).to_have_text("2026-12-01")
                checks+=["非法日期反馈","合法日期提交"]
            elif aid=="time-control":
                field=frame.get_by_role("textbox",name="测试时间",exact=True);field.fill("25:00");expect(field).to_have_attribute("aria-invalid","true");field.fill("14:15")
                expect(frame.locator("#state")).to_have_text("14:15");checks+=["非法时间拒绝","合法时间回调"]
            elif aid=="color-control":
                frame.get_by_role("button",name="测试颜色").click()
                field=frame.get_by_role("textbox",name="十六进制颜色");field.fill("#12");expect(frame.get_by_role("button",name="应用颜色")).to_be_disabled()
                field.fill("#123456");frame.get_by_role("button",name="应用颜色").click();expect(frame.locator("#state")).to_have_text("#123456");checks+=["非法颜色禁止应用","HEX提交"]
            elif aid in ("entity-dialog","dialog"):
                frame.get_by_role("button",name="打开编辑弹窗").click()
                dialog=frame.get_by_role("dialog")
                expect(dialog).to_be_visible()
                if aid=="entity-dialog":
                    expect(dialog.get_by_role("button",name="保存")).to_be_disabled();dialog.locator("input").fill("合成分组");dialog.get_by_role("button",name="保存").click();expect(frame.locator("#state")).to_have_text("合成分组")
                else:
                    dialog.get_by_role("button",name="确定").click();expect(frame.locator("#state")).to_have_text("已确认")
                checks+=["真实弹窗打开及确认回调"]
            elif aid=="pagination":
                frame.locator(".el-pager li.number").filter(has_text="2").first.click();expect(frame.locator("#state")).to_contain_text("当前页 2")
                frame.get_by_label("加载",exact=True).check();expect(frame.locator(".el-pagination .btn-next")).to_be_disabled();checks+=["翻页回调","加载禁用"]
            elif aid=="data-table":
                frame.get_by_role("textbox",name="筛选示例").fill("DEMO-005");frame.get_by_role("button",name="查询示例").click();expect(frame.get_by_text("DEMO-005",exact=True)).to_be_visible();expect(frame.get_by_text("DEMO-001",exact=True)).to_have_count(0);checks+=["原展厅查询及结果变化"]
            elif aid=="filter-bar":
                frame.get_by_role("button",name="高级筛选").click();expect(frame.get_by_text("高级条件示例")).to_be_visible()
                frame.get_by_role("textbox",name="测试筛选").fill("合成条件");frame.get_by_role("button",name="查询",exact=True).click();expect(frame.locator("#state")).to_have_text("合成条件");checks+=["高级筛选展开","查询回调"]
            elif aid=="filter-action":
                control=frame.get_by_role("button",name="查询",exact=True);control.click();expect(frame.locator("#state")).to_have_text("1")
                frame.get_by_label("加载",exact=True).check();expect(control).to_have_attribute("aria-busy","true");checks+=["查询回调","加载反馈"]
            assert not errors,errors
            # Same viewport for evidence; independent fixture is not compared with old gallery.
            page.set_viewport_size({"width":1100,"height":900})
            page.goto(base+"/demos/private-registry/"+asset+"/live/"+r["snapshot"]+".html",wait_until="networkidle")
            expect(page.locator(".fixture-stage")).to_be_visible()
            png=page.screenshot(animations="disabled");image_sha=hashlib.sha256(png).hexdigest();image=P/r["project"]/r["commit"]/("historical-"+image_sha+".png")
            if not image.exists():image.write_bytes(png)
            page.set_viewport_size({"width":390,"height":844});page.get_by_label("主题",exact=True).select_option("dark")
            expect(page.locator(".fixture-stage")).to_be_visible()
            # Some real controls (wide tables/pagination) require a scrollable host; do not claim no overflow.
            narrow=page.evaluate("({viewport:innerWidth,document:document.documentElement.scrollWidth})")
            assert not errors,errors
            r["validation"]={"status":"passed","browser":browser.version,"viewport":[1100,900],"deviceScaleFactor":1,"locale":"zh-CN","timezone":"Asia/Tokyo","checks":checks,"image":str(image.relative_to(DATA)),"sha256":image_sha,"narrow":narrow}
            print(asset,checks,narrow,flush=True);context.close()
        browser.close()
    # Preserve previous verified gallery rows; replace only the exact new asset/snapshot identities.
    old=json.loads((P/"verified.json").read_text())
    keys={(r["project"],r["asset"],r["snapshot"]) for r in rows}
    result=[r for r in old if (r["project"],r["asset"],r["snapshot"]) not in keys]+rows
    tmp=P/"verified-components.tmp";tmp.write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n");tmp.replace(P/"verified.json")
    print("verified",len(rows),"independent",len(result),"total",flush=True)
finally:
    proc.terminate();proc.wait(timeout=5)
