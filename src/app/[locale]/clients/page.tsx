import { ClientsShowcase } from "@/components/ClientsShowcase";
import { CtaBand, PageHero } from "@/components/sections";
import { clients, type Sector } from "@/data/clients";
import { projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const intro = {
  ar: "نفخر بثقة كبرى الجهات الحكومية والمشاريع الوطنية وشركات القطاع الخاص في المملكة العربية السعودية.",
  en: "We are proud to be trusted by leading government entities, national projects and private-sector companies across Saudi Arabia.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "clients", title: tr(ui.clientsEyebrow, locale), description: tr(intro, locale) });
}

export default async function ClientsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const order: Sector[] = ["giga", "government", "utilities", "private"];
  const withCounts = clients.map((c) => ({ ...c, projects: projects.filter((p) => p.client === c.key).length }));

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/projects/kkrr-landscape.jpg"
        title={tr(ui.clientsTitle, locale)}
        text={tr(intro, locale)}
        crumbs={[{ label: tr({ ar: "عملاؤنا", en: "Clients" }, locale) }]}
      />

      <ClientsShowcase clients={withCounts} order={order} locale={locale} />

      <CtaBand locale={locale} />
    </>
  );
}
