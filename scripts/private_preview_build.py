"""Shared fixed-source preview builder. No dependency installation."""
import hashlib,json,re,subprocess
def git(repo,*args):return subprocess.check_output(["git","-C",repo,*args])
def digest(b):return hashlib.sha256(b).hexdigest()
def save(path,b):
    path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(b if isinstance(b,bytes) else b.encode())
def jsonfile(path,obj):save(path,json.dumps(obj,ensure_ascii=False,indent=2)+"\n")
def copy_closure(repo,commit,base,source,seeds):
    names=set(git(repo,"ls-tree","-r","--name-only",commit,"--",base).decode().splitlines())
    paths={}; edges=[]; pending=list(seeds)
    import_re=re.compile(r"""(?:\bfrom\s*|\bimport\s*(?:\(\s*)?|@import\s*)['"]([^'"]+)['"]""")
    while pending:
        f=pending.pop()
        if f in paths:continue
        original=base+f
        if original not in names or not re.fullmatch(r"[a-zA-Z0-9_./-]+",f) or ".." in f.split("/"):raise RuntimeError("unapproved source "+f)
        entry=git(repo,"ls-tree",commit,"--",original).decode().strip()
        if not re.fullmatch(r"100(?:644|755) blob [a-f0-9]{40}\t"+re.escape(original),entry):raise RuntimeError("not a regular Git blob "+original)
        b=git(repo,"show",commit+":"+original)
        if len(b)>2*1024*1024:raise RuntimeError("oversize source")
        save(source/f,b);paths[f]=digest(b)
        for imp in import_re.findall(b.decode("utf-8")):
            if imp.startswith(("./","../","@/")):
                import posixpath
                stem=posixpath.normpath(imp[2:] if imp.startswith("@/") else posixpath.join(posixpath.dirname(f),imp))
                options=[stem]+[stem+ext for ext in (".js",".jsx",".ts",".tsx",".vue",".css",".json")]+[stem+"/index"+ext for ext in (".js",".jsx",".ts",".vue")]
                found=next((x for x in options if base+x in names),None)
                if found:pending.append(found);edges.append([f,found])
                else:edges.append([f,"unresolved:"+imp])
            else:edges.append([f,"external:"+imp])
    return paths,edges

def build_bundle(folder,version_dir):
    subprocess.run(["node",str(folder/"node_modules/vite/bin/vite.js"),"build","--configLoader","runner"],cwd=folder,check=True)
    dist=folder/"dist"
    html=(dist/"index.html").read_text()
    js=re.findall(r'<script[^>]+src="([^"]+)"[^>]*></script>',html)
    css=re.findall(r'<link[^>]+href="([^"]+)"[^>]*>',html)
    if len(js)!=1 or any(not re.fullmatch(r"/?assets/[A-Za-z0-9_.-]+",x) for x in js+css):raise RuntimeError("unsupported bundle")
    script=(dist/js[0].lstrip("/")).read_text()
    styles="\n".join((dist/x.lstrip("/")).read_text() for x in css)
    # Inline script and CSS, with exact CSP hash; no asset or network requests.
    if re.search(r"</script",script,re.I) or re.search(r"</style",styles,re.I):raise RuntimeError("unsafe inline close tag")
    html='<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+styles+'</style><div id="app"></div><script type="module">'+script+'</script></html>'
    bundle_sha=digest(html.encode())
    sealed=version_dir/("bundle-"+bundle_sha+".html")
    if sealed.exists():
        assert sealed.read_text()==html
    else:
        with sealed.open("x") as f:f.write(html)
    import base64
    scriptHash=base64.b64encode(hashlib.sha256(script.encode()).digest()).decode()
    return sealed,bundle_sha,scriptHash
