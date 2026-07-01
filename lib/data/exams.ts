import type { Career } from "./careers";

export type ExamDifficulty = "Easy" | "Moderate" | "Hard" | "Very Hard";

export interface Exam {
  slug: string;
  name: string;
  conducting_body: string;
  frequency: string;
  attempts_allowed: string;
  age_limit: string;
  mode: "Online" | "Offline" | "Hybrid";
  difficulty: ExamDifficulty;
  description: string;
  official_url: string;
}

export const EXAMS: Exam[] = [
  // ── NDA / Defence ─────────────────────────────────────────────────────────
  {
    slug: "nda",
    name: "NDA & NA Examination",
    conducting_body: "Union Public Service Commission (UPSC)",
    frequency: "Twice a year (April & September)",
    attempts_allowed: "Unlimited till age limit",
    age_limit: "16.5 to 19.5 years",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Gateway to the National Defence Academy. Paper I (Maths, 300 marks) and Paper II (General Ability Test, 600 marks). Followed by a 5-day SSB interview.",
    official_url: "https://www.upsc.gov.in/examinations/national-defence-academy-nda",
  },
  {
    slug: "cds",
    name: "Combined Defence Services (CDS)",
    conducting_body: "Union Public Service Commission (UPSC)",
    frequency: "Twice a year (February & September)",
    attempts_allowed: "Unlimited till age limit",
    age_limit: "20 to 24 (varies by academy)",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Entry to Indian Military Academy, Indian Naval Academy, Air Force Academy, and Officers Training Academy for graduates.",
    official_url: "https://www.upsc.gov.in/examinations/combined-defence-services",
  },
  {
    slug: "afcat",
    name: "Air Force Common Admission Test (AFCAT)",
    conducting_body: "Indian Air Force",
    frequency: "Twice a year (February & August)",
    attempts_allowed: "No limit (subject to age)",
    age_limit: "20 to 24 (flying branch); 20 to 26 (ground duty)",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "Entry to the Indian Air Force flying (pilot) and ground duty (technical / non-technical) branches. Followed by AFSB testing and SSB interview.",
    official_url: "https://afcat.cdac.in",
  },
  {
    slug: "indian-navy-ssr",
    name: "Indian Navy SSR / AA",
    conducting_body: "Indian Navy",
    frequency: "Twice a year",
    attempts_allowed: "No limit (subject to age)",
    age_limit: "17 to 21",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "Senior Secondary Recruits (SSR, 12th pass) and Artificer Apprentice (AA) entries into the Indian Navy. Followed by SSB interview.",
    official_url: "https://www.joinindiannavy.gov.in",
  },

  // ── Medical (MBBS) ────────────────────────────────────────────────────────
  {
    slug: "neet-ug",
    name: "NEET-UG",
    conducting_body: "National Testing Agency (NTA)",
    frequency: "Once a year (May)",
    attempts_allowed: "Unlimited",
    age_limit: "17 to 25 (relaxed for reserved categories)",
    mode: "Offline",
    difficulty: "Very Hard",
    description:
      "The single entrance exam for MBBS, BDS, AYUSH and nursing seats in India, including AIIMS and JIPMER.",
    official_url: "https://neet.nta.nic.in",
  },
  {
    slug: "neet-pg",
    name: "NEET-PG",
    conducting_body: "National Board of Examinations (NBE)",
    frequency: "Once a year",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Very Hard",
    description:
      "Entry to MD / MS / PG Diploma courses across Indian medical colleges. Conducted as a computer-based test by NBE.",
    official_url: "https://natboard.edu.in",
  },

  // ── Engineering / Space (JEE) ─────────────────────────────────────────────
  {
    slug: "jee-main",
    name: "JEE Main",
    conducting_body: "National Testing Agency (NTA)",
    frequency: "Twice a year (January & April)",
    attempts_allowed: "3 consecutive attempts",
    age_limit: "No upper age limit (must have passed Class 12)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Entry to NITs, IIITs, and GFTIs, plus eligibility to sit JEE Advanced.",
    official_url: "https://jeemain.nta.nic.in",
  },
  {
    slug: "jee-advanced",
    name: "JEE Advanced",
    conducting_body: "IITs (rotating host IIT)",
    frequency: "Once a year (June)",
    attempts_allowed: "2 consecutive years",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Very Hard",
    description:
      "The gateway to the 23 IITs, including IIT Bombay, Madras, Delhi, Kanpur, and Kharagpur. Also the entry route to IIST for ISRO.",
    official_url: "https://jeeadv.ac.in",
  },
  {
    slug: "bitsat",
    name: "BITSAT",
    conducting_body: "Birla Institute of Technology and Science (BITS)",
    frequency: "Twice a year",
    attempts_allowed: "No limit (subject to age)",
    age_limit: "Must have passed Class 12 (PCM)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Admission to BITS Pilani, Goa, Hyderabad, and Dubai campuses for integrated first-degree programmes.",
    official_url: "https://www.bitsadmission.com",
  },
  {
    slug: "viteee",
    name: "VITEEE",
    conducting_body: "Vellore Institute of Technology",
    frequency: "Once a year (April–May)",
    attempts_allowed: "No limit",
    age_limit: "Must have passed Class 12",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "VIT Engineering Entrance Examination for B.Tech at VIT Vellore, Chennai, AP, and Bhopal campuses.",
    official_url: "https://viteee.vit.ac.in",
  },
  {
    slug: "iist-admission",
    name: "IIST Admission (via JEE Advanced)",
    conducting_body: "IIST Thiruvananthapuram (admission via JEE Advanced ranks)",
    frequency: "Once a year (counselling after JEE Advanced)",
    attempts_allowed: "As per JEE Advanced rules",
    age_limit: "JEE Advanced — no upper limit",
    mode: "Online",
    difficulty: "Very Hard",
    description:
      "B.Tech Aerospace / Avionics at India's only undergraduate space institute, with a 3-year ISRO service bond.",
    official_url: "https://www.iist.ac.in",
  },
  {
    slug: "cuet-ug",
    name: "CUET-UG",
    conducting_body: "National Testing Agency (NTA)",
    frequency: "Once a year",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (Class 12 pass)",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "Common University Entrance Test for admission to undergraduate programmes in 200+ central, state, and private universities.",
    official_url: "https://cuet.samarth.ac.in",
  },

  // ── Design (NIFT / NID / UCEED) ───────────────────────────────────────────
  {
    slug: "nift-entrance",
    name: "NIFT Entrance Examination",
    conducting_body: "National Institute of Fashion Technology",
    frequency: "Once a year (January–March)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (must have passed Class 12)",
    mode: "Hybrid",
    difficulty: "Moderate",
    description:
      "General Ability Test (GAT) + Creative Ability Test (CAT) + Situation Test for B.Des admissions across 19 NIFT campuses.",
    official_url: "https://www.nift.ac.in",
  },
  {
    slug: "nid-dat",
    name: "NID Design Aptitude Test (DAT)",
    conducting_body: "National Institute of Design",
    frequency: "Once a year (January Prelims → April Mains)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (must have passed Class 12)",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Two-stage design test: DAT Prelims (objective + subjective) and DAT Mains (studio round + interview) for the prestigious 4-year B.Des at NID Ahmedabad.",
    official_url: "https://www.nid.edu",
  },
  {
    slug: "uceed",
    name: "UCEED",
    conducting_body: "IIT Bombay (on behalf of UCEED Committee)",
    frequency: "Once a year (January)",
    attempts_allowed: "2 attempts (consecutive years)",
    age_limit: "Must have passed Class 12 (any stream)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Undergraduate Common Entrance Exam for Design for B.Des at IIT Bombay, IIT Delhi, IIT Hyderabad, IIT Kanpur, and IIITDM Jabalpur.",
    official_url: "https://www.uceed.iitb.ac.in",
  },
  {
    slug: "ceed",
    name: "CEED",
    conducting_body: "IIT Bombay (on behalf of CEED Committee)",
    frequency: "Once a year",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (graduate in any discipline)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Common Entrance Examination for Design for M.Des programmes at IITs, IISc, and other premier institutes.",
    official_url: "https://www.ceed.iitb.ac.in",
  },

  // ── Civil Services (UPSC) ────────────────────────────────────────────────
  {
    slug: "upsc-cse",
    name: "UPSC Civil Services Examination (CSE)",
    conducting_body: "Union Public Service Commission (UPSC)",
    frequency: "Once a year (June Prelims → Sept Mains → Apr Interview)",
    attempts_allowed: "General 6 / OBC 9 / SC-ST unlimited (till age limit)",
    age_limit: "21 to 32 (relaxed: OBC +3, SC/ST +5, PwD +10)",
    mode: "Offline",
    difficulty: "Very Hard",
    description:
      "India's most prestigious exam — selects for IAS, IPS, IFS, IRS, and 22 other Central Services. 1 million+ applicants for ~1000 seats per year.",
    official_url: "https://www.upsc.gov.in/examinations/civil-services-examination-cse",
  },
  {
    slug: "upsc-capf",
    name: "UPSC CAPF (Assistant Commandant)",
    conducting_body: "Union Public Service Commission (UPSC)",
    frequency: "Once a year",
    attempts_allowed: "General 6 / OBC 9 / SC-ST unlimited",
    age_limit: "20 to 25 (relaxed for reserved categories)",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Central Armed Police Forces (Assistant Commandant) — entry to CRPF, BSF, CISF, ITBP, SSB via UPSC.",
    official_url: "https://www.upsc.gov.in/examinations/central-armed-police-forces",
  },

  // ── Commerce (CA) ────────────────────────────────────────────────────────
  {
    slug: "ca-foundation",
    name: "CA Foundation",
    conducting_body: "Institute of Chartered Accountants of India (ICAI)",
    frequency: "Twice a year (May & November)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (must have passed Class 12)",
    mode: "Offline",
    difficulty: "Moderate",
    description:
      "Entry-level exam for the Chartered Accountancy course. Four papers: Accounting, Business Laws, Quantitative Aptitude, Business Economics.",
    official_url: "https://www.icai.org",
  },
  {
    slug: "ca-intermediate",
    name: "CA Intermediate",
    conducting_body: "Institute of Chartered Accountants of India (ICAI)",
    frequency: "Twice a year (May & November)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Six papers covering Accounting, Law, Audit, Taxation, Cost & FM, and IT. Bridging level between Foundation and Final.",
    official_url: "https://www.icai.org",
  },
  {
    slug: "ca-final",
    name: "CA Final",
    conducting_body: "Institute of Chartered Accountants of India (ICAI)",
    frequency: "Twice a year (May & November)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Offline",
    difficulty: "Very Hard",
    description:
      "Six papers covering Financial Reporting, Strategic FM, Auditing, Taxation (Direct + Indirect), Risk Management, and Integrated Business Solutions.",
    official_url: "https://www.icai.org",
  },
  {
    slug: "cma-inter",
    name: "CMA Intermediate",
    conducting_body: "Institute of Cost Accountants of India (ICMAI)",
    frequency: "Twice a year (June & December)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Cost & Management Accountant Intermediate — entry to the CMA profession alongside CA/CS.",
    official_url: "https://icmai.in",
  },

  // ── Pilot / Aviation ─────────────────────────────────────────────────────
  {
    slug: "dgca-atpl",
    name: "DGCA ATPL (Airline Transport Pilot Licence)",
    conducting_body: "Directorate General of Civil Aviation (DGCA)",
    frequency: "Multiple sittings a year",
    attempts_allowed: "Unlimited",
    age_limit: "23+ for CPL",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "Airline Transport Pilot Licence exams covering Air Navigation, Meteorology, Air Regulation, Technical General & Specific. Mandatory for command on Indian carriers.",
    official_url: "https://www.dgca.gov.in",
  },
  {
    slug: "rtr-a",
    name: "RTR(A) — Restricted Radiotelephony Operator's Licence",
    conducting_body: "Wireless Planning & Coordination Wing, DoT",
    frequency: "Twice a year",
    attempts_allowed: "Unlimited",
    age_limit: "18+",
    mode: "Offline",
    difficulty: "Moderate",
    description:
      "Mandatory for pilots operating radiotelephony on Indian-registered aircraft. Conducted by DoT in Delhi / Mumbai / Kolkata / Chennai.",
    official_url: "https://wpc.dot.gov.in",
  },

  // ── Law (CLAT / AILET) ───────────────────────────────────────────────────
  {
    slug: "clat",
    name: "CLAT (Common Law Admission Test)",
    conducting_body: "Consortium of National Law Universities",
    frequency: "Once a year (December)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (must have passed Class 12 for UG)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Gateway to 26 National Law Universities across India for BA LLB / BBA LLB / LLM. Five sections: English, Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative Techniques.",
    official_url: "https://consortiumofnlus.ac.in",
  },
  {
    slug: "ailet",
    name: "AILET (All India Law Entrance Test)",
    conducting_body: "National Law University, Delhi",
    frequency: "Once a year (December)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Offline",
    difficulty: "Hard",
    description:
      "NLU Delhi's separate entrance exam for BA LLB / LLM. Tests English, GK, Legal Aptitude, Reasoning, and Mathematics.",
    official_url: "https://nationallawuniversitydelhi.in",
  },
  {
    slug: "lsat-india",
    name: "LSAT India",
    conducting_body: "Law School Admission Council (LSAC)",
    frequency: "Once a year (May)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Standardised test accepted by private law schools (Symbiosis, Jindal, Amity) for 5-year integrated law admissions.",
    official_url: "https://www.lsac.org",
  },

  // ── Architecture (NATA / JEE Paper 2) ────────────────────────────────────
  {
    slug: "nata",
    name: "NATA (National Aptitude Test in Architecture)",
    conducting_body: "Council of Architecture (CoA)",
    frequency: "Twice a year (April & July)",
    attempts_allowed: "No limit",
    age_limit: "Must have passed Class 12 (no upper limit)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Drawing + aesthetic sensitivity + mathematical aptitude test for B.Arch admissions across India.",
    official_url: "https://www.nata.in",
  },
  {
    slug: "jee-main-paper-2",
    name: "JEE Main Paper 2 (B.Arch / B.Planning)",
    conducting_body: "National Testing Agency (NTA)",
    frequency: "Twice a year (January & April)",
    attempts_allowed: "3 consecutive attempts",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Hard",
    description:
      "JEE Main Paper 2 is the entry to B.Arch / B.Planning at IITs, NITs, SPAs and IIA-affiliated colleges. Has Maths + Aptitude + Drawing.",
    official_url: "https://jeemain.nta.nic.in",
  },

  // ── Teaching (CTET / State TETs / UGC NET) ───────────────────────────────
  {
    slug: "ctet",
    name: "CTET (Central Teacher Eligibility Test)",
    conducting_body: "Central Board of Secondary Education (CBSE)",
    frequency: "Twice a year",
    attempts_allowed: "No limit",
    age_limit: "18+ (no upper age limit)",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "Mandatory eligibility for KVS / NVS / Army schools and many private schools. Two papers: Paper 1 (Class 1–5), Paper 2 (Class 6–8).",
    official_url: "https://ctet.nic.in",
  },
  {
    slug: "state-tets",
    name: "State Teacher Eligibility Tests (UPTET, REET, HTET etc.)",
    conducting_body: "Respective State Education Boards",
    frequency: "Once a year (per state)",
    attempts_allowed: "Varies by state",
    age_limit: "18 to 35 (relaxed for reserved categories)",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "State-level TETs required for appointment in state government schools. Pattern similar to CTET with state-specific GK.",
    official_url: "https://www.cbse.gov.in",
  },
  {
    slug: "ugc-net",
    name: "UGC NET (National Eligibility Test)",
    conducting_body: "National Testing Agency (NTA)",
    frequency: "Twice a year (June & December)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (JRF — 30 years)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Eligibility for Assistant Professor and Junior Research Fellowship in Indian universities and colleges. Two papers of objective type.",
    official_url: "https://ugcnet.nta.ac.in",
  },

  // ── Nursing (NORCET) ─────────────────────────────────────────────────────
  {
    slug: "aiims-norcet",
    name: "AIIMS NORCET (Nursing Officer Recruitment)",
    conducting_body: "AIIMS New Delhi",
    frequency: "Once a year",
    attempts_allowed: "No limit",
    age_limit: "18 to 30 (relaxed for reserved categories)",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "AIIMS Nursing Officer Recruitment Common Eligibility Test — gateway to nursing officer posts across AIIMS hospitals in India.",
    official_url: "https://www.aiims.edu",
  },

  // ── Dental (NEET-MDS) ─────────────────────────────────────────────────────
  {
    slug: "neet-mds",
    name: "NEET-MDS",
    conducting_body: "National Board of Examinations (NBE)",
    frequency: "Once a year",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Very Hard",
    description:
      "Master of Dental Surgery entrance — required for MDS seats at government and private dental colleges across India.",
    official_url: "https://natboard.edu.in",
  },

  // ── Management Consulting (CAT / XAT / GMAT / SNAP) ──────────────────────
  {
    slug: "cat",
    name: "CAT (Common Admission Test)",
    conducting_body: "Indian Institutes of Management (IIMs)",
    frequency: "Once a year (November)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit (must hold a bachelor's degree)",
    mode: "Online",
    difficulty: "Very Hard",
    description:
      "India's premier MBA entrance for IIMs and 1000+ B-schools. Three sections: VARC, DILR, Quant. Top consulting firms (McKinsey, BCG, Bain) recruit heavily from IIM-A/B/C.",
    official_url: "https://iimcat.ac.in",
  },
  {
    slug: "xat",
    name: "XAT (Xavier Aptitude Test)",
    conducting_body: "XLRI Jamshedpur",
    frequency: "Once a year (January)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Gateway to XLRI and 700+ associate B-schools. Includes Decision Making section unique to XAT.",
    official_url: "https://xatonline.in",
  },
  {
    slug: "gmat",
    name: "GMAT",
    conducting_body: "Graduate Management Admission Council",
    frequency: "Multiple sittings a year",
    attempts_allowed: "No limit (can be retaken multiple times)",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Standardised MBA entrance for ISB (1-year PGP) and global MBA programs. Accepted by 7,000+ programs worldwide.",
    official_url: "https://www.mba.com",
  },
  {
    slug: "snap",
    name: "SNAP (Symbiosis National Aptitude Test)",
    conducting_body: "Symbiosis International University",
    frequency: "Once a year (December)",
    attempts_allowed: "No limit",
    age_limit: "No upper age limit",
    mode: "Online",
    difficulty: "Moderate",
    description:
      "SNAP opens Symbiosis institutes (SIBM Pune, SCMHRD) — popular for marketing, operations, and consulting careers.",
    official_url: "https://www.snaptest.org",
  },

  // ── Space / Astronaut supplementary ──────────────────────────────────────
  {
    slug: "isro-icrb",
    name: "ISRO ICRB (Scientist/Engineer 'SC')",
    conducting_body: "ISRO Centralised Recruitment Board",
    frequency: "When vacancies are notified (typically once a year)",
    attempts_allowed: "No limit (subject to age)",
    age_limit: "28 years (relaxed for SC/ST)",
    mode: "Online",
    difficulty: "Hard",
    description:
      "Recruitment test for Scientist/Engineer 'SC' posts at ISRO centres. Multi-disciplinary: ECE, ME, CSE, EE, Physics, etc.",
    official_url: "https://www.isro.gov.in/Careers.html",
  },
];

