import Link from "next/link";
import { ArrowIcon, CaseStudyCard, focusRing } from "../../case-studies/CaseStudyCard";
import { caseStudies } from "../../case-studies/data";

const featured = caseStudies.filter((study) => study.featured);

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="border-t border-(--line-color) py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 id="case-studies-title" className="text-sm font-normal text-(--text-secondary)">
          Case studies
        </h2>
        <Link
          href="/case-studies"
          className={`group inline-flex items-center gap-1.5 rounded-sm text-xs text-(--text-muted) transition-colors hover:text-(--text-primary) ${focusRing}`}
        >
          View all
          <ArrowIcon className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
        </Link>
      </div>

      <ul className="grid gap-4 md:grid-cols-2" role="list">
        {featured.map((study) => (
          <li key={study.slug}>
            <CaseStudyCard study={study} compact />
          </li>
        ))}
      </ul>
    </section>
  );
}
