# Quick Reference Guide

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint

# Package Management
npm install [package]   # Install new package
npm update              # Update packages
npm list --depth=0      # List installed packages
```

---

## 📁 File Locations

### Add Assets Here:
- **Logo**: `public/assets/images/logo.svg`
- **Images**: `public/assets/images/`
- **Sounds**: `public/assets/sounds/`
- **Animations**: `public/assets/animations/`

### Create Components:
- **UI Components**: `components/ui/Button.tsx`
- **Layout**: `components/layout/Header.tsx`

### Add Pages:
- **New Route**: `app/[route-name]/page.tsx`
- **Layout**: `app/[route-name]/layout.tsx`

---

## 🎨 Using Brand Colors

```tsx
// In your components
<div className="bg-[#FAF9F6]">       {/* Cream background */}
<div className="text-[#4A7C59]">     {/* Forest green text */}
<div className="bg-[#B8956A]">       {/* Gold accent */}
```

Or use CSS variables:
```css
background: var(--primary-green);
color: var(--accent-gold);
```

---

## 🔧 Common Utilities

### Using cn() helper:
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)} />
```

### Constants:
```tsx
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

// Use in components
{NAVIGATION_ITEMS.map(item => ...)}
```

---

## 🎭 Component Example

```tsx
// components/ui/Button.tsx
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-lg",
        "bg-[#4A7C59] text-white",
        "hover:bg-[#8BA888] transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
```

---

## 🎵 Audio Setup Example

```tsx
// hooks/useAudio.ts
import { Howl } from 'howler';
import { useEffect, useState } from 'react';

export function useAudio(src: string) {
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const howl = new Howl({
      src: [src],
      loop: true,
      volume: 0.5,
    });
    setSound(howl);
    
    return () => {
      howl.unload();
    };
  }, [src]);

  return sound;
}
```

---

## ✨ Animation Example

```tsx
// Using Framer Motion
import { motion } from 'framer-motion';

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 📱 Responsive Design

```tsx
<div className="
  px-4 md:px-8 lg:px-12          // Padding
  text-base md:text-lg lg:text-xl // Font size
  grid grid-cols-1 md:grid-cols-2  // Columns
" />
```

---

## 🔗 Navigation Links

All links are in `lib/constants.ts`:
```tsx
import { NAVIGATION_ITEMS } from "@/lib/constants";

{NAVIGATION_ITEMS.map(item => (
  <Link key={item.href} href={item.href}>
    {item.label}
  </Link>
))}
```

---

## 🌓 Theme Toggle Example

```tsx
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
```

---

## 📦 Import Paths

```tsx
// Use @ alias for imports
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";
```

---

## 🎯 SEO Metadata

```tsx
// In page.tsx files
export const metadata = {
  title: "Shreansdaga Foundation - Meditation & Breathwork",
  description: "Join live and virtual meditation sessions...",
  openGraph: {
    title: "Shreansdaga Foundation",
    description: "...",
    images: ["/assets/images/og-image.jpg"],
  },
};
```

---

## 🔍 Troubleshooting

### Port already in use:
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Clear cache:
```bash
rm -rf .next
npm run dev
```

### Type errors:
```bash
npx tsc --noEmit
```

---

**Quick Start**: `npm run dev` → Open http://localhost:3000
