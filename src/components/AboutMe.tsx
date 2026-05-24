import { motion } from "motion/react";
import { DeveloperProfile } from "../types";
import { Terminal, Code2, Users, Target, Laptop } from "lucide-react";

interface AboutMeProps {
  lang: "ar" | "en";
  profile: DeveloperProfile;
}

export default function AboutMe({ lang, profile }: AboutMeProps) {
  const isAr = lang === "ar";

  const stats = [
    {
      id: "years",
      value: "4+",
      labelEn: "Years of Programming",
      labelAr: "سنوات من البرمجة المتواصلة",
      icon: <Code2 className="text-blue-400" size={20} />
    },
    {
      id: "projects",
      value: "2",
      labelEn: "Production Systems Built",
      labelAr: "أنظمة برمجية جاهزة للإنتاج",
      icon: <Laptop className="text-cyan-400" size={20} />
    },
    {
      id: "team",
      value: "3",
      labelEn: "Team Members Led",
      labelAr: "أعضاء قمت بتوجيههم وقيادتهم",
      icon: <Users className="text-purple-400" size={20} />
    },
    {
      id: "quality",
      value: "100%",
      labelEn: "Clean Code & SOLID Architecture",
      labelAr: "جودة الهيكلية وكتابة الكود النظيف",
      icon: <Target className="text-emerald-400" size={20} />
    }
  ];

  // Simulated code terminal for backend vibe
  const codeSnippet = `{
  "name": "Mohammed Salem",
  "role": "Software Engineer (C# / .NET)",
  "specialties": ["Backend & Desktop Architectures"],
  "focus": "Security, performance & pristine maintainability",
  "location": "Al Mukalla, Yemen",
  "academic": {
    "degree": "B.Sc. Information Technology",
    "status": "Production-Ready Graduate",
    "gpa": "3.4 / 4.0"
  }
}`;

  return (
    <section id="about" className="py-20 bg-gray-950/40 relative">
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className={`text-center space-y-3 mb-16 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold">
            {isAr ? "اكتشف هويتي البرمجية" : "GET TO KNOW ME"}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            {isAr ? "نبذة عني والملخص المهني" : "About Me & Professional Essence"}
          </p>
          <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          
          {/* Column 1: Terminal Console Mockup (Backend Vibe - 5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: isAr ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs text-gray-400"
            >
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-gray-950/80 border-b border-gray-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-500 text-[10px] sm:text-xs">bash - profile_inspect.sh</span>
                <Terminal size={12} className="text-gray-600" />
              </div>

              {/* Terminal Frame Content */}
              <div className="p-4 space-y-3 bg-gray-950/40 select-none">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <span className="text-gray-600">~</span>
                  <span>curl -s https://mohammed.bahamidan/profile</span>
                </div>
                <pre className="text-gray-300 leading-relaxed overflow-x-auto select-text font-mono text-[11px] sm:text-xs">
                  {codeSnippet}
                </pre>
                <div className="flex items-center gap-1 text-green-400 pt-1">
                  <span className="text-gray-600">~</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Detailed Text & Bento Grid Stats (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-100 font-sans">
                {isAr ? "بناء أنظمة مستدامة، آمنة ومدروسة" : "Architecting Secure & Bulletproof Software Workflows"}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                {isAr ? profile.aboutMeAr : profile.aboutMe}
              </p>
            </motion.div>

            {/* Bento Stats Display */}
            <div className={`grid grid-cols-2 gap-4 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 bg-gray-900/60 border border-gray-900 rounded-xl hover:border-gray-800 transition-all flex flex-col gap-3 group relative overflow-hidden"
                >
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-3xl font-mono font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <div className="p-2 bg-gray-950 border border-gray-800 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <span className="text-xs font-sans text-gray-400 relative z-10 font-medium">
                    {isAr ? stat.labelAr : stat.labelEn}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
