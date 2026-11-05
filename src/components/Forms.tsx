"use client";

import { Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company } from "@/data/company";
import type { Locale } from "@/lib/i18n";
import { WhatsappIcon } from "./icons";

/**
 * Static-site forms: they compose the message and hand it to WhatsApp or the mail client.
 * When the backend is ready, replace `deliver()` with a POST to the API.
 */
function deliver(channel: "whatsapp" | "email", subject: string, lines: string[]) {
  const body = lines.filter(Boolean).join("\n");
  if (channel === "whatsapp") {
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
  } else {
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

const field =
  "w-full rounded-xl border border-steel-200 bg-surface px-4 py-3.5 text-fg placeholder:text-steel-400 transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 focus:outline-none";
const labelCls = "mb-2 block text-sm font-semibold text-steel-700";

function Submit({ locale, onEmail }: { locale: Locale; onEmail: () => void }) {
  const ar = locale === "ar";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="submit"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
      >
        <WhatsappIcon className="size-5" />
        {ar ? "إرسال عبر واتساب" : "Send via WhatsApp"}
      </button>
      <button
        type="button"
        onClick={onEmail}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-steel-200 px-7 py-4 font-semibold text-fg transition hover:border-brand-300 hover:text-link"
      >
        <Mail className="size-5" />
        {ar ? "إرسال بالبريد" : "Send by email"}
      </button>
    </div>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const types = ar ? ["طلب عرض سعر", "استفسار", "شراكة / مقاولة باطن", "شكوى", "اقتراح"] : ["Request a quote", "Inquiry", "Partnership / subcontracting", "Complaint", "Suggestion"];
  const [sent, setSent] = useState(false);

  function collect(form: HTMLFormElement) {
    const d = new FormData(form);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    return {
      subject: `${g("type")} — ${g("name")}`,
      lines: [
        `${ar ? "الاسم" : "Name"}: ${g("name")}`,
        g("company") && `${ar ? "الجهة" : "Company"}: ${g("company")}`,
        `${ar ? "الجوال" : "Mobile"}: ${g("phone")}`,
        g("email") && `${ar ? "البريد" : "Email"}: ${g("email")}`,
        `${ar ? "نوع الطلب" : "Type"}: ${g("type")}`,
        "",
        g("message"),
      ] as string[],
    };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { subject, lines } = collect(e.currentTarget);
    deliver("whatsapp", subject, lines);
    setSent(true);
  }

  function onEmail(form: HTMLFormElement | null) {
    if (!form || !form.reportValidity()) return;
    const { subject, lines } = collect(form);
    deliver("email", subject, lines);
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" id="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">{ar ? "الاسم الكامل" : "Full name"} *</label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">{ar ? "الجهة / الشركة" : "Company"}</label>
          <input id="company" name="company" className={field} autoComplete="organization" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">{ar ? "رقم الجوال" : "Mobile"} *</label>
          <input id="phone" name="phone" type="tel" required dir="ltr" placeholder="+966 5x xxx xxxx" className={`${field} text-start rtl:text-right`} autoComplete="tel" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">{ar ? "البريد الإلكتروني" : "Email"}</label>
          <input id="email" name="email" type="email" dir="ltr" className={`${field} rtl:text-right`} autoComplete="email" />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="type">{ar ? "نوع الطلب" : "Request type"}</label>
        <select id="type" name="type" className={field} defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="message">{ar ? "تفاصيل الطلب" : "Message"} *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder={ar ? "صف مشروعك: الموقع، نوع الأعمال، المدة المتوقعة..." : "Describe your project: location, scope, expected duration..."}
        />
      </div>
      <Submit locale={locale} onEmail={() => onEmail(document.getElementById("contact-form") as HTMLFormElement)} />
      {sent && (
        <p className="flex items-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-link-hover">
          <Send className="size-4" />
          {ar ? "تم تجهيز رسالتك. أكمل الإرسال من التطبيق الذي فُتح." : "Your message is ready — finish sending it in the app that opened."}
        </p>
      )}
    </form>
  );
}

export function CareersForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [sent, setSent] = useState(false);

  function collect(form: HTMLFormElement) {
    const d = new FormData(form);
    const g = (k: string) => String(d.get(k) ?? "").trim();
    return {
      subject: `${ar ? "طلب توظيف" : "Job application"} — ${g("position")} — ${g("name")}`,
      lines: [
        `${ar ? "الاسم" : "Name"}: ${g("name")}`,
        `${ar ? "الجوال" : "Mobile"}: ${g("phone")}`,
        g("email") && `${ar ? "البريد" : "Email"}: ${g("email")}`,
        `${ar ? "الوظيفة" : "Position"}: ${g("position")}`,
        `${ar ? "سنوات الخبرة" : "Years of experience"}: ${g("years")}`,
        "",
        g("message"),
        "",
        ar ? "(سأرفق السيرة الذاتية في هذه الرسالة)" : "(I will attach my CV to this message)",
      ] as string[],
    };
  }

  return (
    <form
      id="careers-form"
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const { subject, lines } = collect(e.currentTarget);
        deliver("whatsapp", subject, lines);
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="c-name">{ar ? "الاسم الكامل" : "Full name"} *</label>
          <input id="c-name" name="name" required className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="c-phone">{ar ? "رقم الجوال" : "Mobile"} *</label>
          <input id="c-phone" name="phone" type="tel" required dir="ltr" className={`${field} rtl:text-right`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="c-email">{ar ? "البريد الإلكتروني" : "Email"}</label>
          <input id="c-email" name="email" type="email" dir="ltr" className={`${field} rtl:text-right`} />
        </div>
        <div>
          <label className={labelCls} htmlFor="c-years">{ar ? "سنوات الخبرة" : "Years of experience"}</label>
          <input id="c-years" name="years" type="number" min={0} className={field} />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="c-position">{ar ? "الوظيفة المطلوبة" : "Position"} *</label>
        <input
          id="c-position"
          name="position"
          required
          className={field}
          placeholder={ar ? "مثال: مهندس مدني، مشغل بوكلين، مساح..." : "e.g. Civil engineer, excavator operator, surveyor..."}
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="c-message">{ar ? "نبذة عنك" : "About you"}</label>
        <textarea id="c-message" name="message" rows={4} className={field} />
      </div>
      <Submit
        locale={locale}
        onEmail={() => {
          const form = document.getElementById("careers-form") as HTMLFormElement;
          if (!form.reportValidity()) return;
          const { subject, lines } = collect(form);
          deliver("email", subject, lines);
          setSent(true);
        }}
      />
      <p className="text-sm text-steel-500">
        {ar ? "أرفق سيرتك الذاتية (PDF) في رسالة الواتساب أو البريد بعد فتحها." : "Attach your CV (PDF) to the WhatsApp or email message once it opens."}
      </p>
      {sent && (
        <p className="rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-link-hover">
          {ar ? "تم تجهيز طلبك. لا تنسَ إرفاق السيرة الذاتية." : "Your application is ready — don't forget to attach your CV."}
        </p>
      )}
    </form>
  );
}
