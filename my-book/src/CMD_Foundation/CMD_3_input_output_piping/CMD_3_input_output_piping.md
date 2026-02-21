# CMD-3: Input, Output & Redirection

**Duration:** 45-60 minutes  
**Prerequisites:** CMD-Pre through CMD-2

**Learning Objectives:**
- Redirect command output to files
- Use input from files
- Combine commands for powerful operations
- Handle long outputs effectively

---

## Redirection Basics

### Output Redirection: `>`

Send output to a file instead of the screen:

```cmd
dir /B > listing.txt              :: Save directory listing to file
echo Important note > notes.txt    :: Create file with text
help cd > help-cd.txt             :: Save help text to file
```

**Important:** `>` overwrites the file. Use `>>` to append.

### Append Redirection: `>>`

Add to a file without overwriting:

```cmd
echo Line 1 > file.txt             :: Create file with one line
echo Line 2 >> file.txt            :: Add second line
type file.txt                      :: Shows both lines
```

### Input Redirection: `<`

Use file content as input (less common but useful):

```cmd
sort < unsorted.txt > sorted.txt    :: Sort a file
```

---

## Practical Examples

### Example 1: Save Long Output for Screen Readers

```cmd
dir /B /S > complete-listing.txt    :: Save all files and folders
notepad.exe complete-listing.txt    :: Open in editor for easy reading
```

This is crucial for screen reader users - files are always easier to read than terminal output.

### Example 2: Create Documentation

```cmd
echo Project: My 3D Model > project-log.txt
echo Created: 2026-02-21 >> project-log.txt
echo Files: >> project-log.txt
dir /B >> project-log.txt
type project-log.txt
```

### Example 3: Logging Commands

```cmd
echo Starting backup operation > backup-log.txt
copy *.scad backup\ >> backup-log.txt
echo Backup complete >> backup-log.txt
type backup-log.txt
```

---

## Piping (Intermediate)

Piping is less common in Command Prompt but available with some commands:

```cmd
dir /B | find ".scad"              :: Find lines containing ".scad"
dir /B | more                      :: Show output one page at a time
```

---

## Practice Exercises

### Exercise 1: Save Directory Listing

1. Run: `dir /B > my-files.txt`
2. Open: `notepad.exe my-files.txt`
3. Read it with your screen reader
4. Verify the listing is complete

**Goal:** Comfortable saving and reading output.

### Exercise 2: Create Project Log

1. Create: `echo Project: Test Model > log.txt`
2. Add: `echo Date: 2026-02-21 >> log.txt`
3. List files: `dir /B >> log.txt`
4. View: `type log.txt`
5. Open in Notepad: `notepad.exe log.txt`

**Goal:** Build documentation automatically.

### Exercise 3: Append vs Overwrite

1. Create: `echo First line > test.txt`
2. View: `type test.txt`
3. Overwrite: `echo Second line > test.txt` (uses `>`)
4. View: `type test.txt` (shows only "Second line")
5. Append: `echo Third line >> test.txt` (uses `>>`)
6. View: `type test.txt` (shows both Second and Third lines)

**Goal:** Understand `>` vs `>>` difference.

---

## Checkpoint Questions

1. What does `>` do?
2. What does `>>` do?
3. What's the difference between `>` and `>>`?
4. How do you save a directory listing to a file?
5. Why save output to a file for screen readers?
6. How would you create a project log?
7. What does `type` do?
8. How would you append text to an existing file?

---

## Screen Reader Tips

- **Always save complex output to files** - it's always more readable
- Use Notepad to review saved output - it works perfectly with screen readers
- Avoid reading terminal output directly when `>` can save it

---

## Next Steps

- Complete all exercises  
- Move to **CMD-4: Environment Variables & Shortcuts**

