import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "./data";

export const metadata = {
  title: "Case Studies | Anushree",
  description: "Explore detailed case studies of Anushree's projects.",
};

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
          className="text-xs text-(--text-muted) transition hover:text-(--text-primary)"
        >
          <span aria-hidden>←</span> Back to portfolio
        </Link>

        <header className="mt-10 border-b border-(--line-color) pb-7">
          <p className="text-sm text-(--text-secondary)">Selected work</p>
          <h1 className="mt-2 font-(--font-instrument-serif) text-4xl tracking-[-0.03em] text-(--text-primary)">
            Case studies
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-(--text-muted)">
            A closer look at the projects I have built. Select a project to open its case study.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group overflow-hidden rounded-lg border border-(--card-border) bg-(--panel-elevated) transition hover:border-(--text-muted)"
            >
              <div className="relative m-2 overflow-hidden rounded-md border border-(--card-border) bg-(--panel-muted)">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={`${study.name} project preview`}
                    width={640}
                    height={240}
                    className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-40 items-center justify-center bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.12),transparent_65%)]">
                    <span className="font-(--font-instrument-serif) text-3xl text-(--text-primary)">
                      {study.name}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-3 px-4 pb-4 pt-2">
                <div>
                  <h2 className="font-(--font-instrument-serif) text-xl text-(--text-primary)">
                    {study.name}
                  </h2>
                  <p className="mt-1 text-xs text-(--text-muted)">Read case study <span aria-hidden>→</span></p>
                </div>
                {study.period && (
                  <span className="pt-1 text-xs text-(--text-muted)">{study.period}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
