import { CheckCircle2, Eye, Gem, Handshake, Lightbulb, Medal, ShieldCheck, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, Eyebrow, PageHero, SectionHeading } from "@/components/sections";
import { about, partners } from "@/data/about";
import { stats } from "@/data/company";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "about", title: tr(ui.aboutEyebrow, locale), description: tr(about.intro, locale) });
}

const valueIcons = [Target, Medal, ShieldCheck, Handshake];
const pillarIcons = [TrendingUp, Lightbulb, Gem];

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const ar = locale === "ar";

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/gallery/safety-briefing.jpg"
        title={ar ? "نبني بثقة منذ 2018" : "Building with confidence since 2018"}
        text={tr(about.story, locale)}
        crumbs={[{ label: tr(ui.aboutEyebrow, locale) }]}
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={tr(ui.aboutEyebrow, locale)} title={ar ? "شركة سان المتحدة للمقاولات العامة" : "San United General Contracting"} />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-loose text-steel-600">{tr(about.intro, locale)}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Eye, title: ar ? "رؤيتنا" : "Our Vision", text: tr(about.vision, locale) },
              { icon: Target, title: ar ? "رسالتنا" : "Our Mission", text: tr(about.mission, locale) },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.1 * i} className="rounded-3xl border border-steel-100 bg-steel-50 p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-fg">{title}</h3>
                <p className="mt-3 leading-relaxed text-steel-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="relative lg:col-span-5">
          <div className="relative h-full min-h-[28rem] overflow-hidden rounded-[2rem]">
            <Image src="/images/fleet/excavators-line.jpg" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px bg-white/10">
              {stats().map((s) => (
                <div key={s.label.en} className="bg-ink/70 p-5 text-white backdrop-blur-md">
                  <div className="text-3xl font-bold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-white/70">{tr(s.label, locale)}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-steel-50 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={ar ? "قيمنا" : "Our Values"} title={ar ? "مبادئ تقود كل مشروع" : "Principles behind every project"} center />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <StaggerItem key={v.title.en} className="rounded-3xl bg-surface p-8 text-center shadow-sm">
                  <span className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-link">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-fg">{tr(v.title, locale)}</h3>
                  <p className="mt-3 text-steel-500">{tr(v.text, locale)}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={tr(ui.whyUs, locale)} title={ar ? "ما الذي يميز سان المتحدة؟" : "What sets San United apart?"} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {about.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <Reveal key={p.title.en} delay={i * 0.1} className="group rounded-3xl border border-steel-100 p-8 transition hover:border-brand-200 hover:shadow-xl">
                <Icon className="size-9 text-accent" />
                <h3 className="mt-6 text-xl font-bold text-fg">{tr(p.title, locale)}</h3>
                <p className="mt-3 leading-relaxed text-steel-500">{tr(p.text, locale)}</p>
              </Reveal>
            );
          })}
        </div>
        <Stagger className="mt-12 grid gap-4 rounded-3xl bg-ink p-8 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {about.strengths.map((s) => (
            <StaggerItem key={s.en} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-300" />
              <span className="text-white/85">{tr(s, locale)}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-steel-50 py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={ar ? "الهيكل الإداري" : "Organisation"}
              title={ar ? "فرق متخصصة تحت إدارة واحدة" : "Specialist teams under one management"}
              text={
                ar
                  ? "يقود الشركة مجلس إدارة ورئيس تنفيذي، تتبعهما إدارات متخصصة تغطي كل مراحل المشروع من التخطيط وحتى التسليم."
                  : "A board and CEO lead specialist departments covering every project stage, from planning to handover."
              }
            />
            <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
              {about.departments.map((d) => (
                <StaggerItem key={d.en} className="rounded-xl border border-steel-200 bg-surface px-4 py-3 font-medium text-steel-700">
                  {tr(d, locale)}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeading eyebrow={ar ? "شركاؤنا" : "Partners"} title={tr(ui.partnersTitle, locale)} text={tr(ui.partnersText, locale)} />
            <Stagger className="mt-10 space-y-3">
              {partners.map((p, i) => (
                <StaggerItem key={p.name} className="flex items-center gap-5 rounded-2xl bg-surface p-5 shadow-sm">
                  <span className="text-2xl font-bold text-brand-200" dir="ltr">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-bold text-fg" dir="ltr">{p.name}</div>
                    <div className="mt-1 text-sm text-steel-500">{tr(p.activity, locale)}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-6">
              <Eyebrow>{ar ? "رؤية المملكة 2030" : "Aligned with Saudi Vision 2030"}</Eyebrow>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
