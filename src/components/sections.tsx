import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/data/company";
import { ui } from "@/data/ui";
import { href, tr, type Locale } from "@/lib/i18n";
import { ArrowForward, WhatsappIcon } from "./icons";
import { Reveal } from "./motion";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wide ${light ? "text-brand-300" : "text-accent"}`}
    >
      <span className={`h-px w-8 ${light ? "bg-brand-300" : "bg-brand-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
  action?: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${center ? "md:flex-col md:items-center" : ""}`}>
      <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <h2
          className={`mt-4 text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-[2.75rem] ${
            light ? "text-white" : "text-fg"
          }`}
        >
          {title}
        </h2>
        {text && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/70" : "text-steel-500"}`}>{text}</p>}
      </Reveal>
      {action && <Reveal delay={0.15}>{action}</Reveal>}
    </div>
  );
}

export function LinkArrow({ href: to, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={to}
      className={`group inline-flex items-center gap-2 font-semibold transition-colors ${
        light ? "text-white hover:text-brand-300" : "text-link hover:text-link-hover"
      }`}
    >
      {children}
      <ArrowForward className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}

export type Crumb = { label: string; href?: string };

export function PageHero({
  locale,
  title,
  text,
  image,
  crumbs,
  children,
}: {
  locale: Locale;
  title: string;
  text?: string;
  image: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  const Sep = locale === "ar" ? ChevronLeft : ChevronRight;
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-36 pb-20 text-white lg:pt-44 lg:pb-28">
      <Image src={image} alt="" fill priority sizes="100vw" className="animate-kenburns -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-ink/85 via-ink/75 to-ink" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" />
      <div className="container-x">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <Link href={href(locale)} className="hover:text-white">
              {tr(ui.home, locale)}
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <Sep className="size-3.5" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.15] font-bold text-balance sm:text-5xl lg:text-6xl">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({ locale }: { locale: Locale }) {
  return (
    <section className="container-x py-20 lg:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <Image src="/images/fleet/excavators-row.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25 mix-blend-luminosity" />
          <div className="absolute inset-0 -z-10 bg-linear-to-l from-brand-700/60 via-brand-600/90 to-brand-700 rtl:bg-linear-to-r" />
          <div className="bg-grid absolute inset-0 -z-10 opacity-50" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">{tr(ui.ctaTitle, locale)}</h2>
              <p className="mt-5 text-lg text-white/80">{tr(ui.ctaText, locale)}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={href(locale, "contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-brand-700 shadow-xl transition hover:bg-brand-50 dark:hover:bg-brand-100 dark:hover:text-white"
              >
                {tr(ui.requestQuote, locale)}
                <ArrowForward className="size-4" />
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <WhatsappIcon className="size-5" />
                {tr(ui.whatsapp, locale)}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function WhatsappFab({ locale }: { locale: Locale }) {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tr(ui.whatsapp, locale)}
      className="fixed end-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}

export function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-link">{icon}</span>
      <div>
        <div className="text-sm text-steel-500">{label}</div>
        <div className="mt-1 font-semibold text-fg">{children}</div>
      </div>
    </div>
  );
}
