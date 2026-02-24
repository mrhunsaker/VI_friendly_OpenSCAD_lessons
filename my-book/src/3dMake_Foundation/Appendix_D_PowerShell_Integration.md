# Appendix D: PowerShell Integration for SCAD Workflows {#3dmake_foundation-appendix_d_powershell_integration}

This appendix shows how **PowerShell (command-line scripting)** streamlines 3D design workflows, automating the repetitive tasks from design through printing. It bridges **PowerShell_Foundation concepts** with **3dMake_Foundation practical applications**.

**Referenced in:** Lessons 9 (Automation), 10 (Mastery), and any lesson requiring batch operations

**Prerequisites:** Completion of PowerShell_Foundation (Lessons 1-6)

---

## Overview: Why Automate SCAD Workflows?

### Manual Workflow (Time-Consuming)

```
1. Open SCAD manually -> Edit parameters -> Save -> Export STL
2. Open Slicer manually -> Load STL -> Adjust settings -> Slice -> Export G-code
3. Transfer G-code to printer via USB
4. Record results in notebook
5. Repeat for next variation (variant 2, variant 3, etc.)

Time: ~20-30 minutes per design iteration
```

### Automated Workflow (Fast & Reproducible)

```
1. Create PowerShell script with design parameters
2. Script automatically:
   - Generates SCAD code
   - Exports to STL
   - Slices to G-code
   - Transfers to printer
   - Logs results
3. Run script once, walk away
4. Check results later

Time: 2-3 minutes per iteration (plus print time)
```

### Benefits of Automation

- [YES] **Speed:** 10x faster for batch operations
- [YES] **Consistency:** No manual errors
- [YES] **Reproducibility:** Same settings every time
- [YES] **Scalability:** Test 5, 10, or 100 variations easily
- [YES] **Logging:** Automatic documentation
- [YES] **Accessibility:** Screen reader captures script output (not UI clicks)

---

## Prerequisites & Setup

### Required Software

```powershell
# Check what you have installed
where openscad      # OpenSCAD
where prusa-slicer  # PrusaSlicer (or your slicer)
where python3       # Python (optional, for advanced scripts)
```

### Directory Structure

Create a project directory:

```
C:\Projects\3dMake\
+------ src/
|   +------ bracelet_holder.scad
|   +------ phone_stand.scad
|   +------ stackable_bins.scad
+------ stl/
|   +------ bracelet_holder.stl
|   +------ phone_stand.stl
|   +------ stackable_bins.stl
+------ gcode/
|   +------ bracelet_holder.gcode
|   +------ phone_stand.gcode
|   +------ stackable_bins.gcode
+------ logs/
|   +------ batch_2024-01-15.log
|   +------ print_history.csv
+------ scripts/
    +------ build.ps1      (main build script)
    +------ batch_test.ps1 (test variations)
    +------ monitor.ps1    (monitor printer)
```

### PowerShell Execution Policy

```powershell
# Check current policy
Get-ExecutionPolicy

# If it's "Restricted", change it (requires admin)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Verify change
Get-ExecutionPolicy
```

---

## Part 1: Basic Workflow Automation

### Script 1: Single-File Build

This script takes a SCAD file and converts it through the entire workflow:

```powershell
# build.ps1 - Convert SCAD -> STL -> G-code

param(
    [string]$ScadFile,          # Input: bracelet_holder.scad
    [string]$OutputDir = ".\",  # Output directory
    [string]$SlicerConfig = "default"
)

# Set up paths
$ProjectRoot = "C:\Projects\3dMake"
$ScadFile = Join-Path $ProjectRoot "src" $ScadFile
$StlFile = Join-Path $ProjectRoot "stl" ([System.IO.Path]::GetFileNameWithoutExtension($ScadFile) + ".stl")
$GcodeFile = Join-Path $ProjectRoot "gcode" ([System.IO.Path]::GetFileNameWithoutExtension($ScadFile) + ".gcode")
$LogFile = Join-Path $ProjectRoot "logs" "build_$(Get-Date -Format 'yyyy-MM-dd').log"

# Log function
function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logEntry = "[$timestamp] $Message"
    Write-Host $logEntry
    Add-Content -Path $LogFile -Value $logEntry
}

Write-Log "Starting build for $($ScadFile | Split-Path -Leaf)"

# Step 1: Export STL
Write-Log "Step 1: Exporting SCAD to STL..."
$startTime = Get-Date

& "C:\Program Files\OpenSCAD\openscad.exe" `
    -o "$StlFile" `
    "$ScadFile"

$duration = (Get-Date) - $startTime
Write-Log " STL exported in $($duration.TotalSeconds) seconds: $StlFile"

# Verify STL exists
if (-not (Test-Path $StlFile)) {
    Write-Log "[NO] ERROR: STL file not created"
    exit 1
}

# Step 2: Slice to G-code
Write-Log "Step 2: Slicing STL to G-code..."
$startTime = Get-Date

& "C:\Program Files\Prusa3D\PrusaSlicer\prusa-slicer.exe" `
    --load-config-file "$SlicerConfig" `
    --export-gcode "$GcodeFile" `
    "$StlFile"

