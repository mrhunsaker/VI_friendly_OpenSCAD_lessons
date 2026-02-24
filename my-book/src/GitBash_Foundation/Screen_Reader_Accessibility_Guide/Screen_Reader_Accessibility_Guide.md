
# Screen Reader Accessibility Guide for Git Bash

**Target Users:** NVDA, JAWS, and other screen reader users  
**Last Updated:** 2026

This guide is used throughout the Git Bash Foundation curriculum to help screen reader users navigate and work efficiently with the terminal.

---

## Table of Contents

1. [Getting Started with Screen Readers](#getting-started)
2. [NVDA-Specific Tips](#nvda-tips)
3. [JAWS-Specific Tips](#jaws-tips)
4. [General Terminal Accessibility](#general-terminal)
5. [Working with Long Output](#long-output)
6. [Keyboard Shortcuts Reference](#shortcuts)
7. [Troubleshooting](#troubleshooting)

---

## Getting Started with Screen Readers

### Which Screen Reader Should I Use?

Both NVDA and JAWS work well with Git Bash, but they have different strengths:

| Feature | NVDA | JAWS |
|---|---|---|
| **Cost** | Free | Commercial (paid) |
| **Installation** | Simple | Complex but thorough |
| **Git Bash Support** | Excellent | Excellent |
| **Learning Curve** | Gentle | Steeper |
| **Customization** | Good | Extensive |

**Recommendation:** Start with NVDA if you're new to screen readers. Both will work for this curriculum.

### Before You Start

1. Make sure your screen reader is running before opening Git Bash
2. Open Git Bash and let your screen reader read the window title and prompt
3. If you don't hear anything, press **Alt+Tab** to cycle windows and find Git Bash
4. Use your screen reader's screen review features to understand the layout

### What is Git Bash?

Git Bash is a terminal application for Windows that provides a Unix-style command-line experience (Bash shell). It is installed as part of **Git for Windows**, which is free software available at https://git-scm.com/. When you open Git Bash, you get the same `bash`, `ls`, `grep`, `cat`, and other Unix tools used on Linux and macOS - but running on your Windows computer.

---

## NVDA-Specific Tips

NVDA is free and available from https://www.nvaccess.org/

### Key Commands for Git Bash

| Command | What It Does |
|---|---|
| **NVDA+Home** | Read the current line (your command or output) |
| **NVDA+Down Arrow** | Read from cursor to end of screen |
| **NVDA+Up Arrow** | Read from top to cursor |
| **NVDA+Page Down** | Read next page |
| **NVDA+Page Up** | Read previous page |
| **NVDA+F7** | Open the Review Mode viewer (can scroll through text) |
| **NVDA+Shift+Right Arrow** | Read next word |
| **NVDA+Shift+Down Arrow** | Read entire screen |
| **NVDA+End** | Jump to end of line |
| **NVDA+Home** | Jump to start of line |

### Example: Reading Long Output

**Scenario:** You ran `ls` and it listed 50 files.

**Solution with NVDA:**
1. After the command finishes, press **NVDA+Home** to read the current line
2. Press **NVDA+Down Arrow** repeatedly to read all output
3. Or press **NVDA+F7** to open Review Mode and use arrow keys to scroll

### Tip: Use `ls -1` for Screen Reader Friendly Listings

By default, `ls` in Git Bash may display files in columns. Use `ls -1` (the number one, not the letter L) to display one file per line - much easier to follow with a screen reader.

---

## JAWS-Specific Tips

JAWS is a commercial screen reader available from https://www.freedomscientific.com/

### Key Commands for Git Bash

| Command | What It Does |
|---|---|
| **Insert+Down Arrow** | Read line by line downward |
| **Insert+Up Arrow** | Read line by line upward |
| **Insert+Page Down** | Read next page of text |
| **Insert+Page Up** | Read previous page of text |
| **Insert+End** | Jump to end of text on screen |
| **Insert+Home** | Jump to start of text on screen |
| **Insert+Ctrl+Down** | Read to end of screen |
| **Insert+Ctrl+Up** | Read to beginning of screen |
| **Insert+F3** | Open JAWS menu |

### Example: Reading Long Output

**Scenario:** You ran `ls > list.txt` and saved output to a file.

**Solution with JAWS:**
1. Open the file: `notepad list.txt`
2. In Notepad, press **Insert+Ctrl+Down** to hear all content
3. Use **Insert+Down Arrow** to read line by line at your own pace

---

## General Terminal Accessibility

### Understanding the Git Bash Layout

The Git Bash window contains:
1. **Title bar:** Window name (e.g., "MINGW64:/c/Users/YourName")
2. **Content area:** Command history and output
3. **Prompt:** Where you type (e.g., `YourName@COMPUTER MINGW64 ~$`)

**Your screen reader reads from top to bottom, but focus is at the prompt (bottom).**

### The Git Bash Prompt

The default Git Bash prompt looks like:
```
YourName@COMPUTERNAME MINGW64 ~/Documents
$
```

- `YourName` = your Windows username
- `COMPUTERNAME` = your computer's name
- `MINGW64` = the environment type (64-bit)
- `~/Documents` = your current location
- `$` = ready for input

**Note:** Paths in Git Bash use forward slashes (`/`) and your Windows `C:\Users\YourName` folder appears as `/c/Users/YourName` or simply `~`.

### Navigation Sequence

**When you open Git Bash:**
1. Your screen reader announces the window title
2. Then it announces the prompt line
3. Anything before the prompt is previous output
4. Anything after the prompt is where new output will appear

### Reading Output Effectively

**Strategy 1: Immediate Output (Small Amount)**
- Run a command
- Your screen reader announces output immediately
- This works well for short outputs (a few lines)

**Strategy 2: Large Output (Many Lines)**
- Redirect to a file: `command > output.txt`
- Open the file: `notepad output.txt`
- Read in Notepad (easier for long text)

**Strategy 3: Searching Output**
- Use `grep` to filter:
  ```bash
  ls | grep "pattern"
  ```
- Only results matching "pattern" are shown

---

## Working with Long Output

### Solution 1: Redirect to a File

```bash
ls -1 > list.txt
notepad list.txt
```

### Solution 2: Use Pagination

```bash
ls | less
```

- Press **Space** to see next page
- Press **Q** to quit
- **Note:** Some screen readers struggle with `less`, so Solution 1 is preferred

### Solution 3: Filter Output

```bash
ls | grep "\.scad"
```

### Solution 4: Count Before Displaying

```bash
ls | wc -l
```

Tells you how many items there are. If the count is over 20, use the file method.

---

## Keyboard Shortcuts Reference

### All Users (Works in Git Bash Regardless of Screen Reader)

| Key | Action |
|---|---|
| **Up Arrow** | Show previous command |
| **Down Arrow** | Show next command |
| **Tab** | Auto-complete file/folder names |
| **Shift+Tab** | Cycle backward through completions |
| **Home** | Jump to start of line |
| **End** | Jump to end of line |
| **Ctrl+A** | Jump to start of line (alternate) |
| **Ctrl+E** | Jump to end of line (alternate) |
| **Ctrl+C** | Stop command |
| **Ctrl+L** | Clear screen |
| **Enter** | Run command |
| **Ctrl+R** | Search command history interactively |

---

## Troubleshooting

### Problem 1: "I Can't Hear the Output After Running a Command"

1. **Redirect to file:** `command > output.txt` then `notepad output.txt`
2. **Press End** or **Ctrl+End** to go to end of text
3. **Use Up Arrow** to review previous command

### Problem 2: "Tab Completion Isn't Working"

1. **Need at least one character** - type `cd D` then Tab (not just `cd` then Tab)
2. **Check if item exists** - use `ls` first to see available items
3. **Multiple matches** - press Tab twice to list all options

### Problem 3: "'Command Not Found' Error"

1. Check spelling carefully
2. Git Bash uses Unix commands: use `ls` not `dir`, use `cat` not `type`
3. Verify the program is installed and in your PATH: `which openscad`

### Problem 4: "Paths Look Weird"

Git Bash converts Windows paths to Unix style:
- Windows: `C:\Users\YourName\Documents`
- Git Bash: `/c/Users/YourName/Documents` or `~/Documents`

Both refer to the same location. When opening files in Windows apps (like Notepad), you may need to use the Windows path format.

### Problem 5: "Command Runs Forever and Won't Stop"

Press **Ctrl+C**

### Problem 6: "I Need to Edit My Last Command"

1. Press **Up Arrow** to show previous command
2. Use **arrow keys** to move through it
3. Edit the command
4. Press **Enter** to run the modified version

---

## Pro Tips for Efficiency

### 1. Use `ls -1` for Screen Reader Friendly Listings

```bash
ls -1
```

One file per line - much easier to follow with a screen reader.

### 2. Create Aliases for Frequently Used Commands

```bash
alias la='ls -1a'
```

Add this to your `~/.bashrc` file to make it permanent.

### 3. Use Command History Effectively

```bash
history
```

Run a previous command by number:
```bash
!5
```
(Runs the 5th command in history)

Or search history interactively:
```bash
# Press Ctrl+R then type part of a previous command
```

### 4. Redirect Everything to Files for Accessibility

```bash
command-name > results.txt
notepad results.txt
```

### 5. Create a README for Yourself

```bash
echo "ls -1 means list files one per line (screen reader friendly)" > my-notes.txt
echo "cd means change directory" >> my-notes.txt
notepad my-notes.txt
```

---

## Recommended Workflow

**For every new task:**

1. **Know where you are:** `pwd`
2. **See what's around:** `ls -1`
3. **Plan your next step:** Think before typing
4. **Run the command:** Type and press Enter
5. **Check the output:** Use screen reader or redirect to file
6. **Move forward:** Next command or `cd` to next folder

---

## Quick Reference Card

```
EVERY COMMAND STARTS WITH:
1. pwd (where am I?)
2. ls -1 (what's here?)
3. cd path (go there)

LONG OUTPUT?
-> command > file.txt
-> notepad file.txt

STUCK?
-> Ctrl+C

WANT TO REPEAT?
-> Up Arrow
-> history

NEED HELP?
-> man command-name  (or: command --help)
```

---

## Additional Resources

- **NVDA Documentation:** https://www.nvaccess.org/documentation/
- **JAWS Documentation:** https://www.freedomscientific.com/support/
- **Git for Windows (includes Git Bash):** https://git-scm.com/
- **Bash Manual:** https://www.gnu.org/software/bash/manual/
