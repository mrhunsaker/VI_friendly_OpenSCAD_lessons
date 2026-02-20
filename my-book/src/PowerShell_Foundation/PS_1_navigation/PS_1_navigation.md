# PS-1: Navigation — Moving Around Your File System

**Duration:** 1 class period  
**Prerequisite:** PS-0 (Getting Started)

**Learning Objectives**
By the end of this lesson, you will be able to:

- Use `pwd` to print your current location
- Use `cd` to move between directories
- Use `ls` (and its flags) to list files and folders
- Use wildcards `*` and `?` to filter listings
- Navigate relative vs. absolute paths
- Search for files by name and extension

**Materials**
- PowerShell
- Text editor (Notepad or VS Code)

---

## Commands Covered in This Lesson

| Command | What It Does |
| --------- | ------------- |
| `pwd` | Print Working Directory — shows where you are |
| `cd path` | Change Directory — move to a new location |
| `ls` | List — shows files and folders in current location |
| `ls -n` | List names only (screen reader friendly) |
| `ls -n -af` | List names of files only |
| `ls -n -ad` | List names of directories only |
| `ls *.extension` | List files matching a pattern |

---

## `pwd` — Where Am I?

Type `pwd` and press `Enter`. PowerShell prints the full path to your current location.

```powershell
pwd
# Output: C:\Users\YourName
```

**When to use:** Always run this if you're unsure of your current location.

---

## `cd` — Changing Directories

`cd` stands for "change directory."

```powershell
# Go to Documents
cd Documents

# Go up one level to parent directory
cd ..

# Go to home directory
cd ~

# Go to a specific path
cd C:\Users\YourName\Documents\3D_Projects
```

---

## `ls` — Listing Files and Folders

Use `ls -n` for screen reader compatibility.

```powershell
# List all files and folders (names only)
ls -n

# List only files (no folders)
ls -n -af

# List only folders (no files)
ls -n -ad
```

---

## Wildcards — Finding Files by Pattern

Wildcards help you find files without typing the full name.

**`*` (asterisk)** matches any number of characters:
```powershell
# List all .scad files
ls -n *.scad

# List all files starting with "part"
ls -n part*

# List all files ending with "_final"
ls -n *_final*
```

**`?` (question mark)** matches exactly one character:
```powershell
# Find files like model1.scad, model2.scad (but not model12.scad)
ls -n model?.scad
```

---

## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`
3. Confirm you moved: `pwd`
4. List files and folders: `ls -n`
5. List only files: `ls -n -af`
6. Go back up: `cd ..`
7. Search for files: `ls -n *.txt`

---

## Checkpoints

After this lesson, you should be able to:
- [ ] Navigate to any folder using `cd`
- [ ] Confirm your location with `pwd`
- [ ] List files and folders with `ls -n`
- [ ] Use wildcards to find files by pattern
- [ ] Move between absolute and relative paths confidently

## Quiz — Lesson PS.1

1. What does `pwd` show?
2. How do you list directories only with `ls`?
3. What wildcard matches any number of characters?
4. How do you list files with the `.scad` extension?
5. Give an example of an absolute path and a relative path.
6. True or False: The `*` wildcard matches exactly one character.
7. Explain the difference between `ls -n` and `ls -n -ad`.
8. Write a command that would list all `.txt` files in your Documents folder using a wildcard.
9. How would you search for files containing "part" in their name across multiple files?
10. Describe a practical scenario where using wildcards saves time in a 3D printing workflow.
11. What happens when you use `ls -n part?.scad` versus `ls -n part*.scad`?
12. How would you navigate to a folder whose name contains both spaces and special characters?
13. If you're in `/Documents/Projects/3D` and you want to go to `/Documents/Resources`, what command would you use?
14. Write a command sequence that navigates to the Downloads folder, lists only files, then returns to home.
15. Explain the purpose of using `ls -n -af` specifically in a screen reader context.

## Extension Problems
1. Write a one-line script that lists `.scad` files and saves to `scad_list.txt`.
2. Use `ls -n ~/Documents | more` to page through long listings.
3. Combine `ls` with `Select-String` to search for a filename pattern.
4. Create a shortcut alias in the session for a long path and test it.
5. Practice tab-completion in a directory with many similarly named files.
6. Build a PowerShell script that recursively lists all `.scad` and `.stl` files in a directory tree; save the results to a file.
7. Compare the output of `ls`, `Get-ChildItem`, and `gci` to understand PowerShell aliasing; document what each command does.
8. Create a filtering command that displays only files modified in the last 7 days; test it on your documents folder.
9. Write a non-visual guide to PowerShell navigation; include descriptions of common patterns and how to verify directory contents audibly.
10. Develop a navigation workflow for a typical 3D printing project: move between CAD, slicing, and print-log folders efficiently; document the commands.
11. Create a complex wildcard search: find all files in a folder and subfolders that match multiple patterns (e.g., `*_v1.* OR *_final.*`).
12. Build a script that navigates through a folder tree, counts files at each level, and reports the structure.
13. Document the output differences between `ls -n`, `ls -n -af`, `ls -n -ad`, and `Get-ChildItem`; explain when to use each.
14. Create a navigation "cheat sheet" as a PowerShell script that prints common paths and how to navigate to them.
15. Design a project folder structure on your computer, document each path, then create a script that validates all folders exist.

## References

- Microsoft. (2024). *Get-ChildItem cmdlet reference*. https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem
- Microsoft. (2024). *PowerShell wildcards and filtering*. https://learn.microsoft.com/powershell/scripting/learn/shell/using-wildcards
- Microsoft. (2024). *Navigation best practices in PowerShell*. https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem

## Helpful Resources

- [Get-ChildItem Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem)
- [PowerShell Wildcards and Filtering](https://learn.microsoft.com/powershell/scripting/learn/shell/using-wildcards)
- [Navigation Best Practices](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)
- [Relative and Absolute Paths](https://poshcode.gitbook.io/powershell-faq/src/getting-started/filesystem-navigation)
- [Screen Reader Tips for PowerShell](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)
