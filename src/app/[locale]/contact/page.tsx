import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/Forms";
import { WhatsappIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { InfoRow, PageHero } from "@/components/sections";
import { company } from "@/data/company";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const intro = {
  ar: "يسعدنا استقبال استفساراتكم وطلبات عروض الأسعار. فريقنا الهندسي يرد خلال يوم عمل واحد.",
  en: "We welcome your inquiries and quotation requests. Our engineering team replies within one business day.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "contact", title: tr(ui.contactUs, locale), description: tr(intro, locale) });
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const ar = locale === "ar";

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/gallery/asphalt-2.jpg"
        title={ar ? "لنبدأ مشروعك القادم" : "Let's start your next project"}
        text={tr(intro, locale)}
        crumbs={[{ label: tr(ui.contactUs, locale) }]}
      />

      <section className="container-x grid gap-12 py-24 lg:grid-cols-12 lg:py-28">
        <Reveal className="space-y-8 lg:col-span-4">
          <InfoRow icon={<Phone className="size-5" />} label={tr(ui.call, locale)}>
            <a href={`tel:${company.phone}`} dir="ltr" className="hover:text-link">
              {company.phoneDisplay}
            </a>
          </InfoRow>
          <InfoRow icon={<WhatsappIcon className="size-5" />} label={tr(ui.whatsapp, locale)}>
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-link">
              {company.phoneDisplay}
            </a>
          </InfoRow>
          <InfoRow icon={<Mail className="size-5" />} label={tr(ui.email, locale)}>
            <a href={`mailto:${company.email}`} className="hover:text-link">
              {company.email}
            </a>
          </InfoRow>
          <InfoRow icon={<MapPin className="size-5" />} label={tr(ui.address, locale)}>
            {tr(company.address, locale)}
          </InfoRow>
          <InfoRow icon={<Clock className="size-5" />} label={tr(ui.hours, locale)}>
            {tr(company.workingHours, locale)}
          </InfoRow>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[2rem] border border-steel-100 bg-surface p-6 shadow-[0_30px_80px_-30px_rgb(10_20_36/0.25)] sm:p-10 lg:col-span-8">
          <h2 className="text-2xl font-bold text-fg">{ar ? "أرسل طلبك" : "Send us a request"}</h2>
          <p className="mt-2 mb-8 text-steel-500">{ar ? "الحقول المعلّمة بـ * مطلوبة." : "Fields marked * are required."}</p>
          <ContactForm locale={locale} />
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <Reveal className="overflow-hidden rounded-[2rem] border border-steel-100">
          <iframe
            title={ar ? "موقع الشركة على الخريطة" : "Company location map"}
            src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed&hl=${locale}`}
            className="h-[26rem] w-full grayscale-[30%] dark:[filter:invert(0.9)_hue-rotate(180deg)_grayscale(30%)]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
