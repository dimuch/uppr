# Database Setup Instructions

## Creating the auth_users Table

### Option 1: Using MySQL Command Line (Recommended)

If you're getting authentication plugin errors, try one of these methods:

**Method A: Connect with default authentication**
```bash
mysql -u your_user -p your_database < database/create_auth_users_table.sql
```

**Method B: If Method A fails, specify the authentication plugin explicitly**
```bash
mysql -u your_user -p --default-auth=caching_sha2_password your_database < database/create_auth_users_table.sql
```

**Method C: Connect first, then run the SQL**
```bash
mysql -u your_user -p your_database
```
Then paste the contents of `create_auth_users_table.sql` into the MySQL prompt.

### Option 2: Using MySQL Workbench or phpMyAdmin

1. Open MySQL Workbench or phpMyAdmin
2. Connect to your database
3. Open the `create_auth_users_table.sql` file
4. Execute the SQL script

### Option 3: Fix MySQL User Authentication Plugin

If you need to update your MySQL user to use `caching_sha2_password`:

```sql
-- Connect as root user
mysql -u root -p

-- Update the user's authentication plugin
ALTER USER 'your_user'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'your_password';

-- Flush privileges
FLUSH PRIVILEGES;
```

### Option 4: Using Node.js Script (Alternative)

If MySQL command line continues to have issues, you can create a simple Node.js script:

```javascript
// run-setup.js
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env.local' });

async function setup() {
  const connection = await mysql.createConnection({
    host: process.env.ITP_MYSQL_URL,
    port: process.env.ITP_MYSQL_PORT,
    user: process.env.ITP_MYSQL_USER,
    password: process.env.ITP_MYSQL_PASSWORD,
    database: process.env.ITP_MYSQL_DATABASE,
  });

  const sql = `
    CREATE TABLE IF NOT EXISTS \`auth_users\` (
      \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
      \`username\` VARCHAR(255) NOT NULL,
      \`totp_secret\` VARCHAR(255) NOT NULL COMMENT 'Base32 encoded TOTP secret',
      \`is_active\` TINYINT(1) NOT NULL DEFAULT 1,
      \`created_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      \`updated_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (\`id\`),
      UNIQUE KEY \`unique_username\` (\`username\`),
      KEY \`idx_username_active\` (\`username\`, \`is_active\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;

  await connection.execute(sql);
  console.log('Table created successfully!');
  await connection.end();
}

setup().catch(console.error);
```

Then run:
```bash
node run-setup.js
```

## Troubleshooting MySQL 9.x Authentication Issues

MySQL 9.x uses `caching_sha2_password` by default. If you're getting authentication plugin errors:

1. **Check your MySQL user's authentication plugin:**
   ```sql
   SELECT user, host, plugin FROM mysql.user WHERE user = 'your_user';
   ```

2. **Update to use caching_sha2_password:**
   ```sql
   ALTER USER 'your_user'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'your_password';
   FLUSH PRIVILEGES;
   ```

3. **Or use mysql_native_password (if needed for compatibility):**
   ```sql
   ALTER USER 'your_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
   FLUSH PRIVILEGES;
   ```

4. **Verify the table was created:**
   ```sql
   SHOW TABLES LIKE 'auth_users';
   DESCRIBE auth_users;
   ```

