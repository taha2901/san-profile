import type { Metadata } from "next";
import { company } from "@/data/company";
import { href, locales, tr, type Locale } from "./i18n";

export const siteUrl = company.website;

export function pageMeta({
  locale,
  path = "",
  title,
  description,
  image = "/images/fleet/excavators-row.jpg",
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description: string;
  image?: string;
}): Metadata {
  const brand = tr(company.name, locale);
  const fullTitle = title ? `${title} | ${tr(company.shortName, locale)}` : brand;
  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description,
    alternates: {
      canonical: href(locale, path),
      languages: Object.fromEntries([...locales.map((l) => [l, href(l, path)]), ["x-default", href("ar", path)]]),
    },
    openGraph: {
      type: "website",
      siteName: brand,
      title: fullTitle,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: href(locale, path),
      images: [{ url: image }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: tr(company.name, locale),
    alternateName: tr(company.name, locale === "ar" ? "en" : "ar"),
    url: siteUrl,
    logo: `${siteUrl}/images/brand/logo-mark.png`,
    image: `${siteUrl}/images/fleet/excavators-row.jpg`,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: "3774 Al Qala St., Al Awali",
      addressLocality: "Makkah",
      postalCode: "24372",
      addressCountry: "SA",
    },
    areaServed: "SA",
    sameAs: Object.values(company.social).filter(Boolean),
  };
}
