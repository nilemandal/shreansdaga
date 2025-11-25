export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Transcendental Breathwork',
    href: '/breathwork',
  },
  {
    label: 'Meditations & Courses',
    href: '/meditations',
  },
  {
    label: 'Events & Workshops',
    href: '/events',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
] as const;

export const FOOTER_LINKS = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Disclaimer',
    href: '/disclaimer',
  },
  {
    label: 'Terms Of Use',
    href: '/terms',
  },
  {
    label: 'Code Of Conduct',
    href: '/code-of-conduct',
  },
  {
    label: 'Investor Communication',
    href: '/investor-communication',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    platform: 'facebook' as const,
    url: 'https://facebook.com/shreansdaga',
    label: 'Facebook',
  },
  {
    platform: 'instagram' as const,
    url: 'https://instagram.com/shreansdaga',
    label: 'Instagram',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://linkedin.com/in/shreansdaga',
    label: 'LinkedIn',
  },
  {
    platform: 'youtube' as const,
    url: 'https://youtube.com/@shreansdaga',
    label: 'YouTube',
  },
  {
    platform: 'whatsapp' as const,
    url: 'https://wa.me/1234567890', // Update with actual number
    label: 'WhatsApp',
  },
] as const;

// Brand colors from logo
export const BRAND_COLORS = {
  primary: {
    green: '#4A7C59',
    sage: '#8BA888',
  },
  accent: {
    gold: '#B8956A',
    bronze: '#A0826D',
  },
  neutral: {
    cream: '#FAF9F6',
    white: '#FFFFFF',
    charcoal: '#2C3E3F',
    softBlack: '#1A1A1A',
  },
} as const;
