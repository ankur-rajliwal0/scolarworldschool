import { 
  Bus, ShieldCheck, Laptop, BookOpen, Utensils, 
  Sparkles, CheckCircle2, Award, HeartHandshake, Eye, ArrowRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SCHOOL_INFO, REAL_CAMPUS_ASSETS, CURRENT_SESSION } from '../data/schoolData';

export default function Facilities({ onOpenInquiry }) {
  const facilitiesList = [
    {
      icon: Bus,
      title: 'Safe GPS-Tracked Transport Fleet',
      badge: 'Flyer Highlight',
      summary: 'Dedicated fleet of modern school buses covering Gokulpura, Kalwar Road, Jhotwara, Tilak Vihar, Sunder Vihar, and surrounding Jaipur localities.',
      features: [
        'Real-time GPS tracking accessible to school authorities',
        'Speed governors adhering to strict school bus safety norms',
        'Verified female attendants on every trip for child comfort',
        'First-aid boxes, emergency communication, and fire safety'
      ]
    },
    {
      icon: Laptop,
      title: 'Smart Classrooms & Audio-Visual Media',
      badge: 'Modern Pedagogy',
      summary: 'Interactive digital boards, educational animations, and multimedia presentations making abstract scientific and arithmetic concepts come alive.',
      features: [
        'High-definition smart screens with curated educational modules',
        'Ergonomically designed child-friendly furniture',
        'Abundant natural sunlight and cross-ventilation',
        'Acoustically treated quiet learning environments'
      ]
    },
    {
      icon: Utensils,
      title: 'Day Boarding Dining & Activity Arena',
      badge: 'Parent Special',
      summary: 'A spotless dining and indoor recreation arena where day boarders enjoy hot vegetarian meals and engage in supervised creative hobbies.',
      features: [
        'Covered activity area with colorful cartoon murals',
        'Dietitian-approved weekly nutrition menu',
        'Table manners and community dining values taught gently',
        'Zero junk food policy; pure nutritious ingredients'
      ]
    },
    {
      icon: BookOpen,
      title: 'Library & Reading Sanctuary',
      badge: 'Knowledge Hub',
      summary: 'A vibrant collection of pictorial encyclopedias, classic Indian folklore, bedtime storybooks, science journals, and graded reader series.',
      features: [
        'Comfortable bean bags and reading corners for young minds',
        'Graded reading programs to nurture early fluency',
        'Reference volumes for middle school projects and Olympiads',
        'Weekly dedicated library and storytelling periods'
      ]
    },
    {
      icon: Award,
      title: 'Sports Grounds, Skating Rink & Martial Arts',
      badge: 'Physical Stamina',
      summary: 'Comprehensive sports infrastructure fostering athletic agility, coordination, mental resilience, and lifelong sportsmanship.',
      features: [
        'Smooth roller skating practice rink with safety gear',
        'Dedicated Taekwondo / Karate coaching arena',
        'Badminton courts, table tennis & indoor chess stations',
        'Cricket practice nets and athletic running tracks'
      ]
    },
    {
      icon: ShieldCheck,
      title: '24/7 CCTV & Campus Safety Infrastructure',
      badge: 'Zero Compromise',
      summary: 'Comprehensive multi-tier safety architecture ensuring every square foot of both campuses is monitored and secure.',
      features: [
        'High-resolution CCTV surveillance across corridors, gates, and playfields',
        'Strict gate visitor passes and authorized parent pickup cards',
        'Periodic fire safety drills and first-aid medical rooms',
        'Background-verified teaching and support staff'
      ]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
              Infrastructure & Safety
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              World-Class Facilities Built For Safety, Joy & Discovery
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the environments where your child grows: from safe GPS-tracked school buses and smart audiovisual classrooms to hygienic RO water stations and covered activity arenas across our Jaipur campuses.
            </p>
          </div>
        </div>
      </section>

      {/* REAL CAMPUS INFRASTRUCTURE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Authentic Photo Tour"
          title="See Our Real Campus Facilities"
          subtitle="Explore actual photographs of Scholars World School Jaipur—our modern facade, landscaped walkways, sunlit atriums, and clean amenities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.facade.src}
                alt="School Building Facade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-amber-400 text-navy-950 shadow">
                Modern Facade
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-950 text-base">
                Multi-Story School Building
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Featuring bright geometric window frames, secure boundary fencing with educational wall art, and official CBSE signboards.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.walkway.src}
                alt="Landscaped Walkway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-amber-400 text-navy-950 shadow">
                Green Campus
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-950 text-base">
                Landscaped Walkway & Reception
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Paved entryway with hexagonal tiles and lush potted plants providing a fresh, welcoming arrival for children and parents.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.activityCorridor.src}
                alt="Covered Activity Arena"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-amber-400 text-navy-950 shadow">
                Activity Arena
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-950 text-base">
                Covered Activity Corridor
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Spacious sheltered play arena with cheerful Winnie-the-Pooh murals, yellow garden fencing, and benches for creative clubs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.atrium.src}
                alt="Interior Atrium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-amber-400 text-navy-950 shadow">
                Inspirational Art
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-950 text-base">
                Skylit Staircase & Peace Dove Murals
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Bright, secure multi-level atrium decorated with hand-painted world peace doves and "Come to school daily" motivational themes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.waterFacility.src}
                alt="RO Drinking Water & Safety"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-amber-400 text-navy-950 shadow">
                Pure RO Water
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-950 text-base">
                Chilled RO Water & Fire Safety
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Stainless steel commercial RO water dispenser providing clean, mineral-balanced hydration, adjacent to fire-safety installations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={REAL_CAMPUS_ASSETS.brochure.src}
                alt="School Brochure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-amber-400 text-navy-950 shadow">
                Official Circular
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-navy-950 text-base">
                Admission Circular (Session {CURRENT_SESSION})
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                The official prospectus detailing Day Boarding schedules, Gokulpura & Kalwar branches, and annual stage functions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Campus Amenities"
          title="Designed for Total Well-Being"
          subtitle="Every facility at Scholars World School is meticulously maintained to provide a wholesome learning atmosphere."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {fac.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-navy-950 text-xl leading-snug">
                    {fac.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {fac.summary}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {fac.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onOpenInquiry()}
                    className="text-xs font-bold text-navy-950 hover:text-amber-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transport Route Focus (From Flyer) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 text-white border border-navy-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Transport Facility Available
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                Extensive Jaipur Bus Route Network
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              GPS & Female Conductor on All Routes
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our reliable bus network connects families across Jaipur. Pick-up and drop-off points are arranged close to residential doorsteps with pre-alert SMS/call notifications for parents.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-semibold text-slate-200">
              Gokulpura & Tilak Vihar
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-semibold text-slate-200">
              Kalwar Road & Sunder Vihar
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-semibold text-slate-200">
              Jhotwara & Hathoj
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center font-semibold text-slate-200">
              Niwaru Road & Vaishali West
            </div>
          </div>

          <div className="pt-2 text-center sm:text-left">
            <button
              onClick={() => onOpenInquiry()}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs rounded-xl transition-colors"
            >
              Check Bus Route for Your Locality
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
