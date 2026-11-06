import {
  Briefcase,
  ClipboardList,
  Crown,
  Factory,
  HardHat,
  Landmark,
  NotebookPen,
  Scale,
  SearchCheck,
  ShieldAlert,
  ShoppingCart,
  TrendingUp,
  Truck,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  ceo,
  ceoSides,
  ceoSupport,
  chairman,
  departments,
  departmentsCount,
  majorDepartments,
  pmo,
  type OrgIcon,
  type OrgNode,
  type OrgUnit,
} from "@/data/orgChart";
import { tr, type Locale } from "@/lib/i18n";
import { GrowLine, Reveal, Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./sections";

const icons: Record<OrgIcon, LucideIcon> = {
  crown: Crown,
  ceo: UserRound,
  audit: SearchCheck,
  office: Briefcase,
  legal: Scale,
  secretary: NotebookPen,
  pmo: ClipboardList,
  finance: Landmark,
  planning: TrendingUp,
  risk: ShieldAlert,
  procurement: ShoppingCart,
  equipment: Truck,
  hr: Users,
  production: Factory,
};

function countUnits(units: OrgUnit[] = []): number {
  return units.reduce((n, x) => n + 1 + countUnits(x.children), 0);
}

function unitsLabel(n: number, locale: Locale) {
  if (locale === "en") return `${n} unit${n === 1 ? "" : "s"}`;
  if (n === 1) return "وحدة واحدة";
  if (n === 2) return "وحدتان";
  if (n <= 10) return `${n} وحدات`;
  return `${n} وحدة`;
}

/* ——— Top of the tree ——— */

function LeaderNode({ node, locale, primary = false }: { node: OrgNode; locale: Locale; primary?: boolean }) {
  const Icon = icons[node.icon];
  return (
    <div
      className={`relative flex items-center gap-4 rounded-2xl px-6 py-4 text-white shadow-xl ${
        primary
          ? "bg-brand-500 shadow-brand-500/30 ring-8 ring-brand-500/10"
          : "bg-linear-to-br from-brand-700 to-ink shadow-brand-900/20"
      }`}
    >
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
        <Icon className="size-6" />
      </span>
      <span className="text-lg font-bold whitespace-nowrap">{tr(node.title, locale)}</span>
    </div>
  );
}

function StaffNode({ node, locale }: { node: OrgNode; locale: Locale }) {
  const Icon = icons[node.icon];
  return (
    <div className="relative z-10 rounded-2xl border border-steel-200 bg-surface px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-accent">
          <Icon className="size-5" />
        </span>
        <span className="font-semibold text-fg">{tr(node.title, locale)}</span>
      </div>
      {node.units && (
        <div className="mt-2 flex flex-wrap gap-1.5 ps-[3.25rem]">
          {node.units.map((u) => (
            <span key={u.label.en} className="rounded-full bg-steel-50 px-2.5 py-1 text-xs text-steel-600">
              {tr(u.label, locale)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** One row of the desktop tree: [start node]——[centre]——[end node]. */
function SideRow({ start, end, centre, locale }: { start: OrgNode; end: OrgNode; centre: ReactNode; locale: Locale }) {
  return (
    <div className="grid w-full max-w-5xl grid-cols-[1fr_auto_1fr] items-center">
      <div className="flex items-center">
        <StaffNode node={start} locale={locale} />
        <GrowLine axis="x" className="h-0.5 flex-1" delay={0.2} />
      </div>
      <div className="flex justify-center">{centre}</div>
      <div className="flex items-center">
        <GrowLine axis="x" className="h-0.5 flex-1" delay={0.2} />
        <StaffNode node={end} locale={locale} />
      </div>
    </div>
  );
}

/* ——— Departments ——— */

function UnitTree({ units, locale, nested = false }: { units: OrgUnit[]; locale: Locale; nested?: boolean }) {
  return (
    <ul className={`space-y-2.5 border-s-2 border-steel-100 ps-4 ${nested ? "mt-2.5" : "mt-5"}`}>
      {units.map((x) => (
        <li
          key={x.label.en}
          className="relative text-sm leading-relaxed text-steel-600 before:absolute before:-start-4 before:top-[0.7em] before:h-0.5 before:w-3 before:bg-steel-100"
        >
          <span className={x.children ? "font-semibold text-fg" : ""} dir={x.label.ar === x.label.en ? "ltr" : undefined}>
            {tr(x.label, locale)}
          </span>
          {x.children && <UnitTree units={x.children} locale={locale} nested />}
        </li>
      ))}
    </ul>
  );
}

function DeptCard({ node, locale }: { node: OrgNode; locale: Locale }) {
  const Icon = icons[node.icon];
  const n = countUnits(node.units);
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-steel-100 bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-24px_rgb(41_93_169/0.35)]">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-accent transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <div>
          <h3 className="leading-snug font-bold text-fg">{tr(node.title, locale)}</h3>
          {n > 0 && <p className="mt-1 text-xs text-steel-500">{unitsLabel(n, locale)}</p>}
        </div>
      </div>
      {node.units ? (
        <UnitTree units={node.units} locale={locale} />
      ) : (
        <Icon aria-hidden className="pointer-events-none absolute -end-4 -bottom-4 size-28 text-steel-100" strokeWidth={1} />
      )}
    </div>
  );
}

function PmoCard({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const Icon = icons[pmo.icon];
  return (
    <div className="relative isolate h-full overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-brand-800 p-6 text-white shadow-xl shadow-brand-900/20 lg:p-8">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="flex items-start gap-3">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
          <Icon className="size-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold">{tr(pmo.title, locale)}</h3>
          <p className="mt-1 text-sm text-white/70">
            {ar ? `${tr(pmo.technical.title, locale)} + ${pmo.sites.length} فرق مشاريع ميدانية` : `${tr(pmo.technical.title, locale)} + ${pmo.sites.length} site project teams`}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
        <div className="text-sm font-semibold text-brand-100">{tr(pmo.technical.title, locale)}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {pmo.technical.roles.map((r) => (
            <span key={r.label.en} className="rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/10">
              {tr(r.label, locale)}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {pmo.sites.map((s) => (
          <div key={s.label.en} className="rounded-2xl border border-white/15 bg-white/5 p-3 transition hover:bg-white/10 sm:p-4">
            <div className="flex items-center gap-2 font-semibold">
              <HardHat className="size-4 text-brand-200" />
              {tr(s.label, locale)}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.children?.map((c) => (
                <span key={c.label.en} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/85">
                  {tr(c.label, locale)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ——— Section ——— */

export function OrgChart({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const pills = [
    { n: departmentsCount, label: ar ? "إدارات تنفيذية" : "executive departments" },
    { n: pmo.sites.length, label: ar ? "فرق مشاريع ميدانية" : "site project teams" },
    { n: 4, label: ar ? "وحدات مساندة للإدارة العليا" : "senior-management support units" },
  ];

  return (
    <section id="structure" className="scroll-mt-24 bg-steel-50 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={ar ? "الهيكل الإداري" : "Administrative Structure"}
          title={ar ? "هيكل تنظيمي واضح من مجلس الإدارة حتى موقع المشروع" : "A clear structure, from the board to the site"}
          text={
            ar
              ? "يقود الشركة مجلس الإدارة والرئيس التنفيذي، وتتبعهما إدارات متخصصة تغطي كل مراحل المشروع."
              : "The Board and CEO lead specialist departments that cover every stage of a project."
          }
          center
        />
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
          {pills.map((p) => (
            <span key={p.label} className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-surface px-4 py-2 text-sm text-steel-600">
              <span className="text-base font-bold text-accent">{p.n}</span>
              {p.label}
            </span>
          ))}
        </Reveal>

        {/* Desktop tree */}
        <div className="mt-16 hidden flex-col items-center lg:flex">
          <Reveal>
            <LeaderNode node={chairman} locale={locale} />
          </Reveal>
          <GrowLine className="h-10 w-0.5" />
          <SideRow
            start={ceoSides.start}
            end={ceoSides.end}
            locale={locale}
            centre={
              <Reveal delay={0.1}>
                <LeaderNode node={ceo} locale={locale} primary />
              </Reveal>
            }
          />
          <GrowLine className="h-8 w-0.5" delay={0.3} />
          <SideRow
            start={ceoSupport.start}
            end={ceoSupport.end}
            locale={locale}
            centre={<GrowLine className="h-20 w-0.5" delay={0.4} />}
          />
          <GrowLine className="h-12 w-0.5" delay={0.5} />
        </div>

        {/* Mobile / tablet tree */}
        <div className="mt-12 flex flex-col items-center lg:hidden">
          <LeaderNode node={chairman} locale={locale} />
          <GrowLine className="h-8 w-0.5" />
          <LeaderNode node={ceo} locale={locale} primary />
          <GrowLine className="h-8 w-0.5" />
          <div className="grid w-full gap-3 sm:grid-cols-2">
            {[ceoSides.start, ceoSides.end, ceoSupport.start, ceoSupport.end].map((n) => (
              <StaffNode key={n.key} node={n} locale={locale} />
            ))}
          </div>
          <GrowLine className="h-10 w-0.5" />
        </div>

        {/* Departments panel */}
        <div className="relative rounded-[2rem] border border-steel-200 bg-surface/60 p-4 pt-14 sm:p-6 sm:pt-14 lg:p-8 lg:pt-16">
          <div className="absolute inset-x-0 -top-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              {ar ? "الإدارات التنفيذية" : "Executive Departments"}
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">{departmentsCount}</span>
            </span>
          </div>

          <Stagger className="grid gap-5 lg:grid-cols-4" gap={0.08}>
            <StaggerItem className="lg:col-span-2">
              <PmoCard locale={locale} />
            </StaggerItem>
            {majorDepartments.map((d) => (
              <StaggerItem key={d.key}>
                <DeptCard node={d} locale={locale} />
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" gap={0.06}>
            {departments.map((d) => (
              <StaggerItem key={d.key}>
                <DeptCard node={d} locale={locale} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
