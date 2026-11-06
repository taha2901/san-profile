import { Cog, Gauge, Truck, Wrench } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, LinkArrow, PageHero, SectionHeading } from "@/components/sections";
import { fleet, fleetExtras, fleetGallery, fleetTotal } from "@/data/fleet";
import { ui } from "@/data/ui";
import { href, tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "fleet", title: tr(ui.fleetEyebrow, locale), description: tr(ui.fleetText, locale), image: "/images/fleet/sany-loading.jpg" });
}

export default async function FleetPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const ar = locale === "ar";
  const max = Math.max(...fleet.map((f) => f.count ?? 0));

  const advantages = [
    { icon: Truck, title: ar ? "تعبئة فورية" : "Immediate mobilisation", text: ar ? "معداتنا جاهزة للانتقال إلى الموقع دون انتظار عقود تأجير." : "Our machines move to site without waiting on rental contracts." },
    { icon: Wrench, title: ar ? "ورش صيانة خاصة" : "In-house workshops", text: ar ? "ورشة لصيانة المعدات وتبديل قطع الغيار تضمن أقل وقت توقف." : "Our own maintenance and spare-parts workshop keeps downtime minimal." },
    { icon: Gauge, title: ar ? "علامات عالمية" : "World-class brands", text: ar ? "Volvo · Komatsu · CAT · Hyundai · SANY · Doosan" : "Volvo · Komatsu · CAT · Hyundai · SANY · Doosan" },
    { icon: Cog, title: ar ? "مشغلون محترفون" : "Skilled operators", text: ar ? "سائقون ومشغلون مدربون مع إدارة متخصصة لتوزيع المعدات على المشاريع." : "Trained operators with a dedicated team dispatching equipment across projects." },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/fleet/komatsu-dozers.jpg"
        title={tr(ui.fleetTitle, locale)}
        text={tr(ui.fleetText, locale)}
        crumbs={[{ label: tr({ ar: "المعدات", en: "Fleet" }, locale) }]}
      >
        <div className="mt-10 flex items-end gap-4">
          <span className="text-6xl font-bold sm:text-7xl">
            <Counter value={fleetTotal} suffix="+" />
          </span>
          <span className="pb-2 text-white/60">{ar ? "معدة وآلية مملوكة" : "owned machines & vehicles"}</span>
        </div>
      </PageHero>

      <section className="container-x py-24 lg:py-28">
        <SectionHeading eyebrow={ar ? "بيانات الأسطول" : "Fleet data"} title={ar ? "أعداد المعدات حسب النوع" : "Equipment by type"} />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {fleet.map((f) => (
            <StaggerItem key={f.key} className="rounded-2xl border border-steel-100 p-6">
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-semibold text-fg">{tr(f.name, locale)}</span>
                <span className="text-3xl font-bold text-link">
                  <Counter value={f.count ?? 0} />
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-steel-100">
                <div className="h-full rounded-full bg-linear-to-r from-brand-400 to-brand-600 rtl:bg-linear-to-l" style={{ width: `${((f.count ?? 0) / max) * 100}%` }} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-semibold text-steel-600">{ar ? "إضافة إلى:" : "Plus:"}</span>
          {fleetExtras.map((e) => (
            <span key={e.en} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-link-hover">
              {tr(e, locale)}
            </span>
          ))}
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-28">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x">
          <SectionHeading eyebrow={tr(ui.whyUs, locale)} title={ar ? "لماذا يهمك أننا نملك معداتنا؟" : "Why owning our fleet matters to you"} light />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <Icon className="size-8 text-brand-300" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-white/65">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 lg:py-28">
        <SectionHeading
          eyebrow={tr(ui.gallery, locale)}
          title={ar ? "معداتنا في المواقع" : "Our machines on site"}
          action={<LinkArrow href={href(locale, "gallery")}>{ar ? "معرض الصور الكامل" : "Full photo gallery"}</LinkArrow>}
        />
        <Reveal className="mt-12">
          <Gallery images={fleetGallery.map((src) => ({ src, alt: tr(ui.fleetEyebrow, locale) }))} className="grid grid-cols-2 gap-4 lg:grid-cols-4" />
        </Reveal>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
