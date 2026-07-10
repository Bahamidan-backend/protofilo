import { DeveloperProfile, SkillCategory, Project, Education } from "./types";

// ==========================================
// 1. DATA TRANSLATIONS & PERSONAL DETAILS
// ==========================================
export const developerProfile: DeveloperProfile = {
  name: "محمد سالم باحميدان",
  nameAr: "محمد سالم باحميدان",
  title: "مهندس برمجيات | مطور أنظمة خلفية وتطبيقات سطح المكتب",
  titleAr: "مهندس برمجيات | مطور أنظمة خلفية وتطبيقات سطح المكتب",
  location: "اليمن، المكلا",
  locationAr: "اليمن، المكلا",
  email: "mohamedsalem230009@gmail.com",
  phone: "+967 775 439 414",
  phoneAr: "٧٧٥٤٣٩٤١٤ (٩٦٧+)",
  github: "https://github.com/Bahamidan-backend",
  linkedin: "https://www.linkedin.com/in/mohammed-bahamaydan",
  
  // Hero Section Marketing Statement (Arabic and English)
  heroStatement: "أقوم بهندسة أنظمة برمجية فائقة الأمان وعالية الأداء، محولاً العمليات الرقمية المعقدة إلى حلول برمجية نظيفة وقابلة للتوسع اللانهائي.",
  heroStatementAr: "أقوم بهندسة أنظمة برمجية فائقة الأمان وعالية الأداء، محولاً العمليات الرقمية المعقدة إلى حلول برمجية نظيفة وقابلة للتوسع اللانهائي.",
  
  // About Me Summaries
  aboutMe: "مهندس برمجيات متخصص في بناء أنظمة سطح المكتب والأنظمة الخلفية (Backend) الجاهزة للإنتاج باستخدام C# و .NET والأنماط المعمارية الحديثة. خبير في تطوير حلول الـ POS والـ ERP القابلة للتوسع والتي تشمل عمليات معقدة مثل إدارة المخزون، التقارير، وأمن الأنظمة، مع التركيز على الأداء العالي وكتابة كود نظيف وقابل للصيانة.",
  aboutMeAr: "مهندس برمجيات متخصص في بناء أنظمة سطح المكتب والأنظمة الخلفية (Backend) الجاهزة للإنتاج باستخدام C# و .NET والأنماط المعمارية الحديثة. خبير في تطوير حلول الـ POS والـ ERP القابلة للتوسع والتي تشمل عمليات معقدة مثل إدارة المخزون، التقارير، وأمن الأنظمة، مع التركيز على الأداء العالي وكتابة كود نظيف وقابل للصيانة."
};

// ==========================================
// 2. TECHNICAL SKILLS CATEGORIES (Cards Format)
// ==========================================
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    titleAr: "لغات البرمجة",
    skills: [
      { name: "C#", level: 95 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks & Tech",
    titleAr: "الإطارات والتقنيات",
    skills: [
      { name: ".NET / .NET Core", level: 95 },
      { name: "ASP.NET Core (APIs)", level: 90 },
      { name: "WPF (MVVM Pattern)", level: 90 },
      { name: "Entity Framework Core", level: 92 },
      { name: "RESTful APIs", level: 93 }
    ]
  },
  {
    id: "architecture",
    title: "Architecture & Design",
    titleAr: "المعمارية والتصميم",
    skills: [
      { name: "MVVM Architectural Pattern", level: 90 },
      { name: "Clean Architecture", level: 88 },
      { name: "Async / Await Coding", level: 95 },
      { name: "Object-Oriented Programming (OOP)", level: 95 },
      { name: "SOLID Principles", level: 30 }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    titleAr: "قواعد البيانات",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "PostgreSQL", level: 30 },
      { name: "SQLite", level: 92 }
    ]
  },
  {
    id: "security",
    title: "Security & Licensing",
    titleAr: "الحماية والأمن",
    skills: [
      { name: "HMAC-SHA256 Cryptography", level: 92 },
      { name: "Hardware ID (HWID) Licensing", level: 95 },
      { name: "Anti-Debugging & Tamper Resistance", level: 88 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Development",
    titleAr: "الأدوات والتطوير",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Visual Studio", level: 95 },
      { name: "Postman API Testing", level: 88 }
    ]
  }
];

