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
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mb-16 max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
          {content.eyebrow}
        </p>

        <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
          {content.title}
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-7 opacity-65 sm:text-lg">
          {content.description}
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-current/10 bg-current/10 md:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.number}
            className="group min-h-[300px] bg-[var(--background)] p-7 transition-all duration-500 hover:bg-current hover:text-[var(--background)] sm:p-9"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm opacity-50">
                {item.number}
              </span>

              <span className="text-xs uppercase tracking-[0.12em] opacity-50">
                {item.category}
              </span>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-medium tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 opacity-60 transition-opacity duration-500 group-hover:opacity-80">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
