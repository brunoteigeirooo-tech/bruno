"use client";

interface ContactProps {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
}

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 sm:p-12 md:p-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
          {content.eyebrow}
        </p>

        <h2 className="mt-8 max-w-4xl text-5xl font-medium tracking-[-0.055em] sm:text-6xl md:text-8xl">
          {content.title}
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-7 text-black/65">
          {content.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:brunoteigeirooo@gmail.com"
            className="rounded-full bg-[#171717] px-7 py-4 text-sm font-medium text-white "
          >
            {content.button}
          </a>

          <a
            href="https://www.linkedin.com/in/brunoteigeiro"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/15 px-7 py-4 text-sm font-medium "
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 grid gap-6 border-t border-black/10 pt-8 text-sm text-black/60 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.12em] text-black/40">
              Email
            </p>
            <a href="mailto:brunoteigeirooo@gmail.com" className="text-black hover:underline">
              brunoteigeirooo@gmail.com
            </a>
          </div>

          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.12em] text-black/40">
              Teléfono
            </p>
            <a href="tel:+523318051739" className="text-black hover:underline">
              33 18 05 17 39
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

