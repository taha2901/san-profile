"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Globe, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { nav, ui } from "@/data/ui";
import { href, otherLocale, tr, type Locale } from "@/lib/i18n";
import { ArrowForward } from "./icons";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

function switchLocalePath(pathname: string, to: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  parts[0] = to;
  return `/${parts.join("/")}/`;
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (path: string) => {
    const target = href(locale, path);
    return path === "" ? pathname === target || pathname === `/${locale}` : pathname.startsWith(target);
  };

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-surface/95 shadow-[0_1px_0_rgb(0_0_0/0.06),0_10px_30px_-12px_rgb(10_20_36/0.18)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo locale={locale} light={!solid} />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={href(locale, item.path)}
                className={`relative rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-link"
                      : "text-steel-700 hover:text-link"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {tr(item.label, locale)}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full ${solid ? "bg-brand-500" : "bg-white"}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle
            locale={locale}
            className={`inline-flex size-10 items-center justify-center rounded-full transition-colors ${
              solid ? "text-steel-700 hover:bg-steel-100" : "text-white hover:bg-white/10"
            }`}
          />
          <Link
            href={switchLocalePath(pathname, otherLocale(locale))}
            hrefLang={otherLocale(locale)}
            className={`hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:inline-flex ${
              solid ? "text-steel-700 hover:bg-steel-100" : "text-white hover:bg-white/10"
            }`}
          >
            <Globe className="size-4" />
            {tr(ui.switchLang, locale)}
          </Link>
          <Link href={href(locale, "contact")} className="group ms-1 hidden items-center md:inline-flex">
            <span className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-colors group-hover:bg-brand-600">
              {tr(ui.startProject, locale)}
            </span>
            <span className="-ms-0.5 flex size-10 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/25 transition-colors group-hover:bg-brand-600">
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45 rtl:-scale-x-100 rtl:group-hover:-rotate-45" />
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex size-11 items-center justify-center rounded-full transition xl:hidden ${
              solid ? "text-fg hover:bg-steel-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={tr(open ? ui.close : ui.menu, locale)}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-steel-100 bg-surface xl:hidden"
          >
            <nav className="container-x flex flex-col py-6" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: locale === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={href(locale, item.path)}
                    className={`flex items-center justify-between border-b border-steel-100 py-4 text-lg font-semibold ${
                      isActive(item.path) ? "text-link" : "text-fg"
                    }`}
                  >
                    {tr(item.label, locale)}
                    <ArrowForward className="size-5 text-steel-300" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 grid gap-3">
                <Link
                  href={href(locale, "contact")}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-500 py-4 font-semibold text-white"
                >
                  {tr(ui.startProject, locale)}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-steel-200 py-4 font-semibold text-fg"
                >
                  <Phone className="size-4" />
                  <span dir="ltr">{company.phoneDisplay}</span>
                </a>
                <ThemeToggle
                  locale={locale}
                  withLabel
                  className="flex items-center justify-center gap-2 rounded-full border border-steel-200 py-4 font-semibold text-fg"
                />
                <Link
                  href={switchLocalePath(pathname, otherLocale(locale))}
                  className="flex items-center justify-center gap-2 py-3 font-semibold text-steel-600"
                >
                  <Globe className="size-4" />
                  {tr(ui.switchLang, locale)}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
