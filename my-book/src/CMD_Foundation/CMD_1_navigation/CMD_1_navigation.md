# CMD-1: Navigation - Moving Around Your File System {#cmd_foundation_cmd_1_navigation-cmd_1_navigation}

**Duration:** 1.5-2 hours (for screen reader users)  
**Prerequisites:** CMD-Pre and CMD-0  
**Learning Objectives:**

- Navigate confidently to any folder location
- Understand and use relative versus absolute paths
- Use shortcuts to move between common folders
- Organize your file system logically

---

## Core Navigation Commands

### Command: `cd` (Change Directory)

```cmd
cd FolderName          :: Go into a folder
cd ..                  :: Go up one level
cd \                   :: Go to root of current drive (e.g., C:\)
cd %USERPROFILE%       :: Go to home directory
```

### Command: `dir /B` (List Contents)

```cmd
dir /B                 :: List all names (one per line, screen-reader friendly)
dir /B /A:D            :: List only directories/folders
dir /B /A:F            :: List only files
```

### Command: Show Current Location

```cmd
cd                     :: Running cd with no arguments shows current path
```

---

## Understanding Paths

### Absolute Paths (Full Address)

An absolute path starts from the root and shows the complete location:

```cmd
C:\Users\YourName\Documents\3DPrinting
```

- `C:\` — The C drive root
- `Users` — First folder
- `YourName` — Your user folder
- `Documents` — Documents folder
- `3DPrinting` — Your 3D printing folder

**Navigate there directly:**

```cmd
cd C:\Users\YourName\Documents\3DPrinting
```

### Relative Paths (Directions From Here)

```cmd
cd Documents\3DPrinting    :: Go into Documents, then into 3DPrinting
cd ..                      :: Go up one level
cd ..\..                   :: Go up two levels
```

**Shortcuts:**

- `.` = Current folder
- `..` = Parent folder (up one level)
- `%USERPROFILE%` = Your home folder

---

## Common Navigation Patterns

### Pattern 1: Navigating Down

```cmd
C:\>cd Users
C:\Users>cd YourName
C:\Users\YourName>cd Documents
C:\Users\YourName\Documents>
```

### Pattern 2: Navigating Up

```cmd
C:\Users\YourName\Documents>cd ..
C:\Users\YourName>cd ..
C:\Users>cd ..
C:\>
```

### Pattern 3: Jump to a Known Path

```cmd
C:\Deep\Folder\Somewhere>cd C:\Users\YourName
C:\Users\YourName>
```

### Pattern 4: Going Home

```cmd
cd %USERPROFILE%
```

---

## Special Folders and Shortcuts

```cmd
%USERPROFILE%              :: Your home folder
%USERPROFILE%\Desktop      :: Your Desktop
%USERPROFILE%\Documents    :: Your Documents
%USERPROFILE%\Downloads    :: Your Downloads
%ProgramFiles%             :: Program Files folder
C:\                        :: Root of C drive
```

---

## Tab Completion (Essential Skill)

1. Type the first few characters of a folder name.
2. Press **Tab**.
3. Command Prompt completes it.

**Example:**

```cmd
C:\Users\YourName>cd Doc  [press Tab]
C:\Users\YourName>cd Documents
```

- Your screen reader announces the completed name immediately.
- Press **Tab** multiple times to cycle through all matches.

---

## Screen Reader Tips for Navigation

### NVDA Users

1. After each `cd` command, run `cd` alone to confirm location. Press **NVDA+Home** (Insert+Home) to read the current line.
2. Press **NVDA+Down Arrow** to read through `dir /B` output.
3. For long listings: `dir /B > listing.txt`, then `notepad.exe listing.txt`.

### JAWS Users

1. After each `cd` command, press **Insert+Up Arrow** to re-read the current line.
2. Press **Insert+Down Arrow** repeatedly to read output line by line.
3. For long listings: `dir /B > listing.txt`, then `notepad.exe listing.txt`.

### Windows Narrator Users

1. After each `cd` command, press **Narrator+D** (CapsLock+D) to read the current line.
2. Press **Narrator+R** to read output from the current position.
3. For long listings, always redirect to a file and open in Notepad — Notepad is more comfortable for Narrator users than reading directly from the terminal buffer.

### Dolphin SuperNova Users

1. After each `cd` command, press **CapsLock+L** to read the current line.
2. Press **CapsLock+Numpad Plus** (say all) to read all output from the current position.
3. For long listings: `dir /B > listing.txt`, then `notepad.exe listing.txt`.

### Best Practice for All Screen Readers

Always confirm your location after moving:

```cmd
cd FolderName
cd                        :: Verify your new location
```

---

## Practice Exercises

### Exercise 1: Basic Down Navigation

1. `cd %USERPROFILE%`
2. Run `cd` to see location.
3. `dir /B`
4. `cd Documents`
5. Run `cd` to confirm.
6. `dir /B`

### Exercise 2: Using Tab Completion

1. `cd %USERPROFILE%`
2. Type `cd Doc` then press **Tab**.
3. Press **Enter**.
4. Run `cd` to confirm.

### Exercise 3: Navigating Up

1. Navigate several levels deep.
2. Run `cd` to see full path.
3. Use `cd ..` to go up one level at a time.
4. Run `cd` after each step.

### Exercise 4: Absolute Path Navigation

1. Navigate deep (3+ levels).
2. Run `cd %USERPROFILE%` to jump home.
3. Run `cd` to confirm.

### Exercise 5: Creating and Navigating a Structure

```cmd
mkdir 3DPractice
cd 3DPractice
mkdir Models
cd Models
mkdir OpenSCAD
cd OpenSCAD
```

Run `cd` at each level. Then navigate back up using only `cd ..`.

---

## Checkpoint Questions

Answer all 10 before moving to CMD-2:

1. What is the difference between `cd Documents` and `cd \`?
2. What does `cd ..` do?
3. How do you go to your home folder from anywhere?
4. What is an absolute path? Give an example.
5. What is a relative path? Give an example.
6. How do you confirm your current location?
7. What does Tab completion do?
8. How would you navigate 3 levels deep, then back home?
9. What is the difference between `.` and `..`?
10. If you are lost, what command should you run first?

---

## Extension Problems

1. Create a folder with spaces in the name (e.g., `My Projects`) and navigate to it using quotes.
2. Use Tab completion to navigate 5+ levels deep without typing full names.
3. Create a script that saves `cd` output at each level to a log file.
4. Navigate to the same destination using both absolute and relative paths from different starting locations.
5. Build a complex folder tree (5+ levels) and navigate using only relative paths.
6. Document the full paths to your 5 most-used folders.
7. Create folders named `01Folder`, `02Folder`, etc. and practice Tab completion through them.
8. Navigate to a folder, save the path with `cd > mypath.txt`, navigate away, then return using the saved path.
9. Challenge: navigate to a destination using only relative paths without running `cd` to check at each step.
10. Create a batch file that navigates to a project folder and lists its contents in one step.

---

## Common Issues

### "The system cannot find the path specified"

- Check spelling with `dir /B` to see correct folder names.
- Use Tab completion to avoid typos.
- Use the absolute path: `cd C:\Users\YourName\Documents`.

### "I'm lost"

```cmd
cd
```

This always shows your current location.

### Tab Completion Not Working

- Type at least one character before pressing Tab.
- Confirm the folder exists with `dir /B`.
- Press Tab again to cycle through multiple matches.

---

## Quick Reference

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

## Next Steps

Complete all exercises, pass the checkpoint questions, then move to **CMD-2: File & Folder Manipulation**.