export const CAREER_EXAMS: Record<Career["slug"], string[]> = {
  "commercial-pilot": ["dgca-atpl", "rtr-a"],
  "nda-defence": ["nda", "cds", "indian-navy-ssr", "afcat"],
  "doctor-mbbs": ["neet-ug", "neet-pg"],
  "fashion-designer": ["nift-entrance", "nid-dat", "uceed", "ceed"],
  "robotics-engineer": ["jee-main", "jee-advanced", "bitsat"],
  astronaut: ["jee-main", "jee-advanced", "iist-admission", "bitsat", "isro-icrb"],
  "civil-services-ias": ["upsc-cse", "upsc-capf", "cds"],
  "chartered-accountant": ["ca-foundation", "ca-intermediate", "ca-final", "cma-inter"],
  lawyer: ["clat", "ailet", "lsat-india"],
  "software-engineer": ["jee-main", "jee-advanced", "bitsat", "viteee", "cuet-ug"],
  "data-scientist": ["jee-main", "jee-advanced"],
  "mechanical-engineer": ["jee-main", "jee-advanced"],
  "electrical-engineer": ["jee-main", "jee-advanced"],
  "civil-engineer": ["jee-main", "jee-advanced"],
  architect: ["nata", "jee-main-paper-2", "uceed"],
  teacher: ["ctet", "state-tets", "ugc-net", "cuet-ug"],
  nurse: ["neet-ug", "aiims-norcet"],
  "product-manager": ["cat", "xat", "gmat"],
  "ux-designer": ["uceed"],
  dentist: ["neet-ug", "neet-mds"],
  consultant: ["cat", "xat", "gmat", "snap"],
};

export const getExamsForCareer = (careerSlug: Career["slug"]): Exam[] => {
  const examSlugs = CAREER_EXAMS[careerSlug] ?? [];
  return EXAMS.filter((e) => examSlugs.includes(e.slug));
};

export const getExamBySlug = (slug: string): Exam | undefined =>
  EXAMS.find((e) => e.slug === slug);
