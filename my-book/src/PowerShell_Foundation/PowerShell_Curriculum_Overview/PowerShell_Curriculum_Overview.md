# PowerShell for Screen Reader Users - Complete Curriculum Overview

**Welcome!** This curriculum teaches you how to use PowerShell (Windows Terminal) as a screen reader user, starting from zero experience and building to professional-level skills.

**Last Updated:** February 2026  
**Total Duration:** 30-45 hours of instruction + practice (for screen reader users)  
**Target Users:** Anyone with a screen reader (NVDA, JAWS, or other)

*Note: Time estimates reflect the additional time needed for screen reader navigation, text-to-speech processing, and careful keyboard-based workflows.*

---

## Why Learn PowerShell?

### For Everyone
- **Speed:** Text commands are often faster than clicking through menus
- **Automation:** Repeat tasks automatically instead of doing them manually
- **Precision:** Exact control over what your computer does
- **Scripting:** Create programs that solve real problems

### For 3D Printing (Our Focus)
- **Batch Operations:** Process 100s of 3D models at once
- **Accessibility:** Many 3D design tools are scriptable
- **Reproducibility:** Same settings, every time
- **Integration:** Connect OpenSCAD, slicers, and tools together

### For Screen Reader Users Specifically
- **Great Accessibility:** PowerShell works perfectly with NVDA, JAWS, and others
- **No Mouse Needed:** Everything is keyboard-based
- **Text-Based:** Output is naturally readable by screen readers
- **Stability:** Unlike GUIs, terminal interactions are consistent

---

## Curriculum Structure

### Phase 1: Absolute Beginner -> Comfortable User

| Lesson                                | Duration    | What You'll Learn                                      |
|---------------------------------------|-------------|--------------------------------------------------------|
| **Screen Reader Accessibility Guide** | 1.5 hours   | Screen reader tips specific to PowerShell (READ FIRST) |
| **PS-Pre: Your First Terminal**       | 2-2.5 hours | Opening PowerShell, first commands, basic navigation   |
| **PS-0: Getting Started**             | 1.5 hours   | Paths, shortcuts, tab completion                       |
| **PS-1: Navigation**                  | 2-2.5 hours | Moving around the file system confidently              |

**Goal:** You can navigate to any folder and see what's in it with your screen reader.

### Phase 2: Intermediate User -> Power User

| Lesson                                    | Duration    | What You'll Learn                        |
|-------------------------------------------|-------------|------------------------------------------|
| **PS-2: File & Folder Manipulation**      | 2.5-3 hours | Create, copy, move, delete files/folders |
| **PS-3: Input, Output & Piping**          | 2.5-3 hours | Chain commands together, redirect output |
| **PS-4: Environment Variables & Aliases** | 2-2.5 hours | Automate settings, create shortcuts      |
| **PS-5: Filling in the Gaps**             | 2-2.5 hours | Profiles, history, debugging             |

**Goal:** You can create folders, manage files, and combine commands to accomplish complex tasks.

### Phase 3: Professional Skills (Beyond Curriculum)

These topics extend beyond this curriculum but are natural next steps:

| Topic                       | When to Learn   |
|-----------------------------|-----------------|
| **Scripting (.ps1 files)**  | After PS-5      |
| **Functions & Loops**       | After PS-5      |
| **Error Handling**          | After PS-5      |
| **Remote Administration**   | Advanced        |
| **3D Printing Integration** | After all above |

---

## How to Use This Curriculum

### If You've Never Used a Terminal Before

**Start here and go in order:**

1. Read **Screen Reader Accessibility Guide** completely
2. Do **PS-Pre: Your First Terminal** exercises
3. Continue with PS-0, PS-1, etc.

**Don't skip steps** - each builds on the previous one.

### If You've Used a Terminal Before (But Not with a Screen Reader)

**Start here:**

