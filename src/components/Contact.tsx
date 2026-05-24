import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, MessageSquare, Copy, Check, Send, MapPin, Phone } from "lucide-react";
import { developerProfile } from "../data";

interface ContactProps {
  lang: "ar" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const isAr = lang === "ar";
  const profile = developerProfile;

  // Form Fields State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Copy email logic
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Copy phone logic
  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText("775439414");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Form submit simulator
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-950/20">
      
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow-cyan pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center space-y-3 mb-16 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold">
            {isAr ? "تواصل معي فوراً" : "GET IN TOUCH WITH ME"}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            {isAr ? "ابدأ مناقشة مشروعك التالي" : "Get In Touch Today"}
          </p>
          <div className="h-0.5 w-16 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 ${isAr ? "rtl-grid" : "ltr-grid"}`}>
          
          {/* Left Column: Direct info cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`${isAr ? "text-right" : "text-left"} space-y-4`}>
              <h3 className="text-xl font-bold text-white font-sans">
                {isAr ? "دعنا نبني شيئاً مذهلاً معاً!" : "Let’s craft premium software systems!"}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {isAr 
                  ? "سواء كنت بحاجة لنظام POS أو ERP قوي لشركتك، أو حماية برمجية لمنتجك، أو تطبيق سطح مكتب متكامل مع قواعد بيانات SQL Server، تواصل معي وسأرد عليك سريعاً."
                  : "If you need an enterprise POS/ERP system, bulletproof HWID custom encryption, high-octane .NET code, or a structured hotel DB, drop me a line and let's coordinate!"}
              </p>
            </div>

            {/* Email card with integrated Copy and Direct Action */}
            <div className={`p-5 bg-gray-900/40 border border-gray-900 rounded-2xl flex items-center justify-between gap-4 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                  <Mail size={20} />
                </div>
                <div className={`${isAr ? "text-right" : "text-left"}`}>
                  <p className="text-[10px] font-mono text-gray-500">
                    {isAr ? "البريد الإلكتروني المباشر" : "PRIMARY EMAIL DIRECT ADDRESS"}
                  </p>
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="text-xs sm:text-sm font-sans font-bold text-gray-100 hover:text-blue-400 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Copy action toggle */}
              <button
                onClick={copyEmailToClipboard}
                className="p-2 bg-gray-950 hover:bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-all cursor-pointer"
                id="copy-email-btn"
                title={isAr ? "نسخ البريد الإلكتروني" : "Copy to Clipboard"}
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone card with integrated Call, WhatsApp and Copy */}
            <div className={`p-5 bg-gray-900/40 border border-gray-900 rounded-2xl flex items-center justify-between gap-4 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
                  <Phone size={20} />
                </div>
                <div className={`${isAr ? "text-right" : "text-left"}`}>
                  <p className="text-[10px] font-mono text-gray-500">
                    {isAr ? "رقم الجوال والواتساب" : "PHONE & WHATSAPP DIRECT"}
                  </p>
                  <div className="flex items-center gap-2">
                    <a 
                      href="tel:+967775439414" 
                      className="text-xs sm:text-sm font-sans font-bold text-gray-100 hover:text-blue-400 transition-colors"
                    >
                      {isAr ? profile.phoneAr : profile.phone}
                    </a>
                    <span className="text-gray-700">|</span>
                    <a 
                      href="https://wa.me/967775439414" 
                      target="_blank"
                      rel="noreferrer" 
                      className="text-[10px] font-mono font-bold text-green-400 hover:underline hover:text-green-300"
                    >
                      {isAr ? "دردش واتساب" : "WhatsApp Chat"}
                    </a>
                  </div>
                </div>
              </div>

              {/* Copy action toggle */}
              <button
                onClick={copyPhoneToClipboard}
                className="p-2 bg-gray-950 hover:bg-gray-900 border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-all cursor-pointer"
                id="copy-phone-btn"
                title={isAr ? "نسخ رقم الهاتف" : "Copy Phone Number"}
              >
                {copiedPhone ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Location Card */}
            <div className={`p-5 bg-gray-900/40 border border-gray-900 rounded-2xl flex items-center gap-3 ${isAr ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500">
                  {isAr ? "مقر الإقامة والعمل" : "BASE OF SERVICES"}
                </p>
                <p className="text-xs sm:text-sm font-sans font-bold text-gray-200">
                  {isAr ? "اليمن، حضرموت، المكلا" : "Al Mukalla, Hadramout, Yemen"}
                </p>
              </div>
            </div>

            {/* Social Anchor Buttons */}
            <div className={`${isAr ? "text-right" : "text-left"} space-y-2`}>
              <p className="text-[10px] font-mono text-gray-500">
                {isAr ? "الملفات والروابط الرقمية المباشرة" : "FOLLOW MY ENGINEERING LOGS"}
              </p>
              <div className={`flex gap-3 ${isAr ? "justify-start flex-row-reverse" : "justify-start flex-row"}`}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-950 border border-gray-900 hover:border-gray-800 rounded-xl font-mono text-xs text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-950 border border-gray-900 hover:border-gray-800 rounded-xl font-mono text-xs text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center gap-2"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interaction form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-gray-900/40 border border-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name field */}
                      <div className="space-y-1 text-right">
                        <label className={`block text-xs font-mono text-gray-400 ${isAr ? "text-right" : "text-left"}`}>
                          {isAr ? "الاسم الكريم *" : "Your Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-gray-950 border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors ${isAr ? "text-right" : "text-left"}`}
                          placeholder={isAr ? "مثال: أحمد سالم" : "e.g. John Doe"}
                        />
                      </div>

                      {/* Email field */}
                      <div className="space-y-1 text-right">
                        <label className={`block text-xs font-mono text-gray-400 ${isAr ? "text-right" : "text-left"}`}>
                          {isAr ? "البريد الإلكتروني للإتصال بك *" : "Email Address *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-gray-950 border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors ${isAr ? "text-right" : "text-left"}`}
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div className="space-y-1 text-right">
                      <label className={`block text-xs font-mono text-gray-400 ${isAr ? "text-right" : "text-left"}`}>
                        {isAr ? "عنوان الرسالة / موضوع المشروع" : "Subject of Request"}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full bg-gray-950 border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors ${isAr ? "text-right" : "text-left"}`}
                        placeholder={isAr ? "تطوير نظام جديد / مناقشة عمل" : "e.g. System upgrade request"}
                      />
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1 text-right">
                      <label className={`block text-xs font-mono text-gray-400 ${isAr ? "text-right" : "text-left"}`}>
                        {isAr ? "تفاصيل الرسالة أو فكرة المشروع باختصار *" : "Brief details of your project *"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full bg-gray-950 border border-gray-900 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none ${isAr ? "text-right" : "text-left"}`}
                        placeholder={isAr ? "اكتب تفاصيل مشروعك هنا وسأقوم بمراجعتها والرد عليك فوراً..." : "Tell me about your business request..."}
                      />
                    </div>

                    {/* Action button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-xs rounded-xl tracking-wide transition-all shadow-lg hover:shadow-blue-500/25 cursor-pointer flex items-center justify-center gap-2"
                        id="submit-contact-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{isAr ? "جاري الإرسال والمعالجة البرمجية..." : "Sending data packet..."}</span>
                          </>
                        ) : (
                          <>
                            <Send size={13} className={isAr ? "rotate-180" : ""} />
                            <span>{isAr ? "إرسال الرسالة الرقمية" : "Send Mail Package"}</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  // Elegant slide and fade feedback container
                  <motion.div
                    key="success-container"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full animate-bounce">
                      <MessageSquare size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white font-sans">
                        {isAr ? "تم إرسال رسالتك بنجاح!" : "Transmission Complete!"}
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
                        {isAr 
                          ? "شكراً لتواصلك يا محمد سالم باحميدان، تم تسجيل تفاصيل الرسالة بنجاح وسأقوم بالرد عليك عبر بريدك الإلكتروني خلال 24 ساعة."
                          : "Your message details have logged safely to my mailbox. I will inspect the specs and reach back within 24 hours."}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-4 py-2 bg-gray-950 hover:bg-gray-900 border border-gray-800 text-xs text-gray-400 hover:text-white rounded-xl transition-all cursor-pointer"
                    >
                      {isAr ? "إرسال رسالة أخرى" : "Send Another Message"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
