import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, 
  ExternalLink, ArrowRight, Heart, Sparkles 
} from 'lucide-react';
import { SCHOOL_INFO, CURRENT_SESSION } from '../data/schoolData';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-navy-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-black bg-navy-950 text-amber-300 mb-1">
              SESSION {CURRENT_SESSION}
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
              Give Your Child "The Perfect Beginning" Today
            </h3>
            <p className="text-sm font-medium text-navy-900/90 mt-0.5">
              Day School & Full Day Boarding Available for Working Parents (PG to Class VIII)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="px-5 py-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phones[0].number}`}
              className="px-4 py-2.5 bg-white/90 hover:bg-white text-navy-950 font-bold text-sm rounded-lg shadow-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: School Identity & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-2 shadow-md flex items-center justify-center text-navy-950 font-black text-xl border border-amber-300">
                SWS
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-lg text-white tracking-tight">
                  SCHOLARS WORLD SCHOOL
                </h4>
                <p className="text-xs font-serif italic text-amber-400">
                  The Perfect Beginning • Jaipur
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              A premier Co-educational English Medium Day & Day Boarding institution delivering progressive CBSE-aligned education from Playgroup to Class VIII, with upcoming expansion to Class 10th.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>CBSE Curriculum Framework & NEP 2020 Aligned</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Day Boarding Program with Meals till 5:30 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Official School Contacts
              </p>
              <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                <a href={`mailto:${SCHOOL_INFO.emails[0]}`} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{SCHOOL_INFO.emails[0]}</span>
                </a>
                <a href={`mailto:${SCHOOL_INFO.emails[1]}`} className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{SCHOOL_INFO.emails[1]}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Jaipur Branches (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white border-b border-navy-800 pb-2">
              Our Jaipur Campuses
            </h4>

            {SCHOOL_INFO.branches.map((branch) => (
              <div key={branch.id} className="p-3.5 rounded-xl bg-navy-900/60 border border-navy-800 space-y-2 hover:border-navy-700 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    {branch.name}
                  </span>
                  {branch.isMain && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      Main Branch
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {branch.address}
                </p>
                <div className="pt-1 flex items-center justify-between text-xs">
                  <a href={`tel:${branch.phone}`} className="text-amber-400 font-semibold hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {branch.phone}
                  </a>
                  <Link to="/contact" className="text-slate-400 hover:text-white underline text-[11px]">
                    Directions →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Col 3: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white border-b border-navy-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-slate-300 hover:text-amber-400 transition-colors">
                  CBSE Curriculum
                </Link>
              </li>
              <li>
                <Link to="/day-boarding" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Day Boarding Facility
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Campus & Transport
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Annual Day & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Locate Campuses
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs & Upgrades (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white border-b border-navy-800 pb-2">
              Class Levels
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between">
                <span>Playgroup & Nursery</span>
                <span className="text-[10px] text-amber-400">Age 2.5+</span>
              </li>
              <li className="flex items-center justify-between">
                <span>LKG & UKG</span>
                <span className="text-[10px] text-amber-400">Kindergarten</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Classes I – V</span>
                <span className="text-[10px] text-slate-400">Primary</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Classes VI – VIII</span>
                <span className="text-[10px] text-slate-400">Middle Wing</span>
              </li>
              <li className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-semibold mt-2">
                ⭐ Upgrading to Class 10th Soon!
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-200">Scholars World School</strong>. All Rights Reserved. Co-educational English Medium Day & Day Boarding School.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Gokulpura & Kalwar Road Branches, Jaipur</span>
            <span className="text-slate-600">•</span>
            <a href="https://scholarsworldschool.in" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
              scholarsworldschool.in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

