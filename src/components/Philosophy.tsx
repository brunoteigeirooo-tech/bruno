interface PhilosophyContent {
  eyebrow: string;
  title: string;
  description: string;
  pillars: {
    number: string;
    title: string;
    description: string;
  }[];
}

interface PhilosophyProps {
  content: PhilosophyContent;
}

export default function Philosophy({
  content,
}: PhilosophyProps) {
  return (
    <section
      id="perfil"
      className="border-t border-black/10 px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:mb-8 sm:text-sm sm:tracking-[0.25em]">
            {content.eyebrow}
          </p>

          <h2 className="max-w-4xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-5xl">
            {content.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:mt-8 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 sm:mt-16 sm:gap-12 sm:pt-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {content.pillars.map((pillar) => (
            <div key={pillar.number}>
              <p className="mb-4 text-sm text-zinc-400 sm:mb-6">
                {pillar.number}
              </p>

              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {pillar.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:mt-5">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}