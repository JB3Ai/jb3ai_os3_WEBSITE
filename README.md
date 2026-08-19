

# JB3Ai OS3 Website

The repository contains the main JB3Ai OS3 Vite site and the Wayne Isidore
standalone page:

- `/isidore` is a static Isidore due-diligence site.

## Run the Main Site Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build the Main Site

```powershell
npm install
npm run build
```

The deployable main-site output is written to `dist/`. The build also copies
the static `/isidore` and `/assets/pdfs` files into their matching
paths under `dist/`.