$duration = (Get-Date) - $startTime
Write-Log " G-code generated in $($duration.TotalSeconds) seconds: $GcodeFile"

# Verify G-code exists
if (-not (Test-Path $GcodeFile)) {
    Write-Log "[NO] ERROR: G-code file not created"
    exit 1
}

# Step 3: Get file info
$stlSize = (Get-Item $StlFile).Length / 1MB
$gcodeSize = (Get-Item $GcodeFile).Length / 1MB
Write-Log "File sizes: STL=$([math]::Round($stlSize, 2))MB, G-code=$([math]::Round($gcodeSize, 2))MB"

Write-Log " BUILD COMPLETE"
Write-Log "Ready to print: $GcodeFile"
```

**Usage:**

```powershell
# Run the script
.\build.ps1 -ScadFile "bracelet_holder.scad"

# Output example:
# [2024-01-15 14:30:22] Starting build for bracelet_holder.scad
# [2024-01-15 14:30:23] Step 1: Exporting SCAD to STL...
# [2024-01-15 14:30:25]  STL exported in 2.41 seconds: ...
# [2024-01-15 14:30:26] Step 2: Slicing STL to G-code...
# [2024-01-15 14:30:28]  G-code generated in 2.31 seconds: ...
# [2024-01-15 14:30:28]  BUILD COMPLETE
```

### Script 2: Batch Build (Multiple Files)

```powershell
# batch_build.ps1 - Build all SCAD files in a directory

param(
    [string]$SourceDir = "C:\Projects\3dMake\src",
    [string]$SlicerConfig = "default"
)

$ProjectRoot = Split-Path $SourceDir
$buildScript = Join-Path $ProjectRoot "scripts" "build.ps1"

# Find all SCAD files
$scadFiles = Get-ChildItem -Path $SourceDir -Filter "*.scad" -Recurse

Write-Host "Found $($scadFiles.Count) SCAD files"

if ($scadFiles.Count -eq 0) {
    Write-Host "No SCAD files found in $SourceDir"
    exit 1
}

# Process each file
$results = @()
foreach ($file in $scadFiles) {
    Write-Host "`n--- Processing: $($file.Name) ---"
    
    $startTime = Get-Date
    
    # Run build script for this file
    & $buildScript -ScadFile $file.Name -SlicerConfig $SlicerConfig
    
    $duration = (Get-Date) - $startTime
    
    $results += [PSCustomObject]@{
        FileName = $file.Name
        DurationSeconds = $duration.TotalSeconds
        Status = "Success"
        Timestamp = Get-Date
    }
}

# Summary report
Write-Host "`n=== BATCH BUILD SUMMARY ==="
Write-Host "Files processed: $($results.Count)"
Write-Host "Total time: $([math]::Round(($results | Measure-Object -Property DurationSeconds -Sum).Sum, 1)) seconds"

# Save results to CSV
$csvPath = Join-Path $ProjectRoot "logs" "batch_$(Get-Date -Format 'yyyy-MM-dd-HHmmss').csv"
$results | Export-Csv -Path $csvPath -NoTypeInformation
Write-Host "Results saved: $csvPath"
```

**Usage:**

```powershell
.\batch_build.ps1 -SourceDir "C:\Projects\3dMake\src"

# Processes all .scad files automatically
```

---

## Part 2: Parametric Design Variation Testing

### The Problem: Testing Multiple Parameter Values

You want to test the same design with different parameters (e.g., peg diameter: 5mm, 6mm, 7mm):

```
Manually:
1. Open bracelet_holder.scad
2. Change peg_diameter = 5
3. Save, export, slice, print
4. Change peg_diameter = 6
5. Save, export, slice, print
6. Change peg_diameter = 7
7. Save, export, slice, print
Time: 30 minutes
```

### Automated Solution: Parametric Sweep

```powershell
# parametric_sweep.ps1 - Test multiple parameter values

