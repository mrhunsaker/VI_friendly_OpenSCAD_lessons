# CMD-2: File and Folder Manipulation

**Duration:** 2-2.5 hours (for screen reader users)  
**Prerequisites:** CMD-Pre, CMD-0, CMD-1

**Learning Objectives:**
- Create, copy, move, and delete files and folders safely
- Use wildcards to operate on multiple files
- Understand dangerous operations and how to stay safe
- Rename files and understand extensions

---

## Core File Manipulation Commands

### Create Folders: `mkdir`

```cmd
mkdir FolderName           :: Create a single folder
mkdir Folder1 Folder2      :: Create multiple folders
```

### Create Files: `echo` and Redirection

```cmd
echo This is content > filename.txt    :: Create file with content
type > filename.txt                    :: Create empty file (then press Ctrl+Z, Enter)
```

### Copy Files: `copy`

```cmd
copy source.txt destination.txt        :: Copy file
copy *.txt backup/                     :: Copy all .txt files to backup folder
```

### Move/Rename Files: `move`

```cmd
move oldname.txt newname.txt           :: Rename a file
move file.txt folder/                  :: Move file to folder
```

### Delete Files: `del` (CAREFUL!)

```cmd
del filename.txt                       :: Delete one file
del *.txt                              :: Delete all .txt files
```

### Delete Folders: `rmdir` (CAREFUL!)

```cmd
rmdir folder-name                      :: Delete empty folder
rmdir /s /q folder-name                :: Delete folder and all contents
```

---

## Safe File Operations

### RULE 1: Always Check Before Deleting

```cmd
dir /B                    :: See what's here
del filename.txt          :: Then delete
```

### RULE 2: Make Backups First

```cmd
mkdir backup
copy *.txt backup\        :: Backup all .txt files
del *.txt                 :: Now safe to delete
```

### RULE 3: Test on Small Operations

```cmd
copy test.txt test-backup.txt    :: Copy one file to test
del test-backup.txt               :: Delete one file to test
```

---

## Using Wildcards

Wildcards let you operate on multiple files at once.

### `*` Wildcard (Match Multiple Characters)

```cmd
dir /B *.txt               :: List all .txt files
copy *.scad backup/        :: Copy all .scad files
del *.tmp                  :: Delete all .tmp files
```

### `?` Wildcard (Match Single Character)

```cmd
dir /B file?.txt           :: List file1.txt, file2.txt, etc.
copy model?.scad models/   :: Copy model1.scad, model2.scad, etc.
```

---

## Practical Examples

### Example 1: Create a Project Structure

```cmd
mkdir 3D_Projects
cd 3D_Projects
mkdir Models
mkdir Prints
mkdir Documentation
dir /B /A:D
```

### Example 2: Backup Before Editing

```cmd
copy project.scad project-backup.scad    :: Create backup
:: Edit project.scad
copy project.scad project-v2.scad        :: Save new version
```

### Example 3: Organize Files

```cmd
mkdir old-files
copy *.old old-files/         :: Copy old files to folder
del *.old                     :: Delete old files
```

---

## Practice Exercises

### Exercise 1: Create Folder Structure

1. Create: `mkdir practice-session`
2. Change: `cd practice-session`
3. Create folders: `mkdir files documents models`
4. List: `dir /B /A:D`

**Goal:** Create organized folder structures.

### Exercise 2: Create and Copy Files

1. Create: `echo Hello > test.txt`
2. View: `type test.txt`
3. Copy: `copy test.txt test-backup.txt`
4. List: `dir /B *.txt`
5. View backup: `type test-backup.txt`

**Goal:** Create and copy files confidently.

### Exercise 3: Safe Deletion

1. Create multiple test files: `echo test > file1.txt` (repeat for file2, file3)
2. List them: `dir /B *.txt`
3. Verify: `dir /B *.txt` again
4. Delete one: `del file1.txt`
5. Verify deletion: `dir /B *.txt`

**Goal:** Practice safe deletion patterns.

### Exercise 4: Using Wildcards

1. Create: `echo content > document1.txt`
2. Create: `echo content > document2.txt`
3. Create: `echo content > document3.txt`
4. List all: `dir /B *.txt`
5. Copy all: `mkdir archive` then `copy *.txt archive\`
6. Verify: `cd archive` then `dir /B *.txt`

**Goal:** Comfortable with wildcard operations.

---

## Checkpoint Questions

1. How do you create a folder?
2. How do you copy a file?
3. How do you rename a file?
4. How do you delete a file safely?
5. What does `*` match in a wildcard?
6. What does `?` match in a wildcard?
7. How would you copy all .scad files to a backup folder?
8. What should you always do before deleting?
9. How do you delete a folder with contents?
10. Why would you create a backup before editing?

---

## Extension Problems

1. Create a nested folder structure (5+ levels) using single command: `mkdir A\B\C\D\E`
2. Create 10 files and organize them into subfolders using `move`
3. Create a backup strategy: copy all files to dated backup folder
4. Use wildcards to select specific file types and perform operations
5. Create a file renaming pattern (file001, file002, etc.) and move them

---

## Next Steps

- Complete all exercises
- Pass checkpoint questions
- Move to **CMD-3: Input, Output & Redirection**

