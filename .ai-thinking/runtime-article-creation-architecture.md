# Runtime Article Creation Architecture for UPPR

## Current Situation

✅ **Deployed to**: DigitalOcean Droplet (persistent file system)
✅ **Articles**: React components in `/components/articles/`
✅ **Build process**: Pre-rendered to static HTML
✅ **Benefits**: Fast loading, cached CSS, good SEO, version controlled

## The Challenge

User uploads new article at runtime → Need to:
1. ✅ Save as React component
2. ✅ Generate static HTML
3. ✅ Update sitemap.txt & robots.txt
4. ✅ Keep under version control
5. ✅ Integrate with existing articles

---

## 🏗️ Architecture Solutions

### **Option 1: Full Automation Pipeline (Recommended)**

#### Workflow:
```
User uploads article (via API)
    ↓
1. Generate React component file
    ↓
2. Save to /components/articles/
    ↓
3. Update database (add article metadata)
    ↓
4. Git commit + push
    ↓
5. Trigger Next.js rebuild
    ↓
6. Update sitemap.txt & robots.txt
    ↓
7. Restart Next.js server
    ↓
8. New article is live!
```

#### Implementation:

```javascript
// pages/api/admin/create-article.js
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';
import { getDBPoolData } from '../../../mysql/mySQLClient';

const execPromise = util.promisify(exec);

export default async function handler(req, res) {
  // 1. Authenticate admin user
  if (!isAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { 
    title, 
    content, 
    description, 
    tags, 
    category,
    author,
    englishTitle 
  } = req.body;

  try {
    // 2. Generate component filename from title
    const componentName = generateComponentName(title);
    const fileName = `${componentName}.js`;
    const filePath = path.join(
      process.cwd(), 
      'components', 
      'articles', 
      fileName
    );

    // 3. Check if file already exists
    if (fs.existsSync(filePath)) {
      return res.status(400).json({ 
        error: 'Article with this name already exists' 
      });
    }

    // 4. Generate React component code
    const componentCode = generateArticleComponent({
      componentName,
      title,
      content,
      description,
      tags,
      category,
    });

    // 5. Write component file to disk
    fs.writeFileSync(filePath, componentCode, 'utf8');
    console.log(`✅ Created: ${filePath}`);

    // 6. Update articles index (export from index.js)
    updateArticlesIndex(componentName, fileName);

    // 7. Add article to database
    const db = getDBPoolData();
    const articleURL = `/blog/articles/${componentName.toLowerCase()}`;
    
    await db.query(`
      INSERT INTO uppr_ssr.articles 
      (title, englishTitle, description, link, pageComponent, author, published)
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `, [title, englishTitle, description, articleURL, componentName, author]);

    // 8. Commit to Git
    await execPromise(`
      cd ${process.cwd()} &&
      git add components/articles/${fileName} &&
      git add components/articles/index.js &&
      git commit -m "Add new article: ${title}" &&
      git push origin main
    `);
    console.log('✅ Committed to Git');

    // 9. Rebuild Next.js
    console.log('🔄 Starting rebuild...');
    await execPromise('npm run build');
    console.log('✅ Rebuild complete');

    // 10. Update sitemap.txt
    await updateSitemap(articleURL);
    console.log('✅ Sitemap updated');

    // 11. Restart Next.js server (PM2 or systemd)
    await execPromise('pm2 restart uppr');
    console.log('✅ Server restarted');

    return res.json({ 
      success: true, 
      articleURL,
      componentName,
    });

  } catch (error) {
    console.error('Error creating article:', error);
    
    // Rollback: delete file if it was created
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    return res.status(500).json({ 
      error: 'Failed to create article',
      details: error.message 
    });
  }
}

// Generate component name from title
function generateComponentName(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Generate React component code
function generateArticleComponent({ componentName, title, content, description }) {
  return `import React from 'react';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';
import styles from './commonArticleStyles.module.scss';

