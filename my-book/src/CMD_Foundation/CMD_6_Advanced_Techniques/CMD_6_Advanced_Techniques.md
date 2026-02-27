# CMD-6: Advanced Terminal Techniques - Batch Scripts, Functions & Professional Workflows

**Duration:** 4-4.5 hours (for screen reader users)
**Prerequisites:** Complete CMD-0 through CMD-5
**Skill Level:** Advanced intermediate

This lesson extends CMD skills to professional-level workflows. You'll learn to automate complex tasks, write reusable batch scripts, and integrate tools for 3D printing workflows.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Create and run batch files (.bat files)
- Write subroutines that accept parameters
- Use loops to repeat tasks automatically
- Automate batch processing of 3D models
- Debug batch scripts when something goes wrong
- Create professional workflows combining multiple tools

---

## Batch Script Basics

### What's a Batch Script?

A batch file (`.bat`) contains multiple CMD commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once.

**Why use batch scripts?**

- Repeatability: Run the same task 100 times identically
- Documentation: Commands are written down for reference
- Complexity: Combine many commands logically
- Automation: Schedule scripts to run automatically

### Creating Your First Batch Script

**Step 1: Open a text editor**

```cmd
notepad.exe my-first-script.bat
```

**Step 2: Type this script**

```batch
@echo off
:: This is a comment - screen readers will read it
echo Script is running!
cd
dir /B
echo Script is done!
```

**Step 3: Save the file**

- In Notepad: Ctrl+S
- Make sure filename ends in `.bat`
- Save in an easy-to-find location (like Documents)

**Step 4: Run the script**

```cmd
my-first-script.bat
```

**What happens:**
CMD runs each command in sequence and shows output.

### Important: `@echo off`

On some scripts, each command is echoed before running. `@echo off` at the top suppresses this, showing only output — not the commands themselves.

```batch
@echo off
:: Now only output is shown, not each command
echo Hello!
```

---

## Variables and Parameters

### Using Variables

Variables store values you want to use later.

**Example script:**

```batch
@echo off
set mypath=C:\Users\YourName\Documents
cd %mypath%
echo I am now in:
cd
dir /B
```

**Breaking it down:**

- `set mypath=...` assigns the variable
- `%mypath%` uses the variable (wraps it in `%`)
- Variables in CMD are always referenced with `%VARNAME%`

### Subroutines with Parameters

A subroutine is reusable code that you can call with different inputs using `:label` and `call`.

**Example: A subroutine that lists files in a folder**

```batch
@echo off
call :ListFolder "C:\Users\YourName\Documents"
call :ListFolder "C:\Users\YourName\Downloads"
goto :eof

:ListFolder
echo Contents of: %~1
cd /D %~1
dir /B
goto :eof
```

**What's happening:**

- `:ListFolder` marks the start of the subroutine
- `%~1` is the first argument passed to the subroutine
- `call :ListFolder "path"` calls the subroutine with a path
- `goto :eof` exits the subroutine (or script)

**Screen reader tip:** When you call a subroutine, CMD will announce the results just like any command.

---

## Loops - Repeating Tasks

### Loop Over Files

Imagine you have 10 SCAD files and want to print their names. You could do it 10 times manually, or use a loop.

**Example: Print every .scad file in a folder**

```batch
@echo off
for %%f in (*.scad) do (
    echo === File: %%f ===
    type %%f
    echo.
)
```

**What's happening:**

- `for %%f in (*.scad) do` iterates over each `.scad` file
- `%%f` is the loop variable (use `%f` in interactive CMD, `%%f` in batch files)
- Inside the parentheses, do something with each file

### Loop with a Counter

**Example: Do something 5 times**

```batch
@echo off
for /L %%i in (1,1,5) do (
    echo This is iteration number %%i
)
```

**What's happening:**

- `for /L %%i in (start,step,end)` counts from start to end
- `%%i` is the counter variable

---

## Real-World Example - Batch Processing SCAD Files

### Scenario

You have 10 OpenSCAD (.scad) files in a folder. You want to:

1. List them all
2. Check how many there are
3. For each one, verify it exists

### The Script

```batch
@echo off
set scadFolder=C:\Users\YourName\Documents\3D_Projects
set count=0

echo Processing SCAD files in: %scadFolder%
echo.

for %%f in (%scadFolder%\*.scad) do (
    if exist "%%f" (
        echo  Found: %%~nxf
        set /A count+=1
    ) else (
        echo  Missing: %%~nxf
    )
)

echo.
echo Total files found: %count%
echo Batch processing complete!
```

**Breaking it down:**

- `set scadFolder=...` = where to look
- `for %%f in (...\*.scad)` = find all .scad files
- `if exist "%%f"` = check if file exists
- `%%~nxf` = just the filename with extension (not the full path)
- `set /A count+=1` = increment the counter

### Running the Script

1. Save as `batch-process.bat`
2. Edit `scadFolder` to match your real folder
3. Run it:

   ```cmd
   batch-process.bat
   ```

**Screen reader output:**

