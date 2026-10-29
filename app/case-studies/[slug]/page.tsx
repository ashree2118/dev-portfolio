import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "../../components/ThemeToggle";
import { ArrowIcon, CaseStudyCard, focusRing } from "../CaseStudyCard";
import { caseStudies } from "../data";
import EzMeetupCaseStudy from "../EzMeetupCaseStudy";
import TakeUForwardCaseStudy from "../TakeUForwardCaseStudy";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return { title: "Case Study | Anushree" };
  }

  return {
    title: `${study.name} Case Study | Anushree`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const next = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--page-bg) text-(--text-primary)">
      <div className="side-lines-shell pointer-events-none fixed inset-y-0 left-0 right-0 hidden md:block" aria-hidden>
        <div className="slanted-lines slanted-lines-left" />
        <div className="slanted-lines slanted-lines-right" />
      </div>

      <main className="relative z-10 mx-auto min-h-screen w-full max-w-[720px] border-x border-(--line-color) px-5 py-10 md:px-6 md:py-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#case-studies"
            className={`group inline-flex items-center gap-1.5 rounded-sm text-xs text-(--text-muted) transition-colors hover:text-(--text-primary) ${focusRing}`}
          >
            <ArrowIcon className="rotate-180 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>
          <ThemeToggle />
        </div>

        <h1 className="mt-10 font-(family-name:--font-instrument-serif) text-5xl leading-none tracking-[-0.02em] text-(--text-primary) md:text-6xl">
          {study.name}
        </h1>

        <article aria-label={`${study.name} case study content`}>
          {slug === "takeuforward" ? <TakeUForwardCaseStudy /> : <EzMeetupCaseStudy />}
        </article>

        {next.slug !== study.slug && (
          <nav aria-labelledby="next-case-study" className="border-t border-(--line-color) pt-10">
            <h2 id="next-case-study" className="mb-6 text-sm font-normal text-(--text-secondary)">
              Next case study
            </h2>
            <div className="sm:w-1/2">
              <CaseStudyCard study={next} />
            </div>
          </nav>
        )}
      </main>
    </div>
  );
}
