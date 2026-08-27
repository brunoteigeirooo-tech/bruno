"use client";

interface ProjectsProps {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      category: string;
      description: string;
    }[];
  };
}

export default function Projects({ content }: ProjectsProps) {
  return (
    <section
      id="trabajo"
      className="border-b border-current/10 px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-40">
            <span>03</span>
            <span className="h-px w-10 bg-current/30" />
            <span>{content.eyebrow}</span>
          </div>

          <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
            {content.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 opacity-62 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[1.75rem] border border-current/15 md:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.number}
              className="group relative min-h-[300px] border-b border-current/15 bg-[var(--background)] p-7 transition-all duration-500 hover:bg-[var(--surface)] md:border-b-0 md:border-r last:border-r-0 sm:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium opacity-40">
                  {item.number}
                </span>

                <span className="text-xs uppercase tracking-[0.12em] opacity-45">
                  {item.category}
                </span>
              </div>

              <div className="mt-24">
                <div className="mb-4 h-px w-8 bg-[var(--accent)] opacity-70 transition-all duration-500 group-hover:w-14" />

                <h3 className="text-2xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 opacity-58">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
