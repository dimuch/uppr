import { getDBPoolData } from '../mysql/mySQLClient.js';

const USERS_TABLE_NAME = 'auth_users';
const DB_NAME = process.env.ITP_MYSQL_DATABASE || 'uppr_ssr';

/**
 * Get user by username
 * @param {string} username
 * @returns {Promise<Object|null>}
 */
export async function getUserByUsername(username) {
  const query = `
    SELECT id, username, totp_secret, is_active, created_at, updated_at
    FROM ${DB_NAME}.${USERS_TABLE_NAME}
    WHERE username = ? AND is_active = 1
    LIMIT 1
  `;

  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(query, [username], (err, rows) => {
      if (err) {
        console.error('getUserByUsername ERROR ==>', err);
        resolve(null);
        return;
      }

      try {
        if (!rows || rows.length === 0) {
          resolve(null);
          return;
        }
        resolve(rows[0]);
      } catch (err) {
        console.error('getUserByUsername ERROR ==>', err);
        resolve(null);
      }
    });
  });
}

/**
 * Get user by ID
 * @param {number} userId
 * @returns {Promise<Object|null>}
 */
export async function getUserById(userId) {
  const query = `
    SELECT id, username, totp_secret, is_active, created_at, updated_at
    FROM ${DB_NAME}.${USERS_TABLE_NAME}
    WHERE id = ? AND is_active = 1
    LIMIT 1
  `;

  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(query, [userId], (err, rows) => {
      if (err) {
        console.error('getUserById ERROR ==>', err);
        resolve(null);
        return;
      }

      try {
        if (!rows || rows.length === 0) {
          resolve(null);
          return;
        }
        resolve(rows[0]);
      } catch (err) {
        console.error('getUserById ERROR ==>', err);
        resolve(null);
      }
    });
  });
}

/**
 * Create a new user (for initial setup)
 * @param {string} username
 * @param {string} totpSecret
 * @returns {Promise<Object|null>}
 */
export async function createUser(username, totpSecret) {
  const query = `
    INSERT INTO ${DB_NAME}.${USERS_TABLE_NAME}
    (username, totp_secret, is_active, created_at, updated_at)
    VALUES (?, ?, 1, NOW(), NOW())
  `;

  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(query, [username, totpSecret], (err, result) => {
      if (err) {
        console.error('createUser ERROR ==>', err);
        resolve(null);
        return;
      }

      try {
        resolve({
          id: result.insertId,
          username,
          totp_secret: totpSecret,
          is_active: 1,
        });
      } catch (err) {
        console.error('createUser ERROR ==>', err);
        resolve(null);
      }
    });
  });
}

/**
 * Update user's TOTP secret
 * @param {number} userId
 * @param {string} totpSecret
 * @returns {Promise<boolean>}
 */
export async function updateUserTotpSecret(userId, totpSecret) {
  const query = `
    UPDATE ${DB_NAME}.${USERS_TABLE_NAME}
    SET totp_secret = ?, updated_at = NOW()
    WHERE id = ? AND is_active = 1
  `;

  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(query, [totpSecret, userId], (err, result) => {
      if (err) {
        console.error('updateUserTotpSecret ERROR ==>', err);
        resolve(false);
        return;
      }

      try {
        resolve(result.affectedRows > 0);
      } catch (err) {
        console.error('updateUserTotpSecret ERROR ==>', err);
        resolve(false);
      }
    });
  });
}

/**
 * Check if user exists
 * @param {string} username
 * @returns {Promise<boolean>}
 */
export async function userExists(username) {
  const user = await getUserByUsername(username);
  return user !== null;
}

