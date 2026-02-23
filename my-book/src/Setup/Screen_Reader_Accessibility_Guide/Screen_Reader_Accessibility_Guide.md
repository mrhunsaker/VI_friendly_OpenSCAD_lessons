# Screen Reader Accessibility Guide for Command-Line Terminals

**Target Users:** NVDA, JAWS, and other screen reader users using PowerShell, CMD, or Git Bash  
**Last Updated:** 2026

This guide is used throughout the Command-Line Foundation curriculum (PowerShell, CMD, and Git Bash pathways) to help screen reader users navigate and work efficiently with the terminal.

---

## Table of Contents

1. [Which Terminal Should I Use?](#which-terminal)
2. [Getting Started with Screen Readers](#getting-started)
3. [NVDA-Specific Tips](#nvda-tips)
4. [JAWS-Specific Tips](#jaws-tips)
5. [General Terminal Accessibility](#general-terminal)
6. [Working with Long Output](#long-output)
7. [Keyboard Shortcuts Reference](#shortcuts)
8. [Shell-Specific Differences](#shell-differences)
9. [Troubleshooting](#troubleshooting)

---

## Which Terminal Should I Use? {#which-terminal}

All three command-line shells (PowerShell, CMD, Git Bash) work equally well with screen readers. Choose the one that best fits your setup:

| Feature                   | PowerShell           | CMD                    | Git Bash                     |
|---------------------------|----------------------|------------------------|------------------------------|
| **Platform**              | Windows only         | Windows only           | Windows, macOS, Linux        |
| **Screen Reader Support** | Excellent            | Excellent              | Excellent                    |
| **Learning Curve**        | Moderate             | Gentle                 | Moderate-Steep               |
| **Use Case**              | Modern automation    | Familiar simplicity    | Cross-platform/Git workflows |
| **Recommended For**       | 3D design automation | Getting started easily | Software developers          |

**Key Point:** Choose one pathway and complete it fully. All three teach the same skills and prepare you equally well for 3dMake work. Don't switch mid-curriculum.

---

## Getting Started with Screen Readers {#getting-started}

### Which Screen Reader Should I Use?

Both NVDA and JAWS work equally well with all three shells (PowerShell, CMD, and Git Bash):

| Feature              | NVDA                   | JAWS                   |
|----------------------|------------------------|------------------------|
| **Cost**             | Free                   | Commercial (paid)      |
| **Installation**     | Simple                 | Complex but thorough   |
| **Terminal Support** | Excellent (all shells) | Excellent (all shells) |
| **Learning Curve**   | Gentle                 | Steeper                |
| **Customization**    | Good                   | Extensive              |

**Recommendation:** Start with NVDA if you're new to screen readers. Both will work perfectly for this curriculum.

### Before You Start

1. Make sure your screen reader is running before opening your terminal
2. Open your terminal (PowerShell, CMD, or Git Bash) and let your screen reader read the title and prompt
3. If you don't hear anything, press **Alt+Tab** to cycle windows and find your terminal
4. Use your screen reader's screen review features to understand the layout

---

## NVDA-Specific Tips {#nvda-tips}

NVDA is free and available from https://www.nvaccess.org/

These tips work across all shells: PowerShell, CMD, and Git Bash.

### Key Commands for Terminals

| Command                    | What It Does                                          |
|----------------------------|-------------------------------------------------------|
| **NVDA+Home**              | Read the current line (your command or output)        |
| **NVDA+Down Arrow**        | Read from cursor to end of screen                     |
| **NVDA+Up Arrow**          | Read from top to cursor                               |
| **NVDA+Page Down**         | Read next page                                        |
| **NVDA+Page Up**           | Read previous page                                    |
| **NVDA+F7**                | Open the Review Mode viewer (can scroll through text) |
| **NVDA+Shift+Right Arrow** | Read next word                                        |
| **NVDA+Shift+Down Arrow**  | Read entire screen                                    |
| **NVDA+End**               | Jump to end of line                                   |
| **NVDA+Home**              | Jump to start of line                                 |

### Example: Reading Long Output

**Scenario:** You ran a command and it listed 50 files. You can't hear them all.

**Solution with NVDA:**
1. After the command finishes, press **NVDA+Home** to read the current line
2. Press **NVDA+Down Arrow** repeatedly to read all output
3. Or press **NVDA+F7** to open Review Mode and use arrow keys to scroll

### NVDA Settings for Terminals

**Enable verbosity for better feedback:**
1. Press **NVDA+Ctrl+V** to open NVDA menu
2. Go to Preferences -> Settings
3. Under "Speech", increase verbosity
4. Look for "Report font changes" and enable it (helps with code)

---

## JAWS-Specific Tips {#jaws-tips}

JAWS is a commercial screen reader available from https://www.freedomscientific.com/

These tips work across all shells: PowerShell, CMD, and Git Bash.

### Key Commands for Terminals

| Command                    | What It Does                    |
|----------------------------|---------------------------------|
| **Insert+Down Arrow**      | Read line by line downward      |
| **Insert+Up Arrow**        | Read line by line upward        |
| **Insert+Page Down**       | Read next page of text          |
| **Insert+Page Up**         | Read previous page of text      |
| **Insert+End**             | Jump to end of text on screen   |
| **Insert+Home**            | Jump to start of text on screen |
| **Insert+Ctrl+Down**       | Read to end of screen           |
| **Insert+Ctrl+Up**         | Read to beginning of screen     |
| **Insert+Shift+Page Down** | Select and read next page       |
| **Insert+F3**              | Open JAWS menu                  |

### Example: Reading Long Output

**Scenario:** You ran a command and saved output to a file.

**Solution with JAWS:**
1. Open the file with your text editor (e.g., `notepad file.txt` in PowerShell, `notepad file.txt` in CMD)
2. In the editor, press **Insert+Ctrl+Down** to hear all content
3. Use **Insert+Down Arrow** to read line by line at your own pace

### JAWS Settings for Terminals

**Enable specific settings for terminals:**
1. Press **Insert+F3** to open JAWS menu
2. Go to "Options" -> "Settings Manager"
3. Search for "terminal" or "console"
4. Enable "Announce output" and "Speak when program speaks"

---

## General Terminal Accessibility {#general-terminal}

### Understanding the Terminal Layout

All terminals (PowerShell, CMD, Git Bash) follow the same basic layout:
1. **Title bar:** Window name (e.g., "Windows PowerShell", "Command Prompt", "Git Bash")
2. **Content area:** Command history and output
3. **Prompt:** The area where you type (e.g., `PS>`, `C:\>`, `$`)

**Your screen reader reads from top to bottom, but focus is at the prompt (bottom).**

### Navigation Sequence

**When you open any terminal:**
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
- Open the file: `notepad output.txt` (works in all shells)
- Read in Notepad (easier for long text)

**Strategy 3: Searching Output**
- Use filtering commands to reduce output
- PowerShell: `command | findstr "pattern"` or `command | Select-String "pattern"`
- CMD: `command | find "pattern"`
- Git Bash: `command | grep "pattern"`

---

## Working with Long Output {#long-output}

This is one of the most common challenges for screen reader users. Here are proven solutions:

### Solution 1: Redirect to a File

**Command:**
```powershell
ls -n > list.txt
```

**Then open:**
```powershell
notepad.exe list.txt
```

**Advantages:**
- Easy to navigate at your own pace
- Works with all screen readers
- Output doesn't scroll away
- You can save it for later

### Solution 2: Use Pagination

**Command:**
```powershell
ls -n | more
```

**How to use:**
- Press **Space** to see next page
- Press **Q** to quit
- **Note:** Some screen readers struggle with `more`, so Solution 1 is preferred

### Solution 3: Filter Output

**Example: Find only .scad files**
```powershell
ls -n | findstr "\.scad"
```

**How it works:**
- `findstr` searches for a pattern
- `\.scad` means "files ending in .scad"
- Only matching items are displayed

### Solution 4: Count Before Displaying

**Command:**
```powershell
(ls -n).Count
```

**What it does:**
- Tells you how many items there are
- Helps you know if you should redirect to file
- If count > 20, probably use file method

---

## Keyboard Shortcuts Reference {#shortcuts}

### All Users (Works in PowerShell regardless of screen reader)

| Key            | Action                             | Why It Matters                   |
|----------------|------------------------------------|----------------------------------|
| **Up Arrow**   | Show previous command              | Repeat commands without retyping |
| **Down Arrow** | Show next command                  | Navigate through history         |
| **Tab**        | Auto-complete                      | Faster than typing full names    |
| **Shift+Tab**  | Cycle backward through completions | If Tab went too far              |
| **Home**       | Jump to start of line              | Edit beginning of command        |
| **End**        | Jump to end of line                | Edit end of command              |
| **Ctrl+A**     | Select all                         | Copy entire command line         |
| **Ctrl+C**     | Stop command                       | Abort long-running tasks         |
| **Ctrl+L**     | Clear screen                       | Start fresh                      |
| **Ctrl+K**     | Clear all                          | (Alternative to Ctrl+L)          |
| **Enter**      | Run command                        | Execute what you typed           |

### Screen Reader Navigation

| Key                    | NVDA Action                       | JAWS Action                       |
|------------------------|-----------------------------------|-----------------------------------|
| **Up/Down**            | Move through line (native)        | Move through line (native)        |
| **Numpad+**            | Start/stop review mode            | (Not needed in JAWS)              |
| **Function+Home**      | Read current line                 | Read current line                 |
| **Function+Page Down** | Read next page                    | Read next page                    |
| **Alt+Tab**            | Switch windows (works in any app) | Switch windows (works in any app) |

---

## Shell-Specific Differences {#shell-differences}

While all three shells work equally well with screen readers, there are some differences in commands and syntax:

### File Listing & Navigation

| Task                 | PowerShell                              | CMD                | Git Bash           |
|----------------------|-----------------------------------------|--------------------|--------------------|
| **List files**       | `ls -n` or `dir`                        | `dir`              | `ls -la`           |
| **Change directory** | `cd path`                               | `cd path`          | `cd path`          |
| **Current location** | `pwd`                                   | `cd` (no args)     | `pwd`              |
| **Create folder**    | `mkdir foldername`                      | `mkdir foldername` | `mkdir foldername` |
| **Delete file**      | `Remove-Item file.txt` or `rm file.txt` | `del file.txt`     | `rm file.txt`      |

### Output Redirection

| Task               | PowerShell                                        | CMD                      | Git Bash                                                      |
|--------------------|---------------------------------------------------|--------------------------|---------------------------------------------------------------|
| **Save to file**   | `command > file.txt`                              | `command > file.txt`     | `command > file.txt`                                          |
| **Append to file** | `command >> file.txt`                             | `command >> file.txt`    | `command >> file.txt`                                         |
| **Filter output**  | `command \| findstr "text"` or `\| Select-String` | `command \| find "text"` | `command \| grep "text"`                                      |
| **Open file**      | `notepad file.txt`                                | `notepad file.txt`       | `notepad file.txt` (Windows) or `nano file.txt` (macOS/Linux) |

### Scripting & Automation

| Feature            | PowerShell                  | CMD             | Git Bash       |
|--------------------|-----------------------------|-----------------|----------------|
| **File extension** | `.ps1`                      | `.bat`          | `.sh`          |
| **Comment**        | `#`                         | `REM`           | `#`            |
| **Variable**       | `$var = value`              | `set var=value` | `var=value`    |
| **Echo text**      | `echo text` or `Write-Host` | `echo text`     | `echo text`    |
| **Conditional**    | `if` statement              | `if` statement  | `if` statement |

### Key Point for Learners

**Choose ONE pathway and stick with it.** Each curriculum (PowerShell, CMD, Git Bash) teaches you the concepts using that specific shell's syntax. The accessibility experience is virtually identical—only the command syntax differs. By the end of your chosen curriculum, you'll understand the principles well enough to adapt to another shell if needed.

---

## Troubleshooting {#troubleshooting}

### Problem 1: "I Can't Hear the Output After Running a Command"

**Causes & Solutions:**

1. **Cursor not at prompt**
   - Solution: Press **End** or **Ctrl+End** to go to the end of text
   - Then use **Up Arrow** or screen reader commands to review

2. **Output scrolled off-screen**
   - Solution: Redirect to file: `command > output.txt`
   - Then read file: `notepad output.txt`

3. **Screen reader focus on window title, not content**
   - Solution: Press **Tab** or arrow keys to move to the content area
   - Then use screen reader commands to read

4. **Large amount of output overwhelming screen reader**
   - Solution: Use filtering to reduce output
   - PowerShell: `ls -n | findstr "pattern"`
   - CMD: `dir | find "pattern"`
   - Git Bash: `ls -la | grep "pattern"`

### Problem 2: "Tab Completion Isn't Working"

**Causes & Solutions:**

1. **Need at least one character**
   - Wrong: Type `cd` then Tab (won't work without a path)
   - Right: Type `cd D` then Tab

2. **Exact path needed**
   - If folder is "Documents", typing `cd Doc` and Tab works
   - But typing `cd X` won't find "Documents"

3. **Check if item exists**
   - PowerShell: Use `ls -n` to see available items
   - CMD: Use `dir` to see available items
   - Git Bash: Use `ls -la` to see available items
   - Then Tab-complete to them

### Problem 3: "Screen Reader Says 'Access Denied' or 'Permission Denied'"

**Causes & Solutions:**

1. **Need admin rights (Windows)**
   - Close your terminal
   - Right-click the terminal app -> Run as administrator
   - Confirm the UAC prompt

2. **File is in use**
   - Close any programs using the file
   - Try the command again

3. **File path contains spaces**
   - Use quotes: `cd "Program Files"`
   - Or use Tab completion (handles spaces automatically)

### Problem 4: "Command Runs Forever and Won't Stop"

**Solution:** Press **Ctrl+C**

**Examples of long-running commands:**
- `ping google.com` (will ping forever until stopped)
- Connecting to a slow server
- Large file operations

**Always press Ctrl+C when a command seems stuck.**

### Problem 5: "I Need to Edit My Last Command"

**Solutions:**

1. **Press Up Arrow** to show previous command
2. **Use arrow keys** to move through it
3. **Edit** the command as needed
4. **Press Enter** to run the modified version

**Example:**
- You typed: `cd Document` (missing the 's')
- Press Up Arrow to show it again
- Press End to go to the end
- Type `s` to make it `cd Documents`
- Press Enter to run it

### Problem 6: "My Screen Reader Keeps Interrupting"

**Causes & Solutions:**

1. **NVDA verbosity too high**
   - Press **NVDA+Ctrl+V** to open menu
   - Go to Settings -> Speech
   - Lower the verbosity level

2. **Multiple applications speaking**
   - Use **Alt+Tab** to make your terminal the active window
   - Minimize other programs

3. **JAWS reading too fast**
   - Press **Insert+F3** to open JAWS menu
   - Look for "Verbosity" or "Speech Rate" settings
   - Slow down the speech rate

---

## Pro Tips for Efficiency

### 1. Create Shortcuts (Aliases) for Frequently Used Commands

**PowerShell:**
```powershell
Set-Alias -Name la -Value "ls -n -ad"
```

**CMD:** (Create a batch file instead)
```batch
@echo off
echo "Your command here"
```

**Git Bash:**
```bash
alias la='ls -la'
```

Now you can type just `la` instead of the full command.

### 2. Use Command History Effectively

**All shells support Up/Down arrow keys to navigate history.**

PowerShell specific:
```powershell
history
Invoke-History 5  # Runs the 5th command
```

### 3. Redirect Everything to Files for Accessibility

**If a command produces output, save it:**
```
command-name > results.txt
notepad results.txt  # Works in all shells
```

This is always more accessible than reading from terminal.

### 4. Create a README for Yourself

**Create a simple help file (works in all shells):**
```
echo "cd means change directory" > my-notes.txt
echo "ls lists files" >> my-notes.txt
notepad my-notes.txt
```

Come back to it whenever you forget something.

---

## Recommended Workflow

**For every new task:**

1. **Know where you are:** `pwd` (or `cd` with no args in CMD)
2. **See what's around:** `ls -n` (PowerShell), `dir` (CMD), or `ls -la` (Git Bash)
3. **Plan your next step:** Think before typing
4. **Run the command:** Type and press Enter
5. **Check the output:** Use screen reader or redirect to file
6. **Move forward:** Next command or `cd` to next folder

**This workflow keeps you oriented and prevents errors.**

---

## Quick Reference Card

**Print or save this:**

```
EVERY SESSION STARTS WITH:
1. pwd (where am I?)
2. dir/ls (what's here?)
3. cd path (go there)

LONG OUTPUT?
-> command > file.txt
-> notepad file.txt

STUCK?
-> Ctrl+C

WANT TO REPEAT?
-> Up Arrow
-> Command history

NEED HELP?
-> PowerShell: Get-Help command-name
-> CMD: help command-name
-> Bash: man command-name
```

---

## Additional Resources

- **NVDA Documentation:** https://www.nvaccess.org/documentation/
- **JAWS Documentation:** https://www.freedomscientific.com/support/
- **PowerShell Docs:** https://docs.microsoft.com/powershell/
- **CMD Documentation:** https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands-glossary
- **Git Bash Guide:** https://git-scm.com/
- **Accessibility Best Practices:** https://www.w3.org/WAI/

---

## Feedback

This guide is meant to help YOU. If something isn't clear:
- Try a different approach from the "Solutions" sections
- Reach out to instructors with specific questions
- Share what worked for you with classmates

Remember: Using a terminal with a screen reader is absolutely possible. These tools and techniques will help you master it.
