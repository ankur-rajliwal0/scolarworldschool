// Dynamically compute the academic session so it updates automatically every year (e.g., 2026–27, 2027–28, etc.)
export function getDynamicAcademicSession() {
  const now = new Date();
  const year = now.getFullYear();
  const nextYearShort = String(year + 1).slice(-2);
  return `${year}–${nextYearShort}`;
}

export const CURRENT_SESSION = getDynamicAcademicSession();
export const CURRENT_YEAR = new Date().getFullYear();
export const NEXT_YEAR = new Date().getFullYear() + 1;

export const SCHOOL_INFO = {
  name: "Scholars World School",
  tagline: "The Perfect Beginning",
  affiliation: "Co-educational English Medium School • CBSE Curriculum Framework",
  type: "Day School & Day Boarding",
  currentSession: CURRENT_SESSION,
  classesOffered: "Playgroup (PG) to Class VIII",
  expansionNote: "Upgrading to Class 10th Soon!",
  emails: [
    "Info@Scholarsworldschool.in",
    "scholarsworldschool1@gmail.com"
  ],
  phones: [
    { number: "9024467525", display: "+91 90244 67525", label: "Admissions Helpline" },
    { number: "9799491151", display: "+91 97994 91151", label: "Admin & Transport" },
    { number: "8619350695", display: "+91 86193 50695", label: "Parent Desk & Inquiries" }
  ],
  branches: [
    {
      id: "gokulpura",
      name: "Gokulpura Branch",
      isMain: true,
      address: "42, 12-B, Tilak Vihar, Gokulpura, Jaipur, Rajasthan - 302012",
      landmark: "Near Tilak Vihar Main Circle",
      timings: "Day School: 8:00 AM - 1:30 PM | Day Boarding: 8:00 AM - 5:30 PM",
      phone: "+91 90244 67525",
      email: "gokulpura@scholarsworldschool.in",
      image: "/images/building-facade.jpg",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.7!2d75.72!3d26.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU3JzM2LjAiTiA3NcKwNDMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
      features: [
        "Playgroup to Class VIII Wing",
        "Modern Day-Boarding Facility with Activity Arena",
        "Activity & Creative Arts Studio",
        "Transport Fleet Coverage Across West Jaipur"
      ]
    },
    {
      id: "kalwar",
      name: "Kalwar Road Branch",
      isMain: false,
      address: "85-86 A, Sunder Vihar, Takiya Ki Chawki, Kalwar Road, Jaipur, Rajasthan",
      landmark: "Takiya Ki Chawki, Kalwar Road",
      timings: "Day School: 8:00 AM - 1:30 PM | Day Boarding: 8:00 AM - 5:30 PM",
      phone: "+91 97994 91151",
      email: "kalwar@scholarsworldschool.in",
      image: "/images/campus-walkway.jpg",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.9!2d75.68!3d26.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU4JzQ4LjAiTiA3NcKwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
      features: [
        "Spacious Green Campus with Sports Grounds",
        "Science, Math & Robotics Discovery Labs",
        "Special Kindergarten Play Arena",
        "Dedicated Safe Bus Fleet with Female Escorts"
      ]
    }
  ]
};

export const REAL_CAMPUS_ASSETS = {
  facade: {
    src: "/images/building-facade.jpg",
    title: "Scholars World School Main Building",
    desc: "Modern multi-story academic campus with geometric facade, CBSE signboard, and vibrant murals."
  },
  walkway: {
    src: "/images/campus-walkway.jpg",
    title: "Welcoming Campus Walkway & Garden",
    desc: "Hexagonal paved entryway lined with green foliage leading to the glass administrative and academic reception."
  },
  atrium: {
    src: "/images/interior-atrium.jpg",
    title: "Multi-level Atrium & Learning Murals",
    desc: "Bright, airy staircase with hand-painted world peace dove murals and inspirational school art."
  },
  activityCorridor: {
    src: "/images/activity-corridor.jpg",
    title: "Covered Day-Boarding & Activity Arena",
    desc: "Spacious activity wing with Winnie-the-Pooh murals, yellow garden fencing, and safe indoor play zones."
  },
  waterFacility: {
    src: "/images/water-facility.jpg",
    title: "RO Purified Water Station & Fire Safety",
    desc: "Stainless steel chilled RO water dispenser ensuring 100% clean drinking water and certified safety standards."
  },
  brochure: {
    src: "/images/school-brochure.jpg",
    title: `Official School Admission Brochure (Session ${CURRENT_SESSION})`,
    desc: "Authentic circular outlining Day Boarding, PG to Class VIII admissions, contact hotlines, and cultural celebrations."
  }
};

