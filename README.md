# Jiji Kicks — Website Demo

A premium one-page site for Jiji Kicks, built with plain HTML/CSS/JS (no frameworks, no build step).

## Structure
```
index.html          Markup
style.css            All styling
script.js            All behaviour (renders products, cursor, loader, parallax, sliders, particles)
assets/
  logo/              Official Jiji Kicks logo (favicon, nav, loader, footer versions)
  video/             Hero background video (see IMPORTANT note below)
  images/            12 real product photos, optimized + descriptively named
```

## ⚠️ IMPORTANT — about the hero video
The uploaded hero clip (`assets/video/hero-sneaker.mp4`) has another company's
branding burned into the footage — an "asian" logo animation and the handle
**@asianfootwears** appear throughout, including in the very first second.
It's wired into the `<video>` tag as requested, but publishing it as-is would
display a different, unrelated brand's Instagram handle on your homepage.

Recommend swapping in a clean, unwatermarked clip before this goes live —
happy to help re-cut one, or the hero already has a graceful fallback (a
duotoned product shot + gradient) that looks intentional on its own if you'd
rather ship without video for now.

## Deploying to GitHub Pages
1. Push this folder's contents to the root of a repo (or to a `/docs` folder).
2. In the repo settings → Pages, set the source to the branch/folder you used.
3. No build step needed — it's static HTML/CSS/JS, so it'll work immediately.
4. Update the WhatsApp number (currently a placeholder `+254 700 000 000`)
   in `index.html` and `script.js` before sharing the live link.

## Before it's fully production-ready
- Replace the placeholder WhatsApp number in both files.
- Swap the hero video per the note above.
- Real Instagram post links (currently `instagram.com/jijikicks` in the footer)
  should be confirmed as the correct handle.
