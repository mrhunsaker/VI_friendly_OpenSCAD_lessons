# PS-2: File and Folder Manipulation

**Duration:** 1 class period
**Prerequisite:** PS-1 (Navigation)

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Create new folders with `mkdir`
- Create new empty files with `ni`
- Copy files and folders with `cp`
- Move and rename files with `mv`
- Delete files and folders with `rm` and `rmdir`

---

## Commands Covered

| Command | What It Does |
|---------|-------------|
| `mkdir name` | Make a new directory (folder) |
| `ni filename` | New Item — create an empty file |
| `cp source dest` | Copy a file or folder |
| `cp -r source dest` | Copy a folder and all its contents recursively |
| `mv source dest` | Move or rename a file or folder |
| `rm filename` | Remove (delete) a file — permanent, no recycle bin |
| `rmdir foldername` | Remove an empty directory |
| `rm -r foldername` | Remove a folder and all its contents — use with caution |

---

## ⚠️ Important Warning

`rm` and `rm -r` delete files and folders **permanently**. There is no recycle bin. There is no undo. Double-check your command before pressing Enter.

---

## `mkdir` — Creating Folders

```powershell
# Create a folder called OpenSCAD_Projects in your Documents
mkdir ~/Documents/OpenSCAD_Projects

# Create a folder inside another folder
mkdir ~/Documents/OpenSCAD_Projects/Lesson_1
```

Confirm it was created:
```powershell
ls -n ~/Documents/OpenSCAD_Projects
```

---

## `ni` — Creating Files

`ni` stands for New-Item. It creates an empty file.

```powershell
# Create an empty .scad file in your current directory
ni my_first_shape.scad

# Create a file in a specific location
ni ~/Documents/OpenSCAD_Projects/project0.scad
```

---

## `cp` — Copying Files

```powershell
# Copy a file from one location to another
cp ~/Downloads/example.scad ~/Documents/OpenSCAD_Projects/example.scad

# Copy and rename at the same time
cp project0.scad project0_backup.scad

# Copy a whole folder (use -r for recursive)
cp -r ~/Documents/OpenSCAD_Projects ~/Desktop/OpenSCAD_Backup
```

---

## `mv` — Moving and Renaming

`mv` can do two things depending on whether the destination is an existing folder or a new name.

```powershell
# Move a file into a folder
mv ~/Downloads/myfile.scad ~/Documents/OpenSCAD_Projects/

# Rename a file (same folder, new name)
mv old_name.scad new_name.scad

# Move and rename at the same time
mv ~/Downloads/temp.scad ~/Documents/OpenSCAD_Projects/project1_v1.scad
```

---

## `rm` — Deleting Files

```powershell
# Delete a single file
rm ~/Documents/OpenSCAD_Projects/test.scad

# Delete multiple files using a wildcard
rm ~/Documents/OpenSCAD_Projects/test*.scad
```

---

## `rmdir` and `rm -r` — Deleting Folders

```powershell
# Remove an empty folder
rmdir ~/Documents/OpenSCAD_Projects/empty_folder

# Remove a folder and everything inside it — DANGEROUS, be careful
rm -r ~/Documents/OpenSCAD_Projects/old_folder
```

---

## Practice Sequence

Work through these steps. Confirm each step with `ls -n` before moving on.

```powershell
# 1. Go to Documents
cd ~/Documents

# 2. Create a practice folder
mkdir PS_Practice

# 3. Navigate into it
cd PS_Practice

# 4. Create two files
ni file1.txt
ni file2.txt

# 5. Confirm both files are there
ls -n

# 6. Copy file1.txt and name the copy file1_backup.txt
cp file1.txt file1_backup.txt

# 7. Confirm three files now exist
ls -n

# 8. Rename file2.txt to notes.txt
mv file2.txt notes.txt

# 9. Confirm the rename
ls -n

# 10. Delete file1.txt (not the backup)
rm file1.txt

# 11. Confirm deletion
ls -n

# 12. Navigate up and delete the whole practice folder
cd ../
rm -r PS_Practice

# 13. Confirm the folder is gone
ls -n
```

---

## Check for Understanding

1. What is the difference between `cp` and `mv`?
2. What happens to the original file when you use `mv` to rename it?
3. Why should you be careful with `rm -r`?
4. How would you copy the folder `~/Documents/Project1` to your Desktop?
5. How would you rename `sketch_v1.scad` to `sketch_v2.scad`?
