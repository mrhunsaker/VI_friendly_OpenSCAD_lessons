# PS-0: Getting Started — Layout, Paths, and the Shell

**Duration:** 1 class period
**Prerequisite:** None — this is the first PowerShell lesson

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Launch PowerShell on Windows
- Understand what a path is and how paths are structured
- Use `~`, `./`, and `../` as path shortcuts
- Use Tab autocomplete to navigate paths
- Read and navigate the PowerShell shell with a screen reader

---

## Launching PowerShell

**Method 1:** Press `Windows + X`, then select **Windows PowerShell** or **Terminal**

**Method 2:** Press the `Windows` key, type `powershell`, and press `Enter`

When PowerShell opens, your screen reader will announce:
- A copyright header
- A note if a screen reader is detected
- Your current location (your home directory)

You are now in a **command-line shell** — a text-based interface to your computer.

---

## What Is a Path?

A **path** is an address to a file or folder on your computer. It works like a URL for your local files.

Example path: `C:\Users\YourName\Documents\OpenSCAD_Projects\`

Paths are read left to right, from the broadest location (the drive) to the most specific (the file or folder). Each level is separated by a backslash `\` on Windows, or a forward slash `/` (both work in PowerShell).

### Path Shortcuts

| Shortcut | What It Means |
|---------|--------------|
| `~` | Your home directory (`C:\Users\YourName`) |
| `./` | The current directory you are in right now |
| `../` | The directory one level up from where you are |
| `C:\` | The root of the C drive |

### Why Shortcuts Matter

Without shortcuts, navigating to your Documents folder looks like:
```
C:\Users\YourName\Documents
```

With shortcuts, it looks like:
```
~/Documents
```

---

## Tab Autocomplete

PowerShell can finish typing a path for you. Type the first few letters of a folder name and press `Tab`. PowerShell will complete the name.

**Try it:**
```
cd ~/D
```
Then press `Tab`. PowerShell will complete to the first folder in your home directory that starts with D (probably Desktop or Documents). Press `Tab` again to cycle to the next match.

**Notes on autocomplete:**
- If a folder name has spaces, PowerShell wraps it in quotes automatically: `"My Documents"`
- If you type nothing and press `Tab`, it cycles through everything in the current directory
- `Shift + Tab` cycles backward through matches

---

## Shell Layout

When you type a command and press `Enter`, PowerShell runs it and prints the output below. Then it shows a new prompt on the next line, waiting for your next command.

The prompt looks like:
```
PS C:\Users\YourName>
```

The `PS` means PowerShell. The path after it shows where you currently are. The `>` means the shell is ready for input.

### Command History

- `Up Arrow` — recall the previous command you typed
- `Down Arrow` — move forward through history
- This is very useful for repeating or slightly modifying a recent command

---

## Screen Reader Notes

### NVDA

- The shell output is read automatically as it appears
- Use `Up Arrow` in the console to re-read recent output line by line
- If output stops being read, click in the terminal window once to refocus

### JAWS

- JAWS reads shell output as it appears
- Use `JAWS Key + Up Arrow` to re-read the current line
- If JAWS enters Virtual mode in the terminal, press `JAWS Key + Z` to toggle it off
- `Alt + Tab` to switch between PowerShell and other windows

---

## Practice

Try each of the following and listen to the output:

```powershell
# Print your current location
pwd

# Go to your home directory
cd ~

# Go up one level from home (to the Users folder)
cd ../

# Go back to home
cd ~

# Use Tab to autocomplete — type this and press Tab before Enter
cd ~/D
```

---

## Check for Understanding

Answer these before moving on:

1. What is a path?
2. What does `~` represent?
3. What key do you press to autocomplete a path?
4. If you are in `C:\Users\YourName\Documents` and you type `cd ../`, where do you end up?
