## How to customize

### Change the profile text

Edit the text inside the `.profile-text` div in `index.html`.

### Edit the individual pages

Go to the `/pages/` folder and open any of the HTML files. Keep the structure simple — no need for full `<html>`, `<head>`, or `<body>` tags; the layout will load them inside the frame dynamically.

> I really suggest to make a copy of "home.css" + "home.html" in order to keep the styles, padding and all, since the JS script picks both simultaneously; lack of <html> tags means it gets harder to index the stylesheet in the individual, static pages. If there is a way to do it otherwise, I don't know :(. But it also helps you to have each page's CSS neatly organized so that's a win :D

### Customizing the design

- `styles.css`: Controls the main layout, animation, and theme.
- You can change the colors, borders, and fonts here.
- Profile picture, book icon, and background image can be replaced inside `assets/img/`.

---

## Responsive notes

The layout adapts to mobile screens with a scrollable text box and simplified header. Feel free to tweak media queries in `styles.css` 🩷

---

## JavaScript overview (for advanced use)

- **script.js** handles dynamic navigation and FAQ toggles.
- It uses `fetch()` to load content into `.frame-content` without reloading the whole page.
- Smooth transitions are managed with CSS and class toggles (`.fade-in`, `.visible`, etc.).

---

## Credit

I added it because it looked pretty but don't feel forced to keep it there 🩷 This code is yours, made with lots of love from our side.

Feel free to let me know if you're having difficulties with new pages and stuff! I added this README.md to make understanding the layout and coding a bit simpler heh

~ Bel🍓

