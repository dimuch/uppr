# Next.js Navigation Guide - Latest Stable Versions

**Last Updated**: November 26, 2025  
**Current Stable Next.js Version**: 16.0.3 (Released: November 13, 2025)  
**Project Current Version**: 13.5.6 (Pages Router)

---

## Overview of Changes

Next.js has evolved significantly from version 13.5.6 to 16.0.3, with major navigation improvements introduced through the App Router and subsequent updates.

---

## Current Project Navigation (Pages Router - v13.5.6)

### What You're Using Now:

```javascript
import Link from 'next/link';

// Simple navigation
<Link href="/blog">Блог</Link>

// With component
<Link href={article.link} className={styles.link}>
  {article.title}
</Link>

// External links
<Link href="https://englishplus.com.ua" target="_blank">
  Тренінг
</Link>
```

**Router Hook (Pages Router):**
```javascript
import { useRouter } from 'next/router';

const router = useRouter();
const { query, pathname } = router;

// Programmatic navigation
router.push('/blog');
router.replace('/blog');
router.back();
```

---

## Latest Next.js Navigation (App Router - v16.0.3)

### 1. **Link Component (Unchanged but Enhanced)**

The `<Link>` component API remains similar but with improvements:

```javascript
import Link from 'next/link';

// Basic usage (same as before)
<Link href="/blog">Blog</Link>

// Prefetch control
<Link href="/blog" prefetch={false}>Blog</Link>

// Replace instead of push
<Link href="/blog" replace>Blog</Link>
```

**Key improvements:**
- Better automatic prefetching
- Improved scroll behavior
- Built-in loading states with `useLinkStatus()` (v15.3+)

---

### 2. **useRouter Hook (App Router - Client Components)**

**BREAKING CHANGE**: Different import path and API

```javascript
'use client'; // Must be a client component

import { useRouter } from 'next/navigation'; // Note: 'next/navigation' not 'next/router'

export default function MyComponent() {
  const router = useRouter();
  
  // Programmatic navigation
  router.push('/blog');        // Navigate to route
  router.replace('/blog');     // Replace current route
  router.refresh();            // Refresh current route
  router.back();               // Go back
  router.forward();            // Go forward
  router.prefetch('/blog');    // Prefetch route
  
  // NO LONGER AVAILABLE:
  // - router.query (use useSearchParams() instead)
  // - router.pathname (use usePathname() instead)
}
```

---

### 3. **New Navigation Hooks**

#### **usePathname() - Get Current Path**
```javascript
'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <nav>
      <Link href="/" className={pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>
        Blog
      </Link>
    </nav>
  );
}
```

#### **useSearchParams() - Get Query Parameters**
```javascript
'use client';

import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const category = searchParams.get('category');
  
  return <div>Search: {query}, Category: {category}</div>;
}
```

#### **useParams() - Get Dynamic Route Parameters**
```javascript
'use client';

import { useParams } from 'next/navigation';

export default function ArticlePage() {
  const params = useParams();
  const { articleId } = params;
  
  return <div>Article ID: {articleId}</div>;
}
```

---

### 4. **NEW in Next.js 16.0.3: Asynchronous Parameters**

**MAJOR CHANGE**: Route parameters are now async!

```javascript
// Server Components (Next.js 16+)
export default async function Page({ params, searchParams }) {
  // MUST use await
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const slug = resolvedParams.slug;
  const query = resolvedSearchParams.q;
  
  return <div>Slug: {slug}, Query: {query}</div>;
}

// Or destructure with await
export default async function Page({ params, searchParams }) {
  const { slug } = await params;
  const { q } = await searchParams;
  
  return <div>Slug: {slug}, Query: {q}</div>;
}
```

---

### 5. **NEW in Next.js 15.3: Navigation State Hooks**

#### **useLinkStatus() - Track Link State**
```javascript
'use client';

import { useLinkStatus } from 'next/navigation';
import Link from 'next/link';

export default function NavLink({ href, children }) {
  const { isActive, isPending } = useLinkStatus(href);
  
  return (
    <Link 
      href={href}
      className={`
        ${isActive ? 'text-blue-600 font-bold' : ''}
        ${isPending ? 'opacity-50 cursor-wait' : ''}
      `}
    >
      {isPending && <LoadingSpinner />}
      {children}
    </Link>
  );
}
```

