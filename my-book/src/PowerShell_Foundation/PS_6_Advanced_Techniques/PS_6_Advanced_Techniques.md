# PS-6: Advanced Terminal Techniques - Scripts, Functions & Professional Workflows {#powershell_foundation_ps_6_advanced_techniques-ps_6_advanced_techniques}

**Duration:** 4-4.5 hours (for screen reader users)  
**Prerequisites:** Complete PS-0 through PS-5  
**Skill Level:** Advanced intermediate

This lesson extends PowerShell skills to professional-level workflows. You'll learn to automate complex tasks, write reusable code, and integrate tools for 3D printing workflows.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Create and run PowerShell scripts (.ps1 files)
- Write functions that accept parameters
- Use loops to repeat tasks automatically
- Automate batch processing of 3D models
- Debug scripts when something goes wrong
- Create professional workflows combining multiple tools

---

## Part 1: PowerShell Scripts Basics

### What's a Script?

A script is a file containing PowerShell commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once.

**Why use scripts?**
- Repeatability: Run the same task 100 times identically
- Documentation: Commands are written down for reference
- Complexity: Combine many commands logically
- Automation: Schedule scripts to run automatically

### Creating Your First Script

**Step 1: Open a text editor**
```powershell
notepad.exe my-first-script.ps1
```

**Step 2: Type this script**
```powershell
# This is a comment - screen readers will read it
Write-Output "Script is running!"
pwd
ls -n
Write-Output "Script is done!"
```

**Step 3: Save the file**
- In Notepad: Ctrl+S
- Make sure filename ends in `.ps1`
- Save in an easy-to-find location (like Documents)

**Step 4: Run the script**
```powershell
.\my-first-script.ps1
```

**What happens:**
PowerShell runs each command in sequence and shows output.

### Important: Script Execution Policy

On some Windows systems, you might get an error about "execution policy". This is a security feature.

**To fix it temporarily:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

**Then try your script again:**
```powershell
.\my-first-script.ps1
```

**Note for screen readers:** Your screen reader will announce the error if there is one. Use `Get-Help Get-ExecutionPolicy` for more information.

---

## Part 2: Variables and Parameters

### Using Variables

Variables store values you want to use later.

**Example script:**
```powershell
$mypath = "C:\Users\YourName\Documents"
cd $mypath
Write-Output "I am now in:"
pwd
ls -n
```

**Breaking it down:**
- `$mypath` = variable name (always starts with `$`)
- `=` = assign the value after this
- `"C:\Users..."` = the value (a path)
- `cd $mypath` = use the variable (replace `$mypath` with its value)

### Functions with Parameters

A function is reusable code that you can run with different inputs.

**Example: A function that lists files in a folder**

```powershell
function ListFolder {
    param(
        [string]$path
    )
    
    Write-Output "Contents of: $path"
    cd $path
    ls -n
}

# Use the function:
ListFolder -path "C:\Users\YourName\Documents"
ListFolder -path "C:\Users\YourName\Downloads"
```

**What's happening:**
- `function ListFolder` = name of the function
- `param([string]$path)` = the function accepts a parameter called `$path`
- Inside the function, use `$path` like any variable
- Call the function with `-path "value"`

**Screen reader tip:** When you call a function, PowerShell will announce the results just like any command.

---

## Part 3: Loops - Repeating Tasks

### Loop Over Files

Imagine you have 10 SCAD files and want to print their contents. You could do it 10 times manually, or use a loop.

**Example: Print every .scad file in a folder**

```powershell
$scadFiles = ls -n *.scad

foreach ($file in $scadFiles) {
    Write-Output "=== File: $file ==="
    cat $file
    Write-Output ""
}
```

**What's happening:**
- `$scadFiles = ls -n *.scad` = find all .scad files and store in variable
- `foreach ($file in $scadFiles)` = for each file, do this:
  - `Write-Output "=== File: $file ==="` = announce which file
  - `cat $file` = show contents
  - `Write-Output ""` = blank line between files

**Result:** All files printed one after another, organized and readable.

### Loop with a Counter

**Example: Do something 5 times**

```powershell
for ($i = 1; $i -le 5; $i++) {
    Write-Output "This is iteration number $i"
    # Do something here
}
```

