# LeapUX — WordPress Block Theme

A modern, lightweight WordPress block theme (Full Site Editing) that recreates the LeapUX website. Everything is editable via the WordPress Site Editor — no page builders, no plugins required.

---

## Installation

1. **Download / prepare the theme folder**
   - Ensure the folder is named `leapux`
   - The folder structure should look like:
     ```
     leapux/
     ├── assets/
     │   ├── css/custom.css
     │   ├── fonts/         ← Add Inter font files here (see below)
     │   └── js/main.js
     ├── parts/
     │   ├── header.html
     │   └── footer.html
     ├── patterns/
     │   ├── hero.php
     │   ├── about.php
     │   ├── testimonials.php
     │   ├── services.php
     │   ├── work.php
     │   └── contact.php
     ├── templates/
     │   ├── front-page.html
     │   └── index.html
     ├── functions.php
     ├── style.css
     ├── theme.json
     └── readme.md
     ```

2. **Add Inter font files** (optional but recommended)
   - Download Inter WOFF2 files from [Google Fonts](https://fonts.google.com/specimen/Inter) or [fontsource](https://fontsource.org/fonts/inter)
   - Place them in `assets/fonts/`:
     - `inter-v18-latin-300.woff2`
     - `inter-v18-latin-regular.woff2`
     - `inter-v18-latin-500.woff2`
     - `inter-v18-latin-600.woff2`
     - `inter-v18-latin-700.woff2`
     - `inter-v18-latin-900.woff2`
   - If you skip this step, the theme falls back to system fonts (still looks great)

3. **Zip the folder**
   ```bash
   zip -r leapux.zip leapux/
   ```

4. **Upload to WordPress**
   - Go to **Appearance → Themes → Add New → Upload Theme**
   - Upload `leapux.zip` and activate

5. **Set your front page**
   - Go to **Settings → Reading**
   - Select **"A static page"** and choose a page for "Homepage display"
   - The `front-page.html` template will be used automatically

6. **Upload your logo**
   - Go to **Appearance → Editor → Header**
   - Click the Site Logo block and upload your LeapUX logo

7. **Add a hero background image**
   - Go to **Appearance → Editor** → edit the front page
   - Click on the Hero Cover block and replace the background image

---

## Editing Content

Everything is editable in the **WordPress Site Editor** (`Appearance → Editor`):

| What to edit | Where to find it |
|---|---|
| Header / Logo / Nav | **Editor → Template Parts → Header** |
| Footer | **Editor → Template Parts → Footer** |
| Hero section | **Editor → Front Page template** (or edit the page) |
| Any section | Click directly in the editor — all text, images, and layout are blocks |
| Colors & fonts | **Editor → Styles** (uses theme.json tokens) |
| Patterns | **Editor → Patterns → LeapUX** (reusable patterns) |

---

## Features

- **Pure block theme** — no classic PHP templates, no page builders
- **One-page layout** with anchor-linked navigation
- **Smooth scroll** to sections via CSS `scroll-behavior: smooth`
- **Reveal-on-scroll** animations using IntersectionObserver
- **Scrollspy** — active nav link highlighting as you scroll
- **Sticky header** with subtle shadow on scroll
- **Grayscale-to-color** image hover effect
- **Service cards** with hover lift and border glow
- **Mobile-first** responsive design
- **WCAG 2.1 AA** accessible: focus states, heading hierarchy, semantic HTML
- **Respects `prefers-reduced-motion`** — disables all animations

---

## Customization

### Colors
All colors are defined in `theme.json` under `settings.color.palette`. Edit them there or use **Editor → Styles → Colors**.

### Typography
Font sizes and the Inter font family are defined in `theme.json`. The theme self-hosts Inter for performance.

### Animations
CSS animations are in `assets/css/custom.css`. The JS file (`assets/js/main.js`) handles scroll-triggered reveals and scrollspy. Both respect `prefers-reduced-motion`.

---

## Tech Stack

- WordPress 6.2+ with Full Site Editing
- Core blocks only — no plugins required
- Inter font (self-hosted)
- Vanilla CSS + tiny vanilla JS (no build step)
- No jQuery, no animation libraries

---

## License

GPL-2.0-or-later — same as WordPress.
