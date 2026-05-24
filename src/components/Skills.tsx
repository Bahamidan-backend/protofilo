import { motion } from "motion/react";
import { skillCategories } from "../data";
import { BadgeCheck, BrainCircuit } from "lucide-react";

interface SkillsProps {
  lang: "ar" | "en";
}

export default function Skills({ lang }: SkillsProps) {
  const isAr = lang === "ar";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-950/20">
      
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center space-y-3 mb-16 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold">
            {isAr ? "الترسانة التقنية والخبرات" : "MY STACK & KNOWLEDGE"}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            {isAr ? "المهارات التقنية والمنهجيات" : "Technical Skills & Competences"}
          </p>
          <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Skills Cards Grid - 3 columns on large desktop, 2 on tablet, 1 on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? "rtl-grid" : "ltr-grid"}`}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              className="p-6 bg-gray-900/40 border border-gray-900 rounded-2xl hover:border-gray-800 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Title & Decorative Icon */}
              <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-gray-900 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                  <BrainCircuit size={18} />
                </div>
                <h3 className="text-md font-semibold text-gray-200">
                  {isAr ? cat.titleAr : cat.title}
                </h3>
              </div>

              {/* Skill Bars inside the Category */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className={`flex justify-between items-center text-xs font-semibold ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                      <span className="text-gray-300 text-[11px] sm:text-xs font-sans hover:text-white transition-colors flex items-center gap-1.5">
                        <BadgeCheck size={12} className="text-blue-500/80 inline" />
                        {skill.name}
                      </span>
                      <span className="text-gray-500 font-mono scale-90">{skill.level}%</span>
                    </div>

                    {/* Progress Track Background */}
                    <div className="h-1.5 w-full bg-gray-950 border border-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 glow-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Background Glow Ring */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Standard Backend Code of Honor */}
        <div className={`mt-16 p-6 bg-gray-950 border border-gray-900 rounded-xl flex items-center justify-center text-center gap-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <p className="font-mono text-xs text-gray-400">
            {isAr 
              ? "نلتزم بكتابة كود نظيف وتطوير معمارية نظيفة ذات جودة إنتاجية متناهية تتماشى مع مبادئ SOLID."
              : "COMMITTED TO ROBUST PRODUCTION STANDARDS, SOLID DESIGN ARCHITECTURES, AND PRESERVED SYSTEM SECURITY."}
          </p>
        </div>

      </div>
    </section>
  );
}
