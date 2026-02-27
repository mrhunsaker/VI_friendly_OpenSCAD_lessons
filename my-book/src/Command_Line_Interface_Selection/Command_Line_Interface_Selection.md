# Command-Line Fundamentals - Choose Your Path {#command_line_interface_selection-command_line_interface_selection}

Welcome! Before diving into 3D design with OpenSCAD, you'll master command-line fundamentals. This page will help you understand what command-line interfaces are and choose the best path for you.

## What is a Command-Line Interface (CLI)?

A command-line interface is a text-based way to control your computer by typing commands instead of clicking buttons. It's like sending written instructions to your computer.

### Why learn it?

- Speed: Text commands are often faster than clicking through menus
- Precision: Exact control over what your computer does
- Accessibility: Perfect for screen readers - text is naturally readable
- Automation: Repeat tasks automatically
- 3D Printing: Essential for batch processing models and integrating tools

### Real-world example

Instead of:

1. Opening File Explorer (click)
2. Navigating folders (click, click, click)
3. Right-clicking a file (click)
4. Selecting "Copy" (click)
5. Navigating to destination (click, click)
6. Right-clicking (click)
7. Selecting "Paste" (click)

You type: `cp myfile.txt backup/` and press Enter. Done.

## Three Command-Line Options on Windows

Windows offers three ways to use the command line. All are accessible with screen readers. Here's how they compare:

### Option 1: Windows Command Prompt (CMD)

What it is: The original Windows command-line (1981-present)

Best for: Absolute beginners, maximum simplicity

Pros:

- Simple commands and syntax
- Minimal learning curve
- Easy to understand error messages
- Great for basic file operations
- Perfect entry point to command-line world

Cons:

- Limited advanced features
- Less powerful than alternatives
- No built-in piping (but available)
- Smaller ecosystem

Typical command:

```cmd
copy myfile.txt backup\
```

### Option 2: PowerShell

What it is: Microsoft's modern, powerful shell (2006-present)

Best for: Intermediate users, advanced automation

Pros:

- Very powerful for scripting
- Modern syntax and features
- Excellent for 3D printing automation
- Professional workflows
- Large community

Cons:

- Steeper learning curve than CMD
- More complex syntax
- More "wordy" commands
- Overkill for simple tasks

Typical command:

```powershell
Copy-Item -Path myfile.txt -Destination backup/
```

### Option 3: Git Bash

What it is: A Unix/Linux shell on Windows (runs bash inside Git for Windows)

Best for: Programmers, users familiar with Linux, advanced users

Pros:

- Familiar if you know Linux/Unix
- Powerful piping and text processing
- Consistent with other platforms (macOS, Linux)
- Excellent for advanced workflows
- Industry-standard for developers

Cons:

- Requires Git installation
- Steeper learning curve
- Path syntax is different from native Windows
- Less integrated with Windows system tools
- May be "too much" for beginners

Typical command:

```bash
cp myfile.txt backup/
```

## Command Comparison Table

Here's how common tasks compare across the three options:

| Task                  | Command Prompt            | PowerShell                      | Git Bash                 |
|-----------------------|---------------------------|---------------------------------|--------------------------|
| Show current location | `cd`                      | `pwd`                           | `pwd`                    |
| List files            | `dir /B`                  | `ls -n`                         | `ls`                     |
| Go to folder          | `cd Documents`            | `cd Documents`                  | `cd Documents`           |
| Go up one level       | `cd ..`                   | `cd ..`                         | `cd ..`                  |
| Go home               | `cd %USERPROFILE%`        | `cd ~`                          | `cd ~`                   |
| Create folder         | `mkdir Projects`          | `mkdir Projects`                | `mkdir Projects`         |
| Create file           | `echo text > file.txt`    | `echo "text" > file.txt`        | `echo "text" > file.txt` |
| Copy file             | `copy old.txt new.txt`    | `Copy-Item old.txt new.txt`     | `cp old.txt new.txt`     |
| Move file             | `move old.txt folder/`    | `Move-Item old.txt folder/`     | `mv old.txt folder/`     |
| Delete file           | `del file.txt`            | `Remove-Item file.txt`          | `rm file.txt`            |
| List with filter      | `dir /B *.txt`            | `ls *.txt`                      | `ls *.txt`               |
| Save output to file   | `dir > list.txt`          | `ls > list.txt`                 | `ls > list.txt`          |
| Page through output   | `dir \| more`             | `ls \| more`                    | `ls \| less`             |
| Search in files       | `findstr "text" file.txt` | `Select-String "text" file.txt` | `grep "text" file.txt`   |
| Show file contents    | `type file.txt`           | `cat file.txt` or `Get-Content` | `cat file.txt`           |
| Create script         | `.bat` files              | `.ps1` files                    | `.sh` files              |
| Run script            | `script.bat`              | `.\script.ps1`                  | `./script.sh`            |

## Feature Comparison Table

