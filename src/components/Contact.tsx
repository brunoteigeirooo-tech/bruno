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
    <section
      id="contact"
      className="border-b border-current/10 px-5 py-24 sm:px-8 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-current/15 bg-[var(--surface)] p-8 sm:p-12 md:p-20">
        <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-40">
          <span>06</span>
          <span className="h-px w-10 bg-current/30" />
          <span>{content.eyebrow}</span>
        </div>

        <h2 className="mt-8 max-w-4xl text-5xl font-medium tracking-[-0.055em] sm:text-6xl md:text-8xl">
          {content.title}
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-7 opacity-62">
          {content.description}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:brunoteigeirooo@gmail.com"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold text-[#171715] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
          >
            {content.button}
          </a>

          <a
            href="https://www.linkedin.com/in/brunoteigeiro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-current/20 bg-transparent px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-current/40 hover:bg-current/[0.06]"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 grid gap-6 border-t border-current/10 pt-8 text-sm sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.12em] opacity-45">
              Email
            </p>

            <a
              href="mailto:brunoteigeirooo@gmail.com"
              className="opacity-65 transition-opacity hover:opacity-100 hover:underline"
            >
              brunoteigeirooo@gmail.com
            </a>
          </div>

          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.12em] opacity-45">
              Teléfono
            </p>

            <a
              href="tel:+523318051739"
              className="opacity-65 transition-opacity hover:opacity-100 hover:underline"
            >
              33 18 05 17 39
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
