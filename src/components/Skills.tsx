"use client";

interface SkillsProps {
  content: {
    eyebrow: string;
    title: string;
    items: string[];
  };
}

export default function Skills({ content }: SkillsProps) {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
            {content.eyebrow}
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-wrap content-start gap-3">
          {content.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/15 px-5 py-3 text-sm text-black/75 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