param(
    [string]$TemplateScad = "C:\Projects\3dMake\src\bracelet_holder.scad",
    [hashtable]$ParameterRanges = @{
        "peg_diameter" = @(5, 5.5, 6, 6.5, 7)
        "holder_width" = @(120, 127, 135)
    }
)

$ProjectRoot = "C:\Projects\3dMake"
$variantsDir = Join-Path $ProjectRoot "variants"
$buildScript = Join-Path $ProjectRoot "scripts" "build.ps1"
$logFile = Join-Path $ProjectRoot "logs" "parametric_sweep_$(Get-Date -Format 'yyyy-MM-dd-HHmmss').csv"

# Create variants directory
New-Item -ItemType Directory -Path $variantsDir -Force | Out-Null

# Read template
$template = Get-Content $TemplateScad -Raw

# Generate variants
$results = @()
$variantNum = 0

# For each diameter value
foreach ($dia in $ParameterRanges["peg_diameter"]) {
    
    # For each width value
    foreach ($width in $ParameterRanges["holder_width"]) {
        
        $variantNum++
        $variantName = "variant_dia${dia}_width${width}"
        $variantScad = Join-Path $variantsDir "$variantName.scad"
        
        # Create variant SCAD file with parameters
        $content = $template `
            -replace 'peg_diameter = [\d.]+', "peg_diameter = $dia" `
            -replace 'holder_width = [\d.]+', "holder_width = $width"
        
        $content | Set-Content $variantScad
        
        Write-Host "Generated: $variantName"
        
        # Build variant (STL + G-code)
        $startTime = Get-Date
        
        # Export to STL
        & "C:\Program Files\OpenSCAD\openscad.exe" `
            -o (Join-Path $ProjectRoot "stl" "$variantName.stl") `
            $variantScad
        
        $duration = (Get-Date) - $startTime
        
        # Record result
        $results += [PSCustomObject]@{
            Variant = $variantName
            PegDiameter = $dia
            HolderWidth = $width
            BuildTimeSeconds = $duration.TotalSeconds
            Status = "Success"
            Timestamp = Get-Date
        }
        
        Write-Host "   Built in $($duration.TotalSeconds) seconds"
    }
}

# Save results
$results | Export-Csv -Path $logFile -NoTypeInformation
Write-Host "`nParametric sweep complete: $($results.Count) variants generated"
Write-Host "Results: $logFile"

# Summary statistics
Write-Host "`n=== PARAMETER RANGES TESTED ==="
Write-Host "Peg diameters: $($ParameterRanges['peg_diameter'] -join ', ')"
Write-Host "Holder widths: $($ParameterRanges['holder_width'] -join ', ')"
Write-Host "Total combinations: $($results.Count)"
```

**Usage:**

```powershell
$ranges = @{
    "peg_diameter" = @(5, 5.5, 6, 6.5, 7)
    "holder_width" = @(120, 127, 135)
}

.\parametric_sweep.ps1 -TemplateScad "bracelet_holder.scad" -ParameterRanges $ranges

# Generates 15 variants automatically (5 x 3)
```

**Output CSV:**

```
Variant,PegDiameter,HolderWidth,BuildTimeSeconds,Status,Timestamp
variant_dia5_width120,5,120,2.4,Success,2024-01-15 14:35:22
variant_dia5_width127,5,127,2.5,Success,2024-01-15 14:35:25
variant_dia5_width135,5,135,2.3,Success,2024-01-15 14:35:28
...
```

---

## Part 3: Automated Print Documentation

### Script: Print Logging & Quality Tracking

```powershell
# log_print.ps1 - Document each print with metadata

param(
    [string]$GcodeFile,
    [string]$ProjectName,
    [string]$Material = "PLA",
    [string]$Notes = ""
)

$ProjectRoot = "C:\Projects\3dMake"
$printLogCsv = Join-Path $ProjectRoot "logs" "print_history.csv"

# Get G-code file info
$gcodeInfo = Get-Item $GcodeFile
$gcodeSize = $gcodeInfo.Length / 1MB
$estimatedTime = EstimateTime $GcodeFile  # See function below

# Calculate estimated cost
$weightG = EstimateWeight $GcodeFile
$materialCostPerKg = 20  # PLA at $20/kg
$estimatedCost = ($weightG / 1000) * $materialCostPerKg

