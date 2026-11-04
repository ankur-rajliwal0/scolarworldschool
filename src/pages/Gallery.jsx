import { useState } from 'react';
import { 
  Sparkles, Filter, Eye, X, Image as ImageIcon, 
  ArrowRight, Heart, Share2, Award, Download, CheckCircle2 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { GALLERY_ITEMS, SCHOOL_INFO, REAL_CAMPUS_ASSETS } from '../data/schoolData';

export default function Gallery({ onOpenInquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Real Campus', 'Campus', 'Day Boarding', 'Facilities', 'Events', 'Pre-Primary', 'Sports'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : selectedCategory === 'Real Campus'
      ? GALLERY_ITEMS.filter((item) => item.isReal)
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
              Campus Moments
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Life & Celebrations at Scholars World School
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore authentic photographs of our Jaipur campus—our colorful activity arenas, peace dove murals, landscaped walkways, modern building facade, and vibrant student stage celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Real Campus Photos Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                Verified Campus Photography
              </span>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950 mt-1">
                Real Photos of Scholars World School, Jaipur
              </h2>
            </div>
            <button
              onClick={() => setSelectedCategory('Real Campus')}
              className="text-xs font-bold text-navy-950 bg-white hover:bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-all"
            >
              Filter Real Campus Only ({GALLERY_ITEMS.filter(i => i.isReal).length})
            </button>
          </div>
          <p className="text-xs text-slate-600">
            Click on any photo below to inspect full-screen with high clarity.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-navy-950 text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/90 text-navy-950 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-amber-400 backdrop-blur-xs">
                    {item.category}
                  </span>
                  {item.isReal && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
                      ★ Actual Campus
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-navy-950 text-base group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Scholars World Jaipur</span>
                  <span className="text-amber-700 font-semibold group-hover:underline flex items-center gap-1">
                    <span>Enlarge</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex-1 bg-black overflow-hidden flex items-center justify-center max-h-[65vh]">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 inline-block">
                  {activeImage.category}
                </span>
                {activeImage.isReal && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block">
                    ✓ Official Campus Photograph
                  </span>
                )}
              </div>
              <h3 className="font-heading font-extrabold text-xl text-navy-950">
                {activeImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Campus Visit Invitation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-slate-200">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-950">
            Witness Our Vibrant Campus in Person
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Photographs capture just a fraction of our joyful atmosphere. Come visit our Gokulpura or Kalwar Road campus during working hours to meet our faculty and explore the activity spaces.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="px-6 py-3 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs rounded-xl shadow transition-colors"
            >
              Book a Guided Campus Visit
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phones[0].number}`}
              className="px-5 py-3 bg-white hover:bg-slate-50 text-navy-950 font-bold text-xs rounded-xl border border-slate-300 shadow-xs transition-colors"
            >
              Call Admissions: {SCHOOL_INFO.phones[0].display}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
