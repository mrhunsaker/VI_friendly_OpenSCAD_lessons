# Student  Glossary  

*OpenSCAD • 3dMake • 3D Printing • PowerShell • Command Prompt • Git Bash*

This glossary provides:

- Formal definitions  
- Operational context  
- Cross-system distinctions  
- CLI examples  
- Practical implications in 3D printing workflows  

---

# SECTION I — Additive Manufacturing & Fabrication

## Additive Manufacturing

A manufacturing methodology in which objects are fabricated layer-by-layer from digital models.  
In desktop contexts, this typically refers to FDM (Fused Deposition Modeling).

### Technical Characteristics
- Layer-based deposition
- Toolpath-generated geometry
- STL-to-G-code workflow
- Thermoplastic extrusion (in FDM)

### Workflow Position
OpenSCAD → STL → Slicer → G-code → Printer → Physical object

---

## FDM (Fused Deposition Modeling)

A thermoplastic extrusion process in which filament is melted and deposited in sequential layers.

### Critical Variables
- Nozzle temperature
- Bed temperature
- Layer height
- Print speed
- Cooling rate

---

## Layer Height

The vertical thickness of each printed layer.

- Smaller values increase surface fidelity.
- Larger values increase speed.

Example:
- 0.2 mm = standard
- 0.1 mm = high resolution

---

## Infill

Internal structural lattice inside a model.

Typical values:
- 10–20% for visual models
- 40%+ for structural parts

---

## Tolerance

Intentional dimensional offset to ensure mechanical fit.

Example:
A 10mm peg may require a 10.2mm hole for clearance.

---

## Manifold (Watertight Model)

A printable model with:
- No self-intersections
- No zero-thickness faces
- No holes in mesh

Non-manifold geometry causes slicer failure.

---

# SECTION II — OpenSCAD (Parametric Modeling)

## OpenSCAD

A script-based solid modeling system using Constructive Solid Geometry (CSG).

Official site:
https://openscad.org

---

## Constructive Solid Geometry (CSG)

Modeling technique combining primitives using Boolean operations.

---

## Primitive

Basic geometric object.

Examples:

```openscad
cube([10,10,10]);
sphere(5);
cylinder(h=20, d=10);
```

---

## Boolean Operations

### union()

Combines shapes.

```openscad
union() {
    cube([10,10,10]);
    sphere(6);
}
```

---

### difference()

Subtracts shapes.

```openscad
difference() {
    cube([20,20,20]);
    cylinder(h=25, d=5);
}
```

---

### intersection()

Keeps overlapping geometry.

```openscad
intersection() {
    sphere(10);
    cube([15,15,15], center=true);
}
```

---

## Variable

A named parameter used to control geometry.

```openscad
width = 30;
cube([width,10,5]);
```

---

## Parametric Design

Geometry controlled by variables.

Advantages:
- Rapid iteration
- Reusability
- Scalable models

---

## Module

Reusable geometry block.

```openscad
module peg(d, h) {
    cylinder(d=d, h=h);
}

peg(5, 20);
```

---

## $fn (Fragment Number)

Controls circular resolution.

```openscad
$fn = 100;
sphere(10);
```

Higher values increase smoothness and render time.

---

## Preview vs Render

- F5 = Preview (OpenGL approximation)
- F6 = Render (full CSG evaluation)

CLI equivalent:

```bash
openscad -o model.stl model.scad
```

---

# SECTION III — 3dMake (Automation Tool)

## 3dMake

A command-line tool for automating 3D model generation and processing.

Repository:
https://github.com/tdeck/3dmake

---

## Headless Rendering

Running OpenSCAD without GUI.

```bash
openscad -o output.stl input.scad
```

---

## Automated Build Pipeline

Example PowerShell pipeline:

```powershell
openscad -o model.stl model.scad
```

Example Bash:

```bash
openscad -o model.stl model.scad
```

---

# SECTION IV — Command-Line Systems

# CLI (Command-Line Interface)

A text-based interface for interacting with the operating system.

---

# Shell

A program that interprets commands.

