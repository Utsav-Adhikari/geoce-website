import { newsArticles } from "./news-data";
import { projects } from "./project-data";
import { specialistServiceLines } from "./services";
import { specializationTopics } from "./specializations";

export type SearchEntry = {
  title: string;
  section: string;
  href: string;
  description: string;
  searchText: string;
};

const aboutPages = [
  { title: "About GEOCE", href: "/about", terms: "company profile consultancy history" },
  { title: "Our Organisation", href: "/about/organisation-chart", terms: "team organization chart leadership" },
  { title: "Our Values", href: "/about/our-values", terms: "values principles" },
  { title: "Our Policy", href: "/about/our-policy", terms: "policy quality safety environment" },
  { title: "Membership", href: "/about/membership", terms: "members associations membership" },
];

const searchEntries: SearchEntry[] = [
  ...specialistServiceLines.map((service) => ({
    title: service.title,
    section: "Service",
    href: `/services/${service.slug}`,
    description: service.summary,
    searchText: `${service.title} ${service.summary} ${service.body.flatMap((section) => section.items).join(" ")}`,
  })),
  ...specializationTopics.map((topic) => ({
    title: topic.title,
    section: "Domain",
    href: `/specialization/${topic.slug}`,
    description: topic.brief,
    searchText: `${topic.title} ${topic.brief} ${topic.description} ${topic.capabilities.join(" ")}`,
  })),
  ...projects.map((project) => ({
    title: project.title,
    section: "Project",
    href: `/projects/${project.slug}`,
    description: project.overview[0],
    searchText: `${project.title} ${project.category} ${project.client} ${project.overview.join(" ")} ${project.highlights.join(" ")}`,
  })),
  ...newsArticles.map((article) => ({
    title: article.title,
    section: "News",
    href: `/news/${article.slug}`,
    description: article.summary,
    searchText: `${article.title} ${article.category} ${article.summary} ${article.body.join(" ")} ${article.tags.join(" ")}`,
  })),
  ...aboutPages.map((page) => ({
    title: page.title,
    section: "About",
    href: page.href,
    description: "GEOCE Consultants: people, principles, and organizational information.",
    searchText: `${page.title} ${page.terms}`,
  })),
];

export function searchSite(query: string): SearchEntry[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  if (searchTerms.length === 0) return [];

  return searchEntries
    .map((entry) => {
      const searchableText = `${entry.title} ${entry.section} ${entry.searchText}`.toLocaleLowerCase();
      const matches = searchTerms.every((term) => searchableText.includes(term));
      const score = entry.title.toLocaleLowerCase().includes(normalizedQuery) ? 1 : 0;
      return { entry, matches, score };
    })
    .filter((result) => result.matches)
    .sort((first, second) => second.score - first.score)
    .map((result) => result.entry);
}