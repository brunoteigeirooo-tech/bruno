"use client";
interface NavbarProps {
language: "es" | "en";
setLanguage: (language: "es" | "en") => void;
}
export default function Navbar({ language, setLanguage }: NavbarProps) {
const isEnglish = language === "en";
return (
<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 sm:py-8 md:px-12">
<a href="#top" className="shrink-0 text-xs font-semibold tracking-[0.08em] sm:text-sm">
BRUNO TEIGEIRO
</a>
<button
type="button"
onClick={() => setLanguage(isEnglish ? "es" : "en")}
className="cursor-pointer rounded-full border border-black/20 bg-transparent px-6 py-3 text-xs font-medium"
>
{isEnglish ? "ES" : "EN"}
</button>
</nav>
);
}
