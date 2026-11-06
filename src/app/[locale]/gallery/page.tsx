import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/motion";
import { CtaBand, Eyebrow, PageHero } from "@/components/sections";
import { galleryCount, gallerySections } from "@/data/gallery";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const title = { ar: "معرض الصور", en: "Photo Gallery" };
const intro = {
  ar: "لقطات من مواقع العمل والمعدات وفرق شركة سان المتحدة للمقاولات العامة.",
  en: "Snapshots from San United's work sites, equipment and teams.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "gallery", title: tr(title, locale), description: tr(intro, locale), image: "/images/gallery/earthworks-wide.jpg" });
}

export default async function GalleryPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const ar = locale === "ar";
  return (
    <>
      <PageHero
        locale={locale}
        image="/images/gallery/excavators-fleet.jpg"
        title={tr(title, locale)}
        text={tr(intro, locale)}
        crumbs={[{ label: tr(title, locale) }]}
      >
        <p className="mt-6 text-sm text-white/60">{ar ? `${galleryCount} صورة` : `${galleryCount} photos`}</p>
      </PageHero>

      <div className="container-x space-y-20 py-24 lg:py-28">
        {gallerySections.map((s) => (
          <section key={s.key}>
            <Reveal>
              <Eyebrow>{tr(s.title, locale)}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <Gallery
                images={s.images.map((src) => ({ src, alt: tr(s.title, locale) }))}
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
              />
            </Reveal>
          </section>
        ))}
      </div>

      <CtaBand locale={locale} />
    </>
  );
}
