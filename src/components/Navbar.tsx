"use client";

import LampToggle from "@/components/LampToggle";

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
    { label: isEnglish ? "Experience" : "Trayectoria", href: "#experiencia" },
    { label: isEnglish ? "Work" : "Trabajo", href: "#trabajo" },
    {
      label: isEnglish ? "Recognition" : "Reconocimientos",
      href: "#reconocimientos",
    },
    {
      label: isEnglish ? "Knowledge" : "Conocimientos",
      href: "#conocimientos",
    },
    { label: isEnglish ? "Contact" : "Contacto", href: "#contact" },
  ];

  return (
    <nav className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 border-b border-current/10 px-5 py-5 sm:px-8 sm:py-6 md:px-12">
      <a
        href="#top"
        className="shrink-0 text-xs font-semibold tracking-[0.08em] transition-opacity hover:opacity-60 sm:text-sm"
      >
        BRUNO TEIGEIRO
      </a>

      <div className="hidden items-center gap-5 lg:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs font-medium opacity-55 transition-opacity duration-200 hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <LampToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />

        <button
          type="button"
          onClick={() => setLanguage(isEnglish ? "es" : "en")}
          aria-label={
            isEnglish
              ? "Cambiar idioma a español"
              : "Change language to English"
          }
          className="flex h-9 min-w-10 cursor-pointer items-center justify-center rounded-full border border-current/15 bg-current/[0.03] px-3 text-xs font-semibold transition-all duration-300 hover:border-current/30 hover:bg-current/10"
        >
          {isEnglish ? "ES" : "EN"}
        </button>
      </div>
    </nav>
  );
}
