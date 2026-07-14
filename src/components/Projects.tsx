import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { 
  Code2, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Search, 
  FileDown, 
  UserPlus, 
  Plus, 
  Boxes, 
  Tag, 
  Activity, 
  FileText, 
  Monitor, 
  Maximize2, 
  Minus, 
  X, 
  Briefcase,
  Layers,
  Check,
  Building
} from "lucide-react";

// Import all images directly to let Vite bundle and hash them correctly for the published build
import imgNexCashMain from "../assets/images/1783614452740-019f47b4-9949-71f2-af9d-147ee57a17d2.jpeg";
import imgNexCashBilling from "../assets/images/لقطة الشاشة 2026-06-25 111800.jpg";
import imgNexCashStock from "../assets/images/لقطة الشاشة 2026-07-09 193454.jpg";
import imgNexCashAccounts from "../assets/images/لقطة الشاشة 2026-07-09 193510.jpg";
import imgNexCashVault from "../assets/images/لقطة الشاشة 2026-07-09 193526.jpg";

import imgHotelMain from "../assets/images/project_hotel_1779654930605.png";
import imgHotelRoom from "../assets/images/SharedScreenshotroom.jpg";
import imgHotelReservation from "../assets/images/SharedScreenshotrevsstion.jpg";
import imgHotelAddReservation from "../assets/images/SharedScreenshotaddrevstion.jpg";
import imgHotelEmployee from "../assets/images/SharedScreenshotemployee.jpg";
import imgHotelAddEmployee from "../assets/images/SharedScreenshotaddemployee.jpg";
import imgHotelAccount from "../assets/images/SharedScreenshotaccuont.jpg";
import imgHotelAnalytics from "../assets/images/SharedScreenshot2.jpg";
import imgHotelOperations from "../assets/images/SharedScreenshot3.jpg";
import imgHotelAbout from "../assets/images/SharedScreenshotabout.jpg";

// Multivendor Venue Booking System Images
import imgUntitled from "../assets/Untitled.png";

import imgAdminHome from "../assets/admin/homePage.PNG";
import imgAdminHome2 from "../assets/admin/homePage_2.PNG";
import imgAdminPlaces from "../assets/admin/placesMange.PNG";
import imgAdminAddCategory from "../assets/admin/addCategory.PNG";
import imgAdminAddCategory2 from "../assets/admin/addCategory_2.PNG";
import imgAdminAllCategory from "../assets/admin/allCateogry.PNG";
import imgAdminCategoryEdit1 from "../assets/admin/allCateogry_edit_1.PNG";
import imgAdminCategoryEdit2 from "../assets/admin/allCateogry_edit_2.PNG";
import imgAdminAllOrders from "../assets/admin/allOrders.PNG";
import imgAdminAllUsers from "../assets/admin/allUsers.PNG";
import imgAdminAllUsersEdit from "../assets/admin/allUsers_editInfo.PNG";
import imgAdminDelPlace from "../assets/admin/delPlace.PNG";
import imgAdminEditPlace1 from "../assets/admin/editPlace_1.PNG";
import imgAdminEditPlace2 from "../assets/admin/editPlace_2.PNG";
import imgAdminEditPlace3 from "../assets/admin/editPlace_3.PNG";
import imgAdminEditPlace4 from "../assets/admin/editPlace_4.PNG";
import imgAdminOrderInfo1 from "../assets/admin/OrderInfo_1.PNG";
import imgAdminOrderInfo2 from "../assets/admin/OrderInfo_2.PNG";
import imgAdminOrderInfo3 from "../assets/admin/OrderInfo_3.PNG";
import imgAdminOrderInfoR from "../assets/admin/OrderInfo_r.PNG";

import imgOwnerHome1 from "../assets/owner/homePage_1.PNG";
import imgOwnerHome2 from "../assets/owner/homePage_2.PNG";
import imgOwnerAllPlaces from "../assets/owner/AllPlaces.PNG";
import imgOwnerAddNewPlace from "../assets/owner/addNewPlace.PNG";
import imgOwnerAddNewPlace2 from "../assets/owner/addNewPlace_2.PNG";
import imgOwnerAddNewPlace3 from "../assets/owner/addNewPlace_3.PNG";
import imgOwnerAddNewPlace4 from "../assets/owner/addNewPlace_4.PNG";
import imgOwnerPlaceDetails1 from "../assets/owner/placeDetails_1.PNG";
import imgOwnerPlaceDetails2 from "../assets/owner/placeDetails_2.PNG";
import imgOwnerPlaceReviews from "../assets/owner/placeDetails_allReviews.PNG";

