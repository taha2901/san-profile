import { Reveal } from "@/components/motion";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { CtaBand, PageHero } from "@/components/sections";
import { projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const intro = {
  ar: "سجل من المشاريع المنفذة لصالح نيوم ووزارة الدفاع ووزارة الإسكان وشركة المياه الوطنية والأمانات والبلديات في مختلف مناطق المملكة.",
  en: "A track record of projects delivered for NEOM, the Ministry of Defense, the Ministry of Housing, the National Water Company and municipalities across the Kingdom.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "projects", title: tr({ ar: "مشاريعنا", en: "Projects" }, locale), description: tr(intro, locale) });
}

export default async function ProjectsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const specialties = new Set(projects.map((p) => p.category)).size;
  const clients = new Set(projects.map((p) => p.client)).size;

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/gallery/earthworks-wide.jpg"
        title={tr(ui.projectsTitle, locale)}
        text={tr(intro, locale)}
        crumbs={[{ label: tr({ ar: "مشاريعنا", en: "Projects" }, locale) }]}
      >
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[
            { v: projects.length, l: locale === "ar" ? "مشروعاً في هذا السجل" : "projects listed" },
            { v: clients, l: locale === "ar" ? "جهة مالكة" : "client entities" },
            { v: specialties, l: locale === "ar" ? "تخصصات تنفيذية" : "specialties" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-bold">{s.v}</div>
              <div className="text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="container-x py-20 lg:py-24">
        <Reveal>
          <ProjectsExplorer projects={projects} locale={locale} />
        </Reveal>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
