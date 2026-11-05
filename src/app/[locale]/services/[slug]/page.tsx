import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/cards";
import { Gallery } from "@/components/Gallery";
import { ArrowForward, ServiceIcon, WhatsappIcon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { company } from "@/data/company";
import { projects } from "@/data/projects";
import { getService, services } from "@/data/services";
import { ui } from "@/data/ui";
import { href, tr } from "@/lib/i18n";
import { resolveLocale, type SlugParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: SlugParams) {
  const locale = await resolveLocale(params);
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMeta({
    locale,
    path: `services/${service.slug}`,
    title: tr(service.title, locale),
    description: tr(service.summary, locale),
    image: service.image,
  });
}

export default async function ServicePage({ params }: SlugParams) {
  const locale = await resolveLocale(params);
  const service = getService((await params).slug);
  if (!service) notFound();
  const ar = locale === "ar";

  const related = projects.filter((p) => service.categories.includes(p.category)).slice(0, 3);
  const others = services.filter((s) => s.slug !== service.slug);
  const gallery = [service.image, ...service.gallery].map((src) => ({ src, alt: tr(service.title, locale) }));

  return (
    <>
      <PageHero
        locale={locale}
        image={service.image}
        title={tr(service.title, locale)}
        text={tr(service.summary, locale)}
        crumbs={[{ label: tr(ui.servicesEyebrow, locale), href: href(locale, "services") }, { label: tr(service.title, locale) }]}
      >
        <span className="mt-8 inline-flex size-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-xl shadow-brand-500/30">
          <ServiceIcon name={service.icon} className="size-8" />
        </span>
      </PageHero>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <Reveal>
            {service.description.map((p) => (
              <p key={p.en} className="mb-6 text-lg leading-loose text-steel-600">
                {tr(p, locale)}
              </p>
            ))}
          </Reveal>

          <Reveal className="mt-6">
            <h2 className="text-2xl font-bold text-fg">{tr(ui.scope, locale)}</h2>
          </Reveal>
          <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.scope.map((s) => (
              <StaggerItem key={s.en} className="flex items-center gap-3 rounded-2xl border border-steel-100 bg-steel-50 px-5 py-4">
                <CheckCircle2 className="size-5 shrink-0 text-accent" />
                <span className="font-medium text-steel-700">{tr(s, locale)}</span>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-14">
            <h2 className="mb-6 text-2xl font-bold text-fg">{tr(ui.gallery, locale)}</h2>
            <Gallery images={gallery} className="grid grid-cols-2 gap-4 [&>*:last-child:nth-child(odd)]:col-span-2" />
          </Reveal>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <Reveal className="overflow-hidden rounded-3xl bg-ink p-8 text-white">
              <h3 className="text-xl font-bold">{ar ? "تحتاج هذه الخدمة؟" : "Need this service?"}</h3>
              <p className="mt-3 text-white/70">
                {ar ? "تواصل مع فريقنا الهندسي للحصول على دراسة وعرض سعر." : "Talk to our engineering team for a site study and quotation."}
              </p>
              <div className="mt-6 grid gap-3">
                <Link href={href(locale, "contact")} className="flex items-center justify-center gap-2 rounded-full bg-brand-500 py-3.5 font-semibold transition hover:bg-brand-400">
                  {tr(ui.requestQuote, locale)}
                  <ArrowForward className="size-4" />
                </Link>
                <a href={`tel:${company.phone}`} className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-3.5 font-semibold transition hover:bg-white/10">
                  <Phone className="size-4" />
                  <span dir="ltr">{company.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  <WhatsappIcon className="size-4" />
                  {tr(ui.whatsapp, locale)}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl border border-steel-100 p-6">
              <h3 className="font-bold text-fg">{tr(ui.otherServices, locale)}</h3>
              <ul className="mt-4 divide-y divide-steel-100">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={href(locale, `services/${s.slug}`)} className="group flex items-center gap-3 py-3 text-steel-600 transition hover:text-link">
                      <ServiceIcon name={s.icon} className="size-5 text-brand-400" />
                      <span className="flex-1 text-[15px] font-medium">{tr(s.title, locale)}</span>
                      <ArrowForward className="size-4 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </aside>
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
