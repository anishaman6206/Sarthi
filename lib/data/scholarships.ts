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
    slug: "airline-cadet-sponsorships",
    name: "Airline Cadetship Sponsorships (general)",
    provider: "Major Indian carriers & training partners",
    state: null,
    income_min: 0,
    income_max: 1200000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 2000000,
    application_url: "https://www.airlinecareers.example/roles/cadet",
    description:
      "Many Indian and international airlines periodically run cadet pilot sponsorships that offer full or partial funding for CPL / type-rating in exchange for a contractual training bond. Availability is rolling and competitive.",
    deadline_hint: "Rolling (check airline careers pages)",
    application_deadline: "Rolling",
    career_relevance: ["commercial-pilot"],
  },
  {
    slug: "pilot-training-education-loan",
    name: "Education Loan for Pilot Training (Bank Schemes)",
    provider: "Public & Private banks (SBI, PNB, HDFC etc.)",
    state: null,
    income_min: 0,
    income_max: 5000000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 3000000,
    application_url: "https://www.sbi.co.in/web/personal-banking/education-loan",
    description:
      "Banks offer education loans for professional pilot training covering tuition, flying hours, and living costs. Terms vary; many banks accept FTO invoices and collateral or third-party guarantees.",
    deadline_hint: "Rolling (apply any time)",
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
    slug: "nda-coaching-scholarship",
    name: "NDA / Defence Entrance Coaching Scholarship (merit-based)",
    provider: "State Education Boards & Private Foundations",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 25000,
    application_url: "https://sainikschools.gov.in/resources",
    description:
      "Merit and need-based scholarships for students joining NDA preparation centres or Sainik Schools; covers coaching fees, study material, and travel for AISSEE / NDA exam rounds.",
    deadline_hint: "Varies by provider (typically before AISSEE / NDA cycles)",
    application_deadline: "Rolling",
    career_relevance: ["nda-defence"],
  },
  {
    slug: "aissee-nta",
    name: "AISSEE (NTA) — Exam & Fee Information",
    provider: "National Testing Agency (NTA)",
    state: null,
    income_min: 0,
    income_max: 1000000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 0,
    application_url: "https://aissee.nta.nic.in",
    description:
      "AISSEE is the All India Sainik School Entrance Examination conducted by NTA. The portal contains application, eligibility, and fee concession information for state- and central-level schemes.",
    deadline_hint: "Usually in Q1–Q2 every academic year",
    application_deadline: "Rolling",
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

  // ── New careers: lawyer, architect, teacher, nurse, dentist, consultant, astronaut ──
  {
    slug: "clat-merit-scholarship",
    name: "NLU Merit-cum-Means Scholarship",
    provider: "National Law Universities / Bar Council of India",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 75000,
    application_url: "https://consortiumofnlus.ac.in",
    description:
      "Merit and need-based tuition waivers at all National Law Universities. Top-10 CLAT rankers receive full fee waivers; lower ranks get partial waivers.",
    deadline_hint: "August–September (per NLU)",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["lawyer"],
  },
  {
    slug: "bar-council-india-aid",
    name: "Bar Council of India Legal Education Aid",
    provider: "Bar Council of India (BCI)",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 50000,
    application_url: "https://www.barcouncilofindia.org",
    description:
      "BCI financial assistance for students at BCI-approved law schools and hostels. Covers tuition, books, and hostel fees.",
    deadline_hint: "Varies by institution",
    application_deadline: "Rolling",
    career_relevance: ["lawyer"],
  },
  {
    slug: "nata-archscholarship",
    name: "CoA / IIT Architecture Scholarship & Tuition Waiver",
    provider: "Council of Architecture / IIT Architecture Departments",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 80000,
    application_url: "https://www.coa.gov.in",
    description:
      "Need-based tuition waivers at IITs and SPA-affiliated B.Arch programs. SC/ST scholarships under the Ministry of Education.",
    deadline_hint: "August (academic year start)",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["architect"],
  },
  {
    slug: "iit-b-arch-aid",
    name: "IIT Architecture Studio Aid & Travel Grant",
    provider: "IIT Bombay / IIT Kharagpur / IIT Roorkee",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 60000,
    application_url: "https://www.iitb.ac.in",
    description:
      "Studio supplies, model-making materials, and international-study-tour grants for IIT B.Arch students from economically weaker sections.",
    deadline_hint: "Rolling (per semester)",
    application_deadline: "Rolling",
    career_relevance: ["architect"],
  },
  {
    slug: "kvs-teacher-recruitment",
    name: "KVS / NVS Teachers' Children Education Scholarship",
    provider: "Kendriya Vidyalaya Sangathan / Navodaya Vidyalaya Samiti",
    state: null,
    income_min: 0,
    income_max: 900000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 30000,
    application_url: "https://kvsangathan.nic.in",
    description:
      "Merit-based scholarships for children of KVS / NVS teachers pursuing higher education; partial tuition reimbursement.",
    deadline_hint: "September–October",
    application_deadline: isoDate("2026-10-31"),
    career_relevance: ["teacher"],
  },
  {
    slug: "bed-merit-scholarship",
    name: "B.Ed Merit Scholarship (NCERT / RIEs)",
    provider: "NCERT / Regional Institutes of Education",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 35000,
    application_url: "https://www.ncert.nic.in",
    description:
      "NCERT's merit-cum-means scholarship for B.Ed students at RIEs — covers tuition and a small monthly stipend.",
    deadline_hint: "August (academic year start)",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["teacher"],
  },
  {
    slug: "nursing-inc-scholarship",
    name: "Indian Nursing Council (INC) Scholarship",
    provider: "Indian Nursing Council",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 40000,
    application_url: "https://www.indiannursingcouncil.org",
    description:
      "INC scholarships for B.Sc / M.Sc Nursing students at INC-approved institutions. Includes stipend and book allowance.",
    deadline_hint: "July–August",
    application_deadline: isoDate("2026-08-31"),
    career_relevance: ["nurse"],
  },
  {
      slug: "aiims-nursing-aid",
    name: "AIIMS Nursing Subsidy & Hostel Concession",
    provider: "AIIMS New Delhi & other AIIMS",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 30000,
    application_url: "https://www.aiims.edu",
    description:
      "Subsidised B.Sc Nursing education at AIIMS with hostel fee concession for SC/ST/EWS students.",
    deadline_hint: "August",
    application_deadline: isoDate("2026-08-31"),
    career_relevance: ["nurse"],
  },
  {
    slug: "dci-dental-scholarship",
    name: "Dental Council of India (DCI) Scholarship",
    provider: "Dental Council of India",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 50000,
    application_url: "https://dciindia.gov.in",
    description:
      "DCI scholarship for BDS and MDS students at DCI-approved dental colleges — covers tuition and book allowance.",
    deadline_hint: "August–September",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["dentist"],
  },
  {
    slug: "state-dental-merit",
    name: "State Dental College Merit Scholarship",
    provider: "State Health & Family Welfare Departments",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 40000,
    application_url: "https://scholarships.gov.in",
    description:
      "State-level merit-cum-means scholarships for BDS students at government dental colleges across India.",
    deadline_hint: "September–October",
    application_deadline: isoDate("2026-10-31"),
    career_relevance: ["dentist"],
  },
  {
    slug: "iim-fellowship",
    name: "IIM Need-Based Fee Waiver & Fellowship",
    provider: "Indian Institutes of Management (IIM Council)",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 400000,
    application_url: "https://www.iima.ac.in",
    description:
      "Need-based full / partial fee waivers for PGP students at IIMs (A/B/C/L/K). Available to candidates from families earning below ₹8 LPA.",
    deadline_hint: "June–August (after admission)",
    application_deadline: isoDate("2026-08-31"),
    career_relevance: ["consultant"],
  },
  {
    slug: "isob-scholarship",
    name: "ISRO Space Science Scholarship (for IIST Students)",
    provider: "ISRO / Department of Space",
    state: null,
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 60000,
    application_url: "https://www.iist.ac.in",
    description:
      "Merit-based scholarship for IIST students from EWS / SC / ST categories; includes tuition fee waiver and book allowance.",
    deadline_hint: "August (academic year)",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["astronaut"],
  },
  {
    slug: "drdo-research-fellowship",
    name: "DRDO Research Fellowship (Junior / Senior)",
    provider: "Defence Research and Development Organisation (DRDO)",
    state: null,
    income_min: 0,
    income_max: 1000000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 310000,
    application_url: "https://www.drdo.gov.in",
    description:
      "DRDO Junior / Senior Research Fellowships for M.Tech / PhD scholars working on defence R&D projects. Stipend ₹31,000–₹35,000/month.",
    deadline_hint: "Rolling",
    application_deadline: "Rolling",
    career_relevance: ["astronaut", "robotics-engineer"],
  },
  {
    slug: "iit-b-tech-aid",
    name: "IIT B.Tech Tuition Fee Waiver (Income-based)",
    provider: "IIT Council / MHRD",
    state: null,
    income_min: 0,
    income_max: 500000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 250000,
    application_url: "https://www.iitb.ac.in",
    description:
      "Full tuition fee waiver for B.Tech students at all IITs whose family income is below ₹5 LPA. 2/3 waiver for ₹5–8 LPA bracket.",
    deadline_hint: "August (academic year)",
    application_deadline: isoDate("2026-09-30"),
    career_relevance: ["robotics-engineer", "software-engineer", "mechanical-engineer", "electrical-engineer", "civil-engineer", "data-scientist"],
  },
  {
    slug: "pragati-scholarship-girls",
    name: "AICTE Pragati Scholarship for Girls (Engineering)",
    provider: "AICTE — All India Council for Technical Education",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 50000,
    application_url: "https://www.aicte-pragati-saksham-gov.in",
    description:
      "AICTE scholarship for girl students admitted to AICTE-approved technical programs (B.Tech / B.E. / M.Tech). ₹50,000/year plus incidentals.",
    deadline_hint: "October–December",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: ["software-engineer", "mechanical-engineer", "electrical-engineer", "civil-engineer", "robotics-engineer", "data-scientist", "architect"],
  },
  {
    slug: "saksham-scholarship-pwd",
    name: "AICTE Saksham Scholarship (PwD Engineering Students)",
    provider: "AICTE — All India Council for Technical Education",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 50000,
    application_url: "https://www.aicte-pragati-saksham-gov.in",
    description:
      "AICTE scholarship for differently-abled students (PwD ≥ 40%) in AICTE-approved technical programs. Covers tuition, books, and assistive devices.",
    deadline_hint: "October–December",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: ["software-engineer", "mechanical-engineer", "electrical-engineer", "civil-engineer", "robotics-engineer", "data-scientist", "architect", "teacher"],
  },
  {
    slug: "vidya-lakshmi-portal",
    name: "Vidya Lakshmi Education Loan Portal",
    provider: "Ministry of Finance / Ministry of Education",
    state: null,
    income_min: 0,
    income_max: 5000000,
    applicable_grades: ["class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 1500000,
    application_url: "https://www.vidyalakshmi.co.in",
    description:
      "Single-window portal for education loans from 38+ banks — covers tuition and living expenses for professional courses across India.",
    deadline_hint: "Rolling (apply before admission)",
    application_deadline: "Rolling",
    career_relevance: [
      "lawyer",
      "doctor-mbbs",
      "architect",
      "teacher",
      "nurse",
      "dentist",
      "consultant",
      "software-engineer",
      "mechanical-engineer",
      "electrical-engineer",
      "civil-engineer",
      "fashion-designer",
      "commercial-pilot",
      "robotics-engineer",
      "astronaut",
      "data-scientist",
      "chartered-accountant",
    ],
  },
  {
    slug: "minority-merit-cum-means",
    name: "Minority Merit-cum-Means Scholarship (MMMSS)",
    provider: "Ministry of Minority Affairs, Government of India",
    state: null,
    income_min: 0,
    income_max: 250000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["Minority"],
    amount_inr: 20000,
    application_url: "https://scholarships.gov.in",
    description:
      "Professional / technical course scholarship for students from minority communities (Muslim, Sikh, Christian, Buddhist, Parsi, Jain).",
    deadline_hint: "October–November",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "lawyer",
      "doctor-mbbs",
      "architect",
      "teacher",
      "nurse",
      "dentist",
      "consultant",
      "software-engineer",
      "mechanical-engineer",
      "electrical-engineer",
      "civil-engineer",
      "fashion-designer",
      "robotics-engineer",
      "data-scientist",
      "chartered-accountant",
      "civil-services-ias",
    ],
  },
  {
    slug: "begum-hazrat-mahal",
    name: "Begum Hazrat Mahal Girls Scholarship (Maulana Azad Education Foundation)",
    provider: "Maulana Azad Education Foundation, Ministry of Minority Affairs",
    state: null,
    income_min: 0,
    income_max: 200000,
    applicable_grades: ["class-9", "class-10", "class-11", "class-12", "graduate"],
    applicable_categories: ["Minority"],
    amount_inr: 25000,
    application_url: "https://scholarships.gov.in",
    description:
      "Scholarship for girl students from notified minority communities studying in Class 9 to graduation. ₹5,000 (Class 9–10) up to ₹25,000 (graduation).",
    deadline_hint: "October–November",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "lawyer",
      "doctor-mbbs",
      "architect",
      "teacher",
      "nurse",
      "dentist",
      "consultant",
      "software-engineer",
      "fashion-designer",
      "chartered-accountant",
    ],
  },
  {
    slug: "kerala-muslim-nadan",
    name: "Kerala Muslim Nadar Foundation Scholarship",
    provider: "Kerala Muslim Nadar Foundation",
    state: "KL",
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["Minority"],
    amount_inr: 20000,
    application_url: "https://www.kmnf.org",
    description:
      "Kerala-based Muslim Nadar community scholarship for higher studies — covers tuition and maintenance.",
    deadline_hint: "October–December",
    application_deadline: isoDate("2026-12-31"),
    career_relevance: ["lawyer", "doctor-mbbs", "architect", "teacher", "nurse", "dentist", "consultant"],
  },
  {
    slug: "sitaram-jindal-foundation",
    name: "Sitaram Jindal Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    state: null,
    income_min: 0,
    income_max: 400000,
    applicable_grades: ["class-11", "class-12", "graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 24000,
    application_url: "https://www.sitaramjindalfoundation.org",
    description:
      "Merit-based scholarships for Indian students from economically weaker sections — applies to most professional and graduate courses.",
    deadline_hint: "August–November",
    application_deadline: isoDate("2026-11-30"),
    career_relevance: [
      "lawyer",
      "doctor-mbbs",
      "architect",
      "teacher",
      "nurse",
      "dentist",
      "consultant",
      "software-engineer",
      "mechanical-engineer",
      "electrical-engineer",
      "civil-engineer",
      "fashion-designer",
      "robotics-engineer",
      "data-scientist",
      "chartered-accountant",
      "civil-services-ias",
    ],
  },
  {
    slug: "tata-trust-medical",
    name: "Tata Trust Medical & Healthcare Scholarship",
    provider: "Sir Dorabji Tata Trust & J.N. Tata Endowment",
    state: null,
    income_min: 0,
    income_max: 1000000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 100000,
    application_url: "https://www.dorabjitatatrust.org",
    description:
      "Tata Trust scholarships for MBBS, BDS, MDS, MD, MS, and nursing programs across India. Need and merit based.",
    deadline_hint: "March–May",
    application_deadline: isoDate("2027-05-31"),
    career_relevance: ["doctor-mbbs", "dentist", "nurse"],
  },
  {
    slug: "kalam-purskar-mahila",
    name: "APJ Abdul Kalam Women in Science Scholarship",
    provider: "Department of Science & Technology (DST)",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 200000,
    application_url: "https://online-inspire.gov.in",
    description:
      "DST INSPIRE Scholarship for women in STEM — covers tuition, research costs, and conference travel for PG / PhD programs.",
    deadline_hint: "January–March",
    application_deadline: isoDate("2027-03-31"),
    career_relevance: ["robotics-engineer", "astronaut", "data-scientist", "software-engineer", "doctor-mbbs", "dentist", "nurse"],
  },
  {
    slug: "neet-pg-scholarship-mci",
    name: "NEET-PG Post-Matric Scholarship for In-service Doctors",
    provider: "State Medical Education Departments / NBE",
    state: null,
    income_min: 0,
    income_max: 800000,
    applicable_grades: ["graduate", "postgraduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 80000,
    application_url: "https://natboard.edu.in",
    description:
      "Tuition reimbursement for in-service doctors pursuing NEET-PG seats in government medical colleges.",
    deadline_hint: "Rolling",
    application_deadline: "Rolling",
    career_relevance: ["doctor-mbbs"],
  },
  {
    slug: "nift-surat-pearl",
    name: "Surat Pearl & Textile Design Scholarship",
    provider: "Gems & Jewellery Export Promotion Council",
    state: "GJ",
    income_min: 0,
    income_max: 600000,
    applicable_grades: ["class-12", "graduate"],
    applicable_categories: ["General", "OBC", "SC", "ST", "EWS", "Minority"],
    amount_inr: 60000,
    application_url: "https://www.gjepc.org",
    description:
      "Merit-cum-means scholarship for students in jewellery and textile design programs — covers tuition and material costs.",
    deadline_hint: "August–October",
    application_deadline: isoDate("2026-10-31"),
    career_relevance: ["fashion-designer"],
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
