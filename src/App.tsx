import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Terminal, Shield, Cpu, ExternalLink } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import { developerProfile } from "./data";

// Direct imports of generated assets for rock-solid Vite bundler resolve
import portraitImg from "./assets/images/gemini-2.5-flash-image-preview (nano-banana)_a_خلفيها_خليها_في_استد (1).png";

export default function App() {
  // Default to Arabic ('ar') as requested, with support for seamless English toggle
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const isAr = lang === "ar";

  // Watch screen scroll to show floating run arrow/scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200 antialiased overflow-x-hidden ${isAr ? "text-right" : "text-left"}`}>
      
      {/* Background Matrix-like grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#090d16_1px,transparent_1px),linear-gradient(to_bottom,#090d16_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" 
      />

      {/* Global Interactive Navigation Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Content Sections wrapped in a motion container */}
      <main className="flex-grow relative z-10">
        
        {/* HERO SECTION */}
        <Hero lang={lang} profile={developerProfile} portraitSrc={portraitImg} />
        
        {/* ABOUT ME SECTION */}
        <AboutMe lang={lang} profile={developerProfile} />

        {/* SKILLS SECTION (Skill cards with level progress loaders) */}
        <Skills lang={lang} />

        {/* PROJECTS SECTION (NexCash & Hotel with toggleable breakthrough lists) */}
        <Projects lang={lang} />

        {/* EDUCATION SECTION (Hadramout Univ IT GPA card) */}
        <Education lang={lang} />

        {/* CONTACT ME SECTION (Direct Clipboard email & Interactive Message Box) */}
        <Contact lang={lang} />

      </main>

      {/* FOOTER SECTION: Pristine, clean, and professional */}
      <footer className="bg-gray-950 border-t border-gray-900 py-12 relative z-10 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] radial-glow pointer-events-none" />
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
          
          {/* Trademark & Info */}
          <div className={`flex flex-col items-center md:items-start gap-2 ${isAr ? "md:items-end" : "md:items-start"}`}>
            <span className="font-mono text-sm tracking-widest font-bold text-gray-200">
              M.BAHUMAIDAN
            </span>
            <p className="text-xs text-gray-500 font-sans">
              {isAr 
                ? "جميع الحقوق محفوظة © ٢٠٢٦ محمد سالم باحميدان" 
                : "All Rights Reserved © 2026 Mohammed Salem Bahumaidan"}
            </p>
          </div>

          {/* Quick Technical Architecture Badges */}
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1">
              <Shield size={12} className="text-blue-500/80" />
              <span>TLS SECURE</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Cpu size={12} className="text-blue-500/80" />
              <span>.NET 9 CORE</span>
            </span>
          </div>

          {/* Outbound Quick Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={developerProfile.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-gray-400 hover:text-white font-mono flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink size={10} />
            </a>
            <span className="text-gray-800">|</span>
            <a 
              href={developerProfile.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-gray-400 hover:text-blue-400 font-mono flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink size={10} />
            </a>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION: SCROLL-TO-TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 15,
              mass: 1
            }}
            whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-500 border border-blue-500/20 text-white rounded-full shadow-2xl shadow-blue-500/35 cursor-pointer transition-all duration-300"
            id="scroll-to-top-btn"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
