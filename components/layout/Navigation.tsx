"use client";

import { NAVIGATION_ITEMS } from "@/lib/constants";
import { NavLink } from "@/components/ui/NavLink";

export function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
