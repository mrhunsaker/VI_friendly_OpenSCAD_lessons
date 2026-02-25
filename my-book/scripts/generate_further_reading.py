#!/usr/bin/env python3
"""
Scan my-book/src for URLs, deduplicate, sort, and write Backmatter/Further_Reading.md
"""
import re
from pathlib import Path

SRC = Path(__file__).resolve().parents[1] / 'src'
OUT = SRC / 'Backmatter' / 'Further_Reading.md'
BACKUP = OUT.with_suffix('.md.bak')

URL_RE = re.compile(r'https?://[^\s\)\]\"\'<>]+', re.IGNORECASE)

urls = set()
for p in SRC.rglob('*.md'):
    try:
        txt = p.read_text(encoding='utf-8')
    except Exception:
        continue
    for m in URL_RE.findall(txt):
        # strip trailing punctuation
        u = m.rstrip('.,;:!?)')
        urls.add(u)

sorted_urls = sorted(urls, key=lambda s: s.lower())

OUT.parent.mkdir(parents=True, exist_ok=True)
if OUT.exists():
    OUT.replace(BACKUP)

with OUT.open('w', encoding='utf-8') as f:
    f.write('# Further Reading\n\n')
    f.write('Collected external links cited in the book, alphabetical order.\n\n')
    for u in sorted_urls:
        f.write(f'- [{u}]({u})\n')

print(f'Wrote {OUT} with {len(sorted_urls)} unique URLs (backup saved to {BACKUP} if existed).')
