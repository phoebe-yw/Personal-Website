# Phoebe Wang — Portfolio

**Live site → [phoebe-yw.github.io/Personal-Website](https://phoebe-yw.github.io/Personal-Website/)**

A personal portfolio built to look like a kraft paper file folder. Click a tab on the right edge to open that section; click it again (or the top notch) to close the folder.

Built with Vite + vanilla JavaScript, animated with GSAP.

---

## About the project

I wanted a portfolio that felt tactile! The whole site is a single interactive file folder: closed by default, with seven tabbed sections that open like pages inside a manila folder.

**Sections:** about · experience · projects · skills · résumé · contact · journal

**Two themes:** a warm kraft "manila afternoon" (default) and a dark "espresso cabinet" - toggle with the button in the bottom-right corner.

---

## Editing content

| What | Where |
|---|---|
| About, Experience, Projects, Skills, Contact | `src/sections/<name>.js` |
| Journal posts | Add a `.md` file to `src/posts/` |
| Résumé PDF | Replace `public/resume.pdf` |

**Journal post format:**
```markdown
---
title: post title
date: 2026-06-01
---

Content here. Markdown supported.
```

---
