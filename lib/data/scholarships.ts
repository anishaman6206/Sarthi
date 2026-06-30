import type { Career } from "./careers";

export type Category =
  | "General"
  | "OBC"
  | "SC"
  | "ST"
  | "EWS"
  | "Minority"
  | "SBC"
  | "VJNT";
export type Grade =
  | "class-9"
  | "class-10"
  | "class-11"
  | "class-12"
  | "graduate"
  | "postgraduate";

export interface Scholarship {
  slug: string;
  name: string;
  provider: string;
  state: string | null;
  income_min: number;
  income_max: number;
  applicable_grades: Grade[];
  applicable_categories: Category[];
  amount_inr: number;
  application_url: string;
  description: string;
  /** Approximate deadline window (e.g. "October–December"). Used by the UI. */
  deadline_hint: string;
  /**
   * Concrete deadline as ISO date string (YYYY-MM-DD) when known.
   * "Rolling" when continuously open. Optional for legacy entries.
   */
  application_deadline: string | Date;
  /** Career slugs this scholarship is relevant for. Used by getScholarshipsForCareer. */
  career_relevance: Career["slug"][];
}

const isoDate = (s: string): Date => {
  // Defensive parser — fall back to a far-future date so it doesn't crash.
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? new Date("2099-12-31") : d;
};

