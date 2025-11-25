"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative px-2 xl:px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
        "hover:text-primary-green",
        isActive ? "text-primary-green" : "text-charcoal",
        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-green after:transition-all after:duration-300",
        isActive && "after:w-full",
        "hover:after:w-full",
        className
      )}
    >
      {children}
    </Link>
  );
}