// Project static main image fallback (used for non-interactive views and other projects)
const PROJECT_IMAGES: Record<string, string> = {
  nexcash: imgNexCashMain,
  "hotel-management": imgHotelMain,
  "multivendor-booking": imgUntitled
};

// =========================================================================
// 1. NEXCASH HIGH-FIDELITY IMAGE CAROUSEL COMPONENT
// =========================================================================
interface NexCashCarouselProps {
  isAr: boolean;
}

function NexCashCarousel({ isAr }: NexCashCarouselProps) {
  const slides = [
    {
      id: "main-dashboard",
      title: isAr ? "لوحة التحكم الرئيسية والمبيعات" : "Interactive POS Sales Hub",
      desc: isAr ? "واجهة المستخدم الرئيسية لإدخال المبيعات، ومراقبة حركة الأموال اليومية، وإدارة المنتجات بسرعة ومرونة فائقة." : "The core workspace for executing direct sales orders, monitoring day-to-day transaction streams, and managing retail operations dynamically.",
      path: imgNexCashMain
    },
    {
      id: "pos-billing",
      title: isAr ? "شاشة الفواتير والمبيعات السريعة" : "Dynamic Invoice Billing Terminal",
      desc: isAr ? "شاشة كاشير سريعة مصممة لإصدار وتجهيز الفواتير وإجراء عمليات الإرجاع بسلاسة فائقة بمزامنة آلية لقواعد البيانات." : "High-speed cashier view optimized for compiling instant customer invoices, tracking order changes, and pushing real-time relational SQL logs.",
      path: imgNexCashBilling
    },
    {
      id: "stock-ledgers",
      title: isAr ? "إدارة وتصنيف حسابات المخازن" : "Warehouse Stock & Category Ledger",
      desc: isAr ? "نظام حوكمة المخزون وتصنيف الأقسام وتخزين البيانات بشكل منظم ومرن مع مراعاة دقة خوارزميات التجزئة والفرز." : "Enterprise stock control engine built to classify inventory categories, monitor active item caps, and synchronize stock values seamlessly.",
      path: imgNexCashStock
    },
    {
      id: "accounts-grid",
      title: isAr ? "شاشة المبيعات والحسابات الشاملة" : "Sales Records & Billing Database",
      desc: isAr ? "جدول بيانات مركزي يسرد سجلات عمليات البيع السابقة بالتفصيل ويوفر خيارات تصفية متقدمة لطباعة التقارير الإدارية." : "Comprehensive operational datagrid tracking historical checkout sessions, total revenue per shift, and supporting advanced search filters.",
      path: imgNexCashAccounts
    },
    {
      id: "vault-cashier",
      title: isAr ? "شاشة الخزانة والحركة المالية" : "Cashier Vault & Financial Logs",
      desc: isAr ? "واجهة دقيقة لمراقبة حركة الصندوق المالي والخزينة، ومستحقات العملاء والموردين بدقة حسابية متكاملة." : "Audit module displaying instant register balances, cash drawer drops, client accounts receivable, and clean financial reports.",
      path: imgNexCashVault
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-gray-950/40 border border-gray-900 rounded-2xl overflow-hidden p-3.5">
      {/* Top Banner Indicator */}
      <div className={`flex justify-between items-center px-1 pb-2.5 border-b border-gray-900/40 mb-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider">
            {slides[activeIndex].title}
          </span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 font-bold">
          {activeIndex + 1} / {slides.length}
        </span>
      </div>

      {/* Main Image Viewport with Slide Transition */}
      <div className="relative group/slide overflow-hidden rounded-xl border border-gray-900 bg-gray-950/90 my-auto">
        <div className="absolute top-2.5 right-2.5 z-10 bg-gray-950/80 text-emerald-400 border border-emerald-500/10 px-2 py-0.5 text-[8px] font-mono uppercase rounded tracking-widest animate-pulse">
          {isAr ? "شاشة نظام حقيقية" : "REAL APP SCREEN"}
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-950/80 hover:bg-blue-600 hover:text-white text-gray-400 rounded-full transition-all opacity-0 group-hover/slide:opacity-100 cursor-pointer border border-gray-950"
          title={isAr ? "صورة سابقة" : "Previous Image"}
        >
          <ChevronLeft size={15} />
        </button>

        <img
          src={slides[activeIndex].path}
          alt={slides[activeIndex].title}
          className="w-full h-auto max-h-[220px] sm:max-h-[300px] object-cover duration-500 scale-100 hover:scale-103 shadow-md border-0"
          referrerPolicy="no-referrer"
        />

        <button
          onClick={nextSlide}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-950/80 hover:bg-blue-600 hover:text-white text-gray-400 rounded-full transition-all opacity-0 group-hover/slide:opacity-100 cursor-pointer border border-gray-950"
          title={isAr ? "صورة تالية" : "Next Image"}
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Description below slide */}
      <div className={`mt-3.5 px-1 ${isAr ? "text-right" : "text-left"}`}>
        <p className="text-[11px] text-gray-400 leading-normal font-sans">
          {slides[activeIndex].desc}
        </p>
      </div>

      {/* Slide Navigation Pagination Dots */}
      <div className="flex justify-center gap-1.5 pt-3 border-t border-gray-900/30 mt-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-5 bg-blue-500" : "w-1 bg-gray-800 hover:bg-gray-700"}`}
            title={slide.title}
          />
        ))}
      </div>
    </div>
  );
}

