This project has been moved into a named subfolder to keep `Extension_Projects` tidy.

See: [Extension_Projects/Parametric_Keychain/Parametric_Keychain.md](Extension_Projects/Parametric_Keychain/Parametric_Keychain.md)

(The canonical copy lives in `Extension_Projects/Parametric_Keychain/`.)
```markdown
# Parametric Keychain — Extension Project (Self-Paced)

Estimated time: 2–4 hours

Objective:
- Design a small parametric keychain in OpenSCAD that accepts text and size parameters and exports an STL suitable for printing.

Tasks:
1. Create `keychain.scad` with top-level parameters: `width`, `height`, `thickness`, and `text`.
2. Implement embossed or debossed text using `linear_extrude()` of a 2D text shape (or simulate with simple geometry if system lacks text support).
3. Produce three size variants and export STLs; record print settings.
4. Test attachment point for common key rings and report fit.

Deliverable:
- `keychain.scad`, three STLs, and a short note on parameter choices and print settings.

Starter files
- [starter.scad](../../docs/assets/Extension_Projects/Parametric_Keychain/starter.scad) — minimal parametric scaffold to begin.

``` 
