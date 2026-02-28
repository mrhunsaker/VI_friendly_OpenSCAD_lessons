[Header 3 ("3dmake_foundation-appendix_d_powershell_integration", [], []) [Str "Appendix B: PowerShell Integration for SCAD Workflows"], Para [Str "This appendix shows how PowerShell (command-line scripting) streamlines 3D design workflows, automating the repetitive tasks from design through printing. It bridges PowerShell_Foundation concepts with 3dMake_Foundation practical applications."], Para [Str "Referenced in: Lessons 9 (Automation), 10 (Mastery), and any lesson requiring batch operations"], Para [Str "Prerequisites: Completion of PowerShell_Foundation (Lessons 1-6)"], Header 4 ("overview-why-automate-scad-workflows", ["unnumbered", "unlisted"], []) [Str "Overview: Why Automate SCAD Workflows?"], Header 5 ("manual-workflow-time-consuming", ["unnumbered", "unlisted"], []) [Str "Manual Workflow (Time-Consuming)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Open SCAD manually -> Edit parameters -> Save -> Export STL"]], [Plain [Str "Open Slicer manually -> Load STL -> Adjust settings -> Slice -> Export G-code"]], [Plain [Str "Transfer G-code to printer via USB"]], [Plain [Str "Record results in notebook"]], [Plain [Str "Repeat for next variation (variant 2, variant 3, etc.)"]]], Para [Str "Time: ", Str "~", Str "20-30 minutes per design iteration"], Header 5 ("automated-workflow-fast--reproducible", ["unnumbered", "unlisted"], []) [Str "Automated Workflow (Fast & Reproducible)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create PowerShell script with design parameters"]], [Plain [Str "Script automatically:"], BulletList [[Plain [Str "Generates SCAD code"]], [Plain [Str "Exports to STL"]], [Plain [Str "Slices to G-code"]], [Plain [Str "Transfers to printer"]], [Plain [Str "Logs results"]]]], [Plain [Str "Run script once, walk away"]], [Plain [Str "Check results later"]]], Para [Str "Time: 2-3 minutes per iteration (plus print time)"], Header 5 ("benefits-of-automation", ["unnumbered", "unlisted"], []) [Str "Benefits of Automation"], BulletList [[Plain [Str "[", Str "YES", Str "]", Str " Speed: 10x faster for batch operations"]], [Plain [Str "[", Str "YES", Str "]", Str " Consistency: No manual errors"]], [Plain [Str "[", Str "YES", Str "]", Str " Reproducibility: Same settings every time"]], [Plain [Str "[", Str "YES", Str "]", Str " Scalability: Test 5, 10, or 100 variations easily"]], [Plain [Str "[", Str "YES", Str "]", Str " Logging: Automatic documentation"]], [Plain [Str "[", Str "YES", Str "]", Str " Accessibility: Screen reader captures script output (not UI clicks)"]]], Header 4 ("prerequisites--setup", ["unnumbered", "unlisted"], []) [Str "Prerequisites & Setup"], Header 5 ("required-software", ["unnumbered", "unlisted"], []) [Str "Required Software"], CodeBlock ("", ["powershell"], []) "# Check what you have installed
where openscad      # OpenSCAD
where prusa-slicer  # PrusaSlicer (or your slicer)
where python3       # Python (optional, for advanced scripts)
", Header 5 ("directory-structure", ["unnumbered", "unlisted"], []) [Str "Directory Structure"], Para [Str "Create a project directory:"], CodeBlock ("", ["plaintext"], []) "C:\\Projects\\3dMake\\
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
", Header 5 ("powershell-execution-policy", ["unnumbered", "unlisted"], []) [Str "PowerShell Execution Policy"], CodeBlock ("", ["powershell"], []) "# Check current policy
Get-ExecutionPolicy
# If it's \"Restricted\", change it (requires admin)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# Verify change
Get-ExecutionPolicy
", Header 4 ("basic-workflow-automation", ["unnumbered", "unlisted"], []) [Str "Basic Workflow Automation"], Header 5 ("script-1-single-file-build", ["unnumbered", "unlisted"], []) [Str "Script 1: Single-File Build"], Para [Str "This script takes a SCAD file and converts it through the entire workflow:"], CodeBlock ("", ["powershell"], []) "# build.ps1 - Convert SCAD -> STL -> G-code
param(
    [string]$ScadFile,          # Input: bracelet_holder.scad
    [string]$OutputDir = \".\\\",  # Output directory
    [string]$SlicerConfig = \"default\"
)
# Set up paths
$ProjectRoot = \"C:\\Projects\\3dMake\"
$ScadFile = Join-Path $ProjectRoot \"src\" $ScadFile
$StlFile = Join-Path $ProjectRoot \"stl\" ([System.IO.Path]::GetFileNameWithoutExtension($ScadFile) + \".stl\")
$GcodeFile = Join-Path $ProjectRoot \"gcode\" ([System.IO.Path]::GetFileNameWithoutExtension($ScadFile) + \".gcode\")
$LogFile = Join-Path $ProjectRoot \"logs\" \"build_$(Get-Date -Format 'yyyy-MM-dd').log\"
# Log function
function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format \"yyyy-MM-dd HH:mm:ss\"
    $logEntry = \"[$timestamp] $Message\"
    Write-Host $logEntry
    Add-Content -Path $LogFile -Value $logEntry
}
Write-Log \"Starting build for $($ScadFile | Split-Path -Leaf)\"
# Step 1: Export STL
Write-Log \"Step 1: Exporting SCAD to STL...\"
$startTime = Get-Date
& \"C:\\Program Files\\OpenSCAD\\openscad.exe\" `
    -o \"$StlFile\" `
    \"$ScadFile\"
