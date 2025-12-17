# Deployment Guide - Cloudstream Systems Website

## 🚀 Quick Deployment to Netlify

### Prerequisites
- GitHub account
- Netlify account (free tier works)
- Git installed locally

### Step 1: Push to GitHub

```bash
# Navigate to project directory
cd /home/sandbox/craftedbycss/cssbuilds-tech

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Cloudstream Systems website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/cssbuilds-tech.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

#### Option A: Netlify UI (Recommended)

1. **Login to Netlify**
   - Go to https://app.netlify.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

   *Note: The `netlify.toml` file will automatically configure these settings*

4. **Set Environment Variables** (Optional)
   - Go to Site settings → Environment variables
   - Add variables from `.env.local.example`:
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_CONTACT_EMAIL`

5. **Deploy**
   - Netlify will automatically build and deploy
   - You'll get a URL like: `https://your-site-name.netlify.app`

#### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

### Step 3: Configure Custom Domain (Optional)

1. **Add Custom Domain**
   - In Netlify dashboard: Domain settings → Add custom domain
   - Enter: `cssbuilds.tech`

2. **Update DNS**
   - Add Netlify's nameservers to your domain registrar
   - Or add A/CNAME records as instructed by Netlify

3. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Usually takes a few minutes

## 🔧 Build Configuration

The project includes a `netlify.toml` file with optimal settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

## ✅ Pre-Deployment Checklist

- [ ] All pages build successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] Environment variables configured
- [ ] Contact form endpoint configured (if using external service)
- [ ] Analytics tracking code added (if needed)
- [ ] Social media links updated
- [ ] Contact information updated
- [ ] Project images added to `/public/images/`
- [ ] Favicon updated
- [ ] Meta tags and SEO configured

## 🔍 Testing After Deployment

1. **Functionality**
   - [ ] All pages load correctly
   - [ ] Navigation works on all pages
   - [ ] Contact form submits (if configured)
   - [ ] Project filters work
   - [ ] Mobile responsive on all pages

2. **Performance**
   - [ ] Run Lighthouse audit
   - [ ] Check page load times
   - [ ] Verify image optimization

3. **SEO**
   - [ ] Check meta tags
   - [ ] Verify sitemap
   - [ ] Test social media previews

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build fails with TypeScript errors
**Solution**: Run `npm run build` locally to see errors

**Issue**: Missing dependencies
**Solution**: Ensure `package.json` is committed and up to date

### Pages Not Loading

**Issue**: 404 errors on page routes
**Solution**: Verify `netlify.toml` redirects are configured

**Issue**: Environment variables not working
**Solution**: Check they're prefixed with `NEXT_PUBLIC_` for client-side access

### Styling Issues

**Issue**: TailwindCSS styles not applying
**Solution**: Verify `tailwind.config.ts` is correct and all files are included

## 📊 Post-Deployment

### Monitoring
- Set up Netlify Analytics (optional)
- Configure error tracking (Sentry, etc.)
- Set up uptime monitoring

### Continuous Deployment
- Every push to `main` branch will trigger automatic deployment
- Preview deployments for pull requests
- Rollback capability in Netlify dashboard

### Performance Optimization
- Enable Netlify's asset optimization
- Configure caching headers
- Use Netlify's CDN for global distribution

## 🔗 Useful Links

- **Netlify Docs**: https://docs.netlify.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Netlify Next.js Plugin**: https://github.com/netlify/netlify-plugin-nextjs

## 📞 Support

For deployment issues:
1. Check Netlify build logs
2. Review Next.js documentation
3. Check GitHub Issues for similar problems

---

**Happy Deploying! 🚀**
