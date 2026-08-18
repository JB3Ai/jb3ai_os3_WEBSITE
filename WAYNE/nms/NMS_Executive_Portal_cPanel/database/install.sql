SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `openId` varchar(64) NOT NULL,
  `name` text,
  `email` varchar(320),
  `loginMethod` varchar(64),
  `role` enum('user','admin') NOT NULL DEFAULT 'user',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastSignedIn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_openId_unique` (`openId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `portal_decisions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `area` varchar(80) NOT NULL,
  `selection` varchar(240) NOT NULL,
  `note` text,
  `decisionStatus` enum('draft','approved','needs_discussion') NOT NULL DEFAULT 'draft',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `decision_user_area_unique` (`userId`,`area`),
  CONSTRAINT `portal_decisions_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `portal_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(320) NOT NULL,
  `name` varchar(160),
  `title` varchar(160),
  `seatNumber` int NOT NULL,
  `memberRole` enum('decision_maker') NOT NULL DEFAULT 'decision_maker',
  `memberStatus` enum('invited','active') NOT NULL DEFAULT 'invited',
  `invitedByUserId` int,
  `lastViewedAt` timestamp NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `portal_members_email_unique` (`email`),
  CONSTRAINT `portal_members_invitedByUserId_users_id_fk` FOREIGN KEY (`invitedByUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `document_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reviewerId` varchar(64) NOT NULL,
  `reviewerName` varchar(160) NOT NULL,
  `documentId` varchar(100) NOT NULL,
  `openedAt` timestamp NULL,
  `downloadedAt` timestamp NULL,
  `readAt` timestamp NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `document_reviewer_unique` (`reviewerId`,`documentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
