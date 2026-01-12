import { NextResponse } from 'next/server';
import { removeAuthCookie } from '../../../../lib/auth.js';

/**
 * POST /api/auth/logout
 * Logout user by removing auth cookie
 */
export async function POST() {
  try {
    await removeAuthCookie();

    return NextResponse.json({
      success: true,
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Logout error:', error);
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

