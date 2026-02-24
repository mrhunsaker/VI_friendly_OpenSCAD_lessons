# CMD-5: Filling in the Gaps - Batch Files & Advanced Techniques {#cmd_foundation_cmd_5_filling_in_the_gaps-cmd_5_filling_in_the_gaps}

**Duration:** 2 hours (for screen reader users)  
**Prerequisites:** CMD-Pre through CMD-4

**Learning Objectives:**
- Create and run batch files
- Write simple batch scripts
- Automate repetitive tasks
- Understand command history and debugging

---

## Batch Files Basics

A batch file (`.bat`) contains multiple commands that run in sequence.

### Creating a Simple Batch File

**File: backup.bat**
```batch
@echo off
echo Starting backup...
copy *.scad backup\
echo Backup complete!
pause
```

Run it:
```cmd
backup.bat
```

### Batch File Commands

```batch
@echo off           :: Don't show commands, only output
echo Message        :: Print text
pause               :: Wait for user to press a key
::                  :: Comment line
```

---

## Variables in Batch Files

```batch
@echo off
set folder=%USERPROFILE%\Documents\3DModels
cd %folder%
dir /B > filelist.txt
echo Done
```

---

## Practice Exercises

### Exercise 1: Create Simple Batch File

1. Open Notepad: `notepad.exe backup.bat`
2. Type:
```batch
@echo off
echo Creating backup folder...
mkdir backup-current
echo Copying files...
copy *.txt backup-current\
echo Done!
pause
```
3. Save as: `backup.bat`
4. Run: `backup.bat`

**Goal:** Create and run a batch file.

### Exercise 2: Batch File with Variables

1. Create file: `notepad.exe organize.bat`
2. Type:
```batch
@echo off
set source=%USERPROFILE%\Downloads
set dest=%USERPROFILE%\Documents\DownloadedFiles
echo Moving files from %source% to %dest%...
mkdir %dest%
move %source%\* %dest%\
echo Done!
```
3. Save and run

**Goal:** Use variables in batch files.

---

## Checkpoint Questions

1. What does `@echo off` do?
2. How do you create a batch file?
3. How do you run a batch file?
4. What does `pause` do?
5. How do you use variables in batch files?

---

## Screen Reader Accessibility in Command Prompt

### Best Practices

1. **Save output to files** - always easier to read
2. **Use clear, simple command names** - easier to remember
3. **Create batch files for complex operations** - safer and repeatable
4. **Test carefully** - especially with `delete` or `move` commands
5. **Keep backups** - always important

---

## Advanced Command Prompt Tips

### Finding Files
```cmd
dir /S /B *.scad          :: Find all .scad files recursively
```

### Getting Help
```cmd
help                      :: List all commands
help cd                   :: Help for specific command
dir /?                    :: Alternative help syntax
```

### Checking File Types
```cmd
file type.txt             :: Show file information (if available)
assoc .scad               :: Show program associated with .scad
```

---

## Next Steps

- Complete all exercises
- Review all previous lessons
- Move to **CMD_Unit_Test: Comprehensive Practice**