export default function ${componentName}({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          ${parseContentToJSX(content)}
        </div>
      </div>

      <ArticleFooter articleData={articleData} />
    </div>
  );
}
`;
}

// Parse content to JSX
function parseContentToJSX(content) {
  // Convert markdown or HTML to JSX
  // This is a simplified example
  const sections = content.split('\n\n');
  
  return sections.map((section, index) => {
    if (section.startsWith('# ')) {
      return `<h2 className={styles.subTitle}>${section.slice(2)}</h2>`;
    }
    return `<p className={styles.articleText}>${section}</p>`;
  }).join('\n          ');
}

// Update articles/index.js to export new component
function updateArticlesIndex(componentName, fileName) {
  const indexPath = path.join(
    process.cwd(), 
    'components', 
    'articles', 
    'index.js'
  );
  
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add export
  const exportLine = `export { default as ${componentName} } from './${fileName.replace('.js', '')}';`;
  
  // Append before the last line or at the end
  indexContent = indexContent.trim() + '\n' + exportLine + '\n';
  
  fs.writeFileSync(indexPath, indexContent, 'utf8');
}

// Update sitemap.txt
async function updateSitemap(articleURL) {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.txt');
  
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const newEntry = `https://uppr.com.ua${articleURL}`;
  
  if (!sitemap.includes(newEntry)) {
    sitemap += `\n${newEntry}`;
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    // Commit sitemap update
    await execPromise(`
      cd ${process.cwd()} &&
      git add public/sitemap.txt &&
      git commit -m "Update sitemap: ${articleURL}" &&
      git push origin main
    `);
  }
}

// Check if user is admin
function isAdmin(req) {
  // Implement your admin authentication logic
  const token = req.headers.authorization;
  // Verify token, check database, etc.
  return true; // Placeholder
}
```

---

## ⚙️ Setup Requirements

### 1. **Git Configuration on Server**

```bash
# On your DigitalOcean droplet

# Configure git user
git config --global user.name "UPPR Bot"
git config --global user.email "bot@uppr.com.ua"

# Set up SSH key for GitHub (no password prompts)
ssh-keygen -t ed25519 -C "bot@uppr.com.ua"
cat ~/.ssh/id_ed25519.pub
# Add this key to GitHub repo → Settings → Deploy Keys → Add deploy key
# ✅ Enable "Allow write access"

# Or use personal access token
git remote set-url origin https://<TOKEN>@github.com/dimuch/uppr.git
```

---

### 2. **Process Manager Setup (PM2)**

```bash
# Install PM2
npm install -g pm2

# Start Next.js with PM2
pm2 start npm --name "uppr" -- start

# Save PM2 configuration
pm2 save

# Auto-restart on server reboot
pm2 startup
```

**Update restart script:**
```javascript
// In your API route
await execPromise('pm2 restart uppr --update-env');
```

---

### 3. **Build Optimization**

Since rebuilding takes time, implement **incremental builds**:

```javascript
// next.config.js
module.exports = {
  // ... existing config
  
  // Incremental Static Regeneration (if using App Router)
  experimental: {
    incrementalCacheHandlerPath: './cache-handler.js',
  },
};
```

**Or**: Trigger builds in background:

```javascript
// pages/api/admin/create-article.js
export default async function handler(req, res) {
  // ... save article ...
  
  // Return immediately
  res.json({ 
    success: true, 
    message: 'Article created. Build in progress...' 
  });
  
  // Trigger rebuild asynchronously (non-blocking)
  triggerRebuildAsync();
}

async function triggerRebuildAsync() {
  // Run in background
  exec('npm run build && pm2 restart uppr', (error, stdout, stderr) => {
    if (error) {
      console.error('Build error:', error);
      // Send notification to admin
      notifyAdmin('Build failed', error.message);
    } else {
      console.log('✅ Build successful');
      notifyAdmin('New article is live!');
    }
  });
}
```

---

## 📝 Content Editor Interface

### Option A: Custom Admin Panel

```javascript
// pages/admin/create-article.js
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Use a rich text editor
const RichTextEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const response = await fetch('/api/admin/create-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          description: content.slice(0, 160),
          author: 'Ivanna Tabachuk',
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert(`Article created! URL: ${data.articleURL}`);
        // Redirect or reset form
      }
    } catch (error) {
      alert('Error creating article');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div>
      <h1>Create New Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <RichTextEditor
          value={content}
          onChange={setContent}
          placeholder="Write your article..."
        />
        
        <button type="submit" disabled={isCreating}>
          {isCreating ? 'Creating & Deploying...' : 'Create Article'}
        </button>
      </form>
    </div>
  );
}
```

---

### Option B: Use Existing Headless CMS

#### **Payload CMS** (Self-hosted, integrates with Next.js)

```bash
npm install payload
```

```javascript
// payload.config.js
import { buildConfig } from 'payload/config';

export default buildConfig({
  collections: [
    {
      slug: 'articles',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'richText', required: true },
        { name: 'author', type: 'text' },
      ],
      hooks: {
        afterChange: [
          async ({ doc }) => {
            // Trigger article component generation
            await fetch('http://localhost:3000/api/admin/create-article', {
              method: 'POST',
              body: JSON.stringify(doc),
            });
          },
        ],
      },
    },
  ],
});
```

---

## 🔐 Security Considerations

### 1. **Admin Authentication**

```javascript
// middleware to protect admin routes
export default function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  
  if (!verifyAdminToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  next();
}

