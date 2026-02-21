# CMD-6: Advanced Terminal Techniques - Scripts & Professional Workflows

**Duration:** 2.5-3 hours (for screen reader users)  
**Prerequisites:** CMD-Pre through CMD-5

**Learning Objectives:**
- Create advanced batch scripts
- Integrate with 3D printing workflows
- Build professional automation
- Troubleshoot and debug scripts

---

## Advanced Batch Scripting

### Conditional Logic

```batch
@echo off
if exist backup.txt (
    echo Backup already exists
) else (
    echo Creating backup...
    copy data.txt backup.txt
)
```

### Loops

```batch
@echo off
for %%i in (*.txt) do (
    echo Processing %%i
    copy %%i backup\
)
```

### 3D Printing Integration Example

```batch
@echo off
REM Batch process OpenSCAD files
set input_folder=%USERPROFILE%\Documents\Models
set output_folder=%USERPROFILE%\Documents\STLs

echo Processing 3D models...
cd %input_folder%

for %%f in (*.scad) do (
    echo Converting %%f...
    REM OpenSCAD command would go here
)

echo All files processed!
```

---

## Practical Workflows

### Workflow 1: Project Initialization

Create a script that sets up a new project:

```batch
@echo off
set /p project_name=Enter project name: 
mkdir %project_name%
cd %project_name%
mkdir models
mkdir prints
mkdir documentation
mkdir backups
echo Project %project_name% created!
dir /B
```

### Workflow 2: Automated Backup

```batch
@echo off
setlocal enabledelayedexpansion
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c%%a%%b)
mkdir backup-%mydate%
copy *.scad backup-%mydate%\
copy *.txt backup-%mydate%\
echo Backup created: backup-%mydate%
```

---

## Debugging Batch Files

### Adding Debug Output

```batch
@echo off
setlocal
REM Turn echo on for debugging
echo Debug: Starting process
echo Debug: Current folder is %cd%
echo Debug: Files found:
dir /B *.scad
echo Debug: Process complete
```

### Common Errors

| Error               | Solution                                  |
|---------------------|-------------------------------------------|
| "File not found"    | Check path with `cd` and `dir /B`         |
| "Access denied"     | Run as Administrator (Windows+X -> Admin) |
| Command doesn't run | Check file is saved as `.bat` not `.txt`  |

---

## Practice Exercises

### Exercise 1: Create Project Setup Script

1. Create: `notepad.exe new-project.bat`
2. Type:
```batch
@echo off
set /p name=Project name: 
mkdir %name%
cd %name%
mkdir models documents backups
echo Project %name% created
dir /B /A:D
```
3. Save and run
4. Test creating a new project

**Goal:** Automate project creation.

### Exercise 2: Backup with Timestamp

1. Create script that backs up files with current date
2. Test it creates appropriately named folders
3. Verify files are copied

**Goal:** Create smart backup system.

---

## Checkpoint Questions

1. What does `if exist` do?
2. How do you loop through files?
3. How would you create a project setup script?
4. What does `REM` mean?
5. How do you add debug output?

---

## Next Steps

- Complete all exercises
- Review all CMD lessons
- Take the **CMD_Unit_Test: Comprehensive Practice & Assessment**

