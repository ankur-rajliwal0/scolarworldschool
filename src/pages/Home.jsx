import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle2, Shield, Award, 
  Clock, Bus, GraduationCap, BookOpen, Users, MapPin, 
  Phone, Star, ChevronRight, HeartHandshake, Utensils, 
  HelpCircle, Compass, Play, Calendar, Download, Eye
} from 'lucide-react';
import { 
  SCHOOL_INFO, CORE_PILLARS, ACADEMIC_PROGRAMS, 
  DAY_BOARDING_SCHEDULE, TESTIMONIALS, FAQS, GALLERY_ITEMS, REAL_CAMPUS_ASSETS, CURRENT_SESSION 
} from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

export default function Home({ onOpenInquiry }) {
  const [activeBranch, setActiveBranch] = useState('gokulpura');
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-10 pb-20 sm:pt-16 sm:pb-28">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  School Admission {CURRENT_SESSION} Open
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/15">
                  Classes: PG to VIII
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  ★ Upgrading to Class 10th Soon!
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white">
                The Perfect Beginning for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Curious Minds</span> & Confident Leaders
              </h1>

              {/* Tagline & Subtext */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A prestigious <strong className="text-white font-semibold">Co-educational English Medium Day & Day Boarding School</strong> in Jaipur. Providing progressive CBSE education, certified caring faculty, and worry-free care for working parents.
              </p>

              {/* Flyer Highlight Banner: Working Parents */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-500/30 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-navy-950 font-black flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-amber-300">
                      Attention Working Parents:
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5 leading-normal">
                      Now, No More Worries about Your Kids! We are Providing You a Complete <strong className="text-white underline decoration-amber-400">Day Boarding Facility</strong> with hot lunch, homework completion, and sports till 5:30 PM.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={() => onOpenInquiry()}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-navy-950 font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Apply for Admission {CURRENT_SESSION}</span>
                  <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/day-boarding"
                  className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Day Boarding Guide</span>
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-4 py-3.5 text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>View Campuses</span>
                </Link>
              </div>

              {/* Contact numbers pill */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Direct Helplines:</span>
                {SCHOOL_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.number}`}
                    className="hover:text-amber-300 transition-colors text-slate-200 font-medium"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>

            </div>

            {/* Right Card: REAL SCHOOL BUILDING PHOTO SHOWCASE (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl text-slate-100 space-y-4">
                
                {/* Real School Photo with Badge */}
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 aspect-4/3 group">
                  <img
                    src={REAL_CAMPUS_ASSETS.facade.src}
                    alt="Scholars World School Jaipur Main Building"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  
                  {/* Floating badge over photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-400 text-navy-950 shadow-md">
                      Official Campus
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-navy-950/80 text-white backdrop-blur-xs">
                      Jaipur
                    </span>
                  </div>

                  {/* Bottom caption over photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h4 className="font-heading font-extrabold text-white text-base leading-tight">
                      Scholars World School
                    </h4>
                    <p className="text-[11px] text-amber-300 font-serif italic">
                      The Perfect Beginning • Tilak Vihar, Gokulpura
                    </p>
                  </div>
                </div>

                {/* Core Feature Checklist from Flyer */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-navy-950/60 border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-xs block leading-tight">Trained Faculty</span>
                      <span className="text-[10px] text-slate-300">100% Certified</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-navy-950/60 border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-xs block leading-tight">CBSE Curriculum</span>
                      <span className="text-[10px] text-slate-300">NEP 2020 Aligned</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-navy-950/60 border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-xs block leading-tight">GPS Transport</span>
                      <span className="text-[10px] text-slate-300">Across Jaipur</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-navy-950/60 border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-xs block leading-tight">Day Boarding</span>
                      <span className="text-[10px] text-slate-300">Meals & HW Support</span>
                    </div>
                  </div>
                </div>

                {/* Fast Action in Card */}
                <div>
                  <button
                    onClick={() => onOpenInquiry()}
                    className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-navy-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Callback / Campus Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHT METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CORE_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-navy-950 transition-colors">
                {idx === 0 && <GraduationCap className="w-5 h-5" />}
                {idx === 1 && <BookOpen className="w-5 h-5" />}
                {idx === 2 && <Clock className="w-5 h-5" />}
                {idx === 3 && <Bus className="w-5 h-5" />}
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-1">
                {pillar.highlight}
              </span>
              <h3 className="font-heading font-bold text-navy-950 text-base leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DEDICATED WORKING PARENTS SPOTLIGHT WITH REAL ACTIVITY CORRIDOR PHOTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-navy-800">
          
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
                Special Care Program
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                "Attention Working Parents: Now, No More Worries About Your Kids!"
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Balancing professional commitments while ensuring your child finishes schoolwork, eats wholesome meals, and stays away from screen addiction is tough. Our comprehensive <strong className="text-amber-300">Day Boarding Program</strong> transforms your child's afternoons into structured joy.
              </p>

              {/* 4 Pillars of Day Boarding */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-white">Wholesome Hot Lunch</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Nutritious, hygienic vegetarian meals & evening snacks prepared fresh daily.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-white">Supervised Homework</h3>
                    <p className="text-xs text-slate-300 mt-0.5">All school assignments completed with teacher guidance. Zero study tears at home!</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-white">Sports & Stage Hobbies</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Martial arts, skating, dance, music, robotics and outdoor games.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Bus className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-white">Safe 5:30 PM Dispersal</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Convenient pickup or doorstep drop via GPS-tracked school buses.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/day-boarding"
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Daily Timetable & Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
                >
                  Inquire Day Boarding Seats
                </button>
              </div>

            </div>

            {/* Right: REAL ACTIVITY ARENA PHOTO & SCHEDULE */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl aspect-16/10 group">
                <img
                  src={REAL_CAMPUS_ASSETS.activityCorridor.src}
                  alt="Scholars World School Covered Activity & Day-Boarding Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-navy-950">
                    Day Boarding Arena
                  </span>
                  <p className="text-xs font-bold text-white mt-1">
                    Spacious Covered Play Area With Colorful Murals
                  </p>
                </div>
              </div>

              {/* Schedule snapshot */}
              <div className="bg-navy-950/90 rounded-xl p-4 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Afternoon Routine (1:30 PM – 5:30 PM)
                  </span>
                  <span className="text-[10px] text-slate-300">Mon – Sat</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex justify-between">
                    <span className="font-mono text-amber-400">1:30 PM</span>
                    <span>Fresh Wash-up & Warm Vegetarian Lunch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-amber-400">2:30 PM</span>
                    <span>Supervised Homework Completion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-amber-400">4:20 PM</span>
                    <span>Sports, Skating & Hobby Clubs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* REAL CAMPUS PHOTO TOUR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Campus Showcase"
          title="A Look Inside Scholars World School"
          subtitle="Explore the bright, secure, and thoughtfully designed facilities where our scholars learn, create, and thrive every day."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.facade.src}
                alt="School Facade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-navy-950/80 text-amber-400">
                School Facade
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                Modern Academic Building
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Multi-story infrastructure with secure boundary, child-friendly facade, and rooftop signage.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.walkway.src}
                alt="Campus Walkway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-navy-950/80 text-amber-400">
                Entry & Greenery
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                Landscaped Walkway
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Paved entrance bordered by lush potted plants leading to the main administration reception.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.atrium.src}
                alt="Interior Atrium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-navy-950/80 text-amber-400">
                Inspirational Art
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                Sunlit Atrium & Murals
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Vibrant wall paintings of white peace doves and positive learning messages motivating children.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.waterFacility.src}
                alt="Health & Safety"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-navy-950/80 text-amber-400">
                Hygiene & Safety
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                RO Pure Water & Safety
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                Certified stainless steel RO water cooler, fire extinguishers, and strict hygiene maintenance.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-6">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-amber-700 transition-colors"
          >
            <span>View Full Photo & Event Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ACADEMIC SPECTRUM: PG TO VIII & UPGRADING TO 10TH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Educational Spectrum"
          title="Nurturing Every Stage of Childhood Learning"
          subtitle="From early sensory exploration in Playgroup to analytical mastery in Middle School, our curriculum inspires intellectual independence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              {prog.badge && (
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-purple-600 text-white text-[10px] font-black uppercase rounded-full shadow-sm">
                  {prog.badge}
                </span>
              )}

              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  {prog.age}
                </span>
                <h3 className="font-heading font-extrabold text-navy-950 text-lg mt-1 group-hover:text-amber-700 transition-colors">
                  {prog.title}
                </h3>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                  {prog.gradeRange}
                </span>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {prog.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-navy-950 uppercase tracking-wide block">
                    Key Highlights:
                  </span>
                  {prog.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3">
                <Link
                  to="/academics"
                  className="text-xs font-bold text-navy-900 group-hover:text-amber-700 flex items-center gap-1 transition-colors"
                >
                  <span>Explore Curriculum</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL JAIPUR CAMPUSES (GOKULPURA & KALWAR ROAD) */}
      <section className="bg-slate-100 py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Two Strategic Campuses in Jaipur"
            title="Convenient Learning Centers Across Jaipur"
            subtitle="Both branches feature safe, technologically equipped classrooms, dedicated day boarding spaces, and comprehensive bus routes."
          />

          {/* Branch Switcher Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-xl bg-white shadow-sm border border-slate-200">
              {SCHOOL_INFO.branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBranch(b.id)}
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    activeBranch === b.id
                      ? 'bg-navy-950 text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-slate-50'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Branch Display Card */}
          {SCHOOL_INFO.branches.filter(b => b.id === activeBranch).map((branch) => (
            <div key={branch.id} className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900">
                      Jaipur Branch
                    </span>
                    {branch.isMain && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        Primary Campus
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-950">
                    {branch.name}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Exact Address: </strong>
                        <span>{branch.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Campus Timings: </strong>
                        <span>{branch.timings}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Helpline Desk: </strong>
                        <a href={`tel:${branch.phone}`} className="text-navy-900 font-bold hover:underline">
                          {branch.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Branch Features:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {branch.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenInquiry()}
                      className="px-5 py-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs rounded-xl shadow transition-colors"
                    >
                      Apply at this Branch
                    </button>
                    <Link
                      to="/contact"
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
                    >
                      Get Directions & Contact
                    </Link>
                  </div>
                </div>

                {/* Right Visual: Actual branch photo */}
                <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 relative group aspect-4/3">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                    <div>
                      <span className="text-[10px] font-bold text-amber-400 uppercase">
                        Campus Preview
                      </span>
                      <p className="text-xs font-bold leading-tight">
                        {branch.name}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARENT TESTIMONIALS */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Parent Testimonials"
            title="Trusted by Hundreds of Jaipur Families"
            subtitle="Hear real experiences from parents of our Gokulpura and Kalwar Road campuses regarding academics, faculty care, and day boarding."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-navy-900/80 rounded-2xl p-6 border border-navy-800 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm">
                      {t.name}
                    </h3>
                    <p className="text-[11px] text-amber-400 mt-0.5">
                      {t.relation}
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-semibold">
                    {t.branch}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION FAQS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Parent Questions Answered"
          title="Frequently Asked Questions"
          subtitle={`Everything you need to know about Session ${CURRENT_SESSION} admissions, day boarding, transport, and curriculum.`}
        />

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full px-5 py-4 text-left font-heading font-bold text-sm sm:text-base text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform ${
                    isOpen ? 'bg-amber-400 text-navy-950 rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center bg-amber-50 rounded-2xl p-6 border border-amber-200">
          <h4 className="font-heading font-bold text-navy-950 text-base">
            Have a specific question about your child's grade?
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            Our admissions counselors are happy to walk you through fee structures, bus routes, and day boarding slots.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${SCHOOL_INFO.phones[0].number}`}
              className="px-4 py-2 bg-navy-950 text-white font-bold text-xs rounded-lg hover:bg-navy-900 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Admissions: {SCHOOL_INFO.phones[0].display}</span>
            </a>
            <button
              onClick={() => onOpenInquiry()}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs rounded-lg transition-colors"
            >
              Fill Online Inquiry
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
