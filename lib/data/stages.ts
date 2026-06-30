import type { Career } from "./careers";

export type StageType =
  | "subjects"
  | "exams"
  | "colleges"
  | "training"
  | "career_outlook"
  | "skills";

/**
 * Per-stage metadata shapes. The `metadata` field on Stage is one of these,
 * narrowed by `stage_type`. Each renderer in `StageDetailPanel` reads only the
 * shape it expects, so we keep the union loose at the Stage level and rely
 * on the stage_type discriminator.
 */
export interface SubjectStageMetadata {
  required_subjects: string[];
  min_pct_class12: number;
  stream?: string;
  extra?: string;
}

export interface ExamStageEntry {
  name: string;
  conducting_body: string;
  frequency: string;
  age_limit: string;
  attempts: string;
  application_url: string;
}

export interface ExamStageMetadata {
  exams: ExamStageEntry[];
}

export interface CollegeStageMetadata {
  /** Free-form extras for the colleges stage. Programs are looked up separately via getProgramsForCareer. */
  [key: string]: unknown;
}

export interface TextHighlightStageMetadata {
  highlights: string[];
  /** Free-form extra fields preserved for richer display. */
  [key: string]: unknown;
}

export interface SkillsStageMetadata {
  skills: string[];
  [key: string]: unknown;
}

export interface Stage {
  stage_order: number;
  stage_type: StageType;
  title: string;
  subtitle: string;
  description: string;
  /** Metadata shape depends on stage_type. See the *StageMetadata types above. */
  metadata: Record<string, unknown>;
}

type StageMap = Record<Career["slug"], Stage[]>;

