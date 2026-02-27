# Choosing a Screen Reader for Windows Command-Line Work {#setup_screen_reader_choice-screen_reader_choice}

Screen readers provide speech output and, where supported, braille output that make text-based interfaces accessible to people who are blind or have low vision. In command-line environments they convert terminal text, prompts, and keyboard navigation into audible or tactile feedback so users can work independently in shells such as Windows Terminal, Command Prompt, PowerShell, and Git Bash.

Choosing a screen reader is a personal decision. There is no single reader that is universally better or worse for every user. Preferences depend on workflow, training, budget, and comfort with customization. Each product has genuine strengths and trade-offs. If possible, try the available options and pick what feels most natural for you.

---

## The Four Screen Readers Covered in This Curriculum

### NVDA (NonVisual Desktop Access)

NVDA is a free, open-source screen reader developed by NV Access. It is one of the most widely used screen readers in the world.

**Advantages:**
- Free to download and use; supported by donations.
- Actively developed with frequent updates.
- Excellent support for Windows terminals (Command Prompt, PowerShell, Windows Terminal, Git Bash).
- Extensible through a rich add-on ecosystem.
- Strong community support, forums, and troubleshooting resources.
- Good braille display support via built-in braille drivers and the BRLTTY/LibLouis library.

**Disadvantages:**
- Advanced paid support is community-driven rather than available from a commercial vendor helpdesk.
- Some edge-case compatibility differences compared to commercial readers.