// =========================================================================
// 2. HOTEL MANAGEMENT HIGH-FIDELITY IMAGE CAROUSEL COMPONENT
// =========================================================================
interface HotelManagementCarouselProps {
  isAr: boolean;
}

function HotelManagementCarousel({ isAr }: HotelManagementCarouselProps) {
  const slides = [
    {
      id: "room",
      title: isAr ? "لوحة حالة ومصفوفة الغرف" : "Room Matrix & Occupancy Status",
      desc: isAr ? "مخطط تفصيلي يستعرض جميع غرف جناح الفندق وحالة إشغالها (شواغر، حجوزات نشطة، قيد الصيانة والتنظيف) مع إمكانية التعيين السريع بمزامنة آلية." : "Visual operational board detailing real-time room occupancy (vacant rooms, active check-ins, maintenance/cleaning phases) driven by direct ADO.NET SQL database connections.",
      path: imgHotelRoom
    },
    {
      id: "revsstion",
      title: isAr ? "جدول سجل نزلاء وحجوزات الفندق" : "Bookings & Guests Database Ledger",
      desc: isAr ? "سجل قاعدة بيانات مركزي يعرض بيانات الحجوزات ونزلاء الفندق بالتفصيل، يدعم الفلترة المتقدمة والبحث اللحظي السريع بالاسم أو رقم الهوية الوطنية." : "High-performance data grid views displaying comprehensive customer check-in registers, automated billing timestamps, room numbers, and custom search capabilities.",
      path: imgHotelReservation
    },
    {
      id: "addrevstion",
      title: isAr ? "واجهة تسجيل حجز وإدخال نزيل جديد" : "New Booking & Guest Registration",
      desc: isAr ? "نافذة مخصصة لموظف الاستقبال لربط النزيل الجديد بالغرفة المختارة، وتحديد تكلفة الإقامة الإضافية، الخدمات المشغولة، وحساب كشف الحساب آلياً." : "Dedicated front-desk form to capture guest details, room selection, rates duration, extra amenities cost, and enforce database safe relational integrity.",
      path: imgHotelAddReservation
    },
    {
      id: "employee",
      title: isAr ? "إدارة شؤون الموظفين والصلاحيات" : "Employee & HR Management Matrix",
      desc: isAr ? "محرك متكامل لتسجيل موظفي الفندق وأدوارهم الوظيفية ومستويات الترخيص والصلاحيات وعمليات الدخول لتأمين حركة البيانات الحساسة." : "Personnel manager displaying full staff directory profiles, monthly salary grades, active shifts, and restricted database entry access authorization nodes.",
      path: imgHotelEmployee
    },
    {
      id: "addemployee",
      title: isAr ? "شاشة تعيين الموظفين الجدد وصلاحياتهم" : "New Staff Enrollment Console",
      desc: isAr ? "نافذة سهلة ومنظمة تتيح لمدير الموارد البشرية إضافة وتشفير حساب موظف جديد وتحديد مستوى صلاحيته وكلمة المرور المشفرة." : "Sleek C# Windows Forms container to safely register incoming employee records, credentials, base pay, and assign secure system privilege roles.",
      path: imgHotelAddEmployee
    },
    {
      id: "accuont",
      title: isAr ? "السجلات المالية وبوابة كشف الحساب" : "Financial Statements & Ledger Registry",
      desc: isAr ? "دفتر مالي مركزي يوضح المدفوعات والضرائب والمستحقات والودائع المالية بطريقة منظمة ودقيقة مع خيار الاستخراج والطباعة الفورية للفواتير." : "Aesthetic bookkeeping panel auditing customer balances, advance reserves deposit transactions, service receipts, and printing clean financial statements.",
      path: imgHotelAccount
    },
    {
      id: "analytics",
      title: isAr ? "شاشة التحليلات ومؤشرات الأداء" : "Hotel Operations Analytics Module",
      desc: isAr ? "لوحة معلوماتية مفصلة للغاية تستعرض رسوم بيانية ومؤشرات هامة لأداء الفندق التشغيلي، الدخل المالي، ومعدل الإشغال الشهري." : "Live business intelligence and reports, showing graphical metrics for monthly revenue flow, room demand averages, and receptionist performance logs.",
      path: imgHotelAnalytics
    },
    {
      id: "operations",
      title: isAr ? "لوحة الإعدادات والتحويرات الإدارية" : "System Control Rules & Settings",
      desc: isAr ? "بوابة لوحة التحكم الرئيسية للفندق حيث يمكن تفضيل أسعار ليلية جديدة وتكويد الغرف المتاحة وتغيير اتصال قاعدة البيانات والنسخ الاحتياطي." : "Back-end database and settings module enabling seasons package prices adjustments, custom room numbers creation, database test checks, and server parameters.",
      path: imgHotelOperations
    },
    {
      id: "about",
      title: isAr ? "شاشة عن البرنامج ومعلومات المطور" : "Software Metadata & Author Information",
      desc: isAr ? "شاشة توثيقية ترخص ملكية حقوق البرمجيات، وتسرد بيانات البيئة ومحركات التشغيل ومعلومات الاتصال والمطور البرمجي." : "Brand identity and system specifications viewport containing copyright registries, build version, SQL Connection strings overview, and developer profile references.",
      path: imgHotelAbout
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-gray-950/40 border border-gray-900 rounded-2xl overflow-hidden p-3.5">
      {/* Top Banner Indicator */}
      <div className={`flex justify-between items-center px-1 pb-2.5 border-b border-gray-900/40 mb-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]">
            {slides[activeIndex].title}
          </span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 font-bold shrink-0">
          {activeIndex + 1} / {slides.length}
        </span>
      </div>

      {/* Main Image Viewport with Slide Transition */}
      <div className="relative group/slide overflow-hidden rounded-xl border border-gray-900 bg-gray-950/90 my-auto">
        <div className="absolute top-2.5 right-2.5 z-10 bg-gray-950/80 text-purple-400 border border-purple-500/20 px-2 py-0.5 text-[8px] font-mono uppercase rounded tracking-widest animate-pulse">
          {isAr ? "شاشة نظام حقيقية" : "REAL SYSTEM WINDOW"}
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-950/80 hover:bg-purple-600 hover:text-white text-gray-400 rounded-full transition-all opacity-0 group-hover/slide:opacity-100 cursor-pointer border border-gray-950"
          title={isAr ? "صورة سابقة" : "Previous Image"}
        >
          <ChevronLeft size={15} />
        </button>

        <img
          src={slides[activeIndex].path}
          alt={slides[activeIndex].title}
          className="w-full h-auto max-h-[220px] sm:max-h-[300px] object-cover duration-500 scale-100 hover:scale-103 shadow-md border-0 mx-auto"
          referrerPolicy="no-referrer"
        />

        <button
          onClick={nextSlide}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-950/80 hover:bg-purple-600 hover:text-white text-gray-400 rounded-full transition-all opacity-0 group-hover/slide:opacity-100 cursor-pointer border border-gray-950"
          title={isAr ? "صورة تالية" : "Next Image"}
        >
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Description below slide */}
      <div className={`mt-3.5 px-1 min-h-[46px] ${isAr ? "text-right" : "text-left"}`}>
        <p className="text-[11px] text-gray-400 leading-normal font-sans">
          {slides[activeIndex].desc}
        </p>
      </div>

      {/* Slide Navigation Pagination Dots */}
      <div className="flex justify-center flex-wrap gap-1.5 pt-3 border-t border-gray-900/30 mt-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-5 bg-purple-500" : "w-1 bg-gray-800 hover:bg-gray-700"}`}
            title={slide.title}
          />
        ))}
      </div>
    </div>
  );
}

