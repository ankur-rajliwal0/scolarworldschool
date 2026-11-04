import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  MessageSquare, Compass, ShieldCheck, Sparkles 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SCHOOL_INFO, CURRENT_SESSION } from '../data/schoolData';

export default function Contact({ onOpenInquiry }) {
  const [selectedBranch, setSelectedBranch] = useState('gokulpura');
  const [msgData, setMsgData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'gokulpura',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Scholars World School!\n\n` +
      `My name is ${msgData.name} (${msgData.phone}).\n` +
      `Query for Campus: ${msgData.branch === 'gokulpura' ? 'Gokulpura' : 'Kalwar Road'}\n` +
      `Message: ${msgData.message}\n\n` +
      `Please get back to me with admission details.`
    );
    window.open(`https://wa.me/919024467525?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950">
              Get In Touch
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Visit Our Campuses in Jaipur
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We warmly invite you and your child to experience Scholars World School in person. Reach out via phone, email, WhatsApp, or drop by our Gokulpura or Kalwar Road campus.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Campus Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Two Convenient Campuses"
          title="Campuses & Office Addresses"
          subtitle="Both campuses operate full academic wings and day boarding facilities with dedicated administrative desks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SCHOOL_INFO.branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                    {branch.isMain ? 'Main Campus' : 'Extension Campus'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Jaipur, Rajasthan</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-navy-950 mt-3">
                  {branch.name}
                </h3>

                {/* Campus Photo */}
                <div className="mt-3 rounded-2xl overflow-hidden aspect-16/9 relative group">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent flex items-end p-3 text-white">
                    <span className="text-[11px] font-bold text-amber-300">
                      {branch.name} • Jaipur
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">Address:</strong>
                      <span className="text-slate-600">{branch.address}</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">Landmark: {branch.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">Phone Helpline:</strong>
                      <a href={`tel:${branch.phone}`} className="text-amber-700 font-bold hover:underline">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">Visiting & School Timings:</strong>
                      <span className="text-slate-600">{branch.timings}</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">Office Open: Monday to Saturday (8:00 AM – 3:00 PM)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-navy-950 uppercase tracking-wider block mb-2">
                    Key Campus Amenities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {branch.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${branch.phone}`}
                  className="px-4 py-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {branch.phone}</span>
                </a>
                <button
                  onClick={() => onOpenInquiry()}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs rounded-xl transition-colors"
                >
                  Inquire at this Branch
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Central Contact Details & Message Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Helplines Info Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-8 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Direct Contact Lines
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                Always Here to Assist Parents
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Feel free to call our admissions coordinator for fee inquiries, bus route confirmations, or day boarding schedules.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {SCHOOL_INFO.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.number}`}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors flex items-center gap-3 block"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      {phone.label}
                    </span>
                    <strong className="text-sm font-bold text-white block mt-0.5">
                      {phone.display}
                    </strong>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Official Email Addresses:
              </span>
              {SCHOOL_INFO.emails.map((email, idx) => (
                <a
                  key={idx}
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{email}</span>
                </a>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-200">
              <p className="font-bold flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Instant WhatsApp Support Available
              </p>
              <p className="text-[11px] text-emerald-300/80 mt-1">
                Chat directly with our admissions counselor anytime between 8 AM and 7 PM.
              </p>
            </div>
          </div>

          {/* Inquiry / Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
            <h3 className="font-heading font-extrabold text-2xl text-navy-950">
              Send an Instant Message or Query
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Our campus administration team will respond within 24 working hours.
            </p>

            {sent ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-navy-950">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-800">{msgData.name}</strong>. We have received your query for the {msgData.branch === 'gokulpura' ? 'Gokulpura' : 'Kalwar Road'} campus and will call you on {msgData.phone}.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Continue on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200"
                  >
                    Send Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={msgData.name}
                      onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                      placeholder="e.g. Vikram Singh"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={msgData.phone}
                      onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={msgData.email}
                      onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Campus of Interest *
                    </label>
                    <select
                      value={msgData.branch}
                      onChange={(e) => setMsgData({ ...msgData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                    >
                      <option value="gokulpura">Gokulpura Campus (Tilak Vihar)</option>
                      <option value="kalwar">Kalwar Road Campus (Sunder Vihar)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Question / Inquiry *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    placeholder={`Ask about admissions for Session ${CURRENT_SESSION}, day boarding timings, bus transport fees, or school visit timings...`}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Message to Admissions Office</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

