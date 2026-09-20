# Isidore cPanel deployment

This package is compiled specifically for:

`https://www.jb3ai.com/wayne/isidore/`

## Root cause fixed

The previous archive was compiled for the domain root. Although Apache could reach `index.html`, the page requested JavaScript, CSS, images, and PDFs from `/assets/` and `/manus-storage/` instead of `/wayne/isidore/assets/` and `/wayne/isidore/manus-storage/`. Wouter also interpreted `/wayne/isidore/` as an unknown client-side route, so the application rendered its own 404.

This build fixes both issues: Vite emits nested asset URLs and Wouter uses `/wayne/isidore` as its production base.

## Install

1. In cPanel File Manager, open the document root for `www.jb3ai.com`.
2. Open `wayne/isidore/`.
3. Delete or replace the old build files inside that directory. Do not create another nested `isidore` folder.
4. Upload this ZIP into `wayne/isidore/` and extract it there.
5. Confirm these paths exist directly inside the folder:
   - `wayne/isidore/index.html`
   - `wayne/isidore/.htaccess`
   - `wayne/isidore/assets/`
   - `wayne/isidore/manus-storage/`
6. Ensure cPanel displays hidden files so `.htaccess` is present.
7. Purge any server/CDN cache, then hard-refresh the browser.

## Expected checks

The following URLs should return HTTP 200:

- `https://www.jb3ai.com/wayne/isidore/`
- `https://www.jb3ai.com/wayne/isidore/assets/index-DlOKw85-.js`
- `https://www.jb3ai.com/wayne/isidore/manus-storage/jb3-wayne-shared-stories-hero_f5fa8342.webp`

Do not redirect `/wayne/isidore/` to the domain root. The included `.htaccess` is scoped to this application directory.
