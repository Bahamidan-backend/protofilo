import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Code2, ChevronDown, ChevronUp, Link, FolderGit, LayoutGrid, CheckCircle2 } from "lucide-react";

// Image asset maps to correspond to generated files
const PROJECT_IMAGES: Record<string, string> = {
  nexcash: "/src/assets/images/project_nexcash_1779654911972.png",
  hotel: "/src/assets/images/project_hotel_1779654930605.png"
};

interface ProjectsProps {
  lang: "ar" | "en";
}

export default function Projects({ lang }: ProjectsProps) {
  const isAr = lang === "ar";
  
  // Track expanded details for separate project cards
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    nexcash: true, // Default open for a stellar impression
    hotel: false
  });

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="py-20 bg-gray-950/60 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] radial-glow-strong pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Title */}
        <div className={`text-center space-y-3 mb-16 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold">
            {isAr ? "دليل الأعمال وقصص النجاح" : "PRODUCTION PORTFOLIO"}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            {isAr ? "المشاريع البرمجية المشغولة" : "Engineered Software Projects"}
          </p>
          <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Projects Listing */}
        <div className="space-y-16">
          {projects.map((proj, index) => {
            const isExpanded = expandedCards[proj.id] || false;
            const hasAlternatingLayout = index % 2 === 1;
            const projectImg = PROJECT_IMAGES[proj.id];

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/45 border border-gray-900 rounded-3xl overflow-hidden shadow-2xl relative"
                id={`project-card-${proj.id}`}
              >
                {/* Visual border accent */}
                <div className="absolute top-0 right-0 left-0 h-[1.5px] bg-gradient-to-r from-blue-500/0 via-blue-500/25 to-blue-500/0" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center ${isAr ? "rtl-grid" : "ltr-grid"}`}>
                  
                  {/* Column 1: Graphic representation of the project UI (5 Cols) */}
                  <div className={`lg:col-span-5 order-2 ${hasAlternatingLayout ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative group overflow-hidden rounded-2xl border border-gray-800">
                      
                      {/* Interactive blue glow aura behind screenshot */}
                      <div className="absolute -inset-2 bg-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
                      
                      <img
                        src={projectImg}
                        alt={isAr ? proj.titleAr : proj.title}
                        className="w-full h-auto max-h-[250px] sm:max-h-[350px] object-cover duration-500 scale-100 hover:scale-103 shadow-md"
                        referrerPolicy="no-referrer"
                      />

                      {/* Monospace Technology Badge Overlay */}
                      <div className="absolute bottom-3 left-3 bg-gray-950/90 border border-gray-800 backdrop-blur-md px-2.5 py-1 text-[9px] sm:text-xxs font-mono text-blue-400 tracking-widest uppercase rounded">
                        {proj.technologies[0]} CORE RUNTIME
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Core Details and Overview (7 Cols) */}
                  <div className={`lg:col-span-7 order-1 ${hasAlternatingLayout ? "lg:order-2" : "lg:order-1"} flex flex-col justify-between h-full space-y-5`}>
                    
                    {/* Tags and Context */}
                    <div className="space-y-3">
                      <div className={`flex flex-wrap items-center gap-2 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xxs font-mono tracking-wider uppercase rounded-full">
                          {isAr ? proj.typeAr : proj.type}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xxs font-mono tracking-wider uppercase rounded-full">
                          {isAr ? "سطح مكتب" : "Windows Desktop"}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {isAr ? proj.titleAr : proj.title}
                      </h3>

                      <p className="text-xs font-mono font-medium text-gray-400 tracking-wide pb-1">
                        {isAr ? "الدور الوظيفي: " : "Role: "}
                        <span className="text-blue-500">{isAr ? proj.roleAr : proj.role}</span>
                      </p>

                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {isAr ? proj.descriptionAr : proj.description}
                      </p>
                    </div>

                    {/* Compact Technology Tags Row */}
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-gray-500">
                        {isAr ? "تقنيات النظام: " : "BUILT WITH: "}
                      </p>
                      <div className={`flex flex-wrap gap-1.5 pt-1 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-gray-300 bg-gray-950 px-2 py-1 rounded-md border border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technical Panel Toggle Action */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleCard(proj.id)}
                        className="w-full flex items-center justify-between p-3 bg-gray-950 hover:bg-gray-950/80 rounded-xl border border-gray-900 hover:border-blue-500/20 transition-all font-sans text-xs font-semibold text-gray-200 hover:text-blue-400 cursor-pointer"
                        id={`proj-toggle-btn-${proj.id}`}
                      >
                        <span className="flex items-center gap-2">
                          <Code2 size={14} className="text-blue-500" />
                          {isAr ? "عرض الإنجازات والتحديات التقنية التي تم حلها" : "Technical Breakthroughs & Solutions"}
                        </span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>

                  </div>

                </div>

                {/* Collapsible Panel with Dynamic Slide Animation (Technical Highlights) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-gray-950/50 border-t border-gray-900"
                    >
                      <div className="p-6 sm:p-8 space-y-4">
                        <h4 className={`text-xs font-mono font-bold tracking-widest text-blue-400 uppercase ${isAr ? "text-right" : "text-left"}`}>
                          {isAr ? "التفاصيل الهندسية وحلول الحماية والأداء" : "ARCHITECTURAL MILESTONES & PERFORMANCE BREAKTHROUGHS"}
                        </h4>

                        <div className={`grid grid-cols-1 gap-4 text-xs sm:text-sm ${isAr ? "rtl-grid" : "ltr-grid"}`}>
                          {(isAr ? proj.achievementsAr : proj.achievements).map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className={`flex gap-3 leading-relaxed items-start p-3 bg-gray-900/20 border border-gray-900/30 rounded-lg ${isAr ? "flex-row-reverse text-right" : "flex-row text-left"}`}
                            >
                              <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                              <span className="text-gray-300 text-xs font-medium">
                                {ach}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
