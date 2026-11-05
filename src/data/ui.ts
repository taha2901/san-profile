import type { L } from "@/lib/i18n";

export type NavItem = { path: string; label: L };

export const nav: NavItem[] = [
  { path: "", label: { ar: "الرئيسية", en: "Home" } },
  { path: "about", label: { ar: "من نحن", en: "About" } },
  { path: "services", label: { ar: "خدماتنا", en: "Services" } },
  { path: "projects", label: { ar: "مشاريعنا", en: "Projects" } },
  { path: "fleet", label: { ar: "المعدات", en: "Fleet" } },
  { path: "certificates", label: { ar: "الاعتمادات", en: "Accreditations" } },
  { path: "clients", label: { ar: "عملاؤنا", en: "Clients" } },
  { path: "careers", label: { ar: "التوظيف", en: "Careers" } },
];

export const ui = {
  contactUs: { ar: "تواصل معنا", en: "Contact Us" },
  requestQuote: { ar: "اطلب عرض سعر", en: "Request a Quote" },
  viewProjects: { ar: "استعرض مشاريعنا", en: "Explore Our Projects" },
  viewAll: { ar: "عرض الكل", en: "View all" },
  learnMore: { ar: "اعرف المزيد", en: "Learn more" },
  viewProject: { ar: "تفاصيل المشروع", en: "View project" },
  backTo: { ar: "العودة إلى", en: "Back to" },
  home: { ar: "الرئيسية", en: "Home" },
  menu: { ar: "القائمة", en: "Menu" },
  close: { ar: "إغلاق", en: "Close" },
  switchLang: { ar: "English", en: "العربية" },
  call: { ar: "اتصل بنا", en: "Call us" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  address: { ar: "العنوان", en: "Address" },
  hours: { ar: "ساعات العمل", en: "Working hours" },
  all: { ar: "الكل", en: "All" },

  // Hero
  heroEyebrow: { ar: "مقاول عام مصنف – الدرجة الأولى", en: "First-Grade Classified General Contractor" },
  heroTitle1: { ar: "نشق الجبال", en: "We move mountains" },
  heroTitle2: { ar: "ونبني البنية التحتية للمملكة", en: "to build the Kingdom's infrastructure" },
  heroText: {
    ar: "أعمال ترابية وقطع صخري، طرق وسفلتة، وبنية تحتية لكبرى المشاريع الحكومية ومشاريع نيوم — بأسطول مملوك يتجاوز 290 معدة.",
    en: "Earthworks and rock cutting, roads and asphalt, and infrastructure for the Kingdom's largest government and NEOM projects — with an owned fleet of 290+ machines.",
  },
  trustClass: { ar: "تصنيف الدرجة الأولى", en: "First-Grade Classification" },
  trustIso: { ar: "ISO 9001 · 14001 · 45001", en: "ISO 9001 · 14001 · 45001" },
  trustSca: { ar: "عضو الهيئة السعودية للمقاولين", en: "Saudi Contractors Authority Member" },
  scroll: { ar: "اكتشف المزيد", en: "Scroll" },

  // Sections
  aboutEyebrow: { ar: "من نحن", en: "Who We Are" },
  aboutTitle: { ar: "خبرة سعودية تنفّذ أصعب المشاريع في أصعب التضاريس", en: "Saudi expertise delivering hard projects in the hardest terrain" },
  servicesEyebrow: { ar: "خدماتنا", en: "What We Do" },
  servicesTitle: { ar: "حلول مقاولات متكاملة من الموقع الخام إلى التسليم", en: "Integrated contracting, from raw site to handover" },
  projectsEyebrow: { ar: "مشاريع مختارة", en: "Selected Work" },
  projectsTitle: { ar: "مشاريع نفخر بتنفيذها", en: "Projects we are proud of" },
  fleetEyebrow: { ar: "الأسطول", en: "Our Fleet" },
  fleetTitle: { ar: "أسطول مملوك جاهز للتعبئة الفورية", en: "An owned fleet, ready to mobilise" },
  fleetText: {
    ar: "امتلاكنا لمعداتنا يعني سرعة في التعبئة، تحكماً كاملاً في الجدول الزمني، وتكلفة أكثر تنافسية لعملائنا.",
    en: "Owning our equipment means faster mobilisation, full schedule control and more competitive pricing for our clients.",
  },
  clientsEyebrow: { ar: "عملاؤنا وشركاء النجاح", en: "Clients & Partners" },
  clientsTitle: { ar: "موثوقون من كبرى الجهات في المملكة", en: "Trusted by the Kingdom's leading entities" },
  certsEyebrow: { ar: "الاعتمادات", en: "Accreditations" },
  certsTitle: { ar: "جودة وسلامة معتمدة دولياً", en: "Internationally certified quality & safety" },
  ctaTitle: { ar: "لديك مشروع؟ لنبدأ التنفيذ.", en: "Have a project? Let's get it built." },
  ctaText: {
    ar: "فريقنا الهندسي جاهز لدراسة مشروعك وتقديم عرض فني ومالي متكامل.",
    en: "Our engineering team is ready to study your project and submit a full technical and commercial offer.",
  },
  whyUs: { ar: "لماذا سان المتحدة؟", en: "Why San United?" },

  // Projects
  client: { ar: "الجهة المالكة", en: "Client" },
  location: { ar: "الموقع", en: "Location" },
  startDate: { ar: "تاريخ البدء", en: "Start date" },
  duration: { ar: "المدة", en: "Duration" },
  category: { ar: "التصنيف", en: "Category" },
  overview: { ar: "نبذة عن المشروع", en: "Project overview" },
  gallery: { ar: "صور من المشروع", en: "Project gallery" },
  relatedProjects: { ar: "مشاريع ذات صلة", en: "Related projects" },
  projectsCount: { ar: "مشروع", en: "projects" },
  scope: { ar: "نطاق العمل", en: "Scope of work" },
  otherServices: { ar: "خدمات أخرى", en: "Other services" },
  partnersTitle: { ar: "تحالفاتنا الاستراتيجية", en: "Strategic Alliances" },
  partnersText: {
    ar: "نعمل ضمن تحالفات مع شركات محلية ودولية لتوسيع قدراتنا في المشاريع الكبرى.",
    en: "We work in alliance with local and international firms to extend our capabilities on major projects.",
  },
};