$duration = (Get-Date) - $startTime
Write-Log \" STL exported in $($duration.TotalSeconds) seconds: $StlFile\"
# Verify STL exists
if (-not (Test-Path $StlFile)) {
    Write-Log \"[NO] ERROR: STL file not created\"
    exit 1
}
# Step 2: Slice to G-code
Write-Log \"Step 2: Slicing STL to G-code...\"
$startTime = Get-Date
& \"C:\\Program Files\\Prusa3D\\PrusaSlicer\\prusa-slicer.exe\" `
    --load-config-file \"$SlicerConfig\" `
    --export-gcode \"$GcodeFile\" `
    \"$StlFile\"
$duration = (Get-Date) - $startTime
Write-Log \" G-code generated in $($duration.TotalSeconds) seconds: $GcodeFile\"
# Verify G-code exists
if (-not (Test-Path $GcodeFile)) {
    Write-Log \"[NO] ERROR: G-code file not created\"
    exit 1
}
# Step 3: Get file info
$stlSize = (Get-Item $StlFile).Length / 1MB
$gcodeSize = (Get-Item $GcodeFile).Length / 1MB
Write-Log \"File sizes: STL=$([math]::Round($stlSize, 2))MB, G-code=$([math]::Round($gcodeSize, 2))MB\"
Write-Log \" BUILD COMPLETE\"
Write-Log \"Ready to print: $GcodeFile\"
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) "# Run the script
.\\build.ps1 -ScadFile \"bracelet_holder.scad\"
# Output example:
# [2024-01-15 14:30:22] Starting build for bracelet_holder.scad
# [2024-01-15 14:30:23] Step 1: Exporting SCAD to STL...
# [2024-01-15 14:30:25]  STL exported in 2.41 seconds: ...
# [2024-01-15 14:30:26] Step 2: Slicing STL to G-code...
# [2024-01-15 14:30:28]  G-code generated in 2.31 seconds: ...
# [2024-01-15 14:30:28]  BUILD COMPLETE
", Header 5 ("script-2-batch-build-multiple-files", ["unnumbered", "unlisted"], []) [Str "Script 2: Batch Build (Multiple Files)"], CodeBlock ("", ["powershell"], []) "# batch_build.ps1 - Build all SCAD files in a directory
param(
    [string]$SourceDir = \"C:\\Projects\\3dMake\\src\",
    [string]$SlicerConfig = \"default\"
)
$ProjectRoot = Split-Path $SourceDir
$buildScript = Join-Path $ProjectRoot \"scripts\" \"build.ps1\"
# Find all SCAD files
$scadFiles = Get-ChildItem -Path $SourceDir -Filter \"*.scad\" -Recurse
Write-Host \"Found $($scadFiles.Count) SCAD files\"
if ($scadFiles.Count -eq 0) {
    Write-Host \"No SCAD files found in $SourceDir\"
    exit 1
}
# Process each file
$results = @()
foreach ($file in $scadFiles) {
    Write-Host \"`n--- Processing: $($file.Name) ---\"
    $startTime = Get-Date
    # Run build script for this file
    & $buildScript -ScadFile $file.Name -SlicerConfig $SlicerConfig
    $duration = (Get-Date) - $startTime
    $results += [PSCustomObject]@{
        FileName = $file.Name
        DurationSeconds = $duration.TotalSeconds
        Status = \"Success\"
        Timestamp = Get-Date
    }
}
# Summary report
Write-Host \"`n=== BATCH BUILD SUMMARY ===\"
Write-Host \"Files processed: $($results.Count)\"
Write-Host \"Total time: $([math]::Round(($results | Measure-Object -Property DurationSeconds -Sum).Sum, 1)) seconds\"
# Save results to CSV
$csvPath = Join-Path $ProjectRoot \"logs\" \"batch_$(Get-Date -Format 'yyyy-MM-dd-HHmmss').csv\"
$results | Export-Csv -Path $csvPath -NoTypeInformation
Write-Host \"Results saved: $csvPath\"
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) ".\\batch_build.ps1 -SourceDir \"C:\\Projects\\3dMake\\src\"
# Processes all .scad files automatically
", Header 4 ("parametric-design-variation-testing", ["unnumbered", "unlisted"], []) [Str "Parametric Design Variation Testing"], Header 5 ("the-problem-testing-multiple-parameter-values", ["unnumbered", "unlisted"], []) [Str "The Problem: Testing Multiple Parameter Values"], Para [Str "You want to test the same design with different parameters (e.g., peg diameter: 5mm, 6mm, 7mm):"], Para [Str "Manually:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Open bracelet_holder.scad"]], [Plain [Str "Change peg_diameter = 5"]], [Plain [Str "Save, export, slice, print"]], [Plain [Str "Change peg_diameter = 6"]], [Plain [Str "Save, export, slice, print"]], [Plain [Str "Change peg_diameter = 7"]], [Plain [Str "Save, export, slice, print", SoftBreak, Str "Time: 30 minutes"]]], Header 5 ("automated-solution-parametric-sweep", ["unnumbered", "unlisted"], []) [Str "Automated Solution: Parametric Sweep"], CodeBlock ("", ["powershell"], []) "# parametric_sweep.ps1 - Test multiple parameter values
param(
    [string]$TemplateScad = \"C:\\Projects\\3dMake\\src\\bracelet_holder.scad\",
    [hashtable]$ParameterRanges = @{
        \"peg_diameter\" = @(5, 5.5, 6, 6.5, 7)
        \"holder_width\" = @(120, 127, 135)
    }
)
$ProjectRoot = \"C:\\Projects\\3dMake\"
$variantsDir = Join-Path $ProjectRoot \"variants\"
$buildScript = Join-Path $ProjectRoot \"scripts\" \"build.ps1\"
$logFile = Join-Path $ProjectRoot \"logs\" \"parametric_sweep_$(Get-Date -Format 'yyyy-MM-dd-HHmmss').csv\"
# Create variants directory
New-Item -ItemType Directory -Path $variantsDir -Force | Out-Null
# Read template
$template = Get-Content $TemplateScad -Raw
# Generate variants
$results = @()
$variantNum = 0
# For each diameter value
foreach ($dia in $ParameterRanges[\"peg_diameter\"]) {
    # For each width value
    foreach ($width in $ParameterRanges[\"holder_width\"]) {
        $variantNum++
        $variantName = \"variant_dia${dia}_width${width}\"
        $variantScad = Join-Path $variantsDir \"$variantName.scad\"
        # Create variant SCAD file with parameters
        $content = $template `
            -replace 'peg_diameter = [\\d.]+', \"peg_diameter = $dia\" `
            -replace 'holder_width = [\\d.]+', \"holder_width = $width\"
        $content | Set-Content $variantScad
        Write-Host \"Generated: $variantName\"
        # Build variant (STL + G-code)
        $startTime = Get-Date
        # Export to STL
        & \"C:\\Program Files\\OpenSCAD\\openscad.exe\" `
            -o (Join-Path $ProjectRoot \"stl\" \"$variantName.stl\") `
            $variantScad
        $duration = (Get-Date) - $startTime
        # Record result
        $results += [PSCustomObject]@{
            Variant = $variantName
            PegDiameter = $dia
            HolderWidth = $width
            BuildTimeSeconds = $duration.TotalSeconds
            Status = \"Success\"
            Timestamp = Get-Date
        }
        Write-Host \"   Built in $($duration.TotalSeconds) seconds\"
    }
}
# Save results
$results | Export-Csv -Path $logFile -NoTypeInformation
Write-Host \"`nParametric sweep complete: $($results.Count) variants generated\"
Write-Host \"Results: $logFile\"
# Summary statistics
Write-Host \"`n=== PARAMETER RANGES TESTED ===\"
Write-Host \"Peg diameters: $($ParameterRanges['peg_diameter'] -join ', ')\"
Write-Host \"Holder widths: $($ParameterRanges['holder_width'] -join ', ')\"
Write-Host \"Total combinations: $($results.Count)\"
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) "$ranges = @{
    \"peg_diameter\" = @(5, 5.5, 6, 6.5, 7)
    \"holder_width\" = @(120, 127, 135)
}
.\\parametric_sweep.ps1 -TemplateScad \"bracelet_holder.scad\" -ParameterRanges $ranges
# Generates 15 variants automatically (5 x 3)
", Para [Str "Output CSV:"], CodeBlock ("", ["csv"], []) "Variant,PegDiameter,HolderWidth,BuildTimeSeconds,Status,Timestamp
variant_dia5_width120,5,120,2.4,Success,2024-01-15 14:35:22
variant_dia5_width127,5,127,2.5,Success,2024-01-15 14:35:25
variant_dia5_width135,5,135,2.3,Success,2024-01-15 14:35:28
...
", Header 4 ("automated-print-documentation", ["unnumbered", "unlisted"], []) [Str "Automated Print Documentation"], Header 5 ("script-print-logging--quality-tracking", ["unnumbered", "unlisted"], []) [Str "Script: Print Logging & Quality Tracking"], CodeBlock ("", ["powershell"], []) "# log_print.ps1 - Document each print with metadata
param(
    [string]$GcodeFile,
    [string]$ProjectName,
    [string]$Material = \"PLA\",
    [string]$Notes = \"\"
)
$ProjectRoot = \"C:\\Projects\\3dMake\"
$printLogCsv = Join-Path $ProjectRoot \"logs\" \"print_history.csv\"
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
    PrintID = \"PRINT_$(Get-Date -Format 'yyyyMMdd_HHmmss')\"
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
Write-Host \"Print logged:\"
Write-Host \"  Project: $ProjectName\"
Write-Host \"  File: $($gcodeInfo.Name)\"
Write-Host \"  Estimated time: $([math]::Round($estimatedTime / 3600, 2)) hours\"
Write-Host \"  Estimated weight: $([math]::Round($weightG, 1))g\"
Write-Host \"  Estimated cost: $$([math]::Round($estimatedCost, 2))\"
# Function to estimate print time from G-code (simplified)
function EstimateTime {
    param([string]$GcodeFile)
    $lines = @(Get-Content $GcodeFile | Select-String \"^G1\" | Measure-Object).Count
    # Rough estimate: 10 lines per second
    return $lines / 10
}
# Function to estimate weight from G-code (simplified)
function EstimateWeight {
    param([string]$GcodeFile)
    # G-code filament estimate (if supported by your slicer)
    $content = Get-Content $GcodeFile -Raw
    if ($content -match \"filament used = ([\\d.]+)\") {
        return [double]$matches[1]
    } else {
        return 0  # Fallback
    }
}
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) ".\\log_print.ps1 `
    -GcodeFile \"C:\\Projects\\3dMake\\gcode\\bracelet_holder.gcode\" `
    -ProjectName \"Bracelet Holder\" `
    -Material \"PLA\" `
    -Notes \"Final design, tested with actual bracelets\"
", Header 4 ("printer-communication--monitoring", ["unnumbered", "unlisted"], []) [Str "Printer Communication & Monitoring"], Header 5 ("script-send-g-code-to-printer-usb", ["unnumbered", "unlisted"], []) [Str "Script: Send G-code to Printer (USB)"], CodeBlock ("", ["powershell"], []) "# send_to_printer.ps1 - Copy G-code to printer USB
param(
    [string]$GcodeFile,
    [string]$PrinterUSBLetter = \"E\"  # E:, F:, G:, etc.
)
$printerDrive = \"${PrinterUSBLetter}:\\\"
# Check if USB drive connected
if (-not (Test-Path $printerDrive)) {
    Write-Host \"[NO] ERROR: Printer USB not found at $PrinterUSBLetter\"
    Write-Host \"Available drives:\"
    Get-PSDrive -PSProvider FileSystem | Where-Object Name -Like \"[D-Z]\" | Select-Object Name
    exit 1
}
# Copy file
$filename = Split-Path $GcodeFile -Leaf
$destination = Join-Path $printerDrive $filename
Copy-Item -Path $GcodeFile -Destination $destination -Force
Write-Host \" G-code copied to printer USB:\"
Write-Host \"  From: $GcodeFile\"
Write-Host \"  To: $destination\"
Write-Host \"`nNext steps:\"
Write-Host \"  1. Eject USB safely from computer\"
Write-Host \"  2. Insert USB into printer\"
Write-Host \"  3. Select file on printer screen\"
Write-Host \"  4. Press print\"
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) ".\\send_to_printer.ps1 -GcodeFile \"C:\\Projects\\3dMake\\gcode\\bracelet_holder.gcode\" -PrinterUSBLetter \"E\"
", Header 5 ("script-monitor-printer-status-network-printers", ["unnumbered", "unlisted"], []) [Str "Script: Monitor Printer Status (Network Printers)"], CodeBlock ("", ["powershell"], []) "# monitor_printer.ps1 - Check printer status via API
param(
    [string]$PrinterIP,
    [int]$CheckInterval = 30,    # seconds
    [int]$MaxChecks = 240        # 2 hours max
)
$printerUrl = \"[https://example.com](https://example.com)
$checksPerformed = 0
Write-Host \"Monitoring printer at $PrinterIP\"
Write-Host \"Check interval: $CheckInterval seconds\"
Write-Host \"Ctrl+C to stop`n\"
while ($checksPerformed -lt $MaxChecks) {
    try {
        # Get printer status
        $response = Invoke-WebRequest -Uri $printerUrl -UseBasicParsing -ErrorAction Stop
        $status = $response.Content | ConvertFrom-Json
        $state = $status.state.text
        $progress = $status.progress.completion
        $timeRemaining = $status.progress.printTimeLeft
        Write-Host \"[$((Get-Date).ToString(\"HH:mm:ss\"))] State: $state | Progress: $progress% | Time remaining: $timeRemaining seconds\"
        # If print completed, exit loop
        if ($state -eq \"Operational\") {
            Write-Host \"`n Print complete!\"
            break
        }
    } catch {
        Write-Host \"Connection error: $_\"
    }
    Start-Sleep -Seconds $CheckInterval
    $checksPerformed++
}
if ($checksPerformed -ge $MaxChecks) {
    Write-Host \"Max monitoring time reached. Stopping.\"
}
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) ".\\monitor_printer.ps1 -PrinterIP \"192.168.1.100\" -CheckInterval 30
", Header 4 ("complete-workflow-integration", ["unnumbered", "unlisted"], []) [Str "Complete Workflow Integration"], Header 5 ("master-script-design---print---log", ["unnumbered", "unlisted"], []) [Str "Master Script: Design -> Print -> Log"], CodeBlock ("", ["powershell"], []) "# full_workflow.ps1 - Complete automation from design to printing
param(
    [string]$ProjectName,
    [string]$ScadFile,
    [string]$Material = \"PLA\",
    [string]$Notes = \"\",
    [switch]$SendToPrinter,
    [string]$PrinterUSBLetter = \"E\"
)
$ProjectRoot = \"C:\\Projects\\3dMake\"
Write-Host \"=== 3dMake Full Workflow Automation ===\"
Write-Host \"Project: $ProjectName\"
Write-Host \"\"
# Step 1: Build (SCAD -> STL -> G-code)
Write-Host \"Step 1: Building...\"
& \"$ProjectRoot\\scripts\\build.ps1\" -ScadFile $ScadFile
if ($LASTEXITCODE -ne 0) { exit 1 }
# Step 2: Log the print
Write-Host \"`nStep 2: Logging print metadata...\"
$gcodeFile = Join-Path $ProjectRoot \"gcode\" ([System.IO.Path]::GetFileNameWithoutExtension($ScadFile) + \".gcode\")
& \"$ProjectRoot\\scripts\\log_print.ps1\" `
    -GcodeFile $gcodeFile `
    -ProjectName $ProjectName `
    -Material $Material `
    -Notes $Notes
# Step 3: Send to printer (optional)
if ($SendToPrinter) {
    Write-Host \"`nStep 3: Sending to printer...\"
    & \"$ProjectRoot\\scripts\\send_to_printer.ps1\" `
        -GcodeFile $gcodeFile `
        -PrinterUSBLetter $PrinterUSBLetter
}
Write-Host \"`n Workflow complete!\"
", Para [Str "Usage:"], CodeBlock ("", ["powershell"], []) "# Full workflow with automatic printer transfer
.\\full_workflow.ps1 `
    -ProjectName \"Bracelet Holder\" `
    -ScadFile \"bracelet_holder.scad\" `
    -Material \"PLA\" `
    -Notes \"Final design, v2 with improved peg strength\" `
    -SendToPrinter `
    -PrinterUSBLetter \"E\"
", Header 4 ("powershell-skills-applied-to-scad", ["unnumbered", "unlisted"], []) [Str "PowerShell Skills Applied to SCAD"], Header 5 ("lesson-mapping-powershell---scad-workflows", ["unnumbered", "unlisted"], []) [Str "Lesson Mapping: PowerShell -> SCAD Workflows"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.24324324324324326)), (AlignDefault, (ColWidth 0.3063063063063063)), (AlignDefault, (ColWidth 0.45045045045045046))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PowerShell Lesson"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "SCAD Application"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Example"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PS 1: Navigation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Working with project directories"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Using ", Code ("", [], []) "cd", Str " to navigate src/ -> stl/ -> gcode/"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PS 2: File Manipulation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Copying, organizing SCAD files"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Copy design files, organize variants by date"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PS 3: Piping & Objects"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Pass data between scripts"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "$results | Export-Csv", Str " exports analysis"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PS 4: Variables & Aliases"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Parameterize SCAD workflows"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Variables store file paths, material types, etc."]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PS 5: Functions & Modules"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Reusable automation blocks"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Build, slice, log = functions in one script"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PS Unit Test"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Verify workflow correctness"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Test that STL file exists before slicing"]]]])] (TableFoot ("", [], []) []), Header 5 ("example-file-navigation-with-scad-projects", ["unnumbered", "unlisted"], []) [Str "Example: File Navigation with SCAD Projects"], CodeBlock ("", ["powershell"], []) "# Navigate between SCAD project folders
$ProjectRoot = \"C:\\Projects\\3dMake\"
# Go to source directory
cd \"$ProjectRoot\\src\"
Get-ChildItem -Filter \"*.scad\"  # List all SCAD files
# Process each file
foreach ($file in Get-ChildItem -Filter \"*.scad\") {
    Write-Host \"Processing: $($file.Name)\"
    # Do something with each file
}
# Go to output directory and check results
cd \"$ProjectRoot\\stl\"
Get-ChildItem -Filter \"*.stl\" | Measure-Object -Sum
", Header 5 ("example-working-with-piping--objects", ["unnumbered", "unlisted"], []) [Str "Example: Working with Piping & Objects"], CodeBlock ("", ["powershell"], []) "# Build all files, then get statistics
Get-ChildItem -Path \"$ProjectRoot\\src\" -Filter \"*.scad\" |
    ForEach-Object {
        # Build each one
        & .\\build.ps1 -ScadFile $_.Name
    } |
    # Analyze results
    Group-Object -Property Status |
    Select-Object Name, Count
", Header 4 ("accessibility-considerations", ["unnumbered", "unlisted"], []) [Str "Accessibility Considerations"], Header 5 ("why-powershell-for-scad", ["unnumbered", "unlisted"], []) [Str "Why PowerShell for SCAD?"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Screen Reader Friendly: Console output = text (not UI clicks)"]], [Plain [Str "Scriptable: Can run overnight, results logged"]], [Plain [Str "Auditable: Every step written to log file"]], [Plain [Str "Shareable: Scripts document the process for others"]], [Plain [Str "Testable: Can verify each step independently"]]], Header 5 ("example-accessible-build-output", ["unnumbered", "unlisted"], []) [Str "Example: Accessible Build Output"], CodeBlock ("", ["plaintext"], []) "[2024-01-15 14:30:22] Starting build for bracelet_holder.scad
[2024-01-15 14:30:23] Step 1: Exporting SCAD to STL...
[2024-01-15 14:30:25]  STL exported in 2.41 seconds
[2024-01-15 14:30:26] Step 2: Slicing STL to G-code...
[2024-01-15 14:30:28]  G-code generated in 2.31 seconds
[2024-01-15 14:30:28] File sizes: STL=2.15MB, G-code=4.32MB
[2024-01-15 14:30:28]  BUILD COMPLETE

Ready to print: C:\\Projects\\3dMake\\gcode\\bracelet_holder.gcode
", Para [Str "All information is text-based and sequential-perfectly accessible to screen readers."], Header 4 ("best-practices--tips", ["unnumbered", "unlisted"], []) [Str "Best Practices & Tips"], Header 5 ("1-always-log-everything", ["unnumbered", "unlisted"], []) [Str "1. Always Log Everything"], CodeBlock ("", ["powershell"], []) "function Write-Log {
    param(
        [string]$Message,
        [string]$LogFile
    )
    $timestamp = Get-Date -Format \"yyyy-MM-dd HH:mm:ss\"
    $entry = \"[$timestamp] $Message\"
    Write-Host $entry
    Add-Content -Path $LogFile -Value $entry
}
", Header 5 ("2-verify-steps-succeed-before-continuing", ["unnumbered", "unlisted"], []) [Str "2. Verify Steps Succeed Before Continuing"], CodeBlock ("", ["powershell"], []) "# Don't just run commands-check they worked
& \"C:\\Program Files\\OpenSCAD\\openscad.exe\" -o \"$StlFile\" \"$ScadFile\"
if (-not (Test-Path $StlFile)) {
    Write-Log \"ERROR: STL creation failed\"
    exit 1
}
Write-Log \" STL created successfully\"
", Header 5 ("3-make-scripts-reusable", ["unnumbered", "unlisted"], []) [Str "3. Make Scripts Reusable"], CodeBlock ("", ["powershell"], []) "# BAD: Hardcoded paths
$scadFile = \"C:\\Users\\John\\Desktop\\bracelet_holder.scad\"
# GOOD: Parameters with defaults
param(
    [string]$ScadFile = \"bracelet_holder.scad\",
    [string]$ProjectRoot = \"C:\\Projects\\3dMake\"
)
$fullPath = Join-Path $ProjectRoot \"src\" $ScadFile
", Header 5 ("4-use-configuration-files", ["unnumbered", "unlisted"], []) [Str "4. Use Configuration Files"], CodeBlock ("", ["powershell"], []) "# config.ps1 - Centralized settings
$Config = @{
    ProjectRoot = \"C:\\Projects\\3dMake\"
    OpenSCADPath = \"C:\\Program Files\\OpenSCAD\\openscad.exe\"
    SlicerPath = \"C:\\Program Files\\Prusa3D\\PrusaSlicer\\prusa-slicer.exe\"
    PrinterUSB = \"E\"
    DefaultMaterial = \"PLA\"
    DefaultInfill = 20
}
# Use in scripts:
# . .\\config.ps1
# & $Config.OpenSCADPath ...
", Header 4 ("troubleshooting-automated-workflows", ["unnumbered", "unlisted"], []) [Str "Troubleshooting Automated Workflows"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.1694915254237288)), (AlignDefault, (ColWidth 0.2457627118644068)), (AlignDefault, (ColWidth 0.5847457627118644))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Problem"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Cause"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Solution"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Scripts won't run"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Execution policy"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command not found"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tool not in PATH"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Specify full path: ", Code ("", [], []) "& \"C:\\Program Files\\OpenSCAD\\openscad.exe\""]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Files not created"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Wrong working directory"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use absolute paths with ", Code ("", [], []) "Join-Path"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Script hangs"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Waiting for user input"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Disable UI input; use ", Code ("", [], []) "-o", Str " flag for batch operations"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "CSV data corrupted"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Special characters in notes"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Properly quote strings in CSV export"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "No output/logging"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Path doesn't exist"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Create directory first: ", Code ("", [], []) "New-Item -Type Directory -Path ... -Force"]]]])] (TableFoot ("", [], []) []), Header 4 ("summary-powershell--scad-integration-benefits", ["unnumbered", "unlisted"], []) [Str "Summary: PowerShell + SCAD Integration Benefits"], Header 5 ("time-savings", ["unnumbered", "unlisted"], []) [Str "Time Savings"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Task"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Manual"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Automated"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Savings"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Single design build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "5 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "2.5 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "50%"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Test 10 parameter variations"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "50 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "5 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "90%"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Batch processing 20 designs"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "100 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "10 min"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "90%"]]]])] (TableFoot ("", [], []) []), Header 5 ("consistency", ["unnumbered", "unlisted"], []) [Str "Consistency"], BulletList [[Plain [Str "[", Str "YES", Str "]", Str " Same process every time (no missed steps)"]], [Plain [Str "[", Str "YES", Str "]", Str " Reproducible results (exact same settings)"]], [Plain [Str "[", Str "YES", Str "]", Str " Comprehensive logging (documentation automatic)"]]], Header 5 ("scalability", ["unnumbered", "unlisted"], []) [Str "Scalability"], BulletList [[Plain [Str "[", Str "YES", Str "]", Str " 1 design or 1,000 designs = same time commitment"]], [Plain [Str "[", Str "YES", Str "]", Str " Run overnight for batch operations"]], [Plain [Str "[", Str "YES", Str "]", Str " Easy to expand with new features"]]], Header 5 ("accessibility", ["unnumbered", "unlisted"], []) [Str "Accessibility"], BulletList [[Plain [Str "[", Str "YES", Str "]", Str " All interaction is text-based (screen reader friendly)"]], [Plain [Str "[", Str "YES", Str "]", Str " Results logged in CSV (machine-readable, sortable)"]], [Plain [Str "[", Str "YES", Str "]", Str " Repeatable (can verify steps later)"]]], Header 4 ("next-steps", ["unnumbered", "unlisted"], []) [Str "Next Steps"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Try the basic build script (Script 1) with one of your SCAD files"]], [Plain [Str "Add logging (Script 3) to track what you create"]], [Plain [Str "Test parametric sweeps (Script 2) with design variations"]], [Plain [Str "Integrate full workflow (Script 5) for complete automation"]], [Plain [Str "Customize config.ps1 for your specific setup"]]], Para [Str "Remember: Start simple, test each script individually, then combine them into larger workflows. PowerShell is most powerful when built incrementally!"], RawBlock (Format "html") "<!--pagebreak-->"]