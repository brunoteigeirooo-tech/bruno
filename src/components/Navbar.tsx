"use client";

interface NavbarProps {
  language: "es" | "en";
  setLanguage: (language: "es" | "en") => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Navbar({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
}: NavbarProps) {
  const isEnglish = language === "en";

  const links = [
    { label: isEnglish ? "Profile" : "Perfil", href: "#perfil" },
    { label: isEnglish ? "Experience" : "Experiencia", href: "#experiencia" },
    { label: isEnglish ? "Projects" : "Proyectos", href: "#proyectos" },
    {
      label: isEnglish ? "Recognition" : "Reconocimientos",
      href: "#reconocimientos",
    },
    {
      label: isEnglish ? "Skills" : "Herramientas",
      href: "#habilidades",
    },
    { label: isEnglish ? "Contact" : "Contacto", href: "#contact" },
  ];

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-6 sm:px-8 sm:py-8 md:px-12">
      <a
        href="#top"
        className="shrink-0 text-xs font-semibold tracking-[0.08em] sm:text-sm"
      >
        BRUNO TEIGEIRO
      </a>

      <div className="hidden items-center gap-5 lg:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium opacity-65 hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-current/15 bg-transparent text-lg"
        >
          {darkMode ? "☀︎" : "☾"}
        </button>

        <button
          type="button"
          onClick={() => setLanguage(isEnglish ? "es" : "en")}
          className="cursor-pointer rounded-full border border-current/15 bg-transparent px-4 py-2.5 text-xs font-medium"
        >
          {isEnglish ? "ES" : "EN"}
        </button>
      </div>
    </nav>
  );
}
