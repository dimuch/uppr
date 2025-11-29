# Next.js File Upload & Disk Write Limitations

## The Big Problem 🚨

**Next.js deployed on serverless platforms (Vercel, Netlify, AWS Lambda) has a READ-ONLY filesystem**, except for the `/tmp` directory.

This creates significant challenges for file uploads and runtime disk operations.

---

## Core Issues

### 1. **Ephemeral File System**

```javascript
// ❌ This WILL FAIL in production (Vercel, Netlify, etc.)
export default async function handler(req, res) {
  const fs = require('fs');
  const path = require('path');
  
  // Trying to save to project directory
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'uploads', 'file.pdf'),
    fileBuffer
  );
  
  // Error: EROFS: read-only file system
  return res.json({ success: true });
}
```

**Why it fails:**
- Serverless functions run in isolated containers
- File system is **read-only** (except `/tmp`)
- Each request may run in a different container
- Files are **not shared** between function invocations
- Container is destroyed after execution

---

### 2. **/tmp Directory - Temporary and Limited**

```javascript
// ✅ This works, but files are TEMPORARY
export default async function handler(req, res) {
  const fs = require('fs');
  const path = require('path');
  
  // Save to /tmp (only writable directory)
  const tmpPath = path.join('/tmp', 'file.pdf');
  fs.writeFileSync(tmpPath, fileBuffer);
  
  // ⚠️ WARNING:
  // - File exists ONLY for this function execution
  // - Next request may run in different container (no file)
  // - Cold start = /tmp is cleared
  // - Limited space (512MB typical)
  // - Gets deleted after function timeout
  
  return res.json({ path: tmpPath }); // Path won't work later!
}
```

**Limitations of /tmp:**
- ⏰ **Temporary**: Cleared on cold starts
- 💾 **Limited Size**: Usually 512MB (Lambda), 1GB (some platforms)
- 🔄 **Not Shared**: Each function instance has its own /tmp
- ⚡ **Cleared on Timeout**: Files deleted when function terminates
- 🚫 **Not Accessible**: Can't serve files from /tmp via HTTP

---

### 3. **API Route Size & Time Limits**

```javascript
// API Route limitations
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb', // Default is 1mb
    },
    // Even with increased limit, serverless has hard limits:
    // - Vercel: 4.5MB request body max
    // - AWS Lambda: 6MB payload max
    // - Netlify: 6MB function payload max
  },
};

export default async function handler(req, res) {
  // ⚠️ Large file uploads will fail
  // ⚠️ Timeouts: 10-30 seconds typical
  // ⚠️ Memory limits: 128-1024MB typical
}
```

---

## Real-World Problems for UPPR Project

### Scenario 1: User Uploads Test Results as PDF
```javascript
// ❌ WRONG: Trying to save to public folder
export default async function handler(req, res) {
  const pdfBuffer = await generateTestResultPDF(req.body);
  
  // This works in development but FAILS in production
  fs.writeFileSync('./public/results/test-123.pdf', pdfBuffer);
  
  return res.json({ 
    url: '/results/test-123.pdf' // Won't exist in production!
  });
}
```

### Scenario 2: User Uploads Profile Image
```javascript
// ❌ WRONG: Saving to file system
export default async function handler(req, res) {
  const formData = await parseMultipartForm(req);
  const image = formData.files.avatar;
  
  // Fails: Can't write to public/uploads
  fs.writeFileSync(`./public/uploads/${image.name}`, image.buffer);
  
  return res.json({ url: `/uploads/${image.name}` });
}
```

### Scenario 3: Dynamic Image Processing
```javascript
// ❌ WRONG: Processing and saving images
export default async function handler(req, res) {
  const processedImage = await sharp(inputBuffer)
    .resize(800, 600)
    .toBuffer();
  
  // Can't save permanently
  fs.writeFileSync('./public/processed/image.jpg', processedImage);
}
```

---

## Why This Happens: Serverless Architecture

