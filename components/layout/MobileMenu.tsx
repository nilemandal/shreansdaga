"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { NavLink } from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-[#2C3E3F] hover:text-[#4A7C59] transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FAF9F6] z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5]">
                  <span className="text-lg font-semibold text-[#4A7C59]">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[#2C3E3F] hover:text-[#4A7C59] transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-2">
                    {NAVIGATION_ITEMS.map((item) => (
                      <li key={item.href}>
                        <NavLink
                          href={item.href}
                          className="block py-3 text-base"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button */}
                <div className="p-6 border-t border-[#E5E5E5]">
                  <Button className="w-full" size="lg">
                    Book a Session
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
