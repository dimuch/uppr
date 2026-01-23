import { NextResponse } from 'next/server';
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';
import { getUserByUsername, createUser, updateUserTotpSecret } from '../../../../services/authData.js';

/**
 * POST /api/auth/setup
 * Generate TOTP secret and QR code for a user
 * Body: { username: string, adminToken?: string }
 * Headers: { 'x-admin-token'?: string }
 * Query: ?adminToken=xxx
 *
 * PROTECTED: Requires AUTH_SETUP_SECRET environment variable
 */
export async function POST(request: Request) {
    return NextResponse.json({
        success: true,
        message: 'Not active',
    });


    // try {
    //     // Check admin token
    //     const setupSecret = process.env.AUTH_SETUP_SECRET;
    //
    //     // Get token from multiple sources (query param, header, or body)
    //     const url = new URL(request.url);
    //     const queryToken = url.searchParams.get('adminToken');
    //     const headerToken = request.headers.get('x-admin-token');
    //
    //     const body = await request.json();
    //     const bodyToken = body.adminToken;
    //     const {username} = body;
    //
    //     // Special case: if username is '__verify_token__', just verify token and return success
    //     if (username === '__verify_token__') {
    //         if (setupSecret) {
    //             const providedToken = queryToken || headerToken || bodyToken;
    //             if (!providedToken || providedToken !== setupSecret) {
    //                 return NextResponse.json(
    //                     {
    //                         error: 'Invalid admin token'
    //                     },
    //                     {
    //                         status: 403
    //                     }
    //                 );
    //             }
    //         }
    //         return NextResponse.json({
    //             success: true, message: 'Token verified'
    //         });
    //     }
    //
    //     // If AUTH_SETUP_SECRET is set, require admin token
    //     if (setupSecret) {
    //         const providedToken = queryToken || headerToken || bodyToken;
    //
    //         if (!providedToken || providedToken !== setupSecret) {
    //             return NextResponse.json(
    //                 {
    //                     error: 'Unauthorized: Admin token required. Access to setup is restricted.'
    //                 },
    //                 {
    //                     status: 403
    //                 }
    //             );
    //         }
    //     }
    //
    //     if (!username || typeof username !== 'string' || username.trim().length === 0) {
    //         return NextResponse.json(
    //             {
    //                 error: 'Username is required'
    //             },
    //             {
    //                 status: 400
    //             }
    //         );
    //     }
    //
    //     const normalizedUsername = username.trim().toLowerCase();
    //
    //     // Generate TOTP secret
    //     const secret = speakeasy.generateSecret({
    //         name: `UPPR (${normalizedUsername})`,
    //         length: 32,
    //     });
    //
    //     if (!secret.base32 || !secret.otpauth_url) {
    //         return NextResponse.json(
    //             {
    //                 error: 'Failed to generate TOTP secret'
    //             },
    //             {
    //                 status: 500
    //             }
    //         );
    //     }
    //
    //     // Generate QR code
    //     let qrCodeUrl: string;
    //     try {
    //         qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url || '');
    //     } catch (qrError) {
    //         console.error('QR code generation error:', qrError);
    //         return NextResponse.json(
    //             {
    //                 error: 'Failed to generate QR code'
    //             },
    //             {
    //                 status: 500
    //             }
    //         );
    //     }
    //
    //     // Check if user exists
    //     const existingUser = await getUserByUsername(normalizedUsername);
    //
    //     if (existingUser) {
    //         // Update existing user's TOTP secret
    //         const updated = await updateUserTotpSecret(existingUser.id, secret.base32);
    //         if (!updated) {
    //             return NextResponse.json(
    //                 {
    //                     error: 'Failed to update user TOTP secret'
    //                 },
    //                 {
    //                     status: 500
    //                 }
    //             );
    //         }
    //     } else {
    //         // Create new user
    //         const newUser = await createUser(normalizedUsername, secret.base32);
    //         if (!newUser) {
    //             return NextResponse.json(
    //                 {
    //                     error: 'Failed to create user'
    //                 },
    //                 {
    //                     status: 500
    //                 }
    //             );
    //         }
    //     }
    //
    //     return NextResponse.json({
    //         success: true,
    //         secret: secret.base32, // For manual entry if QR code doesn't work
    //         qrCode: qrCodeUrl,
    //         manualEntryKey: secret.base32,
    //     });
    // } catch (error) {
    //     console.error('Setup error:', error);
    //     return NextResponse.json(
    //         {
    //             error: 'Internal server error'
    //         },
    //         {
    //             status: 500
    //         }
    //     );
    // }
}

