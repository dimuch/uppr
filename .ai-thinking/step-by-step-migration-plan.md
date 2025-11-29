# Step-by-Step Next.js 14 App Router Migration Plan

**Current Version**: Next.js 13.5.6 (Pages Router)  
**Target Version**: Next.js 14.2.x (Hybrid: Pages + App Router)  
**Strategy**: Incremental migration with small, testable commits

---

## Migration Principles

✅ **Incremental**: Pages Router and App Router coexist  
✅ **Testable**: Test locally after each commit  
✅ **Reversible**: Each step can be rolled back  
✅ **SEO-safe**: Preserve all meta tags, titles, descriptions  
✅ **Zero Downtime**: Site remains functional throughout

---

## Phase 1: Preparation & Upgrade Foundation (Commits 1-4)

### Commit 1: Backup & Document Current State
**Goal**: Safety net before changes  
**Time**: 5 minutes

```bash
# Create backup branch
git checkout -b backup-before-app-router
git push origin backup-before-app-router

# Document current routes
git checkout -b migration-to-app-router
```

**Files**:
- Create `.ai-thinking/current-routes-inventory.md` documenting all routes
- No code changes

**Test**: `npm run dev` - verify site works  
**Rollback**: `git checkout main`

---

### Commit 2: Upgrade Next.js to 14.2.x
**Goal**: Update framework, keep Pages Router  
**Time**: 10 minutes

```bash
npm install next@14.2.15 react@18.2.0 react-dom@18.2.0
```

**Files Changed**:
- `package.json` - update versions
- `package-lock.json` - lockfile update

**Test Checklist**:
```bash
npm run dev

# Test these URLs:
✓ http://localhost:3000/
✓ http://localhost:3000/blog
✓ http://localhost:3000/blog/articles/kiss-emails
✓ http://localhost:3000/test
✓ http://localhost:3000/downloads
✓ http://localhost:3000/case-study

# Check:
✓ All pages load
✓ Navigation works
✓ Images load
✓ Search works
✓ Database connections work
```

**Rollback**: `git checkout package.json package-lock.json && npm install`

---

### Commit 3: Update next.config.js for App Router Support
**Goal**: Enable App Router alongside Pages Router  
**Time**: 5 minutes

**Files Changed**: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable both Pages and App Router
  experimental: {
    serverComponentsExternalPackages: ['mysql2'],
  },
  
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'custom',
    loaderFile: './components/common/loader/loader.js',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
```

**Test**: `npm run dev` - same tests as Commit 2  
**Rollback**: `git checkout next.config.js`

---

### Commit 4: Create app/ Directory with Root Layout
**Goal**: Set up App Router foundation  
**Time**: 15 minutes

**Files Created**:
1. `app/layout.tsx` - Root layout
2. `app/not-found.tsx` - 404 page for App Router

**app/layout.tsx**:
```typescript
import '../styles/globals.css';
import '../styles/scss/main.scss';

export const metadata = {
  metadataBase: new URL('https://uppr.com.ua'),
  title: {
    default: 'UPPR - Business English Writing',
    template: '%s | UPPR',
  },
  description: 'Ресурс про англійську мову та як писати email',
  keywords: ['education on-line', 'english', 'business', 'writing', 'skills', 'emails'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: '8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" prefix="og: http://ogp.me/ns#">
      <body>{children}</body>
    </html>
  );
}
```

**app/not-found.tsx**:
```typescript
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Сторінку не знайдено</h1>
      <Link href="/">На головну</Link>
    </div>
  );
}
```

**Test**:
```bash
npm run dev

# Pages Router still works (priority):
✓ http://localhost:3000/ (pages/index.js)
✓ http://localhost:3000/blog (pages/blog/index.js)

# App Router 404 available at unknown routes:
✓ http://localhost:3000/unknown-route (shows app/not-found.tsx)
```

**Rollback**: `rm -rf app/`

---

## Phase 2: Migrate Simple Pages (Commits 5-7)

### Commit 5: Migrate 404 Page
**Goal**: Move error page to App Router  
**Time**: 10 minutes

**Why Start Here?**: Simplest page, no data fetching

**Files**:
- Keep: `pages/404.js` (for now)
- Create: `app/not-found.tsx` (enhanced version)

**app/not-found.tsx**:
```typescript
import Link from 'next/link';
import styles from './not-found.module.scss';

