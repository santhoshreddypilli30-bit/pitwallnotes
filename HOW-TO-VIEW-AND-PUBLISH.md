# Trackside Ink — How to view and publish your blog

Your new blog site is a set of plain files — no installs, no coding, no build step. Here's everything in simple terms.

## What's in this folder

- `index.html` — the homepage (list of all your posts)
- `post-austria-gp-2026.html`, `post-czech-gp-2026.html`, `post-lemans-2026.html` — the three full blog posts
- `css/style.css` — all the styling (colors, fonts, layout)
- `js/main.js` — the animations and interactive bits
- This instructions file

Keep all of these files together in the same folder structure — the pages link to each other and to the `css`/`js` folders using their file names, so nothing should be renamed or moved out on its own.

## 1. Preview it on your computer (no internet needed)

Just double-click `index.html`. It will open in your web browser (Chrome, Edge, Safari, etc.) and the whole site works exactly as it will online — you can click between posts, scroll, and see the animations.

To see it on your phone too, you'd need to publish it first (step 2).

## 2. Publish it for free — the easy way (Netlify)

This gets you a real public web address in about two minutes, no account required to start.

1. Go to **app.netlify.com/drop** in your browser.
2. Drag the whole blog folder (the one containing `index.html`) onto the page.
3. Netlify uploads it and gives you a live link like `https://random-name-1234.netlify.app` — that's your blog, live on the internet.
4. Optional: create a free Netlify account to keep the site permanently and rename the address to something like `trackside-ink.netlify.app` (Site settings → Change site name).

## 3. Alternative: GitHub Pages (if you're already using GitHub for your portfolio)

Since your portfolio already lives on GitHub Pages, you can host this the same way, as a separate site:

1. Create a **new** GitHub repository (e.g. `trackside-ink`) — keep it separate from your portfolio repo so the two sites stay independent.
2. Upload all the files in this folder to that repository (GitHub's website lets you drag-and-drop files in the browser — no command line needed).
3. In the repository, go to **Settings → Pages**, set the source to the `main` branch, and save.
4. After a minute, GitHub gives you a link like `https://yourusername.github.io/trackside-ink/` — that's your blog.

## Making small changes later

- To fix a typo or update text: open the relevant `.html` file in any text editor (even Notepad), find the sentence, edit it, and save. Refresh your browser to see the change.
- To add a new post later, the easiest path is to come back here and ask for a new post page to be built the same way — just share the new blog post's text/HTML and it'll be added and linked from the homepage automatically.

## A couple of notes

- The site pulls in two Google Fonts (Fraunces and Sora) over the internet, so it needs an internet connection to look exactly right when opened locally — it'll still work offline, just with fallback fonts.
- Everything is self-contained plain HTML/CSS/JS, so it will keep working indefinitely with no maintenance, no dependencies, and no risk of anything "breaking" from updates elsewhere.
