"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, type CategoryKey, type Project } from "@/data/projects";
import { tr, type Locale } from "@/lib/i18n";
import { ProjectCard } from "./cards";

export function ProjectsExplorer({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [active, setActive] = useState<CategoryKey | "all">("all");

  const counts = useMemo(() => {
    const c: Partial<Record<CategoryKey, number>> = {};
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [projects]);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);
  const keys = (Object.keys(categories) as CategoryKey[]).filter((k) => counts[k]);

  const chip = (key: CategoryKey | "all", label: string, count: number) => (
    <button
      key={key}
      type="button"
      onClick={() => setActive(key)}
      className={`relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors xl:px-5 ${
        active === key ? "text-white" : "text-steel-600 hover:text-fg"
      }`}
    >
      {active === key && (
        <motion.span layoutId="project-filter" className="absolute inset-0 -z-10 rounded-full bg-brand-500" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
      )}
      {label}
      <span className={`ms-2 text-xs ${active === key ? "text-white/70" : "text-steel-400"}`}>{count}</span>
    </button>
  );

  return (
    <div>
      <div className="isolate mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-steel-100 bg-steel-50 p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {chip("all", locale === "ar" ? "الكل" : "All", projects.length)}
        {keys.map((k) => chip(k, tr(categories[k], locale), counts[k] ?? 0))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={p} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
