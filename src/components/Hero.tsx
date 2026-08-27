interface HeroProps {
  language: "es" | "en";
}

export default function Hero({ language }: HeroProps) {
  const isEnglish = language === "en";

  return (
    <section className="relative border-b border-current/10 px-5 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-12 md:pb-40 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] opacity-45 sm:mb-8 sm:text-sm sm:tracking-[0.25em]">
            {isEnglish
              ? "Communication · Marketing · Content"
              : "Comunicación · Marketing · Contenido"}
          </p>

          <h1 className="max-w-5xl text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-7xl">
            {isEnglish ? (
              <>
                Stories move people.
                <br />
                <span className="opacity-40">
                  Communication gives them direction.
                </span>
              </>
            ) : (
              <>
                Las historias mueven a las personas.
                <br />
                <span className="opacity-40">
                  La comunicación les da dirección.
                </span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-60 sm:mt-8 sm:text-lg md:text-xl">
            {isEnglish
              ? "Strategic communicator specialized in storytelling, content and digital communication."
              : "Comunicador estratégico especializado en storytelling, contenido y comunicación digital."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#experiencia"
              className="rounded-full bg-current px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              {isEnglish ? "View experience" : "Ver experiencia"}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-current/20 bg-transparent px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-current/40 hover:bg-current/[0.06]"
            >
              {isEnglish ? "Let's talk" : "Hablemos"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
