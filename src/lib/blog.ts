import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  author: string;
  published: boolean;
  content: string;
  readingTime: number;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

let cachedPosts: BlogPost[] | null = null;

function parseFrontmatter(filePath: string): BlogPost | null {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (data.published === false) return null;

  const stats = readingTime(content);

  return {
    slug: data.slug || path.basename(filePath, ".md"),
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    updated: data.updated || undefined,
    category: data.category || "Home Inspection Education",
    tags: data.tags || [],
    excerpt: data.excerpt || content.slice(0, 160).replace(/[#*\n]/g, "").trim(),
    featuredImage: data.featuredImage || "/blog/images/default.jpg",
    featuredImageAlt: data.featuredImageAlt || data.title || "Blog post image",
    author: data.author || "AP Inspections",
    published: data.published !== false,
    content,
    readingTime: Math.ceil(stats.minutes),
  };
}

export function getAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;

  if (!fs.existsSync(BLOG_DIR)) {
    cachedPosts = [];
    return cachedPosts;
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => parseFrontmatter(path.join(BLOG_DIR, file)))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  cachedPosts = posts;
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentPost.slug);

  const scored = allPosts.map((post) => {
    let score = 0;
    if (post.category === currentPost.category) score += 3;
    const sharedTags = post.tags.filter((t) => currentPost.tags.includes(t));
    score += sharedTags.length;
    return { post, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  return String(result);
}
