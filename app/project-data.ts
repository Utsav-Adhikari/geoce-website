export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  period: string;
  value: string;
  client: string;
  funding: string;
  association: string;
  staffInput: string;
  overview: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "strengthening-resilience-secondary-cities",
    title: "Strengthening Resilience of the Road and Drainage Network in Nepal’s Secondary Cities (Selection #1274867)",
    category: "Roads & Bridges",
    image: "/projects/secondary-cities.png",
    period: "November 2021 to October 2022",
    value: "Total US$ 299,500; GEOCE’s part US$ 46,285",
    client: "The World Bank",
    funding: "The World Bank",
    association: "Joint Venture of ICEM Asia and GEOCE Consultants (P) Ltd",
    staffInput: "ICEM: 9 person-months; GEOCE: 12 person-months",
    overview: [
      "This technical assistance supports selected municipalities in addressing gaps in the planning, design, quality, and climate resilience of urban transport infrastructure. The work contributes to the sustainability of investments under Nepal’s Urban Governance and Infrastructure Project and strengthens national capacity to develop and apply resilient design guidance.",
      "The assignment combines city-level asset management and risk assessment with institutional support for resilient roads and drainage, helping municipalities plan, maintain, and improve critical urban infrastructure.",
    ],
    highlights: [
      "Develop a Road Asset Management System for Pokhara, integrating climate and disaster risk assessment.",
      "Undertake hazard mapping and vulnerability assessment in Urlabari to inform land-use and investment decisions.",
      "Introduce resilient road and drainage design practices to the Ministry of Urban Development and the Department of Urban Development and Building Construction.",
      "Strengthen municipal asset management, operations, maintenance, and stakeholder capacity through training.",
    ],
  },
  {
    slug: "priority-river-basins-flood-risk-management",
    title: "TA-6568 NEP Priority River Basins Flood Risk Management Project – TACF TA Consulting Firm for Flood Risk Management and Asset Management Support (52195-001)",
    category: "Irrigation, Drainage and Flood Control",
    image: "/projects/river-basins.png",
    period: "May 2021 to May 2023",
    value: "Total US$ 926,759; GEOCE’s part US$ 142,995",
    client: "Asian Development Bank",
    funding: "Asian Development Bank",
    association: "Joint Venture of ICEM Asia and GEOCE Consultants (P) Ltd",
    staffInput: "ICEM: 31 person-months; GEOCE: 36 person-months",
    overview: [
      "The technical assistance supports the Government of Nepal in strengthening flood-risk planning within the Department of Water Resources and Irrigation (DWRI), and in developing an asset-management system for flood infrastructure.",
      "The programme focuses on six priority Terai river basins: West Rapti, Mawa-Ratuwa, Lakhandehi, Mohana-Khuriya, East Rapti, and Bakraha. Together, these basins include 29,356 hectares and 70,428 people exposed to a 1-in-50-year flood. The project supports flood protection works, integrated disaster-risk management, community-based preparedness, and forecasting and early-warning systems.",
    ],
    highlights: [
      "Improve strategic flood-risk planning and help DWRI, provincial governments, and municipalities prioritize flood-protection investments.",
      "Develop a practical, GIS-based embankment asset-management system and strengthen infrastructure monitoring, evaluation, and maintenance.",
      "Support implementation of the ADB-funded Priority River Basin Flood Risk Management Project.",
      "Project cost: US$ 50 million.",
    ],
  },
  {
    slug: "small-irrigation-program-phase-ii",
    title: "Program Management and Implementation Consultant (PMISC), Technical Assistance to Implement Small Irrigation Program Phase II",
    category: "Irrigation, Drainage and Flood Control",
    image: "/projects/small-irrigation.jpg",
    period: "July 2020 to December 2024",
    value: "Total US$ 1,493,000; GEOCE’s part US$ 597,200",
    client: "Swiss Agency for Development & Cooperation",
    funding: "Swiss Agency for Development & Cooperation",
    association: "Joint Venture of GEOCE Consultants (P) Ltd, Total Management Services Pvt Ltd, and Aviyaan",
    staffInput: "International: 2 person-months; national: 223 person-months for the Project Implementation Team",
    overview: [
      "The Small Irrigation Programme Phase II aims to provide year-round irrigation to 20,000 hectares through about 1,300 small irrigation schemes, benefiting 65,000 small-farming households. The programme builds on community-driven irrigation development to raise agricultural productivity and incomes, particularly for disadvantaged groups.",
      "The programme covers 55 municipalities across Ilam, Panchthar, Tehrathum, Dhankuta, Bhojpur, Khotang, Okhaldhunga, and Udaypur. GEOCE’s PMISC role supports programme implementation and a consistent approach to small-irrigation development.",
    ],
    highlights: [
      "Strengthen local-government capacity and improve irrigation infrastructure and Water Users Association management.",
      "Prepare annual work plans, support programme management, and identify and screen potential irrigation projects.",
      "Lead participatory feasibility assessments, detailed designs, bills of quantities, and construction supervision.",
      "Support agricultural market linkages, monitoring, annual reporting, and management of the Swiss grant to the Government of Nepal.",
      "Programme cost: 49.46 million Swiss francs.",
    ],
  },
];
