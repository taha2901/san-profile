import type { L } from "@/lib/i18n";

export type Sector = "giga" | "government" | "utilities" | "private";

export const sectors: Record<Sector, L> = {
  giga: { ar: "المشاريع الكبرى", en: "Giga-Projects" },
  government: { ar: "الجهات الحكومية", en: "Government" },
  utilities: { ar: "المرافق والطاقة", en: "Utilities & Energy" },
  private: { ar: "القطاع الخاص", en: "Private Sector" },
};

export type Client = {
  key: string;
  name: L;
  sector: Sector;
  /** Logos extracted from the company profile (PDF pp. 10–22, 49). Replace with official vector files when available. */
  logo?: string;
};

export const clients: Client[] = [
  { key: "neom", name: { ar: "نيوم", en: "NEOM" }, sector: "giga", logo: "/images/clients/neom.png" },
  { key: "mod", name: { ar: "وزارة الدفاع", en: "Ministry of Defense" }, sector: "government", logo: "/images/clients/mod.png" },
  { key: "housing", name: { ar: "وزارة الإسكان", en: "Ministry of Housing" }, sector: "government", logo: "/images/clients/housing.png" },
  {
    key: "momrah",
    name: { ar: "وزارة الشؤون البلدية والقروية والإسكان", en: "Ministry of Municipalities & Housing" },
    sector: "government",
    logo: "/images/clients/momrah.png",
  },
  { key: "nwc", name: { ar: "شركة المياه الوطنية", en: "National Water Company" }, sector: "utilities", logo: "/images/clients/nwc.png" },
  { key: "sec", name: { ar: "الشركة السعودية للكهرباء", en: "Saudi Electricity Company" }, sector: "utilities", logo: "/images/clients/sec.png" },
  { key: "aramco", name: { ar: "أرامكو السعودية", en: "Saudi Aramco" }, sector: "utilities", logo: "/images/clients/aramco.png" },
  { key: "rcjy", name: { ar: "الهيئة الملكية للجبيل وينبع", en: "Royal Commission for Jubail & Yanbu" }, sector: "government", logo: "/images/clients/rcjy.png" },
  { key: "navy", name: { ar: "القوات البحرية الملكية السعودية", en: "Royal Saudi Naval Forces" }, sector: "government" },
  { key: "border-guard", name: { ar: "حرس الحدود", en: "Border Guard" }, sector: "government", logo: "/images/clients/border-guard.png" },
  {
    key: "imam-reserve",
    name: { ar: "هيئة تطوير محمية الإمام عبدالعزيز بن محمد الملكية", en: "Imam Abdulaziz bin Mohammed Royal Reserve Development Authority" },
    sector: "government",
    // The profile pairs this authority with the King Khalid Royal Reserve logo (PDF p.11).
    logo: "/images/clients/imam-reserve.png",
  },
  {
    key: "king-abdulaziz-reserve",
    name: { ar: "هيئة تطوير محمية الملك عبدالعزيز الملكية", en: "King Abdulaziz Royal Reserve Development Authority" },
    sector: "government",
  },
  { key: "aseer", name: { ar: "أمانة منطقة عسير", en: "Aseer Municipality" }, sector: "government", logo: "/images/clients/aseer.png" },
  { key: "jeddah", name: { ar: "أمانة محافظة جدة", en: "Jeddah Municipality" }, sector: "government" },
  { key: "taif", name: { ar: "أمانة الطائف", en: "Taif Municipality" }, sector: "government" },
  { key: "elseif", name: { ar: "السيف مهندسون مقاولون", en: "El Seif Engineering Contracting" }, sector: "private", logo: "/images/clients/elseif.png" },
  { key: "alayuni", name: { ar: "شركة العيوني للاستثمار والمقاولات", en: "Al-Ayuni Investment & Contracting" }, sector: "private", logo: "/images/clients/alayuni.png" },
  { key: "alyamama", name: { ar: "اليمامة", en: "Al Yamama" }, sector: "private", logo: "/images/clients/alyamama.png" },
  { key: "shibh-aljazira", name: { ar: "شبه الجزيرة للمقاولات", en: "Shibh Al-Jazira Contracting" }, sector: "private", logo: "/images/clients/shibh-aljazira.png" },
];

export function getClient(key: string) {
  return clients.find((c) => c.key === key);
}
