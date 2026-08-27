"use client";

interface LampToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function LampToggle({
  darkMode,
  onToggle,
}: LampToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="group relative flex h-11 w-14 cursor-pointer items-start justify-center"
    >
      <span
        className={`absolute top-0 h-7 w-5 rounded-t-full border-2 transition-all duration-500 ${
          darkMode
            ? "border-[#f4c95d] bg-[#f4c95d] shadow-[0_0_22px_rgba(244,201,93,0.55)]"
            : "border-current/50 bg-current/10"
        }`}
      />

      <span
        className={`absolute top-7 h-8 w-[2px] origin-top transition-transform duration-500 ${
          darkMode
            ? "rotate-[-3deg] bg-[#d8b24c]"
            : "rotate-[3deg] bg-current/45"
        }`}
      />

      <span
        className={`absolute top-[33px] h-4 w-3 rounded-full border transition-all duration-500 ${
          darkMode
            ? "border-[#d8b24c] bg-[#d8b24c]"
            : "border-current/40 bg-current/10"
        }`}
      />

      <span
        className={`absolute top-[46px] h-2 w-2 rounded-full transition-all duration-500 ${
          darkMode ? "bg-[#d8b24c]" : "bg-current/40"
        }`}
      />
    </button>
  );
}
