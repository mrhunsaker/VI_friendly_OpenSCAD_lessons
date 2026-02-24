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
        "my-book/src/assets/3dMake_Foundation/Lessons_3dMake_6/README.md",
        "my-book/src/3dMake_Foundation/Appendix_B_Material_Properties.md",
        "my-book/src/3dMake_Foundation/3dMakeIntro/3dMakeIntro.md",
        "my-book/src/3dMake_Foundation/3dMakeTutorial/3dMakeTutorial.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_1/Lessons_3dMake_1.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_2/Lessons_3dMake_2.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_3/Lessons_3dMake_3.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_4/Lessons_3dMake_4.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_7/Lessons_3dMake_7.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_9/Lessons_3dMake_9.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_10/Lessons_3dMake_10.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_11/Lessons_3dMake_11.md",
        "my-book/src/3dMake_Foundation/3dMakeFinalExam.md",
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

if __name__ == "__main__":
    main()
