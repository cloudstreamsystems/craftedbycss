# Git & GitHub Setup Guide

## 📋 Prerequisites

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `cssbuilds-tech` (or your preferred name)
   - Description: "Modern rebuild of Cloudstream Systems website"
   - Keep it **Private** or **Public** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

## 🔧 Local Git Configuration

Run these commands in `/home/sandbox/craftedbycss`:

```bash
# 1. Configure Git with YOUR details
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "feat: Initial commit with documentation and implementation guide

- Add comprehensive implementation guide
- Document design system from WordPress/Elementor
- Include component specifications and code examples
- Add deployment instructions for Netlify
- Extract project and service data structures"

# 4. Ensure you're on main branch
git branch -M main

# 5. Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/cssbuilds-tech.git

# 6. Push to GitHub
git push -u origin main
```

## 🔐 Authentication

If you encounter authentication issues:

### Option 1: Personal Access Token (Recommended)
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use token as password when pushing

### Option 2: SSH Key
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Then use SSH remote URL:
git remote set-url origin git@github.com:YOUR_USERNAME/cssbuilds-tech.git
```

## ✅ Verify Setup

After pushing, verify:
```bash
# Check remote
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/cssbuilds-tech.git (fetch)
# origin  https://github.com/YOUR_USERNAME/cssbuilds-tech.git (push)
```

## 📝 Commit Message Convention

For future commits, use conventional commits:

```bash
# Features
git commit -m "feat: Add hero section component"

# Bug fixes
git commit -m "fix: Resolve mobile menu toggle issue"

# Documentation
git commit -m "docs: Update README with deployment steps"

# Styling
git commit -m "style: Adjust button hover effects"

# Refactoring
git commit -m "refactor: Optimize image loading"

# Performance
git commit -m "perf: Implement lazy loading for images"

# Tests
git commit -m "test: Add unit tests for Button component"

# Build/CI
git commit -m "build: Update dependencies"
```

## 🚀 Next Steps

After pushing to GitHub:
1. ✅ Repository is version controlled
2. ✅ Ready to start Next.js implementation
3. ✅ Can connect to Netlify for deployment
4. ✅ Collaboration ready (if needed)

---

**Note**: Keep this file for reference. It won't be committed to the repository.
