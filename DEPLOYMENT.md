# 🚀 Deployment Guide - GitHub + Vercel

This guide will walk you through deploying your portfolio website to GitHub and Vercel for free hosting with a custom domain.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account
- ✅ Your portfolio files ready

## 🔧 Step 1: Set Up GitHub Repository

### Create a New Repository

1. **Go to GitHub** and click "New repository"
2. **Repository name**: `rileyclendenen.com` (or your preferred name)
3. **Description**: "Personal portfolio website - Remote Assistant & Website Builder"
4. **Visibility**: Public (for free hosting)
5. **Initialize**: Don't check "Add a README" (we already have one)
6. **Click "Create repository"**

### Upload Your Files

#### Option A: Using GitHub Web Interface
1. **Click "uploading an existing file"**
2. **Drag and drop** all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `package.json`
   - `.gitignore`
   - `vercel.json`
   - `api/contact.js` (create the `api` folder first)
3. **Commit message**: "Initial portfolio website setup"
4. **Click "Commit changes"**

#### Option B: Using Git Command Line
```bash
# Navigate to your project folder
cd rileyclendenen.com

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website setup"

# Add GitHub remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/rileyclendenen.com.git

# Push to GitHub
git push -u origin main
```

## 🌐 Step 2: Deploy to Vercel

### Connect GitHub to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import Git Repository**:
   - Find your `rileyclendenen.com` repository
   - Click "Import"

### Configure Vercel Project

1. **Project Name**: `rileyclendenen-portfolio` (or your preference)
2. **Framework Preset**: Other (since it's a static site)
3. **Root Directory**: `./` (leave as default)
4. **Build Command**: Leave empty (static site)
5. **Output Directory**: Leave empty (static site)
6. **Install Command**: Leave empty

### Deploy

1. **Click "Deploy"**
2. **Wait for deployment** (usually takes 1-2 minutes)
3. **Your site is live!** You'll get a URL like `https://rileyclendenen-portfolio.vercel.app`

## 🔗 Step 3: Set Up Custom Domain (Optional)

### Add Custom Domain in Vercel

1. **Go to your project dashboard** in Vercel
2. **Click "Settings"** → **"Domains"**
3. **Add your domain**: `rileyclendenen.com`
4. **Follow Vercel's DNS instructions**

### Configure DNS

If you own `rileyclendenen.com`:

1. **Go to your domain registrar** (GoDaddy, Namecheap, etc.)
2. **Add DNS records** as instructed by Vercel:
   - **A Record**: `@` → `76.76.19.61`
   - **CNAME**: `www` → `cname.vercel-dns.com`

## 📧 Step 4: Set Up Contact Form (Optional)

### Option A: Use Vercel's Built-in Form Handling

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Login**: `vercel login`
3. **Deploy**: `vercel --prod`

### Option B: Add Email Service (Recommended)

#### Using Resend (Free tier available)

1. **Sign up at [resend.com](https://resend.com)**
2. **Get your API key**
3. **Add environment variable in Vercel**:
   - Go to Project Settings → Environment Variables
   - Add: `RESEND_API_KEY` = `your_api_key_here`
4. **Update `api/contact.js`**:
   - Uncomment the Resend code section
   - Replace `riley@rileyclendenen.com` with your email

#### Using SendGrid

1. **Sign up at [sendgrid.com](https://sendgrid.com)**
2. **Create API key**
3. **Add environment variable**: `SENDGRID_API_KEY`
4. **Update the contact form code** to use SendGrid

## 🔄 Step 5: Set Up Automatic Deployments

### Automatic Deployments are Already Set Up!

- **Every push to main branch** = automatic deployment
- **Pull requests** = preview deployments
- **No manual deployment needed**

### Workflow

1. **Make changes** to your files locally
2. **Commit and push** to GitHub
3. **Vercel automatically deploys** the changes
4. **Your site updates** within minutes

## 🛠️ Step 6: Customize Your Content

### Before Going Live

1. **Update personal information** in `index.html`
2. **Add your real photos** (replace placeholder URLs)
3. **Add your portfolio projects** with real links
4. **Update contact information**
5. **Add real testimonials** (with permission)
6. **Test the contact form**

### Image Optimization

For best performance:
- **Compress images** using tools like TinyPNG
- **Use WebP format** when possible
- **Optimize file sizes** (aim for <500KB per image)

## 📊 Step 7: Analytics & SEO

### Add Google Analytics

1. **Create Google Analytics account**
2. **Get tracking ID**
3. **Add to `index.html`** before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### SEO Optimization

Your site already includes:
- ✅ Meta descriptions
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Proper heading structure

Additional recommendations:
- **Submit to Google Search Console**
- **Create a sitemap.xml**
- **Add structured data markup**

## 🚨 Troubleshooting

### Common Issues

**Deployment fails:**
- Check that all files are committed to GitHub
- Verify `vercel.json` syntax
- Check Vercel build logs

**Contact form not working:**
- Verify API endpoint is deployed
- Check browser console for errors
- Test with a simple message first

**Images not loading:**
- Check image URLs are correct
- Verify images are committed to repository
- Use relative paths for local images

**Custom domain not working:**
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Verify domain is added in Vercel

### Getting Help

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Help**: [docs.github.com](https://docs.github.com)
- **Check build logs** in Vercel dashboard

## 🎉 You're Live!

Once deployed, your portfolio will be available at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: `https://rileyclendenen.com` (if configured)

### Next Steps

1. **Share your portfolio** with potential clients
2. **Update regularly** with new projects
3. **Monitor analytics** to see visitor engagement
4. **Keep content fresh** and relevant

---

**Congratulations! Your professional portfolio is now live and ready to help you grow your business! 🚀**