1. Skim **Screen Reader Accessibility Guide** (you'll recognize most tips)
2. Quickly review **PS-Pre** (basics with screen reader focus)
3. Move to **PS-0** for deeper learning

### If You're Experienced with Terminal + Screen Reader

**You can:**

1. Jump to specific lessons you need (PS-2, PS-3, etc.)
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

### Screen Reader Accessibility Guide

This is your **companion resource** used throughout:

- Detailed NVDA keyboard shortcuts
- Detailed JAWS keyboard shortcuts
- Solutions to common problems
- Pro tips for efficiency

**Keep it open or printed as you work through lessons.**

---

## Quick Start Guide (First 45-60 Minutes)

### If You Have 45-60 Minutes Right Now:

1. **Open PowerShell** (Windows key -> type PowerShell -> Enter)
2. **Run these commands:**
   ```powershell
   pwd
   ls -n
   cd Documents
   pwd
   ```
3. **See how your screen reader reads each output**
4. **Try Tab completion:**
   - Type `cd D` and press Tab
   - Hear PowerShell auto-complete to Documents (or similar)
5. **Create a file:**
   ```powershell
   echo "I am learning PowerShell" > learning.txt
   cat learning.txt
   ```

**That's it!** You've done the key concepts. Now read PS-Pre for the details.

---

## Common Questions Before Starting

### Q: Do I have to use PowerShell? What about Command Prompt (cmd.exe)?

**A:** Command Prompt works, but PowerShell is better. PowerShell is:
- More powerful
- Better for modern tools
- Screen-reader-friendly
- The future of Windows automation

Use PowerShell for this curriculum.

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

**A:** Absolutely. Near the end of the 3dMake curriculum, you'll use PowerShell to:
- Batch-process 3D models
- Automate slicing tasks
- Run scripts that generate designs
- Integrate tools together

---

## Suggested Study Schedule

### Beginner Goal (Weeks 1-2)

**Week 1:**
- Day 1: Read Screen Reader Accessibility Guide
- Day 2: PS-Pre lesson
- Day 3: PS-0 lesson
- Day 4: Practice PS-0 and PS-1 exercises
- Day 5: PS-1 lesson

**Week 2:**
- Review PS-0 and PS-1 quizzes
- Practice navigation exercises daily
- Do extension problems for PS-0 and PS-1
- Feel confident with file system navigation

**Goal:** Know how to navigate to any folder, list its contents, and understand paths.

### Intermediate Goal (Weeks 3-5)

**Week 3:**
- PS-2 lesson (file manipulation)
- Complete exercises
- Take quiz

**Week 4:**
- PS-3 lesson (piping and output)
- Complete exercises
- Take quiz

**Week 5:**
- PS-4 and PS-5 lessons
- Complete all quizzes
- Practice combining commands

**Goal:** Create, modify, and move files. Combine commands for complex tasks.

### Advanced Goal (Weeks 6+)

- Review any lessons you need
- Do all extension problems
- Start learning PowerShell scripting
- Begin 3D printing integration

---

## Success Criteria

### By the End of PS-1, You Should:

- [ ] Know where you are at all times (`pwd`)
- [ ] See what's around you (`ls -n`)
- [ ] Navigate confidently with your screen reader
- [ ] Use Tab completion comfortably
- [ ] Understand absolute and relative paths
- [ ] Pass the PS-0 and PS-1 quizzes

### By the End of PS-3, You Should:

- [ ] Create and delete files and folders
- [ ] Copy and move files
- [ ] Redirect output to files
- [ ] Pipe commands together
- [ ] Save long outputs to readable files
- [ ] Pass all quizzes PS-0 through PS-3

### By the End of PS-5, You Should:

- [ ] Use command history effectively
- [ ] Create aliases and functions
- [ ] Understand your PowerShell profile
- [ ] Handle screen reader edge cases
- [ ] Feel comfortable experimenting
- [ ] Pass all quizzes

---

## Important Rules

### Rule 1: Always Know Where You Are

Every session, first thing:
```powershell
pwd
```

If you don't know your path, you'll get lost. Don't move until you know where you are.

### Rule 2: Check Before You Delete

Before deleting anything:
```powershell
ls -n
```

Make sure you're deleting the right thing. Once it's gone, it's gone.

### Rule 3: Use `-n` with ls

Always:
```powershell
ls -n
```

Never:
```powershell
ls
```

The `-n` (names only) is screen reader friendly. The default view is hard to read.

### Rule 4: When Lost, Redirect to a File

If output is confusing:
```powershell
command-name > output.txt
notepad.exe output.txt
```

This is always clearer for screen readers than terminal output.

### Rule 5: Save Everything You Create

Every exercise, save your work:
```powershell
mkdir my-practice-folder
cd my-practice-folder
```

Create a "learning" folder and keep everything there.

---

## Troubleshooting: "Nothing Works!"

If you're stuck:

1. **Can't hear PowerShell at all?**
   - Make sure screen reader is running BEFORE PowerShell
   - Try **Alt+Tab** to cycle to PowerShell window
   - Restart both screen reader and PowerShell

2. **Commands not working?**
   - Check spelling carefully
   - Make sure you pressed Enter
   - Try `Get-Help command-name`

3. **Can't read the output?**
   - Redirect to file: `command > output.txt`
   - Open in Notepad: `notepad.exe output.txt`
   - This always works

4. **Something ran forever?**
   - Press **Ctrl+C** to stop it

5. **Completely confused?**
   - Go back to PS-Pre and start over
   - Work through every single exercise slowly
   - Ask for help (ask an instructor or peer)

---

## Resources

### Official Documentation
- **PowerShell Docs:** https://docs.microsoft.com/powershell/
- **Windows Terminal Docs:** https://docs.microsoft.com/windows/terminal/

### Screen Reader Guides
- **NVDA:** https://www.nvaccess.org/documentation/
- **JAWS:** https://www.freedomscientific.com/support/

### Learning Resources
- **Microsoft Learn:** https://learn.microsoft.com/en-us/training/modules/
- **PowerShell ISE:** Built-in editor (open with `ise`)

### 3D Printing Integration
- **OpenSCAD Scripting:** See 3dMake lessons in this curriculum
- **Batch Processing:** See PS-3 and PS-5 for real examples

---

## Getting Help

### If You're Stuck:

1. **Read the relevant section of Screen Reader Accessibility Guide**
2. **Try a different approach** from the "Solutions" sections
3. **Go back one lesson** and strengthen those concepts
4. **Ask an instructor or peer** with specific questions

### Before You Ask for Help, Prepare:

1. What command are you running?
2. What do you expect to happen?
3. What actually happened?
4. What error message did you hear?

**Example:** "I ran `cd Desktop` but my screen reader said 'Cannot find path'. I expected to go to the Desktop folder."

This helps others help you quickly.

---

## Next Steps

1. **Right now:** Read the Screen Reader Accessibility Guide completely
2. **Next session:** Start PS-Pre and do all exercises
3. **Keep going:** One lesson per day/week at your pace
4. **Practice:** Do exercises, not just read
5. **Check yourself:** Take the quizzes honestly
6. **Celebrate:** Each lesson completed is a real skill gained

---

## Final Thoughts

Learning to use PowerShell with a screen reader is **absolutely achievable**. Many people do it successfully. This curriculum was designed based on real experiences of screen reader users.

**You've got this.** Start with PS-Pre, take it slow, do the exercises, and ask questions when stuck.

Welcome to the PowerShell community!

---

## Curriculum Map (For Reference)

```
START HERE v
+---- Screen Reader Accessibility Guide (reference throughout)
+---- PS-Pre: Your First Terminal (absolute beginner entry point)
+---- PS-0: Getting Started (paths & navigation foundations)
+---- PS-1: Navigation (comfortable moving around)
+---- PS-2: File & Folder Manipulation (create/move/delete)
+---- PS-3: Input, Output & Piping (chain commands)
+---- PS-4: Environment Variables & Aliases (automation)
+---- PS-5: Filling in the Gaps (profiles & history)
+---- PS_Unit_Test (comprehensive practice & assessment)
        v
    NEXT: 3D Printing Integration Lessons
        v
    ADVANCED: PowerShell Scripting
```

---

**Questions? Feedback? Stuck?** Refer back to this page and the Screen Reader Accessibility Guide. You've got everything you need.

**Now open PS-Pre and let's get started!**