```plaintext
Processing SCAD files in: C:\Users\YourName\Documents\3D_Projects

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more files ...]

Total files found: 10
Batch processing complete!
```

---

## Error Handling

### Checking Error Levels

What if something goes wrong? Use `errorlevel` checks:

**Example:**

```batch
@echo off
type C:\nonexistent\path\file.txt
if %errorlevel% neq 0 (
    echo Error: Could not read file
    echo Errorlevel: %errorlevel%
)
```

**What's happening:**

- After any command, `%errorlevel%` holds `0` for success or non-zero for failure
- `if %errorlevel% neq 0` checks for failure
- Handle the error gracefully

**Screen reader advantage:** Errors are announced clearly instead of crashing silently.

### Validating Input

**Example: Make sure a folder exists before processing**

```batch
@echo off
set folderPath=C:\Users\YourName\Documents

if not exist "%folderPath%\" (
    echo Error: Folder does not exist: %folderPath%
    goto :eof
)

echo Processing folder: %folderPath%
dir /B "%folderPath%"
```

**What's happening:**

- `if not exist "%folderPath%\"` checks if folder exists (trailing `\` ensures it's a folder)
- `goto :eof` exits the script early if error

---

## Debugging Batch Scripts

### Common Errors and Solutions

#### Error 1: "Command not found"

**Cause:** Typo in command name or program not in PATH

**Fix:** Check spelling and verify PATH

```batch
:: Wrong:
dri /B

:: Correct:
dir /B
```

#### Error 2: "Variable is empty"

**Cause:** Variable was never set or has a typo

**Fix:** Make sure variable is set before using it

```batch
set myvar=hello
echo %myvar%
```

#### Error 3: "The system cannot find the path specified"

**Cause:** Wrong folder path

**Fix:** Verify path exists

```batch
:: Check if path exists:
if exist "C:\Users\YourName\Documents\" echo Path exists
```

#### Error 4: "Access denied"

**Cause:** Don't have permission

**Fix:** Run CMD as administrator

- Right-click Command Prompt -> Run as administrator

### Debugging Technique: Trace Output

Add `echo` statements to track what's happening:

```batch
@echo off
set path_var=C:\Users\YourName\Documents
echo Starting script. Path is: %path_var%

for %%f in (%path_var%\*) do (
    echo Processing: %%f
    :: Do something with %%f
    echo Done with: %%f
)

echo Script complete
```

Your screen reader will announce each step, so you know where errors happen.

---

## Creating Professional Workflows

### Example 1: Automated Project Setup

**Scenario:** You start a new 3D printing project regularly. Instead of creating folders manually:

```batch
@echo off
set /p projectName=Enter project name: 
set baseFolder=C:\Users\YourName\Documents\3D_Projects
set projectFolder=%baseFolder%\%projectName%

:: Create folder structure
mkdir "%projectFolder%"
mkdir "%projectFolder%\designs"
mkdir "%projectFolder%\output"
mkdir "%projectFolder%\notes"

:: Create a README
echo # %projectName% > "%projectFolder%\README.txt"
echo. >> "%projectFolder%\README.txt"
echo Created: %date% >> "%projectFolder%\README.txt"
echo. >> "%projectFolder%\README.txt"
echo ## Designs >> "%projectFolder%\README.txt"
echo All .scad files go here. >> "%projectFolder%\README.txt"
echo. >> "%projectFolder%\README.txt"
echo ## Output >> "%projectFolder%\README.txt"
echo STL and other exports go here. >> "%projectFolder%\README.txt"

echo Project setup complete: %projectFolder%
```

**What it does:**

- Prompts for a project name
- Creates folder structure for a new project
- Sets up subfolders for designs, output, notes
- Creates a README file automatically

### Example 2: Batch File Verification

**Scenario:** Before processing, verify all required files exist:

```batch
@echo off
set projectFolder=C:\Users\YourName\Documents\3D_Projects\MyKeychain
set allGood=1

for %%i in (README.txt designs output notes) do (
    if exist "%projectFolder%\%%i" (
        echo  Found: %%i
    ) else (
        echo  Missing: %%i
        set allGood=0
    )
)

if %allGood%==1 (
    echo All checks passed!
) else (
    echo Some files are missing!
)
```

---

## Screen Reader Tips for Batch Scripts

### Making Script Output Readable

**Problem:** Script runs but output scrolls too fast or is hard to follow

**Solution 1: Save to file**

```cmd
my-script.bat > output.txt
notepad.exe output.txt
```

**Solution 2: Use echo with clear sections**

```batch
echo ========== STARTING ==========
echo.
:: ... script ...
echo.
echo ========== COMPLETE ==========
```

**Solution 3: Pause between major sections**

```batch
echo Pausing... Press any key to continue
pause > nul
```

Your screen reader will announce the pause, give you time to read output.

### Announcing Progress

**For long-running scripts:**

```batch
@echo off
set count=0
for %%f in (*.scad) do (
    set /A count+=1
    echo Processing file %%f
)
echo All %count% files processed!
```

---

## Practice Exercises

### Exercise 1: Your First Batch Script

**Goal:** Create and run a simple batch script

**Steps:**

1. Create file: `notepad.exe hello.bat`
2. Type:

   ```batch
   @echo off
   echo Hello from my first CMD batch script!
   cd
   dir /B
   ```

3. Save and run: `hello.bat`

**Checkpoint:** You should see output for each command.

### Exercise 2: Script with a Variable

**Goal:** Use a variable to make the script flexible

**Steps:**

1. Create file: `notepad.exe smart-listing.bat`
2. Type:

   ```batch
   @echo off
   set targetFolder=C:\Users\YourName\Documents
   echo Listing contents of: %targetFolder%
   dir /B "%targetFolder%"
   ```

3. Edit `targetFolder` to a real folder on your computer
4. Run: `smart-listing.bat`

**Checkpoint:** You should see listing of that specific folder.

### Exercise 3: Subroutine

**Goal:** Create a reusable subroutine

**Steps:**

1. Create file: `notepad.exe navigate.bat`
2. Type:

   ```batch
   @echo off
   call :GoTo "C:\Users\YourName\Documents"
   call :GoTo "C:\Users\YourName\Downloads"
   goto :eof

   :GoTo
   if exist "%~1\" (
       cd /D "%~1"
       echo Now in:
       cd
       echo Contents:
       dir /B
   ) else (
       echo Path does not exist: %~1
   )
   goto :eof
   ```

3. Run: `navigate.bat`

**Checkpoint:** Both subroutine calls should work, showing contents of each folder.

### Exercise 4: Loop

**Goal:** Use a loop to repeat an action

**Steps:**

1. Create file: `notepad.exe repeat.bat`
2. Type:

   ```batch
   @echo off
   echo Demonstrating a loop:
   for /L %%i in (1,1,5) do (
       echo Iteration %%i: Hello!
   )
   echo Loop complete!
   ```

3. Run: `repeat.bat`

**Checkpoint:** Should print "Iteration 1" through "Iteration 5".

### Exercise 5: Real-World Script

**Goal:** Create a useful script for a real task

**Steps:**

1. Create a folder: `mkdir C:\Users\YourName\Documents\TestFiles`
2. Create some test files:

   ```cmd
   echo test > C:\Users\YourName\Documents\TestFiles\file1.txt
   echo test > C:\Users\YourName\Documents\TestFiles\file2.txt
   echo test > C:\Users\YourName\Documents\TestFiles\file3.txt
   ```

3. Create script: `notepad.exe report.bat`
4. Type:

   ```batch
   @echo off
   set folder=C:\Users\YourName\Documents\TestFiles
   set count=0

   echo === FILE REPORT ===
   echo Folder: %folder%
   echo.
   echo Files:
   for %%f in ("%folder%\*") do (
       echo   - %%~nxf
       set /A count+=1
   )
   echo.
   echo Total: %count% files
   echo === END REPORT ===
   ```

5. Run: `report.bat`

**Checkpoint:** Should show report of all files in the test folder.

---

## Quiz - Lesson CMD.6

1. What is a CMD batch script?
2. What file extension do CMD batch scripts use?
3. What is a variable in a batch script and how do you create one?
4. What is a subroutine (`:label`) and why would you use one?
5. How do you run a batch script?
6. What is a `for` loop and what does `for %%f in (*.scad) do` do?
7. What does `if exist` do?
8. How do you handle errors in a batch script?
9. When would you use `if %errorlevel% neq 0`?
10. What technique makes batch script output readable for screen readers?

---

## Extension Problems

1. **Auto-Backup Script:** Create a batch script that copies all files from one folder to another, announcing progress
2. **File Counter:** Write a subroutine that counts files by extension (.txt, .scad, .stl, etc.)
3. **Folder Cleaner:** Batch script that deletes files older than 30 days (with user confirmation)
4. **Project Template:** Subroutine that creates a complete project folder structure with all needed files
5. **Batch Rename:** Script that renames all files in a folder according to a pattern
6. **Log Generator:** Create a script that records what it does to a log file for later review
7. **Scheduled Task:** Set up a batch script to run automatically every day at a specific time
8. **File Verifier:** Check that all SCAD files in a folder have corresponding STL exports
9. **Report Generator:** Create a summary report of all projects in a folder
10. **Error Tracker:** Script that lists all commands that had errors and logs them with timestamps

---

## Important Notes

- **Always test scripts on small sets of files first** before running them on important data
- **Save your work regularly** — use version naming if possible
- **Test error handling** — make sure errors don't crash silently
- **Document your scripts** — use `::` comments so you remember what each part does
- **Backup before batch operations** — if something goes wrong, you have the original

---

## References

- **Microsoft CMD Batch Scripting Guide:** [https://example.com](https://example.com)
- **FOR Loop Documentation:** [https://example.com](https://example.com)
- **IF Statement Reference:** [https://example.com](https://example.com)
- **SET Variable Reference:** [https://example.com](https://example.com)

---

**Next Steps:** After mastering this lesson, explore advanced batch scripting, scheduled tasks, and 3D printing integration in the main curriculum.

