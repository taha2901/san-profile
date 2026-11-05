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

/** Used when a project has no photos of its own yet. */
const categoryCover: Record<CategoryKey, string> = {
  earthworks: "/images/gallery/earthworks-wide.jpg",
  roads: "/images/gallery/asphalt-2.jpg",
  infrastructure: "/images/gallery/earthworks-valley.jpg",
  fencing: "/images/projects/kkrr-fence.jpg",
  urban: "/images/projects/majardah-walkway.jpg",
  waste: "/images/projects/khamis-waste.jpg",
  land: "/images/projects/housing-rock-2.jpg",
};

export type Project = {
  slug: string;
  title: L;
  client: string; // key into clients
  location: L;
  /** Year or full date as written in the company profile */
  start: string;
  year: number;
  duration?: L;
  category: CategoryKey;
  featured?: boolean;
  summary: L;
  cover?: string;
  gallery?: string[];
};

const months = (n: number): L => ({ ar: `${n} أشهر`, en: `${n} months` });
const days = (n: number): L => ({ ar: `${n} يوم`, en: `${n} days` });
const oneYear: L = { ar: "سنة واحدة", en: "1 year" };

const NEOM: L = { ar: "نيوم، منطقة تبوك", en: "NEOM, Tabuk Region" };
const ASEER: L = { ar: "منطقة عسير", en: "Aseer Region" };