export const metadata = {
  title: '404 - Сторінку не знайдено',
  description: 'Сторінку, яку ви шукаєте, не існує',
};

export default function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <p>Сторінку не знайдено</p>
      <Link href="/">Повернутися на головну</Link>
      <Link href="/blog">До блогу</Link>
    </div>
  );
}
```

**app/not-found.module.scss**:
```scss
.notFoundPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
  h1 {
    font-size: 72px;
  }
}
```

**Test**:
```bash
npm run dev
✓ http://localhost:3000/non-existent-page
✓ Verify 404 page shows correctly
✓ Links work
✓ Styling applies
```

**Rollback**: `rm app/not-found.tsx app/not-found.module.scss`

---

### Commit 6: Create Shared Components for App Router
**Goal**: Prepare reusable components  
**Time**: 20 minutes

**Files Created**:
1. `app/components/Header.tsx` - Client component wrapper
2. `app/components/Footer.tsx` - Client component wrapper
3. `app/components/GoogleStat.tsx` - Analytics wrapper

**app/components/Header.tsx**:
```typescript
'use client';

import HeaderOriginal from '@/components/common/header/Header';

export default function Header({ 
  search = false, 
  location = '/' 
}: { 
  search?: boolean; 
  location?: string; 
}) {
  return <HeaderOriginal search={search} location={location} />;
}
```

**app/components/Footer.tsx**:
```typescript
'use client';

import FooterOriginal from '@/components/common/footers/footer/Footer';

interface FooterProps {
  top3Article?: any[];
}

export default function Footer({ top3Article = [] }: FooterProps) {
  return <FooterOriginal top3Article={top3Article} />;
}
```

**app/components/GoogleStat.tsx**:
```typescript
'use client';

import GoogleStatOriginal from '@/components/common/googleCtat/GoogleStat';

