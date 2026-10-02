export type ServiceCategory = {
  title: string;
  items: string[];
};

export type SpecialistServiceLine = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  body: { heading: string; items: string[] }[];
  note?: string;
};

export const services: ServiceCategory[] = [
  {
    title: "Surveys and Investigation",
    items: [
      "Aerial and Topographical Surveys",
      "Soils, Land Resources, and Forestry Surveys",
      "Geological and Geophysical Surveys",
      "Geotechnical Investigation",
      "Pavement and Material Surveys",
      "Hydrology and Sediment Studies",
      "Hydrogeology/Groundwater Investigation",
      "Baseline and Impact Evaluation Surveys",
    ],
  },
  {
    title: "Planning and Feasibility Studies",
    items: [
      "Development Planning",
      "Project Identification",
      "Project Planning",
      "Master Plans",
      "Feasibility Study",
      "Project Preparation",
      "Sector Studies",
      "Research Studies",
    ],
  },
  {
    title: "Engineering Design & Project Implementation",
    items: [
      "Preliminary and Detail Design and Cost Estimates",
      "Tender and Contract Documentation",
      "Tendering and Bids Evaluation",
      "Construction Supervision",
      "Project Management",
      "Operation and Maintenance",
      "Monitoring and Evaluation",
    ],
  },
  {
    title: "Institutional Development",
    items: [
      "Organizational Analysis and Development Plan",
      "Assistance to Capacity Building and Institutional Strengthening",
      "Social Mobilization, Group Formation, and Community Institutional Development",
      "Design and Conduct Training Programs, Workshops",
      "Management Information System",
    ],
  },
];

export const specialistServiceLines: SpecialistServiceLine[] = [
  {
    slug: "agriculture-rural-development",
    title: "Agriculture & Rural Development",
    summary:
      "GEOCE from the very beginning has been providing services to agriculture and rural development sectors, covering both agricultural productivity and integrated rural transformation.",
    image: "/service-docs/agriculture-rural-development.jpeg",
    body: [
      {
        heading: "Agriculture",
        items: [
          "Planning and development",
          "Policy",
          "Production and market-led development",
          "Research, extension, and outreach",
          "Agro-enterprise development",
        ],
      },
      {
        heading: "Rural Development",
        items: [
          "Rural and social development planning",
          "Integrated rural development",
          "Rural infrastructure development",
          "Social and community development",
          "Resettlement planning and social impact management",
        ],
      },
    ],
  },
  {
    slug: "airports",
    title: "Airports",
    summary:
      "The firm provides a comprehensive range of services in airport engineering and aviation planning and management.",
    image: "/service-docs/airports.jpeg",
    body: [
      {
        heading: "Core airport services",
        items: [
          "Airport Planning and Master Planning",
          "Feasibility Study and Project Preparation",
          "Design",
          "Contract Preparation and Procurement Assistance",
          "Construction Supervision",
          "Project Management",
          "Airport Assets Management",
          "Airways and Airspace Planning",
          "Aeronautical Studies",
          "Aviation Institutional Strengthening and Management",
          "Airport/Airport Infrastructure Development under BOT/BOOT",
        ],
      },
    ],
  },
  {
    slug: "architecture",
    title: "Architecture",
    summary:
      "GEOCE draws upon the expertise of a diverse range of professionals to assist clients throughout the lifecycle of buildings and facilities.",
    image: "/service-docs/architecture.jpeg",
    body: [
      {
        heading: "Featured capabilities",
        items: [
          "Master planning",
          "Architecture planning and design",
          "Engineering design (structure and MEP)",
          "Landscape design",
          "Safeguard and environmental services",
          "Construction supervision",
          "Project management",
        ],
      },
      {
        heading: "Specialized expertise",
        items: [
          "Airport (terminals, hangars, cargo, etc.)",
          "Educational (K-12 schools, higher education)",
          "Commercial (corporate, commercial complex)",
          "Government",
          "Healthcare (hospitals, nursing homes)",
          "Hospitality (resorts, hotels)",
          "Residential (housing)",
        ],
      },
    ],
  },
  {
    slug: "environment-and-climate-change",
    title: "Environment and Climate Change",
    summary:
      "As one of the fields of expertise, GEOCE provides a comprehensive range of services in environment and climate change management.",
    image: "/service-docs/environment-climate-change.jpeg",
    body: [
      {
        heading: "Environmental services",
        items: [
          "Initial environmental examination",
          "Environmental impact assessment (EIA, cumulative impact assessment)",
          "Environmental impact mitigation measures",
          "Environmental protection and management",
          "Environmental audit",
          "Environmental monitoring",
          "Climate change adaptation",
          "Disaster risk management",
          "Climate resilience civil engineering solutions",
          "Social safeguard monitoring",
        ],
      },
    ],
    note:
      "Initial environmental examination and environmental impact studies require a flexible, multi-disciplinary approach that addresses planning systems, project development cycles, and stakeholder needs across complex and sensitive environments.",
  },
  {
    slug: "irrigation-drainage-and-flood-control",
    title: "Irrigation, Drainage and Flood Control",
    summary:
      "The firm’s specialized services in irrigation cover a complete range from project identification to feasibility study, detailed design, construction supervision, project management, and operation and maintenance of irrigation schemes.",
    image: "/service-docs/irrigation-drainage-flood-control.jpeg",
    body: [
      {
        heading: "Irrigation and water management",
        items: [
          "Project identification and feasibility studies",
          "Project preparation and detailed design",
          "Construction supervision and project management",
          "Operation and maintenance of small to large irrigation schemes",
          "Surface and groundwater irrigation system development",
          "Hydrology and sediment studies",
        ],
      },
      {
        heading: "Drainage, flood protection and river training",
        items: [
          "Hydrological studies",
          "Reservoir surveys",
          "Geomorphological studies",
          "Physical modeling",
          "Sediment monitoring",
          "Drainage design",
          "River training",
          "Risk analysis and optimization",
        ],
      },
      {
        heading: "Particular services GEOCE can offer include",
        items: [
          "Design storm derivation",
          "Flood routing",
          "Sediment loading derivation",
          "Design of drainage",
          "Design of flood attenuation ponds",
          "River stability analyses",
          "Design of flood embankments and river diversion works",
        ],
      },
    ],
  },
  {
    slug: "power-and-energy",
    title: "Power and Energy",
    summary:
      "GEOCE supports the planning, design, and delivery of power and energy infrastructure for sustainable growth and improved service reliability.",
    image: "/engineering/repx2.jpg",
    body: [
      {
        heading: "Capabilities",
        items: [
          "Hydropower and power generation planning",
          "Transmission and distribution studies",
          "Energy sector feasibility and planning",
          "Project preparation and design support",
          "Construction supervision and implementation support",
        ],
      },
    ],
  },
  {
    slug: "roads-bridges",
    title: "Roads & Bridges",
    summary:
      "GEOCE provides multidisciplinary planning, design, and supervision services for roads, bridges, and associated transport infrastructure.",
    image: "/engineering/bg3.png",
    body: [
      {
        heading: "Capabilities",
        items: [
          "Road planning and master planning",
          "Feasibility studies and detailed design",
          "Bridge engineering and river crossing works",
          "Construction supervision and contract administration",
          "Traffic and transport planning support",
        ],
      },
    ],
  },
];
