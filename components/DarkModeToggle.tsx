"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
    >
      {/* Track */}
      <span
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 ${
          isDark ? "bg-accent" : "bg-stone-300"
        }`}
      >
        {/* Thumb */}
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-300 ${
            isDark ? "translate-x-4" : "translate-x-1"
          }`}
        />
      </span>
      <span className="text-xs font-medium">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
