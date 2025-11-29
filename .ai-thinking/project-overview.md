# UPPR Project Overview

## Project Summary
UPPR is a Ukrainian educational platform focused on teaching business English writing and email communication skills.

## Tech Stack
- **Framework**: Next.js 13.5.6 (Pages Router)
- **React**: 18.2.0
- **Styling**: SCSS modules + Material-UI (MUI)
- **Database**: MySQL2 with connection pooling
- **Image Optimization**: Custom loader with Sharp

## Main Sections
1. **Home Page** (`/`) - Hero with animations, latest articles
2. **Blog** (`/blog`) - 40+ articles about email writing
3. **Test** (`/test`) - Email effectiveness quiz
4. **Downloads** (`/downloads`) - Resources and templates
5. **Case Studies** (`/case-study`) - Real email mistake examples

## Database Schema (uppr_ssr)
- articles
- categories
- tags
- article_tags
- articles_by_categories
- downloads
- downloads_charge_types
- case_study
- tags_case_study
- authors
- email_level

## Key Features
- Server-Side Rendering (SSR) with getServerSideProps
- MySQL connection pooling with auto-reconnect
- Custom image optimization
- Real-time search with debouncing
- Responsive design (mobile-first)
- SEO optimized (Open Graph, JSON-LD)

## Current Navigation Pattern
Using Pages Router:
- `<Link>` from `next/link`
- Static imports
- File-based routing in `/pages`

## Areas for Potential Modernization
1. Upgrade to App Router (Next.js 13.4+)
2. Use new navigation components
3. Server Components for better performance
4. Route handlers instead of API routes

