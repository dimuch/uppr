# Next.js Migration Checklist for UPPR

## Phase 1: Preparation (Current Status)
- [x] Document current architecture
- [x] Understand current navigation patterns
- [x] Research latest Next.js navigation features
- [ ] Set up test environment for Next.js 16
- [ ] Backup current codebase
- [ ] Review breaking changes documentation

## Phase 2: Incremental Upgrade (Pages Router)
- [ ] Upgrade to Next.js 14.2.x (maintains Pages Router)
- [ ] Test all routes and navigation
- [ ] Verify database connections work
- [ ] Test image optimization
- [ ] Check API routes functionality
- [ ] Validate SSR behavior

## Phase 3: App Router Migration Preparation
- [ ] Identify components that can be Server Components
- [ ] Identify components that must be Client Components ('use client')
- [ ] Plan new app directory structure
- [ ] Create migration timeline
- [ ] Set up feature flags for gradual rollout

## Phase 4: App Router Migration (Future)
- [ ] Create `app/` directory alongside `pages/`
- [ ] Migrate one route at a time
- [ ] Update navigation to use new hooks:
  - [ ] Replace `useRouter()` from 'next/router'
  - [ ] Use `usePathname()` for current path
  - [ ] Use `useSearchParams()` for query params
  - [ ] Use `useParams()` for dynamic routes
- [ ] Update layout components
- [ ] Migrate API routes to Route Handlers
- [ ] Test each migrated route thoroughly
- [ ] Update middleware to proxy.ts (Next.js 16+)

## Navigation Updates Needed

### Components to Update:
- [ ] `/components/common/header/Header.js`
  - Replace `useRouter()` with `usePathname()`
  - Add `'use client'` directive if needed
  
- [ ] `/components/common/menu/Menu.js`
  - Update navigation logic
  - Use new navigation hooks
  
- [ ] `/components/common/search/Search.js`
  - Update to use `useRouter()` from 'next/navigation'
  - Keep client-side for interactivity

- [ ] All `<Link>` components (minimal changes)
  - Review and test prefetch behavior
  - Add `useLinkStatus()` for better UX

### Pages to Migrate:
- [ ] `/pages/index.js` → `/app/page.tsx`
- [ ] `/pages/blog/index.js` → `/app/blog/page.tsx`
- [ ] `/pages/blog/articles/[:articleId].js` → `/app/blog/articles/[articleId]/page.tsx`
- [ ] `/pages/test/index.js` → `/app/test/page.tsx`
- [ ] `/pages/downloads/index.js` → `/app/downloads/page.tsx`
- [ ] `/pages/case-study/index.js` → `/app/case-study/page.tsx`
- [ ] `/pages/404.js` → `/app/not-found.tsx`

### API Routes to Convert:
- [ ] `/pages/api/search/index.js` → `/app/api/search/route.ts`
- [ ] `/pages/api/test/index.js` → `/app/api/test/route.ts`
- [ ] `/pages/api/articles-by-category/` → Route handlers
- [ ] `/pages/api/articles-by-tags/` → Route handlers
- [ ] `/pages/api/downloads/` → Route handlers

## Testing Checklist
- [ ] Homepage loads correctly
- [ ] Blog navigation works
- [ ] Article pages render
- [ ] Test form submits correctly
- [ ] Search functionality works
- [ ] Downloads page functional
- [ ] Case studies display properly
- [ ] Footer navigation works
- [ ] Mobile responsive menu
- [ ] Database connections stable
- [ ] Image optimization working
- [ ] SEO meta tags present
- [ ] Analytics tracking works

## Performance Goals
- [ ] Improve Lighthouse score
- [ ] Reduce initial page load time
- [ ] Improve Time to Interactive (TTI)
- [ ] Optimize Core Web Vitals
- [ ] Implement better caching strategies

## Rollback Plan
- [ ] Keep Pages Router version in separate branch
- [ ] Document rollback procedure
- [ ] Maintain database schema compatibility
- [ ] Keep environment variables consistent

