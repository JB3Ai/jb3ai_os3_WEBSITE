// server/cpanel-index.ts
import "dotenv/config";
import express from "express";
import { createServer } from "http";
import path from "path";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

// shared/const.ts
var COOKIE_NAME = "app_session_id";
var ONE_YEAR_MS = 1e3 * 60 * 60 * 24 * 365;
var UNAUTHED_ERR_MSG = "Please login (10001)";
var NOT_ADMIN_ERR_MSG = "You do not have required permission (10002)";

// shared/vaultDocuments.ts
var vaultDocuments = [
  {
    id: "nms-master-overview",
    title: "Natural Medicinal Services (NMS)",
    filename: "Natural_Medicinal_Services_(NMS).pdf",
    type: "PDF",
    size: "8.6 MB",
    category: "Business & brand overview",
    description: "Edited NMS overview covering the organisation, brand context and strategic foundation.",
    url: "/manus-storage/Natural_Medicinal_Services_(NMS)_2c5b957b.pdf"
  },
  {
    id: "budget-roi-selector",
    title: "Budget & ROI Selector",
    filename: "NMS_Budget_and_ROI_Selector.xlsx",
    type: "XLSX",
    size: "29 KB",
    category: "Commercial planning",
    description: "Interactive budget and return-on-investment selector for executive scenario review.",
    url: "/manus-storage/NMS_Budget_and_ROI_Selector_27747512.xlsx"
  },
  {
    id: "relaunch-strategy-proposal",
    title: "Relaunch Strategy Proposal",
    filename: "NMS_Relaunch_Strategy_Proposal.pdf",
    type: "PDF",
    size: "41 KB",
    category: "Executive strategy",
    description: "Edited strategic proposal for the NMS relaunch, priorities and leadership decisions.",
    url: "/manus-storage/NMS_Relaunch_Strategy_Proposal_235b3231.pdf"
  },
  {
    id: "catalog-packaging-review",
    title: "Product Catalogue & Packaging Stakeholder Review",
    filename: "NMS_Product_Catalog_Packaging_Stakeholder_Review.pdf",
    type: "PDF",
    size: "773 KB",
    category: "Product & packaging",
    description: "Stakeholder review pack for catalogue structure, product presentation and packaging direction.",
    url: "/manus-storage/NMS_Product_Catalog_Packaging_Stakeholder_Review_f8543e25.pdf"
  },
  {
    id: "product-catalog-draft-v1",
    title: "Product Catalogue Draft V1",
    filename: "product catalog draft V1.pdf",
    type: "PDF",
    size: "993 KB",
    category: "Product catalogue",
    description: "Edited first-draft product catalogue for detailed range and content review.",
    url: "/manus-storage/product catalog draft V1_f027c744.pdf"
  },
  {
    id: "implementation-plan",
    title: "Complete Implementation & Project Management Plan",
    filename: "Complete Implementation & Project Management Plan.pdf",
    type: "PDF",
    size: "4.2 MB",
    category: "Delivery plan",
    description: "End-to-end implementation, governance, sequencing and project-management plan.",
    url: "/manus-storage/Complete Implementation & Project Management Plan_3c3dc2d0.pdf"
  },
  {
    id: "typography-asset-specification",
    title: "Standard Typography & Asset Specification",
    filename: "NMS_Standard_Typography_and_Asset_Specification.pdf",
    type: "PDF",
    size: "7.1 MB",
    category: "Brand system",
    description: "Edited typography, visual-system and asset-production specification for consistent rollout.",
    url: "/manus-storage/NMS_Standard_Typography_and_Asset_Specification_bcf82a27.pdf"
  },
  {
    id: "logo-strategy-brainstorm",
    title: "Logo Strategy & Brainstorm",
    filename: "NMS_Logo_Strategy_BrainstormJB3.pdf",
    type: "PDF",
    size: "4.2 MB",
    category: "Identity decisions",
    description: "Edited logo strategy and concept exploration prepared for leadership selection.",
    url: "/manus-storage/NMS_Logo_Strategy_BrainstormJB3_6a622bf4.pdf"
  }
];

// server/routers.ts
import { TRPCError as TRPCError3 } from "@trpc/server";
import { z as z2 } from "zod";

