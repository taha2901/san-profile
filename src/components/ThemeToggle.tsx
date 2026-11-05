"use client";

import { Moon, Sun } from "lucide-react";
import type { Locale } from "@/lib/i18n";

/**
 * Runs in <head> before first paint so the page never flashes the wrong theme.
 * Saved choice wins; otherwise follow the OS setting.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

function toggleTheme() {
  const root = document.documentElement;
  const next = !root.classList.contains("dark");
  root.classList.add("theme-switching");
  root.classList.toggle("dark", next);
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {}
  window.setTimeout(() => root.classList.remove("theme-switching"), 450);
}

export function ThemeToggle({ locale, className = "", withLabel = false }: { locale: Locale; className?: string; withLabel?: boolean }) {
  const ar = locale === "ar";
  return (
    <button type="button" onClick={toggleTheme} className={className} aria-label={ar ? "تبديل الوضع الليلي" : "Toggle dark mode"}>
      {/* Icons swap purely via CSS, so server and client markup always match */}
      <Moon className="size-[18px] dark:hidden" />
      <Sun className="hidden size-[18px] dark:block" />
      {withLabel && (
        <>
          <span className="dark:hidden">{ar ? "الوضع الليلي" : "Dark mode"}</span>
          <span className="hidden dark:inline">{ar ? "الوضع النهاري" : "Light mode"}</span>
        </>
      )}
    </button>
  );
}
