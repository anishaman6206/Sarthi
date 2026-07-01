export interface Career {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  gradient: string;
  hot?: boolean;
  description: string;
}

export const CAREERS: Career[] = [
  {
    slug: "commercial-pilot",
    title: "Commercial Pilot",
    tagline: "Take to the skies",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-violet/30 via-peach/20 to-mint/30",
    hot: true,
    description:
      "Fly passengers and cargo across India and the world. Build 1,500+ hours of flight time, clear DGCA medicals, and earn an Airline Transport Pilot Licence to command commercial jets.",
  },
  {
    slug: "nda-defence",
    title: "NDA / Defence Officer",
    tagline: "Lead the armed forces",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-ink/40 via-violet/20 to-peach/20",
    hot: true,
    description:
      "Join the Indian Army, Navy, or Air Force through the National Defence Academy. Clear the UPSC NDA written exam, then the 5-day SSB interview, and train at Khadakwasla, Pune.",
  },
  {
    slug: "doctor-mbbs",
    title: "Doctor (MBBS)",
    tagline: "Heal with science",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-peach/30 via-mint/20 to-violet/20",
    hot: true,
    description:
      "Treat patients, specialise in fields like cardiology or paediatrics, and serve communities across India. Cracking NEET with a top rank unlocks AIIMS, JIPMER, and other premier government medical colleges.",
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    tagline: "Ship code that scales",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-cyan-500/40 via-blue-500/20 to-emerald-500/20",
    hot: true,
    description:
      "Design apps, platforms, and infrastructure that power modern products. A strong CS foundation, problem-solving skills, and projects in web, mobile, or AI engineering open doors to startups and top product companies.",
  },
  {
    slug: "fashion-designer",
    title: "Fashion Designer",
    tagline: "Style the future",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-peach/40 via-violet/20 to-mint/20",
    description:
      "Design clothing, accessories, and textile collections for runway, retail, and export. A strong portfolio and a seat at NIFT or NID is the classic launchpad into Indian fashion houses and global brands.",
  },
  {
    slug: "robotics-engineer",
    title: "Robotics Engineer",
    tagline: "Build thinking machines",
    image:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-ink/60 via-mint/20 to-violet/20",
    hot: true,
    description:
      "Design autonomous drones, surgical robots, and factory automation. A strong foundation in PCM, programming, and AI/ML, plus a B.Tech from IIT, IISc, or IIIT, opens R&D roles at the frontier of Industry 4.0.",
  },
  {
    slug: "astronaut",
    title: "Astronaut",
    tagline: "Reach for orbit",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-ink/50 via-violet/30 to-peach/20",
    description:
      "Fly human spaceflight missions for ISRO, eventually Gaganyaan and beyond. India's only direct pathway is the B.Tech at the Indian Institute of Space Science and Technology (IIST), Thiruvananthapuram, followed by ISRO selection.",
  },
  {
    slug: "civil-services-ias",
    title: "Civil Services (IAS / IPS / IFS)",
    tagline: "Serve a billion",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-violet/30 via-ink/20 to-peach/20",
    description:
      "Become a district magistrate, policy maker, or ambassador. Clear the UPSC Civil Services Examination (Prelims + Mains + Interview) to join the Indian Administrative Service and shape governance at the highest level.",
  },
  {
    slug: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    tagline: "Master of finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-mint/30 via-peach/20 to-violet/20",
    description:
      "Audit companies, file taxes, and advise businesses on finance. The ICAI pathway of CA Foundation, CA Intermediate, and CA Final plus three years of articleship is one of the most respected commerce careers in India.",
  },
  {
    slug: "lawyer",
    title: "Lawyer",
    tagline: "Argue with precision",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-slate-800/70 via-amber-600/20 to-rose-600/20",
    hot: true,
    description:
      "Build a career in litigation, corporate law, policy, or the judiciary. Strong reading, writing, and reasoning skills, plus admission to a top 5-year or 3-year law school, set the foundation for a high-impact legal career.",
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    tagline: "Turn data into impact",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-cyan-600/30 via-blue-500/20 to-indigo-600/20",
    description:
      "Build ML models, analyse large datasets, and deliver product insights. A strong math & programming foundation plus projects in Python, SQL and ML libraries open roles in product and research teams.",
  },
  {
    slug: "mechanical-engineer",
    title: "Mechanical Engineer",
    tagline: "Design machines that move",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-amber-600/30 via-rose-400/20 to-ink/20",
    description:
      "Create engines, HVAC systems, and industrial machines. A B.Tech in Mechanical or Automotive Engineering plus hands-on CAD and manufacturing projects leads to roles in design and production.",
  },
  {
    slug: "electrical-engineer",
    title: "Electrical Engineer",
    tagline: "Power systems & electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-yellow-500/30 via-amber-300/20 to-orange-400/20",
    description:
      "Work on power systems, electronics, and embedded systems. Strong fundamentals in circuits, signals, and electronics plus lab experience open roles in energy, automation, and hardware startups.",
  },
  {
    slug: "civil-engineer",
    title: "Civil Engineer",
    tagline: "Shape the built environment",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-emerald-600/30 via-slate-400/20 to-indigo-400/20",
    description:
      "Plan, design and construct infrastructure — roads, bridges, and buildings. A B.Tech in Civil Engineering plus internships on real projects leads to roles in consulting and construction management.",
  },
  {
    slug: "architect",
    title: "Architect",
    tagline: "Design spaces people love",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-violet-500/30 via-pink-400/20 to-amber-300/20",
    description:
      "Blend design, engineering, and art to create buildings and public spaces. A B.Arch from top design schools and a strong portfolio are required for studio roles and practice.",
  },
  {
    slug: "teacher",
    title: "Teacher",
    tagline: "Inspire young minds",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-rose-400/30 via-orange-300/20 to-yellow-200/20",
    description:
      "Teach in schools or specialise in subject coaching. Strong subject knowledge, communication, and pedagogical skills plus B.Ed. or university degrees open classroom and online teaching roles.",
  },
  {
    slug: "nurse",
    title: "Nurse",
    tagline: "Care with competence",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-pink-500/30 via-rose-400/20 to-slate-300/20",
    description:
      "Deliver clinical care across hospitals and community settings. Nursing diplomas and B.Sc Nursing plus clinical internships prepare you for patient-facing roles and specialty certifications.",
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    tagline: "Ship customer-centred products",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-blue-500/30 via-cyan-400/20 to-emerald-300/20",
    description:
      "Define product vision, prioritise features, and work across design and engineering. PMs often come from engineering backgrounds with strong user research and data intuition.",
  },
  {
    slug: "ux-designer",
    title: "UX Designer",
    tagline: "Design delightful experiences",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-fuchsia-500/30 via-pink-400/20 to-amber-300/20",
    description:
      "Research, prototype, and test user interfaces. A portfolio of interaction designs, wireframes, and user research is the quickest path into product teams and startups.",
  },
  {
    slug: "dentist",
    title: "Dentist",
    tagline: "Oral health specialist",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-teal-400/30 via-cyan-400/20 to-indigo-300/20",
    description:
      "Treat oral health issues, perform restorations, and lead preventive care. BDS via NEET or state counselling followed by internships is the primary path to practice and specialisations.",
  },
  {
    slug: "consultant",
    title: "Consultant",
    tagline: "Advise organisations",
    image:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-slate-800/50 via-blue-600/20 to-cyan-300/20",
    description:
      "Work with organisations to solve strategy, operations, and growth problems. Strong analytical skills, client communication, and domain expertise open roles at consulting firms and in-house teams.",
  },
];

export const getCareerBySlug = (slug: string): Career | undefined =>
  CAREERS.find((c) => c.slug === slug);
