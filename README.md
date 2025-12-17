# Cloudstream Systems Website

> **...just build**

Modern, responsive website for Cloudstream Systems built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- ✅ **Fully Responsive Design** - Optimized for all devices
- ✅ **Modern Tech Stack** - Next.js 16, TypeScript, TailwindCSS 4
- ✅ **Smooth Animations** - Framer Motion for engaging interactions
- ✅ **SEO Optimized** - Built-in Next.js metadata and optimization
- ✅ **Fast Performance** - Static generation and image optimization
- ✅ **Type Safe** - Full TypeScript implementation
- ✅ **Netlify Ready** - Configured for seamless deployment

## 📁 Project Structure

```
cssbuilds-tech/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects gallery
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── home/              # Home page sections
│   ├── layout/            # Header & Footer
│   ├── projects/          # Project components
│   └── ui/                # Reusable UI components
├── lib/
│   ├── data/              # Data files (projects, services)
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: `#7076C6` (Purple)
- **Secondary**: `#4B3A5E` (Dark Purple)
- **Accent**: `#7177C7` (Light Purple)
- **Background**: `#F4F5FF` (Light Background)

### Typography
- **Headings**: Merriweather Sans (Bold, 700)
- **Body**: Merriweather Sans (Regular, 400)

## 🛠️ Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Pages

1. **Home** (`/`) - Hero, About, Stats, Services, Process, Projects, CTA
2. **About** (`/about`) - Mission, Vision, Story, Values, Team
3. **Services** (`/services`) - Detailed service offerings and process
4. **Projects** (`/projects`) - Filterable portfolio gallery
5. **Contact** (`/contact`) - Contact form and information

## 🚢 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Push code to GitHub
   - Connect repository to Netlify

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file is already configured

3. **Set Environment Variables**
   - Add environment variables from `.env.local.example`

4. **Deploy**
   - Netlify will automatically build and deploy

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Content

**Projects**: Edit `/lib/data/projects.ts`
**Services**: Edit `/lib/data/services.ts`

## 📦 Dependencies

### Core
- Next.js 16.0.3
- React 19.2.0
- TypeScript 5

### UI & Styling
- TailwindCSS 4
- Framer Motion 12
- Lucide React (icons)
- clsx & tailwind-merge

## 🎯 Performance

- Static generation for optimal performance
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minimal bundle size

## 📝 License

© 2025 Cloudstream Systems. All rights reserved.

---

**Built with ❤️ by Cloudstream Systems**
