import { CaseStudyCard } from "../../case-studies/CaseStudyCard";
import { caseStudies } from "../../case-studies/data";

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="scroll-mt-6 border-t border-(--line-color) py-10">
      <h2 id="case-studies-title" className="mb-6 text-sm font-normal text-(--text-secondary)">
        Case studies
      </h2>

      <ul className="grid gap-4 md:grid-cols-2" role="list">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <CaseStudyCard study={study} />
          </li>
        ))}
      </ul>
    </section>
  );
}