// server/db.ts
import { and, asc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";

// drizzle/schema.ts
import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  uniqueIndex,
  varchar
} from "drizzle-orm/mysql-core";
var users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull()
});
var portalMembers = mysqlTable("portal_members", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 160 }),
  title: varchar("title", { length: 160 }),
  seatNumber: int("seatNumber").notNull(),
  role: mysqlEnum("memberRole", ["decision_maker"]).default("decision_maker").notNull(),
  status: mysqlEnum("memberStatus", ["invited", "active"]).default("invited").notNull(),
  invitedByUserId: int("invitedByUserId").references(() => users.id, { onDelete: "set null" }),
  lastViewedAt: timestamp("lastViewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()
});
var portalDecisions = mysqlTable(
  "portal_decisions",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    area: varchar("area", { length: 80 }).notNull(),
    selection: varchar("selection", { length: 240 }).notNull(),
    note: text("note"),
    status: mysqlEnum("decisionStatus", ["draft", "approved", "needs_discussion"]).default("draft").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()
  },
  (table) => [uniqueIndex("decision_user_area_unique").on(table.userId, table.area)]
);
var documentReviews = mysqlTable(
  "document_reviews",
  {
    id: int("id").autoincrement().primaryKey(),
    reviewerId: varchar("reviewerId", { length: 64 }).notNull(),
    reviewerName: varchar("reviewerName", { length: 160 }).notNull(),
    documentId: varchar("documentId", { length: 100 }).notNull(),
    openedAt: timestamp("openedAt"),
    downloadedAt: timestamp("downloadedAt"),
    readAt: timestamp("readAt"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull()
  },
  (table) => [uniqueIndex("document_reviewer_unique").on(table.reviewerId, table.documentId)]
);

// server/_core/env.ts
var ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? ""
};

// server/db.ts
var _db = null;
async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}
async function getUserByOpenId(openId) {
  const db = await getDb();
  if (!db) return void 0;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}
async function getOrCreatePinClientUser() {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  const openId = "nms-pin-client";
  await db.insert(users).values({
    openId,
    name: "NMS Client Access",
    loginMethod: "pin",
    role: "user",
    lastSignedIn: /* @__PURE__ */ new Date()
  }).onDuplicateKeyUpdate({ set: { lastSignedIn: /* @__PURE__ */ new Date() } });
  const user = await getUserByOpenId(openId);
  if (!user) throw new Error("Unable to create PIN client session");
  return user;
}
async function listPortalDecisionsForUser(userId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(portalDecisions).where(eq(portalDecisions.userId, userId)).orderBy(asc(portalDecisions.area));
}
async function savePortalDecision(decision) {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  await db.insert(portalDecisions).values(decision).onDuplicateKeyUpdate({
    set: {
      selection: decision.selection,
      note: decision.note ?? null,
      status: decision.status ?? "draft"
    }
  });
  return listPortalDecisionsForUser(decision.userId);
}
async function listDocumentReviews(reviewerId) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(documentReviews).where(eq(documentReviews.reviewerId, reviewerId)).orderBy(asc(documentReviews.documentId));
}
async function recordDocumentReview(input) {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  const now = /* @__PURE__ */ new Date();
  const timestamps = {
    openedAt: input.event === "opened" || input.event === "downloaded" ? now : void 0,
    downloadedAt: input.event === "downloaded" ? now : void 0,
    readAt: input.event === "read" ? now : input.event === "unread" ? null : void 0
  };
  const existing = await db.select().from(documentReviews).where(and(eq(documentReviews.reviewerId, input.reviewerId), eq(documentReviews.documentId, input.documentId))).limit(1);
  if (existing[0]) {
    await db.update(documentReviews).set({ reviewerName: input.reviewerName, ...timestamps }).where(eq(documentReviews.id, existing[0].id));
  } else {
    await db.insert(documentReviews).values({
      reviewerId: input.reviewerId,
      reviewerName: input.reviewerName,
      documentId: input.documentId,
      openedAt: timestamps.openedAt ?? null,
      downloadedAt: timestamps.downloadedAt ?? null,
      readAt: timestamps.readAt ?? null
    });
  }
  return listDocumentReviews(input.reviewerId);
}

// server/pinAccess.ts
import { createHash, createHmac, timingSafeEqual } from "crypto";
import { parse } from "cookie";

// server/_core/cookies.ts
function isSecureRequest(req) {
  if (req.protocol === "https") return true;
  const forwardedProto = req.headers["x-forwarded-proto"];
  if (!forwardedProto) return false;
  const protoList = Array.isArray(forwardedProto) ? forwardedProto : forwardedProto.split(",");
  return protoList.some((proto) => proto.trim().toLowerCase() === "https");
}
function getSessionCookieOptions(req) {
  return {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: isSecureRequest(req)
  };
}

