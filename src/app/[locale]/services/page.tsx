import { ServiceCard } from "@/components/cards";
import { Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections";
import { services } from "@/data/services";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const intro = {
  ar: "من الحفر الصخري في المرتفعات الجبلية إلى سفلتة الشوارع وشبكات المياه، نقدم حلولاً متكاملة بأسطول مملوك وكوادر هندسية متخصصة.",
  en: "From rock excavation in mountain highlands to street asphalting and water networks, we deliver integrated solutions with an owned fleet and specialist engineers.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "services", title: tr(ui.servicesEyebrow, locale), description: tr(intro, locale) });
}

export default async function ServicesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return (
    <>
      <PageHero
        locale={locale}
        image="/images/gallery/rock-cutting-2.jpg"
        title={tr(ui.servicesTitle, locale)}
        text={tr(intro, locale)}
        crumbs={[{ label: tr(ui.servicesEyebrow, locale) }]}
      />
      <section className="container-x py-24 lg:py-28">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <StaggerItem key={s.slug}>
              <ServiceCard service={s} locale={locale} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
