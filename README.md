# FORBIDDEN: The Forbidden Archive

A static, no-backend, no-build website: an endless archive of forbidden-themed profiles about Christian history, texts, symbols and moral questions. For entertainment and education; classifications are design labels, not church or government rulings.

## Deploy on GitHub Pages
1. Put `index.html`, `style.css`, `script.js` in a repository (root or any subfolder).
2. Settings > Pages > deploy from your branch. All paths are relative and profile links use `#p/ID`, so subdirectories work.

## How it works
- **Identity:** every ID is a positive decimal *string* of any length, never a Number. A string hash (FNV-style, linear in length) deterministically chooses category, subject, lens, status and artwork, so the same ID always gives the same profile.
- **Content:** about 55 hand-written real subjects (with biblical references and cautious wording) plus a fictional generator, always labelled FICTION. Edit the `C` array in `script.js` to add subjects.
- **Infinite feed:** IntersectionObserver + scroll check + 1.2s watchdog, batches of 12, no end state. Category feeds scan IDs and keep matches.
- **Search:** any digit string opens that profile directly. Text search scans the first 3,000 identities.
- **Favorites:** `localStorage`, this browser only.

## Known limits
- The feed never prunes old cards (cards are text and CSS art, with `content-visibility:auto`), so extremely long sessions grow the DOM.
- Artwork is CSS-generated; no external images are used.
- Text search is not a full index of the infinite space.
