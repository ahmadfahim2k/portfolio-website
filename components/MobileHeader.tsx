"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-stone-100 dark:bg-stone-800">
            <Image
              src={siteConfig.profilePic}
              alt={siteConfig.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-bold text-stone-900 dark:text-white">
            {siteConfig.name}
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 p-6 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm font-semibold py-1 transition-colors ${
                  pathname === href
                    ? "text-accent"
                    : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <hr className="border-stone-100 dark:border-stone-800" />
            <div className="flex items-center justify-between">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
              >
                {siteConfig.email}
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
