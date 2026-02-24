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
    '✓': '[YES]',
    '✔': '[YES]',
    '✗': '[NO]',
    '✘': '[NO]',
    '🎉': '[celebration]',
    '🔑': '[key]',
    '🎲': '[dice]',
    '📿': '[beads]',
    
    # Arrows
    '→': '->',
    '←': '<-',
    '↓': 'v',
    '↑': '^',
    '↔': '<->',
    '↕': '|',
    '⇒': '=>',
    '⇐': '<=',
    '⇑': '^',
    '⇓': 'v',
    '⇔': '<=>',
    
    # Dashes and hyphens
    '–': '-',      # en-dash
    '—': '-',      # em-dash
    '―': '-',      # horizontal bar
    
    # Mathematical symbols
    '×': 'x',      # multiplication
    '±': '+/-',    # plus-minus
    '°': '',       # degree (remove, context determines it's Celsius)
    '÷': '/',      # division
    '≥': '>=',     # greater-than-or-equal
    '≤': '<=',     # less-than-or-equal
    '≠': '!=',     # not-equal
    '∑': 'sum',    # summation
    '∏': 'prod',   # product
    '√': 'sqrt',   # square root
    '∞': 'infinity',
    '≈': '~',      # approximately
    '≡': '===',    # identical
    '∫': 'integral',
    '∂': 'd',      # partial derivative
    '∇': 'grad',   # nabla
    '∃': 'exists',
    '∀': 'forall',
    '∈': 'in',
    '∉': 'notin',
    '⊂': 'subset',
    '⊃': 'superset',
    '⊆': 'subseteq',
    '⊇': 'superseteq',
    '∅': 'empty',
    
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
    '“': '"',     # curly double quote
    '”': '"',     # curly double quote
    '‘': "'",     # curly single quote
    '’': "'",     # curly single quote
    '•': '-',      # bullet
    '©': '(c)',
    '®': '(R)',
    '™': '(TM)',
    '§': 'section',
    '¶': 'para',
    '†': '+',
    '‡': '++',
    '‰': 'per mille',
    '€': 'EUR',
    '£': 'GBP',
    '¥': 'JPY',
    '¢': 'cent',
    '¤': 'currency',
    '°': 'deg',
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
    # Use the current working directory as the project root
    basepath = Path(os.getcwd())
    
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
