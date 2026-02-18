# mdBook Build & Serve

Quick instructions for contributors to build and preview the site locally using mdBook.

Install mdBook (example via Rust/Cargo):

```bash
cargo install mdbook
```

Build the book (run from the `my-book` folder):

```bash
cd my-book
mdbook build
```

Serve locally for live preview (press Ctrl+C to stop):

```bash
cd my-book
mdbook serve -p 3000
```

The generated site will be available in `my-book/docs/` by default.

If you prefer a single command from the repository root, use the included script if present:

```bash
bash mdbook_generate.sh
```
