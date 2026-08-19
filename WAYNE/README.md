# Wayne Projects

These projects are maintained inside the JB3Ai website repository and are served
as standalone pages:

- `https://www.jb3ai.com/isidore` is deployed from `public/isidore`.

## Source and deployment artifiiiiiiimkiacts

- `isidore/` contains the Isidore static export and its source assets.
- `nms/` contains the NMS portal source project.
- `nms/NMS_Executive_Portal_cPanel/` contains the updated production cPanel
  package, including the Node server, database installer, protected document
  vault, and current frontend assets.
- The current secure production build is the complete
  `nms/NMS_Executive_Portal_cPanel/` package; deploy that package as a cPanel
  Node.js app instead of flattening it into a static public folder.

Do not copy `node_modules`, `nms/dist`, or other local build output into the
repository. The nested project ignore rules keep those directories out of Git.

The root `.htaccess` keeps the Isidore route outside the main React SPA rewrite
and blocks `/nms` and `/wayne/nms` on the static website host.

## NMS cPanel deployment

The updated NMS package is a standalone Node.js application and must be
deployed through cPanel's **Setup Node.js App** using `index.js` as its startup
file. It cannot be reduced to a static folder without losing PIN protection,
the decision register, reviewer tracking, and protected document access.

Use the package's `CPANEL-SETUP.md` for the required Node.js 20+ runtime,
MySQL database, environment variables, and health check at `/healthz`.