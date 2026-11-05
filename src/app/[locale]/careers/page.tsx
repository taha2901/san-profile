import { Briefcase, GraduationCap, HardHat, HeartHandshake, TrendingUp } from "lucide-react";
import { CareersForm } from "@/components/Forms";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero, SectionHeading } from "@/components/sections";
import { tr } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

const intro = {
  ar: "انضم إلى فريق يعمل على أكبر مشاريع المملكة. نبحث دائماً عن مهندسين ومشغلين وفنيين طموحين.",
  en: "Join a team working on the Kingdom's biggest projects. We're always looking for ambitious engineers, operators and technicians.",
};

export async function generateMetadata({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  return pageMeta({ locale, path: "careers", title: tr({ ar: "التوظيف", en: "Careers" }, locale), description: tr(intro, locale) });
}

export default async function CareersPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const ar = locale === "ar";

  const perks = [
    { icon: TrendingUp, title: ar ? "مشاريع وطنية كبرى" : "National giga-projects", text: ar ? "اعمل في نيوم ومشاريع الوزارات والهيئات الملكية." : "Work on NEOM, ministry and royal-commission projects." },
    { icon: GraduationCap, title: ar ? "تدريب مستمر" : "Continuous training", text: ar ? "نستثمر في تطوير مهارات فريقنا الفنية والقيادية." : "We invest in our team's technical and leadership skills." },
    { icon: HardHat, title: ar ? "بيئة عمل آمنة" : "Safe workplace", text: ar ? "نظام سلامة معتمد ISO 45001 في جميع مواقعنا." : "ISO 45001-certified safety on every site." },
    { icon: HeartHandshake, title: ar ? "ثقافة التعاون" : "Collaborative culture", text: ar ? "فريق واحد يعمل بروح التعاون والمصداقية." : "One team built on cooperation and integrity." },
  ];

  const roles = ar
    ? ["مهندس مدني", "مهندس مساحة", "مدير مشروع", "مشغل بوكلين", "مشغل بلدوزر / قريدر", "سائق قلاب ومعدات ثقيلة", "فني صيانة معدات", "مراقب سلامة"]
    : ["Civil engineer", "Survey engineer", "Project manager", "Excavator operator", "Dozer / grader operator", "Dump truck & heavy-equipment driver", "Equipment maintenance technician", "Safety officer"];

  return (
    <>
      <PageHero
        locale={locale}
        image="/images/fleet/team-volvo.jpg"
        title={ar ? "ابنِ مستقبلك معنا" : "Build your future with us"}
        text={tr(intro, locale)}
        crumbs={[{ label: tr({ ar: "التوظيف", en: "Careers" }, locale) }]}
      />

      <section className="container-x py-24 lg:py-28">
        <SectionHeading eyebrow={ar ? "لماذا سان المتحدة؟" : "Why San United?"} title={ar ? "مكان تنمو فيه مهنياً" : "A place to grow your career"} />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title} className="rounded-3xl border border-steel-100 p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-link">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-fg">{title}</h3>
              <p className="mt-2 text-steel-500">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-steel-50 py-24 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={ar ? "التخصصات" : "Disciplines"}
              title={ar ? "نستقبل السير الذاتية في" : "We welcome CVs for"}
              text={ar ? "لا توجد شواغر معلنة حالياً، لكن يسعدنا استلام سيرتك الذاتية للتخصصات التالية:" : "There are no advertised openings right now, but we're happy to receive your CV for:"}
            />
            <Stagger className="mt-8 flex flex-wrap gap-2">
              {roles.map((r) => (
                <StaggerItem key={r}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-surface px-4 py-2 text-sm font-medium text-steel-700">
                    <Briefcase className="size-4 text-accent" />
                    {r}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal className="rounded-[2rem] bg-surface p-6 shadow-xl sm:p-10 lg:col-span-7">
            <h2 className="text-2xl font-bold text-fg">{ar ? "قدّم طلبك" : "Apply now"}</h2>
            <p className="mt-2 mb-8 text-steel-500">{ar ? "املأ البيانات وسيتواصل معك فريق الموارد البشرية." : "Fill in your details and our HR team will be in touch."}</p>
            <CareersForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
