import type { L } from "@/lib/i18n";

/**
 * Projects executed by San United's allied companies — NOT by San United itself.
 * Source: company profile, PDF pages 8–9 ("بعض الأعمال المنجزة لشركة ...").
 * Always present these under the partner's name.
 */
export type PartnerProject = {
  title: L;
  client: L;
  location?: L;
  year?: number;
};

export type PartnerPortfolio = {
  key: string;
  name: L;
  activity: L;
  projects: PartnerProject[];
};

const same = (s: string): L => ({ ar: s, en: s });

export const partnerPortfolios: PartnerPortfolio[] = [
  {
    key: "crocus",
    name: { ar: "كروكس قروب", en: "Crocus Group" },
    activity: { ar: "الإنشاءات (ملاعب، فنادق) والتطوير العقاري", en: "Construction (stadiums, hotels) and real-estate development" },
    projects: [
      {
        title: { ar: "إنشاء مبنى جامعة الشرق الأقصى الفيدرالية", en: "Far Eastern Federal University Building" },
        client: same("FEFU"),
        location: { ar: "فلاديفوستوك", en: "Vladivostok" },
        year: 2009,
      },
      {
        title: { ar: "إنشاء ملعب كالينينجراد", en: "Kaliningrad Stadium" },
        client: { ar: "مجموعة Crocus", en: "Crocus Group" },
        location: { ar: "كالينينجراد", en: "Kaliningrad" },
        year: 2018,
      },
      {
        title: { ar: "ساحة روستوف", en: "Rostov Arena" },
        client: { ar: "مجموعة Crocus", en: "Crocus Group" },
        location: { ar: "روستوف", en: "Rostov" },
        year: 2018,
      },
      {
        title: { ar: "إنشاء العقارات السكنية في منطقة موسكو", en: "Residential Developments, Moscow Region" },
        client: { ar: "مجموعة Crocus", en: "Crocus Group" },
        location: { ar: "منطقة موسكو", en: "Moscow Region" },
        year: 2018,
      },
      {
        title: { ar: "مستشفى القرم الجمهوري السريري", en: "Crimean Republican Clinical Hospital" },
        client: { ar: "سيماشكو", en: "Semashko" },
        location: { ar: "القرم", en: "Crimea" },
        year: 2020,
      },
      {
        title: { ar: "مستشفى كامتشاتكا الإقليمي", en: "Kamchatka Regional Hospital" },
        client: { ar: "مجموعة Crocus", en: "Crocus Group" },
        location: { ar: "كامتشاتكا", en: "Kamchatka" },
        year: 2013,
      },
    ],
  },
  {
    key: "radwan",
    name: { ar: "شركة رضوان الموريتانية", en: "Radwan Company (Mauritania)" },
    activity: { ar: "الأشغال العمومية والبناء", en: "Public works and construction" },
    projects: [
      {
        title: { ar: "مستشفى مدينة كيهيدي", en: "Kaédi City Hospital" },
        client: { ar: "شركة رضوان الموريتانية", en: "Radwan Company" },
        location: { ar: "كيهيدي، موريتانيا", en: "Kaédi, Mauritania" },
        year: 2017,
      },
      {
        title: { ar: "مشروع بناء مدرسة انتينو", en: "Antino School Construction" },
        client: { ar: "مندوبية تازر", en: "Tazer Delegation" },
        location: { ar: "موريتانيا", en: "Mauritania" },
        year: 2021,
      },
    ],
  },
  {
    key: "enmas",
    name: same("ENMAS India Private Limited"),
    activity: { ar: "صناعات الطاقة والنفط والغاز والبتروكيماويات ومعالجة المياه", en: "Energy, oil & gas, petrochemicals and water treatment" },
    // Titles are the plant specifications exactly as printed in the profile.
    projects: [
      { title: same("16 MW · 62 TPH · 0.18 ATA"), client: same("Sky Alloys & Power Pvt. Ltd."), year: 2013 },
      { title: same("20 MW · 80 TPH · 0.18 ATA"), client: same("Rashmi Cement Limited — Unit III"), year: 2018 },
      { title: same("3.6 TPH · 0.2 ATA"), client: same("United Cooling Systems Pvt. Ltd."), year: 2020 },
      { title: same("10 MW · 36 TPH · 0.15 ATA"), client: same("Resurgent Power Projects Limited"), year: 2022 },
      { title: same("15 MW · 58 TPH · 0.18 ATA"), client: same("Pushpit Steels Private Limited"), year: 2023 },
      { title: same("35 MW · 125 TPH · 0.2 ATA"), client: same("Crest Steel & Power Pvt. Limited") },
    ],
  },
];

export const partnerProjectsCount = partnerPortfolios.reduce((n, p) => n + p.projects.length, 0);
