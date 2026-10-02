export type SpecializationTopic = {
  slug: string;
  title: string;
  brief: string;
  description: string;
  capabilities: string[];
};

export const specializationTopics: SpecializationTopic[] = [
  {
    slug: "architecture",
    title: "Architecture",
    brief:
      "GEOCE helps clients plan, design, and deliver buildings and facilities that balance functionality, structural integrity, and operational efficiency.",
    description:
      "Our architecture services cover the full spectrum of building planning and design, from strategic master planning through detailed interior and building services coordination. Each project is shaped around the client’s needs, site context, and long-term performance requirements.",
    capabilities: [
      "Architecture planning, structure, and operational requirements",
      "Architecture design",
      "Structure design",
      "Interior design",
      "Building services (MEP) design",
      "Landscape architecture",
    ],
  },
  {
    slug: "environment-climate-change",
    title: "Environment & Climate Change",
    brief:
      "We design development strategies that protect natural systems, improve environmental outcomes, and strengthen resilience to climate-related risks.",
    description:
      "GEOCE supports environmental assessment and planning that helps communities and institutions manage impact, reduce risk, and align development with sustainability goals. The work integrates technical analysis, regulatory compliance, and practical mitigation measures for long-term resilience.",
    capabilities: [
      "Environmental planning",
      "IEE, EIA and Comprehensive impact assessment",
      "Mitigation measures",
      "Environmental protection and management",
      "Environmental monitoring and audit",
      "Climate change",
      "Disaster risk management",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    brief:
      "Our multidisciplinary engineering practice supports resilient infrastructure across transport, water, energy, and urban development sectors.",
    description:
      "GEOCE delivers integrated engineering solutions for complex public and private sector infrastructure. The team combines technical expertise with practical implementation experience to develop systems that are efficient, sustainable, and aligned with project realities.",
    capabilities: [
      "Transportation (roads, highways, airports, bridges and tunnels)",
      "Irrigation, drainage and flood control",
      "Water supply and sanitation",
      "Hydropower and energy",
      "Urban development",
      "Other infrastructures",
    ],
  },
  {
    slug: "agriculture-rural-development",
    title: "Agriculture & Rural Development",
    brief:
      "We support agricultural growth and rural transformation through strategic planning, enterprise support, and community-based infrastructure development.",
    description:
      "GEOCE works across the rural development continuum to improve livelihoods, strengthen agricultural systems, and build inclusive development outcomes. Our approach blends policy insight, field knowledge, and implementation support to help communities and institutions deliver lasting change.",
    capabilities: [
      "Agriculture policy, planning, production, marketing, research, and extension",
      "Agro-enterprise",
      "Integrated rural development planning and implementation",
      "Rural infrastructures development",
      "Resettlement planning",
    ],
  },
  {
    slug: "institutional-development",
    title: "Institutional Development",
    brief:
      "We strengthen organizations and institutions to improve governance, service delivery, and long-term capacity for sustainable growth.",
    description:
      "Institutional development is central to effective project delivery and policy execution. GEOCE helps organizations assess their structure, define development plans, and build the systems needed to perform effectively and adapt to evolving challenges.",
    capabilities: [
      "Institutional / organizational analysis",
      "Institutional development plan",
      "Support to capacity building and institutional development",
      "Management support",
    ],
  },
  {
    slug: "natural-resource-management",
    title: "Natural Resource Management",
    brief:
      "We work to protect ecosystems and improve resource governance while supporting productive and sustainable land-use systems.",
    description:
      "GEOCE brings a multi-sector perspective to natural resource planning and conservation. Our work supports watershed management, sustainable land use, and the balanced integration of ecological stewardship with livelihoods and development needs.",
    capabilities: [
      "Natural resources planning",
      "Natural resource management",
      "Watershed management and conservation",
      "Agro-forestry",
    ],
  },
];
