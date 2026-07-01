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
  | "ISI"
  | "BCI";

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
    {
      name: "National Flying Training Institute (NFTI)",
      city: "Gondia",
      state: "Maharashtra",
      website: "https://www.nfti.gov.in",
      programs: [
        {
          course_name: "CPL integrated",
          duration_months: 18,
          fees_inr_min: 2400000,
          fees_inr_max: 3600000,
          placement_pct: 88,
          avg_salary_inr: 1750000,
          accreditation: "DGCA",
          description:
            "Government of India FTO at Gondia — strong IndiGo and Air India cadet pilot tie-ups.",
        },
      ],
    },
    {
      name: "Asia Pacific Flight Training Academy",
      city: "Rajam",
      state: "Andhra Pradesh",
      website: "https://www.flyapft.com",
      programs: [
        {
          course_name: "CPL integrated",
          duration_months: 18,
          fees_inr_min: 2300000,
          fees_inr_max: 3500000,
          placement_pct: 85,
          avg_salary_inr: 1700000,
          accreditation: "DGCA",
          description:
            "AP-state-sponsored academy with a large fleet and modern simulators for CPL training.",
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
    {
      name: "Sainik Schools (Representative list)",
      city: "Multiple",
      state: "Various",
      website: "https://sainikschools.gov.in",
      programs: [
        {
          course_name: "Sainik School education (Class 6 / 9 → 12) — AISSEE feeder",
          duration_months: 84,
          fees_inr_min: 0,
          fees_inr_max: 60000,
          placement_pct: 60,
          avg_salary_inr: 0,
          accreditation: "UGC",
          description:
            "Residential military-style schools preparing students for the AISSEE entrance exam and coaching to join NDA and other defence services. Many offer fee concessions and merit scholarships.",
        },
      ],
    },
    {
      name: "Sainik School Rewa",
      city: "Rewa",
      state: "Madhya Pradesh",
      website: "https://sainikschools.gov.in/",
      programs: [
        {
          course_name: "Residential schooling (Class 6 / 9 → 12) — AISSEE preparation",
          duration_months: 84,
          fees_inr_min: 0,
          fees_inr_max: 50000,
          placement_pct: 65,
          avg_salary_inr: 0,
          accreditation: "UGC",
          description:
            "One of the established Sainik Schools preparing cadets for AISSEE and eventual entry into NDA / defence services. Check the central Sainik Schools portal for admissions and fee-concession details.",
        },
      ],
    },
    {
      name: "Sainik School Sujanpur Tira",
      city: "Sujanpur Tira",
      state: "Himachal Pradesh",
      website: "https://sainikschools.gov.in/",
      programs: [
        {
          course_name: "Residential schooling (Class 6 / 9 → 12) — AISSEE preparation",
          duration_months: 84,
          fees_inr_min: 0,
          fees_inr_max: 50000,
          placement_pct: 60,
          avg_salary_inr: 0,
          accreditation: "UGC",
          description:
            "Himachal's Sainik School with a strong focus on physical training and academics aligned to AISSEE. Refer to the central portal for official notices and admissions.",
        },
      ],
    },
    {
      name: "Sainik School Kazhakootam (Trivandrum)",
      city: "Thiruvananthapuram",
      state: "Kerala",
      website: "https://sainikschools.gov.in/",
      programs: [
        {
          course_name: "Residential schooling (Class 6 / 9 → 12) — AISSEE preparation",
          duration_months: 84,
          fees_inr_min: 0,
          fees_inr_max: 50000,
          placement_pct: 62,
          avg_salary_inr: 0,
          accreditation: "UGC",
          description:
            "Kerala's Sainik School that feeds into the NDA pipeline; offers AISSEE coaching and residential training.",
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
    {
      name: "JD Institute of Fashion Technology",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.jdinstitute.com",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 700000,
          fees_inr_max: 1100000,
          placement_pct: 82,
          avg_salary_inr: 600000,
          accreditation: "UGC",
          description:
            "JD Institute — strong fashion industry network with campuses in Delhi, Mumbai, Bangalore, and Kolkata.",
        },
      ],
    },
    {
      name: "WLCI College / Institute of Fashion",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.wlci.in",
      programs: [
        {
          course_name: "B.Des in Fashion Design",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 900000,
          placement_pct: 80,
          avg_salary_inr: 550000,
          accreditation: "UGC",
          description:
            "WLCI's fashion programs with industry internships and corporate tie-ups across Indian apparel brands.",
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
    {
      name: "IIT Kanpur — Centre for Robotics",
      city: "Kanpur",
      state: "Uttar Pradesh",
      website: "https://www.iitk.ac.in",
      programs: [
        {
          course_name: "B.Tech CSE / Mechanical / EE with Robotics minor",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2100000,
          accreditation: "AICTE",
          description:
            "IIT Kanpur's Centre for Robotics and Centre for Mechatronics drive strong robotics research and placements.",
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
    {
      name: "IIT Kharagpur — Aerospace Engineering",
      city: "Kharagpur",
      state: "West Bengal",
      website: "https://www.iitkgp.ac.in",
      programs: [
        {
          course_name: "B.Tech Aerospace Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2000000,
          accreditation: "AICTE",
          description:
            "IIT Kharagpur Aerospace — strong propulsion, aerodynamics and space-systems research with ISRO links.",
        },
      ],
    },
    {
      name: "Indian Air Force — Institute of Aerospace Medicine (IAM)",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.indianairforce.nic.in",
      programs: [
        {
          course_name: "Aerospace Medicine training (post-MBBS)",
          duration_months: 24,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 100,
          avg_salary_inr: 1500000,
          accreditation: "UGC",
          description:
            "IAM Bengaluru — India's only aerospace medicine training centre; prerequisite for astronaut selection by IAF.",
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
    {
      name: "H.R. College of Commerce (Mumbai)",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.hrcollege.edu",
      programs: [
        {
          course_name: "B.Com / BAF — parallel to CA",
          duration_months: 36,
          fees_inr_min: 80000,
          fees_inr_max: 150000,
          placement_pct: 90,
          avg_salary_inr: 1000000,
          accreditation: "UGC",
          description:
            "Mumbai's leading commerce college with strong alumni at Big 4 firms; popular B.Com + CA pathway.",
        },
      ],
    },
    {
      name: "Loyola College Chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.loyolacollege.edu",
      programs: [
        {
          course_name: "B.Com / BBA — parallel to CA",
          duration_months: 36,
          fees_inr_min: 60000,
          fees_inr_max: 120000,
          placement_pct: 88,
          avg_salary_inr: 900000,
          accreditation: "UGC",
          description:
            "Loyola's commerce programs with strong record of CA Inter and Final clears; popular in South India.",
        },
      ],
    },
  ],
  lawyer: [
    {
      name: "National Law School of India University (NLSIU)",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.nls.ac.in",
      programs: [
        {
          course_name: "BA LLB (Hons)",
          duration_months: 60,
          fees_inr_min: 300000,
          fees_inr_max: 400000,
          placement_pct: 100,
          avg_salary_inr: 2200000,
          accreditation: "BCI",
          description:
            "India's most prestigious law school with top placements in litigation, policy, and corporate law.",
        },
      ],
    },
    {
      name: "NALSAR University of Law",
      city: "Hyderabad",
      state: "Telangana",
      website: "https://www.nalsar.ac.in",
      programs: [
        {
          course_name: "BA LLB (Hons)",
          duration_months: 60,
          fees_inr_min: 250000,
          fees_inr_max: 350000,
          placement_pct: 98,
          avg_salary_inr: 1800000,
          accreditation: "BCI",
          description:
            "Top-tier national law university with strong mooting culture and corporate law placements.",
        },
      ],
    },
    {
      name: "National Law University (NLU Delhi)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://nludelhi.ac.in",
      programs: [
        {
          course_name: "BA LLB (Hons)",
          duration_months: 60,
          fees_inr_min: 320000,
          fees_inr_max: 420000,
          placement_pct: 100,
          avg_salary_inr: 2400000,
          accreditation: "BCI",
          description:
            "Delhi's flagship law university, known for high CLAT cut-offs and strong Supreme Court / law-firm placements.",
        },
      ],
    },
    {
      name: "West Bengal National University of Juridical Sciences (WBNUJS)",
      city: "Kolkata",
      state: "West Bengal",
      website: "https://www.nujs.edu",
      programs: [
        {
          course_name: "BA LLB (Hons)",
          duration_months: 60,
          fees_inr_min: 280000,
          fees_inr_max: 360000,
          placement_pct: 97,
          avg_salary_inr: 1700000,
          accreditation: "BCI",
          description:
            "A leading law school with excellent litigation, arbitration, and corporate law opportunities.",
        },
      ],
    },
    {
      name: "Symbiosis Law School",
      city: "Pune",
      state: "Maharashtra",
      website: "https://www.symlaw.ac.in",
      programs: [
        {
          course_name: "BA LLB (Hons)",
          duration_months: 60,
          fees_inr_min: 450000,
          fees_inr_max: 600000,
          placement_pct: 92,
          avg_salary_inr: 1300000,
          accreditation: "BCI",
          description:
            "One of the strongest private law schools in India with wide exposure to moots, clinics, and internships.",
        },
      ],
    },
  ],
  "software-engineer": [
    {
      name: "Indian Institute of Technology Bombay (IITB)",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2500000,
          accreditation: "AICTE",
          description:
            "Top destination for software engineering with elite placements and a strong startup ecosystem.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Delhi (IITD)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://home.iitd.ac.in",
      programs: [
        {
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2400000,
          accreditation: "AICTE",
          description:
            "Strong systems, AI, and product engineering culture with some of the best tech placements in India.",
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
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2400000,
          accreditation: "AICTE",
          description:
            "IIT Madras CSE — strong systems, AI/ML research and top product-company placements.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Kanpur (IITK)",
      city: "Kanpur",
      state: "Uttar Pradesh",
      website: "https://www.iitk.ac.in",
      programs: [
        {
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2300000,
          accreditation: "AICTE",
          description:
            "IIT Kanpur CSE — strong theory and systems research with elite tech placements.",
        },
      ],
    },
    {
      name: "Indian Institute of Technology Kharagpur (IIT KGP)",
      city: "Kharagpur",
      state: "West Bengal",
      website: "https://www.iitkgp.ac.in",
      programs: [
        {
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2300000,
          accreditation: "AICTE",
          description:
            "IIT Kharagpur CSE — strong alumni network in product and tech leadership across global companies.",
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
          course_name: "B.E. Computer Science",
          duration_months: 48,
          fees_inr_min: 1000000,
          fees_inr_max: 1400000,
          placement_pct: 98,
          avg_salary_inr: 2000000,
          accreditation: "AICTE",
          description:
            "Practice-school model, strong CS curriculum, and excellent product-company placements.",
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
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 1200000,
          fees_inr_max: 1600000,
          placement_pct: 100,
          avg_salary_inr: 2300000,
          accreditation: "AICTE",
          description:
            "Known for deep CS research, systems, and AI/ML; a top choice for software engineers.",
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
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 95,
          avg_salary_inr: 1500000,
          accreditation: "AICTE",
          description:
            "One of the strongest NITs for core engineering and software placements.",
        },
      ],
    },
    {
      name: "Vellore Institute of Technology (VIT)",
      city: "Vellore",
      state: "Tamil Nadu",
      website: "https://vit.ac.in",
      programs: [
        {
          course_name: "B.Tech Computer Science & Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 92,
          avg_salary_inr: 1100000,
          accreditation: "AICTE",
          description:
            "VIT's CSE programs with strong placements in product companies, especially in IT services and product engineering.",
        },
      ],
    },
  ],
  "data-scientist": [
    {
      name: "Indian Statistical Institute (ISI) Kolkata",
      city: "Kolkata",
      state: "West Bengal",
      website: "https://www.isical.ac.in",
      programs: [
        {
          course_name: "B.Stat (Hons) / M.Stat / Data Science pathways",
          duration_months: 48,
          fees_inr_min: 20000,
          fees_inr_max: 200000,
          placement_pct: 95,
          avg_salary_inr: 1500000,
          accreditation: "ISI",
          description:
            "India's premier statistics institute — rigorous statistical foundations and applied data science programs with research pathways.",
        },
      ],
    },
    {
      name: "IIIT Hyderabad — Data Science",
      city: "Hyderabad",
      state: "Telangana",
      website: "https://www.iiit.ac.in",
      programs: [
        {
          course_name: "B.Tech / M.Tech in Data Science",
          duration_months: 48,
          fees_inr_min: 200000,
          fees_inr_max: 600000,
          placement_pct: 95,
          avg_salary_inr: 1900000,
          accreditation: "AICTE",
          description:
            "Strong industry ties and research labs focusing on ML and AI applications — top destination for CS + Data Science.",
        },
      ],
    },
    {
      name: "IIT Madras — Data Science (Hingley Centre)",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.iitm.ac.in",
      programs: [
        {
          course_name: "M.Tech Data Science / B.Tech AI & Data Science",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2300000,
          accreditation: "AICTE",
          description:
            "IIT Madras Robert Bosch Centre — premier AI/ML research with strong industry partnerships and applied data science.",
        },
      ],
    },
    {
      name: "IIT Bombay — Data Science & AI",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "M.Tech AI / Data Science",
          duration_months: 24,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2500000,
          accreditation: "AICTE",
          description:
            "IIT Bombay's AI/ML programs — top placements in product analytics, ML engineering, and research roles.",
        },
      ],
    },
    {
      name: "IIT Kanpur — Statistics & Data Science",
      city: "Kanpur",
      state: "Uttar Pradesh",
      website: "https://www.iitk.ac.in",
      programs: [
        {
          course_name: "M.Sc Statistics & Data Science",
          duration_months: 24,
          fees_inr_min: 200000,
          fees_inr_max: 400000,
          placement_pct: 98,
          avg_salary_inr: 1600000,
          accreditation: "AICTE",
          description:
            "IIT Kanpur's Statistics and Data Science program — strong technical depth with industry internships.",
        },
      ],
    },
    {
      name: "BITS Pilani — Data Science (M.Sc)",
      city: "Pilani",
      state: "Rajasthan",
      website: "https://www.bits-pilani.ac.in",
      programs: [
        {
          course_name: "M.Sc Data Science / B.E. CS",
          duration_months: 48,
          fees_inr_min: 1000000,
          fees_inr_max: 1400000,
          placement_pct: 95,
          avg_salary_inr: 1900000,
          accreditation: "AICTE",
          description:
            "BITS Pilani's practice-school model with dedicated Data Science and AI electives; strong product-analytics placements.",
        },
      ],
    },
    {
      name: "IISc Bengaluru — Computational & Data Sciences",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.iisc.ac.in",
      programs: [
        {
          course_name: "M.Tech / PhD Computational Data Sciences",
          duration_months: 24,
          fees_inr_min: 200000,
          fees_inr_max: 400000,
          placement_pct: 100,
          avg_salary_inr: 2400000,
          accreditation: "AICTE",
          description:
            "IISc's CDS program — India's #1 research university with strong industry partnerships and applied research in ML.",
        },
      ],
    },
  ],
  "mechanical-engineer": [
    {
      name: "IIT Bombay — Mechanical Engineering",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "B.Tech Mechanical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2100000,
          accreditation: "AICTE",
          description:
            "IIT Bombay's mechanical program — top placements in automotive, design, and R&D roles with global recruiters.",
        },
      ],
    },
    {
      name: "IIT Madras — Mechanical Engineering",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.iitm.ac.in",
      programs: [
        {
          course_name: "B.Tech Mechanical Engineering (with specialisations)",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2000000,
          accreditation: "AICTE",
          description:
            "IIT Madras mechanical with strong thermal, design, and manufacturing specialisations; top automotive placements.",
        },
      ],
    },
    {
      name: "IIT Kharagpur — Mechanical Engineering",
      city: "Kharagpur",
      state: "West Bengal",
      website: "https://www.iitkgp.ac.in",
      programs: [
        {
          course_name: "B.Tech Mechanical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 98,
          avg_salary_inr: 1700000,
          accreditation: "AICTE",
          description:
            "IIT Kharagpur mechanical — strong robotics / mechatronics crossover with the institute's manufacturing labs.",
        },
      ],
    },
    {
      name: "IIT Delhi — Mechanical Engineering",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.iitd.ac.in",
      programs: [
        {
          course_name: "B.Tech Mechanical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 1900000,
          accreditation: "AICTE",
          description:
            "IIT Delhi mechanical — strong automotive and aerospace placements; close ties with industry in Delhi NCR.",
        },
      ],
    },
    {
      name: "NIT Trichy — Mechanical Engineering",
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      website: "https://www.nitt.edu",
      programs: [
        {
          course_name: "B.Tech Mechanical Engineering",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 95,
          avg_salary_inr: 1300000,
          accreditation: "AICTE",
          description:
            "NIT Trichy is India's #1 NIT for mechanical — strong core engineering placements with core and IT roles.",
        },
      ],
    },
    {
      name: "BITS Pilani — Mechanical Engineering",
      city: "Pilani",
      state: "Rajasthan",
      website: "https://www.bits-pilani.ac.in",
      programs: [
        {
          course_name: "B.E. (Hons) Mechanical",
          duration_months: 48,
          fees_inr_min: 1000000,
          fees_inr_max: 1400000,
          placement_pct: 95,
          avg_salary_inr: 1500000,
          accreditation: "AICTE",
          description:
            "BITS Pilani's practice-school model with strong manufacturing and automotive industry internships.",
        },
      ],
    },
    {
      name: "VIT Vellore — Mechanical / Automotive",
      city: "Vellore",
      state: "Tamil Nadu",
      website: "https://vit.ac.in",
      programs: [
        {
          course_name: "B.Tech Mechanical / Automotive Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 88,
          avg_salary_inr: 900000,
          accreditation: "AICTE",
          description:
            "VIT's mechanical / automotive programs with strong industry tie-ups and international transfer options.",
        },
      ],
    },
  ],
  "electrical-engineer": [
    {
      name: "IIT Madras — Electrical Engineering",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.iitm.ac.in",
      programs: [
        {
          course_name: "B.Tech Electrical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2200000,
          accreditation: "AICTE",
          description:
            "IIT Madras EE — top placements in power systems, embedded, and VLSI; strong R&D industry tie-ups.",
        },
      ],
    },
    {
      name: "IIT Bombay — Electrical Engineering",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "B.Tech Electrical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2400000,
          accreditation: "AICTE",
          description:
            "IIT Bombay EE — premier power, electronics, and VLSI programs with top global recruiter placements.",
        },
      ],
    },
    {
      name: "IIT Delhi — Electrical Engineering",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.iitd.ac.in",
      programs: [
        {
          course_name: "B.Tech Electrical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2300000,
          accreditation: "AICTE",
          description:
            "IIT Delhi EE — power systems, communications, and embedded systems specialisations with strong placements.",
        },
      ],
    },
    {
      name: "IIT Kanpur — Electrical Engineering",
      city: "Kanpur",
      state: "Uttar Pradesh",
      website: "https://www.iitk.ac.in",
      programs: [
        {
          course_name: "B.Tech Electrical Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2100000,
          accreditation: "AICTE",
          description:
            "IIT Kanpur EE — strong VLSI and communications labs with industry-sponsored research programs.",
        },
      ],
    },
    {
      name: "NIT Trichy — Electrical & Electronics",
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      website: "https://www.nitt.edu",
      programs: [
        {
          course_name: "B.Tech Electrical & Electronics Engineering",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 95,
          avg_salary_inr: 1400000,
          accreditation: "AICTE",
          description:
            "NIT Trichy EEE — one of India's strongest NITs for power and electronics with excellent core placements.",
        },
      ],
    },
    {
      name: "BITS Pilani — Electronics & Instrumentation",
      city: "Pilani",
      state: "Rajasthan",
      website: "https://www.bits-pilani.ac.in",
      programs: [
        {
          course_name: "B.E. (Hons) Electronics & Instrumentation",
          duration_months: 48,
          fees_inr_min: 1000000,
          fees_inr_max: 1400000,
          placement_pct: 95,
          avg_salary_inr: 1600000,
          accreditation: "AICTE",
          description:
            "BITS Pilani E&I — strong industry internships in instrumentation, embedded, and IoT-focused companies.",
        },
      ],
    },
  ],
  "civil-engineer": [
    {
      name: "IIT Roorkee — Civil Engineering",
      city: "Roorkee",
      state: "Uttarakhand",
      website: "https://www.iitr.ac.in",
      programs: [
        {
          course_name: "B.Tech Civil Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 98,
          avg_salary_inr: 1700000,
          accreditation: "AICTE",
          description:
            "IIT Roorkee — India's top civil engineering program with strong geotechnical and structural specialisations.",
        },
      ],
    },
    {
      name: "IIT Madras — Civil Engineering",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.iitm.ac.in",
      programs: [
        {
          course_name: "B.Tech Civil Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 98,
          avg_salary_inr: 1700000,
          accreditation: "AICTE",
          description:
            "IIT Madras civil — strong ocean and coastal engineering research plus top infrastructure placements.",
        },
      ],
    },
    {
      name: "IIT Bombay — Civil Engineering",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.iitb.ac.in",
      programs: [
        {
          course_name: "B.Tech Civil Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 1800000,
          accreditation: "AICTE",
          description:
            "IIT Bombay civil — premier structural and transportation engineering with strong industry and consulting placements.",
        },
      ],
    },
    {
      name: "IIT Kharagpur — Civil Engineering",
      city: "Kharagpur",
      state: "West Bengal",
      website: "https://www.iitkgp.ac.in",
      programs: [
        {
          course_name: "B.Tech Civil Engineering",
          duration_months: 48,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 95,
          avg_salary_inr: 1500000,
          accreditation: "AICTE",
          description:
            "IIT Kharagpur civil — strong infrastructure research with focus on rural development and water resources.",
        },
      ],
    },
    {
      name: "NIT Trichy — Civil Engineering",
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      website: "https://www.nitt.edu",
      programs: [
        {
          course_name: "B.Tech Civil Engineering",
          duration_months: 48,
          fees_inr_min: 600000,
          fees_inr_max: 800000,
          placement_pct: 92,
          avg_salary_inr: 1100000,
          accreditation: "AICTE",
          description:
            "NIT Trichy civil — one of India's strongest NITs for civil with core construction and consulting placements.",
        },
      ],
    },
    {
      name: "BITS Pilani — Civil Engineering",
      city: "Pilani",
      state: "Rajasthan",
      website: "https://www.bits-pilani.ac.in",
      programs: [
        {
          course_name: "B.E. (Hons) Civil",
          duration_months: 48,
          fees_inr_min: 1000000,
          fees_inr_max: 1400000,
          placement_pct: 92,
          avg_salary_inr: 1200000,
          accreditation: "AICTE",
          description:
            "BITS Pilani civil — strong practice-school internships in construction and infrastructure companies.",
        },
      ],
    },
  ],
  architect: [
    {
      name: "School of Planning and Architecture (SPA Delhi)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://spa.ac.in",
      programs: [
        {
          course_name: "B.Arch",
          duration_months: 60,
          fees_inr_min: 150000,
          fees_inr_max: 600000,
          placement_pct: 85,
          avg_salary_inr: 900000,
          accreditation: "UGC",
          description:
            "Premier architecture school under Ministry of Education — strong studio culture and design-driven curriculum.",
        },
      ],
    },
    {
      name: "IIT Kharagpur — Department of Architecture",
      city: "Kharagpur",
      state: "West Bengal",
      website: "https://www.iitkgp.ac.in",
      programs: [
        {
          course_name: "B.Arch (via JEE Advanced)",
          duration_months: 60,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 95,
          avg_salary_inr: 1400000,
          accreditation: "AICTE",
          description:
            "IIT Kharagpur's B.Arch program — strong urban design and planning integration; top placements in design studios.",
        },
      ],
    },
    {
      name: "IIT Roorkee — Department of Architecture",
      city: "Roorkee",
      state: "Uttarakhand",
      website: "https://www.iitr.ac.in",
      programs: [
        {
          course_name: "B.Arch (via JEE Advanced)",
          duration_months: 60,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 95,
          avg_salary_inr: 1350000,
          accreditation: "AICTE",
          description:
            "IIT Roorkee's architecture program with strong emphasis on sustainable design and urban planning.",
        },
      ],
    },
    {
      name: "CEPT University",
      city: "Ahmedabad",
      state: "Gujarat",
      website: "https://cept.ac.in",
      programs: [
        {
          course_name: "Bachelor of Architecture",
          duration_months: 60,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 90,
          avg_salary_inr: 1100000,
          accreditation: "UGC",
          description:
            "Centre for Environmental Planning and Technology — India's leading architecture + planning school with strong design philosophy.",
        },
      ],
    },
    {
      name: "Sir JJ College of Architecture",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.sirjjarchitecture.org",
      programs: [
        {
          course_name: "B.Arch",
          duration_months: 60,
          fees_inr_min: 200000,
          fees_inr_max: 600000,
          placement_pct: 88,
          avg_salary_inr: 1000000,
          accreditation: "UGC",
          description:
            "Mumbai's iconic architecture college (established 1957) affiliated to University of Mumbai — strong heritage and modern studio practice.",
        },
      ],
    },
    {
      name: "NIT Trichy — Architecture",
      city: "Tiruchirappalli",
      state: "Tamil Nadu",
      website: "https://www.nitt.edu",
      programs: [
        {
          course_name: "B.Arch",
          duration_months: 60,
          fees_inr_min: 600000,
          fees_inr_max: 900000,
          placement_pct: 90,
          avg_salary_inr: 1050000,
          accreditation: "AICTE",
          description:
            "NIT Trichy is the only NIT offering a top-rated B.Arch program — strong computational design and urban research focus.",
        },
      ],
    },
    {
      name: "Chandigarh College of Architecture",
      city: "Chandigarh",
      state: "Chandigarh",
      website: "https://cca.edu.in",
      programs: [
        {
          course_name: "B.Arch",
          duration_months: 60,
          fees_inr_min: 250000,
          fees_inr_max: 500000,
          placement_pct: 80,
          avg_salary_inr: 850000,
          accreditation: "UGC",
          description:
            "Premier Chandigarh-based architecture school, designed under Le Corbusier's Chandigarh masterplan legacy.",
        },
      ],
    },
  ],
  teacher: [
    {
      name: "Regional Institute of Education (RIE) Ajmer",
      city: "Ajmer",
      state: "Rajasthan",
      website: "https://www.rieajmer.raj.nic.in",
      programs: [
        {
          course_name: "B.Ed (2-year)",
          duration_months: 24,
          fees_inr_min: 30000,
          fees_inr_max: 80000,
          placement_pct: 85,
          avg_salary_inr: 500000,
          accreditation: "UGC",
          description:
            "NCERT's regional institute — top B.Ed program with strong pedagogy focus and NCERT-aligned curriculum.",
        },
      ],
    },
    {
      name: "Regional Institute of Education (RIE) Bhopal",
      city: "Bhopal",
      state: "Madhya Pradesh",
      website: "https://www.riebhopal.nic.in",
      programs: [
        {
          course_name: "B.Ed (2-year)",
          duration_months: 24,
          fees_inr_min: 30000,
          fees_inr_max: 80000,
          placement_pct: 85,
          avg_salary_inr: 500000,
          accreditation: "UGC",
          description:
            "Central Bhopal RIE — premier B.Ed institution with strong pedagogy and integrated ICT training.",
        },
      ],
    },
    {
      name: "Regional Institute of Education (RIE) Mysuru",
      city: "Mysuru",
      state: "Karnataka",
      website: "https://www.riemysore.com",
      programs: [
        {
          course_name: "B.Ed (2-year)",
          duration_months: 24,
          fees_inr_min: 30000,
          fees_inr_max: 80000,
          placement_pct: 85,
          avg_salary_inr: 500000,
          accreditation: "UGC",
          description:
            "South India's NCERT RIE — strong English-medium pedagogy and integrated teacher training programs.",
        },
      ],
    },
    {
      name: "Department of Education (University of Delhi)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.du.ac.in",
      programs: [
        {
          course_name: "B.Ed (2-year)",
          duration_months: 24,
          fees_inr_min: 25000,
          fees_inr_max: 60000,
          placement_pct: 90,
          avg_salary_inr: 600000,
          accreditation: "UGC",
          description:
            "DU's flagship B.Ed program at Faculty of Education — high placement rate into KVS / NVS / private schools.",
        },
      ],
    },
    {
      name: "Jamia Millia Islamia — Department of Education",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.jmi.ac.in",
      programs: [
        {
          course_name: "B.Ed (2-year)",
          duration_months: 24,
          fees_inr_min: 15000,
          fees_inr_max: 40000,
          placement_pct: 88,
          avg_salary_inr: 550000,
          accreditation: "UGC",
          description:
            "Central university with strong B.Ed program — bilingual pedagogy and inclusive education focus.",
        },
      ],
    },
    {
      name: "Tata Institute of Social Sciences (TISS) — Education",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.tiss.edu",
      programs: [
        {
          course_name: "M.A. Education (Elementary)",
          duration_months: 24,
          fees_inr_min: 70000,
          fees_inr_max: 100000,
          placement_pct: 90,
          avg_salary_inr: 700000,
          accreditation: "UGC",
          description:
            "TISS's M.A. in Education focuses on elementary education policy and practice — strong NGO and policy placements.",
        },
      ],
    },
  ],
  nurse: [
    {
      name: "AIIMS Delhi — College of Nursing",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.aiims.edu",
      programs: [
        {
          course_name: "B.Sc (Hons) Nursing",
          duration_months: 48,
          fees_inr_min: 3000,
          fees_inr_max: 10000,
          placement_pct: 100,
          avg_salary_inr: 800000,
          accreditation: "NMC",
          description:
            "India's most prestigious nursing college with minimal fees, top faculty, and direct hospital placements at AIIMS.",
        },
      ],
    },
    {
      name: "Christian Medical College (CMC) — College of Nursing Vellore",
      city: "Vellore",
      state: "Tamil Nadu",
      website: "https://www.cmch-vellore.edu",
      programs: [
        {
          course_name: "B.Sc Nursing",
          duration_months: 48,
          fees_inr_min: 60000,
          fees_inr_max: 150000,
          placement_pct: 100,
          avg_salary_inr: 750000,
          accreditation: "NMC",
          description:
            "CMC Vellore's nursing program — strong clinical training with Christian service commitment and high placement rates.",
        },
      ],
    },
    {
      name: "JIPMER College of Nursing",
      city: "Puducherry",
      state: "Puducherry",
      website: "https://www.jipmer.edu.in",
      programs: [
        {
          course_name: "B.Sc Nursing",
          duration_months: 48,
          fees_inr_min: 5000,
          fees_inr_max: 15000,
          placement_pct: 100,
          avg_salary_inr: 700000,
          accreditation: "NMC",
          description:
            "JIPMER Puducherry's central government nursing college with subsidised fees and strong clinical training.",
        },
      ],
    },
    {
      name: "Armed Forces Medical College (AFMC) — Nursing",
      city: "Pune",
      state: "Maharashtra",
      website: "https://www.afmc.nic.in",
      programs: [
        {
          course_name: "B.Sc Nursing",
          duration_months: 48,
          fees_inr_min: 40000,
          fees_inr_max: 80000,
          placement_pct: 100,
          avg_salary_inr: 750000,
          accreditation: "NMC",
          description:
            "AFMC's nursing wing — military-nursing service pathway with direct commissioning opportunities in the Indian Army.",
        },
      ],
    },
    {
      name: "RAK College of Nursing",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.rakcollegeofnursing.com",
      programs: [
        {
          course_name: "B.Sc Nursing",
          duration_months: 48,
          fees_inr_min: 100000,
          fees_inr_max: 150000,
          placement_pct: 95,
          avg_salary_inr: 650000,
          accreditation: "NMC",
          description:
            "Delhi's premier private nursing college affiliated to Delhi University — strong hospital placements and 95%+ placement rate.",
        },
      ],
    },
    {
      name: "Manipal College of Nursing",
      city: "Manipal",
      state: "Karnataka",
      website: "https://www.manipal.edu/con.html",
      programs: [
        {
          course_name: "B.Sc Nursing",
          duration_months: 48,
          fees_inr_min: 200000,
          fees_inr_max: 400000,
          placement_pct: 95,
          avg_salary_inr: 700000,
          accreditation: "NMC",
          description:
            "Manipal's nursing college — strong international placements and simulation-based training with global exposure.",
        },
      ],
    },
    {
      name: "Apollo College of Nursing",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.apollohospitals.com",
      programs: [
        {
          course_name: "B.Sc Nursing",
          duration_months: 48,
          fees_inr_min: 150000,
          fees_inr_max: 300000,
          placement_pct: 92,
          avg_salary_inr: 600000,
          accreditation: "NMC",
          description:
            "Apollo Hospitals' nursing college — direct placement opportunities at Apollo Hospitals network across India.",
        },
      ],
    },
  ],
  "product-manager": [
    {
      name: "Industry PM Apprenticeships",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.example.com",
      programs: [
        {
          course_name: "PM internships & apprenticeships",
          duration_months: 6,
          fees_inr_min: 0,
          fees_inr_max: 0,
          placement_pct: 60,
          avg_salary_inr: 800000,
          accreditation: "UGC",
          description: "Practical product apprenticeships at startups and product firms.",
        },
      ],
    },
  ],
  "ux-designer": [
    {
      name: "Design schools & bootcamps",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.example.com",
      programs: [
        {
          course_name: "UX bootcamp / short courses",
          duration_months: 3,
          fees_inr_min: 20000,
          fees_inr_max: 150000,
          placement_pct: 65,
          avg_salary_inr: 600000,
          accreditation: "UGC",
          description: "Portfolio-focused UX / product design programmes and studio internships.",
        },
      ],
    },
  ],
  dentist: [
    {
      name: "Maulana Azad Institute of Dental Sciences (MAIDS)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.maids.delhi.gov.in",
      programs: [
        {
          course_name: "BDS",
          duration_months: 60,
          fees_inr_min: 50000,
          fees_inr_max: 200000,
          placement_pct: 95,
          avg_salary_inr: 800000,
          accreditation: "NMC",
          description:
            "Delhi's premier government dental college attached to Lok Nayak Hospital — top NEET-based BDS program with strong clinical exposure.",
        },
      ],
    },
    {
      name: "Government Dental College & Hospital Mumbai",
      city: "Mumbai",
      state: "Maharashtra",
      website: "https://www.gdcmumbai.edu.in",
      programs: [
        {
          course_name: "BDS",
          duration_months: 60,
          fees_inr_min: 80000,
          fees_inr_max: 150000,
          placement_pct: 92,
          avg_salary_inr: 750000,
          accreditation: "NMC",
          description:
            "Mumbai's oldest dental college — 80+ years of training with extensive patient load and clinical training.",
        },
      ],
    },
    {
      name: "Manipal College of Dental Sciences (MCODS)",
      city: "Manipal",
      state: "Karnataka",
      website: "https://www.manipal.edu/mcods.html",
      programs: [
        {
          course_name: "BDS",
          duration_months: 60,
          fees_inr_min: 1500000,
          fees_inr_max: 2500000,
          placement_pct: 95,
          avg_salary_inr: 900000,
          accreditation: "NMC",
          description:
            "India's leading private dental college with strong MDS pathways and international clinical exposure.",
        },
      ],
    },
    {
      name: "Faculty of Dental Sciences, KGMU",
      city: "Lucknow",
      state: "Uttar Pradesh",
      website: "https://www.kgmu.org",
      programs: [
        {
          course_name: "BDS",
          duration_months: 60,
          fees_inr_min: 60000,
          fees_inr_max: 100000,
          placement_pct: 90,
          avg_salary_inr: 700000,
          accreditation: "NMC",
          description:
            "KGMU's dental faculty — top government BDS program in UP with subsidised fees and huge patient load.",
        },
      ],
    },
    {
      name: "SRM Dental College",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.srmdentalcollege.ac.in",
      programs: [
        {
          course_name: "BDS",
          duration_months: 60,
          fees_inr_min: 1200000,
          fees_inr_max: 2000000,
          placement_pct: 88,
          avg_salary_inr: 700000,
          accreditation: "NMC",
          description:
            "SRM Group's flagship dental college — strong MDS pathways, implantology focus, and clinical training at SRM Hospital.",
        },
      ],
    },
    {
      name: "Tamil Nadu Government Dental College & Hospital",
      city: "Chennai",
      state: "Tamil Nadu",
      website: "https://www.tngdch.ac.in",
      programs: [
        {
          course_name: "BDS",
          duration_months: 60,
          fees_inr_min: 30000,
          fees_inr_max: 80000,
          placement_pct: 92,
          avg_salary_inr: 750000,
          accreditation: "NMC",
          description:
            "One of India's oldest government dental colleges with strong prosthodontics and oral surgery programs.",
        },
      ],
    },
  ],
  consultant: [
    {
      name: "Indian Institute of Management Ahmedabad (IIM-A)",
      city: "Ahmedabad",
      state: "Gujarat",
      website: "https://www.iima.ac.in",
      programs: [
        {
          course_name: "Post Graduate Programme (PGP) — MBA",
          duration_months: 24,
          fees_inr_min: 2300000,
          fees_inr_max: 2500000,
          placement_pct: 100,
          avg_salary_inr: 3200000,
          accreditation: "AICTE",
          description:
            "India's #1 MBA program and primary feeder into McKinsey, BCG, Bain, ATK. Median salary ₹32 LPA; top quartile ₹50 LPA+.",
        },
      ],
    },
    {
      name: "Indian Institute of Management Bangalore (IIM-B)",
      city: "Bengaluru",
      state: "Karnataka",
      website: "https://www.iimb.ac.in",
      programs: [
        {
          course_name: "Post Graduate Programme (PGP) — MBA",
          duration_months: 24,
          fees_inr_min: 2300000,
          fees_inr_max: 2400000,
          placement_pct: 100,
          avg_salary_inr: 3100000,
          accreditation: "AICTE",
          description:
            "Strong consulting placements with McKinsey, BCG, Bain and Big 4 strategy firms. Median ₹31 LPA; tech / product roles cross ₹40 LPA.",
        },
      ],
    },
    {
      name: "Indian Institute of Management Calcutta (IIM-C)",
      city: "Kolkata",
      state: "West Bengal",
      website: "https://www.iimcal.ac.in",
      programs: [
        {
          course_name: "Post Graduate Programme (PGP) — MBA",
          duration_months: 24,
          fees_inr_min: 2200000,
          fees_inr_max: 2400000,
          placement_pct: 100,
          avg_salary_inr: 3000000,
          accreditation: "AICTE",
          description:
            "Finance and consulting powerhouse — strong alumni network in McKinsey, BCG, Bain, and global investment banks.",
        },
      ],
    },
    {
      name: "XLRI Jamshedpur",
      city: "Jamshedpur",
      state: "Jharkhand",
      website: "https://www.xlri.ac.in",
      programs: [
        {
          course_name: "PGDM (Business Management / HRM)",
          duration_months: 24,
          fees_inr_min: 2100000,
          fees_inr_max: 2300000,
          placement_pct: 100,
          avg_salary_inr: 2900000,
          accreditation: "AICTE",
          description:
            "India's premier private B-school via XAT — top consulting and HR placements. Average package ₹29 LPA; HR roles cross ₹25 LPA.",
        },
      ],
    },
    {
      name: "Indian School of Business (ISB) Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      website: "https://www.isb.edu",
      programs: [
        {
          course_name: "Post Graduate Programme (PGP) — 1 year MBA",
          duration_months: 12,
          fees_inr_min: 3500000,
          fees_inr_max: 4000000,
          placement_pct: 100,
          avg_salary_inr: 3400000,
          accreditation: "AICTE",
          description:
            "1-year MBA preferred by candidates with 4+ years of work experience. Strong consulting and product leadership placements.",
        },
      ],
    },
    {
      name: "Faculty of Management Studies (FMS) Delhi",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.fms.edu",
      programs: [
        {
          course_name: "MBA (Full-Time)",
          duration_months: 24,
          fees_inr_min: 200000,
          fees_inr_max: 250000,
          placement_pct: 100,
          avg_salary_inr: 2700000,
          accreditation: "AICTE",
          description:
            "DU's flagship MBA — one of India's best ROI programs with the lowest fees. Median ₹27 LPA; consulting roles at ₹25 LPA+.",
        },
      ],
    },
    {
      name: "Indian Institute of Foreign Trade (IIFT)",
      city: "New Delhi",
      state: "Delhi",
      website: "https://www.iift.edu",
      programs: [
        {
          course_name: "MBA (International Business)",
          duration_months: 24,
          fees_inr_min: 800000,
          fees_inr_max: 1100000,
          placement_pct: 100,
          avg_salary_inr: 2500000,
          accreditation: "AICTE",
          description:
            "Specialises in international business and trade consulting. Strong placements in trade, FMCG, and consulting firms.",
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