# Create log entry
$entry = [PSCustomObject]@{
    PrintID = "PRINT_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
    ProjectName = $ProjectName
    Date = Get-Date
    Material = $Material
    GcodeFile = $gcodeFile
    GcodeSizeMB = [math]::Round($gcodeSize, 2)
    EstimatedTimeHours = [math]::Round($estimatedTime / 3600, 2)
    EstimatedWeightG = [math]::Round($weightG, 1)
    EstimatedCostUSD = [math]::Round($estimatedCost, 2)
    Notes = $Notes
}

# Append to CSV
if (Test-Path $printLogCsv) {
    $entry | Export-Csv -Path $printLogCsv -NoTypeInformation -Append
} else {
    $entry | Export-Csv -Path $printLogCsv -NoTypeInformation
}

Write-Host "Print logged:"
Write-Host "  Project: $ProjectName"
Write-Host "  File: $($gcodeInfo.Name)"
Write-Host "  Estimated time: $([math]::Round($estimatedTime / 3600, 2)) hours"
Write-Host "  Estimated weight: $([math]::Round($weightG, 1))g"
Write-Host "  Estimated cost: $$([math]::Round($estimatedCost, 2))"

# Function to estimate print time from G-code (simplified)
function EstimateTime {
    param([string]$GcodeFile)
    
    $lines = @(Get-Content $GcodeFile | Select-String "^G1" | Measure-Object).Count
    # Rough estimate: 10 lines per second
    return $lines / 10
}

# Function to estimate weight from G-code (simplified)
function EstimateWeight {
    param([string]$GcodeFile)
    
    # G-code filament estimate (if supported by your slicer)
    $content = Get-Content $GcodeFile -Raw
    
    if ($content -match "filament used = ([\d.]+)") {
        return [double]$matches[1]
    } else {
        return 0  # Fallback
    }
}
```

**Usage:**

```powershell
.\log_print.ps1 `
    -GcodeFile "C:\Projects\3dMake\gcode\bracelet_holder.gcode" `
    -ProjectName "Bracelet Holder" `
    -Material "PLA" `
    -Notes "Final design, tested with actual bracelets"
```

---

## Part 4: Printer Communication & Monitoring

### Script: Send G-code to Printer (USB)

```powershell
# send_to_printer.ps1 - Copy G-code to printer USB

param(
    [string]$GcodeFile,
    [string]$PrinterUSBLetter = "E"  # E:, F:, G:, etc.
)

$printerDrive = "${PrinterUSBLetter}:\"

# Check if USB drive connected
if (-not (Test-Path $printerDrive)) {
    Write-Host "[NO] ERROR: Printer USB not found at $PrinterUSBLetter"
    Write-Host "Available drives:"
    Get-PSDrive -PSProvider FileSystem | Where-Object Name -Like "[D-Z]" | Select-Object Name
    exit 1
}

# Copy file
$filename = Split-Path $GcodeFile -Leaf
$destination = Join-Path $printerDrive $filename

Copy-Item -Path $GcodeFile -Destination $destination -Force

Write-Host " G-code copied to printer USB:"
Write-Host "  From: $GcodeFile"
Write-Host "  To: $destination"
Write-Host "`nNext steps:"
Write-Host "  1. Eject USB safely from computer"
Write-Host "  2. Insert USB into printer"
Write-Host "  3. Select file on printer screen"
Write-Host "  4. Press print"
```

**Usage:**

```powershell
.\send_to_printer.ps1 -GcodeFile "C:\Projects\3dMake\gcode\bracelet_holder.gcode" -PrinterUSBLetter "E"
```

### Script: Monitor Printer Status (Network Printers)

```powershell
# monitor_printer.ps1 - Check printer status via API

param(
    [string]$PrinterIP,
    [int]$CheckInterval = 30,    # seconds
    [int]$MaxChecks = 240        # 2 hours max
)

$printerUrl = "http://$PrinterIP:8080/api/printer"
$checksPerformed = 0

Write-Host "Monitoring printer at $PrinterIP"
Write-Host "Check interval: $CheckInterval seconds"
Write-Host "Ctrl+C to stop`n"

while ($checksPerformed -lt $MaxChecks) {
    try {
        # Get printer status
        $response = Invoke-WebRequest -Uri $printerUrl -UseBasicParsing -ErrorAction Stop
        $status = $response.Content | ConvertFrom-Json
        
        $state = $status.state.text
        $progress = $status.progress.completion
        $timeRemaining = $status.progress.printTimeLeft
        
        Write-Host "[$((Get-Date).ToString("HH:mm:ss"))] State: $state | Progress: $progress% | Time remaining: $timeRemaining seconds"
        
        # If print completed, exit loop
        if ($state -eq "Operational") {
            Write-Host "`n Print complete!"
            break
        }
        
    } catch {
        Write-Host "Connection error: $_"
    }
    
    Start-Sleep -Seconds $CheckInterval
    $checksPerformed++
}

