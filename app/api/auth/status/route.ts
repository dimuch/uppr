import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../lib/auth.js';
import { getUserById } from '../../../../services/authData.js';

/**
 * GET /api/auth/status
 * Check authentication status
 */
export async function GET() {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return NextResponse.json({
                authenticated: false,
                user: null,
            });
        }

        // Verify user still exists and is active
        const dbUser = await getUserById(user.userId);
        if (!dbUser) {
            return NextResponse.json({
                authenticated: false,
                user: null,
            });
        }

        return NextResponse.json({
            authenticated: true,
            user: {
                id: dbUser.id,
                username: dbUser.username,
            },
        });
    } catch (error) {
        console.error('Status check error:', error);
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

