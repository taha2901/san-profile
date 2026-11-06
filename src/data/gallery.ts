import type { L } from "@/lib/i18n";

/** Mirrors the profile's photo-gallery section (PDF pp. 38–48), grouped by its page titles. */
export type GallerySection = { key: string; title: L; images: string[] };

export const gallerySections: GallerySection[] = [
  {
    key: "works",
    title: { ar: "صور من أعمال شركة سان المتحدة", en: "From San United's Sites" },
    images: [
      "/images/gallery/dozer-slope.jpg",
      "/images/gallery/excavators-fleet.jpg",
      "/images/gallery/hyundai-breaker.jpg",
      "/images/gallery/safety-briefing.jpg",
      "/images/gallery/breaker-pit.jpg",
      "/images/gallery/mountain-road.jpg",
      "/images/gallery/komatsu-breaker.jpg",
      "/images/gallery/earthworks-wide.jpg",
      "/images/gallery/earthworks-valley.jpg",
      "/images/gallery/earthworks-dunes.jpg",
      "/images/gallery/fill-site.jpg",
      "/images/gallery/slope-protection.jpg",
      "/images/gallery/loader-fill.jpg",
      "/images/gallery/slope-finish-1.jpg",
      "/images/gallery/slope-finish-2.jpg",
    ],
  },
  {
    key: "asphalt",
    title: { ar: "سفلتة الشوارع والطرقات", en: "Street & Road Asphalting" },
    images: ["/images/gallery/asphalt-1.jpg", "/images/gallery/asphalt-2.jpg", "/images/gallery/asphalt-paver.jpg"],
  },
  {
    key: "benches",
    title: { ar: "قطع الإسطبات", en: "Rock Benching" },
    images: ["/images/gallery/rock-cutting-2.jpg", "/images/gallery/rock-cutting-1.jpg"],
  },
  {
    key: "fleet",
    title: { ar: "معرض الصور للآليات والمعدات", en: "Machinery & Equipment" },
    images: [
      "/images/fleet/team-volvo.jpg",
      "/images/fleet/excavators-row.jpg",
      "/images/fleet/sany-loading.jpg",
      "/images/fleet/komatsu-dozers.jpg",
      "/images/fleet/excavators-line.jpg",
    ],
  },
];

export const galleryCount = gallerySections.reduce((n, s) => n + s.images.length, 0);
