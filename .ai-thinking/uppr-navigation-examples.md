# UPPR Project - Navigation Upgrade Examples

## Current vs Latest Next.js Navigation Patterns

---

## Example 1: Header Component

### Current Implementation (Pages Router)
```javascript
// components/common/header/Header.js
import React from "react";
import UpprLogoText from "../uppr-logo-as-text/UpprLogoText";
import Search from "../search/Search";
import Menu from "../menu/Menu";
import styles from "./styles.module.scss";

const Header = ({ search, location }) => {
  return (
    <div className={styles.upprheaderWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeftBlock}>
          <UpprLogoText isInText={false} isInHeader/>
        </div>
        <div className={styles.headerRightBlock}>
          {search && <Search />}
          <Menu location={location} />
        </div>
      </div>
    </div>
  );
};

export default Header;
```

### Updated (Next.js 16 App Router)
```javascript
// app/components/Header.tsx
'use client';

import React from "react";
import { usePathname } from "next/navigation";
import { onNavigate } from "next/navigation";
import UpprLogoText from "./UpprLogoText";
import Search from "./Search";
import Menu from "./Menu";
import styles from "./styles.module.scss";

export default function Header({ search }: { search?: boolean }) {
  const pathname = usePathname();
  
  // Track navigation for analytics
  React.useEffect(() => {
    onNavigate(() => {
      // Analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pathname,
        });
      }
    });
  }, [pathname]);

  return (
    <div className={styles.upprheaderWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeftBlock}>
          <UpprLogoText isInText={false} isInHeader />
        </div>
        <div className={styles.headerRightBlock}>
          {search && <Search />}
          <Menu currentPath={pathname} />
        </div>
      </div>
    </div>
  );
}
```

---

## Example 2: Menu Component with Active States

### Current Implementation
```javascript
// components/common/menu/components/MenuItems.js (simplified)
import Link from 'next/link';

const MenuItems = ({ location, isOpen }) => {
  return (
    <nav>
      <Link href="/" className={location === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/blog" className={location === '/blog' ? 'active' : ''}>
        Блог
      </Link>
      <Link href="/test" className={location === '/test' ? 'active' : ''}>
        Test
      </Link>
    </nav>
  );
};
```

### Updated (Next.js 15.3+ with useLinkStatus)
```javascript
// app/components/MenuItems.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLinkStatus } from 'next/navigation';
import styles from './styles.module.scss';

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}

function MenuItem({ href, children }: MenuItemProps) {
  const pathname = usePathname();
  const { isPending } = useLinkStatus(href);
  const isActive = pathname === href || pathname.startsWith(href + '/');

  return (
    <Link 
      href={href}
      className={`
        ${styles.menuItem}
        ${isActive ? styles.active : ''}
        ${isPending ? styles.pending : ''}
      `}
    >
      {isPending && <span className={styles.spinner}>⏳</span>}
      {children}
    </Link>
  );
}

export default function MenuItems({ isOpen }: { isOpen?: boolean }) {
  return (
    <nav className={styles.menu}>
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/blog">Блог</MenuItem>
      <MenuItem href="/test">Test</MenuItem>
      <MenuItem href="/downloads">Downloads</MenuItem>
      <MenuItem href="/case-study">Case Study</MenuItem>
    </nav>
  );
}
```

---

## Example 3: Article Page with Dynamic Routing

### Current Implementation
```javascript
// pages/blog/articles/[:articleId].js
import React from 'react';
import { getArticlesDataByIdDB } from '../../../services/blogData.js';
import * as PageComponent from '../../../components/articles';

export default function ArticlePageWrapper({ articleData }) {
  const ArticlePage = PageComponent[articleData.pageComponent];
  return <ArticlePage articleData={articleData} />;
}

export async function getServerSideProps({ res, resolvedUrl }) {
  const articleURL = resolvedUrl.split('?')[0];
  const articleData = await getArticlesDataByIdDB(articleURL);

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=10');

  return {
    props: {
      articleData: articleData,
    },
  };
}
```

### Updated (Next.js 16 App Router - Async Params)
```typescript
// app/blog/articles/[articleId]/page.tsx
import React from 'react';
import { getArticlesDataByIdDB } from '@/services/blogData';
import * as PageComponent from '@/components/articles';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ArticlePage({ params, searchParams }: PageProps) {
  // IMPORTANT: Await params (Next.js 16+ requirement)
  const { articleId } = await params;
  
  // Construct the article URL
  const articleURL = `/blog/articles/${articleId}`;
  
  // Fetch article data
  const articleData = await getArticlesDataByIdDB(articleURL);
  
  // Handle 404
  if (articleData.pageComponent === 'PageNotFound') {
    notFound();
  }
  
  // Dynamically get the article component
  const ArticleComponent = PageComponent[articleData.pageComponent];
  
  return <ArticleComponent articleData={articleData} />;
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  // You can pre-generate common article routes
  // Or return empty array for full dynamic
  return [];
}

// Revalidate every 60 seconds
export const revalidate = 60;
```

---

## Example 4: Search with Navigation

