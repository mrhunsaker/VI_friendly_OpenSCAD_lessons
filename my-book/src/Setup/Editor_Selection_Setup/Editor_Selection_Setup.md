# Editor Selection and Accessibility Setup Guide {#setup_editor_selection_setup-editor_selection_setup}

## Table of Contents
1. [Editor Comparison](#editor-comparison)
2. [Editor Setup for 3dMake](#editor-setup-for-3dmake)
3. [Screen Reader Indent Announcement Configuration](#screen-reader-indent-announcement-configuration)
4. [Curriculum-Specific Editor Recommendations](#curriculum-specific-editor-recommendations)

---

## Editor Comparison

### Overview Table

| Feature                     | Notepad         | Notepad++                | Visual Studio Code                 |
|-----------------------------|-----------------|--------------------------|------------------------------------|
| **Cost**                    | Free (built-in) | Free                     | Free                               |
| **Learning Curve**          | Minimal         | Low                      | Moderate                           |
| **Screen Reader Support**   | Good (basic)    | Good (syntax features)   | Excellent (built-in accessibility) |
| **Extension/Plugin System** | None            | Limited                  | Extensive                          |
| **Keyboard Navigation**     | Good            | Good                     | Excellent                          |
| **Customization**           | None            | Moderate                 | Very high                          |
| **Performance**             | Excellent       | Very good                | Good                               |
| **Syntax Highlighting**     | None            | Yes (OpenSCAD available) | Yes (OpenSCAD available)           |
| **Terminal Integration**    | None            | None                     | Built-in                           |
| **Real-time Feedback**      | None            | None                     | Yes (with extensions)              |
| **Hot Key Customization**   | Limited         | Good                     | Excellent                          |
| **File Size Handling**      | Good            | Good                     | Excellent                          |
| **Built-in Debugging**      | None            | None                     | Limited                            |

### Detailed Comparison

#### Notepad
**Advantages:**
- Minimal interface with no distractions—excellent for absolute beginners
- Very predictable behavior for screen reader users
- Extremely fast file operations
- No configuration required; works immediately
- Pure text editing with no formatting surprises

**Disadvantages:**
- No syntax highlighting (OpenSCAD code appears as plain text)
- No keyboard shortcuts for common editing tasks
- Limited undo/redo capabilities compared to modern editors
- No integrated terminal (requires separate command prompt window)
- No way to run 3dm commands directly

**Best For:** Users who prefer absolute simplicity and want minimal cognitive load during learning phase

**Screen Reader Experience:** Windows Narrator reads all content clearly; JAWS and NVDA work well with standard keyboard navigation

---

#### Notepad++
**Advantages:**
- Lightweight and fast
- Good syntax highlighting for OpenSCAD code
- Customizable interface with configurable keyboard shortcuts
- Tab management for multiple files
- Better organization than Notepad for managing projects
- Good screen reader support for basic operations

**Disadvantages:**
- No built-in terminal (requires external command prompt)
- Plugin system is limited compared to VSCode
- Screen reader experience with syntax highlighting features can be inconsistent
- Less extensive keyboard customization than VSCode
- No integrated development environment features

**Best For:** Users who want a lightweight editor with syntax highlighting but prefer not to use a full IDE

**Screen Reader Experience:** JAWS and NVDA handle navigation well; Windows Narrator works but may struggle with complex UI elements

---

#### Visual Studio Code
**Advantages:**
- Extensive built-in accessibility features (accessibility inspector, keyboard navigation shortcuts)
- Excellent OpenSCAD extension available (scad-preview)
- Integrated terminal allows running 3dm commands without context switching
- Powerful keyboard shortcut customization
- Rich extension ecosystem for workflow enhancement
- Remote development capabilities
- Native support for multiple projects and workspaces
- Excellent search and find/replace functionality

**Disadvantages:**
- Steeper learning curve than Notepad or Notepad++
- Requires initial configuration for accessibility
- More resource-intensive than lighter editors
- Built-in terminal can be distracting for some users (alternative: Alt-Tab to standalone terminal)

**Best For:** Users building comprehensive accessibility workflow and wanting integrated development environment

**Screen Reader Experience:** Excellent; built specifically with accessibility in mind. NVDA, JAWS, Windows Narrator, and Dolphin all receive high-quality support.

---

## Editor Setup for 3dMake

### Setting Default Editor in 3dMake

The 3dMake tool uses your system default text editor. Configure it through:

#### Windows Registry (Most Reliable Method)

**For Notepad:**
```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.scad\UserChoice" /v "ProgId" /d "txtfile" /f
```

**For Notepad++:**
```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.scad\UserChoice" /v "ProgId" /d "Notepad++_file" /f
```

**For VSCode:**
```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.scad\UserChoice" /v "ProgId" /d "VSCode.scad" /f
```

#### Through File Properties (Graphical Method)

1. Right-click any `.scad` file (create a test file if needed)
2. Select "Open with" → "Choose another app"
3. Browse to your editor executable (e.g., `C:\Program Files\Notepad++\notepad++.exe`)
4. Check "Always use this app to open .scad files"
5. Click "OK"

#### Environment Variable (Command Line Method)

For **PowerShell**:
```powershell
$env:EDITOR = "C:\Program Files\Notepad++\notepad++.exe"
[Environment]::SetEnvironmentVariable("EDITOR", "C:\Program Files\Notepad++\notepad++.exe", "User")
```

For **Command Prompt**:
```batch
setx EDITOR "C:\Program Files\Notepad++\notepad++.exe"
```

---

### Notepad Setup

**Configuration Steps:**

1. **Open 3dMake-generated .scad files directly:**
   - Navigate to your project folder in File Explorer
   - Right-click the `.scad` file → "Open with" → "Notepad"
   - File opens immediately for editing

2. **Edit and Save:**
   - Make changes to your code
   - Press `Ctrl+S` to save
   - File updates automatically if 3dMake renders in background

3. **Run 3dMake Commands:**
   - Save your edits (Ctrl+S)
   - Alt-Tab to Command Prompt or PowerShell window
   - Navigate to project directory: `cd C:\path\to\project`
   - Run 3dMake command: `3dMake render project.scad`

**Keyboard Shortcuts:**
- `Ctrl+H`: Find and Replace
- `Ctrl+G`: Go to Line (newer versions)
- `Ctrl+Z`: Undo
- `Ctrl+Y`: Redo

---

### Notepad++ Setup

**Installation and Configuration:**

1. **Download from:** https://notepad-plus-plus.org/downloads/
2. **Choose:** Standard Installer (for automatic system integration)

3. **Configure OpenSCAD Language Support:**
   - Open Notepad++
   - Language → User Defined Language → Import... (if OpenSCAD UDL available)
   - Or manually set syntax highlighting:
     - Language → OpenSCAD (if available in language menu)
     - Otherwise Language → C++ (provides similar highlighting)

4. **Customize for Accessibility:**
   - Settings → Preferences → General
   - Check: "Minimize to system tray" (optional)
   - Settings → Preferences → MISC.
   - Ensure Word Wrap is set to preference
   - Settings → Preferences → Backup
   - Enable regular backups of your work

5. **Set as Default Editor (see registry method above)**

**Recommended Keyboard Shortcuts (User-Defined):**

Create custom shortcuts by:
- Settings → Shortcut Mapper
- Add shortcuts for frequently used actions:
  - Save and Switch to Terminal: Alt+T
  - Copy File Path: Ctrl+Shift+C

**Tab Management:**
- Open multiple files: Each opens in a separate tab
- Switch between tabs: Ctrl+Tab (next) / Ctrl+Shift+Tab (previous)
- Close tab: Ctrl+W

**Running 3dMake Commands:**
- Save file with Ctrl+S
- Alt-Tab to standalone terminal or command prompt
- Run: `3dMake render filename.scad`

---

### Visual Studio Code Setup

**Installation:**

1. **Download from:** https://code.visualstudio.com/
2. **Install:** Run installer and follow prompts
3. **Launch:** Open VSCode

**Enable OpenSCAD Support:**

1. Open Extensions (Ctrl+Shift+X)
2. Search: "OpenSCAD"
3. Install: "scad-preview" by Antyos
4. Install: "OpenSCAD Syntax Highlighter" (optional, for better syntax highlighting)

**Initial Accessibility Configuration:**

1. **Open Settings:** Ctrl+,
2. **Search:** "accessibility"
3. **Enable Key Settings:**
   - **Accessible View:** Toggle ON
   - **Screen Reader:** Select your screen reader (NVDA, JAWS, Narrator, Dolphin)
   - **Keyboard Navigation:** Ensure enabled
   - **Bracket Pair Guides:** Can help with code structure understanding

4. **Configure Editor Font:**
   - Search: "editor.fontSize"
   - Set to comfortable size (recommend 14-16 for better readability)
   - Search: "editor.fontFamily"
   - Select monospace font (e.g., "Consolas" or "Courier New")

**Set as Default Editor (see registry method above)**

**VSCode Terminal Options:**

#### Option 1: Using Built-in Terminal (Less Accessible)

1. View → Terminal (or Ctrl+`)
2. Terminal opens at bottom of VSCode window
3. Run commands: `3dMake render filename.scad`
4. **Note:** Switching focus between editor and terminal requires Tab navigation, which can be cumbersome for screen reader users

**Keyboard Navigation:**
- Ctrl+` : Toggle terminal visibility
- Ctrl+Shift+` : Create new terminal
- Alt+↑/↓ : Switch between terminals

#### Option 2: Alt-Tab to Standalone Terminal (RECOMMENDED for Accessibility)

1. **Keep Command Prompt/PowerShell open:**
   - Open Command Prompt (Win+R, type "cmd", Enter)
   - Position window or minimize to taskbar
   - Navigate to project directory: `cd C:\path\to\project`

2. **From VSCode, switch terminals:**
   - Alt+Tab to Command Prompt
   - Run command: `3dMake render filename.scad`
   - Alt+Tab back to VSCode
   - Continue editing

**Why This Is More Accessible:**
- Screen reader focus switches clearly between two applications
- Terminal output is read without VSCode context interference
- Cleaner context switching for command-line workflows
- Easier to diagnose issues when editor and terminal are separate

**Keyboard Shortcuts for Common Tasks:**

| Action           | Shortcut       |
|------------------|----------------|
| Save             | Ctrl+S         |
| Find             | Ctrl+F         |
| Find and Replace | Ctrl+H         |
| Go to Line       | Ctrl+G         |
| Open File        | Ctrl+O         |
| Open Folder      | Ctrl+K, Ctrl+O |
| Open Terminal | Ctrl+` |
| Alt-Tab to Another Window | Alt+Tab |
| Command Palette | Ctrl+Shift+P |

**Project Organization in VSCode:**

1. **Open Project Folder:**
   - File → Open Folder (Ctrl+K, Ctrl+O)
   - Select your project directory
   - All project files appear in Explorer sidebar

2. **File Navigation:**
   - Press Ctrl+P for Quick Open
   - Type filename to search and jump to file
   - Press Enter to open

3. **Quick Switch Between Files:**
   - Ctrl+Tab : Open recent files list
   - Arrow keys to select
   - Enter to open

---

## Screen Reader Indent Announcement Configuration

Proper indent announcement is critical for OpenSCAD development, as indentation indicates code nesting and structure.

### NVDA (NonVisual Desktop Access)

**Enable Indent Announcement:**

1. **Open NVDA Menu:** Alt+N or right-click NVDA icon
2. **Preferences → Settings (Ctrl+Comma)**
3. **Document Formatting:** Tab to it
4. **Check:** "Report indentation"
5. **In the "Indentation reporting" dropdown:** Select "Tones and speech"
6. **Tone Description:** NVDA will announce indent level as progressively higher tones (or speaking indent amount)
7. **Apply:** Click OK

**Additional Tab Stop Configuration:**

1. **Preferences → Settings → Document Formatting**
2. **Check:** "Report line indentation"
3. **This will announce:** "Indent level 4" or similar as you navigate code

**Testing:**
- Open a `.scad` file with nested code (e.g., difference() { cube(); sphere(); })
- Press Down Arrow to move line by line
- NVDA announces indentation level on each new indented line

**Keyboard Control:**
- NVDA+3 on Numpad: Cycles indent/outline level reporting

---

### JAWS (Freedom Scientific)

**Enable Indent Announcement:**

1. **Open JAWS Manager:** Press JAWSKey+F2 (or right-click JAWS icon)
2. **Utilities → Settings Manager**
3. **Search:** "Indent"
4. **Look for setting:** "Announce Indentation" or "Report Indentation"
5. **Enable:** Set to "Tones" or "Tones and Speech"
6. **Speech Indent Announcement:** Speak indent level
7. **Tone Indent Announcement:** Pitch increases with indent level

**Advanced Configuration (Custom Scripts):**

If built-in settings don't work:
1. **JAWSKey+F2 → Utilities → Settings Manager**
2. **Search:** "Line Breaks" or "Formatting"
3. **Ensure:** "Report line indentation" is enabled
4. **Set tone adjustment:** Higher pitch for deeper indents

**Testing:**
- Open `.scad` file with nested code
- Navigate with arrow keys
- JAWS announces indent changes with tones or speech

**Keyboard Shortcuts:**
- JAWSKey+Alt+I: Toggle indent reporting
- JAWSKey+Alt+Shift+I: Cycle between indent reporting modes (speech/tones/off)

---

### Windows Narrator

**Enable Indent Announcement:**

1. **Open Settings:** Win+I
2. **Ease of Access → Narrator**
3. **Advanced Options: Scroll down**
4. **Check:** "Report indentation"
5. **Indentation Reporting:** Select "Tones" (less intrusive) or "Speech" (explicit)
6. **Apply settings**

**Narrator Keyboard Shortcuts:**
- Narrator+Page Down: Read from current position to end of window
- Narrator+Alt+Arrow Keys: Navigate text
- Narrator+V, I: Customize indentation reporting (in Narrator settings)

**Testing:**
- Open `.scad` file
- Use Narrator+Page Down to read through code
- Listen for indent tone changes or announcements

**Note:** Windows Narrator has fewer customization options than JAWS/NVDA; consider NVDA or JAWS for deeper indent control

---

### Dolphin EasyConverter (Dolphin Screen Reader)

**Enable Indent Announcement:**

1. **Open Dolphin Central:** Right-click Dolphin icon or click Dolphin icon in taskbar
2. **Utilities → Settings → Text Processing**
3. **Look for:** "Indentation" section
4. **Enable:** "Announce indentation"
5. **Mode:** Select "Tones", "Speech", or "Tones and Speech"
6. **Tone Pitch:** Configure pitch increase for deeper indents
7. **Apply**

**ECO (Ease of Cursor Operation) Customization:**
1. **Dolphin Central → Utilities → ECO Settings**
2. **Text Options → Indentation Reporting**
3. **Set preferred announcement style**

**Testing:**
- Open `.scad` file with indented code
- Navigate with arrows
- Dolphin announces indent changes

**Keyboard Shortcuts:**
- Ctrl+Dolphin+I: Toggle indent reporting on/off
- Ctrl+Dolphin+Shift+I: Cycle indent reporting mode

---

## Curriculum-Specific Editor Recommendations

### For Absolute Beginners (Lesson 1-2)

**Recommended: Notepad or Notepad++**

**Rationale:**
- Minimal interface reduces cognitive load
- Focus stays on learning OpenSCAD syntax, not editor features
- Keyboard navigation is straightforward
- Screen reader experience is predictable

**Setup:**
1. Use Notepad or Notepad++ as default editor
2. Configure screen reader indent announcement
3. Keep separate Command Prompt window open for 3dMake commands
4. Alt-Tab workflow between editor and terminal

**Workflow Example:**
```
1. Open Command Prompt → Navigate to project folder
2. Run: 3dMake new myproject
3. Alt+Tab to file explorer, open myproject.scad
4. Notepad++ opens file
5. Edit code
6. Ctrl+S to save
7. Alt+Tab to Command Prompt
8. Run: 3dMake render myproject.scad
9. Check output, return to Notepad++ to refine code
```

---

### For Intermediate Users (Lesson 3-6)

**Recommended: Notepad++ or VSCode**

**Notepad++:**
- Adds project organization without overwhelming complexity
- Tab support for managing multiple files
- Syntax highlighting improves code understanding
- Still lightweight and predictable

**VSCode:**
- Opens doors to more sophisticated workflows
- Extension system enables advanced features (OpenSCAD preview)
- Keyboard customization becomes valuable
- Terminal integration useful but use Alt-Tab method

**Setup Decision Tree:**
- **Choose Notepad++ if:** You prefer simplicity and want to focus on code logic
- **Choose VSCode if:** You're ready to invest time learning editor features for long-term benefit

**Workflow Example with VSCode:**
```
1. Open VSCode (folder view of project)
2. Press Ctrl+P to open file search
3. Type filename and press Enter to open
4. Edit code with autocomplete
5. Ctrl+H for find/replace across project
6. Ctrl+S to save
7. Alt+Tab to Command Prompt
8. Run: 3dMake render filename.scad
9. Alt+Tab back to VSCode to refine code
```

---

### For Advanced Users (Lesson 7-11)

**Recommended: Visual Studio Code**

**Rationale:**
- Powerful search/replace across large projects
- Extension system enables specialized workflows
- Keyboard customization reaches full potential
- Workspace management for complex projects
- Debugging capabilities aid troubleshooting

**Advanced Setup:**
1. **Create custom keyboard shortcuts:**
   - Ctrl+Alt+R: Save and render current file
   - Ctrl+Alt+P: Preview (if using scad-preview extension)

2. **Install Additional Extensions:**
   - "scad-preview": Real-time 3D preview
   - "Better Comments": Categorize comments with colors/tones
   - "Bracket Pair Colorizer": Visual/tonal bracket matching
   - "GitLens": Track code changes over time

3. **Create Task Runner for Common Commands:**
   - Ctrl+Shift+B: Configure build task to run 3dMake
   - Create separate tasks for render, export, etc.

4. **Use Workspaces:**
   - File → Save Workspace As...
   - Save project-specific workspace with all settings
   - Reopen same workspace configuration automatically

**Advanced Workflow Example:**
```
1. Open VSCode with project workspace
2. Ctrl+Shift+P → Run Task → "3dMake Render Current"
3. Renders file and shows output
4. Use scad-preview extension for real-time 3D view
5. Edit code with advanced search/replace
6. Ctrl+Alt+R saves and renders automatically
7. Use version control (Git) for tracking changes
```

---

## Quick Reference: Editor Comparison for Curriculum

### Part 1: Foundations (Lessons 1-2)
- **Primary:** Notepad or Notepad++
- **Focus:** Learn syntax and basic concepts
- **Terminal:** Standalone Command Prompt (Alt-Tab)

### Part 2: Core Skills (Lessons 3-6)
- **Primary:** Notepad++ or VSCode
- **New Features:** Begin using editor syntax highlighting
- **Terminal:** Standalone (continue Alt-Tab method)
- **Skills:** File organization, search/replace basics

### Part 3: Advanced Projects (Lessons 7-11)
- **Primary:** VSCode (strongly recommended)
- **Advanced:** Use extensions, real-time preview, complex project management
- **Terminal:** Choose Alt-Tab or built-in based on preference
- **Skills:** Workspaces, task automation, version control

---

## Troubleshooting Common Issues

### Problem: Screen Reader Not Announcing Indent
**Solution:**
1. Verify indent announcement is enabled in screen reader settings (see above)
2. Test with existing `.scad` file with clear indentation
3. Try different announcement modes (tones vs. speech)
4. Restart screen reader: Alt+Ctrl+N (NVDA) or app restart (JAWS)

### Problem: 3dMake Commands Not Running from VSCode Terminal
**Solution:**
1. Ensure 3dMake is in your system PATH
2. Use standalone terminal instead (Alt-Tab method) - more reliable
3. In VSCode terminal, manually navigate to correct directory first
4. Verify command syntax: `3dMake render filename.scad`

### Problem: File Not Saving in Editor
**Solution:**
1. Verify you pressed Ctrl+S
2. Check file permissions on project folder
3. Try "Save As" instead
4. Ensure filename includes `.scad` extension

### Problem: Syntax Highlighting Not Working
**Solution:**
1. Verify file has `.scad` extension
2. In Notepad++: Language menu → select OpenSCAD or C++
3. In VSCode: Install OpenSCAD extension (search Extensions)
4. Restart editor

### Problem: Alt-Tab Not Switching Between Windows
**Solution:**
1. Ensure Command Prompt is open and minimized (not closed)
2. Press Alt+Tab and hold briefly to see window switcher
3. Use Alt+Tab multiple times if more than 2 windows open
4. Alternatively, click taskbar directly (Alt+Tab usually more accessible)

---

## Next Steps

After completing this setup guide:

1. **Choose your editor** based on the recommendations for your skill level
2. **Configure screen reader indent announcement** immediately (critical for code structure understanding)
3. **Set editor as default** for `.scad` files
4. **Test with a simple file:** Create a test project and edit it
5. **Practice Alt-Tab workflow** before moving to Lesson 1
6. **Document your setup** in a personal note for reference

**You are now ready to begin Lesson 1: Environmental Configuration and Developer Workflow**

---

## Additional Resources

- **NVDA Documentation:** https://www.nvaccess.org/documentation/
- **JAWS Documentation:** https://www.freedomscientific.com/products/software/jaws/
- **VSCode Accessibility:** https://code.visualstudio.com/docs/editor/accessibility
- **Windows Narrator Guide:** https://support.microsoft.com/en-us/help/22798/windows-11-narrator-get-started
- **Notepad++ Documentation:** https://notepad-plus-plus.org/online-help/

---

**Document Version:** 2.1 (Updated for v2.1 Curriculum)
**Last Updated:** February 2026
**Accessibility Level:** Full WCAG 2.1 AA Compliance
**Screen Reader Tested:** NVDA, JAWS, Windows Narrator, Dolphin