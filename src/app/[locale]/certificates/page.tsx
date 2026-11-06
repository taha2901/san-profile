import { Award, BadgeCheck, Leaf, ShieldCheck } from "lucide-react";
import Image from "next/image";
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
            images={certificates
              .filter((c) => c.key !== "commerce-qr")
              .map((c) => ({
                src: c.image,
                alt: tr(c.title, locale),
                title: tr(c.title, locale),
                subtitle: tr(c.issuer, locale),
                lines: c.details?.map((d) => tr(d, locale)),
              }))}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            aspect="aspect-[4/3]"
            contain
          />
        </Reveal>
      </section>

      <section className="bg-steel-50 py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={ar ? "تحقق بنفسك" : "Verify it yourself"}
              title={ar ? "الرمز التجاري للتحقق من وثائق الشركة" : "Commercial QR code to verify our documents"}
              text={
                ar
                  ? "امسح الرمز بكاميرا الجوال للتحقق المباشر من بيانات الشركة لدى وزارة التجارة."
                  : "Scan the code with your phone camera to verify the company's records directly with the Ministry of Commerce."
              }
            />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {(ar
                ? ["السجل التجاري", "رخصة البلدية", "شهادة السعودة", "برنامج نطاقات", "شهادة الزكاة", "الغرفة التجارية"]
                : ["Commercial Registration", "Municipal licence", "Saudization certificate", "Nitaqat programme", "Zakat certificate", "Chamber of Commerce"]
              ).map((item) => (
                <StaggerItem key={item} className="flex items-center gap-3 rounded-xl border border-steel-200 bg-surface px-4 py-3 font-medium text-steel-700">
                  <BadgeCheck className="size-5 shrink-0 text-accent" />
                  {item}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1} className="mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-steel-100">
              <Image
                src="/images/certs/commerce-qr-code.png"
                alt={ar ? "الرمز التجاري – وزارة التجارة" : "Commercial QR code — Ministry of Commerce"}
                width={522}
                height={512}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-steel-500">
              {ar ? `السجل التجاري ${company.crNumber}` : `CR ${company.crNumber}`}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
