import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { href, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "about",
    "services",
    "projects",
    "fleet",
    "certificates",
    "clients",
    "careers",
    "contact",
    ...services.map((s) => `services/${s.slug}`),
    ...projects.map((p) => `projects/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${href("ar", path)}`,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${href(l, path)}`])) },
    priority: path === "" ? 1 : path.includes("/") ? 0.6 : 0.8,
  }));
}
