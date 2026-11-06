import { Building2, Calendar, Handshake, Info, MapPin } from "lucide-react";
import { partnerPortfolios, partnerProjectsCount } from "@/data/partnerProjects";
import { tr, type Locale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./sections";

export function PartnerProjects({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <section id="partners" className="scroll-mt-24 bg-steel-50 py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={ar ? "تحالفاتنا" : "Our Alliances"}
          title={ar ? "مشاريع شركائنا المتحالفين" : "Projects by Our Alliance Partners"}
          text={
            ar
              ? "تعمل سان المتحدة ضمن تحالفات مع شركات محلية ودولية، ما يتيح لنا خبرات إضافية في المشاريع الكبرى والمتخصصة."
              : "San United works in alliance with local and international firms, giving us access to additional expertise on major and specialist projects."
          }
        />

        <Reveal delay={0.1} className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-[15px] text-link-hover">
          <Info className="mt-0.5 size-5 shrink-0" />
          <p>
            {ar
              ? `المشاريع التالية (${partnerProjectsCount} مشروعاً) نفذتها الشركات المتحالفة، وتُعرض هنا تحت اسم كل شركة منفذة.`
              : `The following ${partnerProjectsCount} projects were executed by our alliance partners and are listed under each executing company.`}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {partnerPortfolios.map((p) => (
            <Reveal key={p.key} className="grid gap-6 rounded-[2rem] border border-steel-100 bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <Handshake className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-fg">{tr(p.name, locale)}</h3>
                <p className="mt-2 leading-relaxed text-steel-500">{tr(p.activity, locale)}</p>
                <p className="mt-5 text-sm font-semibold text-accent">
                  {p.projects.length} {ar ? "مشاريع منجزة" : "completed projects"}
                </p>
              </div>

              <Stagger className="grid gap-3 sm:grid-cols-2 lg:col-span-8" gap={0.05}>
                {p.projects.map((proj) => (
                  <StaggerItem key={proj.title.en} className="rounded-2xl border border-steel-100 bg-steel-50 p-5">
                    <h4 className="font-bold text-fg" dir={proj.title.ar === proj.title.en ? "ltr" : undefined}>
                      {tr(proj.title, locale)}
                    </h4>
                    <div className="mt-3 space-y-1.5 text-sm text-steel-500">
                      <div className="flex items-center gap-2">
                        <Building2 className="size-4 shrink-0 text-steel-400" />
                        <span dir={proj.client.ar === proj.client.en ? "ltr" : undefined}>{tr(proj.client, locale)}</span>
                      </div>
                      {(proj.location || proj.year) && (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          {proj.location && (
                            <span className="flex items-center gap-2">
                              <MapPin className="size-4 shrink-0 text-steel-400" />
                              {tr(proj.location, locale)}
                            </span>
                          )}
                          {proj.year && (
                            <span className="flex items-center gap-2">
                              <Calendar className="size-4 shrink-0 text-steel-400" />
                              {proj.year}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