if ($checksPerformed -ge $MaxChecks) {
    Write-Host "Max monitoring time reached. Stopping."
}
```

**Usage:**

```powershell
.\monitor_printer.ps1 -PrinterIP "192.168.1.100" -CheckInterval 30
```

---

## Part 5: Complete Workflow Integration

### Master Script: Design -> Print -> Log

```powershell
# full_workflow.ps1 - Complete automation from design to printing

param(
    [string]$ProjectName,
    [string]$ScadFile,
    [string]$Material = "PLA",
    [string]$Notes = "",
    [switch]$SendToPrinter,
    [string]$PrinterUSBLetter = "E"
)

$ProjectRoot = "C:\Projects\3dMake"

Write-Host "=== 3dMake Full Workflow Automation ==="
Write-Host "Project: $ProjectName"
Write-Host ""

# Step 1: Build (SCAD -> STL -> G-code)
Write-Host "Step 1: Building..."
& "$ProjectRoot\scripts\build.ps1" -ScadFile $ScadFile
if ($LASTEXITCODE -ne 0) { exit 1 }

# Step 2: Log the print
Write-Host "`nStep 2: Logging print metadata..."
$gcodeFile = Join-Path $ProjectRoot "gcode" ([System.IO.Path]::GetFileNameWithoutExtension($ScadFile) + ".gcode")
& "$ProjectRoot\scripts\log_print.ps1" `
    -GcodeFile $gcodeFile `
    -ProjectName $ProjectName `
    -Material $Material `
    -Notes $Notes

# Step 3: Send to printer (optional)
if ($SendToPrinter) {
    Write-Host "`nStep 3: Sending to printer..."
    & "$ProjectRoot\scripts\send_to_printer.ps1" `
        -GcodeFile $gcodeFile `
        -PrinterUSBLetter $PrinterUSBLetter
}

Write-Host "`n Workflow complete!"
```

**Usage:**

```powershell
# Full workflow with automatic printer transfer
.\full_workflow.ps1 `
    -ProjectName "Bracelet Holder" `
    -ScadFile "bracelet_holder.scad" `
    -Material "PLA" `
    -Notes "Final design, v2 with improved peg strength" `
    -SendToPrinter `
    -PrinterUSBLetter "E"
```

---

## Part 6: PowerShell Skills Applied to SCAD

### Lesson Mapping: PowerShell -> SCAD Workflows

| PowerShell Lesson | SCAD Application | Example |
|---|---|---|
| **PS 1: Navigation** | Working with project directories | Using `cd` to navigate src/ -> stl/ -> gcode/ |
| **PS 2: File Manipulation** | Copying, organizing SCAD files | Copy design files, organize variants by date |
| **PS 3: Piping & Objects** | Pass data between scripts | `$results \| Export-Csv` exports analysis |
| **PS 4: Variables & Aliases** | Parameterize SCAD workflows | Variables store file paths, material types, etc. |
| **PS 5: Functions & Modules** | Reusable automation blocks | Build, slice, log = functions in one script |
| **PS Unit Test** | Verify workflow correctness | Test that STL file exists before slicing |

### Example: File Navigation with SCAD Projects

```powershell
# Navigate between SCAD project folders
$ProjectRoot = "C:\Projects\3dMake"

# Go to source directory
cd "$ProjectRoot\src"
Get-ChildItem -Filter "*.scad"  # List all SCAD files

# Process each file
foreach ($file in Get-ChildItem -Filter "*.scad") {
    Write-Host "Processing: $($file.Name)"
    # Do something with each file
}

# Go to output directory and check results
cd "$ProjectRoot\stl"
Get-ChildItem -Filter "*.stl" | Measure-Object -Sum
```

### Example: Working with Piping & Objects

```powershell
# Build all files, then get statistics

Get-ChildItem -Path "$ProjectRoot\src" -Filter "*.scad" |
    ForEach-Object {
        # Build each one
        & .\build.ps1 -ScadFile $_.Name
    } |
    # Analyze results
    Group-Object -Property Status |
    Select-Object Name, Count
