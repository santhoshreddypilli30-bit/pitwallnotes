# Pit Wall Notes — How to view and publish your blog

Your blog site is a set of plain files — no installs, no coding, no build step. Here's everything in simple terms.

## What's in this folder

- `index.html` — the homepage (list of all your posts)
- `post-austria-gp-2026.html`, `post-czech-gp-2026.html`, `post-lemans-2026.html` — the three full blog posts
- `style.css` — all the styling (colors, fonts, layout)
- `main.js` — the animations and interactive bits
- This instructions file

Keep all of these files together in the same folder — the pages link to each other and to `style.css`/`main.js` by file name, so nothing should be renamed or moved out on its own.

## 1. Preview it on your computer (no internet needed)

Just double-click `index.html`. It will open in your web browser (Chrome, Edge, Safari, etc.) and the whole site works exactly as it will online — you can click between posts, scroll, and see the animations.

## 2. It's already published

This site is live on GitHub Pages at:

**https://santhoshreddypilli30-bit.github.io/pitwallnotes/**

The underlying repository is called `pitwallnotes` under your GitHub account. Any time you want to update the live site, upload the changed file(s) to that repository (GitHub's "Add file → Upload files" lets you drag and drop — no command line needed) and it redeploys automatically within a minute or two.

## 3. Using your own domain later

If you buy a domain like `pitwallnotes.com`, it can be pointed at this same site — that just needs a couple of DNS records at your registrar and a small config change in the repo's GitHub Pages settings. Come back here when you've bought one and it can be set up in a few minutes.

## Making small changes later

- To fix a typo or update text: open the relevant `.html` file in any text editor (even Notepad), find the sentence, edit it, and save. Refresh your browser to see the change locally, then re-upload to GitHub to update the live site.
- To add a new post later, the easiest path is to come back here and ask for a new post page to be built the same way — just share the new blog post's text/HTML and it'll be added and linked from the homepage automatically, and published live.

## A couple of notes

- The site pulls in Google Fonts (Anton, Barlow, JetBrains Mono) over the internet, so it needs a connection to look exactly right when opened locally — it'll still work offline, just with fallback fonts.
- Everything is self-contained plain HTML/CSS/JS, so it will keep working indefinitely with no maintenance, no dependencies, and no risk of anything "breaking" from updates elsewhere.
