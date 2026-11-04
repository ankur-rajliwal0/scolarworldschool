import { useState } from 'react';
import { 
  BookOpen, Sparkles, CheckCircle2, Award, 
  BrainCircuit, Layers, Clock, ArrowRight, Laptop, FileText 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

export default function Academics({ onOpenInquiry }) {
  const [selectedWing, setSelectedWing] = useState('pre-primary');

  const wingDetails = {
    'pre-primary': {
      title: 'Foundational Stage (Playgroup to UKG)',
      grades: 'Playgroup, Nursery, LKG, UKG',
      focus: 'Play-based sensory discovery, phonics, gross/fine motor control, and bilingual social interaction.',
      subjects: ['English Phonics & Rhymes', 'Number Fun & Spatial Concepts', 'Hindi Varnamala & Kavita', 'Sensory Exploration & Nature Play', 'Art, Craft & Clay Modeling'],
      method: 'Montessori-inspired play stations, puppet shows, storytelling circles, musical drills, and gentle mother-teacher nurturing.'
    },
    'primary': {
      title: 'Primary Wing (Classes I to V)',
      grades: 'Class I to Class V',
      focus: 'Developing mathematical clarity, reading comprehension, scientific curiosity, and team camaraderie.',
      subjects: ['English Literature & Grammar', 'Mathematics & Mental Arithmetic', 'Environmental Studies (EVS) & General Science', 'Hindi & Introduction to Sanskrit', 'Computer Literacy & Coding Basics', 'Moral Education & General Knowledge'],
      method: 'Inquiry-based learning, weekly lab explorations, project scrapbooks, role-play presentations, and sports drills.'
    },
    'middle': {
      title: 'Middle School Wing (Classes VI to VIII)',
      grades: 'Class VI to Class VIII',
      focus: 'Analytical problem solving, scientific experiments, linguistic mastery, and board examination preparedness.',
      subjects: ['Integrated Science (Physics, Chemistry, Biology)', 'Mathematics & Practical Geometry', 'Social Studies (History, Civics, Geography)', 'Languages (English, Hindi, Sanskrit)', 'Computer Science & Artificial Intelligence Basics', 'Art, Music & Physical Education'],
      method: 'Dedicated Physics/Chemistry/Biology experimentation, coding in computer labs, inter-house debates, Olympiad drills, and leadership councils.'
    },
    'secondary': {
      title: 'Upcoming Secondary Wing (Classes IX & X)',
      grades: 'Class IX & X (Under Active Expansion)',
      focus: 'CBSE Board Examination readiness, high-caliber science practicals, career counseling, and scholastic excellence.',
      subjects: ['English Language & Literature', 'Mathematics (Standard / Basic)', 'Science with Comprehensive Labs', 'Social Sciences', 'Hindi / Sanskrit Course A/B', 'Information Technology (Skill Subject)'],
      method: 'Structured test series, chapter-wise analytical question banks, doubt clinics, and personalized mentoring for board toppers.'
    }
  };

  const currentWing = wingDetails[selectedWing];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
              Scholastic Excellence
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              CBSE-Aligned Curriculum With Experiential Learning
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Scholars World School, academic learning transcends rote memorization. We inspire children to ask "Why" and discover "How", cultivating confident scholars equipped for future challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Wings Interactive Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curriculum Structure"
          title="Explore Our Academic Wings"
          subtitle="Click through each stage to view pedagogical focus, subject allocations, and learning methodologies."
        />

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {ACADEMIC_PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setSelectedWing(prog.id)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                selectedWing === prog.id
                  ? 'bg-navy-950 text-white border-navy-950 shadow-md scale-102'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                selectedWing === prog.id ? 'text-amber-400' : 'text-amber-700'
              }`}>
                {prog.gradeRange}
              </span>
              <span className="font-heading font-bold text-sm sm:text-base block mt-1">
                {prog.title.split(' ')[0]} Wing
              </span>
              {prog.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-black bg-purple-500 text-white">
                  {prog.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Wing Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg max-w-5xl mx-auto">
          <div className="space-y-6">
            
            <div className="border-b border-slate-100 pb-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {currentWing.grades}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-950 mt-1">
                  {currentWing.title}
                </h3>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs rounded-xl transition-colors shadow-xs"
              >
                Inquire for this Wing
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-heading font-bold text-navy-950 text-base mb-1">
                    Pedagogical Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentWing.focus}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-navy-950 text-base mb-1">
                    Classroom Methodology
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentWing.method}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <h4 className="font-heading font-bold text-navy-950 text-sm mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  Key Subjects & Core Areas
                </h4>
                <div className="space-y-2">
                  {currentWing.subjects.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/50 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Upgrading to Class 10th Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-950 via-navy-950 to-purple-950 rounded-3xl p-8 sm:p-12 text-white border border-purple-800/50 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Future Expansion Roadmap
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
              "Upgrading to Class 10th SOON!"
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              In response to overwhelming requests from our parent community, Scholars World School is currently expanding its infrastructure, setting up high-grade physics, chemistry, and biology labs, and preparing for Secondary Board affiliation. Parents enrolled in our middle wing enjoy priority continuation.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry()}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs rounded-xl transition-colors"
              >
                Join Secondary Waitlist & Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Scholastic & Life Skills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Holistic Enrichment"
          title="Beyond the Textbooks: Co-Scholastic Excellence"
          subtitle="A balanced education nurtures the mind, body, and spirit through arts, physical fitness, logic puzzles, and civic engagement."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Performing Arts & Music
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Classical dance, vocal music, keyboard instruments, and theatrical skits developing rhythm, poise, and self-confidence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <BrainCircuit className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Vedic Maths & Abacus
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mental arithmetic tricks and speed calculations that conquer fear of numbers and boost mathematical confidence early.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Martial Arts & Skating
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Taekwondo self-defense and roller skating coaching building physical agility, balance, stamina, and self-discipline.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <Laptop className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-heading font-bold text-navy-950 text-base">
              Coding & Digital Skills
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Block coding, keyboard mastery, safe internet protocols, and multimedia presentation skills for the digital age.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

