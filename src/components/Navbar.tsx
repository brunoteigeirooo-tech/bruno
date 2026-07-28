import { es } from "@/content/es";
import { en } from "@/content/en";

interface NavbarProps {
  language: "es" | "en";
  setLanguage: (language: "es" | "en") => void;
}

export default function Navbar({
  language,
  setLanguage,
}: NavbarProps) {
  const content = language === "en" ? en : es;

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6">
      <div className="text-lg font-semibold tracking-tight">
        BRUNO TEIGEIRO
      </div>

      <div className="flex items-center gap-8 text-sm text-zinc-600">
        <a href="#perfil" className="hover:text-black transition">
          {content.nav.profile}
        </a>

        <a href="#experiencia" className="hover:text-black transition">
          {content.nav.experience}
        </a>

        <a href="#contacto" className="hover:text-black transition">
          {content.nav.contact}
        </a>

        <button
          onClick={() =>
            setLanguage(language === "es" ? "en" : "es")
          }
          className="border rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
        >
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}