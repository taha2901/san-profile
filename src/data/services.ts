import type { L } from "@/lib/i18n";
import type { CategoryKey } from "./projects";

export type ServiceIcon =
  | "mountain"
  | "route"
  | "layers"
  | "droplets"
  | "house"
  | "building"
  | "recycle"
  | "fence";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  title: L;
  summary: L;
  description: L[];
  scope: L[];
  image: string;
  gallery: string[];
  categories: CategoryKey[];
};

export const services: Service[] = [
  {
    slug: "earthworks-rock-cutting",
    icon: "mountain",
    title: { ar: "أعمال الحفر وقطع الصخور والردم", en: "Excavation, Rock Cutting & Backfilling" },
    summary: {
      ar: "حفر وقطع صخري وتسوية للمواقع الجبلية والصعبة بأسطول ضخم من البوكلينات والبلدوزرات والكسارات.",
      en: "Bulk excavation, rock cutting and grading on demanding mountain sites, backed by a large fleet of excavators, dozers and crushers.",
    },
    description: [
      {
        ar: "الأعمال الترابية هي تخصصنا الأول. نفذنا أعمال قطع صخري وردم بملايين الأمتار المكعبة في تضاريس جبلية معقدة، من بينها مشاريع نيوم في تروجينا.",
        en: "Earthworks are our core specialty. We have moved millions of cubic metres of rock and fill across complex mountain terrain, including NEOM's Trojena projects.",
      },
      {
        ar: "نمتلك معداتنا ونديرها بأنفسنا، ما يمنحنا سرعة التعبئة والتحكم الكامل في الجدول الزمني وجودة التنفيذ.",
        en: "We own and operate our equipment, which gives us fast mobilisation and full control over schedule and quality.",
      },
    ],
    scope: [
      { ar: "الحفر العام والحفر الصخري", en: "General and rock excavation" },
      { ar: "قطع الإسطبات والمنحدرات وتشكيلها", en: "Benching and slope cutting & profiling" },
      { ar: "التكسير بالكسارات الهيدروليكية", en: "Hydraulic breaking and crushing" },
      { ar: "الردم والدمك على طبقات", en: "Layered backfilling and compaction" },
      { ar: "تسوية المواقع وتجهيزها", en: "Site grading and preparation" },
      { ar: "نقل وترحيل المواد", en: "Haulage and material transport" },
    ],
    image: "/images/gallery/rock-cutting-1.jpg",
    gallery: [
      "/images/gallery/hyundai-breaker.jpg",
      "/images/gallery/komatsu-breaker.jpg",
      "/images/gallery/earthworks-wide.jpg",
      "/images/gallery/dozer-slope.jpg",
    ],
    categories: ["earthworks", "land"],
  },
  {
    slug: "roads-bridges",
    icon: "route",
    title: { ar: "إنشاءات الطرق والجسور", en: "Roads & Bridges Construction" },
    summary: {
      ar: "تنفيذ الطرق من القطع والردم وطبقات الأساس وحتى الرصف النهائي، في المدن والمناطق الجبلية.",
      en: "Road construction from cut-and-fill and base layers through to final paving, in urban and mountain settings.",
    },
    description: [
      {
        ar: "ننفذ شبكات الطرق كاملة: أعمال القطع والردم، طبقات الأساس والأساس المساعد، الرصف، والأعمال المصاحبة من أرصفة وتصريف.",
        en: "We deliver complete road networks: cut and fill, sub-base and base courses, paving, and associated works such as kerbs and drainage.",
      },
    ],
    scope: [
      { ar: "تخطيط وفتح الطرق الجديدة", en: "Opening and forming new roads" },
      { ar: "أعمال القطع والردم للطرق", en: "Road cut-and-fill works" },
      { ar: "طبقات الأساس والأساس المساعد", en: "Sub-base and base courses" },
      { ar: "الأرصفة والبردورات", en: "Kerbs and sidewalks" },
      { ar: "صيانة وتأهيل الطرق القائمة", en: "Rehabilitation of existing roads" },
    ],
    image: "/images/gallery/mountain-road.jpg",
    gallery: ["/images/projects/neom-paver.jpg", "/images/gallery/asphalt-paver.jpg", "/images/projects/aseer-asphalt-2.jpg"],
    categories: ["roads"],
  },
  {
    slug: "asphalt-paving",
    icon: "layers",
    title: { ar: "سفلتة الشوارع والطرقات", en: "Street & Road Asphalting" },
    summary: {
      ar: "سفلتة المخططات والشوارع والطرق السريعة بفرادات ورصاصات حديثة ووفق مواصفات الجهات الحكومية.",
      en: "Asphalting of subdivisions, streets and highways using modern pavers and rollers to government specifications.",
    },
    description: [
      {
        ar: "نفذنا سفلتة مخططات المنح في خميس مشيط، وأعمال الصيانة الطارئة للطرق المتضررة من السيول في محايل عسير، وأعمال الرصف في نيوم.",
        en: "Our work includes asphalting grant subdivisions in Khamis Mushait, emergency repair of flood-damaged roads in Muhayil Aseer, and paving works at NEOM.",
      },
    ],
    scope: [
      { ar: "سفلتة المخططات السكنية", en: "Residential subdivision asphalting" },
      { ar: "الطبقات الإسفلتية للطرق", en: "Asphalt wearing and binder courses" },
      { ar: "الصيانة الطارئة والترقيع", en: "Emergency maintenance and patching" },
      { ar: "الكشط وإعادة السفلتة", en: "Milling and resurfacing" },
    ],
    image: "/images/gallery/asphalt-2.jpg",
    gallery: ["/images/gallery/asphalt-1.jpg", "/images/gallery/asphalt-paver.jpg", "/images/projects/aseer-asphalt-1.jpg"],
    categories: ["roads"],
  },
  {
    slug: "infrastructure",
    icon: "droplets",
    title: { ar: "البنية التحتية", en: "Infrastructure" },
    summary: {
      ar: "شبكات المياه والصرف الصحي، الخزانات، ومرافق البنية التحتية للمدن والمشاريع الكبرى.",
      en: "Water and sewage networks, reservoirs and utility infrastructure for cities and giga-projects.",
    },
    description: [
      {
        ar: "نعمل مع شركة المياه الوطنية ونيوم في تنفيذ شبكات المياه والصرف الصحي والخزانات وأعمال البنية التحتية للمرافق.",
        en: "We work with the National Water Company and NEOM on water and sewage networks, reservoirs, and utility infrastructure.",
      },
    ],
    scope: [
      { ar: "شبكات مياه الشرب", en: "Potable water networks" },
      { ar: "شبكات الصرف الصحي", en: "Sewage networks" },
      { ar: "خزانات المياه", en: "Water reservoirs" },
      { ar: "خلايا المطامر", en: "Landfill cells" },
      { ar: "المرافق المساندة", en: "Supporting utilities" },
    ],
    image: "/images/gallery/earthworks-valley.jpg",
    gallery: ["/images/gallery/fill-site.jpg", "/images/gallery/earthworks-dunes.jpg"],
    categories: ["infrastructure"],
  },
  {
    slug: "residential-development",
    icon: "house",
    title: { ar: "تطوير المباني السكنية", en: "Residential Development" },
    summary: {
      ar: "تجهيز أراضي مشاريع الإسكان بالتسوية والتبتير، وصولاً إلى إنشاء المباني السكنية.",
      en: "Preparing housing-project land through grading and plot formation, through to residential construction.",
    },
    description: [
      {
        ar: "نفذنا لوزارة الإسكان أعمال تسوية وتبتير قطع الأراضي لعدة مشاريع منها إسكان ولي العهد في منطقة مكة المكرمة وإسكان وادي الجليل بالطائف.",
        en: "For the Ministry of Housing we graded and formed plots for several schemes, including Wali Al-Ahd Housing in Makkah region and Wadi Al-Jalil Housing in Taif.",
      },
    ],
    scope: [
      { ar: "تسوية وتبتير قطع الأراضي", en: "Land grading and plot formation" },
      { ar: "تكسير وقص الصخور", en: "Rock breaking and cutting" },
      { ar: "إنشاء المباني السكنية", en: "Residential building construction" },
      { ar: "الترميم والتشطيبات", en: "Renovation and finishing" },
    ],
    image: "/images/projects/housing-rock-2.jpg",
    gallery: ["/images/projects/housing-rock-3.jpg"],
    categories: ["land"],
  },
  {
    slug: "commercial-development",
    icon: "building",
    title: { ar: "تطوير المباني التجارية", en: "Commercial Development" },
    summary: {
      ar: "تنفيذ وتطوير المباني التجارية والحكومية والساحات العامة بجودة عالية والتزام بالمواعيد.",
      en: "Construction and upgrading of commercial and government buildings and public spaces, on time and to a high standard.",
    },
    description: [
      {
        ar: "نقدم أعمال الإنشاء والتطوير والتشطيب للمباني التجارية والحكومية، إضافة إلى الساحات وممرات المشاة والمسطحات العامة.",
        en: "We provide construction, upgrading and finishing works for commercial and government buildings, as well as plazas, walkways and public realm.",
      },
    ],
    scope: [
      { ar: "الإنشاءات الخرسانية", en: "Concrete structures" },
      { ar: "الساحات وممرات المشاة", en: "Plazas and pedestrian walkways" },
      { ar: "الأرصفة والانترلوك", en: "Interlock paving and sidewalks" },
      { ar: "التشطيبات والصيانة", en: "Finishing and maintenance" },
    ],
    image: "/images/projects/jubail-paving-3.jpg",
    gallery: ["/images/projects/majardah-walkway.jpg", "/images/projects/jubail-paving-1.jpg"],
    categories: ["urban"],
  },
  {
    slug: "demolition-waste-removal",
    icon: "recycle",
    title: { ar: "إزالة وترحيل مخلفات الهدم والردم", en: "Demolition & Debris Removal" },
    summary: {
      ar: "رفع ونقل مخلفات البناء والهدم وإزالة التعديات وردم الفجوات لصالح الأمانات والبلديات.",
      en: "Clearing and hauling construction and demolition waste, removing encroachments and filling voids for municipalities.",
    },
    description: [
      {
        ar: "نفذنا برامج رفع المخلفات لأمانة الطائف وبلدية خميس مشيط، شملت رفع الأنقاض مجهولة المصدر وإزالة التعديات وأعمال التسوية.",
        en: "We have run debris-removal programmes for Taif Municipality and Khamis Mushait Municipality, covering unattributed rubble, encroachment removal and grading.",
      },
    ],
    scope: [
      { ar: "رفع ونقل الأنقاض", en: "Rubble removal and haulage" },
      { ar: "إزالة التعديات", en: "Encroachment removal" },
      { ar: "ردم الفجوات والتسوية", en: "Void filling and grading" },
      { ar: "أعمال الهدم", en: "Demolition works" },
    ],
    image: "/images/projects/khamis-waste.jpg",
    gallery: ["/images/gallery/loader-fill.jpg"],
    categories: ["waste"],
  },
  {
    slug: "fencing-security",
    icon: "fence",
    title: { ar: "الأسوار والسياجات الأمنية", en: "Fencing & Security Perimeters" },
    summary: {
      ar: "توريد وتركيب السياجات للمحميات الملكية والحدود والمنشآت الحساسة على مسافات طويلة.",
      en: "Supply and installation of long-distance fencing for royal reserves, borders and sensitive facilities.",
    },
    description: [
      {
        ar: "نفذنا سياج محمية الملك خالد الملكية بمرحلتيه، وأعمال الشبك الأمني لحرس الحدود في قطاع الربوعة بمنطقة عسير.",
        en: "We built both phases of the King Khalid Royal Reserve fence, and security fencing for the Border Guard in the Al-Rabou'a sector of Aseer.",
      },
    ],
    scope: [
      { ar: "سياجات المحميات الطبيعية", en: "Nature-reserve fencing" },
      { ar: "الشبك الأمني والأسلاك الشائكة", en: "Security mesh and razor wire" },
      { ar: "القواعد الخرسانية", en: "Concrete footings" },
      { ar: "تمهيد مسارات السياج", en: "Fence-line track grading" },
    ],
    image: "/images/projects/kkrr-fence.jpg",
    gallery: ["/images/projects/border-fence-1.jpg", "/images/projects/kkrr-concrete.jpg", "/images/projects/kkrr-grader.jpg"],
    categories: ["fencing"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
