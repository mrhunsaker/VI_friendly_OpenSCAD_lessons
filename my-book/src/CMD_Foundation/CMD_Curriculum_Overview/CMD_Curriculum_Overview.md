# Windows Command Prompt (CMD) for Screen Reader Users - Complete Curriculum Overview

**Welcome!** This curriculum teaches you how to use Windows Command Prompt (CMD) as a screen reader user, starting from zero experience and building to practical skill levels.

**Last Updated:** February 2026  
**Total Duration:** 30-45 hours of instruction + practice (for screen reader users)  
**Target Users:** Anyone with a screen reader (NVDA, JAWS, or other)

*Note: Time estimates reflect the additional time needed for screen reader navigation, text-to-speech processing, and careful keyboard-based workflows.*  
**Alternate to:** PowerShell curriculum (same concepts, simpler commands)

---

## Why Learn Windows Command Prompt (CMD)?

### For Everyone
- **Speed:** Text commands are often faster than clicking through menus
- **Simplicity:** CMD has fewer commands than PowerShell but they're straightforward
- **Accessibility:** Works perfectly with screen readers
- **Precision:** Exact control over what your computer does

### For 3D Printing (Our Focus)
- **Batch Operations:** Process multiple 3D models at once
- **Accessibility:** Many 3D design tools are scriptable from CMD
- **Reproducibility:** Same settings, every time
- **Integration:** Connect OpenSCAD and other tools together

### For Screen Reader Users Specifically
- **Great Accessibility:** CMD works perfectly with NVDA, JAWS, and others
- **No Mouse Needed:** Everything is keyboard-based
- **Text-Based:** Output is naturally readable by screen readers
- **Stability:** Unlike GUIs, terminal interactions are consistent
- **Simpler Syntax:** CMD commands are more straightforward than PowerShell

---

## Curriculum Structure

### Phase 1: Absolute Beginner -> Comfortable User

| Lesson                           | Duration    | What You'll Learn                             |
|----------------------------------|-------------|-----------------------------------------------|
| **CMD-Pre: Your First Terminal** | 2-2.5 hours | Opening CMD, first commands, basic navigation |
| **CMD-0: Getting Started**       | 1.5 hours   | Paths, shortcuts, command basics              |
| **CMD-1: Navigation**            | 2-2.5 hours | Moving around the file system confidently     |

**Goal:** You can navigate to any folder and see what's in it with your screen reader.

### Phase 2: Intermediate User -> Power User

| Lesson                                       | Duration    | What You'll Learn                        |
|----------------------------------------------|-------------|------------------------------------------|
| **CMD-2: File & Folder Manipulation**        | 2.5-3 hours | Create, copy, move, delete files/folders |
| **CMD-3: Input, Output & Redirection**       | 2.5-3 hours | Redirect output, pipe commands           |
| **CMD-4: Environment Variables & Shortcuts** | 2-2.5 hours | Automate settings, create shortcuts      |
| **CMD-5: Filling in the Gaps**               | 2-2.5 hours | Batch files, history, debugging          |

**Goal:** You can create folders, manage files, and combine commands to accomplish complex tasks.

### Phase 3: Professional Skills (Beyond Curriculum)

These topics extend beyond this curriculum but are natural next steps:

| Topic                        | When to Learn     |
|------------------------------|-------------------|
| **Batch Files (.bat files)** | After CMD-5       |
| **Scripting & Loops**        | After CMD-5       |
| **Advanced Automation**      | After Batch Files |
| **3D Printing Integration**  | After all above   |

---

## How to Use This Curriculum

### If You've Never Used a Terminal Before

**Start here and go in order:**

1. Do **CMD-Pre: Your First Terminal** exercises
2. Continue with CMD-0, CMD-1, etc.

**Don't skip steps** - each builds on the previous one.

### If You've Used a Terminal Before (But Not with a Screen Reader)

**Start here:**

1. Quickly review **CMD-Pre** (basics with screen reader focus)
2. Move to **CMD-0** for deeper learning

### If You're Experienced with Terminal + Screen Reader

**You can:**

1. Jump to specific lessons you need (CMD-2, CMD-3, etc.)
2. Use the **Quick Reference** sections
3. Skip the practice exercises, do the quizzes to verify knowledge

---

## How Each Lesson is Structured

### Every Lesson Contains:

1. **Learning Objectives** - What you'll be able to do
2. **Key Commands** - The important ones to memorize
3. **Step-by-Step Examples** - How to actually do it
4. **Practice Exercises** - Hands-on work
5. **Quiz Questions** - Check your understanding
6. **Extension Problems** - Go deeper if interested

### How to Get Through Each Lesson:

