# Personal Essays Archives

A handcrafted, distraction-free literary essay blog and archive built to run on Cloudflare Pages and locally via Node.js.

Live link: [https://essay-blog.pages.dev](https://essay-blog.pages.dev)  
GitHub repository: [https://github.com/dakshesh123-rgb/essay-blog](https://github.com/dakshesh123-rgb/essay-blog)

## Why I made this

I wanted a quiet, distraction-free space on the web to write and publish long-form essays about philosophy, Dostoevsky, mental discipline, and ideas that matter to me. 

Most modern blogging platforms (WordPress, Ghost, Substack, Medium) are either bloated with hundreds of MBs of dependencies, full of tracking scripts, or hide your writing behind paywalls and cookie banners. Since I code everything on an Android phone using Termux, I wanted a clean platform that I understand from top to bottom—one with zero framework overhead, fast loading times, and a vintage literary journal aesthetic.

## What's in it

- **Editorial reading layout**: Styled with classical typography (*Playfair Display* for serif headlines and *Lora* for body text) with generous line heights and margins designed for focused reading.
- **Handmade Royal Enfield Bullet loader**: A custom CSS and SVG animation of a classic motorcycle thumping to life with exhaust smoke on initial page load, reflecting the tactile, physical energy that balances deep reading and thinking.
- **Dynamic essay reader & excerpt generator**: The archives view dynamically pulls essays and generates readable excerpts, leading to dedicated single-essay reading pages (`/post?id=...`).
- **Secure web publisher interface**: A dedicated publishing dashboard (`/publish`) where new essays can be drafted, formatted, and published with password key authentication (`SECRET_KEY`).
- **Dual-mode backend**:
  - **Serverless production**: Runs on Cloudflare Pages Functions (`functions/api/posts.js`, `publish.js`) backed by Cloudflare KV (`ESSAYS_DB`) for instant edge delivery and zero hosting cost.
  - **Offline local runtime**: Includes a standalone `server.js` using Node's standard `http` and `fs` modules with JSON persistence (`posts.json`) so I can write and test essays locally on Termux without an active internet connection.

## Running it locally

You don't need `npm install` or any external packages. It uses standard Node.js built-ins:

```bash
git clone https://github.com/dakshesh123-rgb/essay-blog.git
cd essay-blog
node server.js
```

Then open `http://localhost:3000` in your browser.

- View archives: `http://localhost:3000/`
- Publish an essay: `http://localhost:3000/publish`

## How I built it & technical choices

1. **Pure vanilla frontend**: Built entirely with semantic HTML5, clean CSS3, and native JavaScript. No React, Vue, or heavy static site generators that slow down phone development.
2. **Serverless Cloudflare KV**: For live deployment, essays are stored as JSON in Cloudflare KV via Pages Functions, eliminating the need to maintain an active VPS or SQL database server.
3. **Zero npm runtime dependencies**: The local server (`server.js`) relies solely on Node's native `http`, `fs`, and `path` modules. It starts in under 20 milliseconds.
4. **Mobile-friendly publishing**: The publishing UI and reading views adapt seamlessly to phone screens, tablets, and desktop browsers using CSS flexbox and media queries.

## AI usage declaration

In accordance with Hack Club Stardance guidelines:
- **Architecture & Concept**: 100% my own idea, designed to serve as my personal essay archive.
- **Frontend & CSS styling**: Written by me, including the custom SVG Royal Enfield vector art and animation keyframes.
- **Backend logic**: The Node.js HTTP server and Cloudflare Pages Functions were written directly by me with basic syntax validation.
- **AI Contribution**: Under 10%. AI was only used as a rubber duck for troubleshooting Cloudflare Pages KV syntax and checking regex formatting.

## About the author

I'm Dakshesh Das, a 16-year-old high school student (11th grade). I build computational physics solvers, web tools, and write essays entirely from an Android smartphone using Termux.

- GitHub: [https://github.com/dakshesh123-rgb](https://github.com/dakshesh123-rgb)
- Portfolio: [https://dakshesh-portfolio.pages.dev](https://dakshesh-portfolio.pages.dev)
