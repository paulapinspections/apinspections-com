import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/site/config";
import { blogCategories } from "@/site/blog-config";
import { getAllPosts } from "@/lib/blog";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BlogPostFilter } from "@/components/blog/BlogPostFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Inspection Blog — Tips, Guides & Indiana Resources",
  description: `Home inspection tips, guides, and resources for Indiana homebuyers and sellers. Expert advice from ${siteConfig.businessName} in ${siteConfig.city}, ${siteConfig.state}.`,
  keywords: [
    "home inspection blog",
    "home inspection tips",
    "Indiana home buying guide",
    "home inspection checklist",
    `${siteConfig.city} home inspector blog`,
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Hero */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        <section className="relative z-10 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Home Inspection Blog
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
                Expert tips, guides, and resources for homebuyers, sellers, and agents in northeast Indiana
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <BlogPostFilter posts={posts} categories={blogCategories} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We are working on helpful guides and resources for homebuyers and sellers in northeast Indiana. Check back soon.
              </p>
              <Link href="/contact">
                <Button variant="outline">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Schedule Your Inspection?</h2>
          <p className="mt-4 text-xl text-gray-200">
            Call today or request an inspection online
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

      {/* JSON-LD Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${siteConfig.businessName} Blog`,
            description: `Home inspection tips, guides, and resources from ${siteConfig.businessName}`,
            url: `${siteConfig.siteUrl}/blog`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.businessName,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.siteUrl}${siteConfig.images.logo}`,
              },
            },
          }),
        }}
      />
    </div>
  );
}
