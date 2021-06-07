# EOYS
Website for the 2021 School of Engineering End of Year Show at the Cooper Union for the Advancement of Science and Art.

See it at [engineeringeoys.cooper.edu][site].

---

### Prerequisites
Prerequisites: make sure you have Node (v6+) and NPM (v14+) installed.
```bash
$ npm i
```

---
### Build Instructions

The website is a Vue application served and built with Vite. To serve the application (by default, listens on port 3000):

```bash
$ npm run dev
```

To build to GitHub pages:
```bash
$ npm run deploy
```
(Note: this runs a custom deploy script in `package.json` that should be adjusted to fit your needs.)

---

### Notes
If you are serving directly from GitHub Pages and not serving at the domain root (i.e., if your website is not served directly at `username.github.io` but is rather being served at `username.github.io/EOYS`), you will need to set up the Vue router base url and the Vite serve configuration to match.

[site]: https://engineeringeoys.cooper.edu