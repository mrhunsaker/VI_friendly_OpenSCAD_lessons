# PS-Pre: Your First Terminal — Screen Reader Navigation Fundamentals

**Duration:** 30-45 minutes  
**Prerequisites:** None — this is the starting point  
**Accessibility Note:** This lesson is designed specifically for screen reader users (NVDA, JAWS)

---

## What is a Terminal?

A terminal (also called a command line or shell) is a text-based interface where you type commands instead of clicking buttons. Think of it like sending written instructions to your computer instead of pointing and clicking.

**Why learn this?**
- Faster and more precise work (especially for 3D printing scripts and automation)
- Essential for programming and using tools like OpenSCAD
- Accessibility: Many command line tools work perfectly with screen readers
- Scripting: Automate repetitive tasks

---

## Part 1: Opening PowerShell for the First Time

### On Windows

**Method 1: Search (Easiest)**
1. Press the **Windows key** alone
2. You should hear "Search"
3. Type: `PowerShell`
4. You'll hear search results appear
5. Press **Enter** to open the first result (Windows PowerShell)
6. PowerShell will open in a new window

**Method 2: Using the Start Menu**
1. Press **Windows key + X** (opens the Quick Link menu)
2. Look for "Windows PowerShell" or "Terminal"
3. Press **Enter**

**Method 3: From File Explorer**
1. Open File Explorer
2. Navigate to any folder
3. In the menu bar, select "File" → "Open Windows PowerShell here"
4. PowerShell opens in that folder location

### First Connection: Understanding the Prompt

When PowerShell opens, your screen reader will announce the window title and then the **prompt**. The prompt is where you type commands.

**What you'll hear:**
```
PS C:\Users\YourName>
```

**What this means:**
- `PS` = "PowerShell" indicator
- `C:\Users\YourName` = Your current location (the "path")
- `>` = The prompt is ready for your input

**Important:** Your cursor is blinking right after the `>`. This is where you type.

---

## Part 2: Your First Commands (Screen Reader Edition)

### Command 1: "Where Am I?" — `pwd`

**What it does:** Tells you your current location

**Type this:**
```powershell
pwd
```

**Press Enter**

**What you'll hear:**
Your screen reader will announce the current path, something like:
```
C:\Users\YourName
```

