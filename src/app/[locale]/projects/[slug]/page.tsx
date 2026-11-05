import { Building2, Calendar, Layers, MapPin, Timer } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/cards";
import { Gallery } from "@/components/Gallery";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, LinkArrow, PageHero, SectionHeading } from "@/components/sections";
import { getClient } from "@/data/clients";
import { categories, getProject, projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { href, tr } from "@/lib/i18n";
import { resolveLocale, type SlugParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: SlugParams) {
  const locale = await resolveLocale(params);
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMeta({
    locale,
    path: `projects/${project.slug}`,
    title: tr(project.title, locale),
    description: tr(project.summary, locale),
    image: project.cover,
  });
}

export default async function ProjectPage({ params }: SlugParams) {
  const locale = await resolveLocale(params);
  const project = getProject((await params).slug);
  if (!project) notFound();

  const client = getClient(project.client);
  const images = [project.cover!, ...(project.gallery ?? [])].map((src) => ({ src, alt: tr(project.title, locale) }));
  const related = projects
    .filter((p) => p.slug !== project.slug && (p.client === project.client || p.category === project.category))
    .slice(0, 3);

  const facts = [
    client && { icon: Building2, label: tr(ui.client, locale), value: tr(client.name, locale) },
    { icon: MapPin, label: tr(ui.location, locale), value: tr(project.location, locale) },
    { icon: Calendar, label: tr(ui.startDate, locale), value: project.start },
    project.duration && { icon: Timer, label: tr(ui.duration, locale), value: tr(project.duration, locale) },
    { icon: Layers, label: tr(ui.category, locale), value: tr(categories[project.category], locale) },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  return (
    <>
      <PageHero
        locale={locale}
        image={project.cover!}
        title={tr(project.title, locale)}
        crumbs={[{ label: tr({ ar: "مشاريعنا", en: "Projects" }, locale), href: href(locale, "projects") }, { label: tr(project.title, locale) }]}
      >
        {client && <p className="mt-5 text-lg font-semibold text-brand-300">{tr(client.name, locale)}</p>}
      </PageHero>

      <section className="container-x relative z-10 -mt-12">
        <Stagger
          className={`grid gap-px overflow-hidden rounded-3xl border border-steel-100 bg-steel-100 shadow-xl sm:grid-cols-2 ${
            facts.length === 5 ? "lg:grid-cols-5" : facts.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <StaggerItem key={label} className="bg-surface p-6">
              <Icon className="size-5 text-accent" />
              <div className="mt-3 text-sm text-steel-500">{label}</div>
              <div className="mt-1 font-semibold text-fg" dir={label === tr(ui.startDate, locale) ? "ltr" : undefined}>
                {value}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-5">
          <h2 className="text-2xl font-bold text-fg">{tr(ui.overview, locale)}</h2>
          <p className="mt-5 text-lg leading-loose text-steel-600">{tr(project.summary, locale)}</p>
          <div className="mt-8">
            <LinkArrow href={href(locale, "projects")}>{locale === "ar" ? "جميع المشاريع" : "All projects"}</LinkArrow>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <Gallery
            images={images}
            className={
              images.length === 1
                ? "grid"
                : "grid grid-cols-2 gap-4 [&>*:first-child]:col-span-2 [&>*:last-child:nth-child(even)]:col-span-2"
            }
            aspect="aspect-[16/10]"
          />
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="bg-steel-50 py-24">
          <div className="container-x">
            <SectionHeading eyebrow={tr(ui.projectsEyebrow, locale)} title={tr(ui.relatedProjects, locale)} />
            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard project={p} locale={locale} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <CtaBand locale={locale} />
    </>
  );
}
