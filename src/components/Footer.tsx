import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { nav, ui } from "@/data/ui";
import { href, tr, type Locale } from "@/lib/i18n";
import { LinkedinIcon, XIcon, YoutubeIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const socials = [
    { url: company.social.x, label: "X", Icon: XIcon },
    { url: company.social.youtube, label: "YouTube", Icon: YoutubeIcon },
    { url: company.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ].filter((s) => s.url);

  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute -top-40 start-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl rtl:translate-x-1/2" />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo locale={locale} light />
          <p className="mt-6 max-w-sm leading-relaxed">
            {locale === "ar"
              ? "مقاول عام سعودي مصنف من الدرجة الأولى، متخصص في الأعمال الترابية والطرق والبنية التحتية للمشاريع الحكومية والكبرى."
              : "A first-grade Saudi general contractor specialising in earthworks, roads and infrastructure for government and giga-projects."}
          </p>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-2">
              {socials.map(({ url, label, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 transition hover:border-brand-400 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold tracking-wide text-white">{locale === "ar" ? "روابط سريعة" : "Quick links"}</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {nav.map((item) => (
              <li key={item.path}>
                <Link href={href(locale, item.path)} className="transition hover:text-white">
                  {tr(item.label, locale)}
                </Link>
              </li>
            ))}
            <li>
              <Link href={href(locale, "contact")} className="transition hover:text-white">
                {tr(ui.contactUs, locale)}
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold tracking-wide text-white">{tr({ ar: "خدماتنا", en: "Services" }, locale)}</h3>
          <ul className="mt-5 space-y-3 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={href(locale, `services/${s.slug}`)} className="transition hover:text-white">
                  {tr(s.title, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold tracking-wide text-white">{tr(ui.contactUs, locale)}</h3>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <span>{tr(company.address, locale)}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <a href={`tel:${company.phone}`} dir="ltr" className="transition hover:text-white">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-400" />
              <a href={`mailto:${company.email}`} className="transition hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm sm:flex-row">
          <p>
            © {year} {tr(company.name, locale)}. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <p className="text-white/50">
            {locale === "ar" ? "سجل تجاري" : "CR"} {company.crNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
