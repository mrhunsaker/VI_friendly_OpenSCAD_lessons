# Batch Export Script for OpenSCAD
# Exports multiple STL files with optimized settings
# For use with PrusaSlicer, Cura, or other slicers

# Configuration
$ProjectName = "3D Print Batch"
$ScadDirectory = Get-Location
$OutputDirectory = Join-Path $ScadDirectory "_exports"
$OpenSCADPath = "C:\Program Files\OpenSCAD\openscad.exe"

# Ensure OpenSCAD exists
if (-Not (Test-Path $OpenSCADPath)) {
    Write-Host "Error: OpenSCAD not found at $OpenSCADPath" -ForegroundColor Red
    exit 1
}

# Create output directory
New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
Write-Host "Output directory: $OutputDirectory" -ForegroundColor Green

# Find all SCAD files
$ScadFiles = Get-ChildItem -Path $ScadDirectory -Filter "*.scad" -File | Sort-Object Name
Write-Host "Found $($ScadFiles.Count) SCAD files`n" -ForegroundColor Green

$SuccessCount = 0
$FailCount = 0

# Process each SCAD file
foreach ($ScadFile in $ScadFiles) {
    $OutputFile = Join-Path $OutputDirectory "$($ScadFile.BaseName).stl"
    $ScadPath = $ScadFile.FullName
    
    Write-Host -NoNewline "Exporting: $($ScadFile.Name) ... "
    
    try {
        # Call OpenSCAD with headless rendering
        & $OpenSCADPath -o $OutputFile $ScadPath 2>$null
        
        if (Test-Path $OutputFile) {
            $Size = (Get-Item $OutputFile).Length / 1MB
            Write-Host "✓ Success ($([Math]::Round($Size, 2)) MB)" -ForegroundColor Green
            $SuccessCount++
        } else {
            Write-Host "✗ Failed" -ForegroundColor Red
            $FailCount++
        }
    }
    catch {
        Write-Host "✗ Error: $_" -ForegroundColor Red
        $FailCount++
    }
}

# Summary
Write-Host "`n=========================================="
Write-Host "Export Summary:" -ForegroundColor Cyan
Write-Host "  Successful: $SuccessCount" -ForegroundColor Green
if ($FailCount -gt 0) {
    Write-Host "  Failed: $FailCount" -ForegroundColor Red
}
Write-Host "`nFiles ready in: $OutputDirectory" -ForegroundColor Yellow

# Optional: Open output directory in Windows Explorer
$Choice = Read-Host "Open output folder? (Y/n)"
if ($Choice -ne 'n' -and $Choice -ne 'N') {
    explorer.exe $OutputDirectory
}
