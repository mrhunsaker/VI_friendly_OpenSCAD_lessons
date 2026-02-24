# GitBash-1: Navigation - Moving Around Your File System {#gitbash_foundation_gitbash_1_navigation-gitbash_1_navigation}

**Duration:** 1.5-2 hours (for screen reader users)  
**Prerequisites:** GitBash-Pre and GitBash-0  
**Learning Objectives:**
- Navigate confidently to any folder location
- Understand and use relative vs absolute paths
- Use shortcuts to move between common folders
- Organize your file system logically

---

## Core Navigation Commands

### Command: `cd` (Change Directory)

The most important navigation command.

**Basic usage:**
```bash
cd FolderName          # Go into a folder
cd ..                  # Go up one level
cd /                   # Go to root
cd ~                   # Go to home directory
cd -                   # Go to previous directory
```

### Command: `ls` (List Contents)

**What it does:** Shows files and folders in current location

```bash
ls                     # List all
ls -l                  # List with details
ls -la                 # List all including hidden files
ls *.txt               # List only .txt files
```

### Command: `pwd` (Print Working Directory)

**What it does:** Shows current path

```bash
pwd                    # Shows current location
```

---

## Understanding Paths in Git Bash

### Absolute Paths (Full Address)

An absolute path starts from the root and shows the complete location:

```
/c/Users/YourName/Documents/3DPrinting
```

**Breaking it down:**
- `/c/` = The C: drive (root)
- `Users` = First folder
- `YourName` = Your user folder
- `Documents` = Documents folder
- `3DPrinting` = Your 3D printing folder

**To navigate to it:**
```bash
cd /c/Users/YourName/Documents/3DPrinting
```

### Relative Paths (Short Directions)

A relative path is like giving directions from where you are now:

```
cd Documents/3DPrinting
cd ..
cd ../..
```

**Shortcuts:**
- `.` = Current folder
- `..` = Parent folder (up one level)
- `~` = Home folder
- `-` = Previous directory

### Benefits of Relative Paths

- **Shorter to type**
- **Better for portability** (scripts work on different computers)
- **Easy to navigate hierarchies**

---

## Common Navigation Patterns

### Pattern 1: Navigating Down (Into Folders)

```bash
/c/Users/YourName>cd Documents
/c/Users/YourName/Documents>cd 3DModels
/c/Users/YourName/Documents/3DModels>
```

Each `cd FolderName` goes into that folder.

### Pattern 2: Navigating Up (Out of Folders)

```bash
/c/Users/YourName/Documents/3DModels>cd ..
/c/Users/YourName/Documents>cd ..
/c/Users/YourName>cd ..
/c/Users>
```

Each `cd ..` goes up one level.

### Pattern 3: Jumping to a Known Path

```bash
/c/Users/YourName/Documents/DeepFolder/Another/Level>cd /c/Users/YourName
/c/Users/YourName>
```

Type the full path and go there directly.

### Pattern 4: Going Home

```bash
cd ~                   # Go to your home folder (Any location)
cd                     # Also goes to home directory
```

---

## Special Folders and Shortcuts

### Key Directories

```bash
~                      # Your home folder (e.g., /c/Users/YourName)
~/Desktop             # Your Desktop
~/Documents           # Your Documents
~/Downloads           # Your Downloads
/c/Program Files      # Program Files folder
/                     # Root of entire system
```

### Using These Shortcuts

```bash
cd ~/Documents/3DModels
cd ~/Desktop
cd /c/Program Files
```

---

## Tab Completion (Essential Skill!)

Tab completion saves typing and is perfect for screen readers.

**How it works:**

1. Type first few characters of a folder name
2. Press **Tab**
3. Git Bash completes it

### Example: Tab Completion in Action

```
/c/Users/YourName>cd Doc  [then press Tab]
/c/Users/YourName>cd Documents
```

Git Bash filled in the rest. Press **Enter** to go there.

### Tab Completion Tips

- **Screen reader hears the whole completed command**
- **Faster and more accurate** than typing full names
- **Works with file names too**
- **Press Tab multiple times** to cycle through options if multiple matches

---

## Screen Reader Tips for Navigation

### For NVDA Users

When navigating:
1. After each `cd` command, run `pwd` to confirm new location
2. Run `ls | less` to see contents one page at a time
3. Use **NVDA+Down** to read output after commands

### For JAWS Users

When navigating:
1. After each `cd` command, run `pwd` to confirm location
2. Use **Insert+Down Arrow** to read output
3. Use `ls > file.txt` then open in Notepad for complex listings

### Best Practice

Always confirm your location:

```bash
cd FolderName
pwd                    # Run this to verify
```

---

## Practice Exercises

