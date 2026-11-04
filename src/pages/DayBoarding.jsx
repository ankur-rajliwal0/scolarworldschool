import { 
  Clock, Utensils, BookOpen, ShieldCheck, Heart, 
  Sparkles, CheckCircle2, ArrowRight, Phone, Coffee, Users, Eye 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { DAY_BOARDING_SCHEDULE, SCHOOL_INFO, REAL_CAMPUS_ASSETS, CURRENT_SESSION } from '../data/schoolData';

export default function DayBoarding({ onOpenInquiry }) {
  const comparison = [
    {
      feature: 'Afternoon Supervision',
      regular: 'Left with domestic help or unsupervised at home',
      dayBoarding: 'Professional educator supervision in safe campus environment'
    },
    {
      feature: 'Lunch & Nutrition',
      regular: 'Cold morning tiffin or delayed meals',
      dayBoarding: 'Fresh, warm, hygienic multi-course vegetarian lunch + evening snacks'
    },
    {
      feature: 'Homework & Doubts',
      regular: 'Evening arguments, tears, and expensive private tuition',
      dayBoarding: '100% completed under dedicated subject teachers with doubts resolved'
    },
    {
      feature: 'Screen Time vs Activities',
      regular: 'Excessive television, mobile gaming, and YouTube',
      dayBoarding: 'Structured skating, karate, performing arts, chess, and outdoor sports'
    },
    {
      feature: 'Evening Family Time',
      regular: 'Parents stressed teaching homework after exhausted workday',
      dayBoarding: 'Relaxed, joyful family bonding; child arrives happy & work-free'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
                For Working Parents
              </span>
              <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
                "Now, No More Worries About Your Kids!"
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our comprehensive <strong className="text-amber-300">Day Boarding Facility</strong> in Jaipur provides caring, productive after-school support till 5:30 PM. Warm home-style meals, 100% homework completion with teachers, and active sports in our covered activity arenas.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
                >
                  <span>Register for Day Boarding (Session {CURRENT_SESSION})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.phones[0].number}`}
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Helpline: {SCHOOL_INFO.phones[0].display}</span>
                </a>
              </div>
            </div>

            {/* Right: Actual photo of the day boarding activity corridor */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-4/3 group">
                <img
                  src={REAL_CAMPUS_ASSETS.activityCorridor.src}
                  alt="Actual Day Boarding Activity Space at Scholars World School"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-navy-950 uppercase">
                      Real Campus Space
                    </span>
                    <p className="text-xs font-bold mt-1 text-white">
                      Covered Activity & Play Arena with Cartoon Murals
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5 Pillars of Day Boarding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Day Boarding"
          title="Designed to Bring Harmony to Working Families"
          subtitle="Dual-career parents in Jaipur no longer have to juggle tuition tutors, cooks, and transit anxieties."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Utensils className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-lg">
              Fresh, Wholesome Nutrition
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every afternoon begins with fresh, warm, balanced vegetarian meals planned by nutritionists. Followed by evening milk, fresh juices, and energy snacks before dispersal.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-lg">
              Zero Homework at Home
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Qualified subject teachers sit with students in small study groups, resolving conceptual doubts, ensuring neat handwriting, and finishing daily diary tasks completely.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-lg">
              Screen-Free Hobbies & Sports
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instead of watching reels or video games, children practice skating, taekwondo martial arts, classical/folk dance, keyboard music, and chess with specialized coaches.
            </p>
          </div>
        </div>
      </section>

      {/* Real Photos of Day Boarding Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <SectionHeader
            badge="Actual Campus Facilities"
            title="Clean, Safe & Engaging Day-Boarding Environment"
            subtitle="Take a look at the actual activity spaces, drinking water infrastructure, and secure halls your child will enjoy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={REAL_CAMPUS_ASSETS.activityCorridor.src}
                  alt="Activity Corridor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Covered Activity Arena
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Vibrant cartoon murals, yellow garden fencing, and safe shaded flooring for children's indoor sports and games.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={REAL_CAMPUS_ASSETS.waterFacility.src}
                  alt="RO Drinking Water Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Chilled RO Drinking Water
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Stainless steel RO water dispenser ensuring 100% pure, hygienic hydration with fire safety compliance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={REAL_CAMPUS_ASSETS.atrium.src}
                  alt="Interior Atrium"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-navy-950 text-sm">
                  Sunlit Study Atrium
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Spacious hallways with natural light and motivational world-learning murals for focused afternoon reading.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Daily Routine Timetable */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Daily Structure"
          title="A Typical Afternoon in Day Boarding"
          subtitle="Carefully calibrated to balance nourishment, academic focus, play, and emotional relaxation."
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          <div className="divide-y divide-slate-100">
            {DAY_BOARDING_SCHEDULE.map((slot, index) => (
              <div key={index} className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-slate-50/80 rounded-xl px-3 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    {index + 1}
                  </div>
                  <div>
                    <span className="font-heading font-bold text-navy-950 text-sm sm:text-base block">
                      {slot.activity}
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {slot.desc}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono font-bold text-xs border border-slate-200">
                    {slot.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Day Boarding vs Regular Commute */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Side-by-Side Comparison"
          title="Why Working Parents Choose Scholars World Day Boarding"
          subtitle="Compare typical household challenges with our integrated solution."
        />

        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy-950 text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-heading font-bold">Aspect</th>
                  <th className="p-4 sm:p-5 font-heading font-bold text-slate-300">Traditional Day School + Tuitions</th>
                  <th className="p-4 sm:p-5 font-heading font-bold text-amber-400 bg-navy-900">SWS Day Boarding Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="p-4 sm:p-5 font-bold text-navy-950">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-600">{row.regular}</td>
                    <td className="p-4 sm:p-5 font-semibold text-emerald-800 bg-amber-500/5">{row.dayBoarding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-3xl p-8 sm:p-12 text-navy-950 text-center shadow-xl space-y-4">
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-navy-950">
            Limited Day Boarding Seats for Session {CURRENT_SESSION}
          </h2>
          <p className="text-sm font-medium text-navy-950/90 max-w-xl mx-auto">
            To ensure personalized teacher attention and optimal care, day boarding seats are strictly capped per grade. Apply early to reserve a seat at Gokulpura or Kalwar Road.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="px-6 py-3 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
            >
              Reserve Day Boarding Seat Now
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phones[0].number}`}
              className="px-5 py-3 bg-white hover:bg-slate-100 text-navy-950 font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Speak With Day Boarding In-charge</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
