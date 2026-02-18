# PS-1: Navigation — Moving Around Your File System

**Duration:** 1 class period
**Prerequisite:** PS-0 (Getting Started)

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Use `pwd` to print your current location
- Use `cd` to move between directories
- Use `ls` (and its flags) to list files and folders
- Use wildcards `*` and `?` to filter listings
- Navigate relative vs. absolute paths

---

## Commands Covered in This Lesson

| Command | What It Does |
|---------|-------------|
| `pwd` | Print Working Directory — shows where you are |
| `cd path` | Change Directory — move to a new location |
| `ls` | List — shows files and folders in current location |
| `ls -n` | List names only (screen reader friendly) |
| `ls -n -af` | List names of files only |
| `ls -n -ad` | List names of directories only |

---

## `pwd` — Where Am I?

Type `pwd` and press `Enter`. PowerShell prints the full path to your current location.

```powershell
pwd
# Output: C:\Users\YourName
```

Use this whenever you are unsure where you are.

---

## `cd` — Changing Directories

`cd` stands for "change directory."

```powershell
# Go to a folder by name (relative path — from where you are now)
cd Documents

# Go to a folder by full path (absolute path)
cd C:\Users\YourName\Documents

# Go to your home directory
cd ~

# Go up one level
cd ../

# Go up two levels
cd ../../
```

**Relative vs. absolute paths:**
- A **relative path** starts from where you currently are: `cd Documents`
- An **absolute path** starts from the root or home: `cd ~/Documents`

Both reach the same place if you are currently in your home folder. Relative paths are shorter to type; absolute paths work from anywhere.

### Practice sequence:
```powershell
cd ~
cd Documents
pwd
cd ../
pwd
cd ~
```

Listen to the output of each `pwd` to confirm where you are.

---

## `ls` — Listing Files and Folders

`ls` shows the contents of your current directory. By default it shows a table with attributes, dates, sizes, and names — a lot of output.

```powershell
ls
```

### Screen Reader Friendly: `ls -n`

The `-n` flag tells `ls` to show **names only**. This is much easier to navigate with a screen reader.

```powershell
ls -n
```

### Filtering: Files Only or Folders Only

```powershell
ls -n -af   # show only files (not folders)
ls -n -ad   # show only directories (not files)
```

### Listing a Specific Path

You can `ls` a path without being in it:

```powershell
ls -n ~/Documents
ls -n ~/Desktop
```

---

## Relative and Absolute Paths — Summary

```powershell
# You are currently in C:\Users\YourName

# Relative — starts from current location
cd Documents             # goes to C:\Users\YourName\Documents
ls -n ./Documents        # lists Documents without moving

# Absolute — starts from root or home
cd ~/Documents           # same as above, from anywhere
cd C:\Users\YourName\Documents   # same, fully explicit
```

---

## Wildcards

Wildcards let you match multiple files at once without knowing their exact names.

| Wildcard | Matches |
|---------|---------|
| `*` | Zero or more characters |
| `?` | Exactly one character |

**Examples:**
```powershell
# List all .scad files in current directory
ls -n *.scad

# List all files starting with "project"
ls -n project*

# List all files with exactly one character before .txt
ls -n ?.txt
```

---

## Practice

Complete these tasks:

```powershell
# 1. Print your current location
pwd

# 2. List the names of everything in your home directory
ls -n ~

# 3. Navigate to your Documents folder and confirm you are there
cd ~/Documents
pwd

# 4. List only the folders in Documents
ls -n -ad

# 5. Go up one level and confirm
cd ../
pwd

# 6. Return home
cd ~
```

---

## Check for Understanding

1. What command shows you where you are?
2. What is the difference between `cd Documents` and `cd ~/Documents`?
3. What flag makes `ls` show only names?
4. How would you list only the `.scad` files in your current folder?
5. If you are in `~/Documents/OpenSCAD_Projects` and you type `cd ../../`, where do you end up?
