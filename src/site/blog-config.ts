export interface BlogCategoryConfig {
  name: string;
  slug: string;
  description: string;
}

export const blogCategories: BlogCategoryConfig[] = [
  {
    name: "Home Inspection Education",
    slug: "home-inspection-education",
    description: "Learn what to expect from the home inspection process",
  },
  {
    name: "Indiana Guides",
    slug: "indiana-guides",
    description: "Location-specific guides for Indiana homebuyers and sellers",
  },
  {
    name: "Home Systems & Issues",
    slug: "home-systems-and-issues",
    description: "Understanding common home issues and major systems",
  },
  {
    name: "Agent Resources",
    slug: "agent-resources",
    description: "Resources for real estate agents and professionals",
  },
];

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string) {
  return blogCategories.find((c) => c.name === name);
}

export function getCategorySlug(name: string): string {
  return getCategoryByName(name)?.slug ?? name.toLowerCase().replace(/\s+&\s+/g, "-and-").replace(/\s+/g, "-");
}
