# VSCode Setup Guide — Accessible OpenSCAD Development

**For use with NVDA or JAWS on Windows**

This guide walks you through setting up Visual Studio Code (VSCode) as an accessible code editor for writing OpenSCAD files, with a task runner that automatically previews your `.scad` code in OpenSCAD whenever you save.

---

## Why VSCode Instead of the OpenSCAD Editor?

The built-in OpenSCAD editor has inconsistent behavior with screen readers — focus can jump unexpectedly, and the editor sometimes stops being read after certain actions. VSCode is a mainstream code editor with strong, well-tested accessibility support for both NVDA and JAWS.

You write your code in VSCode. OpenSCAD runs in the background (or in a separate window) to render the preview. You never have to interact with the OpenSCAD editor itself.

---

## Part 1: Install Required Software

### 1.1 Install VSCode

Download from: https://code.visualstudio.com/

During installation:
- Check **"Add to PATH"** — this is important for running VSCode from PowerShell
- Check **"Register Code as an editor for supported file types"**

### 1.2 Install OpenSCAD

Download from: https://openscad.org/downloads.html

Use the installer version (not the portable version). After installing, confirm OpenSCAD is in your PATH by opening PowerShell and typing:

```powershell
openscad --version
```

You should hear a version number. If you get an error, see the PATH setup section in the PowerShell Foundation guide.

### 1.3 Install the OpenSCAD VSCode Extension (Optional but Recommended)

1. Open VSCode
2. Press `Ctrl + Shift + X` to open the Extensions panel
3. Type `openscad` in the search box
4. Install **"OpenSCAD Language Support"** — this adds syntax highlighting and keyword completion for `.scad` files

---

## Part 2: Configure the Task Runner

VSCode uses a file called `tasks.json` to define custom commands you can run from the keyboard. We'll set up a task that opens your current `.scad` file in OpenSCAD for preview whenever you press a key.

### 2.1 Open or Create Your Workspace Folder

All your `.scad` files for a project should be in one folder. Open that folder in VSCode:

```powershell
cd ~/Documents/OpenSCAD_Projects
code .
```

The `.` tells VSCode to open the current folder as a workspace.

### 2.2 Create the Tasks File

1. In VSCode, press `Ctrl + Shift + P` to open the Command Palette
2. Type `Tasks: Configure Task` and press Enter
3. Select **"Create tasks.json file from template"**
4. Select **"Others"**

