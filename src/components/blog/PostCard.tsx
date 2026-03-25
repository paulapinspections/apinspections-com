import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { getCategorySlug } from "@/site/blog-config";
import type { BlogPost } from "@/lib/blog";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-video bg-gray-200">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            {post.readingTime} min read
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm">
          <time dateTime={post.date} className="text-gray-500">
            {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-black font-medium flex items-center group-hover:underline">
            Read more
            <ArrowRight className="h-3 w-3 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
