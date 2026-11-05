import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { href, tr, type Locale } from "@/lib/i18n";

export function Logo({ locale, light = false, className = "" }: { locale: Locale; light?: boolean; className?: string }) {
  return (
    <Link href={href(locale)} className={`group flex items-center gap-3 ${className}`} aria-label={tr(company.name, locale)}>
      <Image
        src="/images/brand/logo-mark-light.png"
        alt=""
        width={451}
        height={455}
        priority
        className={`h-11 w-auto transition-transform duration-500 group-hover:-translate-y-0.5 ${light ? "" : "hidden dark:block"}`}
      />
      {!light && (
        <Image
          src="/images/brand/logo-mark.png"
          alt=""
          width={451}
          height={455}
          priority
          className="h-11 w-auto transition-transform duration-500 group-hover:-translate-y-0.5 dark:hidden"
        />
      )}
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-tight ${light ? "text-white" : "text-fg"}`}>
          {locale === "ar" ? "سان المتحدة" : "SAN UNITED"}
        </span>
        <span className={`mt-1 text-[11px] font-medium ${light ? "text-white/70" : "text-steel-500"}`}>
          {tr(company.tagline, locale)}
        </span>
      </span>
    </Link>
  );
}
