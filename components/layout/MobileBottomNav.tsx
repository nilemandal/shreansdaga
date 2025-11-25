"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wind, Brain, Calendar, Phone, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/breathwork", label: "Breath", icon: Wind },
  { href: "/meditations", label: "Mind", icon: Brain },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/contact", label: "Contact", icon: Phone },
  { href: "/about", label: "About", icon: Info },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch justify-around bg-cream/90 backdrop-blur-md border-t border-primary-green/20 shadow-[0_-6px_12px_-4px_rgba(0,0,0,0.08)] px-2 pt-1 pb-[calc(env(safe-area-inset-bottom)+0.35rem)] lg:hidden"
      aria-label="Bottom navigation"
    >
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex flex-1 flex-col items-center justify-center gap-1 rounded-md py-2 text-xs font-medium transition-colors",
              active
                ? "text-primary-green"
                : "text-charcoal/70 hover:text-primary-green"
            )}
          >
            <Icon
              size={22}
              className={cn(
                "transition-transform duration-300",
                active ? "scale-110" : "group-hover:scale-110"
              )}
            />
            <span className="tracking-wide">{item.label}</span>
            {active && (
              <span className="mt-0.5 h-1 w-6 rounded-full bg-primary-green/80 group-hover:bg-primary-green" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
