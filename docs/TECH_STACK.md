# Shreansdaga Foundation - Tech Stack Documentation

## Project Overview
A meditation and breathwork website for Shreansdaga Foundation, designed to provide an immersive, calming digital experience with SEO optimization to attract new clients.

---

## Core Technologies

### Framework & Runtime
- **Next.js 15** (App Router)
  - Server-side rendering (SSR) for optimal SEO
  - Built-in image optimization
  - Route handlers for API endpoints
  - Automatic code splitting
  - Fast refresh for development

- **React 18+**
  - Component-based architecture
  - Server and client components
  - React hooks for state management

- **TypeScript**
  - Type safety
  - Better developer experience
  - Reduced runtime errors

- **Node.js**
  - JavaScript runtime environment

---

## Styling & UI Libraries

### CSS Framework
- **Tailwind CSS**
  - Utility-first CSS framework
  - Custom design system
  - Responsive design utilities
  - JIT (Just-In-Time) compilation

### UI Component Library
- **Radix UI Primitives**
  - `@radix-ui/react-slot` - Composition utility
  - `@radix-ui/react-dropdown-menu` - Accessible dropdowns
  - `@radix-ui/react-dialog` - Modal dialogs
  - `@radix-ui/react-navigation-menu` - Navigation menus
  - Fully accessible (ARIA compliant)
  - Unstyled, customizable components
  - Keyboard navigation support

### Utility Libraries
- **clsx** - Conditional className joining
- **tailwind-merge** - Merge Tailwind classes without conflicts
- **class-variance-authority (CVA)** - Variant-based component styling

### Icons
- **Lucide React**
  - Beautiful, consistent icon set
  - Tree-shakeable
  - Customizable size and color

---

## Animation & Motion

### Primary Animation Library
- **Framer Motion**
  - Smooth page transitions
  - Scroll-triggered animations
  - Breathing/pulse animations for meditation elements
  - Gesture animations
  - Layout animations
  - Spring physics-based animations

### Additional Animation Tools
- **Lottie** (`@lottiefiles/react-lottie-player`)
  - High-quality, lightweight animations
  - JSON-based animation format
  - Perfect for complex illustrations (lotus, mandalas, etc.)

- **React Intersection Observer**
  - Trigger animations on scroll
  - Lazy loading optimization
  - Viewport detection

---

## Audio Integration

### Audio Library
- **Howler.js**
  - Cross-browser audio support
  - Background ambient sounds (nature, singing bowls, water)
  - Meditation guidance audio playback
  - Sound effects on user interactions
  - Volume control and fade effects
  - Sprite support for multiple sounds
  - Mobile audio handling

- **@types/howler**
  - TypeScript definitions for Howler.js

### Audio Features Planned
- Background ambient sound toggle
- Guided meditation audio player
- Sound effects on hover/click
- Auto-pause on page navigation
- Volume persistence (localStorage)

---

## Theming

### Theme Management
- **next-themes**
  - Light/dark mode support
  - System preference detection
  - Smooth theme transitions
  - No flash on page load
  - LocalStorage persistence

---

## SEO & Performance

### Built-in Next.js Features
- **Metadata API**
  - Dynamic meta tags
  - Open Graph tags
  - Twitter cards
  - JSON-LD structured data

- **Image Optimization**
  - Automatic image optimization
  - WebP/AVIF format support
  - Lazy loading
  - Responsive images

- **Font Optimization**
  - Automatic font subsetting
  - Self-hosting Google Fonts
  - FOUT/FOIT prevention

### Performance Tools
- **Vercel Analytics** (when deployed)
- **Core Web Vitals** monitoring
- **Lighthouse** optimization

---

## Development Tools

### Code Quality
- **ESLint**
  - Code linting
  - Next.js recommended rules
  - Custom rules for project consistency

- **TypeScript**
  - Static type checking
  - IntelliSense support

### Package Manager
- **npm**
  - Dependency management
  - Script running

---

## Project Structure

```
shreansdaga/
├── app/                          # Next.js app directory
│   ├── (routes)/                 # Route groups
│   ├── api/                      # API routes
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── layout/                   # Layout components (Header, Footer, Nav)
│   └── ui/                       # Reusable UI components
├── contexts/                     # React contexts (Audio, Theme)
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper functions
├── types/                        # TypeScript type definitions
├── public/                       # Static assets
│   └── assets/
│       ├── images/               # Images and logos
│       ├── sounds/               # Audio files
│       └── animations/           # Lottie animations
├── docs/                         # Documentation
│   └── TECH_STACK.md            # This file
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
└── package.json                  # Dependencies
```

---

## Color Palette (Brand Colors)

Based on Shreansdaga Foundation logo:

```css
/* Primary Colors */
--forest-green: #4A7C59;          /* Main brand green */
--earthy-gold: #B8956A;           /* Accent gold/bronze */

/* Backgrounds */
--cream: #FAF9F6;                 /* Light background */
--soft-white: #FFFFFF;

/* Text */
--charcoal: #2C3E3F;              /* Primary text */
--soft-black: #1A1A1A;

/* Accents */
--sage: #8BA888;                  /* Lighter green */
--bronze: #A0826D;                /* Darker gold */
```

---

## Typography

### Font Families (to be configured)
- **Headings**: Serif font (elegant, spiritual feel)
  - Suggestions: Playfair Display, Cormorant, Cinzel
  
- **Body**: Sans-serif (readable, modern)
  - Suggestions: Inter, Poppins, Plus Jakarta Sans

---

## Installed Dependencies

### Production Dependencies
```json
{
  "next": "^15.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "framer-motion": "latest",
  "howler": "latest",
  "lucide-react": "latest",
  "next-themes": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "class-variance-authority": "latest",
  "react-intersection-observer": "latest",
  "@lottiefiles/react-lottie-player": "latest",
  "@radix-ui/react-slot": "latest",
  "@radix-ui/react-dropdown-menu": "latest",
  "@radix-ui/react-dialog": "latest",
  "@radix-ui/react-navigation-menu": "latest"
}
```

### Development Dependencies
```json
{
  "typescript": "latest",
  "@types/node": "latest",
  "@types/react": "latest",
  "@types/react-dom": "latest",
  "@types/howler": "latest",
  "eslint": "latest",
  "eslint-config-next": "latest",
  "tailwindcss": "latest",
  "@tailwindcss/postcss": "latest"
}
```

---

## Future Enhancements (Optional)

### CMS Integration
- **Sanity.io** or **Contentful**
  - YouTube video library management
  - Blog posts
  - Event scheduling
  - Testimonials

### Analytics
- **Vercel Analytics**
- **Google Analytics 4**
- **Google Tag Manager**

### Booking System
- **Calendly Integration** (iframe or API)
- Or custom booking system with:
  - **React Big Calendar**
  - **Day.js** for date handling

### Form Handling
- **React Hook Form** - Form validation
- **Zod** - Schema validation

### Advanced 3D (if needed)
- **React Three Fiber** - 3D graphics
- **@react-three/drei** - 3D helpers
- **Three.js** - WebGL library

### Particles
- **tsParticles** - Particle effects

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Goals

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

## Accessibility Standards

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Semantic HTML
- ARIA labels where needed
- Color contrast ratios meet standards

---

*Last Updated: November 25, 2025*
