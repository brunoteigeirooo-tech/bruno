import { es } from "@/content/es";
import { en } from "@/content/en";

interface HeroProps {
  language: "es" | "en";
}

export default function Hero({ language }: HeroProps) {
  const content = language === "en" ? en : es;

  return (
    <section className="px-8 py-32">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Comunicación · Marketing · Contenido
        </p>

        <h1 className="text-6xl font-semibold tracking-tight leading-tight">
          {content.hero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-600">
          {content.hero.description}
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80">
            {language === "en" ? "View projects" : "Ver proyectos"}
          </button>

          <button className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white">
            {language === "en" ? "Contact" : "Contacto"}
          </button>
        </div>
      </div>
    </section>
  );
}