### Current Implementation
```javascript
// components/common/search/Search.js (simplified)
import { useState, useEffect } from 'react';
import useMakeRequest from '../hooks/makeRequest';

const Search = () => {
  const { makeRequest, isLoading, data } = useMakeRequest();
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!searchText) {
      setSearchResult([]);
      return;
    }
    const timer = setTimeout(() => makeRequest(`/api/search?text=${searchText}`), 1000);
    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(() => {
    if (data) setSearchResult(data.data);
  }, [data]);

  return (
    <div>
      <input 
        onChange={(e) => setSearchText(e.target.value)} 
        value={searchText} 
      />
      {searchResult.map(article => (
        <a key={article.id} href={article.link}>
          {article.title}
        </a>
      ))}
    </div>
  );
};
```

### Updated (Next.js 16 with Better Navigation)
```typescript
// app/components/Search.tsx
'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLinkStatus } from 'next/navigation';
import useMakeRequest from '@/hooks/makeRequest';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const { makeRequest, isLoading, data } = useMakeRequest();
  const [searchText, setSearchText] = useState(searchParams.get('q') || '');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!searchText) {
      setSearchResult([]);
      return;
    }
    
    const timer = setTimeout(() => {
      makeRequest(`/api/search?text=${searchText}`);
      
      // Update URL with search query (optional)
      startTransition(() => {
        const params = new URLSearchParams(searchParams);
        params.set('q', searchText);
        router.replace(`?${params.toString()}`, { scroll: false });
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(() => {
    if (data) setSearchResult(data.data);
  }, [data]);

  return (
    <div>
      <input 
        onChange={(e) => setSearchText(e.target.value)} 
        value={searchText}
        placeholder="Search..."
      />
      
      {(isLoading || isPending) && <LoadingSpinner />}
      
      {searchResult.map(article => (
        <SearchResultItem 
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
}

function SearchResultItem({ article }) {
  const { isPending } = useLinkStatus(article.link);
  
  return (
    <Link href={article.link}>
      <div className={isPending ? 'loading' : ''}>
        {isPending && '⏳ '}
        {article.title}
      </div>
    </Link>
  );
}
```

---

## Example 5: Test Page with Results Navigation

### Current Implementation
```javascript
// pages/result/[:id].js (if exists)
import { useRouter } from 'next/router';

export default function ResultPage() {
  const router = useRouter();
  const { id } = router.query;
  
  return <div>Result ID: {id}</div>;
}
```

### Updated (Next.js 16)
```typescript
// app/result/[id]/page.tsx
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ResultPage({ params }: PageProps) {
  // Await params (Next.js 16 requirement)
  const { id } = await params;
  
  // Validate ID
  if (!id || isNaN(Number(id))) {
    notFound();
  }
  
  return (
    <div>
      <h1>Test Result</h1>
      <p>Result ID: {id}</p>
    </div>
  );
}
```

---

## Example 6: Footer Navigation with Analytics

### Current Implementation
```javascript
// components/common/footers/footer/Footer.js
import Link from 'next/link';

const Footer = ({ top3Article = [] }) => {
  return (
    <footer>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/blog" className={styles.link}>Блог</Link>
      <Link href="/test" className={styles.link}>Test</Link>
    </footer>
  );
};
```

### Updated (Next.js 15.3+ with onNavigate)
```typescript
// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { onNavigate } from 'next/navigation';
import { useEffect } from 'react';

interface FooterProps {
  top3Article?: Array<any>;
}

export default function Footer({ top3Article = [] }: FooterProps) {
  useEffect(() => {
    // Track all navigation from footer
    onNavigate(() => {
      console.log('Navigation from footer occurred');
      
      // Track analytics
      if (typeof window !== 'undefined') {
        // Your analytics tracking here
      }
    });
  }, []);

  return (
    <footer>
      <Link href="/">Home</Link>
      <Link href="/blog">Блог</Link>
      <Link href="/test">Test</Link>
      <Link href="/downloads">Downloads</Link>
    </footer>
  );
}
```

---

## Key Takeaways for UPPR Migration

1. **Add 'use client' directive** to components using hooks
2. **Import from 'next/navigation'** instead of 'next/router'
3. **Await params and searchParams** in Next.js 16+
4. **Use usePathname()** instead of router.pathname
5. **Use useSearchParams()** instead of router.query
6. **Use useLinkStatus()** for loading states on links
7. **Use onNavigate()** for analytics and side effects
8. **Server Components by default** - only add 'use client' when needed

---

## Migration Priority

**High Priority:**
1. Header component (used everywhere)
2. Menu component (navigation core)
3. Footer component (used everywhere)

**Medium Priority:**
4. Search component (interactive feature)
5. Article pages (main content)
6. Blog index page

**Low Priority:**
7. Test page (less traffic)
8. Downloads page
9. Case study page

---

## Testing Strategy

1. Create feature flag to toggle between old/new navigation
2. Test in development thoroughly
3. Deploy to staging environment
4. A/B test with 10% of users
5. Monitor error rates and performance
6. Gradually increase rollout
7. Full migration when stable

