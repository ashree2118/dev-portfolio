import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CaseStudyCard, focusRing } from "./CaseStudyCard";
import { caseStudies } from "./data";

export const metadata = {
  title: "Case Studies | Anushree",
  description: "Explore detailed case studies of Anushree's projects.",
};

const featured = caseStudies.filter((study) => study.featured);
const more = caseStudies.filter((study) => !study.featured);

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-(--page-bg) text-(--text-primary)">
      <div className="side-lines-shell pointer-events-none fixed inset-y-0 left-0 right-0 hidden md:block" aria-hidden>
        <div className="slanted-lines slanted-lines-left" />
        <div className="slanted-lines slanted-lines-right" />
      </div>

      <main className="relative z-10 mx-auto min-h-screen w-full max-w-[720px] border-x border-(--line-color) px-5 py-10 md:px-6 md:py-14">
        <Link
          href="/"
          className={`group inline-flex items-center gap-1.5 rounded-sm text-xs text-(--text-muted) transition-colors hover:text-(--text-primary) ${focusRing}`}
        >
          <ArrowIcon className="rotate-180 transition-transform duration-300 ease-out motion-safe:group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>

        <header className="mt-12 pb-10">
          <h1 className="font-(family-name:--font-instrument-serif) text-5xl leading-none tracking-[-0.02em] text-balance text-(--text-primary) md:text-6xl">
            Case studies
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-pretty text-(--text-secondary)">
            A closer look at the projects I have built. Select a project to open its case study.
          </p>
        </header>

        <ul className="space-y-6" role="list">
          {featured.map((study, index) => (
            <li key={study.slug}>
              <CaseStudyCard study={study} preload={index === 0} headingLevel="h2" />
            </li>
          ))}
        </ul>

        {more.length > 0 && (
          <section className="mt-16" aria-labelledby="more-projects">
            <h2
              id="more-projects"
              className="border-b border-(--line-color) pb-3 text-sm text-(--text-secondary)"
            >
              More projects
            </h2>
            <ul role="list">
              {more.map((study) => (
                <li key={study.slug} className="border-b border-(--line-color)">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className={`group -mx-2 my-1 flex items-center gap-4 rounded-lg px-2 py-3 transition-colors duration-200 hover:bg-(--chip-bg) ${focusRing}`}
                  >
                    <div className="relative aspect-[8/5] w-24 shrink-0 overflow-hidden rounded-md border border-(--card-border) bg-(--panel-muted) sm:w-28">
                      {study.image && (
                        <Image
                          src={study.image}
                          alt=""
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <span className="min-w-0 flex-1 font-(family-name:--font-instrument-serif) text-xl leading-tight text-(--text-primary) sm:text-2xl">
                      {study.name}
                    </span>
                    {study.period && (
                      <span className="shrink-0 text-xs tabular-nums text-(--text-muted)">
                        {study.period}
                      </span>
                    )}
                    <ArrowIcon className="text-(--text-muted) transition-[color,transform] duration-300 ease-out group-hover:text-(--text-primary) motion-safe:group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
