# PowerShell version of mdbook_generate.sh
# Generates mdBook HTML output from markdown sources in my-book/src/ to my-book/docs/

$ErrorActionPreference = 'Stop'

# Define directories relative to script location
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$BookDir = Join-Path $ScriptDir 'my-book'
$BuildOutput = Join-Path $BookDir 'docs'

# Check if mdbook is installed
if (-not (Get-Command mdbook -ErrorAction SilentlyContinue)) {
    Write-Host "Error: mdbook is not installed." -ForegroundColor Red
    Write-Host "Please install mdbook with one of the following:"
    Write-Host "  - cargo install mdbook"
    Write-Host "  - Or download from https://github.com/rust-lang/mdBook/releases"
    exit 1
}

# Check if book.toml exists
if (-not (Test-Path (Join-Path $BookDir 'book.toml'))) {
    Write-Host "Error: book.toml not found at $BookDir\book.toml" -ForegroundColor Red
    exit 1
}

# Create output directory if it doesn't exist
if (-not (Test-Path $BuildOutput)) {
    New-Item -ItemType Directory -Path $BuildOutput | Out-Null
}

# Build the book
Write-Host "Building mdbook..."
Write-Host "  Source: $BookDir\src\"
Write-Host "  Output: $BuildOutput"
Write-Host ""

Push-Location $BookDir
$env:RUST_BACKTRACE = 'full'
mdbook build --dest-dir "$BuildOutput"
Pop-Location


Write-Host "building pdf in root directory with lualatex"
Push-Location $ScriptDir
lualatex "$BuildOutput/pandoc/latex/OpenSCAD_Curriculum.tex"
makeindex "$BuildOutput/pandoc/latex/OpenSCAD_Curriculum.idx"
lualatex "$BuildOutput/pandoc/latex/OpenSCAD_Curriculum.tex"
Pop-Location

Write-Host ""
Write-Host "All Builds complete!"
Write-Host " Outputs are available at: $BuildOutput"
