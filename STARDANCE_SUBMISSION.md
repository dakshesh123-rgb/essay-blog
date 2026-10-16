# Hack Club Stardance — Personal Essays Blog Submission & Devlog Guide

**Project Name:** Personal Essay Blog & Archives  
**Live Site:** [https://essay-blog.pages.dev](https://essay-blog.pages.dev)  
**Repository:** [https://github.com/dakshesh123-rgb/essay-blog](https://github.com/dakshesh123-rgb/essay-blog)  
**Builder:** Dakshesh Das ([@dakshesh236](https://stardance.hackclub.com/@dakshesh236))

---

## 1. Project Information for Stardance

When editing or creating the project on Stardance, use these values:

| Field | Value |
|---|---|
| **Title** | `Personal Essay Blog & Archives` |
| **Description** | `A minimalist literary journal and essay platform built from scratch to publish long-form writings on philosophy, discipline, and ideas. Features a serverless Cloudflare Pages Functions & KV backend, offline local Node.js server, and a handcrafted Royal Enfield SVG animation.` |
| **Demo URL** | `https://essay-blog.pages.dev` |
| **Repository URL** | `https://github.com/dakshesh123-rgb/essay-blog` |
| **README URL** | `https://raw.githubusercontent.com/dakshesh123-rgb/essay-blog/master/README.md` |
| **AI Declaration** | `I wrote the entire project myself from scratch using semantic HTML5, pure CSS3, vanilla JavaScript, Node.js, and Cloudflare Pages Functions. AI was used only as a rubber duck for minor syntax checks (<10% AI).` |

---

## 2. Devlog #1 Entry (Copy & Paste Ready)

```markdown
### Devlog 01: Building a Minimalist Essay Archive & Cloudflare KV Engine

Today I deployed the complete essay blogging and archive platform at **https://essay-blog.pages.dev**.

I wanted an intimate, quiet reading room on the web for my personal essays on philosophy, Dostoevsky, and self-discipline, without the bloat of WordPress or Substack.

#### What I Built:
1. **Classical Editorial Typography & Visual Identity:**
   - Designed a literary magazine layout using *Playfair Display* and *Lora* serif typography with calibrated reading column widths.
   - Handcrafted a custom Royal Enfield Bullet motorcycle SVG illustration and CSS keyframe thumping animation as a page loader, bringing mechanical character to the site.

2. **Serverless Edge Storage & Dual-Mode Backend:**
   - Wrote Cloudflare Pages Functions (`/api/posts`, `/api/publish`, `/api/publish/[id]`) that interface directly with Cloudflare KV (`ESSAYS_DB`) for globally distributed, zero-cost essay storage.
   - Built a lightweight zero-dependency local Node.js server (`server.js`) that persists essays to a local JSON database, making it possible to write and test offline on my phone in Termux.

3. **Publishing & Reader Workflows:**
   - Built an interactive publisher interface (`/publish`) protected by a secret authentication key, supporting markdown-style drafting, live previews, and post management.
   - Built dynamic single-essay viewer pages (`/post?id=...`) with clean shareable links and reading state.

Everything runs on vanilla web technologies with zero external framework dependencies!
```
