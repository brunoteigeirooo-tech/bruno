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
    <section id="recognition" className="px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#171717] p-8 text-white sm:p-12 md:p-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
          {content.eyebrow}
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.8fr_2fr] md:items-end">
          <div>
            <span className="text-7xl font-light tracking-[-0.07em] sm:text-8xl">
              02
            </span>

            <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/50">
              Lugar nacional · INAI · 2024
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {content.title}
            </h2>

            <p className="mt-7 text-lg text-white/70">
              {content.description}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/45">
              {content.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
