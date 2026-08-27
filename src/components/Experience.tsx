"use client";

interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
}

interface ExperienceContent {
  eyebrow: string;
  title: string;
  items: ExperienceItem[];
}

interface ExperienceProps {
  content: ExperienceContent;
}

export default function Experience({ content }: ExperienceProps) {
  return (
    <section
      id="experiencia"
      className="border-t border-black/10 px-5 py-24 sm:px-8 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[1fr_2fr] md:gap-24">
          <div className="md:sticky md:top-24 md:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-sm">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              {content.title}
            </h2>

            <div className="mt-8 h-px w-16 bg-black" />
          </div>

          <div>
            {content.items.map((item, index) => (
              <article
                key={`${item.company}-${index}`}
                className="border-t border-black/15 py-10 first:pt-0 sm:py-14"
              >
                <div className="grid gap-5 sm:grid-cols-[110px_1fr] md:grid-cols-[130px_1fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50 sm:text-sm">
                      {item.period}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                      {item.company}
                    </h3>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/65 sm:text-sm">
                      {item.role}
                    </p>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
