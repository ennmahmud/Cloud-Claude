/*
 * Portfolio data.
 *
 * group "community": confirmed projects funded personally by the CEO,
 *   Engr. Muntari Sagir Malumfashi, and commissioned on 20 April 2026.
 *   Sources: Katsina State Government press release and Taskar Gizago
 *   (see docs/company-research.md).
 * group "company": Muntasrab's own projects (sources noted on each entry).
 *   `featured: true` shows a project in "Selected projects" on the home page.
 *   To add an empty slot, copy an entry and set `placeholder: true`.
 *
 * Photos: each entry has `photos`, a list of { src, caption }. While `src` is
 * empty, a placeholder box shows the caption. Put the file in assets/photos/
 * and set src: "assets/photos/name.jpg". Use only photos the company owns or
 * has permission to publish.
 */
window.PROJECTS = [
  {
    id: "almakiyayi-health-centre",
    group: "community",
    category: "healthcare",
    title: "Al-Makiyayi Healthcare Centre",
    location: "Al-Makiyayi (Danjanku), Malumfashi LGA",
    date: "Commissioned 20 Apr 2026",
    status: "Completed",
    summary:
      "A new healthcare centre for the Al-Makiyayi / Danjanku community, handed over fully equipped, with wards including a dedicated female ward.",
    scope: ["Building construction", "Wards & fittings", "Medical equipment"],
    photos: [
      { src: "", caption: "Exterior of the healthcare centre" },
      { src: "", caption: "Ward interior with beds and screens" },
      { src: "", caption: "Female ward" },
    ],
  },
  {
    id: "tsamiya-surgical-theatre",
    group: "community",
    category: "healthcare",
    title: "Surgical Theatre, Tsamiya Hospital",
    location: "Tsamiya Hospital, Malumfashi",
    date: "Commissioned 20 Apr 2026",
    status: "Completed",
    summary: "A modern surgical theatre built and equipped at Tsamiya Hospital in Malumfashi.",
    scope: ["Theatre construction", "Operating table & equipment"],
    photos: [
      { src: "", caption: "Operating theatre with operating table" },
      { src: "", caption: "Theatre handover inspection" },
    ],
  },
  {
    id: "nana-babajo-classrooms",
    group: "community",
    category: "education",
    title: "Classroom Block, Nana Babajo College of Midwifery",
    location: "Malumfashi",
    date: "Commissioned 20 Apr 2026",
    status: "Completed",
    summary:
      "A block of three classrooms with an office, furnished for students of the Nana Babajo College of Midwifery.",
    scope: ["3 classrooms + office", "Furniture", "Finishing"],
    photos: [
      { src: "", caption: "Classroom block exterior" },
      { src: "", caption: "Furnished classroom with students" },
      { src: "", caption: "Commemorative plaque" },
    ],
  },
  {
    id: "sambo-drainage-road",
    group: "community",
    category: "infrastructure",
    title: "Road & 1 km Drainage System",
    location: "Bayan Sambo Primary School area, Malumfashi",
    date: "Commissioned 20 Apr 2026",
    status: "Completed",
    summary:
      "A new access road with a one-kilometre drainage system serving the area around Sambo Primary School in Malumfashi town.",
    scope: ["Road construction", "1 km drainage channel"],
    photos: [{ src: "", caption: "Road and drainage channel" }],
  },
  {
    id: "sambo-fencing",
    group: "community",
    category: "infrastructure",
    title: "Perimeter Fencing: Sambo Cemetery & Sambo Primary School",
    location: "Malumfashi",
    date: "Commissioned 20 Apr 2026",
    status: "Completed",
    summary:
      "Completion of the perimeter fence at Sambo Cemetery and construction of a fence at Sambo Primary School.",
    scope: ["Perimeter walls", "Gates"],
    photos: [{ src: "", caption: "Perimeter fence" }],
  },
  {
    id: "ggsss-vehicle",
    group: "community",
    category: "education",
    title: "School Vehicle for GGSSS Malumfashi",
    location: "Government Girls' Science Secondary School, Malumfashi",
    date: "Commissioned 20 Apr 2026",
    status: "Donated",
    // TODO: the press release says "18-seater bus"; the photo shows a car. Confirm with the company.
    summary: "A vehicle donated to Government Girls' Science Secondary School, Malumfashi, to support students' transport.",
    scope: ["Vehicle donation"],
    photos: [{ src: "", caption: "Vehicle handover to the school" }],
  },

  /* ---- Company projects ---- */
  {
    // Source: Facebook post by Kamaladdeen Salmanu, 16 Mar 2022 (see docs/company-research.md).
    // TODO: confirm completion date, scope and final status with the company.
    id: "malumfashi-maternal-children-hospital",
    featured: true,
    group: "company",
    category: "healthcare",
    title: "Rehabilitation of Maternal & Children Hospital, Malumfashi",
    location: "Malumfashi, Katsina State",
    date: "2022",
    status: "Rehabilitation works",
    summary:
      "Rehabilitation of the Maternal and Children Hospital in Malumfashi, sponsored by Senator Bello Mandiya (Funtua Zone), with Muntasrab Global Concept on site.",
    scope: ["Building rehabilitation", "External works"],
    photos: [
      { src: "", caption: "Hospital buildings during rehabilitation" },
      { src: "", caption: "Completed hospital" },
    ],
  },

  {
    // Source: Facebook post by Aliyu Garba Hange, 29 Jan 2022, with site signboard.
    id: "malumfashi-54-houses",
    featured: true,
    group: "company",
    category: "housing",
    title: "54-House Housing Development, Malumfashi",
    location: "Malumfashi, Katsina State",
    date: "2022",
    status: "Developer",
    summary:
      "Development of 54 houses for the Medical and Health Workers Union of Nigeria, Malumfashi branch, financed by the Federal Mortgage Bank of Nigeria, with Muntasrab Global Concept Limited as developer. A team led by Arc. Ahmad Musa Dangiwa visited the site to inspect progress.",
    scope: ["Housing development", "54 bungalows", "Site infrastructure"],
    client: "Medical and Health Workers Union of Nigeria, Malumfashi",
    photos: [
      { src: "", caption: "Site signboard: Proposed Housing Development (54 houses)" },
      { src: "", caption: "Row of bungalows under construction" },
      { src: "", caption: "Estate road with drainage channel" },
      { src: "", caption: "Site inspection visit" },
    ],
  },

  {
    // Source: post by isiyaku_faisal, 8 Mar 2025 ("through our company 'MUNTASRAB GLOBAL CONCEPT LIMITED'").
    // TODO: confirm scope and status with the company.
    id: "ktsta-facility",
    featured: true,
    group: "company",
    category: "infrastructure",
    title: "Katsina State Transport Authority (KTSTA) Facility",
    location: "Katsina, Katsina State",
    date: "2025",
    status: "Construction",
    summary:
      "Construction of a modern facility for the Katsina State Transport Authority under the administration of Governor Dikko Umaru Radda. The design includes a gatehouse, perimeter fencing and a shaded bus park.",
    scope: ["Gatehouse", "Perimeter fence", "Bus park & shades", "Parking & landscaping"],
    client: "Katsina State Government",
    photos: [
      { src: "", caption: "Design render: KTSTA entrance and gatehouse" },
      { src: "", caption: "Design render: bus park with shades" },
    ],
  },

  {
    // Source: Mobile Media Crew, 27 Feb 2022 (Hausa): Governor Aminu Bello Masari inspected the works on 26 Feb 2022.
    id: "apc-secretariat-katsina",
    featured: true,
    group: "company",
    category: "building",
    title: "APC State Secretariat, Katsina",
    location: "Near FCE, Dutsin-Ma Road, Katsina",
    date: "2022",
    status: "Construction",
    summary:
      "Construction of the new state secretariat of the All Progressives Congress (APC) in Katsina, including an auditorium and office wings. Governor Aminu Bello Masari inspected the works in February 2022 and commended the company.",
    scope: ["Office complex", "Auditorium", "Reinforced concrete frame"],
    client: "All Progressives Congress (APC), Katsina State",
    photos: [
      { src: "", caption: "Design render: secretariat complex" },
      { src: "", caption: "Design render: cutaway with auditorium" },
      { src: "", caption: "Governor's inspection of the columns" },
    ],
  },
  {
    // Source: Aliyu Garba Hange, 2 Mar 2020 (Hausa): contract awarded by the Katsina State Government.
    id: "galadima-palace-malumfashi",
    featured: true,
    group: "company",
    category: "building",
    title: "Reconstruction of the Galadiman Katsina's Palace, Malumfashi",
    location: "Malumfashi, Katsina State",
    date: "2020",
    status: "Demolition & rebuild",
    summary:
      "Demolition of the palace of the Galadiman Katsina, District Head of Malumfashi, a building more than 100 years old, and its reconstruction in modern form, including the residence and offices.",
    scope: ["Demolition", "Palace & residence", "Offices"],
    client: "Katsina State Government",
    photos: [
      { src: "", caption: "Demolition of the old palace" },
      { src: "", caption: "Completed palace" },
    ],
  },

  /* Mosques. Source: Facebook post by Ishaq Samaila, 13 Mar 2026, reporting that
     Alhaji Ibrahim Kabir Masari commended Muntasrab for these four projects.
     TODO: confirm completion status and dates with the company. */
  {
    id: "kofar-fada-mosque",
    group: "company",
    category: "religious",
    title: "Renovation of Central Juma'at Mosque, Kofar Fada",
    location: "Kofar Fada, Malumfashi",
    date: "2026",
    status: "Renovation",
    summary: "Renovation of the Central Juma'at Mosque at Kofar Fada, Malumfashi, sponsored by Alhaji Ibrahim Kabir Masari.",
    scope: ["Renovation", "Architectural upgrade"],
    photos: [{ src: "", caption: "Central Juma'at Mosque, Kofar Fada" }],
  },
  {
    id: "dabai-mosque",
    group: "company",
    category: "religious",
    title: "Juma'at Mosque, Dabai",
    location: "Dabai, Danja LGA",
    date: "2026",
    status: "Construction",
    summary: "Construction of a Juma'at mosque in Dabai town, Danja Local Government Area, sponsored by Alhaji Ibrahim Kabir Masari.",
    scope: ["New construction"],
    photos: [{ src: "", caption: "Juma'at Mosque, Dabai" }],
  },
  {
    id: "safana-mosque",
    featured: true,
    group: "company",
    category: "religious",
    title: "Central Juma'at Mosque, Safana",
    location: "Safana LGA",
    date: "2026",
    status: "Construction",
    summary: "Construction of the Central Juma'at Mosque in Safana Local Government Area, sponsored by Alhaji Ibrahim Kabir Masari.",
    scope: ["Architectural working drawings", "Construction"],
    photos: [
      { src: "", caption: "Architectural render: Juma'at Mosque, Safana" },
      { src: "", caption: "3D exterior view" },
    ],
  },
  {
    id: "katsina-nine-section-mosque",
    group: "company",
    category: "religious",
    title: "Nine-Section Mosque, Katsina City",
    location: "Katsina city",
    date: "2026",
    status: "Construction",
    // The post also includes a render titled "Proposed Mosque Upgrade at Daki-Tara, Katsina";
    // confirm with the company whether that is this project.
    summary: "Construction of a large mosque with nine sections within Katsina city, sponsored by Alhaji Ibrahim Kabir Masari.",
    scope: ["Architectural working drawings", "Construction"],
    photos: [
      { src: "", caption: "Architectural render: aerial view" },
      { src: "", caption: "Architectural render: street view" },
    ],
  },
];

window.CATEGORY_LABELS = {
  housing: "Housing",
  religious: "Religious buildings",
  healthcare: "Healthcare",
  education: "Education",
  infrastructure: "Infrastructure",
  building: "Building",
};

window.GROUP_LABELS = {
  community: "Community impact",
  company: "Company project",
};