export default function GoogleStat() {
  return <GoogleStatOriginal />;
}
```

**Test**:
```bash
npm run dev
# No visible changes - components ready for use
✓ No errors in console
✓ TypeScript compiles
```

**Rollback**: `rm -rf app/components/`

---

### Commit 7: Migrate Homepage to App Router
**Goal**: Move main landing page  
**Time**: 30 minutes

**Files**:
- Keep: `pages/index.js` (temporarily)
- Create: `app/page.tsx`
- Create: `app/page.module.scss` (copy from pages/styles.module.scss)

**Strategy**: Create parallel route, test, then remove old

**app/page.tsx**:
```typescript
import { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleStat from './components/GoogleStat';
import HomePageContent from './components/HomePageContent';
import { getArticles } from '@/services/blogData';
import styles from './page.module.scss';

export const metadata = {
  title: 'UPPR Головна',
  description: 'Ресурс про англійську мову та як писати email',
  keywords: 'education on-line, english, business, writing, skills, emails',
  openGraph: {
    title: 'UPPR Головна',
    description: 'Ресурс про англійську мову та як писати email',
    images: ['/assets/images/blog-articles/responsive/1200/image_main.webp'],
    url: 'https://uppr.com.ua',
  },
};

export default async function HomePage() {
  // Fetch data directly in Server Component
  const articles = await getArticles();

  return (
    <>
      <div className={styles.upprHomePage}>
        <Header search location="/" />
        <HomePageContent articles={articles} />
      </div>
      <Footer top3Article={articles.top3Article} />
      <GoogleStat />
    </>
  );
}
```

**app/components/HomePageContent.tsx**:
```typescript
'use client';

import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import OthersArticles from '@/components/blog/OthersArticles/OthersArticles';
import SeeMorePostsLink from '@/components/blog/SeeMorePosts/SeeMorePostsLink';
import { Typography, Stack } from '@mui/material';
import loader from '@/components/common/loader/loader';
import styles from '../page.module.scss';

export default function HomePageContent({ articles }: { articles: any }) {
  const [isCursor, setIsCursor] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isCursorLast, setCursorIsLast] = useState(true);
  
  const last3Articles = [
    articles.latestArticle[0],
    articles.otherLatestArticles[0],
    articles.otherLatestArticles[1],
  ];

  const [imgDimensions, setImgDimensions] = useState({
    width: 700,
    height: 400,
  });

  useEffect(() => {
    const windowInner = window?.innerWidth;
    const width = windowInner > 850 ? Math.round(windowInner) : windowInner;
    const height = Math.round((width * 4) / 7);

    setImgDimensions(() => ({
      width,
      height,
    }));
  }, []);

  return (
    <>
      <div className={`${styles.screen} ${styles.screenFirst}`}>
        <div className={`${styles.column} ${styles.leftColumn}`}>
          <Stack>
            <Stack
              sx={{
                display: 'inline',
                minHeight: '110px',
              }}
            >
              <h1 className={isCursor ? '' : styles.customTypeAnimationCursor1}>
                <TypeAnimation
                  sequence={[
                    200,
                    "There's a better way to write",
                    () => {
                      setIsCursor(false);
                      setIsLast(true);
                    },
                  ]}
                  speed={20}
                />
              </h1>
              {isLast && (
                <>
                  &nbsp;&nbsp;&nbsp;
                  <h1
                    className={
                      isCursorLast
                        ? styles.emailWord
                        : `${styles.emailWord} ${styles.customTypeAnimationCursor2}`
                    }
                  >
                    <TypeAnimation
                      sequence={[300, 'work emails', () => setCursorIsLast(false)]}
                      speed={20}
                    />
                  </h1>
                </>
              )}
            </Stack>
            <h4>Make your writing shine, wherever you write.</h4>
          </Stack>
          <Button variant="outlined">Get started</Button>
        </div>
        <div className={`${styles.column} ${styles.rightColumn}`}>
          <img
            className={styles.mainSectionImage}
            src={loader({
              src: '/assets/images/others/main_index.png',
              width: imgDimensions.width,
            })}
            width={imgDimensions?.width}
            height={imgDimensions?.height}
            alt={'Main UPPR page'}
          />
        </div>
      </div>

      <div className={`${styles.screen} ${styles.screenSecond}`}>
        <div className={styles.phraseWrapper}>
          <span className={styles.quotes}>&ldquo;</span>
          <h2>Easy Reading Is Damn Hard Writing</h2>
          <span className={styles.quotes}>&rdquo;</span>
          <h4>Nathaniel Hawthorne.</h4>
        </div>
      </div>

      <div className={`${styles.screen} ${styles.screenThird}`}>
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            marginBottom: '80px',
          }}
        >
          <Typography
            sx={{
              fontSize: '34px',
              fontFamily: 'Raleway-SemiBold, sans-serif',
            }}
          >
            From My Blog
          </Typography>
          <SeeMorePostsLink />
        </Stack>
        <div className={`${styles.othersArticles}`}>
          <OthersArticles items={last3Articles} />
        </div>
      </div>
    </>
  );
}
```

**Test Priority**:
```bash
npm run dev

# Test App Router homepage:
✓ http://localhost:3000/ 
  ✓ Page loads
  ✓ Animations work
  ✓ Images load
  ✓ Articles display
  ✓ Navigation works
  ✓ Meta tags present (View Source)
  ✓ No console errors

# Test Pages Router (backup):
✓ Rename pages/index.js to pages/index.js.backup
✓ Test again - should still work via App Router
✓ If issues, restore: mv pages/index.js.backup pages/index.js
```

**Rollback**: `rm app/page.tsx app/page.module.scss app/components/HomePageContent.tsx`

---

## Phase 3: Update TypeScript & Path Aliases (Commit 8)

### Commit 8: Add TypeScript Support & Path Aliases
**Goal**: Better imports and type safety  
**Time**: 15 minutes

**Files Created/Modified**:
1. `tsconfig.json` - TypeScript configuration
2. Update imports to use `@/` alias

**tsconfig.json**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Test**:
```bash
npm run dev
✓ TypeScript compilation works
✓ Imports resolve correctly
✓ No type errors (warnings OK for now)
```

**Rollback**: `git checkout tsconfig.json`

---

## Phase 4: Migrate Blog Section (Commits 9-11)

### Commit 9: Migrate Blog Index Page
**Goal**: Move /blog to App Router  
**Time**: 30 minutes

**Files**:
- Keep: `pages/blog/index.js` (backup)
- Create: `app/blog/page.tsx`
- Create: `app/blog/layout.tsx` (optional)

**app/blog/page.tsx**:
```typescript
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleStat from '../components/GoogleStat';
import TopBlogImage from '@/components/blog/TopBlogImage/TopBlogImage';
import CategoriesList from '@/components/blog/CategoriesList/CategoriesList';
import SelectedAllCategories from '@/components/blog/SelectedAllCategories/SelectedAllCategories';
import {
  getArticles,
  getArticlesByCategoryDB,
  getArticlesCategoriesDB,
  getDownloadsDB,
  getTagsDB,
} from '@/services/blogData';
import styles from './blog.module.scss';