| Feature                  | CMD          | PowerShell   | Git Bash     |
|--------------------------|--------------|--------------|--------------|
| Simplicity               | Easiest      | Moderate     | Hardest      |
| Beginner-Friendly        | Best         | Good         | Challenging  |
| Power/Capability         | Basic        | Excellent    | Excellent    |
| Screen Reader Compatible | Perfect      | Perfect      | Perfect      |
| Linux/macOS Skills       | Windows-only | Some overlap | Full overlap |
| 3D Printing Automation   | Adequate     | Excellent    | Adequate     |
| Learning Curve           | Gentle       | Moderate     | Steep        |
| Community Support        | Moderate     | Excellent    | Excellent    |
| Windows Integration      | Perfect      | Perfect      | Good         |
| Installation Difficulty  | Built-in     | Built-in     | Requires Git |

## Quick Learner Profile Test

Answer these questions to find your best match:

### Question 1: Experience Level

- A: I've never used a command line Easier paths better (CMD or PowerShell)
- B: I've used terminals before Any path works
- C: I use macOS or Linux Git Bash most natural

### Question 2: What matters most?

- A: Simplicity and quick learning Choose CMD
- B: Power and advanced features Choose PowerShell
- C: Consistency across Windows/Mac/Linux Choose Git Bash

### Question 3: Future goals

- A: Just need to manage files for 3D printing CMD is fine
- B: Advanced automation and scripting PowerShell recommended
- C: Professional development workflows Git Bash best

### Question 4: Your main concern

- A: Don't want steep learning curve CMD
- B: Want industry-standard skills Git Bash
- C: Want Microsoft's modern tool PowerShell

## Recommendation by Goal

### Goal: "I want to learn the basics and get to 3D printing quickly"

#### Start with CMD (Command Prompt)

- Simplest syntax
- Fastest to get productive
- All core concepts transfer to others
- Can switch later if needed

[Start CMD Foundation](../CMD_Foundation/CMD_Curriculum_Overview/CMD_Curriculum_Overview.md)

### Goal: "I want power and professional automation"

#### Start with PowerShell

- Microsoft's modern, recommended tool
- Professional-grade capabilities
- Better for complex 3D printing workflows
- Skills are in-demand

[Start PowerShell Foundation](../PowerShell_Foundation/PowerShell_Curriculum_Overview/PowerShell_Curriculum_Overview.md)

### Goal: "I want skills that work on Windows, Mac, and Linux"

#### Start with Git Bash

- Unix/bash skills transfer everywhere
- Great preparation for professional development
- Consistent across all platforms
- Growing standard in 3D printing tools

[Start Git Bash Foundation](../GitBash_Foundation/GitBash_Curriculum_Overview/GitBash_Curriculum_Overview.md)

## Can I Switch Paths Later?

Yes, absolutely! All three teach the same fundamental concepts:

- File navigation and organization
- Creating and managing files/folders
- Combining commands for powerful workflows
- Scripting and automation basics

Once you learn one, switching to another is quick. The concepts are identical; only the syntax changes.

Example: If you learn CMD first, then later want PowerShell's power, you'll find it easy. The command `cd Documents` works the same way in all three.

## Important: All Are Equally Accessible

### Screen readers work perfectly with all three

- Text-based by nature (perfect for NVDA, JAWS)
- No mouse required
- Output is naturally readable
- Keyboard-only workflows

Don't let accessibility concerns influence your choice. All are fully accessible.

## Getting Started: Your Decision

Take a moment and choose:

### 1. I want the simplest path

[Command Prompt Foundation](../CMD_Foundation/Part_1.md)

- Time to first success: ~30 minutes
- Learning curve: Gentlest
- When to upgrade: Once you're comfortable and want power

### 2. I want modern, powerful Windows tools

[PowerShell Foundation](../PowerShell_Foundation/Part_1.md)

- Time to first success: ~45 minutes
- Learning curve: Moderate
- Best for: Professional automation, 3D printing workflows

### 3. I want Unix/Linux skills that work everywhere

[Git Bash Foundation](../GitBash_Foundation/Part_1.md)

- Time to first success: ~1 hour
- Learning curve: Steeper but rewarding
- Best for: Professional development, cross-platform work

## Not Sure? Here's What Most People Do

If you're reading this and unsure:

> Start with Command Prompt (CMD). It's the gentlest introduction. You'll be productive quickly and can always switch to PowerShell or Git Bash later. The skills transfer completely.

After completing CMD:

- Want more power? PowerShell is next
- Want Linux skills? Git Bash is next
- Want to stick with CMD? You have all the skills you need

## FAQ

Q: Do I need to pick now and stick with it forever?
A: No. Start with one, try another, switch between them. They're tools. Use what works.

Q: Will my 3D printing skills work in all three?
A: Yes. Once you understand the concepts (file organization, automation, piping), they apply everywhere.

Q: If I pick CMD, can I learn PowerShell later?
A: Absolutely. Many learners do exactly this. CMD gets you productive; PowerShell adds power.

Q: Is Git Bash harder?
A: Slightly, due to path syntax and Unix conventions. But not dramatically. If you take time with it, you'll learn it.

Q: Which do professional 3D printing developers use?
A: Mix of all three, but Git Bash/Linux is most common in cross-platform teams.

## Ready to Begin?

Choose your path above and click to start. Remember:

- Each lesson includes practice exercises
- You can't break anything
- Mistakes are learning opportunities
- Ask for help if stuck

Let's get you comfortable with the command line!


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) for vendor documentation.

