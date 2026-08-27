interface ProfileContent {
  eyebrow: string;
  title: string;
  description: string;
  description2: string;
  education: string;
  university: string;
  period: string;
}

interface ProfileProps {
  content: ProfileContent;
}

export default function Profile({ content }: ProfileProps) {
  return (
    <section
      id="perfil"
      className="border-t border-black/10 px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-sm sm:tracking-[0.25em]">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 max-w-sm text-[1.75rem] font-semibold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl">
              {content.title}
            </h2>
          </div>

          <div className="max-w-3xl">
            <div className="space-y-5 text-base leading-relaxed text-zinc-600 sm:space-y-6 sm:text-lg">
              <p>{content.description}</p>

              <p>{content.description2}</p>
            </div>

            <div className="mt-10 border-t border-black/10 pt-7 sm:mt-12 sm:pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-sm sm:tracking-[0.2em]">
                {content.education}
              </p>

              <p className="mt-3 text-base sm:text-lg">
                {content.university}
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                {content.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}