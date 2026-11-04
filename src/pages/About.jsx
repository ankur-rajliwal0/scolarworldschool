import { Link } from 'react-router-dom';
import { 
  Award, Heart, Compass, CheckCircle2, ShieldCheck, 
  Users, BookOpen, GraduationCap, MapPin, ArrowRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SCHOOL_INFO, CORE_PILLARS, CURRENT_SESSION } from '../data/schoolData';

export default function About({ onOpenInquiry }) {
  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
              About Scholars World School
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Shaping Young Minds With Warmth, Discipline & Values
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded on the conviction that early childhood and primary schooling form the cornerstone of lifelong success, Scholars World School is Jaipur's distinguished Co-educational English Medium institution offering modern CBSE-aligned education alongside a supportive Day Boarding ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
              <Compass className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-navy-950">
              Our Vision: "The Perfect Beginning"
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be Jaipur's most trusted sanctuary of early, primary, and middle school learning—where every child's curiosity is honored, self-worth is reinforced, and academic foundations are laid with joyful rigor. We envision every scholar emerging with character, analytical acumen, and ethical leadership.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Nurturing emotional safety alongside intellectual growth</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Instilling pride in Indian culture, heritage, and civic values</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Equipping children with communication & digital fluency</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-900 flex items-center justify-center font-bold text-xl">
              <Heart className="w-6 h-6 text-navy-800" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-navy-950">
              Our Mission
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower students from Playgroup to Class VIII (and progressively through Class 10th) with holistic education combining CBSE scholastic standards, innovative activity stations, physical fitness, stage arts, and practical life skills.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero compromise on teacher quality & empathetic mentoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Comprehensive Day Boarding to alleviate parental stress</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Safe, monitored transit and hygienic, green campus grounds</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Leadership / Principal Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-100 to-amber-50/50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 group">
                <img
                  src="/images/building-facade.jpg"
                  alt="Scholars World School Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-navy-950">
                      Gokulpura Campus
                    </span>
                    <p className="text-xs font-bold mt-1 text-white">
                      Tilak Vihar, Jaipur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Message from Leadership
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-950">
                "Every child is endowed with a unique spark waiting to be ignited."
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "At Scholars World School, we do not believe in mass-producing test scores. We cultivate real thinkers, articulate speakers, and kind human beings. Whether your child starts with us in Playgroup or joins us in Middle School, they receive our undivided attention, warmth, and high pedagogical standards."
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                "Our Day Boarding initiative is designed specifically for today's dynamic families. By completing homework, having hot healthy meals, and participating in sports right under our roof, children can go home to their parents and enjoy meaningful bonding rather than battles over textbooks."
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-5 py-2.5 bg-navy-950 text-white font-bold text-xs rounded-xl hover:bg-navy-900 transition-colors"
                >
                  Book an Interactive Session With Leadership
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Campus Life & Spaces Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Campus Infrastructure"
          title="Designed for Joyful & Safe Learning"
          subtitle="Explore the carefully created learning spaces where our scholars spend their foundational schooling years."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/campus-walkway.jpg"
                alt="Green Walkway"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                Green Landscaped Entrance
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Lush potted plants and clean paving creating a soothing, pollution-free entry for students.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/interior-atrium.jpg"
                alt="Atrium & Murals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                Motivational Murals & Atrium
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Sunlit stairways decorated with peace doves and inspiring art, celebrating creativity at every corner.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/activity-corridor.jpg"
                alt="Covered Play Area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-heading font-bold text-navy-950 text-sm">
                Sheltered Activity Wing
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Spacious indoor arena with cartoon murals and seating for day-boarding activities, chess, and clubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trained Faculty Pillar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Faculty Excellence"
          title="Trained, Certified & Passionate Educators"
          subtitle="A school is only as strong as its teachers. Our educators undergo rigorous ongoing pedagogical training in CBSE methodologies and child psychology."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Child-Centric Pedagogy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Teachers act as facilitators rather than rigid lecturers. Every concept in science, mathematics, and linguistics is introduced through interactive models and inquiry questions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Mother-Teacher Kindergarten Concept
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For Playgroup, Nursery, LKG, and UKG, our educators provide maternal care, ensuring little ones feel safe, loved, and encouraged at all times.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Regular Teacher Development
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Faculty members regularly attend workshops on CBSE continuous evaluation, digital classroom tools, classroom management, and inclusive education.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-center text-white space-y-4">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Experience the Scholars World Difference
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a visit to either our Gokulpura or Kalwar Road campus. Observe our classrooms in action and speak with our teachers.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              Apply for Session {CURRENT_SESSION}
            </button>
            <Link
              to="/contact"
              className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
            >
              Find Campus Locations
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