**Cost:** Free (donations welcomed at [https://www.nvaccess.org/](https://www.nvaccess.org/)).

**Trial:** Not applicable — NVDA is always free.

**Download:** [https://www.nvaccess.org/download/](https://www.nvaccess.org/download/)

---

### JAWS (Job Access With Speech)

JAWS is a commercial screen reader developed by Freedom Scientific (part of Vispero). It is one of the most feature-rich and widely deployed screen readers in enterprise and educational settings.

**Advantages:**
- Mature product with decades of development and broad application compatibility.
- Extensive scripting system allows deep customization for specific applications.
- Vendor-provided paid support, training, and documentation.
- Advanced braille display support and configuration.
- Widely used in workplaces and schools, so shared knowledge base is large.

**Disadvantages:**
- Commercial product with significant licensing cost.
- JAWS demo mode limits session length to approximately 40 minutes before requiring a computer restart or session reset to continue. This can be disruptive during extended practice sessions.
- Some advanced customization (JAWS scripts) requires a learning curve.

**Cost:** Commercial. Typical U.S. pricing is several hundred dollars per year for a software maintenance agreement (SMA), or a higher one-time perpetual license fee. Check [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/) for current pricing.

**Trial:** JAWS offers a time-limited demonstration mode (approximately 40 minutes per session). After the demo period expires, you must restart the computer to continue using JAWS without a license. This applies to the full JAWS installer — there is no separate shorter trial download.

**Download:** [https://www.freedomscientific.com/downloads/jaws/](https://www.freedomscientific.com/downloads/jaws/)

---

### Windows Narrator

Windows Narrator is Microsoft's built-in screen reader, included with Windows 10 and Windows 11 at no extra cost. It has improved significantly with recent Windows releases.

**Advantages:**
- Already installed on every Windows 10 and Windows 11 computer — no download or installation needed.
- No cost.
- Simple to start: press **Windows+Ctrl+Enter** to toggle Narrator on and off.
- Reasonable support for Windows Terminal, Command Prompt, and PowerShell.
- Integrates tightly with Windows accessibility features.

**Disadvantages:**
- Fewer customization options than JAWS or NVDA for complex command-line workflows.
- Braille display support exists but is more limited than dedicated screen readers.
- Less powerful for advanced scripting, code editing, or rapid navigation in large terminal outputs.
- Less community documentation for terminal-specific workflows compared to NVDA and JAWS.

**Cost:** Free (included with Windows).

**Trial:** Not applicable — Narrator is always available on Windows.

**Enable:** Settings → Accessibility → Narrator, or press **Windows+Ctrl+Enter**.

---

### Dolphin SuperNova

Dolphin SuperNova (sometimes referred to as "Dolphin Screen Reader" or simply "SuperNova") is a commercial product from Dolphin Computer Access. It is available in several editions: Magnifier, Magnifier & Speech, and Screen Reader. The Screen Reader and Magnifier & Speech editions provide full screen reader functionality.

**Advantages:**
- Commercial product with vendor support, training options, and documentation.
- Offers combined magnification and speech in a single product — useful for users with low vision who benefit from both.
- Good braille display support.
- Works with Windows terminals (Command Prompt, PowerShell, Windows Terminal).
- Full-featured 30-day trial license available for evaluation before purchase.

**Disadvantages:**
- Commercial licensing cost.
- Less widely used than NVDA or JAWS, so community resources and third-party documentation are more limited.
- Configuration for some terminal workflows may require additional setup.

**Cost:** Commercial. Pricing varies by edition (Magnifier only, Magnifier & Speech, or Screen Reader). Check [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) for current pricing. Expect costs broadly similar to other commercial screen readers.

**Trial:** Dolphin provides a full-featured 30-day trial license. This is more generous than JAWS's per-session demo and allows uninterrupted evaluation over a full month.

**Download:** [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)

---

## Choosing Between Them for Command-Line Work

Use this decision guide to narrow your choice:

**If budget is the primary constraint:**  
Start with NVDA or Windows Narrator. Both are free. NVDA is generally more capable and better documented for terminal work. Windows Narrator requires no installation and is a good quick-start option.

**If you already own or have access to JAWS or Dolphin through school or work:**  
Use what you have. Both work well for this curriculum.

**If you have low vision (partial sight) in addition to using a screen reader:**  
Consider Dolphin SuperNova, which combines magnification and speech in one product, or use Windows Magnifier alongside NVDA.

**If your organization requires vendor-supported software:**  
JAWS and Dolphin SuperNova both offer commercial support contracts.

**If you are unsure:**  
Install NVDA (free, no risk) and try a few lessons. You can always switch later, and the terminal commands you learn work identically regardless of which screen reader you use.

---

## Terminal Command Reference by Screen Reader

All four screen readers can perform the same tasks in the terminal. The table below shows the key actions and how to perform them with each reader. Exact key names can vary by keyboard layout and screen reader configuration.

| Task                                    | NVDA                                    | JAWS                                     | Windows Narrator                     | Dolphin SuperNova                           |
|-----------------------------------------|-----------------------------------------|------------------------------------------|--------------------------------------|---------------------------------------------|
| **Read current line or prompt**         | NVDA+Home (reads current line)          | Insert+Up Arrow (re-reads current line)  | Narrator+D (reads current line)      | CapsLock+L (reads current line)             |
| **Read all output from here**           | NVDA+Down Arrow (read to end of screen) | Insert+Ctrl+Down (read to end of screen) | Narrator+R (read from cursor)        | CapsLock+Numpad Plus (say all)              |
| **Move to previous line of output**     | Up Arrow in review mode                 | Insert+Up Arrow (line by line)           | Narrator+Up Arrow (scan mode)        | CapsLock+Numpad 8                           |
| **Move to next line of output**         | Down Arrow in review mode               | Insert+Down Arrow (line by line)         | Narrator+Down Arrow (scan mode)      | CapsLock+Numpad 2                           |
| **Jump to end of screen/buffer**        | NVDA+End                                | Insert+End                               | Narrator+End                         | CapsLock+Page Down                          |
| **Jump to start of screen/buffer**      | NVDA+Home                               | Insert+Home                              | Narrator+Home                        | CapsLock+Page Up                            |
| **Recall last command (shell history)** | Up Arrow (shell native; SR reads it)    | Up Arrow (shell native; SR reads it)     | Up Arrow (shell native; SR reads it) | Up Arrow (shell native; SR reads it)        |
| **Stop reading**                        | Ctrl                                    | Ctrl                                     | Ctrl                                 | Ctrl                                        |
| **Open screen reader settings**         | NVDA+N → Preferences                    | Insert+F3 → Options/Settings             | Windows+Ctrl+N (Narrator settings)   | CapsLock+SpaceBar (SuperNova control panel) |

> **Notes on modifier keys:**
> - **NVDA key** is Insert by default; can be changed to CapsLock in NVDA Preferences → Keyboard.
> - **JAWS key** is Insert by default; can be changed to CapsLock in JAWS Settings Center.
> - **Narrator key** is CapsLock or Insert; configurable in Settings → Accessibility → Narrator → Keyboard shortcuts.
> - **Dolphin key** is CapsLock by default; configurable in SuperNova Control Panel → Keyboard.

---

## Important Notes for This Curriculum

1. **All four screen readers work with all three shells** (CMD, PowerShell, Git Bash) covered in this curriculum. You do not need to change screen readers based on which shell pathway you choose.

2. **The best practice for all four screen readers** when dealing with long terminal output is to redirect it to a file and open it in Notepad:

   ```plaintext
   command > output.txt
   notepad output.txt
   ```
   
   This works in CMD, PowerShell, and Git Bash, and gives you a stable document that all four screen readers can read comfortably.

3. **Braille display users** can use a braille display alongside any of these four screen readers. See the Braille Display Setup guide for detailed instructions.

4. **The screen reader tips in each lesson** of this curriculum are written for NVDA, JAWS, Windows Narrator, and Dolphin SuperNova. If the specific key commands differ from what you hear when practicing, check your screen reader's documentation for the equivalent command — the underlying concept is always the same.

---

## Additional Resources

| Screen Reader     | Official Documentation                     | Support / Help                             |
|-------------------|--------------------------------------------|--------------------------------------------|
| NVDA              | [https://www.nvaccess.org/](https://www.nvaccess.org/) | [https://www.nvaccess.org/download/](https://www.nvaccess.org/download/) |
| JAWS              | [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/) | [https://www.freedomscientific.com/downloads/jaws/](https://www.freedomscientific.com/downloads/jaws/) |
| Windows Narrator  | [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) | [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) |
| Dolphin SuperNova | [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) | [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) |