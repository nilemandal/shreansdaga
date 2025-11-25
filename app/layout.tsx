import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { AudioProvider } from "@/contexts/AudioContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreansdaga Foundation - Meditation & Breathwork",
  description: "Join live and virtual meditation sessions with Shreansdaga. Explore transcendental breathwork, guided meditations, and mindfulness practices for inner peace.",
  keywords: ["meditation", "breathwork", "mindfulness", "yoga", "spiritual guidance", "wellness"],
  authors: [{ name: "Shreansdaga Foundation" }],
  icons: {
    icon: [
      // Preferred favicon provided by client
      { url: "/favicon-removebg-preview.png", type: "image/png" },
      // Fallbacks
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#275E3D" },
    { media: "(prefers-color-scheme: dark)", color: "#275E3D" },
  ],
  openGraph: {
    title: "Shreansdaga Foundation - Meditation & Breathwork",
    description: "Transform your life through meditation and breathwork",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AudioProvider>
            <Header />
            <main className="min-h-screen pb-24">{children}</main>
            <Footer />
            <MobileBottomNav />
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
