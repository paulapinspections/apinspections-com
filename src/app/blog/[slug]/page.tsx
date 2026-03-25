import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, ArrowLeft, Clock, Tag } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getAllPosts, getPostBySlug, getRelatedPosts, renderMarkdown } from "@/lib/blog";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/blog/PostCard";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      post.category,
      `${siteConfig.city} home inspector`,
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await renderMarkdown(post.content);
  const relatedPosts = getRelatedPosts(post, 3);

  const publishDate = new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      {/* Article Header */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-black">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-black text-white rounded-full">
              {post.category}
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {post.title}
          </h1>

          <div className="flex items-center text-sm text-gray-600">
            <span>By {post.author}</span>
            <span className="mx-2">|</span>
            <time dateTime={post.date}>{publishDate}</time>
            {post.updated && post.updated !== post.date && (
              <>
                <span className="mx-2">|</span>
                <span>
                  Updated{" "}
                  {new Date(post.updated + "T00:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4 text-gray-500" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Have Questions About Your Home?</h2>
          <p className="mt-4 text-xl text-gray-200">
            Schedule a professional inspection and get answers
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Request Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={getPhoneLink(siteConfig.phone)}>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `${siteConfig.siteUrl}${post.featuredImage}`,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.businessName,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}${siteConfig.images.logo}`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteConfig.siteUrl}/blog/${post.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}