// server/pinAccess.ts
var PORTAL_PIN_COOKIE = "nms_portal_access";
var SESSION_DURATION_MS = 12 * 60 * 60 * 1e3;
function getPortalPin() {
  return process.env.NMS_PORTAL_PIN ?? "2323";
}
function getSigningSecret() {
  return ENV.cookieSecret || "nms-portal-local-development-secret";
}
function digest(value) {
  return createHash("sha256").update(value).digest();
}
function signature(expiresAt) {
  return createHmac("sha256", getSigningSecret()).update(`nms-portal:${expiresAt}`).digest("hex");
}
function verifyPortalPin(candidate) {
  const expected = digest(getPortalPin());
  const received = digest(candidate);
  return timingSafeEqual(expected, received);
}
function createPinSessionToken(now = Date.now()) {
  const expiresAt = now + SESSION_DURATION_MS;
  return `${expiresAt}.${signature(expiresAt)}`;
}
function validatePinSessionToken(token, now = Date.now()) {
  if (!token) return false;
  const [expiresRaw, suppliedSignature, extra] = token.split(".");
  if (!expiresRaw || !suppliedSignature || extra) return false;
  const expiresAt = Number(expiresRaw);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= now) return false;
  const expected = Buffer.from(signature(expiresAt), "utf8");
  const received = Buffer.from(suppliedSignature, "utf8");
  if (expected.length !== received.length) return false;
  return timingSafeEqual(expected, received);
}
function hasPinAccess(req) {
  const cookies = parse(req.headers.cookie ?? "");
  return validatePinSessionToken(cookies[PORTAL_PIN_COOKIE]);
}
function setPinAccessCookie(req, res) {
  const base = getSessionCookieOptions(req);
  res.cookie(PORTAL_PIN_COOKIE, createPinSessionToken(), {
    ...base,
    sameSite: "lax",
    maxAge: SESSION_DURATION_MS
  });
}
function clearPinAccessCookie(req, res) {
  const base = getSessionCookieOptions(req);
  res.clearCookie(PORTAL_PIN_COOKIE, {
    ...base,
    sameSite: "lax",
    maxAge: -1
  });
}

// server/_core/systemRouter.ts
import { z } from "zod";

// server/_core/notification.ts
import { TRPCError } from "@trpc/server";
var TITLE_MAX_LENGTH = 1200;
var CONTENT_MAX_LENGTH = 2e4;
var trimValue = (value) => value.trim();
var isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;
var buildEndpointUrl = (baseUrl) => {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return new URL(
    "webdevtoken.v1.WebDevService/SendNotification",
    normalizedBase
  ).toString();
};
var validatePayload = (input) => {
  if (!isNonEmptyString(input.title)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title is required."
    });
  }
  if (!isNonEmptyString(input.content)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification content is required."
    });
  }
  const title = trimValue(input.title);
  const content = trimValue(input.content);
  if (title.length > TITLE_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`
    });
  }
  if (content.length > CONTENT_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`
    });
  }
  return { title, content };
};
async function notifyOwner(payload) {
  const { title, content } = validatePayload(payload);
  if (!ENV.forgeApiUrl) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Notification service URL is not configured."
    });
  }
  if (!ENV.forgeApiKey) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Notification service API key is not configured."
    });
  }
  const endpoint = buildEndpointUrl(ENV.forgeApiUrl);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${ENV.forgeApiKey}`,
        "content-type": "application/json",
        "connect-protocol-version": "1"
      },
      body: JSON.stringify({ title, content })
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Failed to notify owner (${response.status} ${response.statusText})${detail ? `: ${detail}` : ""}`
      );
      return false;
    }
    return true;
  } catch (error) {
    console.warn("[Notification] Error calling notification service:", error);
    return false;
  }
}

