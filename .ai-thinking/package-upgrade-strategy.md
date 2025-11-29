# Package Upgrade Strategy for UPPR Migration

## Current Versions Analysis

### Core Framework (CRITICAL)
```json
"next": "13.5.6"          → Upgrade to 15.1.0 (latest stable)
"react": "18.2.0"          → Keep 18.3.1 (stable, compatible with Next 15)
"react-dom": "18.2.0"      → Keep 18.3.1 (stable)
"eslint-config-next": "13.5.3" → Upgrade to match Next.js version
```

**Note**: Next.js 15 is stable and well-tested. React 19 is RC, so staying on React 18.3.1 is safer.

### UI Libraries
```json
"@mui/material": "5.11.5"  → Upgrade to 5.16.7 (latest stable)
"@emotion/react": "11.13.3" → Keep (already latest)
"@emotion/styled": "11.10.5" → Upgrade to 11.13.0
"@phosphor-icons/react": "2.1.5" → Upgrade to 2.2.1
"clsx": "1.2.1"            → Upgrade to 2.1.1
```

### Build Tools
```json
"eslint": "8.32.0"         → Upgrade to 8.57.1 (v9 has breaking changes)
"prettier": "3.2.5"        → Upgrade to 3.3.3
"sass": "1.57.1"           → Upgrade to 1.80.7
"sharp": "0.32.6"          → Upgrade to 0.33.5
```

### React Libraries
```json
"react-type-animation": "3.2.0" → Keep (already latest)
"react-slick": "0.30.2"    → Upgrade to 0.30.2 (already latest)
"react-helmet": "6.1.0"    → REMOVE (use Next.js metadata API instead)
"react-parallax-mouse": "2.1.0" → Keep (already latest)
```

### Database & Utilities
```json
"mysql2": "3.11.2"         → Keep (already latest)
"ssh2": "1.11.0"           → Upgrade to 1.16.0
"prop-types": "15.8.1"     → Keep (already latest)
```

---

## Upgrade Strategy

### Phase 1: Safe Upgrades (Low Risk)
- Patch versions
- Utility libraries
- Styling tools

### Phase 2: Framework Upgrade (Medium Risk)
- Next.js 13.5.6 → 15.1.0
- Update React to 18.3.1
- Update eslint-config-next

### Phase 3: Major Library Updates (Low-Medium Risk)
- MUI v5.11 → v5.16
- Sass, Sharp, other build tools

---

## Compatibility Matrix

| Package | Current | Target | Risk | Notes |
|---------|---------|--------|------|-------|
| Next.js | 13.5.6 | 15.1.0 | Medium | App Router stable |
| React | 18.2.0 | 18.3.1 | Low | Patch update |
| MUI | 5.11.5 | 5.16.7 | Low | Same major version |
| ESLint | 8.32.0 | 8.57.1 | Low | Stay on v8 |
| Sass | 1.57.1 | 1.80.7 | Low | Better performance |
| Sharp | 0.32.6 | 0.33.5 | Medium | Image processing |

---

## Breaking Changes to Watch

### Next.js 15 Changes:
1. ✅ `async` params and searchParams (already in plan)
2. ✅ `middleware.ts` → `proxy.ts` (optional, not critical)
3. ✅ React 19 support (but we'll use React 18)
4. ✅ Turbopack stable (optional)

### MUI v5.16 Changes:
- Minor API improvements
- Better TypeScript support
- No breaking changes from 5.11

### Sharp v0.33 Changes:
- Performance improvements
- New image formats
- No breaking API changes

---

## Recommended Package.json

```json
{
  "name": "uppr-nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 3000",
    "export": "next export",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "update:images": "node utils/resizer.js",
    "cache:clear": "npm cache clean --force",
    "reset": "npm run cache:clear && rm -rf node_modules && npm install",
    "type-check": "tsc --noEmit"
  },
  "engines": {
    "npm": ">=10.2.3",
    "node": ">=20.2.0"
  },
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/material": "^5.16.7",
    "@napi-rs/canvas": "^0.1.58",
    "@phosphor-icons/react": "^2.2.1",
    "clsx": "^2.1.1",
    "eslint": "^8.57.1",
    "eslint-config-next": "^15.1.0",
    "mysql2": "^3.11.2",
    "next": "^15.1.0",
    "prettier": "^3.3.3",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-parallax-mouse": "^2.1.0",
    "react-slick": "^0.30.2",
    "react-type-animation": "^3.2.0",
    "sass": "^1.80.7",
    "sharp": "^0.33.5",
    "slick-carousel": "^1.8.1",
    "ssh2": "^1.16.0"
  },
  "devDependencies": {
    "@types/node": "^20.17.6",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "typescript": "^5.7.2"
  }
}
```

---

## Removed Packages

### react-helmet
**Why Remove**: Next.js 15 has built-in metadata API that's better for SEO

**Before** (Pages Router):
```javascript
import { Helmet } from 'react-helmet';

<Helmet>
  <title>My Page</title>
  <meta name="description" content="Description" />
</Helmet>
```

**After** (App Router):
```typescript
export const metadata = {
  title: 'My Page',
  description: 'Description',
};
```

### Removed Build Tools
- `copy-webpack-plugin` - Next.js handles this
- `image-minimizer-webpack-plugin` - Next.js Image component handles this
- `node-loader` - Not needed with modern Next.js

---

## Added Packages (TypeScript Support)

```json
"devDependencies": {
  "@types/node": "^20.17.6",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "typescript": "^5.7.2"
}
```

This enables TypeScript for App Router components.

