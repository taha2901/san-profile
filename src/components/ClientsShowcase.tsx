"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Briefcase, Building2, Factory, Landmark, Sparkles, Zap, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { sectors, type Client, type Sector } from "@/data/clients";
import { href, tr, type Locale } from "@/lib/i18n";
import { ArrowForward } from "./icons";
import { Counter, Reveal } from "./motion";
import { ScrollTabs } from "./ScrollTabs";

export type ShowcaseClient = Client & { projects: number };

const sectorIcon: Record<Sector, LucideIcon> = {
  giga: Sparkles,
  government: Landmark,
  utilities: Zap,
  private: Factory,
};

const ease = [0.22, 1, 0.36, 1] as const;

const t = {
  all: { ar: "الكل", en: "All" },
  clients: { ar: "جهة وعميل", en: "Clients" },
  projects: { ar: "مشروع منفّذ", en: "Projects delivered" },
  sectors: { ar: "قطاعات", en: "Sectors" },
  project: { ar: "مشروع", en: "projects" },
  featured: { ar: "شريك استراتيجي", en: "Strategic partner" },
  featuredText: {
    ar: "نساهم في تنفيذ أعمال البنية التحتية والأعمال الترابية ضمن أحد أكبر المشاريع الطموحة في العالم.",
    en: "Delivering earthworks and infrastructure packages for one of the most ambitious developments in the world.",
  },
  viewProjects: { ar: "استعرض المشاريع", en: "View projects" },
  filterLabel: { ar: "تصفية حسب القطاع", en: "Filter by sector" },
};

