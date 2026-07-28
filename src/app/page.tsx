import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-8 py-32">
        <h1 className="text-5xl font-semibold tracking-tight">
          Comunicación estratégica.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Marketing digital, contenido y comunicación para marcas que buscan
          conectar de forma auténtica.
        </p>
      </section>
    </main>
  );
}