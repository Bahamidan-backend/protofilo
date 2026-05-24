import { useState } from "react";
import { Menu, X, Globe, Terminal } from "lucide-react";

interface HeaderProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const navItems = [
    { id: "hero", labelEn: "Home", labelAr: "الرئيسية" },
    { id: "about", labelEn: "About Me", labelAr: "من أنا" },
    { id: "skills", labelEn: "Skills", labelAr: "المهارات" },
    { id: "projects", labelEn: "Projects", labelAr: "المشاريع" },
    { id: "education", labelEn: "Education", labelAr: "التعليم" },
    { id: "contact", labelEn: "Contact", labelAr: "اتصل بي" },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-950/70 backdrop-blur-md border-b border-gray-900 transition-all duration-300">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between ${lang === "ar" ? "flex-row" : "flex-row-reverse"}`}>
        
        {/* Logo / Brand Name */}
        <div className={`flex items-center gap-2 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
          <div className="p-1.5 bg-blue-600/10 border border-blue-500/20 rounded-md text-blue-400">
            <Terminal size={18} />
          </div>
          <span className="font-mono text-sm tracking-wider font-semibold text-gray-100 placeholder-opacity-75">
            {lang === "ar" ? "M.BAHUMAIDAN" : "M.BAHUMAIDAN"}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-6 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
          <div className={`flex gap-6 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-gray-400 hover:text-blue-400 text-sm font-medium tracking-wide transition-colors cursor-pointer"
                id={`nav-${item.id}`}
              >
                {lang === "ar" ? item.labelAr : item.labelEn}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-gray-800" />

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 border border-gray-800 hover:border-blue-500/30 rounded-lg text-xs font-semibold text-gray-300 hover:text-blue-400 transition-all cursor-pointer"
            id="lang-toggle-desktop"
          >
            <Globe size={13} className="animate-pulse" />
            <span>{lang === "ar" ? "English" : "العربية"}</span>
          </button>
        </nav>

        {/* Mobile Menu Button + Language (Responsive) */}
        <div className={`flex md:hidden items-center gap-3 ${lang === "ar" ? "flex-row-reverse" : "flex-row"}`}>
          <button
            onClick={toggleLanguage}
            className="p-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs text-gray-300 hover:text-blue-400"
            id="lang-toggle-mobile"
          >
            <Globe size={15} />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-gray-400 hover:text-gray-100 hover:bg-gray-900/50 rounded-lg transition-colors"
            id="mobile-menu-btn"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className={`md:hidden bg-gray-950/95 border-b border-gray-900 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 transition-all duration-300 ${lang === "ar" ? "text-right" : "text-left"}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full py-2 px-3 hover:bg-gray-900 text-gray-300 hover:text-blue-400 rounded-md text-sm font-medium transition-colors"
              id={`mob-nav-${item.id}`}
            >
              {lang === "ar" ? item.labelAr : item.labelEn}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
