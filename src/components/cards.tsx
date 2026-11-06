import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getClient, type Client } from "@/data/clients";
import { categories, type Project } from "@/data/projects";
import type { Service } from "@/data/services";
import { href, tr, type Locale } from "@/lib/i18n";
import { ArrowForward, ServiceIcon } from "./icons";

export function ProjectCard({ project, locale, large = false }: { project: Project; locale: Locale; large?: boolean }) {
  const client = getClient(project.client);
  return (
    <Link
      href={href(locale, `projects/${project.slug}`)}
      className={`group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-ink text-white ${
        large ? "min-h-[30rem]" : "min-h-[24rem]"
      }`}
    >
      <Image
        src={project.image}
        alt={tr(project.title, locale)}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/50 to-ink/0 transition-opacity duration-500 group-hover:from-brand-900" />
      <div className="absolute start-5 top-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">{tr(categories[project.category], locale)}</span>
      </div>
      {project.illustrative && (
        <span className="absolute end-5 top-5 rounded-full bg-ink/50 px-2.5 py-1 text-[11px] text-white/70 backdrop-blur-md">
          {locale === "ar" ? "صورة تعبيرية" : "Illustrative"}
        </span>
      )}
      <div className="p-6 sm:p-8">
        {client && <div className="text-sm font-semibold text-brand-300">{tr(client.name, locale)}</div>}
        <h3 className={`mt-2 font-bold text-balance ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{tr(project.title, locale)}</h3>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            {tr(project.location, locale)}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            {project.year}
          </span>
        </div>
        <div className="mt-5 flex h-0 items-center gap-2 overflow-hidden text-sm font-semibold opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
          {locale === "ar" ? "تفاصيل المشروع" : "View project"}
          <ArrowForward className="size-4" />
        </div>
      </div>
    </Link>
  );
}

export function ServiceCard({ service, locale, index }: { service: Service; locale: Locale; index: number }) {
  return (
    <Link
      href={href(locale, `services/${service.slug}`)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-steel-100 bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-25px_rgb(41_93_169/0.35)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={tr(service.title, locale)}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
        <span className="absolute start-5 bottom-5 inline-flex size-12 items-center justify-center rounded-2xl bg-surface text-link shadow-lg transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <span className="absolute end-5 top-4 text-4xl font-bold text-white/30" dir="ltr">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-fg">{tr(service.title, locale)}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-steel-500">{tr(service.summary, locale)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-link">
          {locale === "ar" ? "اعرف المزيد" : "Learn more"}
          <ArrowForward className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function initials(client: Client, locale: Locale) {
  const name = tr(client.name, locale);
  if (locale === "en") return name.split(/\s+/).filter((w) => /^[A-Z]/.test(w)).slice(0, 3).map((w) => w[0]).join("");
  const skip = new Set(["شركة", "وزارة", "هيئة", "الهيئة", "أمانة", "تطوير", "محافظة", "منطقة"]);
  const words = name.split(/\s+/).filter((w) => !skip.has(w));
  return words
    .slice(0, 2)
    .map((w) => w.replace(/^ال(?=..)/, "")[0])
    .join(" ");
}

export function ClientCard({ client, locale, meta }: { client: Client; locale: Locale; meta?: string }) {
  return (
    <div className="group flex h-full items-center gap-4 rounded-2xl border border-steel-100 bg-surface p-5 transition hover:border-brand-200 hover:shadow-lg">
      {client.logo ? (
        <span className="inline-flex h-14 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-steel-100">
          <Image src={client.logo} alt="" width={160} height={80} className="max-h-full w-auto object-contain" />
        </span>
      ) : (
        <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg font-bold text-link transition group-hover:bg-brand-500 group-hover:text-white">
          {initials(client, locale)}
        </span>
      )}
      <span className="flex flex-col">
        <span className="font-semibold text-fg">{tr(client.name, locale)}</span>
        {meta && <span className="mt-1 text-sm text-steel-500">{meta}</span>}
      </span>
    </div>
  );
}
