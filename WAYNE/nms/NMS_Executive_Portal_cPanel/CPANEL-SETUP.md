# NMS Executive Portal — cPanel Deployment

This package is a **standalone Node.js application**. It requires cPanel with **Setup Node.js App** (or Application Manager), Node.js 20 or newer, MySQL, and HTTPS. A static-only `public_html` account cannot run the PIN gate, decision register, reviewer tracking, or reminders.

## 1. Create the database

In cPanel, create a MySQL database and database user, then grant the user **all privileges** on the database. Open phpMyAdmin, select the new database, choose **Import**, and import `database/install.sql`.

## 2. Upload the package

Upload the ZIP to a private application folder such as `~/nms-portal`, not a general public downloads folder. Extract it so that `index.js`, `package.json`, `public/`, and `database/` are directly inside the application root.

## 3. Create the Node.js application

Open **Setup Node.js App** and use:

| Setting | Value |
| --- | --- |
| Node.js version | 20 or 22 |
| Application mode | Production |
| Application root | The extracted folder, e.g. `nms-portal` |
| Application URL | Your selected domain or subdomain |
| Startup file | `index.js` |

Create the application, then run **NPM Install** from the cPanel Node.js interface. If cPanel provides a terminal, the equivalent command from the app root is `npm install --omit=dev`.

## 4. Set environment variables

Add these variables in the Node.js application settings:

| Variable | Required value |
| --- | --- |
| `NODE_ENV` | `production` |
| `DATABASE_URL` | `mysql://DB_USER:URL_ENCODED_PASSWORD@localhost:3306/DB_NAME` |
| `JWT_SECRET` | A long random secret; generate with `openssl rand -hex 32` |
| `NMS_PORTAL_PIN` | The private client PIN |

Do **not** upload a real `.env` file into a public folder. cPanel assigns `PORT`; do not override it unless the host instructs you to.

If the database password includes `@`, `:`, `/`, `#`, `%`, or spaces, URL-encode it before placing it in `DATABASE_URL`.

## 5. Start and verify

Restart the Node.js application in cPanel. Then check:

1. `https://YOUR-DOMAIN/healthz` returns JSON with `"ok": true`.
2. The portal opens and accepts the configured PIN.
3. The document vault requests a reviewer name.
4. A PDF opens in the in-browser previewer.
5. The Excel workbook downloads.
6. Open/download/read progress remains after refreshing the page.
7. Closing the vault or locking the portal shows the outstanding-review reminder.

## Security notes

All seven PDFs and the Excel workbook are included under `public/manus-storage`, but the standalone server blocks direct document requests until the PIN session is valid. The PIN and signing secret remain server-side environment variables. Use HTTPS so the secure PIN cookie is accepted.

The named-reviewer profile is convenient but self-declared and browser-specific; it is not audit-grade identity. If formal approvals or cross-device attribution are required, replace it with individual authenticated accounts.

## Updating the site

Before replacing a live version, back up the database and application folder. Upload the new files, keep the existing environment variables, run `npm install --omit=dev` if `package.json` changed, and restart the application. Do not re-import `database/install.sql` into a populated database unless you understand the schema changes.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| App returns 503 | Node app is stopped, startup file is wrong, or dependencies are not installed |
| PIN loops back to login | HTTPS/proxy is not forwarding `X-Forwarded-Proto: https`, or the PIN differs from `NMS_PORTAL_PIN` |
| Database unavailable | Database/user name prefix, privileges, password URL encoding, and `DATABASE_URL` |
| PDF preview is blank | Use “Open in new tab”; verify browser PDF support and that the request returns `application/pdf` |
| Direct document URL returns 401 | Log into the portal with the PIN first; this is expected protection |
