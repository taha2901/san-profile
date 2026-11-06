import type { L } from "@/lib/i18n";

/**
 * Administrative structure — company profile PDF p.50 ("الهيكل الإداري").
 * Labels are kept exactly as printed in the chart.
 */

export type OrgIcon =
  | "crown"
  | "ceo"
  | "audit"
  | "office"
  | "legal"
  | "secretary"
  | "pmo"
  | "finance"
  | "planning"
  | "risk"
  | "procurement"
  | "equipment"
  | "hr"
  | "production";

export type OrgUnit = { label: L; children?: OrgUnit[] };
export type OrgNode = { key: string; icon: OrgIcon; title: L; units?: OrgUnit[] };

const u = (ar: string, en: string, children?: OrgUnit[]): OrgUnit => ({ label: { ar, en }, children });

export const chairman: OrgNode = { key: "chairman", icon: "crown", title: { ar: "رئيس مجلس الإدارة", en: "Chairman of the Board" } };

export const ceo: OrgNode = { key: "ceo", icon: "ceo", title: { ar: "الرئيس التنفيذي", en: "Chief Executive Officer" } };

/** Units drawn beside the CEO in the chart. */
export const ceoSides: { start: OrgNode; end: OrgNode } = {
  start: {
    key: "audit",
    icon: "audit",
    title: { ar: "المراجعة الداخلية", en: "Internal Audit" },
    units: [u("فريق عمل متخصص", "Specialist team")],
  },
  end: { key: "office", icon: "office", title: { ar: "مدير المكتب", en: "Office Manager" } },
};

/** Support units directly under the CEO. */
export const ceoSupport: { start: OrgNode; end: OrgNode } = {
  start: { key: "legal", icon: "legal", title: { ar: "الشؤون القانونية", en: "Legal Affairs" } },
  end: { key: "secretary", icon: "secretary", title: { ar: "سكرتير تنفيذي", en: "Executive Secretary" } },
};

const site = (n: number): OrgUnit =>
  u(`مدير مشروع ${n}`, `Project Manager ${n}`, [u("مساح ومراقب", "Surveyor & inspector"), u("حارس", "Guard")]);

export const pmo = {
  key: "pmo",
  icon: "pmo" as OrgIcon,
  title: { ar: "إدارة المشاريع PMO", en: "Project Management Office (PMO)" },
  technical: {
    title: { ar: "الإدارة الفنية", en: "Technical Department" },
    roles: [
      u("منسق المشاريع", "Project coordinator"),
      u("مهندس مدني", "Civil engineer"),
      u("مهندس كهرباء", "Electrical engineer"),
      u("مهندس ميكانيك", "Mechanical engineer"),
      u("رئيس مساحة", "Head of surveying"),
    ],
  },
  sites: [site(1), site(2), site(3), site(4)],
};

/** Large departments (shown in the top row next to the PMO). */
export const majorDepartments: OrgNode[] = [
  {
    key: "finance",
    icon: "finance",
    title: { ar: "الإدارة المالية", en: "Finance Department" },
    units: [
      u("رئيس الحسابات", "Chief Accountant", [
        u("محاسب الموردين والمقاولين", "Suppliers & contractors accountant"),
        u("محاسب الموظفين والرواتب", "Staff & payroll accountant"),
        u("التمويلات والعلاقات البنكية", "Financing & banking relations"),
        u("محاسب المبيعات والتسويق", "Sales & marketing accountant"),
        u("الميزانية والتخطيط المالي", "Budgeting & financial planning"),
      ]),
    ],
  },
  {
    key: "hr",
    icon: "hr",
    title: { ar: "إدارة الموارد البشرية", en: "Human Resources" },
    units: [
      u("شؤون الموظفين", "Personnel affairs"),
      u("الموظفين", "Employees"),
      u("المحاسب والرواتب", "Accountant & payroll"),
      u("الأرشيف", "Archive"),
      u("IT System", "IT System"),
      u("الخدمات والمساندة", "Services & support"),
      u("الصرافية وضبط المخزون", "Cashier & inventory control"),
    ],
  },
];

/** Remaining departments. */
export const departments: OrgNode[] = [
  {
    key: "equipment",
    icon: "equipment",
    title: { ar: "إدارة المعدات والآليات", en: "Equipment & Machinery" },
    units: [
      u("الورشة لصيانة وتبديل قطع الغيار", "Workshop — maintenance & spare parts"),
      u("متابعة وتنسيق توزيع المعدات والآليات للمشاريع مع السائقين", "Dispatching equipment & drivers to projects"),
      u("الخدمات التشغيلية للمعدات والآليات", "Equipment operating services"),
    ],
  },
  {
    key: "procurement",
    icon: "procurement",
    title: { ar: "إدارة المشتريات والعقود", en: "Procurement & Contracts" },
    units: [u("مندوب مشتريات", "Purchasing representative"), u("المخازن والمستودعات", "Stores & warehouses")],
  },
  {
    key: "risk",
    icon: "risk",
    title: { ar: "إدارة المخاطر", en: "Risk Management" },
    units: [u("مدير إدارة المخاطر", "Risk Manager", [u("مساعد المدير", "Assistant Manager")])],
  },
  {
    key: "planning",
    icon: "planning",
    title: { ar: "إدارة التخطيط والتطوير", en: "Planning & Development" },
    units: [u("المتابعة وضبط الجودة", "Follow-up & quality control"), u("فريق عمل متخصص", "Specialist team")],
  },
  { key: "production", icon: "production", title: { ar: "إدارة الإنتاج", en: "Production Department" } },
];

/** Departments whose name starts with "إدارة" / "الإدارة" in the chart (excluding the PMO's technical unit). */
export const departmentsCount = 1 + majorDepartments.length + departments.length;
