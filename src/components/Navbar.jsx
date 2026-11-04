import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, ChevronRight, Award, Compass, 
  BookOpen, Clock, Building2, Image as ImageIcon, PhoneCall, Sparkles, MapPin 
} from 'lucide-react';
import { SCHOOL_INFO, CURRENT_SESSION } from '../data/schoolData';

export default function Navbar({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { 
      label: 'Day Boarding', 
      path: '/day-boarding',
      badge: 'Parent Special',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
    },
    { 
      label: 'Admissions', 
      path: '/admissions',
      badge: CURRENT_SESSION,
      badgeColor: 'bg-amber-400 text-navy-950 font-black border-amber-300'
    },
    { label: 'Campus & Facilities', path: '/facilities' },
    { label: 'Photo Gallery', path: '/gallery' },
    { label: 'Campuses & Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white z-40">
      
      {/* TIER 1: BRAND LOGO & ACTION BAR (SPACIOUS, NO CRAMPING) */}
      <div className="border-b border-slate-200/80 bg-white py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* School Crest & Identity */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-2.5 shadow-md flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300 border border-amber-500/30 flex-shrink-0">
                <svg viewBox="0 0 40 40" className="w-full h-full fill-current">
                  <path d="M20 3L4 11L20 19L36 11L20 3Z" fill="url(#goldGradNav)" />
                  <path d="M9 16.5V26.5C9 31.5 20 37 20 37C20 37 31 31.5 31 26.5V16.5L20 22L9 16.5Z" fill="currentColor" opacity="0.9" />
                  <path d="M20 25.5L14 22.5V26.5C14 29.5 20 33 20 33C20 33 26 29.5 26 26.5V22.5L20 25.5Z" fill="#ffffff" opacity="0.8" />
                  <defs>
                    <linearGradient id="goldGradNav" x1="4" y1="3" x2="36" y2="19" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F59E0B" />
                      <stop offset="1" stopColor="#D97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-black text-xl sm:text-2xl lg:text-[26px] tracking-tight text-navy-950 leading-none group-hover:text-amber-700 transition-colors">
                  SCHOLARS WORLD SCHOOL
                </span>
                <span className="text-xs sm:text-sm font-serif italic text-amber-700 tracking-wide mt-1 flex flex-wrap items-center gap-1.5">
                  <span>The Perfect Beginning</span>
                  <span className="not-italic text-slate-300">•</span>
                  <span className="not-italic font-sans text-slate-500 text-[11px] font-semibold uppercase tracking-wider">
                    Jaipur (Gokulpura & Kalwar Road)
                  </span>
                </span>
              </div>
            </Link>

            {/* Desktop Header Info & Primary CTAs */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              
              {/* Branch Indicator */}
              <div className="hidden xl:flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <div className="leading-tight">
                  <span className="font-bold text-navy-950 block">2 Campuses in Jaipur</span>
                  <span className="text-[11px] text-slate-500">Gokulpura & Kalwar Road</span>
                </div>
              </div>

              {/* Call Hotline */}
              <a
                href={`tel:${SCHOOL_INFO.phones[0].number}`}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 transition-colors border border-slate-200/80 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-navy-950 transition-colors">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Admission Helpline
                  </span>
                  <span className="text-xs font-bold text-navy-950 block">
                    {SCHOOL_INFO.phones[0].display}
                  </span>
                </div>
              </a>

              {/* Primary Apply Button With Dynamically Computed Academic Session */}
              <button
                onClick={() => onOpenInquiry()}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-navy-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-amber-300 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-navy-950 group-hover:rotate-12 transition-transform" />
                <span className="whitespace-nowrap">Apply for {CURRENT_SESSION}</span>
              </button>

            </div>

            {/* Mobile Actions Header */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenInquiry()}
                className="px-3 py-1.5 text-xs font-bold text-navy-950 bg-amber-400 rounded-lg shadow-xs flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Apply</span>
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* TIER 2: DEDICATED NAVIGATION BAR (FULL WIDTH, NO CRAMPING, SINGLE LINE TEXT) */}
      <nav className={`hidden lg:block bg-navy-950 text-white transition-all duration-200 border-b border-navy-800 ${
        isScrolled ? 'sticky top-0 z-50 shadow-xl' : 'relative'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Desktop Navigation Links (Properly Spaced, whitespace-nowrap) */}
            <div className="flex items-center space-x-1 xl:space-x-2 py-0">
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3.5 py-3 text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap group ${
                      active
                        ? 'text-amber-400 bg-white/10 font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border shadow-2xs whitespace-nowrap ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}

                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side of Nav Bar: Quick Action */}
            <div className="flex items-center gap-3 py-1">
              <button
                onClick={() => onOpenInquiry()}
                className="px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-amber-300 bg-white/10 hover:bg-white/15 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Day Boarding (8 AM - 5:30 PM)</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER MENU */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950 text-white border-t border-navy-800 px-4 pt-4 pb-6 shadow-2xl animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-amber-400 text-navy-950 font-bold'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${active ? 'text-navy-950' : 'text-slate-400'}`} />
                </Link>
              );
            })}
          </div>

          {/* Quick Helplines in Mobile Menu */}
          <div className="mt-5 pt-4 border-t border-navy-800 space-y-3">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Admission Helpline (Session {CURRENT_SESSION})
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${SCHOOL_INFO.phones[0].number}`}
                className="flex items-center gap-2.5 text-xs font-bold text-white bg-white/10 p-3 rounded-xl border border-white/10"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{SCHOOL_INFO.phones[0].display} (Gokulpura Campus)</span>
              </a>
              <a
                href={`tel:${SCHOOL_INFO.phones[1].number}`}
                className="flex items-center gap-2.5 text-xs font-bold text-white bg-white/10 p-3 rounded-xl border border-white/10"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{SCHOOL_INFO.phones[1].display} (Kalwar Road Campus)</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenInquiry();
              }}
              className="w-full mt-3 py-3 text-center text-xs font-black text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow-md uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register for Session {CURRENT_SESSION}</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
