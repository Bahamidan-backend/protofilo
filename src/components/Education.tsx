import { motion } from "motion/react";
import { educationProfile } from "../data";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

interface EducationProps {
  lang: "ar" | "en";
}

export default function Education({ lang }: EducationProps) {
  const isAr = lang === "ar";
  const edu = educationProfile;

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-gray-950/40">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className={`text-center space-y-3 mb-16 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold">
            {isAr ? "المسيرة الأكاديمية والشهادات" : "EDUCATION & CREDENTIALS"}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            {isAr ? "التحصيل العلمي والدرجة الأكاديمية" : "Academic Background"}
          </p>
          <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline Node Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`bg-gray-900/40 border border-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300 ${isAr ? "rtl-grid" : "ltr-grid"}`}
          >
            {/* Visual glow accent on hover */}
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative z-10">
              
              {/* Graphic Icon Display Node (3 Cols) */}
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl glow-blue">
                  <GraduationCap size={32} />
                </div>
                
                <div className={`${isAr ? "text-right" : "text-left"} space-y-1`}>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                    <Calendar size={12} />
                    <span>{isAr ? "الدفعة" : "Timeline"}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans font-semibold text-gray-300">
                    {isAr ? edu.periodAr : edu.period}
                  </p>
                </div>
              </div>

              {/* Text Description and Credential Details (9 Cols) */}
              <div className="md:col-span-9 space-y-5">
                
                <div className="space-y-2">
                  <span className="px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-[10px] sm:text-xxs font-mono text-green-400 font-bold uppercase tracking-wider">
                    {isAr ? "مؤهل معتمد للمؤسسات" : "VERIFIED DEGREE"}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {isAr ? edu.degreeAr : edu.degree}
                  </h3>

                  <div className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-400 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                    <span className="flex items-center gap-1 font-medium text-gray-300 font-sans">
                      {isAr ? edu.universityAr : edu.university}
                    </span>
                    <span className="hidden sm:inline text-gray-700">|</span>
                    <span className="flex items-center gap-1 font-mono text-gray-500">
                      <MapPin size={12} />
                      {isAr ? "اليمن، حضرموت، المكلا" : "Al Mukalla, Yemen"}
                    </span>
                  </div>
                </div>

                <hr className="border-gray-900" />

                {/* Score Card Section */}
                <div className={`p-4 bg-gray-950 border border-gray-900 rounded-2xl flex items-center justify-between ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-yellow-400">
                      <Award size={18} />
                    </div>
                    <div className={`${isAr ? "text-right" : "text-left"}`}>
                      <p className="text-[10px] font-mono text-gray-500 uppercase">
                        {isAr ? "المعدل التراكمي" : "CUMULATIVE GPA"}
                      </p>
                      <p className="text-sm font-sans font-bold text-gray-200">
                        {isAr ? edu.gpaAr : edu.gpa}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-gray-600 bg-gray-900 border border-gray-800 px-2 py-1 rounded">
                    3.4 / 4.0 (VERY GOOD)
                  </span>
                </div>

                {/* Coursework bulleting summary */}
                <div className={`${isAr ? "text-right" : "text-left"} space-y-2`}>
                  <p className="text-xs font-mono text-gray-500">
                    {isAr ? "المعارف المكتسبة خلال الرحلة الدراسية:" : "KEY ACQUIRED COMPETENCIES:"}
                  </p>
                  <ul className={`text-xs gap-2 grid grid-cols-1 sm:grid-cols-2 text-gray-400 list-none ${isAr ? "rtl-grid" : "ltr-grid"}`}>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{isAr ? "تصميم وتحليل النظم" : "System Analysis & Design"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{isAr ? "هيكلة قواعد البيانات العلائقية" : "Relational Database Design"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{isAr ? "الخوارزميات وهياكل البيانات" : "Data Structures & Algorithms"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{isAr ? "هندسة الحماية والتشفير الأساسية" : "Symmetric Cryptography & HWID"}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
