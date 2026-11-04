import { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO, CURRENT_SESSION } from '../data/schoolData';

export default function FloatingActions({ onOpenInquiry }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Scholars World School, Jaipur!\nI would like to inquire about Admission for Session ${CURRENT_SESSION} (PG to Class VIII / Day Boarding). Please share details.`
    );
    window.open(`https://wa.me/919024467525?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white text-navy-950 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-all hover:scale-105"
        >
          <ArrowUp className="w-5 h-5 text-slate-700" />
        </button>
      )}

      {/* Call Hotline floating pill */}
      <a
        href={`tel:${SCHOOL_INFO.phones[0].number}`}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-navy-950 text-white shadow-xl hover:bg-navy-900 border border-navy-800 transition-all hover:scale-105 group"
        title="Call Helpline"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <Phone className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline text-xs font-semibold">
          90244 67525
        </span>
      </a>

      {/* WhatsApp Floating button */}
      <button
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 group font-bold text-xs"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp Admission Desk</span>
      </button>

    </div>
  );
}

