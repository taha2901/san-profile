import { ClientCard } from "@/components/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, Eyebrow, PageHero } from "@/components/sections";
import { clients, sectors, type Sector } from "@/data/clients";
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
  const projectCount = (key: string) => projects.filter((p) => p.client === key).length;

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/projects/kkrr-landscape.jpg"
        title={tr(ui.clientsTitle, locale)}
        text={tr(intro, locale)}
        crumbs={[{ label: tr({ ar: "عملاؤنا", en: "Clients" }, locale) }]}
      />

      <section className="container-x space-y-16 py-24 lg:py-28">
        {order.map((sector) => {
          const list = clients.filter((c) => c.sector === sector);
          if (!list.length) return null;
          return (
            <div key={sector}>
              <Reveal>
                <Eyebrow>{tr(sectors[sector], locale)}</Eyebrow>
              </Reveal>
              <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => {
                  const n = projectCount(c.key);
                  return (
                    <StaggerItem key={c.key}>
                      <ClientCard client={c} locale={locale} meta={n > 0 ? `${n} ${tr(ui.projectsCount, locale)}` : undefined} />
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          );
        })}
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
