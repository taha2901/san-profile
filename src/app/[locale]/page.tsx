import { Award, BadgeCheck, CheckCircle2, ChevronDown, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard, ServiceCard } from "@/components/cards";
import { ArrowForward } from "@/components/icons";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, Eyebrow, LinkArrow, SectionHeading } from "@/components/sections";
import { about } from "@/data/about";
import { certificates } from "@/data/certificates";
import { clients } from "@/data/clients";
import { company, stats } from "@/data/company";
import { fleet, fleetTotal } from "@/data/fleet";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { ui } from "@/data/ui";
import { href, tr, type Locale } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, description: tr(ui.heroText, locale) });
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return (
    <>
      <Hero locale={locale} />
      <StatsBar locale={locale} />
      <AboutTeaser locale={locale} />
      <ServicesSection locale={locale} />
      <FeaturedProjects locale={locale} />
      <FleetSection locale={locale} />
      <ClientsMarquee locale={locale} />
      <CertificatesStrip locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const trust = [
    { icon: Award, label: ui.trustClass },
    { icon: BadgeCheck, label: ui.trustIso },
    { icon: ShieldCheck, label: ui.trustSca },
  ];
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-white">
      <Image src="/images/fleet/excavators-row.jpg" alt="" fill priority sizes="100vw" className="animate-kenburns -z-30 object-cover" />
      <div className="absolute inset-0 -z-20 bg-linear-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 -z-20 bg-linear-to-l from-ink/80 via-ink/30 to-transparent ltr:bg-linear-to-r" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(to_top,black,transparent_70%)]" />

      <div className="container-x pt-40 pb-16 lg:pb-24">
        <Stagger className="max-w-4xl" gap={0.12}>
          <StaggerItem>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-400" />
              </span>
              {tr(ui.heroEyebrow, locale)}
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-7 text-[2.6rem] leading-[1.12] font-bold text-balance sm:text-6xl lg:text-7xl">
              {tr(ui.heroTitle1, locale)}
              <span className="block bg-linear-to-l from-brand-200 via-white to-white bg-clip-text text-transparent ltr:bg-linear-to-r">
                {tr(ui.heroTitle2, locale)}
              </span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{tr(ui.heroText, locale)}</p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={href(locale, "projects")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-400"
              >
                {tr(ui.viewProjects, locale)}
                <ArrowForward className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link
                href={href(locale, "contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                {tr(ui.requestQuote, locale)}
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.7} className="mt-16 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3 lg:mt-24">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label.en} className="flex items-center gap-3 text-sm font-medium text-white/80">
              <Icon className="size-5 shrink-0 text-brand-300" />
              {tr(label, locale)}
            </div>
          ))}
        </Reveal>
      </div>

      <a
        href="#stats"
        className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-white/50 transition hover:text-white lg:flex rtl:translate-x-1/2"
      >
        {tr(ui.scroll, locale)}
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}

