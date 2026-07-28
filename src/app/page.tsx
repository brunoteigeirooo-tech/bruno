"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Hero language={language} />
    </main>
  );
}