1. **Read** the learning objectives
2. **Do** the step-by-step examples alongside
3. **Complete** the practice exercises (critical!)
4. **Take** the quiz (don't cheat)
5. **Try** extension problems if you have time
6. **Move to next lesson** when quiz is solid

**Estimated time:** 2-3 hours per lesson for screen reader users (depends on practice time)

---

## Screen Reader Tips Throughout the Curriculum

### Every Lesson Includes:

- **[SR]** symbols marking screen reader-specific sections
- Tips for NVDA and JAWS users separately
- Solutions for common accessibility issues
- Workarounds for long outputs

---

## Quick Start Guide (First 45-60 Minutes)

### If You Have 45-60 Minutes Right Now:

1. **Open Command Prompt** (Windows key -> type cmd -> Enter)
2. **Run these commands:**
   ```cmd
   cd
   dir
   cd Documents
   cd
   ```
3. **See how your screen reader reads each output**
4. **Create a file:**
   ```cmd
   echo I am learning CMD > learning.txt
   type learning.txt
   ```

**That's it!** You've done the key concepts. Now read CMD-Pre for the details.

---

## Common Questions Before Starting

### Q: PowerShell or CMD? Which should I learn?

**A:** 
- **Use CMD** if: You want simplicity, you're a beginner, or this is your first time with a terminal
- **Use PowerShell** if: You want more power, you already know CMD, or you're doing advanced automation

Both teach the same fundamental concepts. This curriculum is CMD; there's a PowerShell alternative.

### Q: What if I use a different screen reader (not NVDA or JAWS)?

**A:** The fundamentals work the same. Check your screen reader's documentation for the equivalent of these commands:
- Read current line
- Read to end of screen
- Read next/previous page

Most screen readers have these features.

### Q: I'm intimidated. Is this really for me?

**A:** YES. This curriculum is specifically designed for people with no terminal experience AND with screen readers. You'll start with absolute basics. There's nothing to be afraid of - we've written this specifically to make it accessible.

### Q: How long will this take?

**A:** Realistically:
- Minimum (just lessons, no exercises): 15-18 hours
- Normal (lessons + exercises): 30-45 hours
- With extension problems: 45-60+ hours

Spread it over weeks or months. Go at your pace.

### Q: What if I forget things?

**A:** That's normal and expected. Solutions:
1. Come back to this page for the overview
2. Jump back to that lesson for a quick review
3. Use the quiz questions to self-test
4. Check the Screen Reader Accessibility Guide for troubleshooting

### Q: Will this help me with 3D printing?

**A:** Absolutely. Near the end of the 3dMake curriculum, you'll use CMD to:
- Batch-process 3D models
- Automate file operations
- Run scripts that work with designs
- Integrate tools together

---

## Important Rules

### Rule 1: Always Know Where You Are

Every session, first thing:
```cmd
cd
```

If you don't know your path, you'll get lost. Don't move until you know where you are.

### Rule 2: Check Before You Delete

Before deleting anything:
```cmd
dir
```

Make sure you're deleting the right thing. Once it's gone, it's gone.

### Rule 3: Use `dir` for Listings

Always:
```cmd
dir
```

The `dir` command shows files clearly, one per line, perfect for screen readers.

### Rule 4: When Lost, Redirect to a File

If output is confusing:
```cmd
dir > output.txt
notepad.exe output.txt
```

This is always clearer for screen readers than terminal output.

### Rule 5: Save Everything You Create

Every exercise, save your work:
```cmd
mkdir my-practice-folder
cd my-practice-folder
```

Create a "learning" folder and keep everything there.

---

## Troubleshooting: "Nothing Works!"

If you're stuck:

1. **Can't hear CMD at all?**
   - Make sure screen reader is running BEFORE opening CMD
   - Try **Alt+Tab** to cycle to CMD window
   - Restart both screen reader and CMD

2. **Commands not working?**
   - Check spelling carefully
   - Make sure you pressed Enter
   - Try `help command-name`

3. **Can't read the output?**
   - Redirect to file: `command > output.txt`
   - Open in Notepad: `notepad.exe output.txt`
   - This always works

4. **Something ran forever?**
   - Press **Ctrl+C** to stop it

5. **Completely confused?**
   - Go back to CMD-Pre and start over
   - Work through every single exercise slowly
   - Ask for help (ask an instructor or peer)

---

## Resources

### Official Documentation
- **Windows CMD Reference:** https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands-glossary
- **Microsoft Learn:** https://learn.microsoft.com/

### Screen Reader Guides
- **NVDA:** https://www.nvaccess.org/documentation/
- **JAWS:** https://www.freedomscientific.com/support/

### Learning Resources
- **Command Line Basics:** https://learn.microsoft.com/en-us/windows/terminal/
- **Windows Terminal:** https://github.com/microsoft/terminal

---

## Getting Help

### If You're Stuck:

1. **Check the relevant lesson section**
2. **Try a different approach** from the examples
3. **Go back one lesson** and strengthen those concepts
4. **Ask an instructor or peer** with specific questions

### Before You Ask for Help, Prepare:

1. What command are you running?
2. What do you expect to happen?
3. What actually happened?
4. What error message did you hear?

**Example:** "I ran `cd Desktop` but got 'The system cannot find the path specified'. I expected to go to the Desktop folder."

This helps others help you quickly.

---

## Next Steps

1. **Right now:** Open CMD and try the Quick Start commands
2. **Next session:** Start CMD-Pre and do all exercises
3. **Keep going:** One lesson per day/week at your pace
4. **Practice:** Do exercises, not just read
5. **Check yourself:** Take the quizzes honestly
6. **Celebrate:** Each lesson completed is a real skill gained

---

## Final Thoughts

Learning to use Windows Command Prompt with a screen reader is **absolutely achievable**. Many people do it successfully. This curriculum was designed based on real experiences of screen reader users.

**You've got this.** Start with CMD-Pre, take it slow, do the exercises, and ask questions when stuck.

Welcome to the Command Prompt community!

---

## Curriculum Map (For Reference)

```
START HERE v
+---- CMD-Pre: Your First Terminal (absolute beginner entry point)
+---- CMD-0: Getting Started (paths & navigation foundations)
+---- CMD-1: Navigation (comfortable moving around)
+---- CMD-2: File & Folder Manipulation (create/move/delete)
+---- CMD-3: Input & Output Redirection (redirect commands)
+---- CMD-4: Environment Variables & Shortcuts (automation)
+---- CMD-5: Filling in the Gaps (batch files & history)
+---- CMD_Unit_Test (comprehensive practice & assessment)
        v
    NEXT: 3D Printing Integration Lessons
        v
    ADVANCED: Batch File Scripting
```

---

**Questions? Feedback? Stuck?** Refer back to this page and try the Troubleshooting section. You've got everything you need.

**Now open CMD-Pre and let's get started!**
