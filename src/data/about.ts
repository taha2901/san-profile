import type { L } from "@/lib/i18n";

export const about = {
  intro: {
    ar: "شركة سعودية تعمل في قطاع المقاولات العامة وأعمال التأسيس والبناء والتشطيبات والتشغيل والصيانة. نمتلك خبرات كبيرة وفرق عمل إبداعية، ونسعى لتقديم حلول البناء والإنشاءات المتكاملة وفق أحدث الأنظمة ومعايير الجودة العالمية، بما يتوافق مع رؤية المملكة العربية السعودية 2030.",
    en: "A Saudi company working in general contracting, foundations, construction, finishing, operations and maintenance. With deep experience and creative teams, we deliver integrated construction solutions to the latest systems and international quality standards, in line with Saudi Vision 2030.",
  } satisfies L,
  story: {
    ar: "منذ عام 2018م بدأت مسيرة شركة سان المتحدة للمقاولات العامة بكفاح متواصل وسباق صعب للوصول إلى المكانة التي نحن عليها اليوم: مقاول مصنف من الدرجة الأولى يعمل مع نيوم ووزارة الدفاع وشركة المياه الوطنية وكبرى الجهات الحكومية في المملكة.",
    en: "San United began its journey in 2018 with relentless effort to reach where it stands today: a first-grade classified contractor working with NEOM, the Ministry of Defense, the National Water Company and the Kingdom's leading government entities.",
  } satisfies L,
  vision: {
    ar: "أن نكون الخيار الأول في المملكة لمشاريع الأعمال الترابية والبنية التحتية الكبرى، وشريكاً موثوقاً في تحقيق مستهدفات رؤية 2030.",
    en: "To be the Kingdom's first choice for major earthworks and infrastructure, and a trusted partner in delivering Vision 2030.",
  } satisfies L,
  mission: {
    ar: "تنفيذ المشاريع بأعلى معايير الجودة والسلامة وفي الوقت المحدد، بسعر عادل، عبر أسطول معدات مملوك وكوادر هندسية مؤهلة.",
    en: "To deliver projects to the highest quality and safety standards, on time and at a fair price, through an owned fleet and qualified engineering teams.",
  } satisfies L,
  values: [
    { title: { ar: "الالتزام", en: "Commitment" }, text: { ar: "نلتزم بالجداول الزمنية ونسلّم في الموعد.", en: "We keep to schedule and deliver on time." } },
    { title: { ar: "الجودة", en: "Quality" }, text: { ar: "أنظمة جودة معتمدة ISO 9001 في كل مرحلة.", en: "ISO 9001-certified quality at every stage." } },
    { title: { ar: "السلامة", en: "Safety" }, text: { ar: "سلامة فرقنا ومواقعنا أولوية لا تقبل التنازل.", en: "The safety of our people and sites is non-negotiable." } },
    { title: { ar: "المصداقية", en: "Integrity" }, text: { ar: "شفافية وتعاون مع عملائنا وشركائنا.", en: "Transparency and cooperation with clients and partners." } },
  ] satisfies { title: L; text: L }[],
  strengths: [
    { ar: "إنجاز المشاريع في الوقت المحدد", en: "On-time project delivery" },
    { ar: "استخدام أحدث التقنيات والمعدات", en: "Modern technology and equipment" },
    { ar: "أسطول معدات مملوك يتجاوز 290 آلية", en: "An owned fleet of 290+ machines" },
    { ar: "مهندسون واستشاريون ذوو خبرة", en: "Experienced engineers and consultants" },
    { ar: "مختبرات خاصة لفحص التربة", en: "In-house soil-testing laboratories" },
    { ar: "رأس مال احتياطي يضمن استمرارية التنفيذ", en: "Reserve capital to guarantee continuity" },
    { ar: "فروع ومكاتب هندسية في مواقع حيوية", en: "Branches and engineering offices in key locations" },
    { ar: "تنسيق كامل بين فرق العمل", en: "Full coordination between teams" },
  ] satisfies L[],
  pillars: [
    {
      title: { ar: "رواد في المقاولات والبنية التحتية", en: "Leaders in Contracting & Infrastructure" },
      text: {
        ar: "القيادة في قطاع كبير ومليء بالتحديات لا تأتي إلا بالخبرة والجودة العالية واستخدام أحدث التقنيات والآليات.",
        en: "Leadership in a large, demanding sector comes only from experience, high quality and the latest technology and machinery.",
      },
    },
    {
      title: { ar: "حلول مبتكرة وفعالة", en: "Innovative, Effective Solutions" },
      text: {
        ar: "الاستثمار في العنصر البشري هو الأنجح دائماً؛ نختار الكفاءات بعناية ونبني قيم التعاون والمصداقية.",
        en: "Investing in people always pays off; we select talent carefully and build a culture of cooperation and integrity.",
      },
    },
    {
      title: { ar: "التطوير والتدريب", en: "Development & Training" },
      text: {
        ar: "فريق البحث والتطوير لدينا يواكب تطور الأساليب الفنية والتقنية ليقدم حلولاً تلبي تطلعات عملائنا.",
        en: "Our R&D team keeps pace with evolving technical methods to deliver solutions that meet client ambitions.",
      },
    },
  ] satisfies { title: L; text: L }[],
  // The administrative structure lives in ./orgChart.ts
};

export type Partner = { name: L; activity: L };

/** Alliance table, company profile PDF p.23 — names as printed there. */
export const partners: Partner[] = [
  {
    name: { ar: "CROCUS Group", en: "CROCUS Group" },
    activity: { ar: "الإنشاءات (ملاعب، فنادق، أخرى) والتطوير العقاري", en: "Construction (stadiums, hotels, other) and real-estate development" },
  },
  { name: { ar: "CSE", en: "CSE" }, activity: { ar: "الطرق والبنية التحتية / إنشاء محطات وشبكات المياه", en: "Roads & infrastructure / water stations and networks" } },
  {
    name: { ar: "ENMAS INTERNATIONAL FZC", en: "ENMAS INTERNATIONAL FZC" },
    activity: { ar: "صناعات الطاقة / النفط والغاز / البتروكيماويات / معالجة المياه", en: "Energy / oil & gas / petrochemicals / water treatment" },
  },
  {
    name: {
      ar: "شركة طارق مختار وشركاه الهندسية للخدمات البيئية والتوريدات العمومية",
      en: "Tariq Mukhtar & Partners Engineering Co. for Environmental Services & General Supplies",
    },
    activity: { ar: "الخدمات البيئية والتوريدات", en: "Environmental services and supplies" },
  },
  {
    name: { ar: "مكتب الرضوان للأشغال العمومية والبناء", en: "Al-Radwan Office for Public Works & Construction" },
    activity: { ar: "الإنشاءات العامة", en: "General construction" },
  },
];
