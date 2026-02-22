#!/usr/bin/env python3
"""
Comprehensive markdown link verification for mdbook
"""
import os
import re
from pathlib import Path
from collections import defaultdict

srcdir = Path('/var/home/ryhunsaker/Documents/3dprintinstructionalresources/VIfriendlyOpenSCADlessons/my-book/src')

# Pattern to find markdown links: [text](url)
linkpattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

brokenlinks = []
externallinks = []
alllinks = defaultdict(list)

# Walk through all markdown files
for mdfile in sorted(srcdir.rglob('*.md')):
    relativepath = mdfile.relativeto(srcdir)
    
    with open(mdfile, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    for linenum, line in enumerate(lines, 1):
        for match in linkpattern.finditer(line):
            text = match.group(1)
            url = match.group(2)
            
            # Skip image links and similar
            if url.endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
                continue
            
            alllinks[str(relativepath)].append((linenum, text, url))
            
            # Check external links
            if url.startswith(('http://', 'https://')):
                externallinks.append({
                    'file': str(relativepath),
                    'line': linenum,
                    'url': url
                })
                continue
            
            # Skip mailto and pure anchors
            if url.startswith(('mailto:', '#')):
                continue
            
            # Check if it's a relative file link
            if not url.startswith(('http://', 'https://')):
                # Handle fragment links
                baseurl = url.split('#')[0] if '#' in url else url
                
                if baseurl:  # Only check if there's a base path
                    targetpath = (mdfile.parent / baseurl).resolve()
                    
                    if not targetpath.exists():
                        brokenlinks.append({
                            'file': str(relativepath),
                            'line': linenum,
                            'text': text,
                            'url': url,
                            'resolvedpath': str(targetpath.relativeto(srcdir.parent)),
                            'fromdir': str(mdfile.parent.relativeto(srcdir))
                        })

print("=" * 80)
print("MARKDOWN LINK VERIFICATION REPORT FOR MDBOOK")
print("=" * 80)
print(f"\nTotal markdown files checked: {len(alllinks)}")
totallinks = sum(len(links) for links in alllinks.values())
print(f"Total links found: {totallinks}")
print(f"External links (http/https): {len(externallinks)}")
print(f"Broken relative links: {len(brokenlinks)}")

if brokenlinks:
    print(f"\n❌ BROKEN LINKS FOUND: {len(brokenlinks)}\n")
    for i, linkinfo in enumerate(brokenlinks, 1):
        print(f"{i}. File: {linkinfo['file']}:{linkinfo['line']}")
        print(f"   Link text: [{linkinfo['text']}]")
        print(f"   URL: {linkinfo['url']}")
        print(f"   From directory: {linkinfo['fromdir']}")
        print(f"   Attempted resolution: {linkinfo['resolvedpath']}")
        print()
else:
    print("\n✅ All relative links are valid!")

print("\n" + "=" * 80)
print("EXTERNAL LINKS TO VERIFY")
print("=" * 80)
print(f"\nFound {len(externallinks)} external links (not verified for validity):\n")
for linkinfo in externallinks[:10]:  # Show first 10
    print(f"  {linkinfo['file']}:{linkinfo['line']}")
    print(f"    {linkinfo['url']}")

if len(externallinks) > 10:
    print(f"\n  ... and {len(externallinks) - 10} more external links")

print("\n" + "=" * 80)
