import type { L } from "@/lib/i18n";

export type CategoryKey = "earthworks" | "roads" | "infrastructure" | "fencing" | "urban" | "waste" | "land";

export const categories: Record<CategoryKey, L> = {
  earthworks: { ar: "أعمال ترابية وقطع صخري", en: "Earthworks & Rock Cutting" },
  roads: { ar: "طرق وسفلتة", en: "Roads & Asphalt" },
  infrastructure: { ar: "بنية تحتية ومياه", en: "Infrastructure & Water" },
  fencing: { ar: "سياجات وأسوار", en: "Fencing" },
  urban: { ar: "ساحات وأرصفة", en: "Urban Realm" },
  waste: { ar: "رفع المخلفات", en: "Debris Removal" },
  land: { ar: "تطوير أراضٍ وإسكان", en: "Land & Housing" },
};

/**
 * Fallback illustrative images per category. These come from the profile's general photo gallery
 * (PDF pp. 38–48) and are NOT tied to any specific project.
 */
const categoryCover: Record<CategoryKey, string> = {
  earthworks: "/images/gallery/earthworks-wide.jpg",
  roads: "/images/gallery/asphalt-2.jpg",
  infrastructure: "/images/gallery/earthworks-valley.jpg",
  fencing: "/images/gallery/slope-protection.jpg",
  urban: "/images/gallery/asphalt-1.jpg",
  waste: "/images/gallery/loader-fill.jpg",
  land: "/images/gallery/rock-cutting-1.jpg",
};

type ProjectInput = {
  slug: string;
  title: L;
  client: string; // key into clients
  /** Department / branch of the client, as written in the profile tables */
  clientUnit?: L;
  location: L;
  /** Year or full date as written in the company profile */
  start: string;
  year: number;
  duration?: L;
  category: CategoryKey;
  featured?: boolean;
  summary: L;
  /** The project's OWN photos — only those shown on its page in the profile (PDF pp. 11–22). */
  photos?: string[];
  /** Illustrative image from the general gallery, used when the project has no photos of its own. */
  cover?: string;
};

export type Project = ProjectInput & {
  /** Image to display: own photo if available, otherwise the illustrative cover. */
  image: string;
  /** True when `image` is illustrative rather than a photo of this project. */
  illustrative: boolean;
};

const months = (n: number): L => ({ ar: `${n} أشهر`, en: `${n} months` });
const days = (n: number): L => ({ ar: `${n} يوماً`, en: `${n} days` });
const oneYear: L = { ar: "سنة واحدة", en: "1 year" };

const NEOM: L = { ar: "نيوم", en: "NEOM" };
const ASEER: L = { ar: "منطقة عسير", en: "Aseer Region" };
const KHAMIS: L = { ar: "بلدية محافظة خميس مشيط", en: "Khamis Mushait Municipality" };
const MAJARDAH: L = { ar: "بلدية محافظة المجاردة", en: "Al-Majardah Municipality" };

