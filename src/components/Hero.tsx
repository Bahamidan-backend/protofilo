import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail, ShieldAlert, Phone, Download } from "lucide-react";
import { DeveloperProfile } from "../types";

interface HeroProps {
  lang: "ar" | "en";
  profile: DeveloperProfile;
  portraitSrc: string;
}

export default function Hero({ lang, profile, portraitSrc }: HeroProps) {
  const isAr = lang === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    if (isDownloading) return;
    setIsDownloading(true);

    setTimeout(() => {
      // Craft a robust, beautifully simple PDF structure containing portfolio details
      const pdfText = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 595.275 841.889] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 520 >>
stream
BT
/F1 18 Tf
72 750 Td
(MOHAMMED SALEM BAHUMAIDAN - RESUME) Tj
0 -30 Td
/F1 11 Tf
(Software Engineer - Backend & Desktop Systems Manager) Tj
0 -20 Td
(Email: moammedsalembahamidan@gmail.com) Tj
0 -15 Td
(Phone: +967 775 439 414) Tj
0 -20 Td
(Education: Bachelor of Information Technology - Hadramout University) Tj
0 -20 Td
(GPA: 3.4 / 4.0 | Location: Al Mukalla, Yemen) Tj
0 -25 Td
(Core Technical Competencies:) Tj
0 -15 Td
(- Clean Architecture, OOP, Code Refactoring, Design Patterns) Tj
0 -15 Td
(- C#, .NET runtime, ASP.NET Core APIs, WPF, Desktop Shell) Tj
0 -15 Td
(- SQL Server (T-SQL, optimization), Entity Framework Core, PostgreSQL) Tj
0 -15 Td
(- Custom HWID PC protection licensing & encryption engines) Tj
0 -30 Td
(This is a verified resume generated directly from AI Studio.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000313 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
910
%%EOF`;

      const blob = new Blob([pdfText], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Mohammed_Salem_Bahumaidan_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      setIsDownloading(false);
    }, 1500);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-16 overflow-hidden">
      
      {/* Absolute Background Glowing Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow-strong pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] radial-glow-cyan pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isAr ? "rtl-grid" : "ltr-grid"}`}
        >
          
          {/* Column 1: Core Text and CTA Info (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Tech Tag */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 self-start px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono text-blue-400"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>{isAr ? "متوفر لفرص العمل والتعاقد" : "Available for Projects & Engineering Role"}</span>
            </motion.div>

            {/* Main Greeting and Name */}
            <div className="space-y-4">
              <motion.p 
                variants={itemVariants}
                className="font-mono text-sm tracking-widest text-blue-500 font-bold"
              >
                {isAr ? "مرحباً بك، أنا" : "HELLO, MY NAME IS"}
              </motion.p>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans"
              >
                {isAr ? profile.nameAr : profile.name}
              </motion.h1>

              <motion.h2 
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-400 border-l-2 md:border-l-0 md:border-r-0 border-blue-500/70 pl-3 md:pl-0"
              >
                {isAr ? "مهندس مستقل ومطور أنظمة C# & .NET للشركات" : "Backend & Desktop Software Engineer Manager"}
              </motion.h2>
            </div>

            {/* Impactful Hero Statement */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-lg max-w-2xl leading-relaxed"
            >
              {isAr ? profile.heroStatementAr : profile.heroStatement}
            </motion.p>

            {/* Interactive Socials & Contact Actions */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollToId("projects")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-sm tracking-wide transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 cursor-pointer flex items-center gap-2"
                id="hero-view-projects-btn"
              >
                <span>{isAr ? "تصفح أعمالي" : "Explore My Projects"}</span>
                {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>

              <button
                onClick={() => handleScrollToId("contact")}
                className="px-6 py-3 bg-gray-900 border border-gray-800 hover:border-blue-500/40 text-gray-300 hover:text-white font-medium rounded-lg text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2"
                id="hero-contact-btn"
              >
                <span>{isAr ? "تواصل معي" : "Get In Touch"}</span>
                <Mail size={15} />
              </button>

              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="px-6 py-3 bg-transparent hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/40 text-gray-400 hover:text-blue-400 font-medium rounded-lg text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                id="hero-download-resume-btn"
                title={isAr ? "تحميل السيرة الذاتية بصيغة PDF" : "Download Resume as PDF"}
              >
                {isDownloading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                    <span>{isAr ? "جاري التحميل..." : "Downloading..."}</span>
                  </>
                ) : (
                  <>
                    <span>{isAr ? "تحميل السيرة الذاتية" : "Download Resume"}</span>
                    <Download size={15} />
                  </>
                )}
              </button>
            </motion.div>

            {/* Fast Social Icon Row */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4 border-t border-gray-900 max-w-sm"
            >
              <a 
                href={profile.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-gray-950/50 border border-gray-900 hover:border-gray-700 rounded-lg text-gray-400 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-gray-950/50 border border-gray-900 hover:border-gray-700 rounded-lg text-gray-400 hover:text-blue-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a 
                href={`mailto:${profile.email}`}
                className="p-2 bg-gray-950/50 border border-gray-900 hover:border-gray-700 rounded-lg text-gray-400 hover:text-red-400 transition-all flex items-center gap-2 text-xs font-mono"
                title={isAr ? "راسلني عبر البريد الإلكتروني" : "Email Me"}
              >
                <Mail size={16} />
                <span className="hidden sm:inline-block text-gray-500 hover:text-gray-300 transition-colors">
                  {profile.email}
                </span>
              </a>

              <a 
                href="tel:+967775439414"
                className="p-2 bg-gray-950/50 border border-gray-900 hover:border-blue-500/50 rounded-lg text-gray-400 hover:text-blue-400 transition-all flex items-center gap-2 text-xs font-mono"
                title={isAr ? "اتصل بي" : "Call Me"}
              >
                <Phone size={15} />
                <span className="hidden sm:inline-block text-gray-500 hover:text-gray-300 transition-colors">
                  {isAr ? profile.phoneAr : profile.phone}
                </span>
              </a>
            </motion.div>

          </div>

          {/* Column 2: Gorgeous Moody B&W Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Spinning Glow Circle behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-10 blur-2xl animate-pulse" />
              
              {/* Futuristic Cyber Ring Frame */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/30 glow-blue rotate-3 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl border border-dashed border-cyan-500/20 -rotate-3 pointer-events-none" />

              {/* Developer Portrait Image */}
              <div className="absolute inset-2 bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
                <img
                  src={portraitSrc}
                  alt={isAr ? profile.nameAr : profile.name}
                  className="w-full h-full object-cover grayscale brightness-105 hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Monospace Indicator Badge (C# Developer) */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gray-950/90 border border-gray-800 backdrop-blur-md py-2 px-3.5 rounded-xl shadow-2xl flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse text-glow-green" />
                <span className="font-mono text-[10px] sm:text-xs text-gray-300 font-bold tracking-wider">
                  C# / .NET RUNTIME
                </span>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
