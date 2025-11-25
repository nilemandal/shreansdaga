# Project Setup Documentation

## Initial Setup Completed

### Date: November 25, 2025

### Environment
- **OS**: macOS
- **Node.js**: Latest LTS
- **Package Manager**: npm

---

## Setup Steps Performed

### 1. Next.js Project Initialization
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

**Configuration Selected:**
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ App Router
- ✅ ESLint
- ❌ React Compiler (not needed for this project)
- ✅ Import alias: `@/*`

---

### 2. Dependencies Installed

#### Production Dependencies
```bash
npm install framer-motion clsx tailwind-merge class-variance-authority lucide-react howler @types/howler @radix-ui/react-slot @radix-ui/react-dropdown-menu @radix-ui/react-dialog @radix-ui/react-navigation-menu react-intersection-observer @lottiefiles/react-lottie-player next-themes
```

**Installed Packages:**
- `framer-motion` - Animation library
- `clsx` - Conditional classNames utility
- `tailwind-merge` - Merge Tailwind classes
- `class-variance-authority` - Component variants
- `lucide-react` - Icon library
- `howler` - Audio library
- `@types/howler` - TypeScript types for Howler
- `@radix-ui/react-*` - Accessible UI primitives
- `react-intersection-observer` - Scroll animations
- `@lottiefiles/react-lottie-player` - Lottie animations
- `next-themes` - Theme management

---

### 3. Project Structure Created

```
shreansdaga/
├── app/                          # Next.js app directory
│   ├── globals.css              # Updated with brand colors
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── layout/                  # Layout components
│   └── ui/                      # Reusable UI components
├── contexts/                    # React contexts
├── hooks/                       # Custom hooks
├── lib/
│   ├── constants.ts            # Navigation & brand constants
│   └── utils.ts                # Utility functions (cn helper)
├── types/
│   └── index.ts                # TypeScript type definitions
├── public/
│   └── assets/
│       ├── images/             # Images and logos (to be added)
│       ├── sounds/             # Audio files (to be added)
│       └── animations/         # Lottie animations (to be added)
└── docs/
    ├── TECH_STACK.md           # Complete tech documentation
    └── SETUP.md                # This file
```

---

### 4. Configuration Files Updated

#### `app/globals.css`
- ✅ Brand colors from logo (green & gold theme)
- ✅ Light/dark mode CSS variables
- ✅ Custom scrollbar styling
- ✅ Smooth scrolling enabled
- ✅ Font smoothing

#### `lib/constants.ts`
- ✅ Navigation items
- ✅ Footer links
- ✅ Social media links
- ✅ Brand color constants

#### `lib/utils.ts`
- ✅ `cn()` utility function for merging Tailwind classes

#### `types/index.ts`
- ✅ Navigation types
- ✅ Social link types
- ✅ Audio types
- ✅ Theme types

---

### 5. Documentation Created

#### README.md
- ✅ Project overview
- ✅ Features list
- ✅ Tech stack summary
- ✅ Installation instructions
- ✅ Project structure
- ✅ Brand colors
- ✅ Pages list

#### docs/TECH_STACK.md
- ✅ Complete technology documentation
- ✅ All dependencies explained
- ✅ Project structure details
- ✅ Color palette
- ✅ Typography guidelines
- ✅ Performance goals
- ✅ Accessibility standards

---

## Next Steps

### Immediate Tasks
1. **Add logo and images** to `public/assets/images/`
2. **Create base UI components** in `components/ui/`
   - Button
   - Card
   - Container
3. **Create layout components** in `components/layout/`
   - Header
   - Footer
   - Navigation (Desktop & Mobile)
4. **Set up contexts** in `contexts/`
   - AudioContext (for ambient sounds)
   - ThemeProvider wrapper
5. **Create custom hooks** in `hooks/`
   - useAudio
   - useScrollAnimation

### Pages to Create
- [ ] Home page (`app/page.tsx`)
- [ ] About Us (`app/about/page.tsx`)
- [ ] Transcendental Breathwork (`app/breathwork/page.tsx`)
- [ ] Meditations & Courses (`app/meditations/page.tsx`)
- [ ] Events & Workshops (`app/events/page.tsx`)
- [ ] Contact Us (`app/contact/page.tsx`)
- [ ] Privacy Policy (`app/privacy-policy/page.tsx`)
- [ ] Disclaimer (`app/disclaimer/page.tsx`)
- [ ] Terms of Use (`app/terms/page.tsx`)
- [ ] Code of Conduct (`app/code-of-conduct/page.tsx`)
- [ ] Investor Communication (`app/investor-communication/page.tsx`)

### Assets Needed
- [ ] Logo files (SVG, PNG)
- [ ] Shreansdaga portrait image
- [ ] Background images
- [ ] Ambient sound files (nature, bowls, water)
- [ ] Lottie animations (lotus, mandalas)

---

## Development Server

Start the development server:
```bash
npm run dev
```

View at: [http://localhost:3000](http://localhost:3000)

---

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Package.json Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

---

## Environment Variables (to be added)

Create `.env.local` file for:
- API keys (if using CMS)
- Analytics IDs
- Contact form endpoints
- Any other secrets

---

## Git Repository

Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial project setup"
```

---

**Setup Status**: ✅ Complete
**Ready for Development**: ✅ Yes

---

*Last Updated: November 25, 2025*
