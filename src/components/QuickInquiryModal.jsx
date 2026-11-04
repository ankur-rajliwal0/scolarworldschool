import { useState } from 'react';
import { X, CheckCircle, Send, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, CURRENT_SESSION } from '../data/schoolData';

export default function QuickInquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Playgroup (PG)',
    branch: 'gokulpura',
    programType: 'Day Boarding (8 AM - 5:30 PM)',
    transport: 'Yes',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = 'SWS-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Scholars World School!\n\n` +
      `I have submitted an admission inquiry for Session ${CURRENT_SESSION}:\n` +
      `• Ref ID: ${refId}\n` +
      `• Student: ${formData.studentName}\n` +
      `• Grade: ${formData.grade}\n` +
      `• Preferred Branch: ${formData.branch === 'gokulpura' ? 'Gokulpura' : 'Kalwar Road'}\n` +
      `• Program: ${formData.programType}\n` +
      `• Transport Needed: ${formData.transport}\n` +
      `• Parent Contact: ${formData.parentName} (${formData.phone})\n\n` +
      `Please let me know the next steps for campus visit and fee details.`
    );
    window.open(`https://wa.me/919024467525?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Admission Inquiry {CURRENT_SESSION}
              </h3>
              <p className="text-xs text-slate-300">
                Playgroup to Class VIII • Day Boarding & Day School
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-navy-950">
                  Inquiry Registered Successfully!
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Thank you for your interest in Scholars World School.
                </p>
                <div className="inline-block mt-3 px-4 py-2 bg-amber-50 rounded-lg border border-amber-200 text-xs font-mono font-bold text-amber-900">
                  Application Token: <span className="text-sm text-navy-950">{refId}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Our admissions coordinator will call you on <strong className="text-slate-800">{formData.phone}</strong> within 24 working hours to arrange an informal interaction & campus visit.
              </p>

              {/* Instant WhatsApp Connect Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Child's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800 bg-white"
                  >
                    <option value="Playgroup (PG)">Playgroup (PG) - Age 2.5+</option>
                    <option value="Nursery">Nursery - Age 3+</option>
                    <option value="LKG">LKG (Lower Kindergarten)</option>
                    <option value="UKG">UKG (Upper Kindergarten)</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9 (Advance Waitlist)">Class 9 (Advance Waitlist - Coming Soon)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Preferred Campus / Branch *
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800 bg-white"
                  >
                    <option value="gokulpura">Gokulpura Branch (Tilak Vihar)</option>
                    <option value="kalwar">Kalwar Road Branch (Sunder Vihar)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Program Facility *
                  </label>
                  <select
                    value={formData.programType}
                    onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800 bg-white"
                  >
                    <option value="Day Boarding (8 AM - 5:30 PM)">
                      ⭐ Day Boarding (8 AM - 5:30 PM) [Meals + Homework]
                    </option>
                    <option value="Day School (8 AM - 1:30 PM)">
                      Day School (8 AM - 1:30 PM)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Contact Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. parent@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    School Bus Transport Required?
                  </label>
                  <select
                    value={formData.transport}
                    onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800 bg-white"
                  >
                    <option value="Yes">Yes, GPS Bus Transport needed</option>
                    <option value="No">No, Self Drop / Pick-up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Residential Area / Any Specific Inquiries
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Tilak Vihar / Looking for Day Boarding homework support"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-800"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 hover:from-black hover:to-navy-900 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Admission Inquiry (Session {CURRENT_SESSION})</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                🔒 Your details are 100% confidential. Or call directly: <a href="tel:9024467525" className="text-amber-700 font-bold hover:underline">+91 90244 67525</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

