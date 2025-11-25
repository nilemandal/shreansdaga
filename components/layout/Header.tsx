"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle, Volume2, VolumeX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Navigation } from "./Navigation";
// import { MobileMenu } from "./MobileMenu"; // Replaced by bottom nav
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md"
          : "bg-cream"
      )}
    >
      <Container>
        <div className="flex h-32 items-center gap-12 px-3 md:px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Right Side Actions */}
          <div className="ml-auto flex items-center gap-5 pr-2 md:pr-4">
            {/* Social Icons - Desktop Only */}
            <div className="hidden xl:flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-charcoal hover:text-primary-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-charcoal hover:text-primary-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-charcoal hover:text-primary-green transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 text-charcoal hover:text-primary-green transition-colors"
              aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            {/* CTA Button - Desktop Only */}
            <Button className="hidden lg:inline-flex" size="default">
              Book Session
            </Button>

            {/* Mobile Menu replaced by bottom navigation */}
          </div>
        </div>
      </Container>
    </header>
  );
}
