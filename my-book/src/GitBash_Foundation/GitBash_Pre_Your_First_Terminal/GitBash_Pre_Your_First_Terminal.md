# GitBash-Pre: Your First Terminal - Screen Reader Navigation Fundamentals

**Duration:** 1.5-2 hours (for screen reader users)  
**Prerequisites:** None - this is the starting point  
**Accessibility Note:** This lesson is designed specifically for screen reader users (NVDA, JAWS)  
**Important:** Git Bash uses Unix/bash commands, different from Windows CMD/PowerShell

---

## What is Git Bash?

Git Bash is a Unix/Linux shell running on Windows. It gives you bash commands (same as macOS and Linux) while staying on your Windows computer.

**Why learn this?**
- Faster and more precise work (especially for 3D printing scripts and automation)
- Essential for programming and using tools like OpenSCAD
- Accessibility: Git Bash works perfectly with screen readers
- Transferable: Same commands work on macOS and Linux
- Industry-standard: Professional developers use this everywhere

---

## Part 1: Installing and Opening Git Bash

### Installation (If Not Already Installed)

1. Download from: https://git-scm.com/download/win
2. Run the installer
3. Accept defaults (all options work fine)
4. Installation takes ~5 minutes

### Opening Git Bash

**Method 1: Search (Easiest)**
1. Press the **Windows key** alone
2. You should hear "Search"
3. Type: `Git Bash`
4. You'll hear search results appear
5. Press **Enter** to open

**Method 2: From File Explorer**
1. Open File Explorer
2. Navigate to any folder
3. Right-click on the folder
4. Look for "Git Bash Here"
5. Press **Enter**

### First Connection: Understanding the Prompt

When Git Bash opens, your screen reader will announce the window title and then the **prompt**. 

**What you'll hear (typical example):**
```
user@computer MINGW64 ~
$
```

**What this means:**
- `user` = Your username
- `@computer` = Your computer name
- `MINGW64` = Version of Git Bash
- `~` = Your current location (home directory)
- `$` = The prompt is ready for your input

**Important:** Your cursor is blinking right after the `$`. This is where you type.

---

## Part 2: Your First Commands (Screen Reader Edition)

### Command 1: "Where Am I?" - `pwd`

**What it does:** Tells you your current location

**Type this:**
```bash
pwd
```

**Press Enter**

**What you'll hear:**
Your screen reader will announce the current path, something like:
```
/c/Users/YourName
```

**Understanding paths in Git Bash:**
- Paths use forward slashes: `/c/Users/YourName/Documents`
- `/c/` means the C: drive (Windows drive)
- This is Unix-style, same as macOS and Linux
- Think of it like folders inside folders: `/c/` (main drive) -> `Users` -> `YourName` -> `Documents`

### Command 2: "What's Here?" - `ls`

**What it does:** Lists all files and folders in your current location

**Type this:**
```bash
ls
```

**Press Enter**

**What you'll hear:**
Your screen reader will announce a list of file and folder names, one per line. Perfect for screen readers!

### Command 3: "Go There" - `cd Documents`

**What it does:** Changes your location (navigates to a folder)

**Type this:**
```bash
cd Documents
```

**Press Enter**

**What you'll hear:**
The prompt changes to show your new location. You might hear something like:
```
user@computer MINGW64 ~/Documents
$
```

**Practice navigation:**
1. Run `pwd` to confirm you're in Documents
2. Run `ls` to see what files are in Documents
3. Try going back: `cd ..` (the `..` means "go up one level")
4. Run `pwd` again to confirm
5. Go back to Documents: `cd Documents`

---

## Part 3: Creating and Viewing Files

### Create a Simple File

**Type this:**
```bash
echo "Hello, Git Bash!" > hello.txt
```

**What this does:**
- `echo` sends text to the screen (or file)
- `"Hello, Git Bash!"` is the text
- `>` redirects it to a file called `hello.txt`

### Read the File Back

**Type this:**
```bash
cat hello.txt
```

**What you'll hear:**
Your screen reader announces:
```
Hello, Git Bash!
```

### Open and Edit the File

**Type this:**
```bash
notepad.exe hello.txt
```

This opens the file in Notepad where you can edit it with your screen reader.

---

## Part 4: Essential Keyboard Shortcuts

These work in Git Bash and are crucial for screen reader users:

| Key Combination | What It Does                                                 |
|-----------------|--------------------------------------------------------------|
| **Up Arrow**    | Shows your previous command (press again to go further back) |
| **Down Arrow**  | Shows your next command (if you went back)                   |
| **Tab**         | Auto-completes folder/file names                             |
| **Ctrl+C**      | Stops a running command                                      |
| **Ctrl+L**      | Clears the screen                                            |
| **Ctrl+A**      | Go to beginning of line                                      |
| **Ctrl+E**      | Go to end of line                                            |
| **Enter**       | Runs the command                                             |

**Screen reader tip:** These all work perfectly with your screen reader. Try them!

---

## Part 5: Screen Reader-Specific Tips

### NVDA Users

1. **Reading Command Output:**
   - Use **NVDA+Home** to read the current line
   - Use **NVDA+Down Arrow** to read to the end of the screen
   - Use **NVDA+Page Down** to read the next page

2. **Reviewing Text:**
   - Use **NVDA+Shift+Page Up** to review text above

