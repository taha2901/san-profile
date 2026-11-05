import type { L } from "@/lib/i18n";

/**
 * Single source of truth for company facts.
 * ⚠️ Several values here still need confirmation from the client — see MISSING.md.
 */
export const company = {
  name: {
    ar: "شركة سان المتحدة للمقاولات العامة",
    en: "San United General Contracting Co.",
  } satisfies L,
  shortName: { ar: "سان المتحدة", en: "San United" } satisfies L,
  tagline: { ar: "للمقاولات العامة", en: "General Contracting" } satisfies L,
  foundedYear: 2018,
  crNumber: "4031213334",
  scaMembership: "253325335",

  phone: "+966555135222",
  phoneDisplay: "+966 555 135 222",
  whatsapp: "966555135222",
  email: "info@san-united.com",
  website: "https://san-united.com",

  address: {
    ar: "3774 شارع القلع، حي العوالي، مكة المكرمة 24372، المملكة العربية السعودية",
    en: "3774 Al Qala St., Al Awali District, Makkah 24372, Saudi Arabia",
  } satisfies L,
  city: { ar: "مكة المكرمة، المملكة العربية السعودية", en: "Makkah, Saudi Arabia" } satisfies L,
  mapQuery: "Al Awali, Makkah, Saudi Arabia",

  social: {
    x: "https://twitter.com/AlTalhi_Com",
    youtube: "https://www.youtube.com/channel/UCSK09u1KPhFla_SpELnABjw",
    linkedin: "",
  },

  profilePdf: "", // add /files/san-united-profile.pdf once the client sends an updated profile

  workingHours: {
    ar: "الأحد – الخميس، 8:00 ص – 5:00 م",
    en: "Sun – Thu, 8:00 AM – 5:00 PM",
  } satisfies L,
};

export function yearsOfExperience(now = new Date()): number {
  return now.getFullYear() - company.foundedYear;
}

export type Stat = { value: number; suffix: string; label: L };

export function stats(): Stat[] {
  return [
    { value: yearsOfExperience(), suffix: "+", label: { ar: "سنوات من الخبرة", en: "Years of Experience" } },
    { value: 125, suffix: "+", label: { ar: "مشروع منجز وجارٍ", en: "Projects Delivered" } },
    { value: 1700, suffix: "+", label: { ar: "من القوى العاملة", en: "Workforce" } },
    { value: 290, suffix: "+", label: { ar: "معدة وآلية مملوكة", en: "Owned Machines & Vehicles" } },
  ];
}