### Traditional Server (VPS, Dedicated Server)
```
┌─────────────────────────────────┐
│   Your Server (Always Running)  │
├─────────────────────────────────┤
│  ✅ Persistent File System       │
│  ✅ Read + Write anywhere        │
│  ✅ Files persist forever        │
│  ✅ Shared across all requests   │
│  ✅ No size limits (disk space)  │
└─────────────────────────────────┘
```

### Serverless (Vercel, AWS Lambda, Netlify)
```
Request 1                Request 2               Request 3
    ↓                        ↓                       ↓
┌──────────┐           ┌──────────┐            ┌──────────┐
│Container │           │Container │            │Container │
│  /tmp    │ (ephemeral│  /tmp    │ (different)│  /tmp    │
│  512MB   │           │  512MB   │            │  512MB   │
└──────────┘           └──────────┘            └──────────┘
     ↓                      ↓                       ↓
  Destroyed            Destroyed               Destroyed
  (no files)           (no files)              (no files)

❌ Read-only: /app, /public, /pages
✅ Writable: /tmp (temporary only)
```

---

## Solutions & Workarounds

### ✅ Solution 1: Cloud Storage (Recommended)

Upload to external storage services:

#### A. **AWS S3**
```javascript
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export default async function handler(req, res) {
  const s3 = new S3Client({ region: 'us-east-1' });
  
  const command = new PutObjectCommand({
    Bucket: 'uppr-uploads',
    Key: `test-results/${userId}/result.pdf`,
    Body: pdfBuffer,
    ContentType: 'application/pdf',
  });
  
  await s3.send(command);
  
  const url = `https://uppr-uploads.s3.amazonaws.com/test-results/${userId}/result.pdf`;
  return res.json({ url });
}
```

#### B. **Cloudinary** (Images/PDFs)
```javascript
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const result = await cloudinary.uploader.upload(base64Image, {
    folder: 'uppr/test-results',
    resource_type: 'auto',
  });
  
  return res.json({ url: result.secure_url });
}
```

#### C. **Vercel Blob** (Vercel-specific)
```javascript
import { put } from '@vercel/blob';

