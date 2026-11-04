import { useState } from 'react';
import { 
  Sparkles, CheckCircle2, FileText, Calendar, 
  HelpCircle, Send, Phone, MessageSquare, ShieldCheck, ArrowRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SCHOOL_INFO, CURRENT_SESSION, CURRENT_YEAR } from '../data/schoolData';

export default function Admissions({ onOpenInquiry }) {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    gender: 'Male',
    grade: 'Playgroup (PG)',
    branch: 'gokulpura',
    program: 'Day Boarding (8 AM - 5:30 PM)',
    transport: 'Yes',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState('');

  const eligibility = [
    { grade: 'Playgroup (PG)', age: '2 Years 6 Months+' },
    { grade: 'Nursery', age: '3 Years+' },
    { grade: 'LKG (Junior KG)', age: '4 Years+' },
    { grade: 'UKG (Senior KG)', age: '5 Years+' },
    { grade: 'Class I', age: '6 Years+' },
    { grade: 'Classes II to VIII', age: 'Based on prior grade TC / Marksheet' },
    { grade: 'Class IX & X (Soon)', age: 'Waitlist open for Secondary wing' }
  ];

  const steps = [
    { num: '01', title: 'Submit Inquiry / Visit Campus', desc: 'Fill out our online inquiry form or walk into our Gokulpura or Kalwar Road campus to collect the prospectus.' },
    { num: '02', title: 'Informal Interaction', desc: 'A friendly, stress-free interaction with the child and parents to understand the child’s learning style and interests.' },
    { num: '03', title: 'Document Verification', desc: 'Submission of birth certificate, previous school transfer certificate (TC), immunization record, and address proof.' },
    { num: '04', title: 'Provisional Seat Confirmation', desc: 'Confirmation of admission in Day School or Day Boarding and allotment of student registration ID.' },
    { num: '05', title: 'Orientation & Welcome', desc: 'Orientation session for parents, distribution of curriculum kit, books, uniform measurements, and bus route confirmation.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedToken = 'SWS-ADM-' + Math.floor(10000 + Math.random() * 90000);
    setToken(generatedToken);
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Scholars World School Admissions!\n\n` +
      `I have submitted an admission application for Session ${CURRENT_SESSION}:\n` +
      `• App Token: ${token}\n` +
      `• Child: ${formData.childName} (Grade: ${formData.grade})\n` +
      `• DOB: ${formData.dob}\n` +
      `• Campus: ${formData.branch === 'gokulpura' ? 'Gokulpura' : 'Kalwar Road'}\n` +
      `• Mode: ${formData.program}\n` +
      `• Bus Transport: ${formData.transport}\n` +
      `• Father: ${formData.fatherName} | Phone: ${formData.phone}\n` +
      `• Area: ${formData.address}\n\n` +
      `Please let me know available slots for the campus visit.`
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
              Session {CURRENT_SESSION}
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Admissions Open for Playgroup to Class VIII
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Begin your child's educational journey with Scholars World School. Offering holistic CBSE education, certified educators, day boarding for working parents, and door-to-door GPS transport in Jaipur.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Admission Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Simple 5-Step Process"
          title="How to Enroll at Scholars World School"
          subtitle="Our admission process is transparent, welcoming, and designed to help every parent feel completely at home."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((st) => (
            <div key={st.num} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative">
              <span className="font-mono font-black text-3xl text-amber-500/30 block mb-2">
                {st.num}
              </span>
              <h3 className="font-heading font-bold text-navy-950 text-sm mb-1.5">
                {st.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Age Criteria Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-navy-950">
              Age Criteria (Session {CURRENT_SESSION})
            </h3>
            <p className="text-xs text-slate-500">
              As per national education guidelines (calculated as of March 31, {CURRENT_YEAR}):
            </p>

            <div className="divide-y divide-slate-100 text-xs">
              {eligibility.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <span className="font-bold text-navy-950">{item.grade}</span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">{item.age}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-navy-950">
              Mandatory Documents Checklist
            </h3>
            <p className="text-xs text-slate-600">
              Please carry self-attested photocopies of the following at the time of interaction:
            </p>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Original & Copy of Municipal Birth Certificate (for PG to Class I)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Original Transfer Certificate (TC) countersigned from previous school (Class II upwards)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Previous year's Report Card / Progress Sheet</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>4 recent passport size photographs of the child and 2 of each parent</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Copy of child's Aadhar Card and Parent's Address Proof</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Child's Immunization / Vaccination Record</span>
              </div>
            </div>
          </div>

        </div>

        {/* Official Admission Circular / Brochure Banner */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-28 sm:w-36 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="/images/school-brochure.jpg"
              alt="Official School Flyer"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-2 text-center md:text-left flex-1">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 uppercase">
              Official Printed Circular
            </span>
            <h4 className="font-heading font-extrabold text-lg text-navy-950">
              Scholars World School Admission Information Flyer
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verify all official branch details, Day Boarding timings, contact numbers, and student stage performance highlights from our official brochure.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/images/school-brochure.jpg"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <span>View Full Circular</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Online Admission Registration Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 sm:p-8 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-navy-950 inline-block mb-2">
              Online Registration
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Session {CURRENT_SESSION} Admission Application Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Fill in your details below to schedule an assessment and campus tour at Gokulpura or Kalwar Road.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-navy-950">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600">
                  Application Registration Token: <strong className="text-navy-950 font-mono text-base">{token}</strong>
                </p>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Our admissions office has received your registration for <strong className="text-slate-800">{formData.childName}</strong> for grade <strong className="text-slate-800">{formData.grade}</strong>. We will contact you at {formData.phone} shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Application Direct to Admissions WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                
                <h3 className="font-heading font-bold text-sm text-navy-950 border-b pb-2 text-slate-800">
                  1. Student Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Child's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Gender *
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                    >
                      <option value="Male">Boy / Male</option>
                      <option value="Female">Girl / Female</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Grade Applying For *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                    >
                      <option value="Playgroup (PG)">Playgroup (PG) - 2.5+ Yrs</option>
                      <option value="Nursery">Nursery - 3+ Yrs</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9 (Advance Waitlist)">Class 9 (Secondary Waitlist)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Preferred Jaipur Campus *
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                    >
                      <option value="gokulpura">Gokulpura Branch (Tilak Vihar)</option>
                      <option value="kalwar">Kalwar Road Branch (Sunder Vihar)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Day Boarding or Day School? *
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white font-semibold text-navy-950"
                    >
                      <option value="Day Boarding (8 AM - 5:30 PM)">
                        ⭐ Day Boarding (8 AM - 5:30 PM) [Meals + HW]
                      </option>
                      <option value="Day School (8 AM - 1:30 PM)">
                        Day School (8 AM - 1:30 PM)
                      </option>
                    </select>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-sm text-navy-950 border-b pb-2 pt-2 text-slate-800">
                  2. Parent & Contact Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      placeholder="e.g. Mr. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Mother's Name
                    </label>
                    <input
                      type="text"
                      value={formData.motherName}
                      onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                      placeholder="e.g. Dr. Sunita Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Primary Contact Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98290XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Bus Transport Facility Needed? *
                    </label>
                    <select
                      value={formData.transport}
                      onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                    >
                      <option value="Yes">Yes, GPS School Bus Needed</option>
                      <option value="No">No, Self Drop & Pickup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Residential Address & Locality in Jaipur *
                  </label>
                  <textarea
                    rows="2"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Flat 302, Tilak Vihar, Near Gokulpura Circle, Jaipur"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 hover:from-black hover:to-navy-900 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Submit Official Admission Registration (Session {CURRENT_SESSION})</span>
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

