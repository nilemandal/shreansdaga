// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'whatsapp';
  url: string;
  label: string;
}

// Audio types
export interface AudioTrack {
  id: string;
  name: string;
  src: string;
  volume?: number;
  loop?: boolean;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';