export const SCHOLARSHIPS: Scholarship[] = [
  {
    slug: "central-sector-scholarship",
    name: "Central Sector Scholarship Scheme of Top Class Education",
    provider: "Department of Higher Education, Ministry of Education",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 20000,
    application_url: "https://scholarships.gov.in",
    description:
      "For Class 12 toppers (top 20%) admitted to a regular, full-time undergraduate or postgraduate course in India. Renewed annually on academic performance.",
    deadline_hint: "October–December (National Scholarship Portal)",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: [
      "commercial-pilot",
      "nda-defence",
      "doctor-mbbs",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "national-means-merit",
    name: "National Means-cum-Merit Scholarship (NMMSS)",
    provider: "Department of School Education & Literacy, Ministry of Education",
    state: null,
    income_min: 0,
    income_max: 350000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 12000,
    application_url: "https://scholarships.gov.in",
    description:
      "Awarded to Class 8 students from low-income families clearing the NMMS Examination. ₹1,000 per month from Class 9 to Class 12 (renewable annually).",
    deadline_hint: "October–November (NSP)",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "commercial-pilot",
      "nda-defence",
      "doctor-mbbs",
      "fashion-designer",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "post-matric-sc-st-obc",
    name: "Post-Matric Scholarship for SC / ST / OBC",
    provider: "Ministry of Social Justice & Empowerment / Ministry of Tribal Affairs",
    state: null,
    income_min: 0,
    income_max: 250000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["SC", "ST", "OBC"],
    amount_inr: 50000,
    application_url: "https://scholarships.gov.in",
    description:
      "Covers tuition fees, maintenance allowance, study tours, thesis printing, and book allowances for SC/ST/OBC students studying at post-matric (Class 11+) level. Slab varies by course.",
    deadline_hint: "Varies by state (typically October–December)",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: [
      "commercial-pilot",
      "nda-defence",
      "doctor-mbbs",
      "fashion-designer",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "ntse",
    name: "National Talent Search Examination (NTSE)",
    provider: "NCERT",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-10"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 1250,
    application_url: "https://www.ncert.nic.in/ntse.php",
    description:
      "Prestigious national talent scholarship: two-stage exam (State + National) testing MAT, SAT, and Language. Awarded to ~1000 students per year. ₹1,250/month till PhD.",
    deadline_hint: "November (State level)",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "nda-defence",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
    ],
  },
  {
    slug: "inspire",
    name: "INSPIRE Scholarship for Higher Education (SHE)",
    provider: "Department of Science & Technology (DST), Government of India",
    state: null,
    income_min: 0,
    income_max: 950000,
    applicable_grades: ["class-11", "class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 80000,
    application_url: "https://online-inspire.gov.in",
    description:
      "For students in the top 1% of Class 12 board exams who pursue B.Sc / M.Sc / BS-MS in Natural & Basic Sciences. ₹80,000/year + summer research fellowship.",
    deadline_hint: "January–February",
    application_deadline: isoDate("2027-02-28"),
    career_relevance: ["robotics-engineer", "astronaut"],
  },
  {
    slug: "rgnf",
    name: "Rajiv Gandhi National Fellowship (RGNF) for SC/ST",
    provider: "University Grants Commission (UGC)",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["postgraduate"],
    applicable_categories: ["SC", "ST"],
    amount_inr: 280000,
    application_url: "https://www.ugc.ac.in",
    description:
      "Junior Research Fellowship (JRF) for SC/ST candidates pursuing M.Phil / PhD in Indian universities. Covers stipend, contingency, and HRA.",
    deadline_hint: "January–February",
    application_deadline: isoDate("2027-02-28"),
    career_relevance: ["robotics-engineer", "astronaut", "civil-services-ias"],
  },
  {
    slug: "karnataka-vidyasiri",
    name: "Karnataka Vidyasiri (Post-Matric) Scholarship",
    provider: "Backward Classes Welfare Department, Government of Karnataka",
    state: "KA",
    income_min: 0,
    income_max: 250000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["OBC", "SC", "ST", "Minority"],
    amount_inr: 35000,
    application_url: "https://scholarships.karnataka.gov.in",
    description:
      "Covers tuition + maintenance for OBC / SC / ST / Minority students domiciled in Karnataka pursuing post-matric courses in state / central institutions.",
    deadline_hint: "September–November (via NSP)",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "commercial-pilot",
      "nda-defence",
      "doctor-mbbs",
      "fashion-designer",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "maharashtra-shahu-maharaj",
    name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship",
    provider: "Government of Maharashtra — Social Justice & Special Assistance Department",
    state: "MH",
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["SC", "ST", "OBC", "SBC", "VJNT", "EWS"],
    amount_inr: 30000,
    application_url: "https://mahadbt.maharashtra.gov.in",
    description:
      "Merit-cum-means scholarship for Maharashtra-domiciled students. ₹10,000 per year for Class 11–12 and up to ₹30,000 for professional undergraduate courses.",
    deadline_hint: "August–October (MahaDBT portal)",
    application_deadline: isoDate("2026-10-31"),
    career_relevance: [
      "commercial-pilot",
      "nda-defence",
      "doctor-mbbs",
      "fashion-designer",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "tamil-nadu-bc-mbc",
    name: "Tamil Nadu BC / MBC / DNC Scholarship",
    provider: "Welfare of Backward Classes Department, Government of Tamil Nadu",
    state: "TN",
    income_min: 0,
    income_max: 300000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["OBC"],
    amount_inr: 25000,
    application_url: "https://tnesevai.tn.gov.in",
    description:
      "For Backward Class, Most Backward Class, and Denotified Community students in Tamil Nadu. Covers tuition + maintenance from Class 11 to PhD.",
    deadline_hint: "August–October",
    application_deadline: isoDate("2026-10-31"),
    career_relevance: [
      "doctor-mbbs",
      "robotics-engineer",
      "astronaut",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "kerala-state-scholarship",
    name: "Kerala State Merit Scholarship & Suvarna Jubilee Merit Scholarship",
    provider: "Government of Kerala — Backward Classes & Scheduled Castes Development Department",
    state: "KL",
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 20000,
    application_url: "https://dcescholarship.kerala.gov.in",
    description:
      "Multiple state-level schemes including the Suvarna Jubilee Merit Scholarship (₹10,000 for UG, ₹20,000 for PG) and KPCR merit scholarships.",
    deadline_hint: "September–November",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "astronaut",
      "doctor-mbbs",
      "commercial-pilot",
      "robotics-engineer",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "delhi-sc-st-obc",
    name: "Delhi Post-Matric SC / ST / OBC Scholarship",
    provider: "Department for the Welfare of SC/ST/OBC, Government of Delhi",
    state: "DL",
    income_min: 0,
    income_max: 250000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["SC", "ST", "OBC"],
    amount_inr: 30000,
    application_url: "https://scstwelfare.delhi.gov.in",
    description:
      "Post-matric scholarship for SC/ST/OBC students domiciled in Delhi pursuing higher studies in any institution across India.",
    deadline_hint: "October–December",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: [
      "civil-services-ias",
      "doctor-mbbs",
      "chartered-accountant",
      "fashion-designer",
    ],
  },
  {
    slug: "up-scholarship",
    name: "Uttar Pradesh Samaj Kalyan Vibhag Scholarship",
    provider: "Samaj Kalyan Vibhag, Government of Uttar Pradesh",
    state: "UP",
    income_min: 0,
    income_max: 250000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["SC", "ST", "OBC", "General", "Minority"],
    amount_inr: 30000,
    application_url: "https://scholarship.up.gov.in",
    description:
      "UP government's flagship scholarship covering tuition + maintenance for Class 9 onwards across all categories, including Pre-Matric and Post-Matric components.",
    deadline_hint: "August–November",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "civil-services-ias",
      "nda-defence",
      "doctor-mbbs",
      "robotics-engineer",
      "astronaut",
      "chartered-accountant",
    ],
  },
  // ── Career-aligned and skill-specific scholarships ───────────────────────
  {
    slug: "neet-pg-medical",
    name: "NEET-PG Scholarship & Tuition Reimbursement for Government College MBBS",
    provider: "National Medical Commission / State Medical Education Departments",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 60000,
    application_url: "https://scholarships.gov.in",
    description:
      "Tuition reimbursement + maintenance for MBBS and PG medical students in government medical colleges across India.",
    deadline_hint: "Rolling (per college admission cycle)",
    application_deadline: "Rolling",
    career_relevance: ["doctor-mbbs"],
  },
  {
    slug: "nift-financial-assistance",
    name: "NIFT Means-Cum-Merit Financial Assistance",
    provider: "National Institute of Fashion Technology (NIFT)",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 60000,
    application_url: "https://www.nift.ac.in",
    description:
      "Means-cum-merit financial assistance for NIFT students across all 19 campuses based on parental income and academic performance.",
    deadline_hint: "July (each academic year)",
    application_deadline: isoDate("2026-07-31"),
    career_relevance: ["fashion-designer"],
  },
  {
    slug: "nid-fellowship",
    name: "NID Fellowship & Fee Waiver",
    provider: "National Institute of Design (NID)",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 100000,
    application_url: "https://www.nid.edu",
    description:
      "Need-based and merit-based fellowships for B.Des and M.Des students at NID Ahmedabad, Gandhinagar, and Bangalore.",
    deadline_hint: "June–July",
    application_deadline: isoDate("2026-07-31"),
    career_relevance: ["fashion-designer"],
  },
  {
    slug: "iit-merit-cum-means",
    name: "IIT Merit-Cum-Means Scholarship",
    provider: "Indian Institutes of Technology (IIT Council)",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 100000,
    application_url: "https://www.iitb.ac.in",
    description:
      "Merit-cum-means tuition fee waiver plus monthly stipend for IIT undergraduate and postgraduate students from low-income families.",
    deadline_hint: "August (academic year start)",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["robotics-engineer", "astronaut"],
  },
  {
    slug: "air-india-cadet-pilot",
    name: "Air India / IndiGo Cadet Pilot Cadetship Sponsorship",
    provider: "Air India / IndiGo Cadet Pilot Programmes",
    state: null,
    income_min: 0,
    income_max: 1200000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 1500000,
    application_url: "https://www.airindia.com/careers",
    description:
      "Full or partial sponsorship of CPL training costs for candidates who clear the airline's cadet pilot selection round — repayable via post-type-rating bond service.",
    deadline_hint: "Rolling (whenever cadet batch openings are announced)",
    application_deadline: "Rolling",
    career_relevance: ["commercial-pilot"],
  },
  {
    slug: "dgca-ladli",
    name: "Ladli Laxmi Yojana (Delhi) — Education Grant for Girls",
    provider: "Government of NCT of Delhi",
    state: "DL",
    income_min: 0,
    income_max: 300000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 30000,
    application_url: "https://wcddel.in/ladli.html",
    description:
      "Delhi-government scheme for girls in low-income families covering education, skill training, and a fixed deposit at age 18.",
    deadline_hint: "September–December",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: [
      "doctor-mbbs",
      "fashion-designer",
      "civil-services-ias",
      "chartered-accountant",
    ],
  },
  {
    slug: "defence-sainik",
    name: "Sainik School Entrance Fee Concession & Cadet Scholarship",
    provider: "Sainik Schools Society, Ministry of Defence",
    state: null,
    income_min: 0,
    income_max: 700000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 50000,
    application_url: "https://sainikschool.nsp.gov.in",
    description:
      "Cadet-level fee concession plus stipend at Sainik Schools feeding into NDA via the AISSEE. Reserved seats for SC/ST.",
    deadline_hint: "October–December (AISSEE)",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: ["nda-defence"],
  },
  {
    slug: "isro-young-scientist",
    name: "ISRO Young Scientist Programme (Yuva VIgyani Karyakram)",
    provider: "Indian Space Research Organisation (ISRO)",
    state: null,
    income_min: 0,
    income_max: 1000000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 30000,
    application_url: "https://www.isro.gov.in",
    description:
      "One-month summer residential programme at VSSC / SAC / SDSC for Class 9 students interested in space science. Travel + boarding covered.",
    deadline_hint: "March (annual intake)",
    application_deadline: isoDate("2027-03-31"),
    career_relevance: ["astronaut", "robotics-engineer"],
  },
  {
    slug: "icai-support",
    name: "ICAI Students' Education Loan Subsidy & Merit Award",
    provider: "Institute of Chartered Accountants of India (ICAI)",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 25000,
    application_url: "https://www.icai.org",
    description:
      "ICAI merit-cum-means scholarship and education loan subsidy for registered CA students across Foundation, Intermediate, and Final levels.",
    deadline_hint: "May & November (per attempt)",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: ["chartered-accountant"],
  },
  {
    slug: "upsc-prize-money",
    name: "LBSNAA Book Prize & UPSC Coaching Subsidy",
    provider: "Department of Personnel & Training, Government of India",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 50000,
    application_url: "https://www.upsc.gov.in",
    description:
      "Subsidy for UPSC Civil Services coaching from empanelled institutes for candidates from low-income families, plus book prizes for top rankers.",
    deadline_hint: "May–July",
    application_deadline: isoDate("2026-07-31"),
    career_relevance: ["civil-services-ias"],
  },
];

export interface ScholarshipProfile {
  grade?: Grade;
  familyIncome?: number;
  category?: Category;
  homeState?: string;
}

const gradeRank: Record<Grade, number> = {
  "class-9": 1,
  "class-10": 2,
  "class-11": 3,
  "class-12": 4,
  graduate: 5,
  postgraduate: 6,
};

const relevanceScore = (s: Scholarship, profile: ScholarshipProfile): number => {
  let score = 0;

  if (profile.grade) {
    if (s.applicable_grades.includes(profile.grade)) score += 3;
    const userIdx = gradeRank[profile.grade];
    const range = s.applicable_grades.map((g) => gradeRank[g]);
    const min = Math.min(...range);
    const max = Math.max(...range);
    if (userIdx >= min && userIdx <= max) score += 1;
  } else {
    score += 1;
  }

  if (profile.familyIncome !== undefined) {
    if (profile.familyIncome <= s.income_max) {
      score += 3;
      const headroom = s.income_max - profile.familyIncome;
      if (headroom > 0) score += Math.min(2, Math.floor(headroom / 100000));
    } else {
      score -= 5;
    }
  }

  if (profile.category) {
    if (s.applicable_categories.includes(profile.category)) score += 2;
    if (s.applicable_categories.length === 1) score += 1;
  }

  if (profile.homeState) {
    if (s.state === null) score += 1;
    else if (s.state === profile.homeState) score += 4;
    else score -= 3;
  } else if (s.state === null) {
    score += 1;
  }

  score += s.amount_inr / 50000;
  return score;
};

export const getScholarshipsForProfile = (profile: ScholarshipProfile): Scholarship[] => {
  return [...SCHOLARSHIPS]
    .map((s) => ({ s, score: relevanceScore(s, profile) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.s);
};

/**
 * Return the scholarships relevant to a particular career path.
 * Filters by `career_relevance` — does NOT return the full list.
 */
export const getScholarshipsForCareer = (
  careerSlug: Career["slug"],
): Scholarship[] => {
  return SCHOLARSHIPS.filter((s) =>
    s.career_relevance.includes(careerSlug),
  );
};
