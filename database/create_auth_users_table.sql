-- Create auth_users table for Google Authenticator (TOTP) authentication
-- Run this script in your MySQL database to set up the authentication system

CREATE TABLE IF NOT EXISTS `auth_users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `totp_secret` VARCHAR(255) NOT NULL COMMENT 'Base32 encoded TOTP secret',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_username` (`username`),
  KEY `idx_username_active` (`username`, `is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Example: Insert a test user (optional, for testing)
-- Note: Replace 'YOUR_BASE32_SECRET_HERE' with an actual secret generated via the setup API
-- INSERT INTO `auth_users` (`username`, `totp_secret`, `is_active`) 
-- VALUES ('admin', 'YOUR_BASE32_SECRET_HERE', 1);