export function ClientsShowcase({ clients, order, locale }: { clients: ShowcaseClient[]; order: Sector[]; locale: Locale }) {
  const [active, setActive] = useState<Sector | "all">("all");
  const reduce = useReducedMotion();

  const totalProjects = clients.reduce((s, c) => s + c.projects, 0);
  const presentSectors = order.filter((s) => clients.some((c) => c.sector === s));
  const featured = useMemo(
    () => clients.filter((c) => c.sector === "giga").sort((a, b) => b.projects - a.projects)[0],
    [clients],
  );

  const visible = useMemo(() => {
    const list = active === "all" ? clients : clients.filter((c) => c.sector === active);
    // Keep sector grouping, then most projects first
    return [...list].sort((a, b) => order.indexOf(a.sector) - order.indexOf(b.sector) || b.projects - a.projects);
  }, [active, clients, order]);

  const tabs: { key: Sector | "all"; label: string; count: number; Icon: LucideIcon }[] = [
    { key: "all", label: tr(t.all, locale), count: clients.length, Icon: Building2 },
    ...presentSectors.map((s) => ({
      key: s,
      label: tr(sectors[s], locale),
      count: clients.filter((c) => c.sector === s).length,
      Icon: sectorIcon[s],
    })),
  ];

  const stats = [
    { value: clients.length, suffix: "+", label: tr(t.clients, locale) },
    { value: totalProjects, suffix: "+", label: tr(t.projects, locale) },
    { value: presentSectors.length, suffix: "", label: tr(t.sectors, locale) },
  ];

  return (
    <>
      {/* Stats strip overlapping the hero */}
      <div className="container-x relative z-10 -mt-12 lg:-mt-14">
        <Reveal>
          <div className="grid grid-cols-3 divide-x divide-steel-100 overflow-hidden rounded-3xl border border-steel-100 bg-surface shadow-xl shadow-ink/5">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center sm:py-8">
                <Counter value={s.value} suffix={s.suffix} className="block text-3xl font-bold text-fg sm:text-4xl lg:text-5xl" />
                <span className="mt-2 block text-xs font-medium text-steel-500 sm:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <section className="container-x py-20 lg:py-28">
        {/* Featured partner */}
        {featured && (
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10 lg:p-14">
              <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
              <div className="absolute -top-24 -z-10 size-96 rounded-full bg-brand-500/30 blur-3xl ltr:-right-24 rtl:-left-24" />
              <div className="absolute -bottom-32 -z-10 size-80 rounded-full bg-sand/10 blur-3xl ltr:-left-20 rtl:-right-20" />

              <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-brand-200 backdrop-blur">
                    <Sparkles className="size-3.5" />
                    {tr(t.featured, locale)} · {tr(sectors[featured.sector], locale)}
                  </span>
                  <h2 className="mt-5 text-4xl font-bold sm:text-5xl">{tr(featured.name, locale)}</h2>
                  <p className="mt-4 leading-relaxed text-white/70">{tr(t.featuredText, locale)}</p>
                  <Link
                    href={href(locale, "projects")}
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand-50"
                  >
                    {tr(t.viewProjects, locale)}
                    <ArrowForward className="size-4 transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>

                <div className="flex w-full items-center gap-6 sm:w-auto">
                  {featured.logo && (
                    <span className="flex size-36 shrink-0 items-center justify-center rounded-3xl bg-white p-5 shadow-2xl shadow-black/30 ring-1 ring-white/20 sm:size-44">
                      <Image src={featured.logo} alt={tr(featured.name, locale)} width={240} height={240} className="max-h-full w-auto object-contain" />
                    </span>
                  )}
                  <div className="text-center">
                    <Counter value={featured.projects} className="block text-6xl font-bold sm:text-7xl" />
                    <span className="mt-1 block text-sm text-white/60">{tr(t.project, locale)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Sector filter */}
        <div className="mt-20">
          <LayoutGroup id="client-tabs">
            <ScrollTabs activeKey={active} label={tr(t.filterLabel, locale)}>
              {tabs.map(({ key, label, count, Icon }) => {
                const on = active === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(key)}
                    className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                      on ? "text-white" : "text-steel-600 hover:text-fg"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="client-tab-pill"
                        className="absolute inset-0 -z-0 rounded-full bg-brand-500 shadow-md shadow-brand-500/30"
                        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <Icon className="relative size-4" />
                    <span className="relative">{label}</span>
                    <span
                      className={`relative rounded-full px-2 py-0.5 text-[11px] leading-none ${
                        on ? "bg-white/20 text-white" : "bg-steel-100 text-steel-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </ScrollTabs>
          </LayoutGroup>
        </div>

        {/* Client grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((c) => (
              <motion.div
                key={c.key}
                layout
                initial={reduce ? false : { opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease }}
              >
                <ClientTile client={c} locale={locale} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}

function ClientTile({ client, locale }: { client: ShowcaseClient; locale: Locale }) {
  const Icon = sectorIcon[client.sector];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-steel-100 bg-surface transition duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-500/10">
      {/* Logo stage */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-linear-to-b from-steel-50 to-surface p-6">
        <div className="bg-grid-dark absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:opacity-0" />
        <div className="absolute inset-x-10 top-1/2 h-24 -translate-y-1/2 rounded-full bg-brand-400/0 blur-2xl transition duration-500 group-hover:bg-brand-400/20" />
        {client.logo ? (
          <span className="relative flex h-24 w-full max-w-[11rem] items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-steel-100 transition duration-500 group-hover:scale-105">
            <Image
              src={client.logo}
              alt={tr(client.name, locale)}
              width={220}
              height={110}
              className="max-h-full w-auto object-contain grayscale-[35%] transition duration-500 group-hover:grayscale-0"
            />
          </span>
        ) : (
          <span className="relative flex size-24 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-2xl font-bold text-white shadow-lg shadow-brand-500/30 transition duration-500 group-hover:scale-105">
            {initials(client, locale)}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col border-t border-steel-100 p-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
          <Icon className="size-3.5" />
          {tr(sectors[client.sector], locale)}
        </span>
        <h3 className="mt-2 leading-snug font-bold text-balance text-fg">{tr(client.name, locale)}</h3>
        <div className="mt-auto flex items-center justify-between pt-5">
          {client.projects > 0 ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-link">
              <Briefcase className="size-3.5" />
              <span dir="ltr">{client.projects}</span> {tr(t.project, locale)}
            </span>
          ) : (
            <span />
          )}
          <span className="h-1 w-8 rounded-full bg-steel-100 transition-all duration-500 group-hover:w-14 group-hover:bg-brand-500" />
        </div>
      </div>
    </article>
  );
}

function initials(client: Client, locale: Locale) {
  const name = tr(client.name, locale);
  if (locale === "en") return name.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).slice(0, 3).map((w) => w[0]).join("");
  const skip = new Set(["شركة", "وزارة", "هيئة", "الهيئة", "أمانة", "تطوير", "محافظة", "منطقة"]);
  return name
    .split(/\s+/)
    .filter((w) => !skip.has(w))
    .slice(0, 2)
    .map((w) => w.replace(/^ال(?=..)/, "")[0])
    .join(" ");
}
