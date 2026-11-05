export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

/** A bilingual string. All content in /src/data uses this shape so it can later come from the CMS as-is. */
export type L = { ar: string; en: string };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function tr(value: L, locale: Locale): string {
  return value[locale];
}

export function dirOf(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Build an internal link, e.g. href("ar", "/projects") -> "/ar/projects/" */
export function href(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

const arDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/** Western digits are the norm on Saudi corporate sites; keep this helper for places that want Arabic-Indic. */
export function toArabicDigits(input: string | number): string {
  return String(input).replace(/\d/g, (d) => arDigits[Number(d)]);
}