export const CORE_PILLARS = [
  {
    title: "Trained & Empathetic Faculty",
    description: "Carefully vetted, certified educators trained in child psychology and modern pedagogy to nurture every student's innate potential.",
    icon: "GraduationCap",
    highlight: "100% Certified Teachers"
  },
  {
    title: "CBSE Curriculum Excellence",
    description: "A future-ready syllabus aligned with NEP 2020 guidelines, balancing scholastic rigor with experiential project learning.",
    icon: "BookOpen",
    highlight: "NEP 2020 Aligned"
  },
  {
    title: "Day Boarding for Working Parents",
    description: "Complete peace of mind for dual-career parents: wholesome meals, supervised homework completion, sports and hobby clubs.",
    icon: "Clock",
    highlight: "Till 5:30 PM With Meals"
  },
  {
    title: "Safe Transport Facility",
    description: "GPS-tracked, speed-regulated school buses with verified drivers, CCTV, speed limiters, and female conductors across Jaipur routes.",
    icon: "Bus",
    highlight: "GPS & Live Tracking"
  }
];

export const ACADEMIC_PROGRAMS = [
  {
    id: "pre-primary",
    gradeRange: "Playgroup, Nursery, LKG, UKG",
    title: "Foundational Years (Early Childhood)",
    age: "2.5 to 5.5 Years",
    summary: "A joyful, sensory-rich environment fostering motor skills, phonetic awareness, curiosity, and emotional confidence through play.",
    image: "/images/activity-corridor.jpg",
    color: "from-amber-500/10 to-amber-500/5",
    accentColor: "border-amber-400 text-amber-700",
    keyHighlights: [
      "Montessori-inspired activity stations",
      "Phonics & bilingual language immersion",
      "Fine & gross motor skill development",
      "Potty training support & tender care"
    ]
  },
  {
    id: "primary",
    gradeRange: "Class I to Class V",
    title: "Primary School Wing",
    age: "6 to 10 Years",
    summary: "Cultivating inquisitive young thinkers with strong mathematical foundations, environmental awareness, and expressive communication.",
    image: "/images/interior-atrium.jpg",
    color: "from-blue-600/10 to-blue-600/5",
    accentColor: "border-blue-500 text-blue-700",
    keyHighlights: [
      "Conceptual Mathematics & Mental Arithmetic",
      "Interactive Science experiments",
      "Hindi, English & basic Sanskrit fluency",
      "Performing arts, music, dance & public speaking"
    ]
  },
  {
    id: "middle",
    gradeRange: "Class VI to Class VIII",
    title: "Middle School Wing",
    age: "11 to 14 Years",
    summary: "Stepping into rigorous analytical thinking, independent study habits, scientific labs, and holistic sportsmanship.",
    image: "/images/campus-walkway.jpg",
    color: "from-emerald-600/10 to-emerald-600/5",
    accentColor: "border-emerald-500 text-emerald-700",
    keyHighlights: [
      "Hands-on Physics, Chemistry & Biology projects",
      "Coding, Artificial Intelligence fundamentals & ICT",
      "Leadership councils & inter-house competitions",
      "Bridge curriculum preparing for Secondary Boards"
    ]
  },
  {
    id: "secondary",
    gradeRange: "Class IX & X (Launching Shortly)",
    title: "Secondary Board Preparation",
    age: "14 to 16 Years",
    summary: "Under active infrastructural development with high-tech science laboratories and advanced faculty recruitment for Board exams.",
    image: "/images/building-facade.jpg",
    badge: "Upgrading Soon",
    color: "from-purple-600/10 to-purple-600/5",
    accentColor: "border-purple-500 text-purple-700",
    keyHighlights: [
      "Rigorous CBSE Board syllabus alignment",
      "Specialized Olympiad & NTSE foundation batches",
      "Career counseling & aptitude mapping",
      "Remedial coaching for board exam excellence"
    ]
  }
];

export const DAY_BOARDING_SCHEDULE = [
  { time: "01:30 PM - 02:00 PM", activity: "Fresh Wash-Up & Warm Nutritious Lunch", desc: "Wholesome, home-style vegetarian meal prepared under strict hygienic supervision." },
  { time: "02:00 PM - 02:30 PM", activity: "Mindfulness & Relaxation Break", desc: "Quiet time, light reading, storytelling, or power nap for younger scholars." },
  { time: "02:30 PM - 04:00 PM", activity: "Supervised Homework & Academic Doubts", desc: "Experienced teachers guide homework completion so evenings at home are 100% stress-free." },
  { time: "04:00 PM - 04:20 PM", activity: "Evening Milk / Juice & Nutritious Snacks", desc: "Fresh fruits, healthy biscuits, sprouts, or energy snack with clean RO water." },
  { time: "04:20 PM - 05:15 PM", activity: "Sports, Performing Arts & Creative Clubs", desc: "Indoor arena activities, skating, dance, music, robotics, chess, and outdoor recreation." },
  { time: "05:15 PM - 05:30 PM", activity: "Pack Up & Safe Dispersal / Bus Departure", desc: "Students board their GPS buses or are handed over to authorized parents." }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Sunita Sharma & Rajesh Sharma",
    relation: "Parents of Ananya (Class IV) & Aarav (Class I)",
    branch: "Gokulpura Branch",
    quote: "Both my husband and I are working professionals in medical and banking sectors. The Day Boarding facility at Scholars World School has been a lifesaver. When our children return home at 5:30 PM, their homework is already completed with teacher guidance, they have had healthy meals, and we get to enjoy joyful family time without tears over study books!"
  },
  {
    name: "Vikram Singh Rathore",
    relation: "Father of Divyansh (Class VI)",
    branch: "Kalwar Road Branch",
    quote: "The discipline, stage exposure, and confidence Scholars World School has instilled in Divyansh is commendable. His public speaking during the Annual Day function blew us away. The faculty is approachable, caring, and dedicated to each child's all-around growth."
  },
  {
    name: "Pooja & Amit Khandelwal",
    relation: "Parents of Riddhima (Nursery)",
    branch: "Gokulpura Branch",
    quote: "Leaving our 3-year-old was scary at first, but the kindergarten teachers at Scholars World School are so loving and motherly. Riddhima runs into school smiling every morning. The campus is spotlessly clean and very safe."
  }
];

