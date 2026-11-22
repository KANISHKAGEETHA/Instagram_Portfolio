# Kanishka Geetha | Portfolio

A responsive personal portfolio website for model and content creator **Kanishka Geetha**, featuring bridal shoot photography and everyday lifestyle content from [@kanishka.geetha](https://www.instagram.com/kanishka.geetha) on Instagram.

**Live site:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
*(replace with your link after deploying)*

## Features

- Hero section with a photo collage and call-to-action buttons
- About section with a short introduction
- Bridal shoot gallery that adjusts to any number of photos
- Optional Everyday and Reels sections, ready to switch on
- Fully responsive on phones, tablets and desktops
- Automatic dark mode based on the visitor's device settings
- Direct link to Instagram DMs for collaborations
- No frameworks or build step, just HTML and CSS

## Built with

- HTML5
- CSS3 (Grid, Flexbox, CSS variables)
- Google Fonts: Gloock and DM Sans

## Project structure

```
Instagram_portfolio/
├── index.html        # Page content and styles
├── images/           # Photos used on the site
│   ├── Me 1.png
│   ├── Me 2.png
│   ├── Portait.jpeg
│   ├── Bridal 1.png
│   ├── Bridal 2.jpeg
│   └── Bridal 3.jpeg
└── README.md
```

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**, or simply double-click `index.html` to open it in your browser.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository, with `index.html` at the top level.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two, your site is live at the link shown on that page.

## Customize

**Add a photo:** copy it into `images/`, then add a line in `index.html`:

```html
<div class="ph"><img src="images/Bridal%204.jpeg" alt="Bridal shoot look four"></div>
```

File names with spaces need `%20` in the code, and the name must match exactly, including capital letters and the extension.

**Show the Everyday or Reels section:** in `index.html`, remove the `<!--` and `-->` around that block, add your photo file names, and add its link to the menu.

**Change colours:** edit the variables at the top of the `<style>` section (`--plum`, `--rose`, `--gold`, `--leaf`).

## Photo credits

Bridal shoot photographs: *add photographer or studio name here.*

## Contact

Open for modeling shoots, bridal and fashion collaborations, and brand content.

Instagram: [@kanishka.geetha](https://www.instagram.com/kanishka.geetha)

2026 Kanishka Geetha. All rights reserved. The photos and text on this site may not be copied or reused without permission.