#### **onNavigate() - Execute Logic After Route Change**
```javascript
'use client';

import { onNavigate } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Register navigation callback
    onNavigate(() => {
      console.log('User navigated!');
      
      // Track analytics
      gtag('event', 'page_view', {
        page_path: window.location.pathname,
      });
      
      // Reset scroll position
      window.scrollTo(0, 0);
      
      // Clear search results
      // Update state, etc.
    });
  }, []);
  
  return null;
}
```

---

### 6. **NEW in Next.js 16: proxy.ts (formerly middleware.ts)**

```javascript
// proxy.ts (root level)
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect logic
  if (request.nextUrl.pathname === '/old-blog') {
    return NextResponse.redirect(new URL('/blog', request.url));
  }
  
  // Rewrite logic
  if (request.nextUrl.pathname.startsWith('/api/old/')) {
    return NextResponse.rewrite(
      new URL(request.nextUrl.pathname.replace('/api/old/', '/api/'), request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/old-blog/:path*', '/api/old/:path*'],
};
```

---

## Migration Path for UPPR Project

### Option 1: Stay with Pages Router (Recommended for Now)
- **Current version**: 13.5.6
- **Upgrade to**: Next.js 14.x or 15.x (still supports Pages Router)
- **Why**: Less breaking changes, your current code works
- **Changes needed**: Minimal

### Option 2: Migrate to App Router (Future-proof)
- **Target version**: Next.js 16.0.3
- **Migration effort**: High (3-4 weeks)
- **Benefits**: 
  - Better performance with Server Components
  - New navigation features
  - Future Next.js features
  - Improved SEO and streaming

---

## Comparison Table

| Feature | Pages Router (Current) | App Router (Latest) |
|---------|----------------------|---------------------|
| **Import** | `next/router` | `next/navigation` |
| **Router Hook** | `useRouter()` | `useRouter()` (different API) |
| **Get Path** | `router.pathname` | `usePathname()` |
| **Get Query** | `router.query` | `useSearchParams()` |
| **Get Params** | `router.query` | `useParams()` |
| **Navigate** | `router.push()` | `router.push()` |
| **Link Component** | `<Link>` | `<Link>` (same) |
| **Link Status** | N/A | `useLinkStatus()` |
| **Nav Callback** | N/A | `onNavigate()` |
| **Async Params** | No | Yes (v16+) |
| **Server Components** | No | Yes |

---

## Recommendations for UPPR

### Short Term (1-2 months)
1. **Stay with Pages Router** but update to Next.js 14.2.x (stable)
2. This gives you security updates and bug fixes
3. Minimal code changes required

### Medium Term (3-6 months)
1. Plan migration to App Router
2. Start with new features in App Router
3. Gradually migrate existing pages

### Long Term (6-12 months)
1. Full migration to Next.js 16+ App Router
2. Leverage Server Components for better performance
3. Use new navigation hooks for better UX
4. Implement `onNavigate()` for analytics tracking

---

## Example: Updating Your Header Component

### Current (Pages Router):
```javascript
// components/common/header/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ search, location }) => {
  const router = useRouter();
  const isActive = router.pathname === location;
  
  return (
    <nav>
      <Link href="/blog">Блог</Link>
      <Link href="/test">Test</Link>
    </nav>
  );
};
```

### App Router (Next.js 16):
```javascript
// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLinkStatus } from 'next/navigation';

export default function Header({ search }) {
  const pathname = usePathname();
  const { isActive: isBlogActive, isPending: isBlogPending } = useLinkStatus('/blog');
  
  return (
    <nav>
      <Link 
        href="/blog"
        className={pathname === '/blog' ? 'active' : ''}
      >
        {isBlogPending && '⏳ '}
        Блог
      </Link>
      <Link href="/test">Test</Link>
    </nav>
  );
}
```

---

## Additional Resources

- **Official Docs**: https://nextjs.org/docs/app/building-your-application/routing
- **Migration Guide**: https://nextjs.org/docs/app/building-your-application/upgrading
- **Codemod Tool**: `npx @next/codemod@latest upgrade latest` (helps automate migration)

---

## Summary

**For UPPR Project:**
- Currently on Next.js 13.5.6 (Pages Router) ✅
- Latest stable is Next.js 16.0.3 (App Router)
- Main changes: async parameters, new hooks, proxy.ts
- **Recommendation**: Upgrade incrementally, test thoroughly