export const FAQS = [
  {
    q: "What are the school operating hours for Day Scholars vs Day Boarding?",
    a: "Standard Day School runs from 8:00 AM to 1:30 PM. The Day Boarding program extends till 5:30 PM, which includes hot fresh lunch, supervised homework completion, evening snacks, and structured sports/extracurricular activities."
  },
  {
    q: "Which curriculum is followed at Scholars World School?",
    a: "We strictly follow the Central Board of Secondary Education (CBSE) curriculum framework, enriched with activity-based learning and experiential projects aligned with NEP 2020 guidelines."
  },
  {
    q: "How does the Day Boarding benefit working parents?",
    a: "Working parents no longer need to worry about after-school baby sitters, private tuition, or meal management. Children finish all homework under qualified subject teachers, receive healthy meals, learn sports/dance, and return home relaxed."
  },
  {
    q: "What transport routes are available across Jaipur?",
    a: "We operate a comprehensive fleet covering Gokulpura, Kalwar Road, Jhotwara, Hathoj, Tilak Vihar, Sunder Vihar, Niwaru Road, Vaishali West, and surrounding localities. Every vehicle is GPS-tracked with speed regulators and female attendants."
  },
  {
    q: "When will admissions for Class 9 and 10 commence?",
    a: "Our infrastructure and lab upgradation for Secondary Board classes (9th and 10th) is in progress, and enrollment will be announced shortly for the upcoming academic phase."
  },
  {
    q: `What is the admission procedure for Session ${CURRENT_SESSION}?`,
    a: "Admissions involve submitting an online or offline inquiry, an informal interaction with the child & parents, verification of documents (birth certificate, immunization card, transfer certificate), and completing the registration fee."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Scholars World School Campus Facade",
    category: "Campus",
    caption: "Our modern multi-story school building in Jaipur, featuring vibrant child-friendly architecture and clear CBSE accreditation.",
    image: "/images/building-facade.jpg",
    isReal: true
  },
  {
    id: 2,
    title: "Landscaped Entrance Walkway & Reception",
    category: "Campus",
    caption: "A welcoming, green entrance walkway lined with plants and secure access for students and visiting parents.",
    image: "/images/campus-walkway.jpg",
    isReal: true
  },
  {
    id: 3,
    title: "Covered Day-Boarding & Activity Arena",
    category: "Day Boarding",
    caption: "Spacious, shaded indoor play and activity area decorated with inspiring cartoon murals where students engage in creative clubs.",
    image: "/images/activity-corridor.jpg",
    isReal: true
  },
  {
    id: 4,
    title: "Multi-Level Atrium & Inspirational Wall Murals",
    category: "Campus",
    caption: "Bright skylit staircase and atrium painted with white peace doves and positive educational themes to motivate scholars daily.",
    image: "/images/interior-atrium.jpg",
    isReal: true
  },
  {
    id: 5,
    title: "Chilled RO Drinking Water & Safety System",
    category: "Facilities",
    caption: "Dedicated stainless steel RO water purifier and certified fire-safety equipment ensuring pure health and protection.",
    image: "/images/water-facility.jpg",
    isReal: true
  },
  {
    id: 6,
    title: `Official School Admission Information Brochure`,
    category: "Events",
    caption: `The official school circular featuring Day Boarding details, PG to Class VIII admissions, and student stage celebrations.`,
    image: "/images/school-brochure.jpg",
    isReal: true
  },
  {
    id: 7,
    title: "Annual Day Cultural Extravaganza",
    category: "Events",
    caption: "Spectacular dance performances and mythological theatrical dramas enacted by our talented scholars on the auditorium stage.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    isReal: false
  },
  {
    id: 8,
    title: "Kindergarten Fancy Dress & Public Speaking",
    category: "Pre-Primary",
    caption: "Little scholars building early poise and verbal articulation on stage during fancy dress celebrations.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    isReal: false
  },
  {
    id: 9,
    title: "Sports Meet & Athletic Competitions",
    category: "Sports",
    caption: "Track races, yoga demonstrations, and team spirit fostered on our grounds.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    isReal: false
  }
];
