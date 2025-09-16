# 🔧 GitHub + Vercel Troubleshooting Guide

## 🚨 Current Issue: Vercel Deployment Error

The error `The 'functions' property cannot be used in conjunction with the 'builds' property` suggests a configuration conflict. I've simplified the `vercel.json` to fix this.

## 📋 Step-by-Step GitHub Connection Check

### Step 1: Verify GitHub Repository Exists

**Check these things:**

1. **Go to [github.com](https://github.com)** and sign in
2. **Look for your repository** named `rileyclendenen.com` (or similar)
3. **Verify it's PUBLIC** (not private)
4. **Check that all files are there:**
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ `package.json`
   - ✅ `vercel.json`
   - ✅ `api/contact.js`

### Step 2: Test Repository Access

**Try accessing your repository directly:**
- URL should be: `https://github.com/YOUR_USERNAME/rileyclendenen.com`
- You should see all your files
- The repository should be public

### Step 3: Check Vercel GitHub Connection

**In Vercel dashboard:**

1. **Go to [vercel.com](https://vercel.com)**
2. **Click your profile** → **Settings**
3. **Click "Git"** in the left sidebar
4. **Check if GitHub is connected:**
   - Should show "Connected" next to GitHub
   - Should show your GitHub username
   - Should list your repositories

### Step 4: Reconnect GitHub (If Needed)

**If GitHub isn't connected:**

1. **In Vercel Settings** → **Git**
2. **Click "Connect"** next to GitHub
3. **Authorize Vercel** to access your repositories
4. **Grant permissions** for repository access

## 🔄 Alternative Deployment Methods

### Method 1: Manual File Upload to Vercel

**If GitHub connection is problematic:**

1. **Go to Vercel dashboard**
2. **Click "New Project"**
3. **Click "Browse Templates"**
4. **Choose "Empty" or "Static Site"**
5. **Upload your files manually:**
   - Drag and drop all files
   - Make sure `api/contact.js` is in an `api` folder
6. **Deploy**

### Method 2: Use Vercel CLI

**Install and deploy via command line:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project folder
vercel

# Follow the prompts
```

### Method 3: GitHub Web Interface + Vercel

**If local Git isn't working:**

1. **Create repository on GitHub** via web interface
2. **Upload files** via GitHub web interface
3. **Connect to Vercel** from the repository

## 🛠️ Quick Fixes to Try

### Fix 1: Simplify Configuration

I've already simplified your `vercel.json` to just:
```json
{
  "version": 2,
  "name": "riley-clendenen-portfolio"
}
```

### Fix 2: Remove Problematic Files

**Temporarily remove these files to test:**
- `api/contact.js` (we can add it back later)
- `vercel.json` (let Vercel auto-detect)

### Fix 3: Test with Minimal Setup

**Create a test version with just:**
- `index.html`
- `styles.css`
- `script.js`

## 🔍 Diagnostic Questions

**Please check and tell me:**

1. **Can you see your repository on GitHub?** (What's the exact URL?)
2. **Is the repository public or private?**
3. **Are all your files visible in the GitHub repository?**
4. **In Vercel, do you see your GitHub repositories when you try to import?**
5. **What's your GitHub username?** (so I can help with the exact URL)

## 🚀 Immediate Action Plan

### Option A: Try Again with Simplified Config

1. **Commit the simplified `vercel.json`** to GitHub
2. **Try deploying again** in Vercel
3. **Should work now** without the configuration conflict

### Option B: Start Fresh

1. **Delete the current Vercel project**
2. **Create a new project** in Vercel
3. **Import your GitHub repository** again
4. **Use the simplified configuration**

### Option C: Manual Upload

1. **Create new Vercel project**
2. **Choose "Empty" template**
3. **Upload files manually**
4. **Deploy without GitHub connection**

## 📞 What I Need to Help You

**Please share:**

1. **Your GitHub repository URL** (e.g., `https://github.com/username/repo-name`)
2. **Screenshot of your GitHub repository** (showing the files)
3. **Screenshot of Vercel error** (if any)
4. **Whether you can see your repo in Vercel's import list**

## 🎯 Expected Outcome

After fixing the configuration:
- ✅ **Vercel deployment succeeds**
- ✅ **Your portfolio goes live**
- ✅ **Contact form works** (if API is deployed)
- ✅ **Automatic deployments** from GitHub

---

**Let me know what you find when you check these things, and I'll help you get it working!**