This creates a `.vscode/tasks.json` file. Replace its entire contents with the following:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Preview in OpenSCAD",
      "type": "shell",
      "command": "openscad",
      "args": ["${file}"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "reveal": "silent",
        "panel": "shared"
      },
      "problemMatcher": []
    },
    {
      "label": "Export STL",
      "type": "shell",
      "command": "openscad",
      "args": [
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}.stl",
        "${file}"
      ],
      "group": "build",
      "presentation": {
        "reveal": "always",
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

Save the file with `Ctrl + S`.

### 2.3 Run the Preview Task

With any `.scad` file open and focused:

- Press `Ctrl + Shift + B` to run the default build task (Preview in OpenSCAD)
- OpenSCAD will open and display your model
- Switch back to VSCode with `Alt + Tab` to keep editing

To export an STL:
1. Press `Ctrl + Shift + P`
2. Type `Tasks: Run Task`
3. Select **"Export STL"**
4. The `.stl` file will be saved in the same folder as your `.scad` file

---

## Part 3: NVDA Settings for VSCode

### 3.1 Recommended NVDA Settings

Open NVDA Menu (`NVDA + N`) → Preferences → Settings:

**Speech category:**
- Symbol level: **Most** (so you hear brackets, semicolons, and other syntax characters)

**Browse Mode category:**
- Uncheck "Use browse mode on page load in web content" — not needed for VSCode

### 3.2 Useful NVDA + VSCode Keyboard Shortcuts

| Action | Keys |
|--------|------|
| Read current line | `NVDA + Up Arrow` |
| Read from cursor | `NVDA + Down Arrow` |
| Spell current word | `NVDA + Numpad 2` (twice quickly) |
| Move to next/previous line | `Up / Down Arrow` |
| Move by word | `Ctrl + Left / Right Arrow` |
| Move to start/end of line | `Home / End` |
| Move to start/end of file | `Ctrl + Home / End` |
| Select all | `Ctrl + A` |
| Toggle line comment | `Ctrl + /` |
| Go to line number | `Ctrl + G`, type number, Enter |
| Find in file | `Ctrl + F` |
| Open file in workspace | `Ctrl + P`, type filename |

### 3.3 Punctuation Level

When reading code, you need to hear all punctuation — semicolons, brackets, parentheses, and commas are all part of OpenSCAD syntax.

In NVDA: `NVDA + N` → Preferences → Settings → Speech → **Symbol level: Most**

You can also toggle punctuation level on the fly: `NVDA + P` cycles through None, Some, Most, All.

---

## Part 4: JAWS Settings for VSCode

### 4.1 Virtual Cursor

JAWS may try to activate Virtual/Browse mode in VSCode. If VSCode stops responding to arrow keys for navigation and starts reading the page as HTML, press `JAWS Key + Z` to toggle Virtual mode off. You want to be in **Application mode** (not Virtual mode) when using VSCode.

### 4.2 Recommended JAWS Settings

- **Punctuation level:** All — `JAWS Key + Shift + 2` cycles through levels. Set to **All** for code editing.
- **Reading rate:** Adjust with `Alt + Ctrl + Page Up / Page Down`
- **Spell current line:** `JAWS Key + Up Arrow` twice quickly

### 4.3 Useful JAWS + VSCode Keyboard Shortcuts

| Action | Keys |
|--------|------|
| Read current line | `JAWS Key + Up Arrow` |
| Read from cursor | `JAWS Key + Down Arrow` |
| Read current character | `JAWS Key + Numpad 5` |
| Move by word | `Ctrl + Left / Right Arrow` |
| Move to start/end of line | `Home / End` |
| Toggle comment | `Ctrl + /` |
| Go to line | `Ctrl + G` |
| Open command palette | `Ctrl + Shift + P` |

---

## Part 5: Notepad++ as an Alternative

If VSCode is too complex to set up, **Notepad++** is a simpler screen-reader-friendly option for editing `.scad` files.

### Setup

1. Download from: https://notepad-plus-plus.org/
2. Install the **OpenSCAD syntax highlighting** plugin:
   - Go to Plugins → Plugin Admin
   - Search for "OpenSCAD" — install if available
   - Alternatively, download a UDL (User Defined Language) file from the OpenSCAD community and import it via Language → User Defined Language → Import

### Running OpenSCAD from Notepad++

Use the Run menu (`F5`) to configure a custom command:

```
openscad "$(FULL_CURRENT_PATH)"
```

Name it "Preview in OpenSCAD" and assign it a shortcut key (e.g., `Ctrl + F5`).

### NVDA + Notepad++ Tips

- Punctuation level: set to **Most** or **All**
- Use `Ctrl + G` to go to a specific line
- Use `Ctrl + F` to find text
- The status bar at the bottom of Notepad++ announces line and column numbers — useful for finding where errors are

---

## Part 6: Workflow Summary

Here is the complete workflow from writing code to printing:

```
1. Open VSCode (or Notepad++)
   code ~/Documents/OpenSCAD_Projects

2. Open or create a .scad file
   Ctrl + P → type filename

3. Write your OpenSCAD code

4. Preview in OpenSCAD
   Ctrl + Shift + B  (VSCode)
   Ctrl + F5         (Notepad++)

5. If the shape looks right, export STL
   Run "Export STL" task in VSCode
   OR: In OpenSCAD, press F6 then File > Export > Export as STL

6. Open PrusaSlicer, import the STL, slice, export G-code

7. Load G-code onto SD card or USB and print
```

---

## Troubleshooting

**OpenSCAD doesn't open when I run the task**
- Confirm OpenSCAD is installed and in your PATH: `openscad --version` in PowerShell
- If not found, add the OpenSCAD install folder to your PATH (see PowerShell Foundation guide)

**VSCode isn't being read by my screen reader**
- For JAWS: Press `JAWS Key + Z` to toggle out of Virtual mode
- For NVDA: Make sure you are focused inside the editor panel, not a sidebar
- Try clicking directly in the editor area with the mouse once to confirm focus

**I hear "unlabeled" for some VSCode elements**
- This is a known VSCode accessibility limitation for some UI panels
- Use keyboard shortcuts rather than trying to navigate by element — the editor itself reads well

**My .scad file has an error but I can't find it**
- OpenSCAD will display an error in its console — use `Alt + Tab` to switch to OpenSCAD and arrow through the console to read the error
- Errors always include a line number — use `Ctrl + G` in VSCode to jump to that line

---

## References

Microsoft. (2024). *Visual Studio Code accessibility*. https://code.visualstudio.com/docs/editor/accessibility

NV Access. (2024). *NVDA user guide*. https://www.nvaccess.org/files/nvda/documentation/userGuide.html

OpenSCAD. (n.d.). *OpenSCAD documentation*. https://openscad.org/documentation.html