### JAWS Users

1. **Reading Output:**
   - Use **Insert+Down Arrow** to read line-by-line
   - Use **Insert+Page Down** to read by page
   - Use **Insert+End** to jump to the end of text

2. **Reading All Text:**
   - Use **Insert+Down Arrow** repeatedly
   - Or use **Insert+Ctrl+Down** to read to the end

### Common Issue: "I Can't Hear the Output"

**Problem:** You run a command but don't hear the output

**Solutions:**
1. Make sure your cursor is at the prompt (try pressing **End** or **Ctrl+E**)
2. Use **Up Arrow** to go back to your previous command and review it
3. Try redirecting to a file: `command > output.txt` then open the file
4. In NVDA: Try pressing **NVDA+F7** to open the Review Mode viewer

---

## Part 6: Practice Exercises

Complete these in order. Take your time with each one:

### Exercise 1: Basic Navigation
1. Open Git Bash
2. Run `pwd` and note your location
3. Run `ls` and listen to what's there
4. Try `cd Documents` or another folder
5. Run `pwd` to confirm your new location
6. Run `ls` in this new location

**Goal:** You should be comfortable knowing where you are and what's around you

### Exercise 2: Using Tab Completion
1. In your home directory, type `cd D` (just the letter D)
2. Press **Tab**
3. Git Bash should auto-complete to a folder starting with D
4. Repeat with other folder names
5. Try typing a longer name: `cd Down` and Tab

**Goal:** Tab completion should feel natural

### Exercise 3: Creating and Viewing Files
1. Create a file: `echo "Test content" > test.txt`
2. View it: `cat test.txt`
3. Create another: `echo "Line 2" > another.txt`
4. List both: `ls *.txt`

**Goal:** You understand create, view, and list operations

### Exercise 4: Going Up Levels
1. Navigate into several folders: `cd Documents`, then `cd folder1`, etc.
2. From deep inside, use `cd ..` multiple times to go back up
3. After each `cd ..`, run `pwd` to confirm your location

**Goal:** You understand relative navigation with `..`

### Exercise 5: Redirecting Output
1. Create a list: `ls > directory_list.txt`
2. Open it: `notepad.exe directory_list.txt`
3. Read it with your screen reader
4. Close Notepad
5. Verify the file exists: `ls | grep directory`

**Goal:** You can save long outputs to files for easier reading

---

## Checkpoint Questions

After completing this lesson, you should be able to answer:

1. What does `pwd` do?
2. What does `ls` do?
3. Why do we use `ls` for listings?
4. What path are you in right now?
5. How do you navigate to a new folder?
6. How do you go up one level?
7. What's the Tab key for?
8. What does `echo "text" > file.txt` do?
9. How do you read a file back?
10. How do you stop a command that's running?

**You should be able to answer all 10 with confidence before moving to GitBash-0.**

---

## Common Questions

**Q: Is Git Bash the same as Command Prompt or PowerShell?**
A: No. Git Bash uses Unix/bash commands. CMD and PowerShell use Windows commands. This curriculum teaches bash (Unix) style.

**Q: Why is my screen reader not reading the output?**
A: This is common. Use `command > file.txt` to save output to a file, then open it with Notepad for reliable reading.

**Q: What if I type something wrong?**
A: Just press **Enter** and you'll see an error message. Type the correct command on the next line. No harm done!

**Q: How do I get help with a command?**
A: Type `man command-name` (we'll cover this in GitBash-0)

**Q: Why do paths look different in Git Bash?**
A: Git Bash uses Unix-style paths with forward slashes, not Windows backslashes. Don't worry - you'll get used to it quickly.

---

## Path Comparison: Windows vs Git Bash

| Style        | Example                   | Where Used                        |
|--------------|---------------------------|-----------------------------------|
| **Windows**  | `C:\Users\Name\Documents` | CMD, PowerShell, Windows Explorer |
| **Git Bash** | `/c/Users/Name/Documents` | Git Bash, macOS Terminal, Linux   |

In Git Bash:
- `C:\` becomes `/c/`
- Backslashes `\` become forward slashes `/`
- Otherwise identical

---

## Next Steps

Once you're comfortable with these basics:
- Move to **GitBash-0: Getting Started** for deeper path understanding
- Then continue through GitBash-1 through GitBash-5 for full terminal mastery

---

## Resources

- **Git Bash Installation Guide:** https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- **Bash Basics:** https://www.gnu.org/software/bash/manual/bash.html#Basic-Shell-Features
- **NVDA Screen Reader:** https://www.nvaccess.org/
- **JAWS Screen Reader:** https://www.freedomscientific.com/products/software/jaws/

---

## Troubleshooting

| Issue                      | Solution                                                             |
|----------------------------|----------------------------------------------------------------------|
| Git Bash won't open        | Make sure it's installed; search for "Git Bash" in Start menu        |
| Can't hear the output      | Try redirecting to a file: `command > output.txt`                    |
| Tab completion not working | Make sure you typed at least one character before pressing Tab       |
| Command not found          | Make sure you spelled it correctly; try `man` for available commands |
| Stuck in a command         | Press **Ctrl+C** to stop it                                          |

**Still stuck?** The checkpoint questions and exercises are your best teacher. Work through them multiple times until comfortable.

