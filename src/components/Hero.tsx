interface HeroProps {
  language: "es" | "en";
}

export default function Hero({ language }: HeroProps) {
  const isEnglish = language === "en";

  return (
    <section className="px-5 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:px-12 md:pb-40 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:mb-8 sm:text-sm sm:tracking-[0.25em]">
            {isEnglish
              ? "Communication · Marketing · Content"
              : "Comunicación · Marketing · Contenido"}
          </p>

          <h1 className="max-w-5xl text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-7xl">
            {isEnglish ? (
              <>
                Stories move people.
                <br />
                <span className="text-zinc-500">
                  Communication gives them direction.
                </span>
              </>
            ) : (
              <>
                Las historias mueven a las personas.
                <br />
                <span className="text-zinc-500">
                  La comunicación les da dirección.
                </span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:mt-8 sm:text-lg md:text-xl">
            {isEnglish
              ? "Strategic communicator specialized in storytelling, content and digital communication."
              : "Comunicador estratégico especializado en storytelling, contenido y comunicación digital."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#experiencia"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-75 sm:px-6 sm:py-3"
            >
              {isEnglish ? "View projects" : "Ver proyectos"}
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-black/25 px-5 py-2.5 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white sm:px-6 sm:py-3"
            >
              {isEnglish ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}