export const STAGES_BY_CAREER: StageMap = {
  "commercial-pilot": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 PCM Foundation",
      subtitle: "Build the physics & maths base",
      description:
        "Pilot aspirants need a rock-solid grasp of Physics, Maths, and English in Classes 11 and 12. Most airlines and flying clubs require 60%+ in Class 12 (PCM) to be eligible for the Student Pilot Licence.",
      metadata: {
        required_subjects: ["Physics", "Chemistry", "Maths", "English"],
        min_pct_class12: 60,
        stream: "Science (PCM)",
        extra: "Strong English reading & speaking is mandatory for ICAO radiotelephony.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "DGCA Medicals & Licence Exams",
      subtitle: "Class 2 → Class 1 → RTR(A) → ATPL",
      description:
        "Pass the DGCA Class 2 Medical, then upgrade to Class 1, clear the RTR(A) radiotelephony exam, and finally the Airline Transport Pilot Licence (ATPL) air navigation, meteorology, and technical exams.",
      metadata: {
        exams: [
          {
            name: "DGCA Class 2 Medical",
            conducting_body: "Directorate General of Civil Aviation (DGCA)",
            frequency: "On demand (approved medical centres)",
            age_limit: "17+ for SPL",
            attempts: "Unlimited (re-tests allowed)",
            application_url: "https://www.dgca.gov.in",
          },
          {
            name: "DGCA Class 1 Medical",
            conducting_body: "Directorate General of Civil Aviation (DGCA)",
            frequency: "On demand (approved medical centres)",
            age_limit: "18+ for PPL",
            attempts: "Unlimited (re-tests allowed)",
            application_url: "https://www.dgca.gov.in",
          },
          {
            name: "RTR(A) — Radiotelephony Operator's Licence",
            conducting_body: "Wireless Planning & Coordination Wing, DoT",
            frequency: "Twice a year",
            age_limit: "18+",
            attempts: "Unlimited",
            application_url: "https://wpc.dot.gov.in",
          },
          {
            name: "DGCA ATPL",
            conducting_body: "Directorate General of Civil Aviation (DGCA)",
            frequency: "Multiple sittings a year",
            age_limit: "23+ for CPL",
            attempts: "Unlimited",
            application_url: "https://www.dgca.gov.in",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "training",
      title: "200+ Hours of Flight Training",
      subtitle: "At a DGCA-approved flying school",
      description:
        "Complete 200 hours of solo + dual flying at a DGCA-approved FTO. Most Indian students spend 18–24 months and ₹25–45 lakh completing the full Commercial Pilot Licence (CPL) syllabus.",
      metadata: {
        highlights: [
          "200 hours of solo + dual flight time, including cross-country and instrument hours",
          "DGCA CAR Section 7 Series I Part II syllabus across 10 subjects",
          "CPL integrated programme: ~18–24 months at ₹25–45 lakh",
          "Type rating on Boeing 737 / Airbus A320 adds ₹18–25 lakh before airline placement",
        ],
        total_hours: 200,
        duration_months: 18,
        approx_cost_inr_min: 2500000,
        approx_cost_inr_max: 4500000,
        accreditation: "DGCA CAR Section 7 Series I Part II",
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "career_outlook",
      title: "Type Rating & Airline Placement",
      subtitle: "Get on a cockpit roster",
      description:
        "Indigo, Air India, Akasa and global carriers hire cadet and direct-entry first officers. A type rating on a Boeing 737 or Airbus A320 adds ₹18–25 lakh but is essential for airline employment.",
      metadata: {
        highlights: [
          "Starting salary: ₹18 LPA as first officer (IndiGo / Air India / Akasa)",
          "Mid-career captain salary: ₹65 LPA+ on domestic narrow-body fleet",
          "Top employers include IndiGo, Air India, Akasa Air, SpiceJet and Vistara",
          "Type rating (737 / A320) is mandatory for airline employment in India",
        ],
        starting_salary_inr: 1800000,
        mid_career_salary_inr: 6500000,
        top_airlines: ["IndiGo", "Air India", "Akasa Air", "SpiceJet", "Vistara"],
        type_rating_cost_inr: 2200000,
      } satisfies TextHighlightStageMetadata,
    },
  ],
  "nda-defence": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 PCM with strong English",
      subtitle: "Academic base for NDA",
      description:
        "NDA aspirants should pick PCM in Class 11 and maintain 70%+ aggregate. English is a scored paper in the NDA written exam, so reading comprehension and grammar cannot be ignored.",
      metadata: {
        required_subjects: ["Physics", "Chemistry", "Maths", "English"],
        min_pct_class12: 70,
        stream: "Science (PCM) or any stream for Army wing",
        extra: "Only unmarried males are eligible for NDA.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "UPSC NDA Written Exam",
      subtitle: "Paper I (Maths) + Paper II (GAT)",
      description:
        "The UPSC NDA exam is held twice a year. Paper I is Mathematics (300 marks), Paper II is the General Ability Test (600 marks) covering English, GK, Science, and Current Affairs.",
      metadata: {
        exams: [
          {
            name: "NDA & NA (II) Examination",
            conducting_body: "Union Public Service Commission (UPSC)",
            frequency: "Twice a year (April & September)",
            age_limit: "16.5 to 19.5 years",
            attempts: "Unlimited till age limit",
            application_url: "https://www.upsc.gov.in/examinations/national-defence-academy-nda",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "training",
      title: "5-Day SSB Interview",
      subtitle: "Screening → Psychology → GTO → Interview",
      description:
        "Cleared candidates face the Services Selection Board (SSB) — a 5-day assessment of personality, leadership, and officer-like qualities. Stages include the OIR, PPDT, psychological tests, GTO tasks, and a personal interview.",
      metadata: {
        highlights: [
          "Stage 1: Officer Intelligence Rating (OIR) + Picture Perception & Description Test (PPDT) — Day 1 screening",
          "Stage 2: Psychological Tests (TAT, WAT, SRT, SD) on Day 2",
          "Stage 2: GTO Tasks (GD, GPE, PGT, HGT, FGT, Command Task) on Day 3–4",
          "Stage 2: Personal Interview + final conference on Day 5",
          "Average selection rate: ~5% of candidates who reach SSB",
        ],
        total_days: 5,
        location: "Allahabad, Bhopal, Bengaluru, Kapurthala, Coimbatore",
        success_rate_pct: 5,
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "colleges",
      title: "3 Years at NDA Khadakwasla",
      subtitle: "Academics + military training",
      description:
        "Selected cadets spend 3 years at the National Defence Academy, Khadakwasla (Pune) doing a B.Sc / B.A / B.Tech (JNU degree), followed by 1 year at the Indian Military Academy, Air Force Academy, or Indian Naval Academy.",
      metadata: {
        highlights: [
          "3 years at NDA + 1 year at IMA / AFA / INA",
          "JNU-affiliated B.Sc / B.A / B.Tech degree awarded",
          "Fully subsidised — stipend only, no tuition fee",
        ],
        institution: "National Defence Academy, Khadakwasla",
        duration_months: 36,
        degree_awarded: "JNU B.Sc / B.A / B.Tech",
        accommodation_cost_inr: 0,
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 5,
      stage_type: "career_outlook",
      title: "Commissioned Officer Career",
      subtitle: "Lieutenant → Captain → Major → …",
      description:
        "On graduation, cadets are commissioned as Lieutenants in the Army, equivalent ranks in the Navy or Air Force, with a starting pay of ₹56,100 + military service pay, allowances, and lifelong pension.",
      metadata: {
        highlights: [
          "Starting rank: Lieutenant at ₹56,100 + Military Service Pay (₹15,500)",
          "Lifetime pension after 20 years of service",
          "Free accommodation, CSD canteen, LTC, and family medical cover",
          "Time-scale promotions: Lt → Capt (2y), Capt → Major (6y), Major → Lt Col (13y)",
        ],
        starting_rank_pay_inr: 56100,
        pension_after_20_yrs: true,
        perks: ["Free accommodation", "CSD canteen", "Leave travel concession", "Medical for family"],
      } satisfies TextHighlightStageMetadata,
    },
  ],
  "doctor-mbbs": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 PCB with 50%+",
      subtitle: "Physics, Chemistry, Biology",
      description:
        "MBBS aspirants must take Physics, Chemistry, and Biology in Class 12 with at least 50% aggregate (40% for reserved categories). English is compulsory for the NEET application.",
      metadata: {
        required_subjects: ["Physics", "Chemistry", "Biology", "English"],
        min_pct_class12: 50,
        stream: "Science (PCB)",
        extra: "Must be 17+ by 31 December of the admission year.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "NEET-UG",
      subtitle: "The single gateway to Indian medical colleges",
      description:
        "The National Eligibility cum Entrance Test (NEET-UG) is the only entry to MBBS, BDS, AYUSH, and nursing seats in India, including AIIMS and JIPMER. Conducted by NTA once a year for ~20 lakh candidates.",
      metadata: {
        exams: [
          {
            name: "NEET-UG",
            conducting_body: "National Testing Agency (NTA)",
            frequency: "Once a year (May)",
            age_limit: "17 to 25 (relaxed for reserved categories)",
            attempts: "Unlimited (no cap on attempts)",
            application_url: "https://neet.nta.nic.in",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "colleges",
      title: "All India / State Counselling",
      subtitle: "AIQ 15% + 85% state quota",
      description:
        "After NEET, 15% of seats in government colleges are filled via All India Quota (AIQ) counselling by MCC. The remaining 85% are filled by state counselling bodies. Top ranks open AIIMS Delhi, JIPMER, and top state GMCs.",
      metadata: {
        aiq_seats_pct: 15,
        state_quota_pct: 85,
        top_colleges: ["AIIMS Delhi", "JIPMER Puducherry", "CMC Vellore", "KEM Mumbai"],
        cut_off_general: 720,
        cut_off_general_min: 138,
      } satisfies CollegeStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "training",
      title: "5.5 Years of MBBS",
      subtitle: "4.5 yrs academics + 1 yr internship",
      description:
        "MBBS spans 4.5 years of academic and clinical training followed by a compulsory 1-year rotating internship. After internship, graduates register with the NMC / state medical council to practise.",
      metadata: {
        highlights: [
          "4.5 years academic + 1 year compulsory rotating internship",
          "Curriculum prescribed by the National Medical Commission (NMC)",
          "Register with NMC / state medical council after internship",
        ],
        total_years: 5.5,
        internship_months: 12,
        degree_awarded: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        accrediting_body: "National Medical Commission (NMC)",
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 5,
      stage_type: "career_outlook",
      title: "NEET-PG & Specialisation",
      subtitle: "MD / MS / Super-speciality",
      description:
        "Most doctors write NEET-PG after internship for MD/MS seats. Cardiology, neurosurgery, paediatrics, and radiology are popular specialisations with starting salaries of ₹12–25 LPA.",
      metadata: {
        highlights: [
          "Next milestone: NEET-PG for MD / MS after internship",
          "Popular branches: MD Medicine, MS Surgery, Pediatrics, Radiology, Dermatology",
          "PG resident salary: ₹12 LPA starting; senior consultant ₹25–40 LPA",
          "Super-speciality (DM/MCh) opens cardiology / neurosurgery / oncology after MD",
        ],
        next_exam: "NEET-PG (NBE)",
        specialisations: ["MD Medicine", "MS Surgery", "Pediatrics", "Radiology", "Dermatology"],
        pg_salary_inr: 1200000,
        consultant_salary_inr: 3000000,
      } satisfies TextHighlightStageMetadata,
    },
  ],
  "fashion-designer": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 in any stream",
      subtitle: "Sketch, stitch, observe",
      description:
        "NIFT and NID do not enforce a specific stream. Students from any stream with a strong design portfolio, sketchbook, and fashion awareness can apply. Building a portfolio early in Class 11 is the biggest differentiator.",
      metadata: {
        required_subjects: [],
        min_pct_class12: 50,
        stream: "Any stream (Arts / Science / Commerce)",
        extra: "Start a portfolio: sketches, mood boards, garment photos.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "NIFT / NID Entrance",
      subtitle: "Design aptitude + drawing + interview",
      description:
        "NIFT has the GAT (General Ability Test) and CAT (Creative Ability Test) followed by a Situation Test. NID has a Design Aptitude Test (DAT) Prelims and Mains. Both test observation, creativity, and problem-solving.",
      metadata: {
        exams: [
          {
            name: "NIFT Entrance Examination (GAT + CAT + Situation Test)",
            conducting_body: "National Institute of Fashion Technology",
            frequency: "Once a year (January–March)",
            age_limit: "No upper age limit (must have passed Class 12)",
            attempts: "No limit on age or attempts",
            application_url: "https://www.nift.ac.in",
          },
          {
            name: "NID Design Aptitude Test (DAT Prelims + Mains)",
            conducting_body: "National Institute of Design",
            frequency: "Once a year (January Prelims → April Mains)",
            age_limit: "No upper age limit (must have passed Class 12)",
            attempts: "No limit on attempts",
            application_url: "https://www.nid.edu",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "colleges",
      title: "Top Design Schools",
      subtitle: "NIFT, NID, Pearl, SID",
      description:
        "NIFT has 19 campuses; NID Ahmedabad is the most prestigious undergraduate design school. Pearl Academy and Symbiosis Institute of Design (SID) are strong private alternatives with industry placements.",
      metadata: {
        top_colleges: ["NIFT Delhi", "NIFT Mumbai", "NID Ahmedabad", "Pearl Academy Delhi", "SID Pune"],
        duration_years: 4,
        degree_awarded: "B.Des (Bachelor of Design)",
      } satisfies CollegeStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "skills",
      title: "Pattern-making, CAD, Textiles",
      subtitle: "Core technical craft",
      description:
        "Master pattern-making, draping, garment construction, fabric science, and design software (CLO 3D, Adobe Illustrator, Photoshop). Internships with designers like Sabyasachi, Anita Dongre, or export houses are critical.",
      metadata: {
        skills: ["Pattern-making", "Draping", "Textile science", "CLO 3D", "Adobe Illustrator", "Adobe Photoshop", "Garment construction"],
        internship_companies: ["Sabyasachi", "Anita Dongre", "Manish Malhotra", "Myntra Design"],
      } satisfies SkillsStageMetadata,
    },
    {
      stage_order: 5,
      stage_type: "career_outlook",
      title: "Fashion Houses, Brands, Own Label",
      subtitle: "Junior designer to creative director",
      description:
        "Starting salaries range from ₹4.5 LPA at mid-size brands to ₹10 LPA at top houses. After 5–7 years and a signature collection, designers launch independent labels. Lakmé Fashion Week and FDCI are showcase milestones.",
      metadata: {
        highlights: [
          "Starting salary: ₹4.5 LPA at mid-size brands; ₹8–10 LPA at top houses",
          "Mid-career: ₹15 LPA+ at senior designer level",
          "5–7 years in: launch an independent signature label",
          "Showcases: Lakmé Fashion Week, FDCI, India Runway Week",
        ],
        starting_salary_inr: 450000,
        mid_career_salary_inr: 1500000,
        top_labels: ["Sabyasachi", "Manish Malhotra", "Anita Dongre", "Rohit Bal"],
        showcases: ["Lakmé Fashion Week", "FDCI", "India Runway Week"],
      } satisfies TextHighlightStageMetadata,
    },
  ],
  "robotics-engineer": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 PCM + Computer Science",
      subtitle: "Strong maths is non-negotiable",
      description:
        "Robotics sits at the intersection of mechanical, electrical, and computer science. Aspirants need 75%+ in Class 12 PCM, with calculus and linear algebra as the language of robot kinematics and control systems.",
      metadata: {
        required_subjects: ["Physics", "Chemistry", "Maths", "Computer Science (optional)"],
        min_pct_class12: 75,
        stream: "Science (PCM)",
        extra: "Start learning Python and basic electronics in Class 11.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "JEE Main & Advanced",
      subtitle: "Gateway to IITs, IISc, IIITs",
      description:
        "JEE Main is the entry to NITs, IIITs, and GFTIs, while JEE Advanced is mandatory for the 23 IITs. Top-500 ranks in Advanced are needed for the most competitive branches like CSE, EE, and Mechanical at IIT Bombay / Madras.",
      metadata: {
        exams: [
          {
            name: "JEE Main",
            conducting_body: "National Testing Agency (NTA)",
            frequency: "Twice a year (January & April)",
            age_limit: "No upper age limit (must have passed Class 12)",
            attempts: "3 consecutive attempts",
            application_url: "https://jeemain.nta.nic.in",
          },
          {
            name: "JEE Advanced",
            conducting_body: "IITs (rotating host IIT)",
            frequency: "Once a year (June)",
            age_limit: "No upper age limit",
            attempts: "2 consecutive years",
            application_url: "https://jeeadv.ac.in",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "colleges",
      title: "B.Tech at IIT / IISc / IIIT",
      subtitle: "Mechanical, EE, CSE, or AI/ML",
      description:
        "Top choices are IIT Bombay, IIT Madras, IIT Kanpur, IISc Bangalore (4-year BS / M.Tech), and IIIT Hyderabad (CSE + dual degree). Many also add an MS abroad for control systems or computer vision.",
      metadata: {
        top_colleges: ["IIT Bombay", "IIT Madras", "IISc Bangalore", "IIIT Hyderabad", "IIT Kanpur"],
        degrees: ["B.Tech CSE", "B.Tech EE", "B.Tech Mechanical", "B.Tech AI/ML", "B.S. (IISc)"],
      } satisfies CollegeStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "skills",
      title: "ROS, Computer Vision, Control Systems",
      subtitle: "The 5 skill pillars",
      description:
        "Build depth in (1) Robot Operating System (ROS), (2) computer vision with OpenCV / PyTorch, (3) control theory (PID, MPC), (4) SLAM and motion planning, and (5) embedded C / C++. Compete in Robocon and Formula Student.",
      metadata: {
        skills: ["Robot Operating System (ROS)", "Python", "C++", "PyTorch", "OpenCV", "MATLAB", "SolidWorks", "SLAM", "Control theory (PID / MPC)"],
        competitions: ["ABU Robocon", "Formula Student", "DST-INSPIRE Manak"],
        recommended_projects: ["Line-follower + SLAM", "Drone with CV", "6-DOF robotic arm"],
      } satisfies SkillsStageMetadata,
    },
    {
      stage_order: 5,
      stage_type: "career_outlook",
      title: "R&D in India & Abroad",
      subtitle: "ISRO, DRDO, Bosch, Amazon Robotics",
      description:
        "Robotics engineers in India earn ₹8–18 LPA at entry level and ₹25–60 LPA after 5 years at top R&D labs. Global placements (Boston Dynamics, Tesla Optimus, NASA JPL) open up with an MS from CMU, ETH, or Stanford.",
      metadata: {
        highlights: [
          "Entry level in India: ₹8–18 LPA at R&D / product companies",
          "5 years in: ₹25–60 LPA at senior robotics roles",
          "Top employers in India: ISRO, DRDO, Bosch, Tata Elxsi, Amazon Robotics",
          "Top MS schools abroad: Carnegie Mellon, ETH Zurich, Stanford, University of Michigan",
        ],
        starting_salary_inr: 800000,
        mid_career_salary_inr: 2500000,
        top_employers: ["ISRO", "DRDO", "Bosch India", "Tata Elxsi", "Amazon Robotics", "Boston Dynamics"],
        abroad_ms_top_schools: ["Carnegie Mellon", "ETH Zurich", "Stanford", "University of Michigan"],
      } satisfies TextHighlightStageMetadata,
    },
  ],
  astronaut: [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 PCM, 75%+",
      subtitle: "Maths + Physics are the launchpad",
      description:
        "Astronaut selection favours PCM students with 75%+ in Class 12. Biology is not required but exposure to life sciences is a plus for the Gaganyaan biomedical experiments.",
      metadata: {
        required_subjects: ["Physics", "Chemistry", "Maths", "English"],
        min_pct_class12: 75,
        stream: "Science (PCM)",
        extra: "Physical fitness — 60 m sprint under 8.5 sec, push-ups, swimming 50 m.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "IIST Admission Test (JEE Advanced based)",
      subtitle: "Direct entry into India's space scientist pool",
      description:
        "The Indian Institute of Space Science and Technology (IIST) admits students through JEE Advanced ranks followed by the IIST Admission Test counselling. ISRO also recruits through ICRB for Scientist/Engineer 'SC' posts.",
      metadata: {
        exams: [
          {
            name: "JEE Advanced",
            conducting_body: "IITs (rotating host IIT)",
            frequency: "Once a year (June)",
            age_limit: "No upper age limit",
            attempts: "2 consecutive years",
            application_url: "https://jeeadv.ac.in",
          },
          {
            name: "IIST Admission Counselling",
            conducting_body: "IIST Thiruvananthapuram (admission via JEE Advanced ranks)",
            frequency: "Once a year after JEE Advanced results",
            age_limit: "JEE Advanced — no upper limit",
            attempts: "As per JEE Advanced rules",
            application_url: "https://www.iist.ac.in",
          },
          {
            name: "ISRO ICRB (Scientist/Engineer 'SC')",
            conducting_body: "ISRO Centralised Recruitment Board",
            frequency: "Once a year (whenever vacancies are notified)",
            age_limit: "28 years (relaxed for SC/ST)",
            attempts: "No limit (subject to age)",
            application_url: "https://www.isro.gov.in/Careers.html",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "colleges",
      title: "B.Tech at IIST Thiruvananthapuram",
      subtitle: "India's only space undergrad institute",
      description:
        "IIST offers a 4-year B.Tech in Aerospace Engineering, Avionics, and Physical Sciences, plus a 5-year Dual Degree. A minimum 7.5 CGPA and a service bond to ISRO of 3 years are mandatory.",
      metadata: {
        institution: "IIST Thiruvananthapuram",
        duration_years: 4,
        isro_bond_years: 3,
        degree_awarded: "B.Tech Aerospace / Avionics",
      } satisfies CollegeStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "training",
      title: "ISRO Selection & Gaganyaan Training",
      subtitle: "Astronaut wings at IAF + ISRO",
      description:
        "India's four Gaganyaan astronaut-designates (Group Captains Prasanth, Ajit, Angad, Shubhanshu) trained at the Yuri Gagarin Cosmonaut Training Centre, Russia, and at IAF's Institute of Aerospace Medicine, Bengaluru.",
      metadata: {
        highlights: [
          "Centrifuge g-tolerance training up to 8g",
          "Microgravity parabolic flight on zero-g aircraft",
          "Ejection & survival training (forest / desert / water)",
          "Space medicine and biomedical experiments modules",
        ],
        selection_body: "ISRO + IAF Institute of Aerospace Medicine (IAM)",
        training_duration_months: 24,
        modules: [
          "Centrifuge g-tolerance",
          "Microgravity parabolic flights",
          "Ejection & survival",
          "Space medicine",
        ],
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 5,
      stage_type: "career_outlook",
      title: "ISRO Scientist / Astronaut Corps",
      subtitle: "Payload Specialist → Mission Specialist → Commander",
      description:
        "ISRO career path is Scientist/Engineer 'SC' → 'SD' → 'SE' → 'SF' with pay scales from ₹56,100 to ₹2,50,000+ under 7th CPC. Crewed Gaganyaan missions are planned for 2026–2027.",
      metadata: {
        highlights: [
          "Cadre progression: Scientist/Engineer SC → SD → SE → SF",
          "7th CPC pay: ₹56,100 starting → ₹2,50,000+ at senior levels",
          "Crewed Gaganyaan missions planned for 2026–2027",
          "Long-horizon missions: Bharatiya Antariksh Station, lunar landing 2040",
        ],
        starting_pay_inr: 56100,
        mid_career_pay_inr: 120000,
        future_missions: ["Gaganyaan-1 (uncrewed)", "Gaganyaan crewed", "Lunar landing 2040"],
      } satisfies TextHighlightStageMetadata,
    },
  ],
  "civil-services-ias": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 in any stream",
      subtitle: "Strong reading & writing habits",
      description:
        "UPSC does not restrict stream. Pick subjects you can score 80%+ in — every graduate (any discipline) is eligible. A reading habit of The Hindu / Indian Express from Class 11 is the single biggest long-term advantage.",
      metadata: {
        required_subjects: [],
        min_pct_class12: 50,
        stream: "Any stream",
        extra: "Start NCERTs (Class 6–12) for History, Geography, Polity, Economics.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "UPSC Civil Services Examination",
      subtitle: "Prelims → Mains → Interview",
      description:
        "UPSC CSE is held once a year. Prelims is objective (GS + CSAT, 400 marks). Mains is 9 descriptive papers (1750 marks). The Interview is 275 marks. General category gets 6 attempts till age 32.",
      metadata: {
        exams: [
          {
            name: "UPSC Civil Services Examination (CSE)",
            conducting_body: "Union Public Service Commission (UPSC)",
            frequency: "Once a year (June Prelims → Sept Mains → Mar–Apr Interview)",
            age_limit: "21 to 32 (relaxed: OBC +3, SC/ST +5, PwD +10)",
            attempts: "General — 6; OBC — 9; SC/ST — unlimited (till age limit)",
            application_url: "https://www.upsc.gov.in/examinations/civil-services-examination-cse",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "training",
      title: "12–18 Months Self-Study / Coaching",
      subtitle: "Foundation course at LBSNAA",
      description:
        "After cracking the interview, candidates join the LBSNAA Foundation Course in Mussoorie for ~3 months of orientation, followed by cadre allocation and district training of 12–18 months.",
      metadata: {
        highlights: [
          "LBSNAA Foundation Course: ~3 months of orientation in Mussoorie",
          "District training: 12–18 months in cadre state",
          "Recommended reading: NCERT 6–12, Laxmikanth, Spectrum, Ramesh Singh",
          "Suggested prep: ~1,200 hours of focused study over 12–18 months",
        ],
        lbsnaa_foundation_months: 3,
        district_training_months: 18,
        min_study_hours: 1200,
        recommended_books: [
          "NCERT Class 6–12",
          "Laxmikanth — Polity",
          "Spectrum — Modern History",
          "Ramesh Singh — Indian Economy",
        ],
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "career_outlook",
      title: "SDM → DM → Secretary",
      subtitle: "Cadre, ministry, or international postings",
      description:
        "IAS officers start as Sub-Divisional Magistrates, then become District Magistrates, Secretaries, Chief Secretaries, and Cabinet Secretary. The Indian Foreign Service (IFS) branch offers diplomatic postings worldwide.",
      metadata: {
        highlights: [
          "Starting role: Sub-Divisional Magistrate (SDM) in home cadre",
          "Mid-career: District Magistrate → Secretary to Government",
          "Apex: Chief Secretary, Cabinet Secretary, or international postings via IFS",
          "Post-retirement: Governor, public sector boards, think tanks, UN agencies",
        ],
        starting_pay_inr: 56100,
        pay_level_7cpc: 10,
        retirement_age: 60,
        post_retirement_roles: ["Governor", "Public sector boards", "Think tanks", "UN agencies"],
      } satisfies TextHighlightStageMetadata,
    },
  ],
  "chartered-accountant": [
    {
      stage_order: 1,
      stage_type: "subjects",
      title: "Class 11–12 Commerce / Science",
      subtitle: "Accounts, Maths, English",
      description:
        "CA Foundation can be written after Class 10, but most students register after Class 12 Commerce. Maths (60%+) and English are essential. Accounts and Business Studies form the core foundation.",
      metadata: {
        required_subjects: ["Accountancy", "Business Studies", "Maths/Economics", "English"],
        min_pct_class12: 50,
        stream: "Commerce (preferred) or Science/Arts",
        extra: "Register with ICAI for Foundation course after Class 10.",
      } satisfies SubjectStageMetadata,
    },
    {
      stage_order: 2,
      stage_type: "exams",
      title: "CA Foundation → Intermediate → Final",
      subtitle: "Three ICAI exams, four months apart",
      description:
        "The CA journey is a 3-level ladder — Foundation (post-Class 12), Intermediate (post-Foundation + 4 months study), and Final (post-Intermediate + 6 months). Articleship runs parallel to Inter/Final.",
      metadata: {
        exams: [
          {
            name: "CA Foundation",
            conducting_body: "Institute of Chartered Accountants of India (ICAI)",
            frequency: "Twice a year (May & November)",
            age_limit: "No upper age limit (must have passed Class 12)",
            attempts: "No limit on attempts",
            application_url: "https://www.icai.org",
          },
          {
            name: "CA Intermediate",
            conducting_body: "Institute of Chartered Accountants of India (ICAI)",
            frequency: "Twice a year (May & November)",
            age_limit: "No upper age limit",
            attempts: "No limit (subject to course duration)",
            application_url: "https://www.icai.org",
          },
          {
            name: "CA Final",
            conducting_body: "Institute of Chartered Accountants of India (ICAI)",
            frequency: "Twice a year (May & November)",
            age_limit: "No upper age limit",
            attempts: "No limit (subject to course duration)",
            application_url: "https://www.icai.org",
          },
        ],
      } satisfies ExamStageMetadata,
    },
    {
      stage_order: 3,
      stage_type: "training",
      title: "3-Year Articleship",
      subtitle: "Practical training under a CA",
      description:
        "Articleship is 3 years of paid practical training under a practising CA, covering audit, taxation, accounting, and advisory. ICAI mandates 115 hours of ITT and 100 hours of Orientation Programme.",
      metadata: {
        highlights: [
          "3 years of paid practical training under a practising CA",
          "115 hours of Integrated Training Technology (ITT) mandatory",
          "100 hours of Orientation Programme (OPP) mandatory",
          "Stipend range: ₹1,000 – ₹25,000 / month by year",
        ],
        duration_months: 36,
        stipend_inr_min: 1000,
        stipend_inr_max: 25000,
        itt_hours: 115,
        opp_hours: 100,
      } satisfies TextHighlightStageMetadata,
    },
    {
      stage_order: 4,
      stage_type: "colleges",
      title: "ICAI BOS & Optional Coaching",
      subtitle: "B.Com / BBA along the way",
      description:
        "Most CAs pursue B.Com / BBA from DU, IGNOU, or Symbiosis in parallel. ICAI's Board of Studies (BOS) publishes the study material. Optional coaching: Aldine CA, Unacademy CA, Swapnil Patni.",
      metadata: {
        parallel_degrees: ["B.Com (DU SOL)", "BBA (IGNOU)", "B.Com (Symbiosis)"],
        icai_material: "BOS publications",
        top_coaching: ["Aldine Academy", "CA Wallah", "Swapnil Patni Classes", "Unacademy CA"],
      } satisfies CollegeStageMetadata,
    },
    {
      stage_order: 5,
      stage_type: "career_outlook",
      title: "Audit, Tax, Advisory, CFO Track",
      subtitle: "Articles → Manager → Partner → CFO",
      description:
        "CAs earn ₹7–10 LPA at Big 4 entry, ₹15–25 LPA mid-level, and ₹40 LPA–1 Cr+ at partner level. Top 1% become CFOs of listed companies, partners of Deloitte / EY / PwC / KPMG, or run their own practice.",
      metadata: {
        highlights: [
          "Big 4 entry: ₹7–10 LPA",
          "Mid-career manager: ₹15–25 LPA",
          "Partner: ₹40 LPA – ₹1 Cr+",
          "CFO of listed company: ₹1 Cr+ including ESOPs",
        ],
        big4_starting_inr: 700000,
        partner_min_inr: 4000000,
        cfo_top_inr: 20000000,
        top_firms: ["Deloitte", "EY", "PwC", "KPMG", "Grant Thornton", "BDO"],
      } satisfies TextHighlightStageMetadata,
    },
  ],
};

export const getStagesForCareer = (careerSlug: Career["slug"]): Stage[] => {
  return STAGES_BY_CAREER[careerSlug] ?? [];
};