**What's happening:**
- `for ($i = 1; $i -le 5; $i++)` = loop from 1 to 5
- `$i` = counter variable (starts at 1, increases each loop)
- `-le` = "less than or equal to" (stop when $i > 5)
- `$i++` = add 1 to $i each time through

---

## Part 4: Real-World Example - Batch Processing SCAD Files

### Scenario

You have 10 OpenSCAD (.scad) files in a folder. You want to:
1. List them all
2. Check how many there are
3. For each one, verify it exists

### The Script

```powershell
# Batch Processing Script for SCAD Files

$scadFolder = "C:\Users\YourName\Documents\3D_Projects"
$scadFiles = ls $scadFolder -Filter *.scad -Name

Write-Output "Processing SCAD files in: $scadFolder"
Write-Output "Found $($scadFiles.Count) files"
Write-Output ""

foreach ($file in $scadFiles) {
    $fullPath = Join-Path -Path $scadFolder -ChildPath $file
    
    if (Test-Path -Path $fullPath) {
        Write-Output " Found: $file"
    } else {
        Write-Output " Missing: $file"
    }
}

Write-Output ""
Write-Output "Batch processing complete!"
```

**Breaking it down:**
- `$scadFolder` = where to look
- `ls $scadFolder -Filter *.scad -Name` = find .scad files, show names only
- `foreach` = process each file
- `Join-Path` = combine folder and filename into full path
- `Test-Path` = check if file exists
- `if` = do different things based on condition

### Running the Script

1. Save as `batch-process.ps1`
2. Edit `$scadFolder` to match your real folder
3. Run it:
   ```powershell
   .\batch-process.ps1
   ```

**Screen reader output:**
```
Processing SCAD files in: C:\Users\YourName\Documents\3D_Projects
Found 10 files

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more files ...]
Batch processing complete!
```

---

## Part 5: Error Handling

### Try-Catch Blocks

What if something goes wrong? Use try-catch:

**Example:**
```powershell
try {
    $file = "C:\nonexistent\path\file.txt"
    $content = cat $file
    Write-Output $content
} catch {
    Write-Output "Error: Could not read file"
    Write-Output "Details: $_"
}
```

**What's happening:**
- `try` = run these commands
- If an error happens, PowerShell jumps to `catch`
- `catch` = handle the error gracefully
- `$_` = the error message

**Screen reader advantage:** Errors are announced clearly instead of crashing silently.

### Validating Input

**Example: Make sure a folder exists before processing**

```powershell
function ProcessFolder {
    param([string]$folderPath)
    
    if (-not (Test-Path -Path $folderPath)) {
        Write-Output "Error: Folder does not exist: $folderPath"
        return
    }
    
    Write-Output "Processing folder: $folderPath"
    ls -n $folderPath
}

ProcessFolder -folderPath "C:\Users\YourName\Documents"
```

**What's happening:**
- `Test-Path` = check if folder exists
- `-not` = if NOT true
- `return` = exit the function early if error

---

## Part 6: Debugging Scripts

### Common Errors and Solutions

#### Error 1: "Command not found"

**Cause:** Typo in command name

**Fix:** Check spelling
```powershell
# Wrong:
writ-output "hello"

# Correct:
Write-Output "hello"
```

#### Error 2: "Variable is null"

**Cause:** Variable was never assigned

**Fix:** Make sure variable is set before using it
```powershell
$myvar = "hello"  # Set first
Write-Output $myvar  # Then use
```

#### Error 3: "Cannot find path"

**Cause:** Wrong folder path

**Fix:** Verify path exists
```powershell
# Check if path exists:
Test-Path -Path "C:\Users\YourName\Documents"

# If false, the path is wrong
```

#### Error 4: "Access denied"

**Cause:** Don't have permission

**Fix:** Run PowerShell as administrator
- Right-click PowerShell -> Run as administrator

### Debugging Technique: Trace Output

Add `Write-Output` statements to track what's happening:

```powershell
$path = "C:\Users\YourName\Documents"
Write-Output "Starting script. Path is: $path"

$files = ls -n $path
Write-Output "Found $($files.Count) files"

foreach ($file in $files) {
    Write-Output "Processing: $file"
    # Do something with $file
    Write-Output "Done with: $file"
}

Write-Output "Script complete"
```

