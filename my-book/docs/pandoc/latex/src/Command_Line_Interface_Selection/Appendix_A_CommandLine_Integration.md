[Header 3 ("3dmake_foundation-appendix_f_cmd_integration", [], []) [Str "Appendix A: Command Line (CMD/Batch) Integration for SCAD Workflows"], Para [Str "This appendix shows how traditional command-line (Windows CMD / batch) scripting automates SCAD workflows without requiring PowerShell. It mirrors the patterns in Appendix D but provides examples and idioms for ", Code ("", [], []) "cmd", Str " / batch files and systems that prefer native Windows command prompt scripts."], Header 4 ("overview-why-automate-with-cmdbatch", ["unnumbered", "unlisted"], []) [Str "Overview: Why Automate with CMD/Batch?"], BulletList [[Plain [Str "Minimal dependencies: works on basic Windows installations."]], [Plain [Str "Easy to call from other tools and CI systems that expect ", Code ("", [], []) ".bat", Str " helpers."]], [Plain [Str "Useful for environments where PowerShell policy restrictions exist."]]], Header 4 ("prerequisites--setup", ["unnumbered", "unlisted"], []) [Str "Prerequisites & Setup"], Header 5 ("required-software", ["unnumbered", "unlisted"], []) [Str "Required Software"], CodeBlock ("", ["cmd"], []) "where openscad      :: OpenSCAD (path in PATH or full path required)
where prusa-slicer  :: PrusaSlicer (or your slicer)
where python        :: Python (optional)
", Header 5 ("directory-structure-windows-style", ["unnumbered", "unlisted"], []) [Str "Directory Structure (Windows style)"], CodeBlock ("", ["cmd"], []) "C:\\Projects\\3dMake\\
+------ src\\
+------ stl\\
+------ gcode\\
+------ logs\\
+------ scripts\\
       +------ build.bat
       +------ batch_build.bat
", Header 5 ("notes-on-cmd-vs-powershell", ["unnumbered", "unlisted"], []) [Str "Notes on CMD vs PowerShell"], BulletList [[Plain [Str "CMD/batch has more limited error handling and no structured objects; rely on return codes and file checks."]], [Plain [Str "Use full executable paths to avoid PATH surprises."]]], Header 4 ("basic-workflow-single-file-build-batch", ["unnumbered", "unlisted"], []) [Str "Basic Workflow: Single-file build (batch)"], Para [Str "Create ", Code ("", [], []) "build.bat", Str " (simple example):"], CodeBlock ("", ["cmd"], []) "@echo off
rem build.bat - Convert SCAD -> STL -> G-code (minimal)
setlocal enabledelayedexpansion
set PROJECTROOT=%~dp0\\..\\
set SCADFILE=%1
if \"%SCADFILE%\"==\"\" (
  echo Usage: build.bat file.scad
  exit /b 1
)
set SCADPATH=%PROJECTROOT%src\\%SCADFILE%
set STLPATH=%PROJECTROOT%stl\\%~n1.stl
set GCODEPATH=%PROJECTROOT%gcode\\%~n1.gcode

rem Export STL using OpenSCAD
\"C:\\Program Files\\OpenSCAD\\openscad.exe\" -o \"%STLPATH%\" \"%SCADPATH%\"
if not exist \"%STLPATH%\" (
  echo ERROR: STL not created
  exit /b 1
)

rem Slice (example) - adjust path to slicer
\"C:\\Program Files\\Prusa3D\\PrusaSlicer\\prusa-slicer.exe\" --load-config-file \"%~dp0\\default.ini\" -o \"%GCODEPATH%\" \"%STLPATH%\"
if not exist \"%GCODEPATH%\" (
  echo ERROR: G-code not created
  exit /b 1
)

echo BUILD COMPLETE: %GCODEPATH%
endlocal
", Header 4 ("batch-directory-build", ["unnumbered", "unlisted"], []) [Str "Batch (directory) build"], Para [Code ("", [], []) "batch_build.bat", Str " can iterate files and call ", Code ("", [], []) "build.bat", Str ":"], CodeBlock ("", ["cmd"], []) "@echo off
set PROJECTROOT=%~dp0\\..\\
for /r \"%PROJECTROOT%src\" %%f in (*.scad) do (
  echo Processing %%~nxf
  call \"%~dp0build.bat\" \"%%~nxf\"
)
", Header 4 ("parametric-sweeps-simple-templating", ["unnumbered", "unlisted"], []) [Str "Parametric Sweeps (simple templating)"], Para [Str "Because batch is limited for text templating, a common pattern is to use small helper scripts with ", Code ("", [], []) "sed", Str "/", Code ("", [], []) "python", Str " or write a minimal templating helper in a language such as Python. Example invocation in batch:"], CodeBlock ("", ["cmd"], []) "rem Example: call a Python script to generate variants, then build
python \"%~dp0/generate_variants.py\" \"%PROJECTROOT%src\\bracelet_holder.scad\"
call \"%~dp0/batch_build.bat\"
", Header 4 ("logging-and-csv-output", ["unnumbered", "unlisted"], []) [Str "Logging and CSV output"], Para [Str "Batch scripts can append simple CSV lines using ", Code ("", [], []) "echo", Str " redirection:"], CodeBlock ("", ["cmd"], []) "echo %DATE% %TIME%,%~n1,Success >> \"%PROJECTROOT%logs\\build_history.csv\"
", Header 4 ("send-to-printer-usb-copy", ["unnumbered", "unlisted"], []) [Str "Send to Printer (USB copy)"], CodeBlock ("", ["cmd"], []) "rem Copy gcode to removable drive (E: example)
copy \"%GCODEPATH%\" E:\\
", Header 4 ("monitoring-networked-printer---using-curl-or-powershell-helper", ["unnumbered", "unlisted"], []) [Str "Monitoring (networked printer) - using curl or PowerShell helper"], Para [Code ("", [], []) "curl", Str " on Windows or a small PowerShell one-liner may be used to query APIs. For pure CMD, ship a small helper .exe (curl) or call ", Code ("", [], []) "powershell -Command \"Invoke-RestMethod ...\"", Str "."], Header 4 ("best-practices", ["unnumbered", "unlisted"], []) [Str "Best Practices"], BulletList [[Plain [Str "Use full paths for all tools."]], [Plain [Str "Check return codes (", Code ("", [], []) "if errorlevel 1", Str ") after each step."]], [Plain [Str "Keep batch scripts small; delegate complex text processing to Python/PowerShell."]], [Plain [Str "Log to simple CSVs for human and machine parsing."]]], HorizontalRule]