# Netflix Clone - Mini Project

This is a small, static Netflix-like clone used as a front-end mini project. It is intentionally lightweight and uses a static data file so you don't need API keys.

What we added

How to run
1. Open `c:\rkgit mini project\index.html` in your browser (double-click the file or use your editor's "Open in Browser" feature).
2. Use the search box to filter movies. Click a poster to open the modal and play the trailer (if available).

Notes & next steps

Enjoy! If you'd like, I can wire this to TMDB so the content is real (I'll show how to add an API key safely).
## Netflix Clone - Mini Project

This is a small, static Netflix-like clone used as a front-end mini project. It's intentionally lightweight and ships with a static dataset so you don't need API keys to run it.

Files added
- `index.html` — main page with header, hero, rows, and modal.
- `css/styles.css` — responsive styling for the layout.
- `js/data.js` — sample movie data (fallback if TMDB is not configured).
- `js/app.js` — rendering and behavior. It will use TMDB when you supply an API key, otherwise it falls back to `js/data.js`.

Run locally (quick)
1. (Optional) Install dependencies and start a tiny dev server. In PowerShell run:

```powershell
npm install
npm start
```

This runs `live-server` and opens `index.html` at `http://127.0.0.1:8080`.

2. Or open `c:\rkgit mini project\index.html` directly in your browser (double-click the file).

Using TMDB (optional)
- Copy `js/config.sample.js` to `js/config.js` and add your TMDB API key there (do not commit your real key):

```js
// js/config.js
window.TMDB_CONFIG = { apiKey: 'YOUR_TMDB_API_KEY' };
```

- When `js/config.js` is present with a valid key, the app will fetch popular movies from TMDB and fetch trailers on demand. If the key is missing or the network request fails, the app falls back to the static `js/data.js` dataset.

Notes & next steps
- The current demo lazy-loads trailers (fetched when the user opens the modal). Posters use TMDB image endpoints when available.
- Possible improvements: lazy-loading images, keyboard accessibility, infinite rows, theming, or connecting a backend for user sessions.

If you want, I can:
- Wire paging/infinite-scroll for rows.
- Add a simple caching layer for TMDB calls.
- Add unit tests and a CI config.

Enjoy — tell me which of the improvements you'd like next.