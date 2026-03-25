"use client";

import { useState } from "react";
import { PostCard } from "./PostCard";
import type { BlogPost } from "@/lib/blog";
import type { BlogCategoryConfig } from "@/site/blog-config";

interface BlogPostFilterProps {
  posts: BlogPost[];
  categories: BlogCategoryConfig[];
}

export function BlogPostFilter({ posts, categories }: BlogPostFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() =>
              setActiveCategory(
                activeCategory === category.name ? null : category.name
              )
            }
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.name
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No posts in this category yet. Check back soon.</p>
        </div>
      )}
    </div>
  );
}