**Understanding paths:**
- Paths show your location in the file system (like a mailing address)
- Windows paths use backslashes: `C:\Users\YourName\Documents`
- Think of it like folders inside folders: `C:\` (main drive) → `Users` → `YourName` → `Documents`

### Command 2: "What's Here?" — `ls -n`

**What it does:** Lists all files and folders in your current location. The `-n` flag makes it screen-reader friendly (names only, one per line)

**Type this:**
```powershell
ls -n
```

**Press Enter**

**What you'll hear:**
Your screen reader will announce each file and folder name, one per line:
```
Desktop
Documents
Downloads
Music
Pictures
...
```

**Why `-n`?**
- Without `-n`, PowerShell shows files in columns (hard to read with a screen reader)
- With `-n`, each file/folder is on its own line (perfect for screen readers)

### Command 3: "Go There" — `cd Documents`

**What it does:** Changes your location (navigates to a folder)

**Type this:**
```powershell
cd Documents
```

**Press Enter**

**What you'll hear:**
The prompt changes to show your new location. You might hear something like:
```
PS C:\Users\YourName\Documents>
```

**Practice navigation:**
1. Run `pwd` to confirm you're in Documents
2. Run `ls -n` to see what files are in Documents
3. Try going back: `cd ..` (the `..` means "go up one level")
4. Run `pwd` again to confirm
5. Go back to Documents: `cd Documents`

---

## Part 3: Reading Screen Reader Output (Critical Skills)

### Dealing with Long Lists

When you run `ls -n` in a folder with many files, the list might be very long. Your screen reader might announce 50+ items rapidly.

**Solution 1: Save to a File**
```powershell
ls -n > list.txt
notepad.exe list.txt
```

This saves the list to a file and opens it in Notepad where you can read it more slowly.

**Solution 2: Search Within the Output**
```powershell
ls -n | findstr "search-term"
```

Example: If you're looking for files containing "scad", type:
```powershell
ls -n | findstr "scad"
```

### Navigating Tab Completion

One of the most powerful screen reader tricks is **Tab completion**:

**How it works:**
1. Type the first few letters of a folder or file name
2. Press **Tab**
3. PowerShell automatically completes the rest

**Example:**
1. You're in `C:\Users\YourName>`
2. Type: `cd Doc`
3. Press **Tab**
4. PowerShell auto-completes it to: `cd Documents`
5. Press **Enter** to go there

**With a screen reader:**
1. As you type `Doc`, your screen reader announces each letter
2. When you press Tab, PowerShell types the rest and your screen reader announces the full command
3. This is much faster than typing the whole thing

---

## Part 4: Creating and Editing Files

### Create a Simple File

**Type this:**
```powershell
echo "Hello, PowerShell!" > hello.txt
```

**What this does:**
- `echo` sends text to the screen (or file)
- `"Hello, PowerShell!"` is the text
- `>` redirects it to a file called `hello.txt`

### Read the File Back

**Type this:**
```powershell
cat hello.txt
```

**What you'll hear:**
Your screen reader announces:
```
Hello, PowerShell!
```

### Open and Edit the File

**Type this:**
```powershell
notepad.exe hello.txt
```

This opens the file in Notepad where you can edit it with your screen reader.

---

## Part 5: Essential Keyboard Shortcuts

These work in PowerShell and are crucial for screen reader users:

| Key Combination | What It Does |
|---|---|
| **Up Arrow** | Shows your previous command (press again to go further back) |
| **Down Arrow** | Shows your next command (if you went back) |
| **Tab** | Auto-completes folder/file names |
| **Ctrl+C** | Stops a running command |
| **Ctrl+L** | Clears the screen |
| **Enter** | Runs the command |

**Screen reader tip:** These all work perfectly with your screen reader. Try them!

---

## Part 6: Screen Reader-Specific Tips

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
1. Make sure your cursor is at the prompt (try pressing **End** or **Ctrl+End**)
2. Use **Up Arrow** to go back to your previous command and review it
3. Try redirecting to a file: `command > output.txt` then open the file
4. In NVDA: Try pressing **NVDA+F7** to open the Review Mode viewer

---

## Part 7: Practice Exercises

Complete these in order. Take your time with each one:

### Exercise 1: Basic Navigation
1. Open PowerShell
2. Run `pwd` and note your location
3. Run `ls -n` and listen to what's there
4. Try `cd Documents` or another folder
5. Run `pwd` to confirm your new location
6. Run `ls -n` in this new location

**Goal:** You should be comfortable knowing where you are and what's around you

### Exercise 2: Using Tab Completion
1. In your home directory, type `cd D` (just the letter D)
2. Press **Tab**
3. PowerShell should auto-complete to a folder starting with D
4. Repeat with other folder names
5. Try typing a longer name: `cd Down` and Tab to `Downloads`

**Goal:** Tab completion should feel natural

### Exercise 3: Creating and Viewing Files
1. Create a file: `echo "Test content" > test.txt`
2. View it: `cat test.txt`
3. Create another: `echo "Line 2" > another.txt`
4. List both: `ls -n`

**Goal:** You understand create, view, and list operations

### Exercise 4: Going Up Levels
1. Navigate into several folders: `cd Documents`, then `cd folder1`, etc.
2. From deep inside, use `cd ..` multiple times to go back up
3. After each `cd ..`, run `pwd` to confirm your location

**Goal:** You understand relative navigation with `..`

### Exercise 5: Redirecting Output
1. Create a list: `ls -n > directory_list.txt`
2. Open it: `notepad.exe directory_list.txt`
3. Read it with your screen reader
4. Close Notepad
5. Verify the file exists: `ls -n | findstr "directory"`

**Goal:** You can save long outputs to files for easier reading

---

## Checkpoint Questions

After completing this lesson, you should be able to answer:

1. What does `pwd` do?
2. What does `ls -n` do?
3. Why do we use `-n` with `ls`?
4. What path are you in right now?
5. How do you navigate to a new folder?
6. How do you go up one level?
7. What's the Tab key for?
8. What does `echo "text" > file.txt` do?
9. How do you read a file back?
10. How do you stop a command that's running?

**You should be able to answer all 10 with confidence before moving to PS-0.**

---

## Common Questions

**Q: Do I need to use PowerShell? Can I use Command Prompt (cmd.exe)?**
A: PowerShell is more powerful and works better with modern tools. We recommend PowerShell, but Command Prompt basics are similar.

**Q: Why is my screen reader not reading the output?**
A: This is common. Use `command > file.txt` to save output to a file, then open it with Notepad for reliable reading.

**Q: What if I type something wrong?**
A: Just press **Enter** and you'll see an error message. Type the correct command on the next line. No harm done!

**Q: How do I get help with a command?**
A: Type `Get-Help command-name` (we'll cover this in PS-0)

**Q: Can I make PowerShell more accessible?**
A: Yes! We'll cover customization in PS-5.

---

## Next Steps

Once you're comfortable with these basics:
- Move to **PS-0: Getting Started** for deeper path understanding
- Then continue through PS-1 through PS-5 for full terminal mastery

---

## Resources

- **Microsoft PowerShell Docs:** https://docs.microsoft.com/powershell/
- **NVDA Screen Reader:** https://www.nvaccess.org/
- **JAWS Screen Reader:** https://www.freedomscientific.com/products/software/jaws/
- **Windows Terminal Accessibility:** https://docs.microsoft.com/windows/terminal/

---

## Troubleshooting

| Issue | Solution |
|---|---|
| PowerShell won't open | Try searching Windows, or right-click a folder and select "Open PowerShell here" |
| Can't hear the output | Try redirecting to a file: `command > output.txt` |
| Tab completion not working | Make sure you typed at least one character before pressing Tab |
| Command not found | Make sure you spelled it correctly; try `Get-Command` to see available commands |
| Stuck in a command | Press **Ctrl+C** to stop it |

**Still stuck?** The checkpoint questions and exercises are your best teacher. Work through them multiple times until comfortable.
