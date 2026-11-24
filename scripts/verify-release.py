#!/usr/bin/env python3
"""真实 Pages 发布校验：同一次 CI 产物和生产文件字节一致后才允许 Release。"""
import hashlib
import os
import sys
import time
from pathlib import Path
from urllib.request import Request, urlopen

ORIGIN = "https://weepwood.github.io/UI-Vault/"
FILES = ("index.html", "content/assets.json", "registry/index.json", "downloads/notion-design-demo.zip")

def main():
    root = Path(sys.argv[1])
    commit = os.environ["GITHUB_SHA"]
    for attempt in range(1, 7):
        try:
            for name in FILES:
                expected = hashlib.sha256((root / name).read_bytes()).hexdigest()
                request = Request(ORIGIN + name + "?release=" + commit + "&attempt=" + str(attempt),
                                  headers={"Cache-Control": "no-cache", "User-Agent": "UI-Vault-Release-CI"})
                with urlopen(request, timeout=30) as response:
                    if response.status != 200:
                        raise RuntimeError(f"{name}: HTTP {response.status}")
                    actual = hashlib.sha256(response.read()).hexdigest()
                if actual != expected:
                    raise RuntimeError(f"{name}: 线上内容与本次部署产物不一致")
                print(f"生产校验通过：{name} {actual}", flush=True)
            return
        except (OSError, RuntimeError) as error:
            print(f"生产校验第 {attempt} 次未通过：{error}", flush=True)
            if attempt == 6:
                raise
            time.sleep(10)
if __name__ == "__main__":
    main()
