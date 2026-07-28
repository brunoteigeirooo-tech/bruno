export default function Hero() {
  return (
    <section className="px-8 py-32">
      <div className="max-w-4xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Comunicación · Marketing · Contenido
        </p>

        <h1 className="text-6xl font-semibold tracking-tight leading-tight">
          Comunicación estratégica
          <br />
          con una visión humana.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-600">
          Desarrollo ideas, contenido y estrategias digitales para marcas que
          buscan conectar de forma auténtica con las personas.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-80">
            Ver proyectos
          </button>

          <button className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}