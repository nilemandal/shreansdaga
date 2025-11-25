import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export function Footer() {
  return (
    <footer className="bg-[#2C3E3F] text-[#FAF9F6] mt-20">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/SD_foundation_approved-01_PNG-1.png"
                alt="Shreansdaga Foundation"
                width={200}
                height={80}
                priority
              />
            </div>
            <p className="text-sm text-[#FAF9F6]/70">
              Guiding you through meditation and breathwork for a peaceful, mindful life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#FAF9F6]/70 hover:text-[#B8956A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#FAF9F6]/70 hover:text-[#B8956A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/meditations" className="text-sm text-[#FAF9F6]/70 hover:text-[#B8956A] transition-colors">
                  Meditations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#FAF9F6]/70 hover:text-[#B8956A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF9F6]/70 hover:text-[#B8956A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#4A7C59]/20 rounded-lg hover:bg-[#4A7C59] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-[#FAF9F6]/70">
              Follow us for daily meditation tips and updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FAF9F6]/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#FAF9F6]/70">
              © {new Date().getFullYear()} Shreansdaga Foundation. All rights reserved.
            </p>
            <p className="text-sm text-[#FAF9F6]/70">
              Built with 💚 for meditation and mindfulness
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