const raw: ProjectInput[] = [
  // ——— NEOM ———
  {
    slug: "neom-trojena-lake-earthworks",
    title: { ar: "الأعمال الترابية والقطع الصخري لبحيرة تروجينا", en: "Trojena Lake Earthworks & Rock Cutting" },
    client: "neom",
    location: NEOM,
    start: "24/10/2023",
    year: 2023,
    category: "earthworks",
    featured: true,
    summary: {
      ar: "الأعمال الترابية والأرضية والقطع الصخري لإنشاء بحيرة تروجينا في نيوم.",
      en: "Earthworks, ground works and rock cutting to form the Trojena lake at NEOM.",
    },
    cover: "/images/gallery/earthworks-wide.jpg",
  },
  {
    slug: "neom-trojena-rcc-dam-foundation",
    title: { ar: "أعمال إنشاء سد تروجينا (RCC Dam Foundation)", en: "Trojena RCC Dam Foundation" },
    client: "neom",
    location: NEOM,
    start: "08/09/2022",
    year: 2022,
    category: "earthworks",
    featured: true,
    summary: {
      ar: "أعمال إنشاء أساسات سد تروجينا الخرساني المدموك (Neom Trojena RCC Dam Foundation).",
      en: "Foundation works for the Trojena roller-compacted concrete dam (Neom Trojena RCC Dam Foundation).",
    },
    cover: "/images/gallery/excavators-fleet.jpg",
  },
  {
    slug: "neom-trojena-ski-slopes",
    title: { ar: "حفريات منحدرات التزلج – تروجينا", en: "Trojena Fun Cluster — Ski Slope Excavation" },
    client: "neom",
    location: NEOM,
    start: "2021",
    year: 2021,
    category: "earthworks",
    summary: {
      ar: "أمر العمل رقم 14 (Trojena Fun Cluster WO#14): حفريات منحدرات التزلج 1 و2 والمبنى الرئيسي ومباني المجمع.",
      en: "Trojena Fun Cluster WO#14: excavation of ski slopes 1 & 2, the main building and the cluster buildings.",
    },
    cover: "/images/gallery/slope-finish-1.jpg",
  },
  {
    slug: "neom-camp-city-half-ring-road",
    title: { ar: "طريق الحزام الدائري – مدينة المعسكرات", en: "Camp City Road — West Part of Half Ring Road Network" },
    client: "neom",
    location: NEOM,
    start: "24/10/2023",
    year: 2023,
    category: "roads",
    summary: {
      ar: "أعمال القطع والردم للطرق وطبقات الرصف لطريق الحزام الدائري (الجزء الغربي) في نيوم.",
      en: "Road cut-and-fill and pavement layers for the western part of the half-ring road network at NEOM.",
    },
    cover: "/images/gallery/mountain-road.jpg",
  },
  {
    slug: "neom-gulf-infrastructure-wo14",
    title: { ar: "مشروع تنفيذ البنية التحتية لخليج نيوم WO-14", en: "NEOM Gulf Infrastructure WO-14" },
    client: "neom",
    location: NEOM,
    start: "21/03/2023",
    year: 2023,
    category: "infrastructure",
    summary: { ar: "تنفيذ أعمال البنية التحتية لخليج نيوم ضمن أمر العمل WO-14.", en: "Infrastructure works for NEOM Gulf under work order WO-14." },
    cover: "/images/gallery/earthworks-valley.jpg",
  },
  {
    slug: "neom-northern-radar-facilities",
    title: { ar: "البنية التحتية والمرافق المساندة لرادارات القطاع الشمالي", en: "Northern Sector Radar Facilities — Infrastructure" },
    client: "neom",
    location: NEOM,
    start: "12/01/2023",
    year: 2023,
    category: "infrastructure",
    summary: {
      ar: "تنفيذ البنية التحتية وإنشاء المرافق المساندة لرادارات القطاع الشمالي.",
      en: "Infrastructure and supporting facilities for the northern sector radars.",
    },
    cover: "/images/gallery/earthworks-dunes.jpg",
  },
  {
    slug: "neom-roads-excavation-asphalt",
    title: { ar: "أعمال إنشاء الطرق – حفر وترحيل وردم وسفلتة", en: "Road Construction — Excavation, Haulage, Fill & Asphalt" },
    client: "neom",
    location: NEOM,
    start: "10/11/2022",
    year: 2022,
    category: "roads",
    featured: true,
    summary: {
      ar: "أعمال إنشاء الطرق في نيوم: الحفر والنقل والردم والسفلتة.",
      en: "Road construction at NEOM: excavation, haulage, fill and asphalt paving.",
    },
    photos: ["/images/gallery/asphalt-paver.jpg"], // PDF p.13
  },
  {
    slug: "neom-031-wo12",
    title: { ar: "أمر العمل Neom 031 WO-12", en: "NEOM 031 WO-12" },
    client: "neom",
    location: NEOM,
    start: "29/10/2022",
    year: 2022,
    category: "earthworks",
    summary: { ar: "أعمال لصالح نيوم ضمن أمر العمل 031 WO-12.", en: "Works for NEOM under work order 031 WO-12." },
    cover: "/images/gallery/hyundai-breaker.jpg",
  },
  {
    slug: "neom-site-preparation-fw3",
    title: { ar: "تجهيز الموقع FW3 – نيوم", en: "NEOM Site Preparation FW3" },
    client: "neom",
    location: NEOM,
    start: "19/12/2021",
    year: 2021,
    category: "earthworks",
    summary: { ar: "أعمال تجهيز الموقع FW3 (Neom-Site Preparation FW3).", en: "Site preparation works for FW3 (Neom-Site Preparation FW3)." },
    cover: "/images/gallery/fill-site.jpg",
  },

  // ——— Royal reserves & security ———
  {
    slug: "king-khalid-royal-reserve-fence",
    title: { ar: "مشروع إنشاء سياج محمية الملك خالد الملكية (المرحلتان 1 و2)", en: "King Khalid Royal Reserve Fence (Phases 1 & 2)" },
    client: "imam-reserve",
    location: { ar: "محمية الملك خالد الملكية", en: "King Khalid Royal Reserve" },
    start: "05/11/2023",
    year: 2023,
    category: "fencing",
    featured: true,
    summary: {
      ar: "إنشاء سياج محمية الملك خالد الملكية على مرحلتين: بدأت المرحلة الأولى في 05/11/2023، والمرحلة الثانية في 21/01/2024 بمدة 90 يوماً.",
      en: "Perimeter fence for the King Khalid Royal Reserve, built in two phases: phase 1 started 05/11/2023, phase 2 started 21/01/2024 with a 90-day duration.",
    },
    photos: [
      "/images/projects/kkrr-fence.jpg", // p.12
      "/images/projects/kkrr-landscape.jpg", // p.11
      "/images/projects/kkrr-concrete.jpg", // p.12
      "/images/projects/kkrr-grader.jpg", // p.12
    ],
  },
  {
    slug: "king-abdulaziz-reserve-release-enclosures",
    title: { ar: "مشروع إنشاء مسيجات للإطلاق المقنن بمحمية الملك عبدالعزيز الملكية", en: "Controlled-Release Enclosures — King Abdulaziz Royal Reserve" },
    client: "king-abdulaziz-reserve",
    location: { ar: "محمية الملك عبدالعزيز الملكية", en: "King Abdulaziz Royal Reserve" },
    start: "02/07/2024",
    year: 2024,
    duration: months(8),
    category: "fencing",
    summary: {
      ar: "إنشاء مسيجات للإطلاق المقنن داخل محمية الملك عبدالعزيز الملكية.",
      en: "Construction of controlled-release enclosures inside the King Abdulaziz Royal Reserve.",
    },
    cover: "/images/gallery/slope-protection.jpg",
  },
  {
    slug: "border-guard-security-fence-aseer",
    title: { ar: "إزالة السياج التالف وتوريد وتركيب شبك أمني – قطاع الربوعة", en: "Security Fencing — Al-Rabou'a Sector, Aseer" },
    client: "border-guard",
    clientUnit: { ar: "قطاع الربوعة بمنطقة عسير", en: "Al-Rabou'a Sector, Aseer" },
    location: ASEER,
    start: "2025",
    year: 2025,
    duration: days(60),
    category: "fencing",
    featured: true,
    summary: {
      ar: "أعمال إزالة السياج التالف وتوريد وتركيب شبك أمني بحدود مسؤولية قطاع الربوعة بمنطقة عسير.",
      en: "Removal of damaged fencing and supply and installation of security mesh within the Al-Rabou'a sector's area of responsibility, Aseer.",
    },
    photos: ["/images/projects/border-fence-1.jpg", "/images/projects/border-fence-2.jpg"], // p.22
  },
  {
    slug: "mod-northern-radar-facilities",
    title: { ar: "البنية التحتية والمرافق المساندة لرادارات القطاع الشمالي", en: "Northern Sector Radar Facilities" },
    client: "mod",
    location: { ar: "القطاع الشمالي", en: "Northern Sector" },
    start: "27/06/2021",
    year: 2021,
    category: "infrastructure",
    summary: {
      ar: "تنفيذ البنية التحتية وإنشاء المرافق المساندة لرادارات القطاع الشمالي لصالح وزارة الدفاع.",
      en: "Infrastructure and supporting facilities for the northern sector radars, for the Ministry of Defense.",
    },
    cover: "/images/gallery/dozer-slope.jpg",
  },

  // ——— Roads, paving & urban ———
  {
    slug: "jubail-jalmouda-road-paving",
    title: { ar: "رصف طريق جلمودة", en: "Jalmouda Road Paving" },
    client: "rcjy",
    location: { ar: "الجبيل", en: "Jubail" },
    start: "26/02/2024",
    year: 2024,
    duration: oneYear,
    category: "urban",
    featured: true,
    summary: {
      ar: "رصف طريق جلمودة لصالح الهيئة الملكية بالجبيل وينبع، شاملاً الأرصفة والممرات.",
      en: "Paving of Jalmouda Road, including sidewalks and walkways, for the Royal Commission for Jubail & Yanbu.",
    },
    photos: ["/images/projects/jubail-paving-3.jpg", "/images/projects/jubail-paving-1.jpg", "/images/projects/jubail-paving-2.jpg"], // p.17
  },
  {
    slug: "king-faisal-naval-base-roads",
    title: { ar: "تحسين وتطوير سفلتة وأرصفة طرق سكن الأفراد – قاعدة الملك فيصل البحرية", en: "Road & Sidewalk Upgrade — King Faisal Naval Base Housing" },
    client: "navy",
    clientUnit: { ar: "الإدارة الهندسية والأشغال", en: "Engineering & Works Directorate" },
    location: { ar: "جدة", en: "Jeddah" },
    start: "02/05/2024",
    year: 2024,
    duration: months(6),
    category: "roads",
    summary: {
      ar: "عقد مشروع تحسين وتطوير سفلتة وأرصفة طرق بمنطقة سكن الأفراد بقاعدة الملك فيصل البحرية بجدة.",
      en: "Contract to improve and upgrade the asphalt and sidewalks of the personnel housing area at King Faisal Naval Base, Jeddah.",
    },
    cover: "/images/gallery/asphalt-1.jpg",
  },
  {
    slug: "muhayil-emergency-road-maintenance",
    title: { ar: "صيانة طارئة للشوارع والطرق المتضررة من السيول والأمطار", en: "Emergency Repair of Flood-Damaged Streets & Roads" },
    client: "aseer",
    clientUnit: { ar: "بلدية محافظة محايل عسير", en: "Muhayil Aseer Municipality" },
    location: { ar: "محايل عسير", en: "Muhayil, Aseer" },
    start: "2025",
    year: 2025,
    duration: days(270),
    category: "roads",
    featured: true,
    summary: {
      ar: "صيانة طارئة للشوارع والطرق المتضررة من جراء السيول والأمطار للحالة المطرية في محافظة محايل عسير.",
      en: "Emergency maintenance of streets and roads damaged by floods and heavy rain in Muhayil Aseer.",
    },
    photos: ["/images/projects/aseer-asphalt-1.jpg", "/images/projects/aseer-asphalt-2.jpg"], // p.21
  },
  {
    slug: "khamis-mushait-plan-517",
    title: { ar: "سفلتة مخططات المنح بالمملكة – مخطط 517", en: "Grant Subdivision Asphalting — Plan 517" },
    client: "momrah",
    clientUnit: KHAMIS,
    location: { ar: "خميس مشيط", en: "Khamis Mushait" },
    start: "15/04/2024",
    year: 2024,
    duration: oneYear,
    category: "roads",
    summary: { ar: "سفلتة مخطط المنح رقم 517 لصالح بلدية محافظة خميس مشيط.", en: "Asphalting of grant subdivision 517 for Khamis Mushait Municipality." },
    cover: "/images/gallery/asphalt-2.jpg",
  },
  {
    slug: "khamis-mushait-plan-613",
    title: { ar: "سفلتة مخططات المنح بالمملكة – مخطط 613", en: "Grant Subdivision Asphalting — Plan 613" },
    client: "momrah",
    clientUnit: KHAMIS,
    location: { ar: "خميس مشيط", en: "Khamis Mushait" },
    start: "15/03/2024",
    year: 2024,
    duration: oneYear,
    category: "roads",
    summary: { ar: "سفلتة مخطط المنح رقم 613 لصالح بلدية محافظة خميس مشيط.", en: "Asphalting of grant subdivision 613 for Khamis Mushait Municipality." },
    cover: "/images/gallery/asphalt-1.jpg",
  },
  {
    slug: "majardah-hospital-road",
    title: { ar: "صيانة طريق المستشفى العام الرابط مع طريق أحد", en: "General Hospital Link Road (Uhud Road) Maintenance" },
    client: "momrah",
    clientUnit: MAJARDAH,
    location: { ar: "المجاردة", en: "Al-Majardah" },
    start: "01/10/2023",
    year: 2023,
    duration: days(90),
    category: "roads",
    summary: {
      ar: "صيانة طريق المستشفى العام الرابط مع طريق أحد لصالح بلدية محافظة المجاردة.",
      en: "Maintenance of the general hospital link road to Uhud Road for Al-Majardah Municipality.",
    },
    cover: "/images/gallery/asphalt-2.jpg",
  },
  {
    slug: "majardah-tawheed-road",
    title: { ar: "صيانة وتأهيل طريق التوحيد", en: "Al-Tawheed Road Maintenance & Rehabilitation" },
    client: "momrah",
    clientUnit: MAJARDAH,
    location: { ar: "المجاردة", en: "Al-Majardah" },
    start: "01/10/2023",
    year: 2023,
    duration: days(90),
    category: "roads",
    summary: { ar: "صيانة وتأهيل طريق التوحيد لصالح بلدية محافظة المجاردة.", en: "Maintenance and rehabilitation of Al-Tawheed Road for Al-Majardah Municipality." },
    cover: "/images/gallery/asphalt-1.jpg",
  },
  {
    slug: "majardah-plazas-walkways",
    title: { ar: "إنشاء ساحات وممرات مشاة", en: "Public Plazas & Pedestrian Walkways" },
    client: "momrah",
    clientUnit: MAJARDAH,
    location: { ar: "المجاردة", en: "Al-Majardah" },
    start: "01/10/2023",
    year: 2023,
    duration: days(90),
    category: "urban",
    summary: { ar: "إنشاء ساحات وممرات مشاة لصالح بلدية محافظة المجاردة.", en: "Construction of public plazas and pedestrian walkways for Al-Majardah Municipality." },
    photos: ["/images/projects/majardah-walkway.jpg"], // p.16
  },

  // ——— Municipal earthworks & debris ———
  {
    slug: "jeddah-southern-ardiyah-cut-fill",
    title: { ar: "قطع وردم بالعرضية الجنوبية", en: "Southern Ardiyah Cut & Fill" },
    client: "jeddah",
    location: { ar: "جدة", en: "Jeddah" },
    start: "01/01/2024",
    year: 2024,
    category: "earthworks",
    featured: true,
    summary: {
      ar: "أعمال قطع وردم بالعرضية الجنوبية لصالح وزارة الشؤون البلدية والقروية والإسكان – أمانة جدة.",
      en: "Cut-and-fill works in Southern Ardiyah for the Ministry of Municipalities & Housing — Jeddah Municipality.",
    },
    photos: ["/images/projects/jeddah-cutfill-1.jpg", "/images/projects/jeddah-cutfill-2.jpg"], // p.18
  },
  {
    slug: "khamis-mushait-debris-programme",
    title: { ar: "برنامج نقل مخلفات المباني", en: "Building Debris Removal Programme" },
    client: "momrah",
    clientUnit: KHAMIS,
    location: { ar: "خميس مشيط (تندحة – الحفائر – يعرى – رغوة)", en: "Khamis Mushait (Tandaha, Al-Hafa'ir, Ya'ra, Raghwah)" },
    start: "10/10/2023",
    year: 2023,
    duration: days(90),
    category: "waste",
    summary: {
      ar: "نقل مخلفات البناء والهدم وأعمال التسوية وردم الفجوات بالمراكز الإدارية بمحافظة خميس مشيط (تندحة – الحفائر – يعرى – رغوة).",
      en: "Removal of construction and demolition waste, grading and void filling at Khamis Mushait's administrative centres (Tandaha, Al-Hafa'ir, Ya'ra, Raghwah).",
    },
    photos: ["/images/fleet/komatsu-dozers.jpg"], // p.14 (higher-res copy from the gallery)
  },
  {
    slug: "taif-debris-encroachments",
    title: { ar: "رفع ونقل مخلفات الأنقاض والهدم والبناء مجهولة المصدر وإزالة التعديات", en: "Debris Clearance & Encroachment Removal — Taif" },
    client: "taif",
    location: {
      ar: "الطائف (شمال الطائف الجديد – السيل الكبير – السيل الصغير – عشيرة – العطيف)",
      en: "Taif (New North Taif, Al-Sail Al-Kabeer, Al-Sail Al-Sagheer, Ushayrah, Al-Utayf)",
    },
    start: "16/08/2023",
    year: 2023,
    category: "waste",
    summary: {
      ar: "مشروع رفع ونقل مخلفات أنقاض وهدم وبناء مجهولة المصدر وإزالة التعديات لصالح أمانة الطائف.",
      en: "Clearing unattributed rubble, demolition and construction waste and removing encroachments for Taif Municipality.",
    },
    cover: "/images/gallery/loader-fill.jpg",
  },

  // ——— Housing ———
  {
    slug: "wali-al-ahd-housing-grading",
    title: { ar: "تسوية وتبتير قطع الأراضي لمشروع إسكان ولي العهد", en: "Plot Grading — Wali Al-Ahd Housing" },
    client: "housing",
    location: { ar: "منطقة مكة المكرمة", en: "Makkah Region" },
    start: "01/04/2020",
    year: 2020,
    category: "land",
    summary: {
      ar: "إنشاء وتنفيذ أعمال تسوية وتبتير قطع الأراضي لمشروع إسكان ولي العهد بمنطقة مكة المكرمة.",
      en: "Grading and plot formation for the Wali Al-Ahd housing scheme in Makkah Region.",
    },
    cover: "/images/gallery/komatsu-breaker.jpg",
  },
  {
    slug: "al-bisha-housing-grading",
    title: { ar: "تسوية وتبتير قطع الأراضي لمشروع إسكان البيشة", en: "Plot Grading — Al-Bisha Housing" },
    client: "housing",
    location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
    start: "14/04/2019",
    year: 2019,
    category: "land",
    summary: {
      ar: "إنشاء وتنفيذ أعمال تسوية وتبتير قطع الأراضي لمشروع إسكان البيشة.",
      en: "Grading and plot formation for the Al-Bisha housing scheme.",
    },
    photos: ["/images/projects/housing-rock-2.jpg", "/images/gallery/rock-cutting-2.jpg"], // p.15 (second is the higher-res copy)
  },
  {
    slug: "housing-land-grading-rock-breaking",
    title: { ar: "تسوية أرض وقص وتكسير صخور", en: "Land Grading, Rock Cutting & Breaking" },
    client: "housing",
    location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
    start: "01/04/2019",
    year: 2019,
    category: "land",
    summary: { ar: "تسوية أرض وقص وتكسير صخور لصالح وزارة الإسكان.", en: "Land grading, rock cutting and breaking for the Ministry of Housing." },
    cover: "/images/gallery/rock-cutting-1.jpg",
  },
  {
    slug: "wadi-al-jalil-housing-grading",
    title: { ar: "تسوية وتبتير قطع الأراضي لمشروع إسكان وادي الجليل", en: "Plot Grading — Wadi Al-Jalil Housing" },
    client: "housing",
    location: { ar: "محافظة الطائف", en: "Taif Governorate" },
    start: "05/10/2017",
    year: 2017,
    category: "land",
    summary: {
      ar: "إنشاء وتنفيذ أعمال تسوية وتبتير قطع الأراضي لمشروع إسكان وادي الجليل بمحافظة الطائف.",
      en: "Grading and plot formation for the Wadi Al-Jalil housing scheme in Taif Governorate.",
    },
    cover: "/images/gallery/breaker-pit.jpg",
  },

  // ——— National Water Company (PDF pp. 19–20: logo only, no photos) ———
  {
    slug: "asyah-sewage-phase-1",
    title: { ar: "إنشاء صرف صحي بمحافظة الأسياح – مرحلة أولى", en: "Al-Asyah Sewage Network — Phase 1" },
    client: "nwc",
    location: { ar: "محافظة الأسياح", en: "Al-Asyah Governorate" },
    start: "2024",
    year: 2024,
    category: "infrastructure",
    summary: { ar: "إنشاء شبكات الصرف الصحي بمحافظة الأسياح – المرحلة الأولى.", en: "Construction of the sewage network in Al-Asyah Governorate, phase one." },
    cover: "/images/gallery/fill-site.jpg",
  },
  {
    slug: "riyadh-al-khabra-sewage",
    title: { ar: "إنشاء صرف صحي بمحافظة رياض الخبراء", en: "Riyadh Al-Khabra Sewage Network" },
    client: "nwc",
    location: { ar: "محافظة رياض الخبراء", en: "Riyadh Al-Khabra Governorate" },
    start: "2024",
    year: 2024,
    category: "infrastructure",
    summary: { ar: "إنشاء شبكات الصرف الصحي بمحافظة رياض الخبراء.", en: "Construction of the sewage network in Riyadh Al-Khabra Governorate." },
    cover: "/images/gallery/earthworks-valley.jpg",
  },
  {
    slug: "al-hamah-landfill-cells",
    title: { ar: "إنشاء خلايا مطمر الحماه الجديدة", en: "Al-Hamah New Landfill Cells" },
    client: "nwc",
    location: ASEER,
    start: "2024",
    year: 2024,
    category: "infrastructure",
    summary: { ar: "إنشاء خلايا مطمر الحماه الجديدة بمنطقة عسير.", en: "Construction of the new Al-Hamah landfill cells in Aseer Region." },
    cover: "/images/gallery/earthworks-dunes.jpg",
  },
  {
    slug: "duba-villages-water-networks",
    title: { ar: "استكمال شبكات وخزانات مياه الشرب لقرى محافظة ضباء (المرحلة الأولى)", en: "Duba Villages Water Networks & Reservoirs (Phase 1)" },
    client: "nwc",
    location: { ar: "محافظة ضباء", en: "Duba Governorate" },
    start: "2021",
    year: 2021,
    category: "infrastructure",
    summary: {
      ar: "استكمال شبكات وخزانات مياه الشرب لقرى محافظة ضباء – المرحلة الأولى.",
      en: "Completion of potable water networks and reservoirs for the villages of Duba Governorate, phase one.",
    },
    cover: "/images/gallery/slope-finish-2.jpg",
  },
  {
    slug: "duba-water-networks",
    title: { ar: "استكمال شبكات مياه الشرب بمحافظة ضباء", en: "Duba Potable Water Networks" },
    client: "nwc",
    location: { ar: "محافظة ضباء", en: "Duba Governorate" },
    start: "2020",
    year: 2020,
    category: "infrastructure",
    summary: { ar: "استكمال شبكات مياه الشرب بمحافظة ضباء.", en: "Completion of potable water networks in Duba Governorate." },
    cover: "/images/gallery/fill-site.jpg",
  },
];

export const projects: Project[] = raw
  .map((p) => ({
    ...p,
    image: p.photos?.[0] ?? p.cover ?? categoryCover[p.category],
    illustrative: !p.photos?.length,
  }))
  .sort((a, b) => b.year - a.year);

/** Home-page order: strongest names first. */
const featuredOrder = [
  "neom-trojena-lake-earthworks",
  "neom-trojena-rcc-dam-foundation",
  "king-khalid-royal-reserve-fence",
  "jubail-jalmouda-road-paving",
  "muhayil-emergency-road-maintenance",
  "neom-roads-excavation-asphalt",
  "jeddah-southern-ardiyah-cut-fill",
  "border-guard-security-fence-aseer",
];

export const featuredProjects = featuredOrder.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