// server/_core/trpc.ts
import { initTRPC, TRPCError as TRPCError2 } from "@trpc/server";
import superjson from "superjson";
var t = initTRPC.context().create({
  transformer: superjson
});
var router = t.router;
var publicProcedure = t.procedure;
var requireUser = t.middleware(async (opts) => {
  const { ctx, next } = opts;
  if (!ctx.user) {
    throw new TRPCError2({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user
    }
  });
});
var protectedProcedure = t.procedure.use(requireUser);
var adminProcedure = t.procedure.use(
  t.middleware(async (opts) => {
    const { ctx, next } = opts;
    if (!ctx.user || ctx.user.role !== "admin") {
      throw new TRPCError2({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
    }
    return next({
      ctx: {
        ...ctx,
        user: ctx.user
      }
    });
  })
);

// server/_core/systemRouter.ts
var systemRouter = router({
  health: publicProcedure.input(
    z.object({
      timestamp: z.number().min(0, "timestamp cannot be negative")
    })
  ).query(() => ({
    ok: true
  })),
  notifyOwner: adminProcedure.input(
    z.object({
      title: z.string().min(1, "title is required"),
      content: z.string().min(1, "content is required")
    })
  ).mutation(async ({ input }) => {
    const delivered = await notifyOwner(input);
    return {
      success: delivered
    };
  })
});

// server/routers.ts
var pinProtectedProcedure = publicProcedure.use(async ({ ctx, next }) => {
  if (!hasPinAccess(ctx.req)) {
    throw new TRPCError3({ code: "UNAUTHORIZED", message: "Enter the NMS portal PIN to continue" });
  }
  return next({ ctx });
});
var appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(({ ctx }) => ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    })
  }),
  pin: router({
    status: publicProcedure.query(({ ctx }) => ({ authenticated: hasPinAccess(ctx.req) })),
    login: publicProcedure.input(z2.object({ pin: z2.string().min(4).max(32) })).mutation(({ ctx, input }) => {
      if (!verifyPortalPin(input.pin)) {
        throw new TRPCError3({ code: "UNAUTHORIZED", message: "Incorrect access PIN" });
      }
      setPinAccessCookie(ctx.req, ctx.res);
      return { success: true };
    }),
    logout: publicProcedure.mutation(({ ctx }) => {
      clearPinAccessCookie(ctx.req, ctx.res);
      return { success: true };
    })
  }),
  portal: router({
    access: pinProtectedProcedure.query(() => ({
      access: { role: "client" },
      members: [],
      seatLimit: 0
    }))
  }),
  decisions: router({
    list: pinProtectedProcedure.query(async () => {
      const user = await getOrCreatePinClientUser();
      return listPortalDecisionsForUser(user.id);
    }),
    save: pinProtectedProcedure.input(
      z2.object({
        area: z2.string().min(1).max(80),
        selection: z2.string().min(1).max(240),
        note: z2.string().max(2e3).optional(),
        status: z2.enum(["draft", "approved", "needs_discussion"])
      })
    ).mutation(async ({ input }) => {
      const user = await getOrCreatePinClientUser();
      return savePortalDecision({ userId: user.id, ...input });
    })
  }),
  vault: router({
    list: pinProtectedProcedure.input(z2.object({ reviewerId: z2.string().min(8).max(64) })).query(async ({ input }) => ({
      documents: vaultDocuments,
      reviews: await listDocumentReviews(input.reviewerId)
    })),
    record: pinProtectedProcedure.input(
      z2.object({
        reviewerId: z2.string().min(8).max(64),
        reviewerName: z2.string().trim().min(2).max(160),
        documentId: z2.enum(vaultDocuments.map((document) => document.id)),
        event: z2.enum(["opened", "downloaded", "read", "unread"])
      })
    ).mutation(({ input }) => recordDocumentReview(input))
  })
});

// server/cpanel-index.ts
for (const variable of ["DATABASE_URL", "JWT_SECRET", "NMS_PORTAL_PIN"]) {
  if (!process.env[variable]) {
    throw new Error(`${variable} must be configured before the cPanel portal starts.`);
  }
}
function createStandaloneContext({ req, res }) {
  return { req, res, user: null };
}
function protectVaultFiles(req, res, next) {
  const extension = path.extname(req.path).toLowerCase();
  const isProtectedDocument = [".pdf", ".xlsx", ".docx", ".pptx", ".csv"].includes(extension);
  if (isProtectedDocument && !hasPinAccess(req)) {
    res.status(401).send("Enter the NMS portal PIN before accessing this document.");
    return;
  }
  next();
}
var app = express();
var server = createServer(app);
app.set("trust proxy", 1);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.get("/healthz", (_req, res) => res.json({ ok: true, service: "nms-executive-portal" }));
var publicRoot = path.resolve(import.meta.dirname, "public");
app.use("/manus-storage", protectVaultFiles, express.static(path.join(publicRoot, "manus-storage"), {
  fallthrough: true,
  index: false,
  maxAge: "1h"
}));
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createStandaloneContext
  })
);
app.use(express.static(publicRoot));
app.use("*", (_req, res) => res.sendFile(path.join(publicRoot, "index.html")));
var port = Number.parseInt(process.env.PORT || "3000", 10);
server.listen(port, "0.0.0.0", () => {
  console.log(`NMS portal listening on port ${port}`);
});
