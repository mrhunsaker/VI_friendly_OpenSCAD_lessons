#!/usr/bin/env python3
"""
Remove all non-ASCII Unicode characters from markdown files.
Replaces common Unicode symbols with ASCII equivalents.
"""

import os
import re
from pathlib import Path

# Mapping of Unicode characters to ASCII replacements
UNICODEREPLACEMENTS = {
    # Star ratings and symbols
    '★': '*',
    '✅': '[YES]',
    '❌': '[NO]',
    '🎉': '[celebration]',
    '🔑': '[key]',
    '🎲': '[dice]',
    '📿': '[beads]',
    
    # Arrows
    '→': '->',
    '←': '<-',
    '↓': 'v',
    '↑': '^',
    
    # Dashes and hyphens
    '–': '-',      # en-dash
    '—': '-',      # em-dash
    
    # Mathematical symbols
    '×': 'x',      # multiplication
    '±': '+/-',    # plus-minus
    '°': '',       # degree (remove, context determines it's Celsius)
    '÷': '/',      # division
    
    # Box drawing characters
    '├': '+--',
    '│': '|',
    '└': '+--',
    '─': '--',
    '┌': '+--',
    '┐': '--+',
    '┘': '+--',
    '┤': '-+',
    '├─': '+--',
    '└─': '+--',
    
    # Other common symbols
    '…': '...',    # ellipsis
    '·': '*',      # middle dot
    '–': '-',      # another en-dash encoding
    ''': "'",      # curly single quote
    ''': "'",      # curly single quote
    '"': '"',      # curly double quote
    '"': '"',      # curly double quote
    '•': '-',      # bullet
}

def removeunicodefromfile(filepath):
    """Remove non-ASCII characters from a markdown file."""
    try:
        # Read file
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        originalcontent = content
        
        # Apply replacements in order
        for unicodechar, asciichar in UNICODEREPLACEMENTS.items():
            content = content.replace(unicodechar, asciichar)
        
        # Remove any remaining non-ASCII characters
        content = content.encode('ascii', 'ignore').decode('ascii')
        
        # Write back if changed
        if content != originalcontent:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    basepath = Path("/var/home/ryhunsaker/Documents/3dprintinstructionalresources/VIfriendlyOpenSCADlessons")
    
    # List of files to process
    fileswithunicode = [
        "my-book/src/SUMMARY.md",
        "my-book/src/assets/README.md",
        "my-book/src/assets/3dMakeFoundation/Lessons3dMake6/README.md",
        "my-book/src/3dMakeFoundation/AppendixBMaterialProperties.md",
        "my-book/src/3dMakeFoundation/3dMakeIntro/3dMakeIntro.md",
        "my-book/src/3dMakeFoundation/3dMakeTutorial/3dMakeTutorial.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake1/Lessons3dMake1.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake2/Lessons3dMake2.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake3/Lessons3dMake3.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake4/Lessons3dMake4.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake5/Lessons3dMake5.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake6/Lessons3dMake6.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake7/Lessons3dMake7.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake8/Lessons3dMake8.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake9/Lessons3dMake9.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake10/Lessons3dMake10.md",
        "my-book/src/3dMakeFoundation/Lessons3dMake11/Lessons3dMake11.md",
        "my-book/src/3dMakeFoundation/3dMakeFinalExam.md",
        "my-book/src/README.md",
        "my-book/src/Syllabus.md",
        "README.md",
    ]
    
    # Find all markdown files recursively
    allmdfiles = list(basepath.rglob("*.md"))
    
    modifiedcount = 0
    processedcount = 0
    
    for filepath in allmdfiles:
        if removeunicodefromfile(filepath):
            modifiedcount += 1
        processedcount += 1
        if processedcount % 20 == 0:
            print(f"Processed {processedcount} files...")
    
    print(f"\nComplete!")
    print(f"Total files processed: {processedcount}")
    print(f"Files modified: {modifiedcount}")

if name == "main":
    main()
