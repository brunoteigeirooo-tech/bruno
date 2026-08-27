"use client";

interface RecognitionProps {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    detail: string;
  };
}

export default function Recognition({ content }: RecognitionProps) {
  return (
    <section
      id="reconocimientos"
      className="border-b border-current/10 px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-40">
          <span>04</span>
          <span className="h-px w-10 bg-current/30" />
          <span>{content.eyebrow}</span>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-current/10 bg-[var(--surface)] p-8 sm:p-12 md:p-20">
          <div className="mt-4 grid gap-12 md:grid-cols-[0.8fr_2fr] md:items-end">
            <div>
              <span className="text-7xl font-light tracking-[-0.07em] text-[var(--accent)] sm:text-8xl">
                02
              </span>

              <p className="mt-4 text-sm uppercase tracking-[0.12em] opacity-50">
                Lugar nacional · INAI · 2024
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
                {content.title}
              </h2>

              <p className="mt-7 text-lg opacity-75">
                {content.description}
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 opacity-50">
                {content.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
