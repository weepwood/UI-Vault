"""Local private release gate. Does not publish; launch/operation hangs fail closed."""
import json,os,signal,subprocess,sys,time
from pathlib import Path
ROOT=Path(__file__).resolve().parent.parent
DATA=Path(os.environ["UI_VAULT_DATA"]).resolve()
OUT=Path(os.environ["UI_VAULT_AUDIT_OUTPUT"]).resolve()
assert ROOT not in DATA.parents and DATA not in ROOT.parents and ROOT!=DATA and DATA in OUT.parents
OUT.mkdir(exist_ok=True,parents=True)
def descendants(pid):
    rows=subprocess.check_output(["ps","-axo","pid=,ppid="],text=True).splitlines()
    pairs=[tuple(map(int,r.split())) for r in rows if len(r.split())==2]
    found={pid}
    while True:
        more={child for child,parent in pairs if parent in found}
        if more<=found:return found
        found.update(more)
def run(name,argv,env,timeout):
    start=time.monotonic()
    with (OUT/(name+".log")).open("w") as f:
        p=subprocess.Popen(argv,cwd=ROOT,env=env,stdout=f,stderr=subprocess.STDOUT,start_new_session=True)
        try:status="passed" if p.wait(timeout=timeout)==0 else "failed"
        except subprocess.TimeoutExpired:
            # Browser engines may create a separate process group; terminate only this invocation's tree.
            owned=descendants(p.pid)
            for pid in owned:
                try:os.kill(pid,signal.SIGTERM)
                except ProcessLookupError:pass
            try:p.wait(timeout=5)
            except subprocess.TimeoutExpired:p.kill();p.wait()
            status="timeout"
    print(name,status,round(time.monotonic()-start,2),flush=True)
    return {"name":name,"status":status,"seconds":round(time.monotonic()-start,2),"log":name+".log"}
def main():
    results=[]
    for engine in ("chromium","edge","webkit","firefox"):
        env={**os.environ,"UI_VAULT_BROWSER":engine,"UI_VAULT_AUDIT_OUTPUT":str(OUT/engine),"PYTHONUNBUFFERED":"1"}
        if engine in ("webkit","firefox") and os.environ.get("UI_VAULT_EXTRA_BROWSER_CACHE"):
            env["PLAYWRIGHT_BROWSERS_PATH"]=os.environ["UI_VAULT_EXTRA_BROWSER_CACHE"]
        results.append(run(engine,[sys.executable,"scripts/verify-local-registry.py"],env,45 if engine=="firefox" else 100))
    (OUT/"browser-gate.json").write_text(json.dumps(results,indent=2)+"\n")
    return 0 if all(r["status"]=="passed" for r in results) else 1
if __name__=="__main__":sys.exit(main())
