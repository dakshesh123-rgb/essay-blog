# Personal Essays Archives

A handcrafted, distraction-free literary essay blog and archive built to run on Cloudflare Pages and locally via Node.js.

Live link: [https://essay-blog.pages.dev](https://essay-blog.pages.dev)  
GitHub repository: [https://github.com/dakshesh123-rgb/essay-blog](https://github.com/dakshesh123-rgb/essay-blog)

## Why I made this

I wanted a quiet, distraction-free space on the web to write and publish long-form essays about philosophy, mental discipline, and ideas that matter to me. 

 Since I code everything on an Android phone using Termux, I wanted a clean platform that I understand from top to bottom—one with zero framework overhead, fast loading times, and a vintage literary journal aesthetic.

## What's in it

- **Editorial reading layout**: Styled with classical typography (*Playfair Display* for serif headlines and *Lora* for body text) with generous line heights and margins designed for focused reading.
- **Handmade Royal Enfield Bullet loader**: A custom CSS and SVG animation of a classic motorcycle thumping to life with exhaust smoke on initial page load, reflecting the tactile, physical energy that balances deep reading and thinking.
- **Dynamic essay reader & excerpt generator**: The archives view dynamically pulls essays and generates readable excerpts, leading to dedicated single-essay reading pages (`/post?id=...`).
- **Secure web publisher interface**: A dedicated publishing dashboard (`/publish`) where new essays can be drafted, formatted, and published with password key authentication (`SECRET_KEY`).
- **Dual-mode backend**:
  - **Serverless production**: Runs on Cloudflare Pages Functions (`functions/api/posts.js`, `publish.js`) backed by Cloudflare KV (`ESSAYS_DB`) for instant edge delivery and zero hosting cost.
  - **Offline local runtime**: Includes a standalone `server.js` using Node's standard `http` and `fs` modules with JSON persistence (`posts.json`) so I can write and test essays locally on Termux without an active internet connection.