export const metadata = {
  title: 'Блог',
  description: 'The coolest blog ever about writing, emails',
  openGraph: {
    title: 'UPPR | Блог',
    description: 'The coolest blog ever about writing, emails',
    images: ['/assets/images/blog-articles/responsive/1200/image_main.webp'],
    url: 'https://uppr.com.ua/blog',
  },
};

export default async function BlogPage() {
  // Fetch all data in parallel
  const [
    articleCategories,
    articles,
    downloads,
    tags,
    articlesByCategories,
  ] = await Promise.all([
    getArticlesCategoriesDB(),
    getArticles(),
    getDownloadsDB(),
    getTagsDB(),
    getArticlesByCategoryDB(),
  ]);

  return (
    <>
      <div className={styles.upprBlogPage}>
        <Header search location="/blog" />
        <div className={`uppr-page-content ${styles.upprPageContent}`}>
          <TopBlogImage
            caption={'My Blog'}
            description={'You are never too good to email better!'}
          />

          <div className={`uppr-article-categories ${styles.upprArticleCategories}`}>
            <CategoriesList items={articleCategories} />
          </div>

          <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
            <SelectedAllCategories
              latestArticle={articles.latestArticle}
              otherLatestArticles={articles.otherLatestArticles}
              top3Article={articles.top3Article}
              downloads={downloads}
              tags={tags}
              articlesByCategories={articlesByCategories}
              domainName=""
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer top3Article={articles.top3Article} />
        </div>
      </div>
      <GoogleStat />
    </>
  );
}

// Revalidate every 60 seconds
export const revalidate = 60;
```

**Test**:
```bash
npm run dev

✓ http://localhost:3000/blog
  ✓ Page loads
  ✓ Categories display
  ✓ Articles list shows
  ✓ Search works
  ✓ Tags work
  ✓ Filtering works
  ✓ SEO meta tags present
