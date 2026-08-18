# Legacy FTP Deployment for `jb3ai-os3`

This document is kept only as a fallback reference.

The primary production workflow for this repo is:

1. Push `main` to GitHub
2. Let cPanel pull/deploy from Git

Do not use FTP unless the normal cPanel git deployment path is unavailable.

## When To Use This

- cPanel Git Version Control is unavailable
- the linked repo cannot pull from GitHub
- you need an emergency file upload fallback

## Legacy FTP Requirements

Set FTP credentials in PowerShell:

```powershell
$env:CPANEL_FTP_SERVER="ftp.yourdomain.com"
$env:CPANEL_FTP_USERNAME="your-ftp-username"
$env:CPANEL_FTP_PASSWORD="your-password"
```

Then run the legacy helper directly:

```powershell
pwsh ./deploy.ps1
```

## Important Caveats

- This repo does not currently define active `npm run deploy` or `npm run deploy:ftp` scripts.
- The FTP helper is not the normal production path.
- Remote upload paths in the legacy script may need review before use.
- Prefer cPanel’s git-based deployment whenever possible.
- FTP can publish the main site's built `dist/` output and the static `/isidore` route.
- Do not use FTP to publish the secure NMS portal as a static `/nms` folder. Upload `WAYNE/nms/NMS_Executive_Portal_cPanel/` through cPanel's Node.js application workflow so its PIN gate, API, database, and protected documents remain active.
