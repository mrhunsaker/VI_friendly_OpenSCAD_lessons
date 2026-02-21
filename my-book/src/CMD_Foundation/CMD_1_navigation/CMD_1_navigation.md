# CMD-1: Navigation - Moving Around Your File System

**Duration:** 30-45 minutes  
**Prerequisites:** CMD-Pre and CMD-0  
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
```cmd
cd FolderName          :: Go into a folder
cd ..                  :: Go up one level
cd \                   :: Go to root of C: drive
cd %USERPROFILE%       :: Go to home directory
```

### Command: `dir /B` (List Contents)

**What it does:** Shows files and folders in current location

```cmd
dir /B                 :: List all (screen-reader friendly)
dir /B /A:D            :: List only directories/folders
dir /B /A:F            :: List only files
```

### Command: `pwd` equivalent - Just run `cd`

```cmd
cd                     :: Shows current path
```

---

## Understanding Paths

### Absolute Paths (Full Address)

An absolute path starts from the root and shows the complete location:

```
C:\Users\YourName\Documents\3D_Printing
```

**Breaking it down:**
- `C:\` = The hard drive (C drive, root)
- `Users` = First folder
- `YourName` = Your user folder
- `Documents` = Documents folder
- `3D_Printing` = Your 3D printing folder

**To navigate to it:**
```cmd
cd C:\Users\YourName\Documents\3D_Printing
```

### Relative Paths (Short Directions)

A relative path is like giving directions from where you are now:

```
cd Documents\3D_Printing
cd ..
cd ..\..
```

**Shortcuts:**
- `.` = Current folder
- `..` = Parent folder (up one level)
- `~` = Home folder (in Command Prompt: use `%USERPROFILE%`)

### Benefits of Relative Paths

- **Shorter to type**
- **Better for portability** (scripts work on different computers)
- **Easy to navigate hierarchies**

---

## Common Navigation Patterns

### Pattern 1: Navigating Down (Into Folders)

```cmd
C:\>cd Users
C:\Users>cd YourName
C:\Users\YourName>cd Documents
C:\Users\YourName\Documents>
```

Each `cd FolderName` goes into that folder.

### Pattern 2: Navigating Up (Out of Folders)

```cmd
C:\Users\YourName\Documents>cd ..
C:\Users\YourName>cd ..
C:\Users>cd ..
C:\>
```

Each `cd ..` goes up one level.

### Pattern 3: Jumping to a Known Path

```cmd
C:\Users\YourName\Documents\DeepFolder\Another\Level>cd C:\Users\YourName
C:\Users\YourName>
```

Type the full path and go there directly.

### Pattern 4: Going Home

```cmd
cd %USERPROFILE%          :: Go to your home folder (Any location)
```

---

## Special Folders and Shortcuts

### Key Directories

```cmd
%USERPROFILE%            :: Your home folder (e.g., C:\Users\YourName)
%USERPROFILE%\Desktop    :: Your Desktop
%USERPROFILE%\Documents  :: Your Documents
%USERPROFILE%\Downloads  :: Your Downloads
%ProgramFiles%           :: Program Files folder
C:\                      :: Root of C: drive
```

### Using These Shortcuts

```cmd
cd %USERPROFILE%\Documents\3D_Models
cd %USERPROFILE%\Desktop
```

---

## Tab Completion (Essential Skill!)

Tab completion saves typing and is perfect for screen readers.

**How it works:**

1. Type first few characters of a folder name
2. Press **Tab**
3. Command Prompt completes it

### Example: Tab Completion in Action

```
C:\Users\YourName>cd Doc  [then press Tab]
C:\Users\YourName>cd Documents
```

Command Prompt filled in the rest. Press **Enter** to go there.

### Tab Completion Tips

- **Screen reader hears the whole completed command**
- **Faster and more accurate** than typing full names
- **Works with file names too**
- **Press Tab multiple times** to cycle through options if multiple matches

---

## Screen Reader Tips for Navigation

### For NVDA Users

When navigating:
1. After each `cd` command, run `cd` to confirm new location
2. Run `dir /B | more` to see contents one page at a time
3. Use **NVDA+Down** to read output after commands

### For JAWS Users

When navigating:
1. After each `cd` command, run `cd` to confirm location
2. Use **Insert+Down Arrow** to read output
3. Use `dir /B > file.txt` then open in Notepad for complex listings

### Best Practice

Always confirm your location:

```cmd
cd FolderName
cd                        :: Run this to verify
```

---

## Practice Exercises

### Exercise 1: Basic Down Navigation

1. Start at home: `cd %USERPROFILE%`
2. Run `cd` to see your location
3. List contents: `dir /B`
4. Navigate into a folder: `cd Documents`
5. Run `cd` to confirm
6. List contents: `dir /B`

**Goal:** Feel comfortable going into folders and confirming location.

### Exercise 2: Using Tab Completion

1. Start at: `cd %USERPROFILE%`
2. Type: `cd Doc` (just those letters)
3. Press **Tab** (let Command Prompt complete it)
4. Press **Enter**
5. Run `cd` to confirm you're in Documents

**Goal:** Tab completion feels natural and fast.

### Exercise 3: Navigating Up

1. Navigate into several folders: `cd Documents`, `cd folder1`, `cd subfolder`, etc.
2. From deep down, run `cd` to see your full path
3. Use `cd ..` to go up one level
4. Run `cd` to confirm
5. Repeat `cd ..` several more times

**Goal:** Comfortable moving back up through the hierarchy.

### Exercise 4: Absolute Path Navigation

1. Navigate deep into folders (3+ levels)
2. From there, type: `cd %USERPROFILE%` (absolute path)
3. Run `cd` to confirm you're home
4. From home, type the full path to another location you know
5. Navigate there directly

**Goal:** Understand absolute paths work from anywhere.

### Exercise 5: Creating a Navigation Path

1. Create a folder structure:
   ```cmd
   mkdir 3D_Practice
   cd 3D_Practice
   mkdir Models
   cd Models
   mkdir OpenSCAD
   cd OpenSCAD
   ```
2. Run `cd` at each level
3. Save your location: `cd > location.txt`
4. Navigate back up using only `cd ..`

**Goal:** Build and navigate your own folder structure.

---

## Checkpoint Questions

After this lesson, you should be able to answer:

1. What's the difference between `cd Documents` and `cd \`?
2. What does `cd ..` do?
3. How do you go directly to your home folder?
4. What's an absolute path? Give an example.
5. What's a relative path? Give an example.
6. How do you confirm your current location?
7. What does Tab completion do?
8. How would you navigate 3 levels deep, then back home?
9. What's the difference between `.` and `..`?
10. If you're lost, what command should you run first?

**Answer all 10 confidently before moving to CMD-2.**

---

## Extension Problems

1. Create a folder with spaces in the name (e.g., `My Projects`) and navigate to it
2. Use Tab completion to navigate into 5+ levels of folders without typing full paths
3. Create a script that documents your navigation (save `cd` output at each level)
4. Navigate using absolute paths from different starting locations to the same destination
5. Build a complex folder tree and practice navigating it using only relative paths
6. Create a "favorites" list: document the full paths to folders you use often
7. Time yourself: navigate to 10 different locations using the fastest method possible
8. Create folders named with numbers (01_Folder, 02_Folder, etc.) and practice Tab completion
9. Navigate to a folder, save the path, navigate away, then navigate back using the saved path
10. Challenge: Navigate to a destination using only relative paths without using `cd` alone to check location (navigate "blind")

---

## Common Issues

### "Can't find the path specified"

**Problem:** `cd FolderName` says the folder doesn't exist

**Solutions:**
1. Check spelling (Command Prompt is not case-sensitive, but spelling matters)
2. Run `dir /B` to see correct folder names
3. Use Tab completion instead of typing
4. Use absolute path: `cd C:\Users\YourName\Documents` (get the exact path and type it)

### "I'm lost - don't know where I am"

**Solution - Always run this:**
```cmd
cd
```

This shows your current location.

### Tab completion isn't working

**Problem:** You press Tab but nothing happens

**Solutions:**
1. Make sure you typed at least one character
2. Make sure the folder actually exists (run `dir /B` to check)
3. If multiple matches exist, press Tab again to cycle to the next one
4. Just type the full name manually if Tab isn't cooperating

---

## Quick Reference - Navigation Commands

```cmd
cd                         :: Show current location
cd FolderName              :: Go into a folder
cd ..                      :: Go up one level
cd ..\..                   :: Go up two levels
cd \                       :: Go to drive root
cd %USERPROFILE%           :: Go to home folder
dir /B                     :: List folder contents
dir /B /A:D                :: List only folders
dir /B /A:F                :: List only files
```

---

## Screen Reader Accessibility Notes

- Command Prompt output is naturally linear, perfect for screen readers
- Use `dir /B` for clean, one-per-line listings
- Use `| more` to pause output between screens: `dir /B | more`
- Save complex listings to files: `dir /B > output.txt`
- Always run `cd` after moving to confirm your new location

---

## Next Steps

- Complete all practice exercises
- Pass the checkpoint questions
- Move to **CMD-2: File & Folder Manipulation**