// =========================================================================
// 3. MULTIVENDOR VENUE BOOKING HIGH-FIDELITY IMAGE CAROUSEL COMPONENT
// =========================================================================
interface MultivendorCarouselProps {
  isAr: boolean;
}

function MultivendorCarousel({ isAr }: MultivendorCarouselProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "admin" | "owner">("architecture");

  // Define slides per tab
  const architectureSlides = [
    {
      id: "schema",
      title: isAr ? "تخطيط قاعدة البيانات الهيكلية" : "Relational Database Planning",
      desc: isAr ? "مخطط علاقات قاعدة البيانات الكامل للمشروع (Untitled.png) يربط جداول الملاك والأدمن والمستخدمين والمرافق والطلبات والتقييمات مع فرض قيود الاتساق والسلامة المرجعية (Relational Integrity)." : "A detailed relational database entity diagram representing the core data design. It maps out Users, Venues, Categories, Orders, and Reviews with proper constraints to ensure high performance and data consistency.",
      path: imgUntitled
    }
  ];

  const adminSlides = [
    {
      id: "admin-home",
      title: isAr ? "لوحة المراقبة والإحصائيات الرئيسية" : "Central Admin Dashboard",
      desc: isAr ? "واجهة الإشراف الشاملة لمتابعة إجمالي الأرباح، أعداد الملاك الجدد، الأماكن المضافة، وتطور تسجيل المستخدمين بنقرة واحدة." : "A comprehensive monitoring hub for administrators to track platform performance, total revenue, vendor signups, active venue counts, and database status.",
      path: imgAdminHome
    },
    {
      id: "admin-home-2",
      title: isAr ? "لوحة التحكم - الواجهة الإدارية البديلة" : "Admin Dashboard - Secondary View",
      desc: isAr ? "واجهة الإدارة الإحصائية المتقدمة وتفاصيل التفاعل اليومي للمستخدمين وحسابات النسب المالية للمنصة." : "Secondary analytical system monitor highlighting customized administrative operations, customer engagement, and transaction flows.",
      path: imgAdminHome2
    },
    {
      id: "admin-places",
      title: isAr ? "إدارة وتعديل الأماكن والمرافق" : "Venue Verification Control",
      desc: isAr ? "لوحة تحكم إدارية تمكن المشرف من تعديل تفاصيل الأماكن أو مراجعتها أو حذفها للحفاظ على معايير الجودة في المنصة." : "A detailed property management portal allowing administrators to verify, edit, and moderate listed venues to ensure top platform standards.",
      path: imgAdminPlaces
    },
    {
      id: "admin-edit-place-process",
      title: isAr ? "تفاصيل العقار وتحديث البيانات" : "Aesthetic Property Editing Portal",
      desc: isAr ? "واجهة تعديل متقدمة تتيح للمشرفين تصحيح بيانات الأماكن وتنسيق المرافق وتجهيز السعر اليومي." : "A high-fidelity form for platform admins to modify venue names, descriptions, adjust prices, and organize custom specifications.",
      path: imgAdminEditPlace1
    },
    {
      id: "admin-categories",
      title: isAr ? "إدارة وتصنيف أقسام الأماكن" : "Platform Taxonomy Settings",
      desc: isAr ? "إضافة وحذف وتعديل الفئات والأقسام المتاحة للأماكن (مثل شاليهات، قاعات اجتماعات، استراحات) لتسهيل الفرز والبحث السلس." : "Custom category controls to define the site hierarchy, adding or restructuring categories such as lounges, convention halls, or private villas.",
      path: imgAdminAllCategory
    },
    {
      id: "admin-category-details",
      title: isAr ? "تعديل بيانات التصنيف" : "Taxonomy Structure Customizer",
      desc: isAr ? "واجهة مبسطة تمكن الإدارة من إعادة تسمية الأقسام وتصنيفاتها ورفع أيقونات معبرة لكل تصنيف بشكل منظم." : "Sleek editing layout allowing admins to easily rename categories, modify identifiers, and assign visual representation tags.",
      path: imgAdminCategoryEdit1
    },
    {
      id: "admin-orders",
      title: isAr ? "جدول الحجوزات والفواتير" : "Comprehensive Platform Orders Ledger",
      desc: isAr ? "سجل مركزي يسرد كافة عمليات الحجز مع توضيح حالات الدفع وتواريخ الوصول والمغادرة والعمولات المقتطعة للمنصة." : "A master ledger compiling booking transactions, deposit logs, checkout statuses, and platform-specific platform commission tracking.",
      path: imgAdminAllOrders
    },
    {
      id: "admin-order-detail",
      title: isAr ? "تفاصيل الفاتورة وحساب التكلفة" : "Detailed Invoice & Billing Sheet",
      desc: isAr ? "فاتورة مفصلة للغاية تعرض معلومات النزيل وتوزيع الأسعار وقيمة الضرائب والخدمات المضافة لضمان الشفافية المالية." : "Grand receipt detailing specific guest details, pricing breakdowns, additional services selected, and direct transaction balances.",
      path: imgAdminOrderInfo1
    },
    {
      id: "admin-users",
      title: isAr ? "حوكمة حسابات الأعضاء والصلاحيات" : "User Directories & System Access Control",
      desc: isAr ? "عرض شامل لأعضاء المنصة والتحكم في حالات الحسابات وتعديل كلمات المرور أو حجب الأعضاء المخالفين." : "Platform membership database allowing administrators to review profiles, update registration details, reset credentials, or suspend violations.",
      path: imgAdminAllUsers
    }
  ];

  const ownerSlides = [
    {
      id: "owner-home-1",
      title: isAr ? "لوحة الملاك وتتبع الدخل التشغيلي" : "Vendor Operational Hub",
      desc: isAr ? "لوحة إحصائية للملاك لتتبع الأرباح المحققة من الحجوزات، عدد الزيارات، ومعدل إشغال العقارات والتقييمات الأخيرة." : "Performance statistics overview tailored for registered property hosts, visualising booking occupancy, revenue, and active reviews.",
      path: imgOwnerHome1
    },
    {
      id: "owner-home-2",
      title: isAr ? "لوحة الملاك الإحصائية المتقدمة" : "Advanced Vendor Financial Charts",
      desc: isAr ? "شاشة إحصائية ثانوية تعرض نسب الأرباح المحققة وتوزيع الطلبات ومستويات رضا العملاء." : "Comprehensive vendor dashboard showing monthly checkout numbers, occupancy metrics, and historical performance charts.",
      path: imgOwnerHome2
    },
    {
      id: "owner-add-place-wizard",
      title: isAr ? "معالج متعدد الخطوات لإدراج مكان جديد" : "Interactive Venue Registration Wizard",
      desc: isAr ? "استمارة مريحة تضمن إدخال بيانات العقار خطوة بخطوة، تشمل كتابة الاسم والوصف وتحديد الموقع الدقيق على الخريطة." : "Step-by-step creation flow prompting property owners to input property details, draft copy summaries, and anchor location configurations.",
      path: imgOwnerAddNewPlace
    },
    {
      id: "owner-add-place-specifications",
      title: isAr ? "تحديد المرافق والخدمات المتاحة" : "Amenities & Specification Settings",
      desc: isAr ? "خطوة مخصصة لاختيار وتجهيز مرافق المكان (مسبح، إنترنت، تكييف، مجلس خارجي) ورفع معارض الصور الملونة بجودة فائقة." : "Dedicated stage within the wizard facilitating swift checklists of available venue amenities, features, and rich photo uploads.",
      path: imgOwnerAddNewPlace2
    },
    {
      id: "owner-all-places",
      title: isAr ? "سجل العقارات والأماكن المضافة" : "My Venues Catalog",
      desc: isAr ? "قائمة منظمة تستعرض جميع عقارات المالك مع مؤشر لحالتها التشغيلية (نشط، بانتظار الموافقة، معطل) لسهولة المراقبة." : "Catalog compiling all current property listings owned by the vendor, flagged with active statuses for clean day-to-day oversight.",
      path: imgOwnerAllPlaces
    },
    {
      id: "owner-place-details",
      title: isAr ? "صفحة العقار ومعلومات التقييم" : "Detailed Property View & Reviews Control",
      desc: isAr ? "عرض العقار بالتفصيل مع استعراض صور المعرض المحددة والمرافق وتسهيل تحديث الأسعار والمراجعات المستلمة." : "High-fidelity profile of specific listings, detailing the gallery image layout, active room configurations, and latest guest responses.",
      path: imgOwnerPlaceDetails1
    },
    {
      id: "owner-place-reviews",
      title: isAr ? "مراجعات ونبض النزلاء" : "Consolidated Guest Experience Audit",
      desc: isAr ? "سجل يجمع تعليقات النزلاء وتغذيتهم الراجعة ومعدل النجوم لكل حجز لتمكين المالك من تحسين جودة الضيافة باستمرار." : "Clean feedback feed aggregating historical customer ratings, reviews text, and rating stars to optimize vendor hospitalities.",
      path: imgOwnerPlaceReviews
    }
  ];

  // Map active tab to current slides array
  const currentSlides = 
    activeTab === "architecture" 
      ? architectureSlides 
      : activeTab === "admin" 
        ? adminSlides 
        : ownerSlides;

  const [activeIndex, setActiveIndex] = useState(0);

  // Reset slide index when changing tabs
  const handleTabChange = (tab: "architecture" | "admin" | "owner") => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? currentSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === currentSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col w-full h-full bg-gray-950/40 border border-gray-900 rounded-2xl overflow-hidden p-3.5">
      {/* Tab Selectors */}
      <div className="grid grid-cols-3 gap-1 bg-gray-950/80 p-1 rounded-xl border border-gray-900 mb-3.5">
        <button
          onClick={() => handleTabChange("architecture")}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 text-center text-[10px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === "architecture"
              ? "bg-blue-600/90 text-white shadow-lg border border-blue-500/30"
              : "text-gray-400 hover:text-white hover:bg-gray-900"
          }`}
        >
          <Layers size={13} className={activeTab === "architecture" ? "text-white" : "text-gray-400"} />
          <span>{isAr ? "التخطيط" : "Architecture"}</span>
        </button>
        <button
          onClick={() => handleTabChange("admin")}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 text-center text-[10px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === "admin"
              ? "bg-blue-600/90 text-white shadow-lg border border-blue-500/30"
              : "text-gray-400 hover:text-white hover:bg-gray-900"
          }`}
        >
          <Activity size={13} className={activeTab === "admin" ? "text-white" : "text-gray-400"} />
          <span>{isAr ? "قسم الأدمن" : "Admin Portal"}</span>
        </button>
        <button
          onClick={() => handleTabChange("owner")}
          className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 text-center text-[10px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            activeTab === "owner"
              ? "bg-blue-600/90 text-white shadow-lg border border-blue-500/30"
              : "text-gray-400 hover:text-white hover:bg-gray-900"
          }`}
        >
          <Building size={13} className={activeTab === "owner" ? "text-white" : "text-gray-400"} />
          <span>{isAr ? "قسم الأونر" : "Owner Portal"}</span>
        </button>
      </div>

      {/* Top Banner Indicator */}
      <div className={`flex justify-between items-center px-1 pb-2.5 border-b border-gray-900/40 mb-3 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider text-ellipsis overflow-hidden whitespace-nowrap max-w-[180px] sm:max-w-[240px]">
            {currentSlides[activeIndex]?.title}
          </span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 font-bold shrink-0">
          {activeIndex + 1} / {currentSlides.length}
        </span>
      </div>

      {/* Main Image Viewport with Slide Transition */}
      <div className="relative group/slide overflow-hidden rounded-xl border border-gray-900 bg-gray-950/90 my-auto flex items-center justify-center min-h-[180px] sm:min-h-[220px]">
        <div className="absolute top-2.5 right-2.5 z-10 bg-gray-950/80 text-blue-400 border border-blue-500/20 px-2 py-0.5 text-[8px] font-mono uppercase rounded tracking-widest animate-pulse">
          {activeTab === "architecture" ? (isAr ? "تخطيط العلاقات" : "SCHEMA DESIGN") : (isAr ? "شاشة بوابة حقيقية" : "REAL SYSTEM VIEW")}
        </div>
        
        {/* Navigation Buttons (Render only if more than 1 slide) */}
        {currentSlides.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-950/80 hover:bg-blue-600 hover:text-white text-gray-400 rounded-full transition-all opacity-0 group-hover/slide:opacity-100 cursor-pointer border border-gray-950"
            title={isAr ? "صورة سابقة" : "Previous Image"}
          >
            <ChevronLeft size={15} />
          </button>
        )}

        <img
          src={currentSlides[activeIndex]?.path}
          alt={currentSlides[activeIndex]?.title}
          className="w-full h-auto max-h-[220px] sm:max-h-[300px] object-contain duration-500 scale-100 hover:scale-103 shadow-md border-0 mx-auto"
          referrerPolicy="no-referrer"
        />

        {currentSlides.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-950/80 hover:bg-blue-600 hover:text-white text-gray-400 rounded-full transition-all opacity-0 group-hover/slide:opacity-100 cursor-pointer border border-gray-950"
            title={isAr ? "صورة تالية" : "Next Image"}
          >
            <ChevronRight size={15} />
          </button>
        )}
      </div>

      {/* Description below slide */}
      <div className={`mt-3.5 px-1 min-h-[46px] ${isAr ? "text-right" : "text-left"}`}>
        <p className="text-[11px] text-gray-400 leading-normal font-sans">
          {currentSlides[activeIndex]?.desc}
        </p>
      </div>

      {/* Slide Navigation Pagination Dots */}
      {currentSlides.length > 1 && (
        <div className="flex justify-center flex-wrap gap-1.5 pt-3 border-t border-gray-900/30 mt-3">
          {currentSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-5 bg-blue-500" : "w-1 bg-gray-800 hover:bg-gray-700"}`}
              title={slide.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// =========================================================================
// 4. MAIN PROJECTS SECTION CONTAINER COMPONENT
// =========================================================================
interface ProjectsProps {
  lang: "ar" | "en";
}

export default function Projects({ lang }: ProjectsProps) {
  const isAr = lang === "ar";
  
  // Track expanded cards
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    nexcash: true, // Default open NexCash
    hotel: false,
    "multivendor-booking": false
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
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-widest font-bold font-mono">
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
            const fallbackImg = PROJECT_IMAGES[proj.id];

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
                {/* Visual upper gradient border */}
                <div className="absolute top-0 right-0 left-0 h-[1.5px] bg-gradient-to-r from-blue-500/0 via-blue-500/25 to-blue-500/0" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center ${isAr ? "rtl-grid" : "ltr-grid"}`}>
                  
                  {/* Column 1: Graphic Carousel / Interactive Image Showcase (5 Cols) */}
                  <div className={`lg:col-span-5 order-2 ${hasAlternatingLayout ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative group overflow-hidden rounded-2xl border-0">
                      
                      {/* Interactive subtle blue glow frame */}
                      <div className="absolute -inset-2 bg-blue-600/5 rounded-2xl opacity-0 hover:opacity-100 blur-xl transition-all duration-300 pointer-events-none" />
                      
                      {/* Render Interactive Slides Carousel for NexCash & Hotel Management, otherwise standard static fallback */}
                      {proj.id === "nexcash" ? (
                        <NexCashCarousel isAr={isAr} />
                      ) : proj.id === "hotel-management" ? (
                        <HotelManagementCarousel isAr={isAr} />
                      ) : proj.id === "multivendor-booking" ? (
                        <MultivendorCarousel isAr={isAr} />
                      ) : (
                        <div className="relative group overflow-hidden rounded-xl border border-gray-800">
                          <img
                            src={fallbackImg}
                            alt={isAr ? proj.titleAr : proj.title}
                            className="w-full h-auto max-h-[250px] sm:max-h-[350px] object-cover duration-500 scale-100 hover:scale-103 shadow-md"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-3 left-3 bg-gray-950/90 border border-gray-800 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono text-blue-400 tracking-widest uppercase rounded">
                            {proj.technologies[0]} CORE RUNTIME
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Overview Description and Core stats (7 Cols) */}
                  <div className={`lg:col-span-7 order-1 ${hasAlternatingLayout ? "lg:order-2" : "lg:order-1"} flex flex-col justify-between h-full space-y-5`}>
                    
                    {/* Tags and Context */}
                    <div className="space-y-3">
                      <div className={`flex flex-wrap items-center gap-2 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xxs font-mono tracking-wider uppercase rounded-full">
                          {isAr ? proj.typeAr : proj.type}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xxs font-mono tracking-wider uppercase rounded-full">
                          {proj.id === "multivendor-booking" ? (isAr ? "متعدد المنصات" : "Cross-Platform") : (isAr ? "سطح مكتب" : "Windows Desktop")}
                        </span>
                        {(proj.id === "nexcash" || proj.id === "hotel-management" || proj.id === "multivendor-booking") && (
                          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-wider font-bold rounded-full">
                            {proj.id === "multivendor-booking" ? (isAr ? "منظومة متكاملة حقيقية" : "REAL FUNCTIONAL CROSS-PLATFORM SYSTEM") : (isAr ? "نظام سطح مكتب حقيقي" : "REAL WINDOWS SYSTEM")}
                          </span>
                        )}
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

                    {/* Desktop System Technology tags */}
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-gray-500">
                        {isAr ? "تقنيات النظام والتشفير: " : "BUILT WITH: "}
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

                    {/* Main Technical Collapse Actions controllers */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleCard(proj.id)}
                        className="w-full flex items-center justify-between p-3 bg-gray-950 hover:bg-gray-950/80 rounded-xl border border-gray-900 hover:border-blue-500/20 transition-all font-sans text-xs font-semibold text-gray-200 hover:text-blue-400 cursor-pointer shadow-md"
                        id={`proj-toggle-btn-${proj.id}`}
                      >
                        <span className="flex items-center gap-2">
                          <Code2 size={14} className="text-blue-500" />
                          {isAr ? "عرض التفاصيل الهندسية وحلول الأداء" : "Technical Breakthroughs & Solutions"}
                        </span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>

                  </div>

                </div>

                {/* Collapsible Panel with Dynamic slide and interactive sandboxes */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-gray-950/50 border-t border-gray-900"
                    >
                      <div className="p-5 sm:p-8 space-y-6">
                        
                        <h4 className={`text-xs font-mono font-bold tracking-widest text-blue-400 uppercase ${isAr ? "text-right" : "text-left"}`}>
                          {isAr ? "التفاصيل الهندسية وحلول الأداء" : "ARCHITECTURAL MILESTONES & PERFORMANCE BREAKTHROUGHS"}
                        </h4>

                        <div className={`grid grid-cols-1 gap-4 text-xs sm:text-sm ${isAr ? "rtl-grid" : "ltr-grid"}`}>
                          {(isAr ? proj.achievementsAr : proj.achievements).map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className={`flex gap-3 leading-relaxed items-start p-3 bg-gray-900/20 border border-gray-900/40 rounded-xl ${isAr ? "flex-row-reverse text-right" : "flex-row text-left"}`}
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
