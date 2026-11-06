import type { L } from "@/lib/i18n";

export type FleetItem = { key: string; name: L; count?: number };

/** Counts from the equipment chart in the company profile (p.36). */
export const fleet: FleetItem[] = [
  { key: "excavators", name: { ar: "بوكلينات (حفارات)", en: "Excavators" }, count: 88 },
  { key: "dump-trucks", name: { ar: "قلابات", en: "Dump Trucks" }, count: 70 },
  { key: "light-vehicles", name: { ar: "مركبات صغيرة", en: "Light Vehicles" }, count: 45 },
  { key: "bulldozers", name: { ar: "بلدوزرات", en: "Bulldozers" }, count: 35 },
  { key: "loaders", name: { ar: "شيولات", en: "Wheel Loaders" }, count: 19 },
  { key: "dyna", name: { ar: "دينات", en: "Dyna Trucks" }, count: 16 },
  { key: "rollers", name: { ar: "رصاصات (هراسات)", en: "Rollers" }, count: 15 },
  { key: "graders", name: { ar: "قريدرات", en: "Motor Graders" }, count: 9 },
];

export const fleetExtras: L[] = [
  { ar: "فرادات إسفلت", en: "Asphalt Pavers" },
  { ar: "كسارات", en: "Crushers" },
  { ar: "لوبد لنقل المعدات", en: "Lowbed Trailers" },
  { ar: "باصات", en: "Buses" },
];

export const fleetTotal = fleet.reduce((sum, f) => sum + (f.count ?? 0), 0);

export const fleetGallery = [
  "/images/fleet/excavators-row.jpg",
  "/images/fleet/team-volvo.jpg",
  "/images/fleet/sany-loading.jpg",
  "/images/fleet/komatsu-dozers.jpg",
  "/images/fleet/excavators-line.jpg",
  "/images/gallery/hyundai-breaker.jpg",
  "/images/gallery/komatsu-breaker.jpg",
  "/images/gallery/asphalt-paver.jpg",
];
