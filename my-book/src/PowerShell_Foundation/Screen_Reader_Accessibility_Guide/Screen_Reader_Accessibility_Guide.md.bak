# Screen Reader Accessibility Guide for PowerShell

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide supports the PowerShell Foundation curriculum and helps screen reader users navigate and work efficiently with PowerShell on Windows.

## Table of Contents

1. [Getting Started with Screen Readers](#getting-started)
2. [NVDA-Specific Tips](#nvda-tips)
3. [JAWS-Specific Tips](#jaws-tips)
4. [General Terminal Accessibility](#general-terminal)
5. [Working with Long Output](#long-output)
6. [Keyboard Shortcuts Reference](#shortcuts)
7. [Troubleshooting](#troubleshooting)

## Getting Started with Screen Readers {#getting-started}

### Which Screen Reader Should I Use?

NVDA is free and often recommended for new users; JAWS is a powerful commercial option. Also consider Dolphin SuperNova and Windows Narrator:

- Dolphin SuperNova: commercial speech, braille and magnification (check vendor docs for keyboard mappings).
- Windows Narrator: built into Windows and useful for quick access without installing third-party software.

### Before You Start

1. Start your screen reader before opening PowerShell.
2. Open PowerShell and listen for the window title and prompt.
3. If silent, press Alt+Tab to find the window.

### What is PowerShell?

PowerShell is the modern Windows shell and scripting environment. Common commands include `Get-ChildItem`, `Get-Content`, and `Out-File`. PowerShell provides richer objects and piping than CMD.

## NVDA-Specific Tips {#nvda-tips}

NVDA is available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

### Dolphin SuperNova

Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) — commercial option providing speech and magnification; consult vendor guides for features and commands.

### Windows Narrator

Windows Narrator: [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) — built-in Narrator has a different set of commands; it can be enabled via Windows Settings > Accessibility.

### Key Commands for PowerShell

| Command         | What It Does                                          |
|-----------------|-------------------------------------------------------|
| NVDA+Home       | Read the current line (your command or output)        |
| NVDA+Down Arrow | Read from cursor to end of screen                     |
| NVDA+Up Arrow   | Read from top to cursor                               |
| NVDA+Page Down  | Read next page                                        |
| NVDA+Page Up    | Read previous page                                    |
| NVDA+F7         | Open the Review Mode viewer (can scroll through text) |

### Example: Reading Long Output

If `Get-ChildItem` produces many lines, redirect to a file and open it in Notepad:

```powershell
Get-ChildItem -Name > list.txt
notepad list.txt
```

`-Name` prints one item per line (screen reader friendly).

## JAWS-Specific Tips {#jaws-tips}

JAWS is available from [https://www.freedomscientific.com/](https://www.freedomscientific.com/)

### Key Commands for PowerShell

| Command           | What It Does               |
|-------------------|----------------------------|
| Insert+Down Arrow | Read line by line downward |
| Insert+Up Arrow   | Read line by line upward   |
| Insert+Page Down  | Read next page of text     |
| Insert+Page Up    | Read previous page of text |

### Example: Reading Long Output

1. Redirect: `Get-ChildItem -Name > list.txt`
2. Open Notepad: `notepad list.txt`
3. Use Insert+Ctrl+Down to read full contents.

## General Terminal Accessibility {#general-terminal}

### Understanding the PowerShell Layout

PowerShell shows a title bar, content area, and a prompt that looks like:

```powershell
PS C:\Users\YourName>
```

### Navigation Sequence

1. Screen reader announces the title
2. Then it announces the prompt line
3. Anything above prompt is prior output

## Working with Long Output {#long-output}

### Solution 1: Redirect to a File

```powershell
Get-ChildItem -Name > list.txt
notepad list.txt
```

### Solution 2: Use Pagination

```powershell
Get-Content largefile.txt | more
```

### Solution 3: Filter Output

```powershell
Get-ChildItem -Name | Where-Object { $_ -like "*.scad" }
```

### Solution 4: Count Before Displaying

```powershell
(Get-ChildItem -Name).Count
```

## Keyboard Shortcuts Reference {#shortcuts}

| Key        | Action                          |
|------------|---------------------------------|
| Up Arrow   | Show previous command           |
| Down Arrow | Show next command               |
| Tab        | Auto-complete file/folder names |
| Home       | Jump to start of line           |
| End        | Jump to end of line             |
| Ctrl+C     | Stop command                    |
| Enter      | Run command                     |

## Troubleshooting

### Problem: "I Can't Hear the Output"

1. Redirect to file and open in Notepad.
2. Use End to jump to the end of text.

### Problem: "Tab Completion Isn't Working"

1. Type some characters before Tab.

### Problem: "Command Not Found"

1. Use `Get-Command programname` to check availability.

## Pro Tips

1. Use `Get-ChildItem -Name` for one-per-line listings.
2. Use `Out-File -FilePath list.txt` to capture output with encoding options.

## Recommended Workflow

1. `Set-Location` (or `cd`) to the project folder
2. `Get-ChildItem -Name` to list files
3. Redirect large output to files and open in Notepad

## Additional Resources

- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- PowerShell Documentation: [https://docs.microsoft.com/powershell](https://docs.microsoft.com/powershell)
- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)
- Windows Narrator: [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)
