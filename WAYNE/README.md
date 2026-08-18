# Wayne Projects

These projects are maintained inside the JB3Ai website repository and are served
as standalone pages:

- `https://www.jb3ai.com/isidore` is deployed from `public/isidore`.
- `https://www.jb3ai.com/nms` is deployed from `public/nms`.

## Source and deployment artifiiiiiiimkiacts

- `isidore/` contains the Isidore static export and its source assets.
- `nms/` contains the NMS portal source project.
- `nms/NMS_Executive_Portal_cPanel/` contains the updated production cPanel
  package, including the Node server, database installer, protected document
  vault, and current frontend assets.
- The legacy NMS client build is generated at `nms/dist/public/` and may be
  used only as a static preview in `public/nms/`.
- The current secure production build is the complete
  `nms/NMS_Executive_Portal_cPanel/` package; deploy that package as a cPanel
  Node.js app instead of flattening it into `public/nms/`.

Do not copy `node_modules`, `nms/dist`, or other local build output into the
repository. The nested project ignore rules keep those directories out of Git.

The root `.htaccess` excludes both URL prefixes from the main React SPA
rewrite, allowing Apache to serve each page's static assets directly.

## NMS cPanel deployment

The updated NMS package is a standalone Node.js application and must be
deployed through cPanel's **Setup Node.js App** using `index.js` as its startup
file. It cannot be reduced to a static folder without losing PIN protection,
the decision register, reviewer tracking, and protected document access.

Use the package's `CPANEL-SETUP.md` for the required Node.js 20+ runtime,
MySQL database, environment variables, and health check at `/healthz`.