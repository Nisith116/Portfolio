# Git & Deployment Setup Guide

## 🚀 Quick Start to Deploy Your Portfolio

### 1. Initial GitHub Setup

```bash
# Initialize git in your project (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"
```

### 2. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name it: `portfolio` (or your preferred name)
4. Click "Create repository"

### 3. Connect Local to GitHub

```bash
# Add your repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

#### Option A: Using npm scripts (Recommended)

```bash
# Install dependencies (if not done)
npm install

# Build project
npm run build

# Deploy (this pushes to gh-pages branch)
npm run deploy
```

#### Option B: Manual GitHub Pages Setup

```bash
# Build the project
npm run build

# In GitHub repository settings:
# Settings → Pages → Source: Deploy from branch → gh-pages
```

### 5. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll to "GitHub Pages" section
4. Select `gh-pages` branch as source
5. Your site will be live at: `https://yourusername.github.io/portfolio`

## 📝 Important Files

- `.gitignore` - Files to ignore from version control
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts

## 🔄 Regular Updates

After making changes to your portfolio:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Update portfolio with new projects"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## ✅ Verification

After deployment, check:

1. Visit: `https://yourusername.github.io/portfolio`
2. Check that all sections load properly
3. Test responsiveness on mobile
4. Verify animations are smooth
5. Test contact form
6. Check social links

## 🆘 Troubleshooting

### Pages not showing?
- Wait 1-2 minutes for deployment to complete
- Check "Actions" tab to see deployment status
- Verify `gh-pages` branch exists in repository

### Build fails?
```bash
npm run lint
npm run build
```

### Want to use custom domain?
1. Add CNAME file in `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Docs](https://pages.github.com/)

---

**You're all set! Your portfolio is now live and ready for the world to see! 🎉**
