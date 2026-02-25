#!/usr/bin/env python3
"""
Strip blank lines inside fenced code blocks for specific languages
Usage: python3 scripts/strip_blank_lines_in_codeblocks.py [root]
Default root: my-book/src
"""
import sys
from pathlib import Path
import re

target_langs = {"openscad","powershell","dos","cmd","batch","plaintext","dos/cmd/batch"}

root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("my-book/src")
if not root.exists():
    print(f"Root not found: {root}")
    sys.exit(1)

md_files = list(root.rglob("*.md"))
print(f"Found {len(md_files)} markdown files under {root}")

fence_re = re.compile(r'^(?P<indent>\s*)```(?P<lang>[^\s]*)')
closing_re = re.compile(r'^\s*```\s*$')

modified_count = 0
for p in md_files:
    s = p.read_text(encoding='utf-8')
    lines = s.splitlines(keepends=True)
    out = []
    in_fence = False
    for i, line in enumerate(lines):
        if not in_fence:
            m = fence_re.match(line)
            if m:
                lang = m.group('lang').lower()
                # normalize common forms like dos/cmd/batch
                lang_norm = lang
                if lang_norm in target_langs or any(lang_norm == t for t in target_langs):
                    # enter fence if language matches any target (exact match)
                    if lang_norm in target_langs:
                        in_fence = True
                        out.append(line)
                        continue
                # Some fences may be like "dos/cmd/batch" or "cmd\n"; check split
                if '/' in lang_norm and any(part in target_langs for part in lang_norm.split('/')):
                    in_fence = True
                    out.append(line)
                    continue
            out.append(line)
        else:
            # inside a target fence
            if closing_re.match(line):
                in_fence = False
                out.append(line)
            else:
                # drop blank lines
                if line.strip() == '':
                    # skip
                    continue
                else:
                    out.append(line)
    new = ''.join(out)
    if new != s:
        p.write_text(new, encoding='utf-8')
        modified_count += 1
        print(f"Updated: {p}")

print(f"Modified {modified_count} files.")
