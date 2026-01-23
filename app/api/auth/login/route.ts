import { NextResponse } from 'next/server';
import speakeasy from 'speakeasy';
import { getUserByUsername } from '../../../../services/authData.js';
import { createToken, setAuthCookie } from '../../../../lib/auth.js';

/**
 * POST /api/auth/login
 * Authenticate user with TOTP code
 * Body: { username: string, token: string }
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, token } = body;

        if (!username || typeof username !== 'string' || username.trim().length === 0) {
            return NextResponse.json(
                {
                    error: 'Username is required'
                },
                {
                    status: 400
                }
            );
        }

        if (!token || typeof token !== 'string' || token.trim().length === 0) {
            return NextResponse.json(
                {
                    error: 'TOTP token is required'
                },
                {
                    status: 400
                }
            );
        }

        const normalizedUsername = username.trim().toLowerCase();
        const normalizedToken = token.trim().replace(/\s/g, ''); // Remove spaces

        // Get user
        const user = await getUserByUsername(normalizedUsername);
        if (!user || !user.totp_secret) {
            return NextResponse.json(
                {
                    error: 'Invalid credentials'
                },
                {
                    status: 401
                }
            );
        }

        // Verify TOTP token
        const verified = speakeasy.totp.verify({
            secret: user.totp_secret,
            encoding: 'base32',
            token: normalizedToken,
            window: 2, // Allow 2 time steps (60 seconds) before/after current time
        });

        if (!verified) {
            return NextResponse.json(
                {
                    error: 'Invalid TOTP token'
                },
                {
                    status: 401
                }
            );
        }

        // Create JWT token
        const jwtToken = await createToken(user.id, user.username);

        // Set auth cookie
        await setAuthCookie(jwtToken);

        return NextResponse.json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error'
            },
            {
                status: 500
            }
        );
    }
}

