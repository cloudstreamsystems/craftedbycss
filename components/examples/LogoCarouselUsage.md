# Logo Carousel Usage Guide

## Overview
The LogoCarousel component recreates the functionality from the WordPress PowerPack Lite logo carousel with modern React/Next.js implementation.

## Features Recreated from WordPress
- ✅ Smooth horizontal scrolling animation
- ✅ Grayscale/hover effects (like WordPress version)
- ✅ Pause on hover functionality
- ✅ Responsive design
- ✅ Seamless infinite loop
- ✅ Accessibility support
- ✅ Motion reduction support

## Basic Usage

```tsx
import LogoCarousel from "@/components/ui/LogoCarousel";

const logos = [
  {
    id: "logo-1",
    name: "Company 1",
    src: "/logos/company-1.png",
    alt: "Company 1 Logo",
  },
  // ... more logos
];

export default function MyPage() {
  return (
    <LogoCarousel
      logos={logos}
      speed={25}
      direction="left"
      pauseOnHover={true}
      grayscale={true}
    />
  );
}
```

## Pre-built Section Component

```tsx
import TrustedBy from "@/components/sections/TrustedBy";

export default function HomePage() {
  return (
    <TrustedBy
      title="Trusted by Industry Leaders"
      subtitle="Join hundreds of companies that trust us"
      logoSet="clients" // or "tech" or "custom"
    />
  );
}
```

## WordPress vs Next.js Comparison

| Feature | WordPress (PowerPack) | Next.js Component |
|---------|----------------------|-------------------|
| Animation | Swiper.js | Custom RAF + CSS |
| Grayscale | CSS filters | CSS filters + Tailwind |
| Responsive | Swiper responsive | CSS Grid + Flexbox |
| Performance | jQuery dependency | Pure React/JS |
| Accessibility | Basic | Full ARIA support |
| Motion Preference | Not supported | Respects prefers-reduced-motion |

## Logo Assets Migrated

From WordPress uploads, we've migrated:
- `company-logo1.png` → `client-1.png`
- `company-logo2.png` → `client-2.png`
- `company-logo3.png` → `client-3.png`
- `company-logo4.png` → `client-4.png`
- `company-logo5.png` → `client-5.png`
- Various SVG logos for tech stack

## Customization Options

### Speed Control
```tsx
<LogoCarousel speed={15} /> // Slower
<LogoCarousel speed={40} /> // Faster
```

### Direction
```tsx
<LogoCarousel direction="left" />  // Default
<LogoCarousel direction="right" /> // Reverse
```

### Visual Effects
```tsx
<LogoCarousel grayscale={true} />  // WordPress-style grayscale
<LogoCarousel grayscale={false} /> // Full color
```

### Custom Styling
```tsx
<LogoCarousel className="py-12 bg-gray-100" />
```

## Integration with Existing Pages

Add to any page by importing and using:

```tsx
// In your page component
import TrustedBy from "@/components/sections/TrustedBy";

// Add anywhere in your JSX
<TrustedBy logoSet="clients" />
```

## Performance Considerations

- Uses `requestAnimationFrame` for smooth 60fps animation
- Lazy loading for logo images
- Respects user's motion preferences
- Minimal DOM manipulation
- CSS transforms for GPU acceleration

## Accessibility Features

- Proper alt text for all logos
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`
- Semantic HTML structure