Examples:
- PowerShell
- Command Prompt
- Git Bash

---

# PowerShell

Object-oriented Windows shell.

### List Files

```powershell
Get-ChildItem
```

### Change Directory

```powershell
Set-Location Documents
```

### Run Script

```powershell
.\build.ps1
```

### Check Exit Code

```powershell
$LASTEXITCODE
```

---

# Command Prompt (cmd.exe)

Traditional Windows shell.

### List Files

```cmd
dir
```

### Change Directory

```cmd
cd Documents
```

### Run Program

```cmd
openscad.exe -o model.stl model.scad
```

### Check Exit Code

```cmd
echo %ERRORLEVEL%
```

---

# Git Bash

Unix-like shell for Windows.

### List Files

```bash
ls
```

### Change Directory

```bash
cd Documents
```

### Make Directory

```bash
mkdir builds
```

---

# Working Directory

The directory in which commands execute.

### Print Working Directory

```bash
pwd
```

```powershell
Get-Location
```

---

# PATH (Environment Variable)

Tells system where executables are located.

### View PATH (PowerShell)

```powershell
$env:PATH
```

### View PATH (cmd)

```cmd
echo %PATH%
```

---

# Environment Variable

A system-level configuration variable.

### Set Temporarily (PowerShell)

```powershell
$env:TESTVAR="hello"
```

### Set Temporarily (cmd)

```cmd
set TESTVAR=hello
```

---

# Exit Code

Numeric status returned by command.

- 0 = Success
- Non-zero = Error

Example:

```powershell
if ($LASTEXITCODE -ne 0) { Write-Host "Build Failed" }
```

```bash
if [ $? -ne 0 ]; then echo "Build Failed"; fi
```

---

# Pipe

Pass output from one command to another.

```powershell
Get-ChildItem | Select-String ".scad"
```

```bash
ls | grep ".scad"
```

---

# SECTION V — Git & Version Control

## Git

Distributed version control system.

---

## Repository

Tracked project folder.

```bash
git init
```

---

## Commit

Snapshot of changes.

```bash
git add .
git commit -m "Initial model"
```

---

## Branch

Parallel development path.

```bash
git branch feature-peg
git checkout feature-peg
```

---

## Clone

Download remote repository.

```bash
git clone https://github.com/user/project.git
```

---

## Status

Check changes.

```bash
git status
```

---

# SECTION VI — File Formats

## STL

Triangle mesh file used in 3D printing.

Generated by:

```bash
openscad -o model.stl model.scad
```

---

## G-code

Machine instructions generated by slicer.

Example fragment:

```gcode
G1 X10 Y10 Z0.2 F1500
```

---

# SECTION VII — Automation Concepts

## Script

File containing executable instructions.

Examples:
- `.ps1`
- `.sh`
- `.scad`

---

## Reproducibility

Ability to regenerate identical outputs from identical inputs.

---

## Automation

Using scripts instead of manual steps.

Example build script (PowerShell):

```powershell
openscad -o build/model.stl src/model.scad
```

---

# SECTION VIII — Accessibility & Documentation

## Markdown

Lightweight markup language.

Example:

```markdown
# Heading
- Bullet
```

---

## Semantic Structure

Proper heading hierarchy:

```
# Title
## Section
### Subsection
```

Important for screen readers.

---

## Screen Reader

Software that reads text aloud.

Examples:
- NVDA
- JAWS
- Orca
- VoiceOver

---

# SECTION IX — Mechanical Design Concepts

## Clearance Fit

Loose fit allowing movement.

## Press Fit

Tight fit requiring force.

## Overhang

Unsupported geometry exceeding safe angle (≈45° for FDM).

---

# SECTION X — Advanced Workflow Concepts

## Headless CI Build

Automated rendering using scripts or CI tools.

```bash
openscad -o output.stl model.scad
```

---

## Deterministic Modeling

Same input → same output every time.

OpenSCAD is deterministic.

---

## Dependency

External program required for workflow.

Example:
- OpenSCAD must be in PATH.

---
