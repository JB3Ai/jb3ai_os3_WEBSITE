

# JB3Ai OS3 Website

The repository contains the main JB3Ai OS3 Vite site and the Wayne standalone
projects:

- `/isidore` is a static Isidore due-diligence site.
- `/nms` is a static preview of the NMS portal assets.
- `WAYNE/nms/NMS_Executive_Portal_cPanel/` is the current secure NMS
   production application for cPanel Node.js hosting.

The secure NMS portal must run as its own Node.js application. Its PIN gate,
protected document vault, decision register, reviewer tracking, and `/healthz`
endpoint are not available from a static `public/nms` upload.

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
the static `/isidore`, `/nms`, and `/assets/pdfs` files into their matching
paths under `dist/`.

## Deploy NMS Secure Portal

Deploy `WAYNE/nms/NMS_Executive_Portal_cPanel/` as a separate cPanel Node.js
application using Node.js 20 or newer, MySQL, and HTTPS. Its complete
procedure is in [CPANEL-SETUP.md](WAYNE/nms/NMS_Executive_Portal_cPanel/CPANEL-SETUP.md).