function StatsBar({ locale }: { locale: Locale }) {
  return (
    <section id="stats" className="relative z-10 bg-surface">
      <div className="container-x">
        <div className="grid grid-cols-1 divide-y divide-steel-100 border-b border-steel-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats().map((s, i) => (
            <Reveal key={s.label.en} delay={i * 0.08} className="px-2 py-10 text-center lg:py-14">
              <div className="text-4xl font-bold text-link sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm font-medium text-steel-500 sm:text-base">{tr(s.label, locale)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutTeaser({ locale }: { locale: Locale }) {
  return (
    <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <Reveal className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/5]">
          <Image src="/images/fleet/team-volvo.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="absolute -bottom-8 hidden w-1/2 overflow-hidden rounded-3xl border-8 border-surface shadow-2xl sm:block ltr:-right-6 rtl:-left-6">
          <div className="relative aspect-[4/3]">
            <Image src="/images/gallery/safety-briefing.jpg" alt="" fill sizes="25vw" className="object-cover" />
          </div>
        </div>
        <div className="absolute top-8 rounded-2xl bg-brand-500 px-6 py-5 text-white shadow-xl ltr:-left-4 rtl:-right-4">
          <div className="text-4xl font-bold" dir="ltr">{company.foundedYear}</div>
          <div className="mt-1 text-sm text-white/80">{locale === "ar" ? "سنة التأسيس" : "Founded"}</div>
        </div>
      </Reveal>

      <div>
        <SectionHeading eyebrow={tr(ui.aboutEyebrow, locale)} title={tr(ui.aboutTitle, locale)} text={tr(about.intro, locale)} />
        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
          {about.strengths.slice(0, 6).map((s) => (
            <StaggerItem key={s.en} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
              <span className="font-medium text-steel-700">{tr(s, locale)}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-10">
          <LinkArrow href={href(locale, "about")}>{locale === "ar" ? "تعرّف على الشركة" : "Discover the company"}</LinkArrow>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-steel-50 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={tr(ui.servicesEyebrow, locale)}
          title={tr(ui.servicesTitle, locale)}
          action={<LinkArrow href={href(locale, "services")}>{tr(ui.viewAll, locale)}</LinkArrow>}
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <StaggerItem key={s.slug}>
              <ServiceCard service={s} locale={locale} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeaturedProjects({ locale }: { locale: Locale }) {
  const [a, b, ...rest] = featuredProjects;
  return (
    <section className="container-x py-24 lg:py-32">
      <SectionHeading
        eyebrow={tr(ui.projectsEyebrow, locale)}
        title={tr(ui.projectsTitle, locale)}
        action={<LinkArrow href={href(locale, "projects")}>{tr(ui.viewAll, locale)}</LinkArrow>}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {[a, b].map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1}>
            <ProjectCard project={p} locale={locale} large />
          </Reveal>
        ))}
      </div>
      <Stagger className="mt-6 grid gap-6 md:grid-cols-3">
        {rest.slice(0, 3).map((p) => (
          <StaggerItem key={p.slug}>
            <ProjectCard project={p} locale={locale} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function FleetSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute -top-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl ltr:-right-32 rtl:-left-32" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={tr(ui.fleetEyebrow, locale)} title={tr(ui.fleetTitle, locale)} text={tr(ui.fleetText, locale)} light />
          <Reveal delay={0.1} className="mt-10 flex items-end gap-4">
            <span className="text-7xl font-bold text-white sm:text-8xl">
              <Counter value={fleetTotal} suffix="+" />
            </span>
            <span className="pb-3 text-lg text-white/60">{locale === "ar" ? "معدة وآلية" : "machines & vehicles"}</span>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <LinkArrow href={href(locale, "fleet")} light>
              {locale === "ar" ? "استعرض الأسطول" : "Explore the fleet"}
            </LinkArrow>
          </Reveal>
        </div>
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image src="/images/fleet/sany-loading.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </Reveal>
      </div>
      <div className="container-x">
        <Stagger className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {fleet.map((f) => (
            <StaggerItem key={f.key} className="bg-ink/95 p-6 transition hover:bg-brand-900 lg:p-8">
              <div className="text-4xl font-bold text-brand-300">
                <Counter value={f.count ?? 0} />
              </div>
              <div className="mt-2 font-medium text-white/80">{tr(f.name, locale)}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ClientsMarquee({ locale }: { locale: Locale }) {
  const half = Math.ceil(clients.length / 2);
  const rows = [clients.slice(0, half), clients.slice(half)];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={tr(ui.clientsEyebrow, locale)}
          title={tr(ui.clientsTitle, locale)}
          center
        />
      </div>
      <div className="mt-14 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" dir="ltr">
        {rows.map((row, r) => (
          <div key={r} className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 gap-4 pe-4" style={r === 1 ? { animationDirection: "reverse", animationDuration: "48s" } : undefined}>
              {[...row, ...row].map((c, i) => (
                <div
                  key={`${c.key}-${i}`}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  className="flex shrink-0 items-center gap-3 rounded-2xl border border-steel-100 bg-surface px-6 py-4 shadow-sm"
                >
                  {c.logo ? (
                    <span className="inline-flex h-11 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                      <Image src={c.logo} alt="" width={128} height={64} className="max-h-full w-auto object-contain" />
                    </span>
                  ) : (
                    <span className="size-2 rounded-full bg-brand-500" />
                  )}
                  <span className="text-lg font-semibold whitespace-nowrap text-steel-700">{tr(c.name, locale)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertificatesStrip({ locale }: { locale: Locale }) {
  const items = certificates.filter((c) => c.highlight);
  return (
    <section className="bg-steel-50 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={tr(ui.certsEyebrow, locale)}
          title={tr(ui.certsTitle, locale)}
          action={<LinkArrow href={href(locale, "certificates")}>{tr(ui.viewAll, locale)}</LinkArrow>}
        />
        <Stagger className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((c) => (
            <StaggerItem key={c.key}>
              <Link href={href(locale, "certificates")} className="group block h-full rounded-3xl bg-surface p-4 transition hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-steel-100">
                  <Image src={c.image} alt={tr(c.title, locale)} fill sizes="25vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 px-1 text-sm font-bold text-fg sm:text-base">{tr(c.title, locale)}</h3>
                <p className="mt-1 px-1 text-xs text-steel-500 sm:text-sm">{tr(c.issuer, locale)}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <Eyebrow>{locale === "ar" ? "سجل تجاري" : "Commercial Registration"} {company.crNumber}</Eyebrow>
        </Reveal>
      </div>
    </section>
  );
}