Your screen reader will announce each step, so you know where errors happen.

---

## Part 7: Creating Professional Workflows

### Example 1: Automated Project Setup

**Scenario:** You start a new 3D printing project regularly. Instead of creating folders manually:

```powershell
function SetupNewProject {
    param([string]$projectName)
    
    $baseFolder = "C:\Users\YourName\Documents\3D_Projects"
    $projectFolder = Join-Path -Path $baseFolder -ChildPath $projectName
    
    # Create folder structure
    mkdir $projectFolder -Force
    mkdir "$projectFolder\designs" -Force
    mkdir "$projectFolder\output" -Force
    mkdir "$projectFolder\notes" -Force
    
    # Create a README
    $readmeContent = @"
# $projectName

Created: $(Get-Date)

## Designs
All .scad files go here.

## Output
STL and other exports go here.

## Notes
Project notes and observations.
"@
    
    $readmeContent | Out-File -FilePath "$projectFolder\README.txt" -Encoding utf8
    
    Write-Output "Project setup complete: $projectFolder"
}

# Use it:
SetupNewProject -projectName "MyKeychain"
SetupNewProject -projectName "PhoneStand"
```

**What it does:**
- Creates folder structure for a new project
- Sets up subfolders for designs, output, notes
- Creates a README file automatically

### Example 2: Batch File Verification

**Scenario:** Before processing, verify all required files exist:

```powershell
function VerifyProjectFiles {
    param([string]$projectFolder)
    
    $requiredFiles = @(
        "README.txt",
        "designs",
        "output",
        "notes"
    )
    
    $allGood = $true
    
    foreach ($item in $requiredFiles) {
        $path = Join-Path -Path $projectFolder -ChildPath $item
        
        if (Test-Path -Path $path) {
            Write-Output " Found: $item"
        } else {
            Write-Output " Missing: $item"
            $allGood = $false
        }
    }
    
    if ($allGood) {
        Write-Output "All checks passed!"
        return $true
    } else {
        Write-Output "Some files are missing!"
        return $false
    }
}

# Use it:
$verified = VerifyProjectFiles -projectFolder "C:\Users\YourName\Documents\3D_Projects\MyKeychain"
if ($verified) {
    Write-Output "Safe to proceed with processing"
}
```

---

## Part 8: Screen Reader Tips for Scripts

### Making Script Output Readable

**Problem:** Script runs but output scrolls too fast or is hard to follow

**Solution 1: Save to file**
```powershell
.\my-script.ps1 > output.txt
notepad.exe output.txt
```

**Solution 2: Use Write-Output with clear sections**
```powershell
Write-Output "========== STARTING =========="
Write-Output ""
# ... script ...
Write-Output ""
Write-Output "========== COMPLETE =========="
```

**Solution 3: Pause between major sections**
```powershell
Write-Output "Pausing... Press Enter to continue"
Read-Host
```

Your screen reader will announce the pause, give you time to read output.

### Announcing Progress

**For long-running scripts:**
```powershell
$files = ls -n *.scad
$count = 0

foreach ($file in $files) {
    $count++
    Write-Output "Processing $count of $($files.Count): $file"
    
    # Do something with $file
}

Write-Output "All $count files processed!"
```

---

## Practice Exercises

### Exercise 1: Your First Script

**Goal:** Create and run a simple script

**Steps:**
1. Create file: `notepad.exe hello.ps1`
2. Type:
   ```powershell
   Write-Output "Hello from my first PowerShell script!"
   pwd
   ls -n
   ```
3. Save and run: `.\hello.ps1`

**Checkpoint:** You should see output for each command.

### Exercise 2: Script with a Variable

**Goal:** Use a variable to make the script flexible

**Steps:**
1. Create file: `notepad.exe smart-listing.ps1`
2. Type:
   ```powershell
   $targetFolder = "C:\Users\YourName\Documents"
   Write-Output "Listing contents of: $targetFolder"
   ls -n $targetFolder
   ```
3. Edit `$targetFolder` to a real folder on your computer
4. Run: `.\smart-listing.ps1`

**Checkpoint:** You should see listing of that specific folder.

### Exercise 3: Function

