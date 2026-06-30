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
    tagline: "Lead with honour",
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
];

export const getCareerBySlug = (slug: string): Career | undefined =>
  CAREERS.find((c) => c.slug === slug);
