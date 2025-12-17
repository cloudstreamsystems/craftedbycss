# Cloudstream Systems Website - Next.js Rebuild

> **...just build**

Modern rebuild of cssbuilds.tech using Next.js 15, TypeScript, and TailwindCSS for Netlify deployment.

## 🚀 Quick Start

```bash
# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --use-npm

# Install additional dependencies
npm install framer-motion lucide-react

# Run development server
npm run dev
```

## 📁 Project Structure

```
cssbuilds-tech/
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── projects/
│   │   └── page.tsx         # Projects/Portfolio page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── MobileMenu.tsx   # Mobile navigation
│   ├── home/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About preview
│   │   ├── Services.tsx     # Services grid
│   │   ├── Stats.tsx        # Statistics section
│   │   └── CTA.tsx          # Call to action
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button
│   │   ├── Card.tsx         # Card component
│   │   └── Container.tsx    # Max-width container
│   └── projects/
│       ├── ProjectCard.tsx  # Project card
│       └── ProjectFilter.tsx # Filter controls
├── lib/
│   ├── data/
│   │   ├── projects.ts      # Projects data
│   │   ├── services.ts      # Services data
│   │   └── content.ts       # Site content
│   └── utils.ts             # Utility functions
├── public/
│   ├── images/              # Optimized images
│   ├── icons/               # SVG icons
│   └── favicon.ico
└── styles/
    └── globals.css          # Global styles
```

## 🎨 Design System

### Colors (from Elementor)
```css
--primary: #7076C6      /* Purple */
--secondary: #4B3A5E    /* Dark Purple */
--accent: #7177C7       /* Light Purple */
--text: #FFFFFF         /* White */
--background: #F4F5FF   /* Light Background */
```

### Typography
- **Headings**: Merriweather Sans (Bold, 700)
- **Body**: Merriweather Sans (Regular, 400)
- **Accent**: Poppins

### Spacing
- Border Radius: 32px (cards), 35px (gallery items)
- Padding: 20px standard
- Section Padding: 200px top, 20px bottom

## 📄 Pages Overview

### 1. Home Page
**Sections:**
- Hero with gradient background and CTA
- About preview with image
- Services grid (4 services)
- Stats counter (Projects, Experience, Clients, Reviews)
- Process timeline (4 elements)
- Recent projects showcase
- CTA section

### 2. About Page
**Content:**
- Company mission and vision
- Team introduction
- Key milestones
- Values and approach

### 3. Services Page
**Services:**
1. **Brand Identities** - Logo design, brand guidelines
2. **Website/App Design** - UI/UX, responsive design
3. **Art Direction** - Creative direction, visual strategy
4. **Development** - Full-stack web development

### 4. Projects Page
**Features:**
- Filterable gallery (All, Web Design, Branding, UI/UX)
- Project cards with hover effects
- Modal/detail view for each project
- Categories: Web Development, Social Media, Branding

**Projects to Include:**
- ATLI Institute
- Castor Oil Branding
- Flint Ecommerce
- Royal Haven Website
- Mobile UI designs
- Various client work

### 5. Contact Page
**Elements:**
- Contact form
- Location information
- Social media links
- Email and contact details

## 🔧 Implementation Guide

See `IMPLEMENTATION.md` for detailed component specifications and code examples.

## 🚢 Deployment

### GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit: Next.js rebuild"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Netlify Configuration
Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://cssbuilds.tech
NEXT_PUBLIC_CONTACT_EMAIL=contact@cssbuilds.tech
```

## 📦 Assets Migration

Images are located in:
```
../u157307034.20250919011728/domains/cssbuilds.tech/public_html/wp-content/uploads/2025/09/
```

**Key assets to copy:**
- Logo: `cropped-Untitled-600-x-600-px-874-x-620-px-scaled-1.png`
- Hero images: `Website-Hero.png`, `Hero-Vid.mp4`
- Project images: All project screenshots
- Icons and SVGs: `Asset-*.svg` files

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ SEO optimized with Next.js metadata
- ✅ Fast page loads with image optimization
- ✅ Smooth animations with Framer Motion
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Static generation for Netlify
- ✅ Contact form integration ready

## 📝 Content Source

Original WordPress content extracted from:
- Database: `../u157307034_pOZ2A.sql`
- Files: `../u157307034.20250919011728/`
- Export: `../u157307034.20250919011728/.../wxr.xml`

## 🔗 Links

- **Live Site**: https://cssbuilds.tech
- **GitHub**: (to be added)
- **Netlify**: (to be configured)

---

**Built with ❤️ by Cloudstream Systems**
