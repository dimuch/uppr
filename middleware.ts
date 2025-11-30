import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth.js';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /auth/setup route - require admin token in URL
  if (pathname.startsWith('/auth/setup')) {
    return NextResponse.redirect(new URL('/blog', request.url));


    const setupSecret = process.env.AUTH_SETUP_SECRET;
    
    // If AUTH_SETUP_SECRET is set, require admin token in URL
    if (setupSecret) {
      const adminToken = request.nextUrl.searchParams.get('adminToken');
      
      if (!adminToken || adminToken !== setupSecret) {
        // Redirect to a restricted access page or show error
        const errorUrl = new URL('/auth/setup', request.url);
        errorUrl.searchParams.set('error', 'admin_token_required');
        return NextResponse.redirect(errorUrl);
      }
    }
  }

  // Protect /blog/new-article route
  if (pathname.startsWith('/blog/new-article')) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      // Redirect to login page
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Verify token
    try {
      const user = await verifyToken(token);
      if (!user) {
        // Invalid token, redirect to login
        const loginUrl = new URL('/auth/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        const response = NextResponse.redirect(loginUrl);
        response.cookies.delete('auth-token');
        return response;
      }

      // User is authenticated, allow access
      return NextResponse.next();
    } catch (error) {
      console.error('Middleware auth error:', error);
      // Error verifying token, redirect to login
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('auth-token');
      return response;
    }
  }

  // Allow all other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/auth/setup/:path*',
    '/blog/new-article/:path*',
  ],
};