const raw: Project[] = [
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
      ar: "أعمال ترابية وأرضية وقطع صخري واسعة النطاق لإنشاء بحيرة تروجينا في المرتفعات الجبلية لنيوم.",
      en: "Large-scale earthworks, ground works and rock cutting to form the Trojena lake in NEOM's mountain highlands.",
    },
    cover: "/images/gallery/earthworks-wide.jpg",
    gallery: ["/images/gallery/slope-finish-1.jpg", "/images/gallery/slope-finish-2.jpg", "/images/gallery/earthworks-valley.jpg"],
  },
  {
    slug: "neom-trojena-rcc-dam-foundation",
    title: { ar: "أعمال أساسات سد تروجينا (RCC)", en: "Trojena RCC Dam Foundation" },
    client: "neom",
    location: NEOM,
    start: "08/09/2022",
    year: 2022,
    category: "earthworks",
    featured: true,
    summary: {
      ar: "أعمال الحفر والقطع الصخري لتجهيز أساسات سد تروجينا الخرساني المدموك بالهراسات.",
      en: "Excavation and rock cutting to prepare the foundation of the Trojena roller-compacted concrete dam.",
    },
    cover: "/images/gallery/excavators-fleet.jpg",
    gallery: ["/images/gallery/hyundai-breaker.jpg", "/images/gallery/breaker-pit.jpg", "/images/gallery/dozer-slope.jpg"],
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
      ar: "أمر العمل رقم 14: حفريات منحدرات التزلج (1 و2) والمبنى الرئيسي ومباني المجمع الترفيهي في تروجينا.",
      en: "Work Order #14: excavation of ski slopes 1 & 2, the main building and the fun-cluster buildings at Trojena.",
    },
    cover: "/images/gallery/rock-cutting-2.jpg",
  },
  {
    slug: "neom-camp-city-half-ring-road",
    title: { ar: "طريق الحزام الدائري – مدينة المعسكرات", en: "Camp City Road — West Half-Ring Road Network" },
    client: "neom",
    location: NEOM,
    start: "24/10/2023",
    year: 2023,
    category: "roads",
    summary: {
      ar: "أعمال القطع والردم للطرق وطبقات الرصف للجزء الغربي من شبكة طريق الحزام الدائري.",
      en: "Cut-and-fill and pavement layers for the western part of the half-ring road network.",
    },
    cover: "/images/gallery/mountain-road.jpg",
  },
  {
    slug: "neom-gulf-infrastructure-wo14",
    title: { ar: "البنية التحتية لخليج نيوم WO-14", en: "NEOM Gulf Infrastructure WO-14" },
    client: "neom",
    location: NEOM,
    start: "21/03/2023",
    year: 2023,
    category: "infrastructure",
    summary: {
      ar: "تنفيذ أعمال البنية التحتية لمنطقة خليج نيوم ضمن أمر العمل WO-14.",
      en: "Infrastructure works for the NEOM Gulf area under work order WO-14.",
    },
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
      en: "Infrastructure and supporting facilities for the northern sector radar installations.",
    },
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
      ar: "تنفيذ طرق متكاملة تشمل الحفر والنقل والردم والسفلتة في مواقع نيوم.",
      en: "Complete road delivery across NEOM sites: excavation, haulage, fill and asphalt paving.",
    },
    cover: "/images/projects/neom-paver.jpg",
    gallery: ["/images/gallery/asphalt-paver.jpg"],
  },
  {
    slug: "neom-031-wo12",
    title: { ar: "أمر العمل 031 WO-12 – نيوم", en: "NEOM 031 WO-12" },
    client: "neom",
    location: NEOM,
    start: "29/10/2022",
    year: 2022,
    category: "earthworks",
    summary: { ar: "أعمال ترابية ضمن أمر العمل 031 WO-12 في نيوم.", en: "Earthworks under NEOM work order 031 WO-12." },
  },
  {
    slug: "neom-site-preparation-fw3",
    title: { ar: "تجهيز الموقع FW3 – نيوم", en: "NEOM Site Preparation FW3" },
    client: "neom",
    location: NEOM,
    start: "19/12/2021",
    year: 2021,
    category: "earthworks",
    summary: { ar: "أعمال تسوية وتجهيز الموقع FW3.", en: "Grading and site preparation for site FW3." },
  },

  // ——— Royal reserves & security ———
  {
    slug: "king-khalid-royal-reserve-fence",
    title: { ar: "سياج محمية الملك خالد الملكية (المرحلتان 1 و2)", en: "King Khalid Royal Reserve Fence (Phases 1 & 2)" },
    client: "imam-reserve",
    location: { ar: "محمية الملك خالد الملكية، منطقة الرياض", en: "King Khalid Royal Reserve, Riyadh Region" },
    start: "05/11/2023",
    year: 2023,
    category: "fencing",
    featured: true,
    summary: {
      ar: "إنشاء سياج المحمية على مرحلتين، بدأت الأولى في 05/11/2023 والثانية في 21/01/2024، شاملاً تمهيد المسارات والقواعد الخرسانية وتركيب السياج.",
      en: "Reserve perimeter fence built in two phases (started 05/11/2023 and 21/01/2024), including track grading, concrete footings and fence installation.",
    },
    cover: "/images/projects/kkrr-fence.jpg",
    gallery: ["/images/projects/kkrr-landscape.jpg", "/images/projects/kkrr-concrete.jpg", "/images/projects/kkrr-grader.jpg"],
  },
  {
    slug: "king-abdulaziz-reserve-release-enclosures",
    title: { ar: "مسيجات الإطلاق المقنن بمحمية الملك عبدالعزيز الملكية", en: "Controlled-Release Enclosures — King Abdulaziz Royal Reserve" },
    client: "king-abdulaziz-reserve",
    location: { ar: "محمية الملك عبدالعزيز الملكية", en: "King Abdulaziz Royal Reserve" },
    start: "02/07/2024",
    year: 2024,
    duration: months(8),
    category: "fencing",
    summary: {
      ar: "إنشاء مسيجات مخصصة لبرامج الإطلاق المقنن للحياة الفطرية داخل المحمية.",
      en: "Purpose-built enclosures for the reserve's controlled wildlife-release programmes.",
    },
  },
  {
    slug: "border-guard-security-fence-aseer",
    title: { ar: "الشبك الأمني – قطاع الربوعة بمنطقة عسير", en: "Security Fencing — Al-Rabou'a Sector, Aseer" },
    client: "border-guard",
    location: ASEER,
    start: "2025",
    year: 2025,
    duration: days(60),
    category: "fencing",
    featured: true,
    summary: {
      ar: "إزالة السياج التالف وتوريد وتركيب شبك أمني بحدود مسؤولية قطاع الربوعة في تضاريس جبلية.",
      en: "Removal of damaged fencing and supply and installation of security mesh along the Al-Rabou'a sector in mountain terrain.",
    },
    cover: "/images/projects/border-fence-1.jpg",
    gallery: ["/images/projects/border-fence-2.jpg"],
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
      en: "Infrastructure and supporting facilities for northern sector radars, for the Ministry of Defense.",
    },
  },

  // ——— Roads & asphalt ———
  {
    slug: "jubail-jalmouda-road-paving",
    title: { ar: "رصف طريق جلمودة", en: "Jalmouda Road Paving" },
    client: "rcjy",
    location: { ar: "الجبيل، المنطقة الشرقية", en: "Jubail, Eastern Province" },
    start: "26/02/2024",
    year: 2024,
    duration: oneYear,
    category: "urban",
    featured: true,
    summary: {
      ar: "أعمال رصف الأرصفة والممرات بالبلاط المتداخل وتطوير جوانب الطريق في الجبيل.",
      en: "Interlock paving of sidewalks and walkways and roadside upgrades in Jubail.",
    },
    cover: "/images/projects/jubail-paving-3.jpg",
    gallery: ["/images/projects/jubail-paving-1.jpg", "/images/projects/jubail-paving-2.jpg"],
  },
  {
    slug: "king-faisal-naval-base-roads",
    title: { ar: "تحسين وتطوير سفلتة وأرصفة سكن الأفراد – قاعدة الملك فيصل البحرية", en: "Road & Sidewalk Upgrade — King Faisal Naval Base Housing" },
    client: "navy",
    location: { ar: "جدة", en: "Jeddah" },
    start: "02/05/2024",
    year: 2024,
    duration: months(6),
    category: "roads",
    summary: {
      ar: "تحسين وتطوير سفلتة وأرصفة الطرق بمنطقة سكن الأفراد في قاعدة الملك فيصل البحرية بجدة.",
      en: "Asphalt and sidewalk upgrade of the personnel housing area at King Faisal Naval Base, Jeddah.",
    },
  },
  {
    slug: "muhayil-emergency-road-maintenance",
    title: { ar: "الصيانة الطارئة للطرق المتضررة من السيول – محايل عسير", en: "Emergency Repair of Flood-Damaged Roads — Muhayil Aseer" },
    client: "aseer",
    location: { ar: "محايل عسير", en: "Muhayil, Aseer" },
    start: "2025",
    year: 2025,
    duration: days(270),
    category: "roads",
    featured: true,
    summary: {
      ar: "صيانة طارئة للشوارع والطرق المتضررة من السيول والأمطار، شملت إعادة السفلتة والدمك.",
      en: "Emergency repair of streets and roads damaged by floods and heavy rain, including resurfacing and compaction.",
    },
    cover: "/images/projects/aseer-asphalt-1.jpg",
    gallery: ["/images/projects/aseer-asphalt-2.jpg"],
  },
  {
    slug: "khamis-mushait-plan-517",
    title: { ar: "سفلتة مخططات المنح – مخطط 517", en: "Grant Subdivision Asphalting — Plan 517" },
    client: "momrah",
    location: { ar: "خميس مشيط", en: "Khamis Mushait" },
    start: "15/04/2024",
    year: 2024,
    duration: oneYear,
    category: "roads",
    summary: {
      ar: "سفلتة مخطط المنح رقم 517 لصالح بلدية محافظة خميس مشيط.",
      en: "Asphalting of grant subdivision 517 for Khamis Mushait Municipality.",
    },
    cover: "/images/gallery/asphalt-1.jpg",
  },
  {
    slug: "khamis-mushait-plan-613",
    title: { ar: "سفلتة مخططات المنح – مخطط 613", en: "Grant Subdivision Asphalting — Plan 613" },
    client: "momrah",
    location: { ar: "خميس مشيط", en: "Khamis Mushait" },
    start: "15/03/2024",
    year: 2024,
    duration: oneYear,
    category: "roads",
    summary: {
      ar: "سفلتة مخطط المنح رقم 613 لصالح بلدية محافظة خميس مشيط.",
      en: "Asphalting of grant subdivision 613 for Khamis Mushait Municipality.",
    },
  },
  {
    slug: "majardah-hospital-road",
    title: { ar: "صيانة طريق المستشفى العام الرابط مع طريق أحد", en: "General Hospital Link Road Maintenance" },
    client: "momrah",
    location: { ar: "المجاردة، منطقة عسير", en: "Al-Majardah, Aseer" },
    start: "01/10/2023",
    year: 2023,
    duration: days(90),
    category: "roads",
    summary: {
      ar: "صيانة طريق المستشفى العام الرابط مع طريق أحد لصالح بلدية محافظة المجاردة.",
      en: "Maintenance of the general hospital link road to Uhud Road for Al-Majardah Municipality.",
    },
  },
  {
    slug: "majardah-tawheed-road",
    title: { ar: "صيانة وتأهيل طريق التوحيد", en: "Al-Tawheed Road Rehabilitation" },
    client: "momrah",
    location: { ar: "المجاردة، منطقة عسير", en: "Al-Majardah, Aseer" },
    start: "01/10/2023",
    year: 2023,
    duration: days(90),
    category: "roads",
    summary: {
      ar: "صيانة وتأهيل طريق التوحيد لصالح بلدية محافظة المجاردة.",
      en: "Rehabilitation of Al-Tawheed Road for Al-Majardah Municipality.",
    },
  },
  {
    slug: "majardah-plazas-walkways",
    title: { ar: "إنشاء ساحات وممرات مشاة", en: "Public Plazas & Pedestrian Walkways" },
    client: "momrah",
    location: { ar: "المجاردة، منطقة عسير", en: "Al-Majardah, Aseer" },
    start: "01/10/2023",
    year: 2023,
    duration: days(90),
    category: "urban",
    summary: {
      ar: "تنفيذ ساحات عامة وممرات مشاة مرصوفة مع الجلسات والإنارة لصالح بلدية محافظة المجاردة.",
      en: "Paved public plazas and pedestrian walkways with seating and lighting for Al-Majardah Municipality.",
    },
    cover: "/images/projects/majardah-walkway.jpg",
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
      ar: "أعمال قطع صخري وردم وتسوية لصالح أمانة محافظة جدة.",
      en: "Rock cutting, filling and grading works for Jeddah Municipality.",
    },
    cover: "/images/projects/jeddah-cutfill-1.jpg",
    gallery: ["/images/projects/jeddah-cutfill-2.jpg"],
  },
  {
    slug: "khamis-mushait-debris-programme",
    title: { ar: "برنامج نقل مخلفات المباني بالمراكز الإدارية", en: "Building Debris Removal Programme" },
    client: "momrah",
    location: { ar: "خميس مشيط (تندحة – الحفائر – يعرى – رغوة)", en: "Khamis Mushait (Tandaha, Al-Hafa'ir, Ya'ra, Raghwah)" },
    start: "10/10/2023",
    year: 2023,
    duration: days(90),
    category: "waste",
    summary: {
      ar: "نقل مخلفات البناء والهدم وأعمال التسوية وردم الفجوات بالمراكز الإدارية التابعة لمحافظة خميس مشيط.",
      en: "Removal of construction and demolition waste, grading and void filling across Khamis Mushait's administrative centres.",
    },
    cover: "/images/projects/khamis-waste.jpg",
  },
  {
    slug: "taif-debris-encroachments",
    title: { ar: "رفع الأنقاض وإزالة التعديات – الطائف", en: "Debris Clearance & Encroachment Removal — Taif" },
    client: "taif",
    location: {
      ar: "الطائف (شمال الطائف الجديد – السيل الكبير – السيل الصغير – عشيرة – العطيف)",
      en: "Taif (New North Taif, Al-Sail Al-Kabeer, Al-Sail Al-Sagheer, Ushayrah, Al-Utayf)",
    },
    start: "16/08/2023",
    year: 2023,
    category: "waste",
    summary: {
      ar: "رفع ونقل مخلفات الأنقاض والهدم والبناء مجهولة المصدر وإزالة التعديات لصالح أمانة الطائف.",
      en: "Clearing unattributed demolition and construction debris and removing encroachments for Taif Municipality.",
    },
    cover: "/images/gallery/loader-fill.jpg",
  },

  // ——— Housing ———
  {
    slug: "wali-al-ahd-housing-grading",
    title: { ar: "تسوية وتبتير قطع الأراضي – إسكان ولي العهد", en: "Plot Grading — Wali Al-Ahd Housing" },
    client: "housing",
    location: { ar: "منطقة مكة المكرمة", en: "Makkah Region" },
    start: "01/04/2020",
    year: 2020,
    category: "land",
    summary: {
      ar: "إنشاء وتنفيذ أعمال تسوية وتبتير قطع الأراضي لمشروع إسكان ولي العهد.",
      en: "Grading and plot formation for the Wali Al-Ahd housing scheme.",
    },
  },
  {
    slug: "al-bisha-housing-grading",
    title: { ar: "تسوية وتبتير قطع الأراضي – إسكان البيشة", en: "Plot Grading — Al-Bisha Housing" },
    client: "housing",
    location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
    start: "14/04/2019",
    year: 2019,
    category: "land",
    summary: {
      ar: "تسوية وتبتير قطع الأراضي مع أعمال تكسير الصخور لمشروع إسكان البيشة.",
      en: "Grading and plot formation, including rock breaking, for the Al-Bisha housing scheme.",
    },
    cover: "/images/projects/housing-rock-2.jpg",
    gallery: ["/images/projects/housing-rock-3.jpg"],
  },
  {
    slug: "housing-land-grading-rock-breaking",
    title: { ar: "تسوية أرض وقص وتكسير صخور", en: "Land Grading & Rock Breaking" },
    client: "housing",
    location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
    start: "01/04/2019",
    year: 2019,
    category: "land",
    summary: { ar: "تسوية أرض وقص وتكسير صخور لصالح وزارة الإسكان.", en: "Land grading, rock cutting and breaking for the Ministry of Housing." },
    cover: "/images/projects/housing-rock-3.jpg",
  },
  {
    slug: "wadi-al-jalil-housing-grading",
    title: { ar: "تسوية وتبتير قطع الأراضي – إسكان وادي الجليل", en: "Plot Grading — Wadi Al-Jalil Housing" },
    client: "housing",
    location: { ar: "الطائف", en: "Taif" },
    start: "05/10/2017",
    year: 2017,
    category: "land",
    summary: {
      ar: "تسوية وتبتير قطع الأراضي لمشروع إسكان وادي الجليل بمحافظة الطائف.",
      en: "Grading and plot formation for the Wadi Al-Jalil housing scheme in Taif.",
    },
  },

  // ——— National Water Company ———
  {
    slug: "asyah-sewage-phase-1",
    title: { ar: "إنشاء صرف صحي بمحافظة الأسياح – المرحلة الأولى", en: "Al-Asyah Sewage Network — Phase 1" },
    client: "nwc",
    location: { ar: "الأسياح، منطقة القصيم", en: "Al-Asyah, Qassim" },
    start: "2024",
    year: 2024,
    category: "infrastructure",
    summary: { ar: "إنشاء شبكات الصرف الصحي بمحافظة الأسياح – المرحلة الأولى.", en: "Construction of the Al-Asyah sewage network, phase one." },
  },
  {
    slug: "riyadh-al-khabra-sewage",
    title: { ar: "إنشاء صرف صحي بمحافظة رياض الخبراء", en: "Riyadh Al-Khabra Sewage Network" },
    client: "nwc",
    location: { ar: "رياض الخبراء، منطقة القصيم", en: "Riyadh Al-Khabra, Qassim" },
    start: "2024",
    year: 2024,
    category: "infrastructure",
    summary: { ar: "إنشاء شبكات الصرف الصحي بمحافظة رياض الخبراء.", en: "Construction of the Riyadh Al-Khabra sewage network." },
  },
  {
    slug: "al-hamah-landfill-cells",
    title: { ar: "إنشاء خلايا مطمر الحماه الجديدة", en: "Al-Hamah New Landfill Cells" },
    client: "nwc",
    location: ASEER,
    start: "2024",
    year: 2024,
    category: "infrastructure",
    summary: { ar: "إنشاء خلايا مطمر الحماه الجديدة بمنطقة عسير.", en: "Construction of new landfill cells at Al-Hamah, Aseer." },
  },
  {
    slug: "duba-villages-water-networks",
    title: { ar: "استكمال شبكات وخزانات مياه الشرب لقرى ضباء", en: "Duba Villages Water Networks & Reservoirs" },
    client: "nwc",
    location: { ar: "ضباء، منطقة تبوك", en: "Duba, Tabuk" },
    start: "2021",
    year: 2021,
    category: "infrastructure",
    summary: {
      ar: "استكمال شبكات وخزانات مياه الشرب لقرى محافظة ضباء – المرحلة الأولى.",
      en: "Completion of potable water networks and reservoirs for Duba's villages, phase one.",
    },
  },
  {
    slug: "duba-water-networks",
    title: { ar: "استكمال شبكات مياه الشرب بمحافظة ضباء", en: "Duba Potable Water Networks" },
    client: "nwc",
    location: { ar: "ضباء، منطقة تبوك", en: "Duba, Tabuk" },
    start: "2020",
    year: 2020,
    category: "infrastructure",
    summary: { ar: "استكمال شبكات مياه الشرب بمحافظة ضباء.", en: "Completion of potable water networks in Duba." },
  },
];

export const projects: Project[] = raw
  .map((p) => ({ ...p, cover: p.cover ?? categoryCover[p.category] }))
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
