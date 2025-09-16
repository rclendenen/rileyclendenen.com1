# 🔧 GitHub Setup Troubleshooting Guide

## 🚨 Common Issues & Solutions

### Issue 1: "Repository not found" or "Remote origin already exists"

**Solution:**
```bash
# Check if you already have a remote
git remote -v

# If you see an existing remote, remove it first
git remote remove origin

# Then add your new repository
git remote add origin https://github.com/YOUR_USERNAME/rileyclendenen.com.git
```

### Issue 2: "Authentication failed" or "Permission denied"

**Solutions:**

#### Option A: Use Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with "repo" permissions
3. Use token as password when prompted

#### Option B: Use GitHub CLI
```bash
# Install GitHub CLI first, then:
gh auth login
gh repo create rileyclendenen.com --public
```

### Issue 3: "Git is not recognized" (Windows)

**Solution:**
1. Download Git from [git-scm.com](https://git-scm.com)
2. Install with default settings
3. Restart your terminal/command prompt

### Issue 4: "Repository already exists on GitHub"

**Solution:**
1. Go to GitHub and delete the existing repository
2. Or use a different repository name
3. Or link to the existing repository

## 📋 Step-by-Step Setup (Fresh Start)

### Step 1: Create Repository on GitHub

1. **Go to [github.com](https://github.com)** and sign in
2. **Click the "+" icon** → "New repository"
3. **Repository name**: `rileyclendenen.com`
4. **Description**: "Personal portfolio website"
5. **Visibility**: Public
6. **DON'T** check "Add a README file"
7. **DON'T** check "Add .gitignore"
8. **DON'T** check "Choose a license"
9. **Click "Create repository"**

### Step 2: Initialize Git Locally

Open your terminal/command prompt in your project folder and run:

```bash
# Navigate to your project folder
cd "C:\Users\19728\OneDrive\Desktop\rileyclendenen.com"

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio website setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/rileyclendenen.com.git

# Push to GitHub
git push -u origin main
```

### Step 3: If You Get Authentication Error

**Use Personal Access Token:**

1. **Go to GitHub** → Your profile → Settings
2. **Developer settings** → Personal access tokens → Tokens (classic)
3. **Generate new token** → "Generate new token (classic)"
4. **Note**: "Portfolio website"
5. **Expiration**: 90 days (or your preference)
6. **Scopes**: Check "repo" (full control of private repositories)
7. **Generate token** and copy it
8. **Use this token as your password** when Git asks for credentials

## 🔍 Alternative: GitHub Web Interface Upload

If Git command line isn't working, use the web interface:

### Step 1: Prepare Files
1. **Create a ZIP file** of your project folder
2. **Extract it** to a new folder (to avoid hidden files)

### Step 2: Upload via GitHub
1. **Go to your new repository** on GitHub
2. **Click "uploading an existing file"**
3. **Drag and drop** these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `package.json`
   - `vercel.json`
   - `DEPLOYMENT.md`
   - `GITHUB_SETUP.md`
4. **Create `api` folder** and upload `contact.js` into it
5. **Commit message**: "Initial portfolio website setup"
6. **Click "Commit changes"**

## 🧪 Test Your Setup

After successful upload, you should see:
- ✅ All your files in the repository
- ✅ A green "main" branch indicator
- ✅ Your README.md displayed on the repository page

## 🚀 Next: Deploy to Vercel

Once GitHub is working:

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Import** your `rileyclendenen.com` repository
5. **Click "Deploy"**

## 🆘 Still Having Issues?

**Tell me:**
1. What error message are you seeing?
2. Are you using Windows, Mac, or Linux?
3. Do you have Git installed?
4. Are you trying to create a new repo or link to existing?

**Quick fixes to try:**
- Restart your terminal/command prompt
- Clear Git credentials: `git config --global --unset user.name` and `git config --global --unset user.email`
- Use GitHub Desktop app instead of command line
- Try creating the repository with a different name

---

**I'm here to help! Let me know what specific error you're encountering.**

