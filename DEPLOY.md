# Krutik Vanjara — Portfolio Deployment Guide

Built on [Astro Navfolio](https://github.com/dodolalorc/astro-navfolio) — customised with your details, projects, and blog posts.

---

## Local Testing (before deploying)

### Prerequisites
- Node.js >= 22.12 (`node -v`)
- OR Bun (`bun -v`)

### Steps

```bash
# 1. Install dependencies
npm install --legacy-peer-deps
# or: bun install

# 2. Start dev server (live reload, no search index)
npm run dev
# → open http://localhost:4321

# 3. Build for production (required to test search)
npm run build

# 4. Preview production build (with full search)
npm run preview
# → open http://localhost:4321
```

> **Note on search**: The Pagefind search index only works in the production build (`npm run build` + `npm run preview`). In dev mode (`npm run dev`), the search modal shows "Search index not available yet" — that is expected.

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. From the project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: krutik-vanjara (or any name)
# - In which directory is your code? ./
# - Override settings? No

# 3. Set your site URL env var in Vercel dashboard (optional but recommended)
# SITE_URL = https://your-project.vercel.app
```

### Option B — GitHub + Vercel (recommended for ongoing edits)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial Krutik Vanjara portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new) → Import your GitHub repo

3. Vercel auto-detects Astro. In **Build & Output Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. Add Environment Variable:
   - `SITE_URL` = `https://your-project.vercel.app` (or your custom domain)

5. Deploy → Done.

---

## Editing your content

| What to edit | File |
|---|---|
| Profile, nav, homepage modules | `src/config/site.toml` |
| About page | `src/content/about.mdx` |
| Blog posts | `src/content/blog/*.md` |
| Projects shelf intro | `src/content/projects/index.mdx` |
| Short notes/thoughts | `src/content/vibe/*.md` |
| Avatar image | `public/images/avatar.png` |

### Adding a new blog post

```bash
# Using bun
bun run post:new my-post-slug

# Or manually create src/content/blog/my-post-slug.md with:
---
title: 'Post Title'
description: 'Short summary'
date: '2026-06-16'
draft: false
tags:
  - IoT
categories:
  - Engineering
---

Your content here.
```

### Adding a new vibe note

```bash
bun run vibe:new todays-thought
```

---

## Customisation

- **Theme colour**: edit `palette` in `src/config/site.toml` — options: `green-soft`, `blue-soft`, `orange-soft`, `purple-soft`, `rose-soft`, `brown-soft`
- **Comments**: currently disabled. To enable, set up [Giscus](https://giscus.app) on your GitHub repo and fill in `[config.comments.giscus]` in `site.toml`
- **Avatar**: replace `public/images/avatar.png` with your photo (square, 200×200px minimum)

---

## GitIngest — editing via AI

To make future edits with Claude or another AI, use [gitingest.com](https://gitingest.com):

1. Push your site to GitHub
2. Go to `https://gitingest.com/YOUR_USERNAME/YOUR_REPO`
3. Copy the full codebase digest
4. Paste into Claude with your edit instructions
5. Apply the changes and push → Vercel auto-redeploys

---

*Built June 2026. Astro 6 + Tailwind CSS 4 + Pagefind.*
