/**
 * Node.js script to create the auth_users table
 * Run with: node database/run-setup.js
 */

const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if it exists
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

async function setupAuthTable() {
  let connection;

  // Check for required environment variables
  const requiredVars = ['ITP_MYSQL_URL', 'ITP_MYSQL_USER', 'ITP_MYSQL_PASSWORD', 'ITP_MYSQL_DATABASE'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\nPlease ensure these are set in your .env.local file or environment.');
    console.error('\nExample .env.local:');
    console.error('ITP_MYSQL_URL=localhost');
    console.error('ITP_MYSQL_PORT=3306');
    console.error('ITP_MYSQL_USER=your_username');
    console.error('ITP_MYSQL_PASSWORD=your_password');
    console.error('ITP_MYSQL_DATABASE=your_database');
    process.exit(1);
  }

  try {
    console.log(`Connecting to MySQL at ${process.env.ITP_MYSQL_URL}:${process.env.ITP_MYSQL_PORT || 3306}...`);
    
    // Create connection
    connection = await mysql.createConnection({
      host: process.env.ITP_MYSQL_URL,
      port: parseInt(process.env.ITP_MYSQL_PORT || '3306', 10),
      user: process.env.ITP_MYSQL_USER,
      password: process.env.ITP_MYSQL_PASSWORD,
      database: process.env.ITP_MYSQL_DATABASE,
    });

    console.log('Connected to MySQL database');

    // SQL to create the table
    const createTableSQL = `
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

    // Execute the SQL
    await connection.execute(createTableSQL);
    console.log('✓ Table auth_users created successfully!');

    // Verify the table exists
    const [tables] = await connection.execute(
      "SHOW TABLES LIKE 'auth_users'"
    );

    if (tables.length > 0) {
      console.log('✓ Table verification: auth_users table exists');
      
      // Show table structure
      const [columns] = await connection.execute('DESCRIBE auth_users');
      console.log('\nTable structure:');
      console.table(columns);
    } else {
      console.log('⚠ Warning: Table was not found after creation');
    }

  } catch (error) {
    console.error('Error setting up auth_users table:', error.message);
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('\nAuthentication failed. Please check your database credentials in .env.local');
    } else if (error.code === 'ECONNREFUSED') {
      console.error('\nConnection refused. Please check that MySQL is running and the host/port are correct.');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('\nDatabase does not exist. Please create the database first.');
    }
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('\nDatabase connection closed');
    }
  }
}

// Run the setup
setupAuthTable();