```

**Rollback**: `rm -rf app/blog/`

---

### Commit 10: Migrate Single Article Page (Dynamic Route)
**Goal**: Move /blog/articles/[articleId] to App Router  
**Time**: 45 minutes

**Challenge**: Dynamic routes + article components mapping

**Files**:
- Keep: `pages/blog/articles/[:articleId].js` (backup)
- Create: `app/blog/articles/[articleId]/page.tsx`

**app/blog/articles/[articleId]/page.tsx**:
```typescript
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import GoogleStat from '@/app/components/GoogleStat';
import { getArticlesDataByIdDB } from '@/services/blogData';
import * as PageComponent from '@/components/articles';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ articleId: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { articleId } = await params;
  const articleURL = `/blog/articles/${articleId}`;
  const articleData = await getArticlesDataByIdDB(articleURL);

  if (articleData.pageComponent === 'PageNotFound') {
    return {
      title: '404 - Article Not Found',
    };
  }

  return {
    title: articleData.title,
    description: articleData.description,
    keywords: 'education on-line, english, business, writing, skills, emails',
    openGraph: {
      title: `${articleData.title} | UPPR Блог`,
      description: articleData.description,
      images: [`https://uppr.com.ua${articleData.image}`],
      url: `https://uppr.com.ua${articleData.link}`,
      type: 'article',
      authors: ['Ivanna Tabachuk'],
    },
    alternates: {
      canonical: `https://uppr.com.ua${articleData.link}`,
    },
    verification: {
      google: '8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU',
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { articleId } = await params;
  const articleURL = `/blog/articles/${articleId}`;
  const articleData = await getArticlesDataByIdDB(articleURL);

  if (articleData.pageComponent === 'PageNotFound') {
    notFound();
  }

  // Get the article component dynamically
  const ArticleComponent = PageComponent[articleData.pageComponent];

  if (!ArticleComponent) {
    notFound();
  }

  return (
    <>
      <Header search location="/blog" />
      <div style={{ overflow: 'hidden' }}>
        <ArticleComponent articleData={articleData} />
      </div>
      <GoogleStat />
    </>
  );
}

// Revalidate every 60 seconds
export const revalidate = 60;

// Optional: Generate static params for popular articles
export async function generateStaticParams() {
  // Can return empty array for full dynamic
  // Or pre-generate popular articles
  return [];
}
```

**Test**:
```bash
npm run dev

✓ http://localhost:3000/blog/articles/kiss-emails
✓ http://localhost:3000/blog/articles/subject-line
✓ http://localhost:3000/blog/articles/asap
  ✓ Article loads
  ✓ Styling correct
  ✓ Images display
  ✓ Navigation works
  ✓ Meta tags correct
  ✓ 404 for invalid articles
```

**Rollback**: `rm -rf app/blog/articles/`

---

### Commit 11: Migrate Category Pages
**Goal**: Move /blog/articles-by-category/[categoryName]  
**Time**: 25 minutes

**Files**:
- Create: `app/blog/articles-by-category/[categoryName]/page.tsx`

**app/blog/articles-by-category/[categoryName]/page.tsx**:
```typescript
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GoogleStat from '@/app/components/GoogleStat';
import TopBlogImage from '@/components/blog/TopBlogImage/TopBlogImage';
import SelectedSpecificCategory from '@/components/blog/SelectedSpecificCategory/SelectedSpecificCategory';
import { getArticlesByCategoryNameDB, getArticles } from '@/services/blogData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ categoryName: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoryName } = await params;
  const formattedCategory = categoryName.replace(/-/g, ' ');

  return {
    title: `Категорія: ${formattedCategory}`,
    description: `Статті в категорії ${formattedCategory}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { categoryName } = await params;
  
  const [articles, { top3Article }] = await Promise.all([
    getArticlesByCategoryNameDB(categoryName.replace(/-/g, ' ')),
    getArticles(),
  ]);

  if (!articles || articles.length === 0) {
    notFound();
  }

  return (
    <>
      <div>
        <Header search location="/blog" />
        <TopBlogImage
          caption={categoryName.replace(/-/g, ' ')}
          description="Articles in this category"
        />
        <SelectedSpecificCategory articles={articles} />
      </div>
      <Footer top3Article={top3Article} />
      <GoogleStat />
    </>
  );
}

export const revalidate = 60;
```

**Test**:
```bash
npm run dev
✓ http://localhost:3000/blog/articles-by-category/business-writing
✓ Articles filter correctly
✓ Category name displays
```

**Rollback**: `rm -rf app/blog/articles-by-category/`

---

## Phase 5: Migrate Remaining Pages (Commits 12-15)

### Commit 12: Migrate Test Page
**Goal**: Move /test to App Router  
**Time**: 30 minutes

**app/test/page.tsx**:
```typescript
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleStat from '../components/GoogleStat';
import Test from '@/components/test/Test';
import { getArticles } from '@/services/blogData';
import styles from './test.module.scss';

export const metadata = {
  title: 'Email Level Test',
  description: 'Wanna check if your emails are effective and modern enough?',
  keywords: 'test, education on-line, english, business, writing, skills, emails',
  openGraph: {
    title: 'UPPR Email Level Test | UPPR',
    description: 'Wanna check if your emails are effective and modern enough?',
    images: ['/assets/images/blog-articles/responsive/1200/test.webp'],
    url: 'https://uppr.com.ua/test',
  },
};

export default async function TestPage() {
  const { top3Article } = await getArticles();

  return (
    <>
      <div className={styles.upprTestPage}>
        <Header search location="/test" />
        <div className={styles.testBody}>
          <Test />
        </div>
        <Footer top3Article={top3Article} />
      </div>
      <GoogleStat />
    </>
  );
}

export const revalidate = 60;
```

**Test**:
```bash
✓ http://localhost:3000/test
  ✓ Test loads
  ✓ Questions display
  ✓ Navigation between steps works
  ✓ Submit works
  ✓ Results display
```

---

### Commit 13: Migrate Downloads Page
**Goal**: Move /downloads to App Router  
**Time**: 25 minutes

**app/downloads/page.tsx** - Similar pattern as blog page

**Test**:
```bash
✓ http://localhost:3000/downloads
✓ Downloads list displays
✓ Categories work
```

---

### Commit 14: Migrate Case Study Page
**Goal**: Move /case-study to App Router  
**Time**: 25 minutes

**app/case-study/page.tsx** - Similar pattern

**Test**:
```bash
✓ http://localhost:3000/case-study
✓ Case studies display
✓ Modal opens/closes
```

---

### Commit 15: Migrate API Routes to Route Handlers
**Goal**: Move API routes to App Router format  
**Time**: 45 minutes

**Files**:
- Convert: `pages/api/search/index.js` → `app/api/search/route.ts`
- Convert: `pages/api/test/index.js` → `app/api/test/route.ts`
- Convert other API routes

**app/api/search/route.ts**:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { searchInArticlesParamsDB } from '@/services/blogData';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchText = searchParams.get('text');

  if (!searchText) {
    return NextResponse.json(
      { data: [], message: 'Search text required' },
      { status: 400 }
    );
  }

  try {
    const result = await searchInArticlesParamsDB(searchText);
    return NextResponse.json({
      data: result,
      message: '',
    });
  } catch (err) {
    console.error('Search error:', err);
    return NextResponse.json(
      { data: [], message: 'Error occurred' },
      { status: 500 }
    );
  }
}
```

**Test**:
```bash
# Test API routes
✓ curl http://localhost:3000/api/search?text=email
✓ Search in UI works
✓ Test submission works
```

---

## Phase 6: Cleanup & Optimization (Commits 16-18)

### Commit 16: Remove Old Pages Router Files
**Goal**: Clean up migrated pages  
**Time**: 10 minutes

```bash
# Only after ALL tests pass
mv pages/index.js pages/index.js.old
mv pages/blog pages/blog.old
# etc.
```

**Test**: Full regression test of all pages

---

### Commit 17: Add Loading States
**Goal**: Add loading.tsx files for better UX  
**Time**: 20 minutes

**app/blog/loading.tsx**:
```typescript
export default function Loading() {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-header" />
      <div className="skeleton-content" />
    </div>
  );
}
```

---

### Commit 18: Add Error Boundaries
**Goal**: Better error handling  
**Time**: 15 minutes

**app/blog/error.tsx**:
```typescript
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Щось пішло не так!</h2>
      <button onClick={() => reset()}>Спробувати знову</button>
    </div>
  );
}
```

---

## Testing Strategy After Each Commit

### Quick Tests (1-2 min):
```bash
npm run dev
✓ Page loads without errors
✓ No console errors
✓ Basic navigation works
```

### Full Tests (5-10 min):
```bash
# Test all main routes
✓ Homepage
✓ Blog index
✓ 3-5 article pages
✓ Test page
✓ Downloads
✓ Case studies
✓ Search functionality
✓ Mobile responsive check
```

### SEO Check:
```bash
# View page source
✓ <title> tag present
✓ <meta name="description"> present
✓ Open Graph tags present
✓ Canonical URL present
```

---

## Rollback Strategy

### Per-Commit Rollback:
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Restore specific file
git checkout HEAD~1 -- path/to/file
```

