export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  dateTime: string;
  category: string;
  image: string;
  summary: string;
  body: string[];
  tags: string[];
};

export const newsCategories = [
  "All updates",
  "Road & Bridge",
  "River Management",
  "Irrigation",
  "Airport",
];

export const newsArticles: NewsArticle[] = [
  {
    slug: "secondary-cities-road-drainage-resilience",
    title: "Strengthening resilience of the road and drainage network in Nepal’s secondary cities",
    date: "November 8, 2021",
    dateTime: "2021-11-08",
    category: "Road & Bridge",
    image: "/projects/secondary-cities.png",
    summary: "GEOCE and ICEM Asia were appointed to help municipalities plan and design urban transport infrastructure that can better withstand climate-related hazards.",
    body: [
      "The joint venture of ICEM Asia Consulting and GEOCE Consultants was appointed by the World Bank to support selected municipalities in improving the planning, design, and resilience of urban road infrastructure.",
      "The assignment contributes to the quality and sustainability of investments under Nepal’s Urban Governance and Infrastructure Project. It combines municipal road asset management and climate-risk assessment with support for resilient road and drainage design guidance at the national level.",
      "The 12-month technical assistance also focuses on strengthening municipal systems for infrastructure operations and maintenance, while building the capacity needed to put resilient design practices into use.",
    ],
    tags: ["Urban infrastructure", "Climate resilience", "World Bank"],
  },
  {
    slug: "priority-river-basins-flood-risk-management",
    title: "Priority river basins flood risk management project appoints GEOCE–ICEM joint venture",
    date: "May 4, 2021",
    dateTime: "2021-05-04",
    category: "River Management",
    image: "/projects/river-basins.png",
    summary: "An ADB-supported technical assistance assignment strengthens national flood-risk planning and introduces practical asset management for flood infrastructure.",
    body: [
      "The joint venture of ICEM Asia Consulting and GEOCE Consultants was appointed for the consulting assignment by the Asian Development Bank. The 24-month engagement supports the Government of Nepal in strengthening flood-risk management planning within the Department of Water Resources and Irrigation.",
      "The work also supports development of a flood-infrastructure asset management system, helping the department improve how it monitors, evaluates, and maintains flood protection infrastructure.",
      "The assignment combines strategic planning with practical institutional support so that priority flood protection investments can be identified and managed more effectively.",
    ],
    tags: ["Flood risk", "Asset management", "Asian Development Bank"],
  },
  {
    slug: "small-irrigation-program-phase-ii-awarded",
    title: "Small Irrigation Program Phase II awarded to GEOCE joint venture",
    date: "June 29, 2020",
    dateTime: "2020-06-29",
    category: "Irrigation",
    image: "/hero/nurung-khola-ip_-ilam-2-1770271768427-345599300.jpg",
    summary: "Swiss Development Cooperation selected the GEOCE, TMS, and Avian joint venture to provide implementation support across Province 1, Nepal.",
    body: [
      "The contract for the Small Irrigation Program Phase II was awarded to the joint venture of GEOCE, Total Management Services, and Avian Consulting by Swiss Development Cooperation on June 30, 2020.",
      "The team provides technical assistance for programme implementation in Province 1 of Nepal. The programme period runs from July 1, 2020, through December 31, 2024, with a reported programme cost of CHF 17.519 million.",
      "The assignment builds on community-led irrigation development and supports local institutions and farming communities working to improve reliable access to irrigation.",
    ],
    tags: ["Small irrigation", "Rural development", "Swiss Development Cooperation"],
  },
  {
    slug: "airport-capacity-enhancement-sector-development-program",
    title: "Airport capacity enhancement programme design review awarded to GEOCE association",
    date: "May 11, 2020",
    dateTime: "2020-05-11",
    category: "Airport",
    image: "/service-docs/airports.jpeg",
    summary: "GEOCE joined ADP Ingenierie to review key aviation investments at Tribhuvan International Airport and Gautam Buddha International Airport.",
    body: [
      "The consulting service contract was awarded to ADP Ingenierie, France, in association with GEOCE Consultants. The assignment reviews the design of investment components under Nepal’s Airport Capacity Enhancement Sector Development Program.",
      "The scope includes design reviews for hangar aprons and a parallel taxiway at Tribhuvan International Airport, due diligence for a new terminal at Gautam Buddha International Airport, and review of the proposed international terminal building at Tribhuvan International Airport.",
      "The Asian Development Bank is the client, with the Civil Aviation Authority of Nepal as the executing agency.",
    ],
    tags: ["Air transport", "Design review", "Asian Development Bank"],
  },
];