export default async function handler(req, res) {
  const blob = await put('test-result.pdf', pdfBuffer, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  
  return res.json({ url: blob.url });
}
```

#### D. **Supabase Storage**
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  const { data, error } = await supabase.storage
    .from('uploads')
    .upload(`test-results/${userId}/result.pdf`, pdfBuffer, {
      contentType: 'application/pdf',
    });
  
  const { data: { publicUrl } } = supabase.storage
    .from('uploads')
    .getPublicUrl(data.path);
  
  return res.json({ url: publicUrl });
}
```

---

### ✅ Solution 2: Database Storage (Small Files)

Store files as **Base64** or **Blob** in your database:

```javascript
import { getDBPoolData } from '../../mysql/mySQLClient';

export default async function handler(req, res) {
  const db = getDBPoolData();
  
  // Store file as BLOB or TEXT (Base64)
  const base64 = fileBuffer.toString('base64');
  
  await db.query(
    'INSERT INTO test_results (user_id, pdf_data) VALUES (?, ?)',
    [userId, base64]
  );
  
  // Later retrieve and serve
  return res.json({ success: true });
}

// Separate API route to serve file
export default async function serveFile(req, res) {
  const { id } = req.query;
  const db = getDBPoolData();
  
  const [rows] = await db.query(
    'SELECT pdf_data FROM test_results WHERE id = ?',
    [id]
  );
  
  const buffer = Buffer.from(rows[0].pdf_data, 'base64');
  
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="result.pdf"');
  res.send(buffer);
}
```

**⚠️ Limitations:**
- Only for small files (< 16MB for MySQL MEDIUMBLOB)
- Increases database size
- Slower retrieval than cloud storage
- Not recommended for images served frequently

---

### ✅ Solution 3: Self-Hosted Next.js

Deploy to a VPS/dedicated server instead of serverless:

```bash
# Deploy to your own server with persistent file system
- DigitalOcean Droplet
- AWS EC2
- Hetzner VPS
- Your own server

# Then you CAN write to disk:
fs.writeFileSync('./public/uploads/file.pdf', buffer);
// ✅ Works because it's a real server with persistent storage
```

**Deployment options:**
- Docker container on VPS
- PM2 on Ubuntu server
- Kubernetes cluster
- Traditional hosting

---

### ✅ Solution 4: Hybrid Approach

Use serverless for most routes, but self-host file upload routes:

```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/upload/:path*',
        destination: 'https://your-vps.com/upload/:path*', // VPS with persistent storage
      },
    ];
  },
};
```

---

## Recommended Solution for UPPR

### For Your Use Case:

1. **Test Result PDFs**: Use **Cloudinary** or **AWS S3**
   - Permanent storage
   - CDN delivery
   - Easy to implement

2. **User-uploaded Files**: Use **cloud storage**
   - S3 for files
   - Cloudinary for images
   - Vercel Blob (if on Vercel)

3. **Temporary Processing**: Use `/tmp`
   - Generate PDF in /tmp
   - Upload to cloud storage
   - Delete from /tmp
   - Return cloud URL

### Example Implementation:

```javascript
// pages/api/test/generate-result.js
import { generatePDF } from '@/utils/pdfGenerator';
import { uploadToS3 } from '@/utils/s3';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { answers, score, title } = req.body;
  
  try {
    // 1. Generate PDF in /tmp (only writable location)
    const tmpPath = path.join('/tmp', `result-${Date.now()}.pdf`);
    await generatePDF({ answers, score, title }, tmpPath);
    
    // 2. Read the file
    const pdfBuffer = fs.readFileSync(tmpPath);
    
    // 3. Upload to permanent storage (S3/Cloudinary)
    const cloudUrl = await uploadToS3(
      pdfBuffer,
      `test-results/${userId}/result-${Date.now()}.pdf`
    );
    
    // 4. Clean up /tmp (optional but recommended)
    fs.unlinkSync(tmpPath);
    
    // 5. Save URL to database
    await saveResultToDatabase({ userId, pdfUrl: cloudUrl, score, title });
    
    // 6. Return cloud URL (permanent link)
    return res.json({ 
      success: true, 
      url: cloudUrl 
    });
    
  } catch (error) {
    console.error('Error generating result:', error);
    return res.status(500).json({ error: 'Failed to generate result' });
  }
}
```

---

## Cost Comparison

| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **AWS S3** | 5GB, 20k requests | $0.023/GB | Large files, high traffic |
| **Cloudinary** | 25GB storage, 25GB bandwidth | $89/month | Images, transformations |
| **Vercel Blob** | 500MB | $0.10/GB | Vercel deployments |
| **Supabase Storage** | 1GB | $0.021/GB | Full-stack apps |
| **DigitalOcean Spaces** | - | $5/month (250GB) | Budget-friendly |

---

## Summary

### The Big Minus of Next.js:
❌ **No persistent file system in serverless deployments**

### Why it matters:
- Can't save uploaded files to disk
- Can't store generated files permanently
- /tmp is temporary and limited
- Must use external storage

### The Fix:
✅ Use cloud storage (S3, Cloudinary, Vercel Blob, etc.)

### For UPPR:
- Test results → Generate in /tmp → Upload to S3 → Store URL in MySQL
- User uploads → Direct upload to cloud → Save URL in database
- Images → Cloudinary for automatic optimization

---

## Migration Path for UPPR

1. **Add cloud storage integration** (choose one: S3, Cloudinary)
2. **Update API routes** to use /tmp + cloud upload
3. **Update database schema** to store file URLs instead of paths
4. **Update frontend** to display files from cloud URLs
5. **Test thoroughly** in development
6. **Deploy gradually** with fallbacks

This is a fundamental architectural difference between traditional servers and serverless Next.js!

