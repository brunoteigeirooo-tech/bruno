"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

import { es } from "@/content/es";
import { en } from "@/content/en";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [darkMode, setDarkMode] = useState(false);

  const content = language === "en" ? en : es;

  return (
    <main
      id="top"
      className={
        darkMode
          ? "min-h-screen overflow-x-hidden bg-[#171717] text-[#f7f5f0]"
          : "min-h-screen overflow-x-hidden bg-[#f7f5f0] text-[#171717]"
      }
    >
      <Navbar
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero language={language} />

      <Philosophy content={content.philosophy} />

      <Profile content={content.profile} />

      <Experience content={content.experience} />

      <Projects content={content.projects} />

      <Recognition content={content.recognition} />

      <Skills content={content.skills} />

      <Contact content={content.contact} />

      <footer className="mx-auto max-w-7xl border-t border-current/10 px-5 py-10 sm:px-8 md:px-12">
        <div className="flex flex-col gap-6 text-sm opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.text}</p>

          <p className="max-w-md text-left sm:text-right">
            {language === "en"
              ? "Whoever does not live to serve, does not serve to live."
              : "Quién no vive para servir, no sirve para vivir."}
          </p>

          <p>{content.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
