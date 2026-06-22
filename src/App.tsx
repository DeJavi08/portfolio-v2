/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Laptop, 
  Code, 
  Globe, 
  Github, 
  Youtube, 
  Instagram, 
  Gamepad2, 
  Sword, 
  MapPin, 
  Heart, 
  Milestone, 
  ExternalLink, 
  Phone, 
  Navigation, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Activity, 
  GraduationCap, 
  FlaskConical, 
  Languages, 
  Terminal, 
  Database, 
  Settings, 
  Briefcase, 
  Bike,
  Zap,
  BarChart3,
  ClipboardCheck,
  Music,
  Trophy,
  BookOpen,
  Award
} from "lucide-react";
import { 
  INITIAL_PROFILE, 
  INITIAL_SOCIAL_LINKS, 
  INITIAL_PROJECTS, 
  INITIAL_EXPERIENCE, 
  INITIAL_SKILL_BARS, 
  INITIAL_EDUCATION_CARDS,
  INITIAL_EDUCATION_DETAILS,
  INITIAL_ACHIEVEMENTS
} from "./data";
import InteractiveCanvasBackground from "./components/InteractiveCanvasBackground";

export default function App() {
  const [profile] = useState(INITIAL_PROFILE);
  const [socialLinks] = useState(INITIAL_SOCIAL_LINKS);
  const [projects] = useState(INITIAL_PROJECTS);
  const [experience] = useState(INITIAL_EXPERIENCE);
  const [skills] = useState(INITIAL_SKILL_BARS);
  const [education] = useState(INITIAL_EDUCATION_CARDS);
  const [educationDetails] = useState(INITIAL_EDUCATION_DETAILS);
  const [achievements] = useState(INITIAL_ACHIEVEMENTS);

  // Theme support (Dark by default)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Custom cursor follower (Only desktop)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Mobile drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Active navigation section highlight
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Custom cursor follower coordinates listener
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    // Sluggish ring delay follower
    const timer = setTimeout(() => {
      setRingPos(mousePos);
    }, 45);
    return () => clearTimeout(timer);
  }, [mousePos]);

  // Sync theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDarkMode]);

  // Viewport scroll surveillance: Active links highlight & scroll triggers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sections = ["hero", "about", "skills", "projects", "education", "achievements", "contact"];

      for (const sectionId of sections) {
        const entry = document.getElementById(sectionId);
        if (entry) {
          const top = entry.offsetTop;
          const height = entry.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Icon dynamic picker helper
  const renderSocialIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "ExternalLink": return <ExternalLink className={className} />;
      case "Youtube": return <Youtube className={className} />;
      case "Gamepad2": return <Gamepad2 className={className} />;
      case "Sword": return <Sword className={className} />;
      case "MapPin": return <MapPin className={className} />;
      case "Heart": return <Heart className={className} />;
      case "Milestone": return <Milestone className={className} />;
      default: return <ExternalLink className={className} />;
    }
  };

  const getProjectIcon = (emoji: string, className = "w-5 h-5") => {
    switch (emoji) {
      case "🎓": return <GraduationCap className={className} />;
      case "🧪": return <FlaskConical className={className} />;
      case "🗣️": return <Languages className={className} />;
      case "⚡": return <Zap className={className} />;
      case "⚙️": return <Settings className={className} />;
      case "🌭": return <Terminal className={className} />;
      case "📊": return <BarChart3 className={className} />;
      case "📝": return <ClipboardCheck className={className} />;
      case "🎵": return <Music className={className} />;
      case "🎶": return <Music className={className} />;
      default: return <Code className={className} />;
    }
  };

  const getPlatformIcon = (id: string, className = "w-5 h-5") => {
    if (id.includes("whatsapp") || id.toLowerCase().includes("whatsapp")) {
      return <Phone className={className} />;
    }
    if (id.includes("instagram") || id.toLowerCase().includes("instagram")) {
      return <Instagram className={className} />;
    }
    if (id.includes("github") || id.toLowerCase().includes("github")) {
      return <Github className={className} />;
    }
    if (id.includes("relive") || id.toLowerCase().includes("relive")) {
      return <Navigation className={className} />;
    }
    return <ExternalLink className={className} />;
  };

  // Setup cursor enter/leave listeners for interactive elements
  const addHoverListeners = (hoverState: boolean) => {
    setIsHovered(hoverState);
  };

  return (
    <div className="min-h-screen relative bg-bg-custom text-text-main transition-colors duration-400 font-sans selection:bg-accent/25 overflow-x-hidden">
      {/* 1. Interactive Node Particle Backdrop */}
      <InteractiveCanvasBackground isDarkMode={isDarkMode} />

      {/* 2. Custom Cursor Follower (Desktop only) */}
      <div 
        className="hidden lg:block fixed pointer-events-none rounded-full bg-accent z-9999 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHovered ? "14px" : "8px",
          height: isHovered ? "14px" : "8px",
          opacity: 0.9,
        }}
      />
      <div 
        className="hidden lg:block fixed pointer-events-none rounded-full border border-accent z-9999 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: isHovered ? "42px" : "32px",
          height: isHovered ? "42px" : "32px",
          borderColor: isDarkMode ? "#daa520" : "#b58913",
        }}
      />

      {/* 3. Header Navbar (Sticky) */}
      <nav className="fixed top-0 left-0 w-full h-[70px] bg-bg-custom/80 backdrop-blur-md border-b border-border-custom hover:border-border-hover/30 transition-all duration-300 z-50 flex justify-between items-center px-6 sm:px-12 select-none">
        <a 
          href="#hero" 
          className="text-2xl font-black tracking-tight"
          onMouseEnter={() => addHoverListeners(true)}
          onMouseLeave={() => addHoverListeners(false)}
        >
          Dejavi<span className="text-accent">.</span>
        </a>

        {/* Navigation Items (Desktop) */}
        <ul className="hidden xl:flex items-center gap-6 text-sm font-semibold text-text-dim">
          {["about", "skills", "projects", "education", "achievements"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onMouseEnter={() => addHoverListeners(true)}
                onMouseLeave={() => addHoverListeners(false)}
                className={`capitalize transition-colors duration-300 hover:text-accent ${
                  activeSection === item ? "text-accent active font-bold" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              onMouseEnter={() => addHoverListeners(true)}
              onMouseLeave={() => addHoverListeners(false)}
              className="px-5 py-2.5 bg-accent/5 border border-border-custom hover:border-accent hover:bg-accent text-accent hover:text-bg-custom font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-accent/20"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Global actions (Theme and Drawer trigger) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            onMouseEnter={() => addHoverListeners(true)}
            onMouseLeave={() => addHoverListeners(false)}
            className="w-10 h-10 border border-border-custom rounded-full flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-500 fill-amber-500/20" /> : <Moon className="w-5 h-5 text-[#b58913] fill-[#b58913]/10" />}
          </button>

          <button
            onClick={() => setIsDrawerOpen(true)}
            onMouseEnter={() => addHoverListeners(true)}
            onMouseLeave={() => addHoverListeners(false)}
            className="xl:hidden w-10 h-10 border border-border-custom rounded-full flex items-center justify-center hover:text-accent hover:border-accent transition-all duration-300 cursor-pointer text-text-main"
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* 4. Drawer slide-in menu for mobile viewports */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-60"
            />

            {/* Solid Drawer Cabinet on right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[280px] h-full bg-bg-custom border-l border-border-custom flex flex-col p-6 z-70 select-none shadow-2xl justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-xl font-black">Dejavi<span className="text-accent">.</span></span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-text-dim hover:text-accent cursor-pointer"
                    aria-label="Close Mobile Drawer Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <ul className="flex flex-col gap-4 text-base font-semibold text-text-dim">
                  {["about", "skills", "projects", "education", "achievements", "contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        onClick={() => setIsDrawerOpen(false)}
                        className={`capitalize block py-2 hover:text-accent transition-colors duration-250 ${
                          activeSection === item ? "text-accent font-extrabold" : ""
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Drawer footer theme controls */}
              <button
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                  setIsDrawerOpen(false);
                }}
                className="w-full py-3 bg-bg-card border border-border-custom text-text-main rounded-xl flex items-center justify-center gap-2 font-semibold hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>☀️ Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-zinc-500" />
                    <span>🌙 Dark Mode</span>
                  </>
                )}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 w-full pt-10">
        
        {/* 5. HERO SECTION */}
        <section id="hero" className="min-h-screen flex items-center pt-[100px] pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
            
            {/* Left Info Column */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              <div className="flex flex-wrap gap-3.5 mb-6 justify-start">
                <span className="text-xs font-mono py-1 px-3.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-xs">
                  🟢 Open for Collaborations
                </span>
                <span className="text-xs font-mono py-1 px-3.5 rounded-full bg-accent/10 text-accent border border-border-custom">
                  Web · Scripting · Python
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-1 text-text-main">
                Javier<span className="text-text-dim font-light block lg:inline-block lg:ml-3">Ahmad Arivery</span>
              </h1>
              
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main mt-4 mb-5">
                Web Developer & <span className="text-accent">Digital Automator</span>
              </p>

              <p className="text-base sm:text-lg text-text-dim leading-relaxed mb-8 max-w-[540px]">
                Saya membangun <strong className="text-text-main font-semibold">media pembelajaran digital interaktif</strong>, mengemas UI berbasis web, dan merakit skrip cerdas Python untuk mengotomatisasi pekerjaan kompleks. Berdomisili di Surabaya — merangkai estetika modern dalam pemrograman.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  onMouseEnter={() => addHoverListeners(true)}
                  onMouseLeave={() => addHoverListeners(false)}
                  className="px-8 py-3.5 bg-text-main text-bg-custom font-extrabold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                >
                  <Laptop className="w-4.5 h-4.5" />
                  <span>Lihat Proyek</span>
                </a>

                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => addHoverListeners(true)}
                  onMouseLeave={() => addHoverListeners(false)}
                  className="px-8 py-3.5 bg-[#25d366] text-white font-extrabold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                >
                  <Phone className="w-4.5 h-4.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://github.com/DeJavi08"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => addHoverListeners(true)}
                  onMouseLeave={() => addHoverListeners(false)}
                  className="px-8 py-3.5 bg-transparent text-text-main border border-border-custom hover:border-accent hover:text-accent hover:bg-accent/5 font-extrabold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                >
                  <Github className="w-4.5 h-4.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>

            {/* Right Card Column */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Primary Profile Details Frame Card */}
              <div className="w-full max-w-[420px] bg-bg-card border border-border-custom rounded-3xl p-8 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                {/* Visual Glow */}
                <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-accent/5 group-hover:bg-accent/10 blur-xl transition-all duration-500 -z-10" />

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-md animate-pulse"></div>
                    <img
                      src={profile.avatarUrl}
                      alt="Dejavi Profile Avatar"
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 rounded-full object-cover border-2 border-accent relative z-10 select-none shadow-lg shadow-accent/20"
                      onError={(e) => {
                        // twemoji gold lightning favicon replacement
                        (e.target as HTMLImageElement).src = "https://twemoji.maxcdn.com/v/latest/72x72/26a1.png";
                      }}
                    />
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight text-text-main mb-1">
                    @{profile.username}
                  </h3>
                  <p className="text-xs font-mono text-accent font-semibold tracking-wider mb-6">
                    Web Developer · Python · Indonesia
                  </p>

                  {/* Sedang Mempelajari active status details */}
                  <div className="w-full text-left bg-accent/5 border border-border-custom rounded-2xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-1.5 flex-row">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
                      <span className="text-[10px] font-mono font-bold uppercase text-accent tracking-widest">SEDANG MEMPELAJARI</span>
                    </div>
                    <p className="text-xs text-text-dim">
                      Pengembangan web modern terstruktur & <strong className="text-text-main font-semibold">skrip Python cerdas</strong>.
                    </p>
                  </div>

                  <div className="w-full h-px bg-border-custom mb-6" />

                  {/* Core stats metric block */}
                  <div className="flex justify-between items-center w-full mb-6 text-center select-none font-sans">
                    <div>
                      <span className="text-2xl font-black text-text-main">10+</span>
                      <span className="block text-[10px] font-mono text-text-dim uppercase tracking-wider">Repos</span>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-text-main">Aktif</span>
                      <span className="block text-[10px] font-mono text-text-dim uppercase tracking-wider">Kreativitas</span>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-text-main">3+</span>
                      <span className="block text-[10px] font-mono text-text-dim uppercase tracking-wider">Thn Belajar</span>
                    </div>
                  </div>

                  {/* Aesthetic tags row list */}
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {["HTML/CSS", "JavaScript", "Python", "Netlify", "Replit", "Git/GitHub"].map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono font-bold py-1 px-2.5 rounded-md bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Float Item Card 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-5 md:-right-8 bg-bg-card border border-border-custom rounded-2xl p-3.5 shadow-xl backdrop-blur-lg flex items-center gap-3 select-none rotate-3 hover:rotate-0 hover:border-accent transition-all duration-300"
              >
                <div className="text-xl">💡</div>
                <div className="font-sans">
                  <h4 className="font-black text-xs text-text-main leading-none">Interactive UI</h4>
                  <p className="text-[10px] text-[#9ca3af] mt-0.5 font-sans leading-none">Modern Webpages</p>
                </div>
              </motion.div>

              {/* Float Item Card 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-5 md:-left-8 bg-bg-card border border-border-custom rounded-2xl p-3.5 shadow-xl backdrop-blur-lg flex items-center gap-3 select-none -rotate-3 hover:rotate-0 hover:border-accent transition-all duration-300"
              >
                <div className="text-xl">⚡</div>
                <div className="font-sans">
                  <h4 className="font-black text-xs text-accent leading-none">Automation</h4>
                  <p className="text-[10px] text-[#9ca3af] mt-0.5 font-sans leading-none">Python Meta Tools</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </section>

        {/* 6. ABOUT SECTION (TENTANG SAYA) */}
        <section id="about" className="py-24 border-t border-border-custom/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-2 mb-2">
                  <span>TENTANG SAYA</span>
                  <span className="w-10 h-px bg-accent inline-block" />
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Menginvestasikan Waktu untuk Eksplorasi Dunia Digital
                </h2>
              </div>

              <div className="text-text-dim text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Halo, saya <strong className="text-text-main font-semibold">Javier Ahmad Arivery</strong> (atau akrab disapa <strong className="text-text-main font-semibold">@dejavi08</strong>) — seorang kreator digital dan developer web muda asal Surabaya, Indonesia.
                </p>
                <p>
                  Fokus saya terletak pada pembuatan platform web interaktif yang bersih dan kaya kegunaan (seperti media edukasi sekolah), dipadukan dengan pemrograman fungsional menggunakan <strong className="text-[#daa520] font-semibold">Python</strong> untuk memproses data, video, dan berkas secara otomatis.
                </p>
                <p>
                  Saya suka belajar secara otodidak, memecahkan masalah praktis harian melalui baris kode, dan terus beradaptasi dengan teknologi digital modern untuk memberikan solusi yang fungsional dan indah.
                </p>
              </div>

              {/* Social profile Action chips button shortcuts */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://github.com/DeJavi08"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => addHoverListeners(true)}
                  onMouseLeave={() => addHoverListeners(false)}
                  className="px-4.5 py-2 border border-border-custom rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-dim hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.youtube.com/@javi_gaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => addHoverListeners(true)}
                  onMouseLeave={() => addHoverListeners(false)}
                  className="px-4.5 py-2 border border-border-custom rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-dim hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/dejavi08"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => addHoverListeners(true)}
                  onMouseLeave={() => addHoverListeners(false)}
                  className="px-4.5 py-2 border border-border-custom rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-dim hover:text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 text-[#e1306c]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Right Quick details card */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-bg-card border border-border-custom rounded-3xl shadow-xl flex flex-col gap-6">
                
                {/* Location */}
                <div className="flex items-start gap-4 flex-row">
                  <div className="p-2.5 rounded-xl bg-accent/5 border border-border-custom text-accent mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-dim uppercase tracking-widest mb-0.5">LOKASI</span>
                    <strong className="text-sm font-black text-text-main">{profile.location}</strong>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4 flex-row">
                  <div className="p-2.5 rounded-xl bg-accent/5 border border-border-custom text-accent mt-0.5">
                    <Laptop className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-dim uppercase tracking-widest mb-1 font-semibold">STATUS PELAJAR</span>
                    <span className="text-xs font-bold font-sans bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 py-1 px-3.5 rounded-md inline-block">
                      🟢 Belajar & Berkarya
                    </span>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-4 flex-row">
                  <div className="p-2.5 rounded-xl bg-accent/5 border border-border-custom text-accent mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-dim uppercase tracking-widest mb-0.5">PENDIDIKAN</span>
                    <strong className="text-sm font-black text-text-main">SMAN 17 Surabaya</strong>
                  </div>
                </div>

                {/* Main Focus */}
                <div className="flex items-start gap-4 flex-row">
                  <div className="p-2.5 rounded-xl bg-accent/5 border border-border-custom text-accent mt-0.5">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-dim uppercase tracking-widest mb-0.5">KATEGORI UTAMA</span>
                    <strong className="text-sm font-black text-text-main">Front-End & Automation Scripting</strong>
                  </div>
                </div>

                {/* Hobbies */}
                <div className="flex items-start gap-4 flex-row">
                  <div className="p-2.5 rounded-xl bg-accent/5 border border-border-custom text-accent mt-0.5">
                    <Bike className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-text-dim uppercase tracking-widest mb-0.5 font-semibold">HOBI AKTIF</span>
                    <strong className="text-sm font-black text-text-main">Gamer (Roblox, Minecraft) & Bersepeda</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 7. SKILLS SECTION (KEAHLIAN) */}
        <section id="skills" className="py-24 border-t border-border-custom/50">
          <div className="mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-2 mb-2">
              <span>KEAHLIAN</span>
              <span className="w-10 h-px bg-accent inline-block" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-4">
              Teknologi & Kemampuan
            </h2>
            <p className="text-text-dim text-sm sm:text-base max-w-[550px] leading-relaxed">
              Kumpulan bahasa pemrograman dan alat bantu yang saya gunakan untuk mewujudkan ide kreatif digital menjadi nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Skill categories pill boxes */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Category 1 */}
              <div className="p-6 bg-bg-card border border-border-custom rounded-2xl hover:border-border-hover/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 flex-row">
                  <div className="text-xl">💻</div>
                  <h3 className="font-extrabold text-base sm:text-lg text-text-main">Front-End Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3 Layouts", "JavaScript (ES6)", "Responsive Design", "CSS Animations"].map((pl) => (
                    <span key={pl} className="text-[11px] font-mono py-1 px-3 rounded-lg bg-bg-custom border border-border-custom text-text-dim">
                      {pl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-6 bg-bg-card border border-border-custom rounded-2xl hover:border-border-hover/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 flex-row">
                  <div className="text-xl">🐍</div>
                  <h3 className="font-extrabold text-base sm:text-lg text-text-main">Automation & Scripting</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Metadata Processing", "File Organizer", "YT-DLP / FFMPEG integration"].map((pl) => (
                    <span key={pl} className="text-[11px] font-mono py-1 px-3 rounded-lg bg-bg-custom border border-border-custom text-text-dim">
                      {pl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-6 bg-bg-card border border-border-custom rounded-2xl hover:border-border-hover/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 flex-row">
                  <div className="text-xl">🔧</div>
                  <h3 className="font-extrabold text-base sm:text-lg text-text-main">Alat Kerja & Hosting</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Git / GitHub", "VS Code", "Replit", "Netlify Hosting", "GitHub Pages"].map((pl) => (
                    <span key={pl} className="text-[11px] font-mono py-1 px-3 rounded-lg bg-bg-custom border border-border-custom text-text-dim">
                      {pl}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right progress indicator bars matching current scroll viewport */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
              {skills.map((sk) => (
                <div key={sk.id} className="w-full">
                  <div className="flex justify-between items-center mb-1.5 flex-row">
                    <span className="font-bold text-sm text-text-main">{sk.name}</span>
                    <span className="font-mono text-xs text-accent font-semibold">{sk.percentage}%</span>
                  </div>
                  <div className="h-[6px] rounded-full bg-accent/8 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sk.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 8. PROJECTS SECTION (KARYA KREATIF) */}
        <section id="projects" className="py-24 border-t border-border-custom/50">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-2 mb-2">
                <span>KARYA KREATIF</span>
                <span className="w-10 h-px bg-accent inline-block" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-4">
                Proyek Unggulan
              </h2>
              <p className="text-text-dim text-sm sm:text-base max-w-[550px] leading-relaxed">
                Proyek nyata yang saya kembangkan untuk memecahkan masalah belajar, promosi, dan manipulasi data.
              </p>
            </div>
            
            <a
              href="https://github.com/DeJavi08?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => addHoverListeners(true)}
              onMouseLeave={() => addHoverListeners(false)}
              className="px-5 py-2.5 bg-transparent border border-border-custom hover:border-accent hover:text-accent hover:bg-accent/5 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 w-fit self-start sm:self-auto shadow-md"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>Semua Repositori ↗</span>
            </a>
          </div>

          {/* Project card grids list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <a
                href={proj.liveUrl || proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={proj.id}
                onMouseEnter={() => addHoverListeners(true)}
                onMouseLeave={() => addHoverListeners(false)}
                className="group p-6 bg-bg-card border border-border-custom rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/5"
              >
                <div>
                  <div className="flex justify-between items-center mb-5 flex-row">
                    <div className="p-3 rounded-xl bg-accent/5 border border-border-custom text-accent group-hover:text-accent font-sans transition-colors duration-300">
                      {getProjectIcon(proj.emoji)}
                    </div>
                    <span className="text-[10px] font-bold text-accent bg-accent/5 border border-border-custom/15 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-text-main group-hover:text-accent transition-colors duration-250 mb-2 font-display">
                    {proj.name.replace(/^[🎓🧪🗣️⚡⚙️🌭📊📝🎵🎶]\s+/, "")}
                  </h3>

                  <p className="text-xs sm:text-xs.5 text-text-dim leading-relaxed mb-6 font-sans">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Language code tags & redirection labels */}
                  <div className="flex items-center gap-4 text-[11px] font-mono text-text-dim">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {proj.tags[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" />
                      {proj.liveUrl ? "Live Web" : "Repository"}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 10. EDUCATION DETAILED SECTION */}
        <section id="education" className="py-24 border-t border-border-custom/50">
          <div className="mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-2 mb-2">
              <span>PENDIDIKAN FORMAL</span>
              <span className="w-10 h-px bg-accent inline-block" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-4 font-display">
              Jejak Pembelajaran
            </h2>
            <p className="text-text-dim text-sm sm:text-base max-w-[550px] leading-relaxed font-sans">
              Riwayat pendidikan formal saya yang membentuk fondasi akademis, karakter kepemimpinan, dan kecintaan pada inovasi teknologi digital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {educationDetails.map((edu) => (
              <div 
                key={edu.id}
                className="p-8 bg-bg-card border border-border-custom rounded-3xl hover:border-accent transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                {/* Visual background glow decor */}
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-accent/3 group-hover:bg-accent/8 blur-xl transition-all duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                  <div className="md:max-w-xs w-full">
                    <span className="inline-block text-xs font-mono font-bold text-accent bg-accent/5 border border-border-custom px-3 py-1 rounded-full mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-text-main group-hover:text-accent transition-colors duration-300 font-display">
                      {edu.school}
                    </h3>
                  </div>

                  <div className="flex-1 md:border-l md:border-border-custom/30 md:pl-8">
                    <p className="text-sm text-text-main font-semibold leading-relaxed mb-6 font-sans">
                      {edu.description}
                    </p>

                    <div className="space-y-3.5">
                      <h4 className="text-xs font-mono font-bold uppercase text-accent tracking-widest">HIGHLIGHTS & PENCAPAIAN</h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {edu.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-text-dim leading-relaxed font-sans">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/8 border border-border-custom flex items-center justify-center text-accent mt-0.5">
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. ACHIEVEMENTS & EXPERIENCES SECTION */}
        <section id="achievements" className="py-24 border-t border-border-custom/50">
          <div className="mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-2 mb-2">
              <span>PRESTASI & PENGALAMAN LAIN</span>
              <span className="w-10 h-px bg-accent inline-block" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none mb-4 font-display">
              Achievements and Experiences
            </h2>
            <p className="text-text-dim text-sm sm:text-base max-w-[550px] leading-relaxed font-sans">
              Pengalaman kompetisi inovasi teknologi, pelatihan, dan penghargaan berskala nasional dan global yang telah saya lalui.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach) => (
              <div 
                key={ach.id}
                className="group p-6 bg-bg-card border border-border-custom rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden"
              >
                {/* Subtle visual gradient or icon watermark on bottom corner */}
                <div className="absolute -bottom-8 -right-8 text-accent/3 group-hover:text-accent/8 group-hover:scale-110 transition-all duration-500 -z-10">
                  {ach.title.includes("WYIIA") ? (
                    <Trophy className="w-24 h-24" />
                  ) : (
                    <Award className="w-24 h-24" />
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-start mb-5 flex-row">
                    <div className="p-3 rounded-xl bg-accent/5 border border-border-custom text-accent flex items-center justify-center">
                      {ach.title.includes("WYIIA") ? (
                        <Trophy className="w-5 h-5 text-amber-500 fill-amber-500/10" />
                      ) : (
                        <Award className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-accent bg-accent/8 border border-border-custom px-2.5 py-1 rounded-lg">
                      {ach.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-text-main group-hover:text-accent transition-colors duration-250 mb-1 leading-snug font-display">
                    {ach.title}
                  </h3>

                  {ach.organizerOrType && (
                    <p className="text-xs font-mono text-accent mb-4 font-semibold tracking-wider opacity-85">
                      {ach.organizerOrType}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-text-dim leading-relaxed mb-6 font-sans">
                    {ach.description}
                  </p>
                </div>

                {ach.certificateUrl && (
                  <div>
                    <a
                      href={ach.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => addHoverListeners(true)}
                      onMouseLeave={() => addHoverListeners(false)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent hover:text-text-main hover:bg-accent border border-accent/20 hover:border-accent bg-accent/5 px-4 py-2 rounded-xl transition-all duration-300 w-full justify-center shadow-xs cursor-pointer"
                    >
                      <span>Lihat Sertifikat ↗</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 10. CONTACT SECTION (HUBUNGI SAYA) */}
        <section id="contact" className="py-24 border-t border-border-custom/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Prompt Narrative */}
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-2 mb-3">
                <span>HUBUNGI SAYA</span>
                <span className="w-10 h-px bg-accent inline-block" />
              </span>
              <p className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-6">
                Punya proyek?<br />Mari <span className="text-accent underline decoration-accent/15 underline-offset-6">kita bangun</span><br />bersama-sama.
              </p>
              <p className="text-text-dim text-sm sm:text-base leading-relaxed">
                Terbuka untuk kolaborasi pembuatan web sekolah, proyek otomatisasi Python, atau sekadar bertukar ide. Saya merespons cukup cepat!
              </p>
            </div>

            {/* Right clean shortcut buttons cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* WhatsApp card */}
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => addHoverListeners(true)}
                onMouseLeave={() => addHoverListeners(false)}
                className="group flex items-center gap-5 p-5 bg-bg-card border border-border-custom rounded-2xl transition-all duration-300 hover:translate-x-1.5 hover:border-accent hover:bg-bg-card-hover"
              >
                <div className="p-3 bg-[#25d366]/10 text-[#25d366] rounded-xl border border-[#25d366]/25 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="block text-[9px] font-mono tracking-widest text-text-dim uppercase">WHATSAPP</span>
                  <strong className="text-sm font-black text-text-main group-hover:text-accent transition-colors duration-250">+62 812-3456-789</strong>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              {/* GitHub card */}
              <a
                href="https://github.com/DeJavi08"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => addHoverListeners(true)}
                onMouseLeave={() => addHoverListeners(false)}
                className="group flex items-center gap-5 p-5 bg-bg-card border border-border-custom rounded-2xl transition-all duration-300 hover:translate-x-1.5 hover:border-accent hover:bg-bg-card-hover"
              >
                <div className="p-3 bg-accent/5 text-accent rounded-xl border border-border-custom group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="block text-[9px] font-mono tracking-widest text-text-dim uppercase">GITHUB</span>
                  <strong className="text-sm font-black text-text-main group-hover:text-accent transition-colors duration-250">@DeJavi08</strong>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              {/* Instagram card */}
              <a
                href="https://www.instagram.com/dejavi08"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => addHoverListeners(true)}
                onMouseLeave={() => addHoverListeners(false)}
                className="group flex items-center gap-5 p-5 bg-bg-card border border-border-custom rounded-2xl transition-all duration-300 hover:translate-x-1.5 hover:border-accent hover:bg-bg-card-hover"
              >
                <div className="p-3 bg-[#e1306c]/10 text-[#e1306c] rounded-xl border border-[#e1306c]/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="block text-[9px] font-mono tracking-widest text-text-dim uppercase">INSTAGRAM</span>
                  <strong className="text-sm font-black text-text-main group-hover:text-accent transition-colors duration-250">@dejavi08</strong>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              {/* Relive Bike Tracking Card */}
              <a
                href="https://www.relive.cc/profile/dejavi08"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => addHoverListeners(true)}
                onMouseLeave={() => addHoverListeners(false)}
                className="group flex items-center gap-5 p-5 bg-bg-card border border-border-custom rounded-2xl transition-all duration-300 hover:translate-x-1.5 hover:border-accent hover:bg-bg-card-hover"
              >
                <div className="p-3 bg-[#ffd700]/10 text-[#ffd700] rounded-xl border border-[#ffd700]/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Bike className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="block text-[9px] font-mono tracking-widest text-text-dim uppercase">RELIVE PROFILE</span>
                  <strong className="text-sm font-black text-text-main group-hover:text-accent transition-colors duration-250">Aktivitas Sepeda</strong>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent group-hover:scale-115 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

            </div>

          </div>
        </section>

      </div>

      {/* 11. FOOTER PANEL */}
      <footer className="w-full py-12 border-t border-border-custom bg-bg-custom mt-12 text-center select-none z-30 relative transition-colors duration-400">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="text-xl font-black">
            Dejavi<span className="text-accent">.</span>
          </span>
          
          <span className="text-xs text-text-dim font-sans">
            © 2026 Javier Ahmad Arivery · Web Developer · Indonesia
          </span>
          
          <span className="text-xs text-text-dim font-sans flex items-center gap-1.5 justify-center">
            <span>Dibuat dengan semangat kreativitas digital</span>
            <Zap className="w-4 h-4 text-accent fill-accent/25 animate-pulse" />
          </span>
        </div>
      </footer>

    </div>
  );
}
