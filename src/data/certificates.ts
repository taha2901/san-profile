import type { L } from "@/lib/i18n";

export type Certificate = {
  key: string;
  title: L;
  issuer: L;
  image: string;
  highlight?: boolean;
};

/**
 * ⚠️ Several of these documents in the profile show 2025 expiry dates.
 * Replace the images with the renewed versions before launch (see MISSING.md).
 */
export const certificates: Certificate[] = [
  {
    key: "classification",
    title: { ar: "تصنيف مقاول – الدرجة الأولى", en: "Contractor Classification — First Grade" },
    issuer: { ar: "وزارة الشؤون البلدية والقروية والإسكان", en: "Ministry of Municipalities & Housing" },
    image: "/images/certs/classification-1.jpg",
    highlight: true,
  },
  {
    key: "iso-9001",
    title: { ar: "ISO 9001:2015 – نظام إدارة الجودة", en: "ISO 9001:2015 — Quality Management" },
    issuer: { ar: "BQSR – معتمد من IAF", en: "BQSR — IAF accredited" },
    image: "/images/certs/iso-9001.jpg",
    highlight: true,
  },
  {
    key: "iso-14001",
    title: { ar: "ISO 14001:2015 – نظام الإدارة البيئية", en: "ISO 14001:2015 — Environmental Management" },
    issuer: { ar: "BQSR – معتمد من IAF", en: "BQSR — IAF accredited" },
    image: "/images/certs/iso-14001.jpg",
    highlight: true,
  },
  {
    key: "iso-45001",
    title: { ar: "ISO 45001:2018 – الصحة والسلامة المهنية", en: "ISO 45001:2018 — Occupational Health & Safety" },
    issuer: { ar: "BQSR – معتمد من IAF", en: "BQSR — IAF accredited" },
    image: "/images/certs/iso-45001.jpg",
    highlight: true,
  },
  {
    key: "sca",
    title: { ar: "عضوية الهيئة السعودية للمقاولين", en: "Saudi Contractors Authority Membership" },
    issuer: { ar: "الهيئة السعودية للمقاولين", en: "Saudi Contractors Authority" },
    image: "/images/certs/sca-membership.jpg",
  },
  {
    key: "excellence",
    title: { ar: "شهادة التميز المؤسسي", en: "Organizational Excellence Certificate" },
    issuer: { ar: "European ISO Cert", en: "European ISO Cert" },
    image: "/images/certs/european-iso-excellence.jpg",
  },
  {
    key: "quarry",
    title: { ar: "رخصة محجر مواد بناء", en: "Building Materials Quarry Licence" },
    issuer: { ar: "وزارة الصناعة والثروة المعدنية", en: "Ministry of Industry & Mineral Resources" },
    image: "/images/certs/quarry-license.jpg",
  },
  {
    key: "chamber",
    title: { ar: "عضوية غرفة مكة المكرمة", en: "Makkah Chamber Membership" },
    issuer: { ar: "الغرفة التجارية بمكة المكرمة", en: "Makkah Chamber of Commerce" },
    image: "/images/certs/makkah-chamber.jpg",
  },
  {
    key: "classification-annex",
    title: { ar: "ملحق شهادة التصنيف – الأنشطة", en: "Classification Annex — Activities" },
    issuer: { ar: "وزارة الشؤون البلدية والقروية والإسكان", en: "Ministry of Municipalities & Housing" },
    image: "/images/certs/classification-2.jpg",
  },
];
