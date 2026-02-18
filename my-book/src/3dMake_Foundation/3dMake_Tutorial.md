# 3dmake: Non-Visual 3D Printing Tutorial

*A step-by-step guide for blind and low-vision users*

---

## 1. What is 3dmake?

3dmake is a command-line tool designed specifically for blind and visually impaired users to design, inspect, and print 3D models using a non-visual workflow.

It combines:

* Text-based modeling with OpenSCAD
* Model description tools
* STL generation
* Slicing to G-code
* Automatic orientation
* Tactile preview generation
* Direct printing support

All functions are accessible from a single command-line interface.

---

## 2. Requirements

You will need:

* A Windows or Linux computer
* A screen reader such as NVDA, JAWS, or Orca
* A terminal or command prompt
* A 3D printer (optional for first steps)

---

## 3. Installing 3dmake

### Step 1: Download the program

Go to:

[http://github.com/tdeck/3dmake](http://github.com/tdeck/3dmake)

Download the latest release for your operating system.

---

### Step 2: Extract the program

1. Extract the downloaded file.
2. Open a terminal.
3. Navigate to the extracted folder.

Example:

```pwsh
cd ~\Downloads\3dmak
```

---

### Step 3: Run the setup command

```pwsh
.\3dm setup
```

Follow the prompts to:

* Choose a printer profile
* Configure AI features (optional)
* Set default options

After setup, the `3dm` command should work globally.

---

## 4. Understanding the 3dmake workflow

A typical workflow:

1. Create a project
2. Edit a model
3. Build the model
4. Slice into G-code
5. Print or preview

---

## 5. Creating a new project

Open a terminal and go to the folder where you want the project.

Example:

```pwsh
cd ~\3dprojects
```

Create a new project:

```pwsh
3dm new
```

This creates a project structure:

```bwsh
project\
 ├── src\
 │    └── main.scad
 ├── build\
 └── 3dmake.toml
```

Meaning:

* `src\` contains the model code
* `build\` contains output files
* `3dmake.toml` contains settings

---

## 6. Editing your first model

3dmake uses OpenSCAD, a text-based 3D modeling language.

Open the main model:

```pwsh
3dm edit-model
```

Replace the contents with this simple cube:

```scad
cube([20, 20, 20]);
```

Save and close the editor.

---

## 7. Building a 3D model

Build the model into an STL file:

```pwsh
3dm build
```

This creates:

```
build\main.stl
```

STL is the standard format for 3D printing.

---

## 8. Getting a description of the model

You can get information about the model:

```pwsh
3dm info
```

Without AI:

* Shows size and bounding box

With AI configured:

* Provides a natural language description
* May identify possible print issues

---

## 9. Slicing the model for printing

Slicing converts the STL into G-code.

Run:

```pwsh
3dm build slice
```

This produces:

```
build\main.stl
build\main.gcode
```

---

## 10. Printing the model

If your printer is configured:

```pwsh
3dm build print
```

This will:

1. Build the model
2. Slice it
3. Send it to the printer

---

## 11. Using tactile previews

Previews are small, fast prints showing the outline of the object.

They:

* Print quickly
* Use less filament
* Help you feel the shape before printing the full object

Slice a preview:

```pwsh
3dm preview slice
```

Print a preview:

```pwsh
3dm preview print
```

By default, previews include:

* Front view
* Left view
* Bottom view

---

## 12. Auto-orienting a model

Correct orientation can:

* Reduce support material
* Improve surface quality
* Shorten print time

Run:

```pwsh
3dm build orient print
```

This:

1. Builds the model
2. Chooses the best orientation
3. Slices it
4. Prints it

---

## 13. Changing slicer settings with overlays

3dmake uses text-based configuration.

There are two types:

### Profiles

Full printer configurations.

List them:

```pwsh
3dm list-profiles
```

---

### Overlays

Small changes to slicer settings, such as supports or materials.

List overlays:

```pwsh
3dm list-overlays
```

Use an overlay:

```pwsh
3dm build slice -o supports
```

---

## 14. Installing OpenSCAD libraries

Libraries provide reusable shapes.

Open the file:

```pwsh
3dmake.toml
```

Add a library:

```toml
libraries = ["bosl"]
```

Install the libraries:

```pwsh
3dm install-libraries
```

---

## 15. Typical beginner workflow

Create a project:

```pwsh
3dm new
```

Edit the model:

```pwsh
3dm edit-model
```

Build the model:

```pwsh
3dm build
```

Print a preview:

```pwsh
3dm preview print
```

Print the full model:

```pwsh
3dm build print
```

---

# CLI Cheat Sheet

## Project commands

```pwsh
3dm new
3dm edit-model
3dm info
```

---

## Build and print

```pwsh
3dm build
3dm build slice
3dm build print
3dm build orient print
```

---

## Preview commands

```pwsh
3dm preview slice
3dm preview print
```

---

## Slicer configuration

```pwsh
3dm list-profiles
3dm list-overlays
3dm build -o supports
```

---

## Library commands

```pwsh
3dm list-libraries
3dm install-libraries
```

---

## Help and version

```pwsh
3dm help
3dm version
```

---

# References (APA)

Deck, T. (n.d.). *3dmake: Non-visual 3D design and 3D printing tool*. GitHub. Retrieved February 18, 2026, from [http://github.com/tdeck/3dmake](http://github.com/tdeck/3dmake)

OpenSCAD. (n.d.). *The programmers solid 3D CAD modeller*. Retrieved February 18, 2026, from [https://openscad.org](https://openscad.org)
