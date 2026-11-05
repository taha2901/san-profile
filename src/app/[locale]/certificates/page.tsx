import { Award, BadgeCheck, Leaf, ShieldCheck } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, PageHero, SectionHeading } from "@/components/sections";
import { certificates } from "@/data/certificates";
import { company } from "@/data/company";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const intro = {
  ar: "مصنفون من الدرجة الأولى، وحاصلون على شهادات الأيزو للجودة والبيئة والسلامة المهنية، وأعضاء في الهيئة السعودية للمقاولين.",
  en: "First-grade classified, ISO-certified for quality, environment and occupational safety, and members of the Saudi Contractors Authority.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "certificates", title: tr(ui.certsEyebrow, locale), description: tr(intro, locale) });
}

export default async function CertificatesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const ar = locale === "ar";
  const pillars = [
    { icon: Award, title: ar ? "الدرجة الأولى" : "First Grade", text: ar ? "تصنيف مقدمي خدمات المدن – التشييد والبناء" : "City services contractor classification — construction" },
    { icon: BadgeCheck, title: "ISO 9001", text: ar ? "نظام إدارة الجودة" : "Quality management" },
    { icon: Leaf, title: "ISO 14001", text: ar ? "نظام الإدارة البيئية" : "Environmental management" },
    { icon: ShieldCheck, title: "ISO 45001", text: ar ? "الصحة والسلامة المهنية" : "Occupational health & safety" },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/gallery/safety-briefing.jpg"
        title={tr(ui.certsTitle, locale)}
        text={tr(intro, locale)}
        crumbs={[{ label: tr(ui.certsEyebrow, locale) }]}
      />

      <section className="container-x relative z-10 -mt-12">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} className="rounded-3xl border border-steel-100 bg-surface p-6 shadow-xl">
              <Icon className="size-8 text-accent" />
              <div className="mt-4 text-xl font-bold text-fg">{title}</div>
              <div className="mt-1 text-sm text-steel-500">{text}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="container-x py-24 lg:py-28">
        <SectionHeading
          eyebrow={ar ? "الوثائق الرسمية" : "Official documents"}
          title={ar ? "شهاداتنا ووثائقنا" : "Our certificates & documents"}
          text={ar ? `السجل التجاري ${company.crNumber} · عضوية الهيئة السعودية للمقاولين ${company.scaMembership}` : `CR ${company.crNumber} · SCA membership ${company.scaMembership}`}
        />
        <Reveal className="mt-12">
          <Gallery
            images={certificates.map((c) => ({ src: c.image, alt: tr(c.title, locale), caption: tr(c.title, locale) }))}
            className="grid grid-cols-2 gap-5 md:grid-cols-3"
            aspect="aspect-[3/4]"
            contain
          />
        </Reveal>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
