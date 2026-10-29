import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--page-bg) text-(--text-primary)">
      <div className="side-lines-shell pointer-events-none fixed inset-y-0 left-0 right-0 hidden md:block" aria-hidden>
        <div className="slanted-lines slanted-lines-left" />
        <div className="slanted-lines slanted-lines-right" />
      </div>

      <main className="relative z-10 mx-auto min-h-screen w-full max-w-[720px] border-x border-(--line-color) px-5 py-10 md:px-6 md:py-14">
        <Link
          href="/#case-studies"
          className="text-xs text-(--text-muted) transition hover:text-(--text-primary)"
        >
          <span aria-hidden>←</span> Back to portfolio
        </Link>

        <header className="mt-10 border-b border-(--line-color) pb-7">
          {study.period && (
            <p className="text-sm text-(--text-secondary)">{study.period}</p>
          )}
          <h1 className="mt-2 font-(family-name:--font-instrument-serif) text-4xl tracking-[-0.03em] text-(--text-primary)">
            {study.name}
          </h1>
        </header>

        <article aria-label={`${study.name} case study content`}>
          {slug === "takeuforward" ? <TakeUForwardCaseStudy /> : <EzMeetupCaseStudy />}
        </article>
      </main>
    </div>
  );
}
