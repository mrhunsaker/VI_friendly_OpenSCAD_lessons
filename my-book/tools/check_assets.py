#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'src'

LINK_RE = re.compile(r"\(([^)]+assets/[^)]+)\)")

def find_md_files(root):
    return list(root.rglob('*.md'))

def resolve_and_check(md_file):
    text = md_file.read_text(encoding='utf-8')
    missing = []
    for m in LINK_RE.finditer(text):
        raw = m.group(1).strip()
        # ignore absolute URLs
        if raw.startswith('http://') or raw.startswith('https://') or raw.startswith('/assets/'):
            # absolute asset path (from site root) - convert to src/assets
            if raw.startswith('/assets/'):
                candidate = (root_path() / raw.lstrip('/'))
            else:
                continue
        else:
            candidate = (md_file.parent / raw).resolve()
        if not candidate.exists():
            missing.append((raw, str(candidate)))
    return missing

def root_path():
    return Path(__file__).resolve().parents[1]

def main():
    md_files = find_md_files(ROOT)
    total = 0
    all_missing = {}
    for md in md_files:
        missing = resolve_and_check(md)
        if missing:
            all_missing[str(md.relative_to(ROOT))] = missing
            total += len(missing)

    if not all_missing:
        print('OK: no missing asset links found')
        return 0

    print(f'Missing asset links: {total}\n')
    for md, items in all_missing.items():
        print(f'In {md}:')
        for raw, cand in items:
            print(f'  - referenced: {raw}\n    resolved to: {cand}\n')
    return 2

if __name__ == '__main__':
    raise SystemExit(main())
