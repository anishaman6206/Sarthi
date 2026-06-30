import type { Career } from "./careers";

export type Accreditation =
  | "DGCA"
  | "AICTE"
  | "NBA"
  | "UGC"
  | "NIFT"
  | "NMC"
  | "MCI"
  | "ISRO"
  | "NAAC"
  | "ICAI"
  | "LBSNAA"
  | "ISI";

export interface CollegeProgram {
  course_name: string;
  duration_months: number;
  fees_inr_min: number;
  fees_inr_max: number;
  placement_pct: number;
  avg_salary_inr: number;
  accreditation: Accreditation;
  description: string;
  application_url?: string;
}

export interface College {
  name: string;
  city: string;
  state: string;
  website: string;
  programs: CollegeProgram[];
}

export interface CollegeProgramEntry {
  program: CollegeProgram;
  college: College;
}

const COLLEGES_BY_CAREER: Record<Career["slug"], College[]> = {
  "commercial-pilot": [
    {
      name: "Indira Gandhi Institute of Aeronautics",
      city: "Tumkur",
      state: "Karnataka",
      website: "https://www.igia-india.in",
      programs: [
        {
          course_name: "Commercial Pilot Licence (CPL) integrated",
          duration_months: 18,
          fees_inr_min: 2500000,
          fees_inr_max: 3800000,
          placement_pct: 88,
          avg_salary_inr: 1800000,
          accreditation: "DGCA",
          description:
            "DGCA-approved integrated CPL programme with 200 hours of flight time on single- and multi-engine aircraft.",
        },
      ],
    },
    {
      name: "Rajiv Gandhi Aviation Academy",
      city: "Kochi",
      state: "Kerala",
      website: "https://www.rgaa.in",
      programs: [
        {
          course_name: "CPL with multi-engine rating",
          duration_months: 20,
          fees_inr_min: 2800000,
          fees_inr_max: 4200000,
          placement_pct: 85,
          avg_salary_inr: 1700000,
          accreditation: "DGCA",
          description:
            "Kerala's premier DGCA-approved flying school, recognised by IndiGo and Air India for cadet pilot programmes.",
        },
      ],
    },
    {
      name: "Bombay Flying Club",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.bombayflyingclub.com",
      programs: [
        {
          course_name: "Commercial Pilot Licence",
          duration_months: 24,
          fees_inr_min: 3200000,
          fees_inr_max: 4500000,
          placement_pct: 82,
          avg_salary_inr: 1900000,
          accreditation: "DGCA",
          description:
            "India's oldest DGCA-approved FTO, founded in 1928, training at Juhu Aerodrome in the heart of Mumbai.",
        },
      ],
    },
    {
      name: "Indira Gandhi Rashtriya Uran Akademi",
      city: "Raebareli",
      state: "Uttar Pradesh",
      website: "https://www.igrua.gov.in",
      programs: [
        {
          course_name: "CPL integrated (government FTO)",
          duration_months: 18,
          fees_inr_min: 2000000,
          fees_inr_max: 3200000,
          placement_pct: 90,
          avg_salary_inr: 1800000,
          accreditation: "DGCA",
          description:
            "Central-government-funded flying school at Raebareli with one of the largest fleets in South Asia.",
        },
      ],
    },
    {
      name: "Madhya Pradesh Flying Club",
      city: "Bhopal",
      state: "Madhya Pradesh",
      website: "https://www.mpfc.gov.in",
      programs: [
        {
          course_name: "Commercial Pilot Licence",
          duration_months: 22,
          fees_inr_min: 2200000,
          fees_inr_max: 3500000,
          placement_pct: 80,
          avg_salary_inr: 1650000,
          accreditation: "DGCA",
          description:
            "MP-state-run DGCA-approved FTO with sister campuses at Indore and Gwalior.",
        },
      ],
    },
  ],
  "nda-defence": [
    {
      name: "National Defence Academy (NDA)",
      city: "Khadakwasla, Pune",
      state: "Maharashtra",
      website: "https://www.nda.nic.in",
      programs: [
        {
          course_name: "NDA + B.Sc / B.A / B.Tech (JNU)",
          duration_months: 36,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1200000,
          accreditation: "UGC",
          description:
            "Tri-service academy training future officers for the Indian Army, Navy, and Air Force. Cadets graduate with a JNU degree and commission as Lieutenants.",
        },
      ],
    },
    {
      name: "Indian Military Academy (IMA)",
      city: "Dehradun",
      state: "Uttarakhand",
      website: "https://www.indianarmy.nic.in",
      programs: [
        {
          course_name: "IMA — 18-month military training (post-NDA / CDS)",
          duration_months: 18,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1100000,
          accreditation: "UGC",
          description:
            "The premier Army officer training academy — pass-out parades at the iconic Chetwode Hall.",
        },
      ],
    },
    {
      name: "Indian Naval Academy",
      city: "Ezhimala, Kannur",
      state: "Kerala",
      website: "https://www.indiannavy.nic.in",
      programs: [
        {
          course_name: "Naval Academy (post-NDA / CDS) — B.Tech (JNU)",
          duration_months: 48,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1150000,
          accreditation: "UGC",
          description:
            "Cadets earn a B.Tech in Marine / Mechanical / Electrical while training at Ezhimala, Kerala.",
        },
      ],
    },
    {
      name: "Air Force Academy",
      city: "Dundigal, Hyderabad",
      state: "Telangana",
      website: "https://www.indianairforce.nic.in",
      programs: [
        {
          course_name: "AFA Flying Training (post- CDS / AFCAT)",
          duration_months: 74,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1150000,
          accreditation: "UGC",
          description:
            "Indian Air Force's premier flying training academy at Dundigal. Cadets earn wings and commission as Flying Officers.",
        },
      ],
    },
    {
      name: "Officers Training Academy (OTA)",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.indianarmy.nic.in",
      programs: [
        {
          course_name: "Short Service Commission (SSC) — 49 weeks",
          duration_months: 11,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1000000,
          accreditation: "UGC",
          description:
            "Fast-track Army officer training for graduates through CDS entry; results in SSC commission.",
        },
      ],
    },
  ],
  "doctor-mbbs": [
    {
      name: "All India Institute of Medical Sciences (AIIMS Delhi)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.aiims.edu",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 5856,
          fees_inr_max: 5856,
          placement_pct: 100,
          avg_salary_inr: 1800000,
          accreditation: "NMC",
          description:
            "India's #1 medical college — subsidised education, world-class research, and the most-coveted NEET seat.",
        },
      ],
    },
    {
      name: "Christian Medical College (CMC Vellore)",
      city: "Vellore",
      state: "Tamil Nadu",
      website: "https://www.cmch-vellore.edu",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 84000,
          fees_inr_max: 230000,
          placement_pct: 100,
          avg_salary_inr: 1500000,
          accreditation: "NMC",
          description:
            "One of India's top private medical colleges with 100% NEET-based admission and a Christian service commitment.",
        },
      ],
    },
    {
      name: "JIPMER",
      city: "Puducherry",
      state: "Puducherry",
      website: "https://www.jipmer.edu.in",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 12000,
          fees_inr_max: 12000,
          placement_pct: 100,
          avg_salary_inr: 1600000,
          accreditation: "NMC",
          description:
            "Jawaharlal Institute of Postgraduate Medical Education & Research — central government institution with minimal fees.",
        },
      ],
    },
    {
      name: "KEM Hospital & Seth G.S. Medical College",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.kem.edu",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 110000,
          fees_inr_max: 150000,
          placement_pct: 100,
          avg_salary_inr: 1400000,
          accreditation: "NMC",
          description:
            "Attached to Asia's largest hospital — unrivalled clinical exposure from day one.",
        },
      ],
    },
    {
      name: "Maulana Azad Medical College (MAMC)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.mamc.delhi.gov.in",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 15000,
          fees_inr_max: 50000,
          placement_pct: 100,
          avg_salary_inr: 1450000,
          accreditation: "NMC",
          description:
            "Delhi University–affiliated premier medical college, consistently in top-10 NEET cutoffs.",
        },
      ],
    },
    {
      name: "King George's Medical University (KGMU)",
      city: "Lucknow",
      state: "Uttar Pradesh",
      website: "https://www.kgmu.org",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 54000,
          fees_inr_max: 65000,
          placement_pct: 100,
          avg_salary_inr: 1300000,
          accreditation: "NMC",
          description:
            "UP's flagship government medical university — huge patient load and 100+ years of clinical legacy.",
        },
      ],
    },
    {
      name: "Madras Medical College (MMC)",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.mmc.tn.gov.in",
      programs: [
        {
          course_name: "MBBS",
          duration_months: 66,
          fees_inr_min: 18000,
          fees_inr_max: 25000,
          placement_pct: 100,
          avg_salary_inr: 1350000,
          accreditation: "NMC",
          description:
            "One of the oldest medical colleges in Asia (1835) attached to the Rajiv Gandhi Govt General Hospital.",
        },
      ],
    },
  ],
  "fashion-designer": [
    {
      name: "National Institute of Fashion Technology (NIFT Delhi)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.nift.ac.in",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 95,
          avg_salary_inr: 850000,
          accreditation: "NIFT",
          description:
            "NIFT Delhi is India's #1 fashion school, with 19 campuses and direct pipelines to Sabyasachi, H&M, Myntra.",
        },
      ],
    },
    {
      name: "National Institute of Design (NID Ahmedabad)",
      city: "Ahmedabad",
      state: "Gujarat",
      website: "https://www.nid.edu",
      programs: [
        {
          course_name: "B.Des in Textile & Apparel Design",
          duration_months: 48,
          fees_inr_min: 700000,
          fees_inr_max: 900000,
          placement_pct: 94,
          avg_salary_inr: 900000,
          accreditation: "AICTE",
          description:
            "India's most prestigious undergraduate design school, with a strong foundation in craft, textiles, and product design.",
        },
      ],
    },
    {
      name: "Pearl Academy",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.pearlacademy.com",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 1400000,
          fees_inr_max: 1800000,
          placement_pct: 90,
          avg_salary_inr: 750000,
          accreditation: "UGC",
          description:
            "Private design school with strong industry tie-ups and showrooms at its Delhi, Mumbai, Jaipur, and Bangalore campuses.",
        },
      ],
    },
    {
      name: "Symbiosis Institute of Design (SID Pune)",
      city: "Pune",
      state: "Maharashtra",
      website: "https://www.sid.edu.in",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 1200000,
          fees_inr_max: 1500000,
          placement_pct: 88,
          avg_salary_inr: 700000,
          accreditation: "UGC",
          description:
            "Symbiosis's flagship design school; liberal-arts foundation plus design studio across fashion, communication, and product.",
        },
      ],
    },
    {
      name: "IIFT (Indian Institute of Fashion Technology)",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iiftmumbai.com",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 850000,
          placement_pct: 80,
          avg_salary_inr: 600000,
          accreditation: "AICTE",
          description:
            "Mumbai-based fashion institute affiliated to SNDT Women's University; access to the city's fashion industry network.",
        },
      ],
    },
    {
      name: "MIT Institute of Design (MIT-ID)",
      city: "Pune",
      state: "Maharashtra",
      website: "https://www.mitid.edu.in",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 1300000,
          fees_inr_max: 1600000,
          placement_pct: 87,
          avg_salary_inr: 720000,
          accreditation: "UGC",
          description:
            "MAEER's MIT group of institutes — strong industry projects with Tata, Mahindra, and export houses.",
        },
      ],
    },
  ],
  "robotics-engineer": [
    {
      name: "Indian Institute of Technology Bombay (IITB)",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "B.Tech Computer Science / Mechanical / Electrical",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2500000,
          accreditation: "AICTE",
          description:
            "India's #1 ranked engineering school — best robotics research lab (SRA, ARK) and highest robotics placements.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Madras (IITM)",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.iitm.ac.in",
      programs: [
        {
          course_name: "B.Tech CSE / Mechanical / EE + dual in AI",
          duration_months: 60,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2400000,
          accreditation: "AICTE",
          description:
            "IIT Madras hosts the Robert Bosch Centre for Data Science and AI — a top destination for robotics research.",
        },
      ],
    },
    {
      name: "Indian Institute of Science (IISc)",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.iisc.ac.in",
      programs: [
        {
          course_name: "B.S. (Research) in Electrical / Mechanical / Computer Science",
          duration_months: 48,
          fees_inr_min: 200000,
          fees_inr_max: 400000,
          placement_pct: 100,
          avg_salary_inr: 2200000,
          accreditation: "AICTE",
          description:
            "India's #1 research university, IISc offers a unique 4-year B.S. (Research) with direct PhD pathways.",
        },
      ],
    },
    {
      name: "IIIT Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      website: "https://www.iiit.ac.in",
      programs: [
        {
          course_name: "B.Tech CSE + MS by Research in Robotics / AI",
          duration_months: 60,
          fees_inr_min: 1200000,
          fees_inr_max: 1600000,
          placement_pct: 100,
          avg_salary_inr: 2300000,
          accreditation: "AICTE",
          description:
            "IIIT Hyderabad is the top destination for CS + AI/robotics dual degrees, with strong industry research labs.",
        },
      ],
    },
    {
      name: "BITS Pilani",
      city: "Pilani",
      state: "Rajasthan",
      website: "https://www.bits-pilani.ac.in",
      programs: [
        {
          course_name: "B.E. (Hons) Mechanical / Electronics / CS",
          duration_months: 48,
          fees_inr_min: 1000000,
          fees_inr_max: 1400000,
          placement_pct: 98,
          avg_salary_inr: 2000000,
          accreditation: "AICTE",
          description:
            "Practice-school model with two industry internships and strong robotics/embedded systems clubs.",
        },
      ],
    },
    {
      name: "NIT Tiruchirappalli (NIT Trichy)",
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      website: "https://www.nitt.edu",
      programs: [
        {
          course_name: "B.Tech Mechanical / Electrical / CSE",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 95,
          avg_salary_inr: 1500000,
          accreditation: "AICTE",
          description:
            "NIT Trichy is the top-rated NIT with a strong robotics / autonomous-systems student community.",
        },
      ],
    },
    {
      name: "Vellore Institute of Technology (VIT Vellore)",
      city: "Vellore",
      state: "Tamil Nadu",
      website: "https://vit.ac.in",
      programs: [
        {
          course_name: "B.Tech CSE / Mechanical / Robotics & Automation",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 92,
          avg_salary_inr: 1200000,
          accreditation: "AICTE",
          description:
            "VIT offers India's first dedicated B.Tech in Robotics & Automation; built-in robotics labs.",
        },
      ],
    },
  ],
  astronaut: [
    {
      name: "Indian Institute of Space Science and Technology (IIST)",
      city: "Thiruvananthapuram",
      state: "Kerala",
      website: "https://www.iist.ac.in",
      programs: [
        {
          course_name: "B.Tech Aerospace Engineering / Avionics",
          duration_months: 48,
          fees_inr_min: 300000,
          fees_inr_max: 600000,
          placement_pct: 95,
          avg_salary_inr: 1300000,
          accreditation: "ISRO",
          description:
            "India's only undergraduate space institute, owned by the Department of Space. Minimum 7.5 CGPA required for ISRO absorption.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Bombay (IITB) — Aerospace Engineering",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "B.Tech Aerospace Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2200000,
          accreditation: "AICTE",
          description:
            "IITB Aerospace Engineering — strong GNC / propulsion / satellite-systems specialisations. Direct pathway to ISRO and DRDO.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Madras (IITM) — Aerospace Engineering",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.iitm.ac.in",
      programs: [
        {
          course_name: "B.Tech Aerospace Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2150000,
          accreditation: "AICTE",
          description:
            "IIT Madras Aerospace — flight dynamics, gas dynamics, and composites labs aligned to ISRO requirements.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Kanpur (IITK) — AE",
      city: "Kanpur",
      state: "Uttar Pradesh",
      website: "https://www.iitk.ac.in",
      programs: [
        {
          course_name: "B.Tech Aerospace Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2100000,
          accreditation: "AICTE",
          description:
            "IIT Kanpur Aerospace — interdisciplinary option with Mechanical / CSE for robotics and avionics.",
        },
      ],
    },
    {
      name: "Punjab Engineering College (PEC) — Aerospace",
      city: "Chandigarh",
      state: "Chandigarh",
      website: "https://pec.ac.in",
      programs: [
        {
          course_name: "B.Tech Aerospace Engineering",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 90,
          avg_salary_inr: 1400000,
          accreditation: "AICTE",
          description:
            "PEC Chandigarh's Aerospace Engineering department runs a senior-design rocket project with ISRO mentors.",
        },
      ],
    },
  ],
  "civil-services-ias": [
    {
      name: "Lal Bahadur Shastri National Academy of Administration (LBSNAA)",
      city: "Mussoorie",
      state: "Uttarakhand",
      website: "https://www.lbsnaa.gov.in",
      programs: [
        {
          course_name: "Foundation Course for Civil Services",
          duration_months: 3,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1200000,
          accreditation: "LBSNAA",
          description:
            "Foundational training for all newly recruited IAS, IPS, IFS officers. The iconic 'Bharat Darshan' field tour is part of the syllabus.",
        },
      ],
    },
    {
      name: "Sardar Vallabhbhai Patel National Police Academy (SVPNPA)",
      city: "Hyderabad",
      state: "Telangana",
      website: "https://www.svpnpa.gov.in",
      programs: [
        {
          course_name: "Indian Police Service Foundation Course",
          duration_months: 11,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1200000,
          accreditation: "LBSNAA",
          description:
            "Training academy for IPS officers — provides foundational and specialised police training post-LBSNAA.",
        },
      ],
    },
    {
      name: "Foreign Service Institute (FSI)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.mea.gov.in",
      programs: [
        {
          course_name: "IFS Training Programme (post-CSE)",
          duration_months: 36,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1300000,
          accreditation: "LBSNAA",
          description:
            "Indian Foreign Service training at FSI includes language training, diplomatic protocol, and policy modules before posting abroad.",
        },
      ],
    },
    {
      name: "National Academy of Direct Taxes (NADT)",
      city: "Nagpur",
      state: "Maharashtra",
      website: "https://www.nadt.gov.in",
      programs: [
        {
          course_name: "Indian Revenue Service (Customs & Indirect Taxes) Training",
          duration_months: 18,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1200000,
          accreditation: "LBSNAA",
          description:
            "Training academy for IRS officers covering indirect taxation, customs, and forensic accounting.",
        },
      ],
    },
  ],
  "chartered-accountant": [
    {
      name: "ICAI — Board of Studies",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.icai.org",
      programs: [
        {
          course_name: "CA Foundation → Inter → Final (with 3-year articleship)",
          duration_months: 60,
          fees_inr_min: 100000,
          fees_inr_max: 200000,
          placement_pct: 70,
          avg_salary_inr: 900000,
          accreditation: "ICAI",
          description:
            "The single official pathway to becoming a Chartered Accountant in India, conducted by the Institute of Chartered Accountants of India (ICAI).",
        },
      ],
    },
    {
      name: "SRCC (Shri Ram College of Commerce)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.srcc.du.ac.in",
      programs: [
        {
          course_name: "B.Com (Hons) — parallel to CA Inter",
          duration_months: 36,
          fees_inr_min: 90000,
          fees_inr_max: 150000,
          placement_pct: 95,
          avg_salary_inr: 1200000,
          accreditation: "UGC",
          description:
            "Delhi University's flagship commerce college — pursued alongside CA Articleship for academic depth.",
        },
      ],
    },
    {
      name: "St. Xavier's College (Mumbai)",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://xaviers.ac",
      programs: [
        {
          course_name: "B.Com / BAF — parallel to CA Inter",
          duration_months: 36,
          fees_inr_min: 80000,
          fees_inr_max: 150000,
          placement_pct: 90,
          avg_salary_inr: 1100000,
          accreditation: "UGC",
          description:
            "Premier Mumbai commerce college with strong alumni presence at Big 4 firms and corporate finance.",
        },
      ],
    },
    {
      name: "Symbiosis School of Liberal Arts (BBA)",
      city: "Pune",
      state: "Maharashtra",
      website: "https://www.ssla.edu.in",
      programs: [
        {
          course_name: "BBA (Liberal Arts) — parallel to CA",
          duration_months: 36,
          fees_inr_min: 250000,
          fees_inr_max: 350000,
          placement_pct: 85,
          avg_salary_inr: 800000,
          accreditation: "UGC",
          description:
            "Interdisciplinary BBA programme ideal to combine with CA articleship for management exposure.",
        },
      ],
    },
    {
      name: "ICMAI (Cost Accountants Institute)",
      city: "Kolkata",
      state: "West Bengal",
      website: "https://icmai.in",
      programs: [
        {
          course_name: "CMA (Cost & Management Accountant) — Foundation to Final",
          duration_months: 48,
          fees_inr_min: 100000,
          fees_inr_max: 180000,
          placement_pct: 70,
          avg_salary_inr: 800000,
          accreditation: "ICAI",
          description:
            "Parallel accounting credential — CMA curriculum overlaps with CA; popular as a complementary qualification.",
        },
      ],
    },
  ],
};

/**
 * Final flattened export — all colleges across all careers, deduped by name.
 * Useful for the global college explorer if and when it's added.
 */
export const COLLEGES: College[] = (() => {
  const seen = new Set<string>();
  const out: College[] = [];
  for (const careers of Object.values(COLLEGES_BY_CAREER)) {
    for (const c of careers) {
      if (seen.has(c.name)) {
        // De-dupe by appending a suffix.
        let i = 2;
        while (seen.has(`${c.name}-${i}`)) i += 1;
        seen.add(`${c.name}-${i}`);
        out.push({ ...c, name: `${c.name}-${i}` });
      } else {
        seen.add(c.name);
        out.push(c);
      }
    }
  }
  return out;
})();

export const getProgramsForCareer = (
  careerSlug: Career["slug"],
): CollegeProgramEntry[] => {
  const colleges = COLLEGES_BY_CAREER[careerSlug] ?? [];
  const entries: CollegeProgramEntry[] = [];
  for (const college of colleges) {
    for (const program of college.programs) {
      entries.push({ program, college });
    }
  }
  return entries;
};

export const getCollegeById = (
  careerSlug: Career["slug"],
  collegeName: string,
): College | undefined => {
  const colleges = COLLEGES_BY_CAREER[careerSlug] ?? [];
  return colleges.find((c) => c.name === collegeName);
};