### Emergency Rollback:
```bash
# Full rollback to before migration
git checkout backup-before-app-router
```

---

## Estimated Timeline

| Phase | Commits | Time | Cumulative |
|-------|---------|------|------------|
| Phase 1 | 1-4 | 35 min | 35 min |
| Phase 2 | 5-7 | 60 min | 1h 35min |
| Phase 3 | 8 | 15 min | 1h 50min |
| Phase 4 | 9-11 | 100 min | 3h 30min |
| Phase 5 | 12-15 | 125 min | 5h 35min |
| Phase 6 | 16-18 | 45 min | 6h 20min |

**Total**: ~6-7 hours (can be spread across multiple days)

---

## Success Criteria

✅ All pages accessible via App Router  
✅ All SEO meta tags preserved  
✅ All functionality works (search, test, navigation)  
✅ No console errors  
✅ Database connections work  
✅ Images load correctly  
✅ Mobile responsive  
✅ Performance same or better  
✅ All tests pass  
✅ Can deploy to production safely

---

## Next Steps After Migration

1. Add ISR (Incremental Static Regeneration)
2. Implement new navigation hooks (usePathname, etc.)
3. Add loading skeletons
4. Implement parallel routes
5. Add intercepting routes for modals
6. Optimize bundle size
7. Improve SEO with structured data

This plan ensures safe, incremental migration with testable checkpoints!

