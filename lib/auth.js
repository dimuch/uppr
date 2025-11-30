import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.AUTH_SECRET;
const COOKIE_NAME = 'auth-token';
const TOKEN_EXPIRY = 60 * 20; // 20 minutes in seconds

/**
 * Create a JWT token for a user
 * @param {number} userId
 * @param {string} username
 * @returns {Promise<string>}
 */
export async function createToken(userId, username) {
  const secret = new TextEncoder().encode(SECRET_KEY);
  const token = await new SignJWT({ userId, username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${TOKEN_EXPIRY}s`)
    .sign(secret);

  return token;
}

/**
 * Verify a JWT token
 * @param {string} token
 * @returns {Promise<{userId: number, username: string}|null>}
 */
export async function verifyToken(token) {
  try {
    const secret = new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jwtVerify(token, secret);
    return {
      userId: payload.userId,
      username: payload.username,
    };
  } catch (err) {
    console.error('Token verification failed:', err);
    return null;
  }
}

/**
 * Set authentication cookie
 * @param {string} token
 */
export async function setAuthCookie(token) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: TOKEN_EXPIRY,
    path: '/',
  });
}

/**
 * Get authentication cookie
 * @returns {Promise<string|null>}
 */
export async function getAuthCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);
  return token?.value || null;
}

/**
 * Remove authentication cookie
 */
export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/**
 * Get current authenticated user from cookie
 * @returns {Promise<{userId: number, username: string}|null>}
 */
export async function getCurrentUser() {
  const token = await getAuthCookie();
  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

