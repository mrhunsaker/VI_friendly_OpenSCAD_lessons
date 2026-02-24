# Choosing a Screen Reader for Windows Command-Line Work {#setup_screen_reader_choice-screen_reader_choice}

Screen readers provide speech and (where supported) braille output that make textual interfaces accessible to people who are blind or have low vision. In command-line environments they convert terminal text, prompts, and keyboard navigation into audible or tactile feedback so users can interact independently with shells such as Windows Terminal, Command Prompt, and PowerShell.

Choosing a screen reader is a personal decision — there is no single reader that is universally better or worse for every user. Preferences depend on workflow, training, budget, and comfort with customization; each product has strengths and trade-offs, so try available options and pick what feels best for you.

JAWS

- Advantages: Mature, feature-rich, extensive documentation and vendor support; many users report robust compatibility with a wide range of Windows applications and advanced configuration options useful for power users.
- Disadvantages: Commercial software with licensing costs and vendor-managed updates; some advanced customization can require a learning curve.
- Cost (year): Commercial — expect a multi-hundred-dollar annual cost in common U.S. purchase scenarios.
- Cost (year): Commercial — expect a multi-hundred-dollar annual cost in common U.S. purchase scenarios.
- License/trial: JAWS commonly offers a time-limited demo (approximately 40 minutes per session); users may need to restart the computer or reinitialize the session to continue using the demo beyond that limit.

NVDA

- Advantages: Free and open-source (donation-supported); actively developed with good support for terminal apps; extensible via add-ons; strong community troubleshooting resources.
- Disadvantages: Some edge-case compatibility differences versus commercial readers; advanced vendor support is community-driven rather than paid support.
- Cost (year): Free (donation-supported). If paid support or training is purchased separately, that is an additional cost.

Windows Narrator

- Advantages: Built into Windows at no extra cost; simple to enable and use for quick tasks; minimal setup needed in Windows Terminal, Command Prompt, and PowerShell.
- Disadvantages: Less feature-rich than dedicated screen readers; may lack advanced customization and some power-user conveniences for complex CLI workflows.
- Cost (year): Free (included with Windows).

Dolphin (SuperNova / Dolphin Screen Reader family)

- Advantages: Commercial product line focused on accessibility, with options tailored to different user needs (visual support, magnification + speech); vendor support and training options are available.
- Disadvantages: Commercial licensing and potential configuration complexity depending on the product; features and behavior can differ across Dolphin products.
- Cost (year): Commercial — typically in the range of other paid screen readers (expect a multi-hundred-dollar per-year cost for full-featured licensing/support).
- License/trial: Dolphin typically provides a full-featured 30-day trial license for evaluation before purchase.

Choosing between them for command-line work

- If budget is a primary constraint, NVDA or Windows Narrator lets users work with terminals at no licensing cost; NVDA often offers more advanced accessibility features than Narrator out of the box.
- If enterprise support, vendor training, or particular advanced features are required, commercial options (JAWS or Dolphin) provide paid support and additional configuration tools at an ongoing cost.
- All four can be used with Windows Terminal, Command Prompt, and PowerShell; test the specific terminal and workflow you plan to use, since subtle differences in keystroke handling or focus behavior can affect CLI efficiency.

All four can be used with Windows Terminal, Command Prompt, and PowerShell; test the specific terminal and workflow you plan to use, since subtle differences in keystroke handling or focus behavior can affect CLI efficiency.

| Screen Reader       | Read current line or prompt                                                                                                                      | Move/back through previous output                                                                                                         | Recall last command (history)                                                                                  | Read all output / buffer                                                                        |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| JAWS                | Use the JAWS/virtual cursor or focus mode and move with arrow keys; JAWS will speak the current line or prompt.                                  | Use the JAWS review cursor or arrow keys to navigate earlier lines of terminal output; review commands let you jump by line or paragraph. | Use the shell's history (Up arrow) to recall previous commands; JAWS will read the recalled line when focused. | Use JAWS "Say All" / review read to speak the full terminal buffer from the current position.   |
| NVDA                | Use NVDA's focus/virtual review cursor and arrow keys to read the current line or prompt aloud.                                                  | Use NVDA's review cursor or move with arrow keys to read prior output lines; review commands can move by line or by larger chunks.        | Use the shell's Up arrow to navigate history; NVDA will speak the recalled command when the line is focused.   | Use NVDA's "say all" or read-from-current-position feature to speak the terminal buffer.        |
| Windows Narrator    | In scan/focus mode, arrow keys read the current line or prompt; Narrator also offers read-from-here commands.                                    | Use Narrator's scan mode and navigation keys to move back through previous output and have it read aloud.                                 | Use the shell Up arrow to recall previous commands; Narrator will announce the recalled line when focused.     | Use Narrator's continuous/read-all feature to read the terminal buffer from the current cursor. |
| Dolphin (SuperNova) | Use Dolphin's review or focus cursor and arrow keys to have the current line or prompt spoken; Dolphin also provides review navigation controls. | Use Dolphin's review functions to step through past terminal output by line or paragraph.                                                 | Use the shell Up arrow to recall earlier commands; Dolphin will read the recalled command when focused.        | Use Dolphin's read-all / continuous read features to speak the full terminal buffer.            |
