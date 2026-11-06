import type { L } from "@/lib/i18n";

export type Certificate = {
  key: string;
  title: L;
  issuer: L;
  image: string;
  /** Reference numbers / facts printed on the document itself (no expiry dates). */
  details?: L[];
  highlight?: boolean;
};

/**
 * All documents from the company profile, "شهادات ووثائق شركة سان المتحدة" (PDF pp. 24–35).
 * ⚠️ Several show 2025 expiry dates — replace with renewed scans before launch (see MISSING.md).
 */
export const certificates: Certificate[] = [
  {
    key: "classification",
    title: { ar: "شهادة التصنيف – الدرجة الأولى", en: "Contractor Classification — First Grade" },
    issuer: { ar: "وزارة الشؤون البلدية والقروية والإسكان", en: "Ministry of Municipalities & Housing" },
    image: "/images/certs/classification-1.jpg",
    details: [
      { ar: "رقم الشهادة: 2021001903", en: "Certificate No. 2021001903" },
      { ar: "التقييم الائتماني: A · التقييم الفني: 80", en: "Credit rating: A · Technical rating: 80" },
      { ar: "المجال: التشييد والبناء", en: "Field: Construction & building" },
    ],
    highlight: true,
  },
  {
    key: "iso-9001",
    title: { ar: "ISO 9001:2015 – نظام إدارة الجودة", en: "ISO 9001:2015 — Quality Management" },
    issuer: { ar: "BQSR – معتمد من IAF", en: "BQSR — IAF accredited" },
    image: "/images/certs/iso-9001.jpg",
    details: [{ ar: "رقم الشهادة: BQSR25531", en: "Certificate No. BQSR25531" }],
    highlight: true,
  },
  {
    key: "iso-14001",
    title: { ar: "ISO 14001:2015 – نظام الإدارة البيئية", en: "ISO 14001:2015 — Environmental Management" },
    issuer: { ar: "BQSR – معتمد من IAF", en: "BQSR — IAF accredited" },
    image: "/images/certs/iso-14001.jpg",
    details: [{ ar: "رقم الشهادة: BQSR25532", en: "Certificate No. BQSR25532" }],
    highlight: true,
  },
  {
    key: "iso-45001",
    title: { ar: "ISO 45001:2018 – الصحة والسلامة المهنية", en: "ISO 45001:2018 — Occupational Health & Safety" },
    issuer: { ar: "BQSR – معتمد من IAF", en: "BQSR — IAF accredited" },
    image: "/images/certs/iso-45001.jpg",
    details: [{ ar: "رقم الشهادة: BQSR25533", en: "Certificate No. BQSR25533" }],
    highlight: true,
  },
  {
    key: "excellence",
    title: { ar: "شهادة التميز الأوروبية ISO CERT", en: "European ISO CERT — Certificate of Excellence" },
    issuer: { ar: "European ISO Cert", en: "European ISO Cert" },
    image: "/images/certs/european-iso-excellence.jpg",
    details: [{ ar: "رقم الاعتماد: UK13159", en: "Accreditation No. UK13159" }],
  },
  {
    key: "commercial-registration",
    title: { ar: "شهادة تسجيل الشركة (السجل التجاري)", en: "Company Registration Certificate (CR)" },
    issuer: { ar: "وزارة التجارة", en: "Ministry of Commerce" },
    image: "/images/certs/commercial-registration.jpg",
    details: [
      { ar: "السجل التجاري: 4031213334", en: "CR No. 4031213334" },
      { ar: "شركة ذات مسؤولية محدودة (شخص واحد)", en: "Limited liability company (single shareholder)" },
    ],
  },
  {
    key: "commerce-qr",
    title: { ar: "الرمز التجاري للتحقق من الوثائق (QR Code)", en: "Commercial QR Code for Document Verification" },
    issuer: { ar: "وزارة التجارة", en: "Ministry of Commerce" },
    image: "/images/certs/commerce-qr.jpg",
    details: [
      {
        ar: "للتحقق من: السجل التجاري، رخصة البلدية، شهادة السعودة، برنامج نطاقات، شهادة الزكاة، الغرفة التجارية",
        en: "Verifies: CR, municipal licence, Saudization certificate, Nitaqat, Zakat certificate, Chamber of Commerce",
      },
    ],
  },
  {
    key: "gosi",
    title: { ar: "شهادة التأمينات الاجتماعية", en: "Social Insurance (GOSI) Certificate" },
    issuer: { ar: "المؤسسة العامة للتأمينات الاجتماعية", en: "General Organization for Social Insurance" },
    image: "/images/certs/gosi.jpg",
    details: [{ ar: "رقم الاشتراك: 541060782", en: "Subscription No. 541060782" }],
  },
  {
    key: "balady",
    title: { ar: "رخصة النشاط التجاري", en: "Commercial Activity Licence" },
    issuer: { ar: "منصة بلدي – أمانة العاصمة المقدسة", en: "Balady — Holy Capital Municipality" },
    image: "/images/certs/balady-license.jpg",
    details: [
      { ar: "رقم الرخصة: 41022578559", en: "Licence No. 41022578559" },
      { ar: "النشاط: ترميمات المباني السكنية وغير السكنية", en: "Activity: Renovation of residential and non-residential buildings" },
    ],
  },
  {
    key: "sca",
    title: { ar: "عضوية الهيئة السعودية للمقاولين", en: "Saudi Contractors Authority Membership" },
    issuer: { ar: "الهيئة السعودية للمقاولين", en: "Saudi Contractors Authority" },
    image: "/images/certs/sca-membership.jpg",
    details: [{ ar: "رقم العضوية: 253325335", en: "Membership No. 253325335" }],
  },
  {
    key: "quarry",
    title: { ar: "رخصة محجر مواد بناء", en: "Building Materials Quarry Licence" },
    issuer: { ar: "وزارة الصناعة والثروة المعدنية", en: "Ministry of Industry & Mineral Resources" },
    image: "/images/certs/quarry-license.jpg",
    details: [
      { ar: "رقم الرخصة: 14457592", en: "Licence No. 14457592" },
      { ar: "الموقع: مجمع كسارات محافظة جدة الجديد – الجموم", en: "Site: New Jeddah Crushers Complex — Al-Jumum" },
      { ar: "نوع الخام: مواد ردميات · المساحة: 0.25 كم²", en: "Material: fill materials · Area: 0.25 km²" },
    ],
  },
  {
    key: "chamber",
    title: { ar: "شهادة الانتساب لغرفة مكة المكرمة", en: "Makkah Chamber Membership Certificate" },
    issuer: { ar: "غرفة مكة المكرمة", en: "Makkah Chamber of Commerce" },
    image: "/images/certs/makkah-chamber.jpg",
    details: [{ ar: "الدرجة: الثانية", en: "Grade: Second" }],
  },
  {
    key: "classification-annex",
    title: { ar: "ملحق شهادة التصنيف – الأنشطة", en: "Classification Annex — Activities" },
    issuer: { ar: "وزارة الشؤون البلدية والقروية والإسكان", en: "Ministry of Municipalities & Housing" },
    image: "/images/certs/classification-2.jpg",
    details: [
      {
        ar: "تشمل: الجسور والأنفاق، الطرق، شبكات المياه والصرف، المحطات الكهربائية، صيانة المباني",
        en: "Covers: bridges & tunnels, roads, water & sewage networks, power substations, building maintenance",
      },
    ],
  },
];
