import { cvContent, type Locale } from "@/lib/cv-data";

export default function Formation({ locale }: { locale: Locale }) {
  const { education, skillsSection } = cvContent[locale];

  return (
    <section className="section section--tight" aria-labelledby="education-title">
      <div className="education spot">
        <h2 id="education-title">{skillsSection.education}</h2>
        <div className="education__list">
          {education.map((item) => (
            <article key={item.id}>
              <time>{item.year}</time>
              <div>
                <h3>{item.diploma}</h3>
                <p>{item.school}</p>
                {item.description && <small>{item.description}</small>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
