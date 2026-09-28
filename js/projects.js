/*
 * Portfolio data.
 *
 * group "community": confirmed projects funded personally by the CEO,
 *   Engr. Muntari Sagir Malumfashi, and commissioned on 20 April 2026.
 *   Sources: Katsina State Government press release and Taskar Gizago
 *   (see docs/company-research.md).
 * group "company": empty slots for Muntasrab contracts. Fill them in from the
 *   company's own records, or delete them.
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

  /* ---- Company contract slots: replace with real Muntasrab projects ---- */
  {
    id: "company-project-1",
    group: "company",
    category: "infrastructure",
    title: "Company project (to be added)",
    location: "Location",
    date: "Year",
    status: "Status",
    summary: "Add a short description of the project, the client and what Muntasrab delivered.",
    scope: ["Scope item"],
    photos: [{ src: "", caption: "Project photo" }],
    placeholder: true,
  },
  {
    id: "company-project-2",
    group: "company",
    category: "building",
    title: "Company project (to be added)",
    location: "Location",
    date: "Year",
    status: "Status",
    summary: "Add a short description of the project, the client and what Muntasrab delivered.",
    scope: ["Scope item"],
    photos: [{ src: "", caption: "Project photo" }],
    placeholder: true,
  },
  {
    id: "company-project-3",
    group: "company",
    category: "building",
    title: "Company project (to be added)",
    location: "Location",
    date: "Year",
    status: "Status",
    summary: "Add a short description of the project, the client and what Muntasrab delivered.",
    scope: ["Scope item"],
    photos: [{ src: "", caption: "Project photo" }],
    placeholder: true,
  },
];

window.CATEGORY_LABELS = {
  healthcare: "Healthcare",
  education: "Education",
  infrastructure: "Infrastructure",
  building: "Building",
};

window.GROUP_LABELS = {
  community: "Community impact",
  company: "Company project",
};
