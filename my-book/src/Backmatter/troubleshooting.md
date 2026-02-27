# PTECHNICAL REFERENCE
## Parametric 3D Fabrication Systems  
### OpenSCAD • 3dMake • PowerShell • Command Prompt • Git Bash

---

# PART I — SYSTEMS ARCHITECTURE

## 1.1 Digital Fabrication Pipeline

```
Source (.scad)
    ↓
OpenSCAD Engine
    ↓
STL (Mesh Geometry)
    ↓
Slicer
    ↓
G-code
    ↓
FDM Printer Firmware
    ↓
Physical Object
```

Automation Overlay:

```
CLI → Script → Build Directory → Version Control → Reproducible Artifact
```

---

# PART II — OPENSCAD PROFESSIONAL MODELING REFERENCE

## 2.1 Language Architecture

OpenSCAD is:

- Declarative
- CSG-based
- Deterministic
- Single-pass evaluation
- Non-interactive

Implication:
Models must be architected intentionally.

---

## 2.2 Advanced Geometry Techniques

### 2.2.1 Transform Stack Order

Transformations apply from inside outward.

```openscad
translate([10,0,0])
    rotate([0,0,45])
        cube(10);
```

Order matters.

---

### 2.2.2 Hull()

Creates convex hull of objects.

```openscad
hull() {
    translate([0,0,0]) sphere(5);
    translate([20,0,0]) sphere(5);
}
```

---

### 2.2.3 Minkowski()

Expands object by shape kernel.

```openscad
minkowski() {
    cube([10,10,10]);
    sphere(1);
}
```

Warning:
Computationally expensive.

---

### 2.2.4 Linear and Rotational Extrusion

```openscad
linear_extrude(height=10)
    square(5);

rotate_extrude()
    translate([10,0,0])
        circle(5);
```

---

### 2.2.5 Projection

```openscad
projection(cut=true)
    sphere(10);
```

---

## 2.3 CLI Operation of OpenSCAD

### Render STL (All shells)

```bash
openscad -o output.stl input.scad
```

### Specify Variables via CLI

```bash
openscad -D width=50 -o model.stl model.scad
```

---

# PART III — 3DMAKE PROFESSIONAL USAGE

## 3.1 3dMake Overview

3dMake automates model generation and batch workflows.

Core capabilities:

- Batch STL generation
- File processing pipelines
- Integration with OpenSCAD CLI
- Script-driven builds

Repository:
https://github.com/tdeck/3dmake

---

## 3.2 Example Automated Pipeline (PowerShell)

```powershell
New-Item -ItemType Directory -Force build
openscad -D width=40 -o build/model.stl src/model.scad
if ($LASTEXITCODE -ne 0) { exit 1 }
```

---

## 3.3 Batch Processing (cmd.exe)

```cmd
for %%f in (src\*.scad) do openscad -o build\%%~nf.stl %%f
```

---

## 3.4 Batch Processing (Git Bash)

```bash
for f in src/*.scad; do
  openscad -o build/$(basename "$f" .scad).stl "$f"
done
```

---

# PART IV — WINDOWS COMMAND PROMPT (CMD.EXE) FULL REFERENCE

## 4.1 cmd Architecture

- Text-based
- Legacy DOS-compatible syntax
- String-based (not object-based)

Executable:
```
C:\Windows\System32\cmd.exe
```

---

## 4.2 File System Operations

### List Files

```cmd
dir
```

### Change Directory

```cmd
cd builds
```

### Create Directory

```cmd
mkdir build
```

### Remove Directory

```cmd
rmdir /s /q build
```

---

## 4.3 Running Programs

```cmd
openscad.exe -o model.stl model.scad
```

---

## 4.4 PATH Inspection

```cmd
echo %PATH%
```

---

## 4.5 Temporary Environment Variables

```cmd
set MYVAR=value
```

---

## 4.6 Exit Codes

```cmd
echo %ERRORLEVEL%
```

Conditional:

```cmd
if %ERRORLEVEL% NEQ 0 echo Build failed
```

---

## 4.7 Batch Files (.bat)

Example build.bat:

```cmd
@echo off
mkdir build
openscad -o build\model.stl src\model.scad
if %ERRORLEVEL% NEQ 0 exit /b 1
```

---

# PART V — POWERSHELL PROFESSIONAL REFERENCE

## 5.1 Architecture

- Object-based pipeline
- .NET-backed
- Strong scripting support

---

## 5.2 Execution Policy

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 5.3 Structured Error Handling

```powershell
try {
    openscad -o model.stl model.scad
}
catch {
    Write-Host "Failure"
}
```

---

# PART VI — GIT BASH (UNIX-LIKE SHELL)

## 6.1 POSIX-Compatible Commands

```bash
ls
pwd
mkdir
rm -rf build
```

---

## 6.2 Shell Variables

```bash
VAR=value
echo $VAR
```

---

# PART VII — ADVANCED TROUBLESHOOTING COMPENDIUM

---

# A. OpenSCAD Failures

## A.1 Segmentation Fault

Cause:
- Deep Minkowski
- Memory exhaustion

Fix:
- Reduce $fn
- Simplify geometry

---

## A.2 Empty STL Output

Cause:
- Geometry evaluates to null

Diagnosis:
Add temporary primitive to confirm render pipeline.

---

## A.3 Boolean Artifacts

Cause:
- Coplanar faces

Fix:
- Add small offsets (0.01mm)

---

# B. 3dMake Failures

## B.1 Command Not Found

Verify:

```cmd
where openscad
```

---

## B.2 Silent Failure

Check exit code:

```cmd
echo %ERRORLEVEL%
```

---

# C. CMD-Specific Failures

## C.1 "Access is denied"

Cause:
- Insufficient privileges

Fix:
Run as Administrator.

---

## C.2 Incorrect Variable Expansion in Loop

In batch files use:

```
%%f
```

In interactive shell use:

```
%f
```

---

# D. PowerShell-Specific Failures

## D.1 Script Not Running

Fix:

```powershell
Set-ExecutionPolicy RemoteSigned
```

---

## D.2 Command Returns But File Not Created

Check:

```powershell
Test-Path build\model.stl
```

---

# E. Git Bash Issues

## E.1 Windows Path Confusion

Use forward slashes:

```bash
openscad -o build/model.stl src/model.scad
```

---

# F. 3D Printing Mechanical Failures

## F.1 Warping

Solutions:
- Increase bed temp
- Use enclosure
- Add brim

---

## F.2 Under-Extrusion

Cause:
- Clogged nozzle
- Incorrect flow rate

---

## F.3 Dimensional Error

Test with calibration cube.

---

# G. Performance Diagnostics

## G.1 Slow Render

Reduce:
- $fn
- Minkowski usage
- Nested difference()

---

## G.2 High CPU Usage

Expected during full render.

---

# H. SYSTEM DIAGNOSTIC CHECKLIST

1. Is OpenSCAD in PATH?
2. Does CLI produce STL?
3. Is STL manifold?
4. Does slicer preview correctly?
5. Is G-code generated?
6. Does printer firmware accept G-code?
7. Is first layer adhering?
8. Are dimensions within tolerance?

---

# I. FULL BUILD VALIDATION SCRIPT (CMD)

```cmd
@echo off
echo Validating environment...
where openscad >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo OpenSCAD not found.
    exit /b 1
)

mkdir build
openscad -o build\model.stl src\model.scad
if %ERRORLEVEL% NEQ 0 (
    echo Build failed.
    exit /b 1
)

echo Build succeeded.
```