// ==========================================
// 3. PROJECTS PORTFOLIO
// ==========================================
export const projects: Project[] = [
  {
    id: "nexcash",
    title: "NexCash - POS & ERP System",
    titleAr: "نظام NexCash - POS & ERP المتكامل",
    type: "Production-Level System",
    typeAr: "نظام إنتاجي متكامل للمؤسسات",
    role: "Lead Full-Stack Developer (Managed 3 members)",
    roleAr: "مهندس برمجيات رئيسي وقائد فريق (3 أفراد)",
    description: "An integrated enterprise-grade retail and inventory desktop management system focusing on safety, custom Arabic printing controllers, and highly complex stock division algorithms.",
    descriptionAr: "نظام إنتاجي كامل لإدارة المبيعات ونقاط البيع وحسابات المخازن، صُمّم بمواصفات أمان عالية مع نظام تشفير وحماية خاص ومحرك حسابات للمخازن ومزامنة فورية.",
    imagePath: "nexcash", // Points to project_nexcash.png
    technologies: [
      "C#",
      ".NET",
      "WPF (MVVM)",
      "Entity Framework Core",
      "SQLite",
      "Cryptography"
    ],
    achievements: [
      "Invented and engineered a highly secure software licensing engine based on client HWID and HMAC-SHA256 signatures to prevent illicit key copying or system piracy.",
      "Architected a custom stock partitioning engine allowing the split of bulk packages/livestock into smaller weight-based sales units, synced dynamically across databases.",
      "Embedded code-level defenses including Anti-Debugging techniques and code-obfuscation configurations to guard the system against reverse engineering attempts.",
      "Built a high-performance native Arabic (RTL) thermal printing engine targeting receipt printer commands directly via asynchronous threads (Async/Await) without external layout dependencies."
    ],
    achievementsAr: [
      "ابتكار وهندسة نظام ترخيص برمجيات صارم يعمل ببصمة العتاد (HWID) وتوقيع تشفيري (HMAC-SHA256) لمنع قرصنة الأنظمة أو تشغيلها بشكل غير مصرح به.",
      "تصميم وبرمجة محرك مخصص لتجزئة وتحويل المخزون (مثل فك الكميات الضخمة والمواشي لوحدات بيع أصغر بالوزن) مع مزامنة لحظية في ديسيبل.",
      "دمج آليات دفاع متطورة تشمل حماية ضد فك التشفير الـ Anti-Debugging لتمكين مستويات أمان وحماية عالية للملفات التنفيذية.",
      "برمجة محرك طباعة حراري مخصص للأجهزة الطرفية يدعم اتجاه اليمين إلى اليسار (RTL) للأحرف العربية، يعمل كلياً بشكل غير متزامن لسرعة قصوى بدون الاعتماد على مكاتب خارجية."
    ]
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    titleAr: "نظام إدارة الفنادق الاحترافي",
    type: "Desktop Management Application",
    typeAr: "نظام سطح مكتب إداري وتجاري",
    role: "Database Architect & Desktop Developer",
    roleAr: "مطور برمجيات ومصمم قواعد البيانات",
    description: "A comprehensive Windows desktop solution streamlining hotel front-desk operations, guest check-ins, financial statements, billing, and layout configurations.",
    descriptionAr: "نظام متكامل لإدارة حجوزات الفنادق، تسجيل بيانات النزلاء، تنظيم الغرف وتوافرها، وإصدار الفواتير المالية الشاملة بدقة وسهولة متناهية.",
    imagePath: "hotel", // Points to project_hotel.png
    technologies: [
      "C#",
      "Windows Forms",
      "SQL Server",
      "ADO.NET"
    ],
    achievements: [
      "Designed and modeled a robust relational database schema on Microsoft SQL Server capable of handling real-time reservation scheduling and transaction safety.",
      "Optimized query performance using custom procedures and strategic indexes to guarantee bulletproof calculations of daily booking availability matrices.",
      "Created a simple, interactive dashboard for hotel receptionists with automated invoice calculators for room services and custom discounts."
    ],
    achievementsAr: [
      "تصميم وبناء نموذج قاعدة بيانات متماسك وفعال على SQL Server لضمان اتساق العمليات وتجنيب حدوث تعارض في جدولة مواعيد الحجوزات المباشرة.",
      "تحسين أداء الاستعلامات المعقدة للفواتير وتوافر الغرف عن طريق الفهارس الذكية والإجراءات المخزنة (Stored Procedures).",
      "تصميم واجهة مستخدم مبسطة لموظفي الاستقبال تُسهل الحجز السريع وتلغي الحاجة للعمليات الورقية التقليدية."
    ]
  }
  
  // =========================================================================
  // 💡 لإضافة مشروع جديد بسهولة (To Add a New Project Easily):
  // =========================================================================
  // 1. قم بفك التعليق عن الهيكل أدناه واملأه بالبيانات الخاصة بك.
  // 2. إذا كان لديك صورة للمشروع، أضفها في المجلد src/assets/images وأشر لاسمها في imagePath.
  // 3. سيقوم الموقع تلقائياً بعرض المشروع الجديد وتحديث الإحصائيات!
  /*
  {
    id: "project-id-placeholder",
    title: "اسم المشروع بالإنجليزية",
    titleAr: "اسم المشروع بالعربية",
    type: "System Type English",
    typeAr: "نوع النظام بالعربية",
    role: "Your Role (English)",
    roleAr: "دورك في المشروع (بالعربية)",
    description: "Short project summary in English.",
    descriptionAr: "ملخص قصير للمشروع باللغة العربية.",
    imagePath: "placeholder", // أو ضع اسم ملف الصورة إذا وجد
    technologies: ["C#", "SQL Server", "ASP.NET Core"],
    achievements: [
      "First key technical breakthrough or feature in English",
      "Second key technical breakthrough in English"
    ],
    achievementsAr: [
      "الإنجاز التقني الأول أو الميزة الفريدة بالعربية",
      "الإنجاز التقني الثاني بالعربية"
    ]
  }
  */
];

// ==========================================
// 4. EDUCATION & ACADEMIC BACKGROUND
// ==========================================
export const educationProfile: Education = {
  degree: "Bachelor of Information Technology (IT)",
  degreeAr: "بكالوريوس في تكنولوجيا المعلومات (IT)",
  university: "Hadramout University",
  universityAr: "جامعة حضرموت - كلية الهندسة والبترول",
  period: "February 2022 - August 2026",
  periodAr: "فبراير 2022 - أغسطس 2026",
  gpa: "3.4 / 4.0",
  gpaAr: "3.4 من 4.0"
};
