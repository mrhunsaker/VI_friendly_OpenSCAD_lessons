#!/usr/bin/env python3
"""
Verify all markdown links in src/ directory
"""
import os
import re
from pathlib import Path
from collections import defaultdict

srcdir = Path('/var/home/ryhunsaker/Documents/3dprintinstructionalresources/VIfriendlyOpenSCADlessons/my-book/src')

# Pattern to find markdown links: [text](url)
linkpattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

brokenlinks = []
alllinks = defaultdict(list)

# Walk through all markdown files
for mdfile in srcdir.rglob('*.md'):
    relativepath = mdfile.relativeto(srcdir)
    
    with open(mdfile, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    for linenum, line in enumerate(lines, 1):
        for match in linkpattern.finditer(line):
            text = match.group(1)
            url = match.group(2)
            alllinks[str(relativepath)].append((linenum, text, url))
            
            # Check if it's a relative file link (not a URL)
            if not url.startswith(('http://', 'https://', '#', 'mailto:')):
                # Resolve the link relative to the markdown file's directory
                targetpath = (mdfile.parent / url).resolve()
                
                # For fragment links, just check the base file
                if '#' in url:
                    baseurl = url.split('#')[0]
                    targetpath = (mdfile.parent / baseurl).resolve()
                
                if not targetpath.exists():
                    brokenlinks.append({
                        'file': str(relativepath),
                        'line': linenum,
                        'text': text,
                        'url': url,
                        'resolvedpath': str(targetpath),
                        'actualcwd': str(mdfile.parent)
                    })

print("=" * 80)
print("MARKDOWN LINK VERIFICATION REPORT")
print("=" * 80)
print(f"\nTotal markdown files checked: {len(alllinks)}")
print(f"Total links found: {sum(len(links) for links in alllinks.values())}")

if brokenlinks:
    print(f"\n❌ BROKEN LINKS FOUND: {len(brokenlinks)}\n")
    for linkinfo in brokenlinks:
        print(f"File: {linkinfo['file']}:{linkinfo['line']}")
        print(f"  Link text: [{linkinfo['text']}]")
        print(f"  URL: {linkinfo['url']}")
        print(f"  From directory: {linkinfo['actualcwd']}")
        print(f"  Resolves to (not found): {linkinfo['resolvedpath']}")
        print()
else:
    print("\n✅ All links are valid!")

print("\n" + "=" * 80)
print("SUMMARY BY FILE")
print("=" * 80)
for filepath in sorted(alllinks.keys()):
    links = alllinks[filepath]
    print(f"\n{filepath}: {len(links)} link(s)")
    for linenum, text, url in links:
        status = "" if url.startswith(('http://', 'https://', '#', 'mailto:')) else "?"
        print(f"  Line {linenum}: [{text}]({url}) {status}")
