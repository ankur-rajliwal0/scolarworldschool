import { useState } from 'react';
import { Phone, Mail, MapPin, Sparkles, X } from 'lucide-react';
import { SCHOOL_INFO, CURRENT_SESSION } from '../data/schoolData';

export default function TopBanner({ onOpenInquiry }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-navy-950 text-slate-200 text-xs border-b border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          
          {/* Left: Admission Flash */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              Admissions Open {CURRENT_SESSION}
            </span>
            <span className="hidden md:inline text-slate-300">
              Classes PG to VIII • Day Boarding Available • Upgrading to Class 10th Soon!
            </span>
          </div>

          {/* Right: Quick Contacts & Branch links */}
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${SCHOOL_INFO.phones[0].number}`} 
              className="flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{SCHOOL_INFO.phones[0].display}</span>
            </a>

            <div className="hidden lg:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Gokulpura & Kalwar Road, Jaipur</span>
            </div>

            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-semibold text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors shadow-xs"
            >
              Quick Inquiry
            </button>

            <button 
              onClick={() => setVisible(false)}
              className="text-slate-400 hover:text-white p-0.5 ml-1 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