### Exercise 1: Basic Down Navigation

1. Start at home: `cd ~`
2. Run `pwd` to see your location
3. List contents: `ls`
4. Navigate into a folder: `cd Documents`
5. Run `pwd` to confirm
6. List contents: `ls`

**Goal:** Feel comfortable going into folders and confirming location.

### Exercise 2: Using Tab Completion

1. Start at: `cd ~`
2. Type: `cd D` (just that letter)
3. Press **Tab** (let Git Bash complete it)
4. Press **Enter**
5. Run `pwd` to confirm you're in Documents

**Goal:** Tab completion feels natural and fast.

### Exercise 3: Navigating Up

1. Navigate into several folders: `cd Documents`, `cd folder1`, `cd subfolder`, etc.
2. From deep down, run `pwd` to see your full path
3. Use `cd ..` to go up one level
4. Run `pwd` to confirm
5. Repeat `cd ..` several more times

**Goal:** Comfortable moving back up through the hierarchy.

### Exercise 4: Absolute Path Navigation

1. Navigate deep into folders (3+ levels)
2. From there, type: `cd ~` (absolute path to home)
3. Run `pwd` to confirm you're home
4. From home, type the full path to another location you know
5. Navigate there directly

**Goal:** Understand absolute paths work from anywhere.

### Exercise 5: Creating a Navigation Path

1. Create a folder structure:
   ```bash
   mkdir 3DPractice
   cd 3DPractice
   mkdir Models
   cd Models
   mkdir OpenSCAD
   cd OpenSCAD
   ```
2. Run `pwd` at each level
3. Save your location: `pwd > location.txt`
4. Navigate back up using only `cd ..`

**Goal:** Build and navigate your own folder structure.

---

## Checkpoint Questions

After this lesson, you should be able to answer:

1. What's the difference between `cd Documents` and `cd /c/Users/YourName/Documents`?
2. What does `cd ..` do?
3. How do you go directly to your home folder?
4. What's an absolute path? Give an example.
5. What's a relative path? Give an example.
6. How do you confirm your current location?
7. What does Tab completion do?
8. How would you navigate 3 levels deep, then back home?
9. What's the difference between `.` and `..`?
10. If you're lost, what command should you run first?

**Answer all 10 confidently before moving to GitBash-2.**

---

## Extension Problems

1. Create a folder with spaces in the name (e.g., `My Projects`) and navigate to it
2. Use Tab completion to navigate into 5+ levels of folders without typing full paths
3. Create a script that documents your navigation (save `pwd` output at each level)
4. Navigate using absolute paths from different starting locations to the same destination
5. Build a complex folder tree and practice navigating it using only relative paths
6. Create a "favorites" list: document the full paths to folders you use often
7. Time yourself: navigate to 10 different locations using the fastest method possible
8. Create folders named with numbers (01Folder, 02Folder, etc.) and practice Tab completion
9. Navigate to a destination, save the path, navigate away, then navigate back using the saved path
10. Challenge: Navigate to a destination using only relative paths without using `pwd` to check location (navigate "blind")

---

## Common Issues

### "No such file or directory"

**Problem:** `cd FolderName` says the folder doesn't exist

**Solutions:**
1. Check spelling carefully (bash is case-sensitive!)
2. Run `ls` to see correct folder names
3. Use Tab completion instead of typing
4. Use absolute path: `cd /c/Users/YourName/Documents` (get exact path and type it)

### "I'm lost - don't know where I am"

**Solution - Always run this:**
```bash
pwd
```

This shows your current location.

### Tab completion isn't working

**Problem:** You press Tab but nothing happens

**Solutions:**
1. Make sure you typed at least one character
2. Make sure the folder actually exists (run `ls` to check)
3. If multiple matches exist, press Tab again to cycle through them
4. Just type the full name manually if Tab isn't cooperating

---

## Quick Reference - Navigation Commands

```bash
pwd                         # Show current location
cd FolderName               # Go into a folder
cd ..                       # Go up one level
cd ../..                    # Go up two levels
cd /                        # Go to root
cd ~                        # Go to home folder
cd -                        # Go to previous folder
ls                          # List folder contents
ls -l                       # List with details
ls -la                      # List including hidden files
```

---

## Screen Reader Accessibility Notes

- Git Bash output is naturally linear, perfect for screen readers
- Use `ls` for clean, one-per-line listings
- Use `| less` to pause output between screens: `ls | less`
- Save complex listings to files: `ls > output.txt`
- Always run `pwd` after moving to confirm your new location
- Use `notepad.exe filename` to open files for editing

---

## Next Steps

- Complete all practice exercises
- Pass the checkpoint questions
- Move to **GitBash-2: File & Folder Manipulation**

