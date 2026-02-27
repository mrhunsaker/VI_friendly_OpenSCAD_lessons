#!/usr/bin/env python3
"""
Convert bare http(s) URLs to markdown link form [URL](URL) in .md files.
Skips lines inside fenced code blocks and lines containing HTML <a href or href=.
Creates a backup of each modified file as filename.bak
"""
import re
import sys
from pathlib import Path

URL_RE = re.compile(r"(?P<url>https?://[^\s)\]\">']+)")

root = Path('.').resolve()
md_files = list(root.rglob('*.md'))
modified = []

for p in md_files:
    try:
        text = p.read_text(encoding='utf-8')
    except Exception:
        continue
    lines = text.splitlines()
    out_lines = []
    in_fence = False
    changed = False
    for line in lines:
        # detect fence start/end
        if re.match(r"^\s*```", line):
            in_fence = not in_fence
            out_lines.append(line)
            continue
        if in_fence:
            out_lines.append(line)
            continue
        # skip HTML link lines
        if '<a ' in line or 'href="' in line or 'href=\'' in line:
            out_lines.append(line)
            continue
        # skip lines that already contain markdown links with URLs
        if re.search(r"\[[^\]]+\]\(https?://", line):
            out_lines.append(line)
            continue
        # find bare URLs and replace
        def repl(m):
            url = m.group('url')
            # avoid if already in parentheses immediately (part of function call or existing link)
            # simple check: if '(' appears within 3 chars before match, skip
            start = m.start()
            if start >= 1 and line[start-1] == '(':
                return url
            return f'[{url}]({url})'
        new_line = URL_RE.sub(repl, line)
        if new_line != line:
            changed = True
        out_lines.append(new_line)
    if changed:
        bak = p.with_suffix(p.suffix + '.bak')
        p.rename(bak)
        p.write_text('\n'.join(out_lines) + '\n', encoding='utf-8')
        modified.append(str(p))

print(f"Processed {len(md_files)} .md files; modified {len(modified)} files.")
for m in modified:
    print(m)