**Goal:** Create a reusable function

**Steps:**
1. Create file: `notepad.exe navigate.ps1`
2. Type:
   ```powershell
   function GoTo {
       param([string]$path)
       
       if (Test-Path -Path $path) {
           cd $path
           Write-Output "Now in: $(pwd)"
           Write-Output "Contents:"
           ls -n
       } else {
           Write-Output "Path does not exist: $path"
       }
   }
   
   # Test the function:
   GoTo -path "C:\Users\YourName\Documents"
   GoTo -path "C:\Users\YourName\Downloads"
   ```
3. Run: `.\navigate.ps1`

**Checkpoint:** Both commands should work, showing contents of each folder.

### Exercise 4: Loop

**Goal:** Use a loop to repeat an action

**Steps:**
1. Create file: `notepad.exe repeat.ps1`
2. Type:
   ```powershell
   Write-Output "Demonstrating a loop:"
   
   for ($i = 1; $i -le 5; $i++) {
       Write-Output "Iteration $i: Hello!"
   }
   
   Write-Output "Loop complete!"
   ```
3. Run: `.\repeat.ps1`

**Checkpoint:** Should print "Iteration 1" through "Iteration 5".

### Exercise 5: Real-World Script

**Goal:** Create a useful script for a real task

**Steps:**
1. Create a folder: `mkdir C:\Users\YourName\Documents\TestFiles`
2. Create some test files:
   ```powershell
   echo "test" > C:\Users\YourName\Documents\TestFiles\file1.txt
   echo "test" > C:\Users\YourName\Documents\TestFiles\file2.txt
   echo "test" > C:\Users\YourName\Documents\TestFiles\file3.txt
   ```
3. Create script: `notepad.exe report.ps1`
4. Type:
   ```powershell
   $folder = "C:\Users\YourName\Documents\TestFiles"
   $files = ls -n $folder
   
   Write-Output "=== FILE REPORT ==="
   Write-Output "Folder: $folder"
   Write-Output "Total files: $($files.Count)"
   Write-Output ""
   Write-Output "Files:"
   foreach ($file in $files) {
       Write-Output "  - $file"
   }
   Write-Output ""
   Write-Output "=== END REPORT ==="
   ```
5. Run: `.\report.ps1`

**Checkpoint:** Should show report of all files in the test folder.

---

## Quiz - Lesson PS-6

1. What is a PowerShell script?
2. What file extension do PowerShell scripts use?
3. What is a variable and how do you create one?
4. What is a function and why would you use one?
5. How do you run a script?
6. What is a loop and what does `foreach` do?
7. What does `Test-Path` do?
8. How do you handle errors in a script?
9. When would you use `Try-Catch`?
10. What technique makes script output readable for screen readers?

---

## Extension Problems

1. **Auto-Backup Script:** Create a script that copies all files from one folder to another, announcing progress
2. **File Counter:** Write a function that counts files by extension (.txt, .scad, .stl, etc.)
3. **Folder Cleaner:** Script that deletes files older than 30 days (with user confirmation)
4. **Project Template:** Function that creates a complete project folder structure with all needed files
5. **Batch Rename:** Script that renames all files in a folder according to a pattern
6. **Log Generator:** Create a script that records what it does to a log file for later review
7. **Scheduled Task:** Set up a script to run automatically every day at a specific time
8. **File Verifier:** Check that all SCAD files in a folder have corresponding STL exports
9. **Report Generator:** Create a summary report of all projects in a folder
10. **Error Tracker:** Script that lists all commands that had errors in your recent history

---

## Important Notes

- **Always test scripts on small sets of files first** before running them on important data
- **Save your work regularly** - use version control if possible
- **Test error handling** - make sure errors don't crash silently
- **Document your scripts** - use comments so you remember what each part does
- **Backup before batch operations** - if something goes wrong, you have the original

---

## References

- **Microsoft PowerShell Scripting Guide:** https://docs.microsoft.com/powershell/scripting/
- **Function Documentation:** https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_functions_advanced
- **Error Handling:** https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_error_handling
- **Loops:** https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_foreach

---

**Next Steps:** After mastering this lesson, explore PowerShell modules, remoting, and 3D printing integration in the main curriculum.