```

---

## Accessibility Considerations

### Why PowerShell for SCAD?

1. **Screen Reader Friendly:** Console output = text (not UI clicks)
2. **Scriptable:** Can run overnight, results logged
3. **Auditable:** Every step written to log file
4. **Shareable:** Scripts document the process for others
5. **Testable:** Can verify each step independently

### Example: Accessible Build Output

```
[2024-01-15 14:30:22] Starting build for bracelet_holder.scad
[2024-01-15 14:30:23] Step 1: Exporting SCAD to STL...
[2024-01-15 14:30:25]  STL exported in 2.41 seconds
[2024-01-15 14:30:26] Step 2: Slicing STL to G-code...
[2024-01-15 14:30:28]  G-code generated in 2.31 seconds
[2024-01-15 14:30:28] File sizes: STL=2.15MB, G-code=4.32MB
[2024-01-15 14:30:28]  BUILD COMPLETE

Ready to print: C:\Projects\3dMake\gcode\bracelet_holder.gcode
```

All information is **text-based and sequential**-perfectly accessible to screen readers.

---

## Best Practices & Tips

### 1. Always Log Everything

```powershell
function Write-Log {
    param(
        [string]$Message,
        [string]$LogFile
    )
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = "[$timestamp] $Message"
    Write-Host $entry
    Add-Content -Path $LogFile -Value $entry
}
```

### 2. Verify Steps Succeed Before Continuing

```powershell
# Don't just run commands-check they worked
& "C:\Program Files\OpenSCAD\openscad.exe" -o "$StlFile" "$ScadFile"

if (-not (Test-Path $StlFile)) {
    Write-Log "ERROR: STL creation failed"
    exit 1
}

Write-Log " STL created successfully"
```

### 3. Make Scripts Reusable

```powershell
# BAD: Hardcoded paths
$scadFile = "C:\Users\John\Desktop\bracelet_holder.scad"

# GOOD: Parameters with defaults
param(
    [string]$ScadFile = "bracelet_holder.scad",
    [string]$ProjectRoot = "C:\Projects\3dMake"
)

$fullPath = Join-Path $ProjectRoot "src" $ScadFile
```

### 4. Use Configuration Files

```powershell
# config.ps1 - Centralized settings
$Config = @{
    ProjectRoot = "C:\Projects\3dMake"
    OpenSCADPath = "C:\Program Files\OpenSCAD\openscad.exe"
    SlicerPath = "C:\Program Files\Prusa3D\PrusaSlicer\prusa-slicer.exe"
    PrinterUSB = "E"
    DefaultMaterial = "PLA"
    DefaultInfill = 20
}

# Use in scripts:
# . .\config.ps1
# & $Config.OpenSCADPath ...
```

---

## Troubleshooting Automated Workflows

| Problem | Cause | Solution |
|---|---|---|
| Scripts won't run | Execution policy | `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned` |
| Command not found | Tool not in PATH | Specify full path: `& "C:\Program Files\OpenSCAD\openscad.exe"` |
| Files not created | Wrong working directory | Use absolute paths with `Join-Path` |
| Script hangs | Waiting for user input | Disable UI input; use `-o` flag for batch operations |
| CSV data corrupted | Special characters in notes | Properly quote strings in CSV export |
| No output/logging | Path doesn't exist | Create directory first: `New-Item -Type Directory -Path ... -Force` |

---

## Summary: PowerShell + SCAD Integration Benefits

### Time Savings

| Task | Manual | Automated | Savings |
|---|---|---|---|
| Single design build | 5 min | 2.5 min | 50% |
| Test 10 parameter variations | 50 min | 5 min | 90% |
| Batch processing 20 designs | 100 min | 10 min | 90% |

### Consistency

- [YES] Same process every time (no missed steps)
- [YES] Reproducible results (exact same settings)
- [YES] Comprehensive logging (documentation automatic)

### Scalability

- [YES] 1 design or 1,000 designs = same time commitment
- [YES] Run overnight for batch operations
- [YES] Easy to expand with new features

### Accessibility

- [YES] All interaction is text-based (screen reader friendly)
- [YES] Results logged in CSV (machine-readable, sortable)
- [YES] Repeatable (can verify steps later)

---

## Next Steps

1. **Try the basic build script** (Script 1) with one of your SCAD files
2. **Add logging** (Script 3) to track what you create
3. **Test parametric sweeps** (Script 2) with design variations
4. **Integrate full workflow** (Script 5) for complete automation
5. **Customize config.ps1** for your specific setup

**Remember:** Start simple, test each script individually, then combine them into larger workflows. PowerShell is most powerful when built incrementally!