// Verify token against database
function verifyAdminToken(token) {
  // Check JWT, session, or database
  return true; // Implement properly
}
```

### 2. **Input Sanitization**

```javascript
import sanitizeHtml from 'sanitize-html';

function sanitizeContent(html) {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'h2', 'h3', 'strong', 'em', 'ul', 'ol', 'li', 'a'],
    allowedAttributes: {
      'a': ['href', 'target'],
    },
  });
}
```

### 3. **Rate Limiting**

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 articles per 15 minutes
});

export default limiter(createArticleHandler);
```

---

## 🚀 Deployment Strategy

### Option 1: Manual Trigger (Safer)
```
1. User creates article → Saved as draft
2. Admin reviews → Approves
3. System generates component + rebuilds
4. Article goes live
```

### Option 2: Automatic (Faster)
```
1. User creates article
2. Immediately generated + deployed
3. Admin can edit/delete later
```

### Option 3: Staged Deployment
```
1. Create article in 'staging' branch
2. Preview on staging.uppr.com.ua
3. Approve → Merge to main → Deploy to production
```

---

## 📊 Monitoring & Notifications

```javascript
// Send notification when build completes
import nodemailer from 'nodemailer';

async function notifyAdmin(subject, message) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: 'bot@uppr.com.ua',
    to: 'admin@uppr.com.ua',
    subject,
    text: message,
  });
}

// Usage
await notifyAdmin(
  'New Article Created',
  `Article "${title}" has been published at ${articleURL}`
);
```

---

## ⚡ Performance Optimization

### 1. **Incremental Builds**
```javascript
// Only rebuild changed pages
await execPromise('npm run build -- --experimental-build-mode=compile');
```

### 2. **Background Processing**
```javascript
// Use a job queue (Bull, BeeQueue)
import Queue from 'bull';

const buildQueue = new Queue('build-queue');

buildQueue.process(async (job) => {
  await execPromise('npm run build');
  await execPromise('pm2 restart uppr');
});

// In API route
buildQueue.add({ articleId: newArticle.id });
res.json({ success: true, message: 'Building in background...' });
```

### 3. **Caching**
```javascript
// Cache built pages for quick serving
// Next.js handles this automatically with static export
```

---

## 🔄 Alternative: Database-Driven with Static Fallback

Instead of generating React components, store articles in database and use **Incremental Static Regeneration (ISR)**:

```javascript
// pages/blog/articles/[articleId].js
export async function getStaticProps({ params }) {
  const article = await getArticleFromDB(params.articleId);
  
  return {
    props: { article },
    revalidate: 60, // Re-generate every 60 seconds
  };
}

export async function getStaticPaths() {
  const articles = await getAllArticles();
  
  return {
    paths: articles.map(a => ({ params: { articleId: a.slug } })),
    fallback: 'blocking', // Generate new pages on-demand
  };
}
```

**Benefits:**
- No rebuild needed
- Articles stored in database
- Still get static HTML
- Easier to manage

**Drawbacks:**
- Not "true" components in codebase
- Less version control
- Different architecture

---

## 📝 Summary: Recommended Approach

For UPPR on DigitalOcean:

### **Phase 1: Quick Win**
1. Create admin API route that writes React component files
2. Commit to git automatically
3. Trigger background rebuild
4. Update sitemap
5. Restart server

### **Phase 2: Optimization**
1. Add job queue for builds
2. Implement ISR for faster updates
3. Add preview mode
4. Set up staging environment

### **Phase 3: Advanced**
1. Integrate headless CMS (Payload/Strapi)
2. Multi-stage deployments
3. A/B testing new articles
4. Analytics integration

---

## Code Structure

```
/api/admin/
  ├── create-article.js       # Main creation endpoint
  ├── update-article.js       # Edit existing
  ├── delete-article.js       # Remove article
  └── rebuild-site.js         # Manual rebuild trigger

/utils/
  ├── componentGenerator.js   # Generate React components
  ├── gitOperations.js        # Git commit/push
  ├── sitemapUpdater.js       # Update SEO files
  └── buildTrigger.js         # Trigger Next.js build

/pages/admin/
  └── articles/
      ├── new.js              # Create article form
      ├── [id]/edit.js        # Edit article form
      └── index.js            # List all articles
```

This gives you the best of both worlds:
- ✅ Dynamic article creation at runtime
- ✅ Static HTML performance
- ✅ Version control
- ✅ SEO optimization
- ✅ Full control over content

