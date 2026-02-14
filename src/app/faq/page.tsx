import Link from "next/link";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Find answers to common questions about home inspections, our process, pricing, and more. ${siteConfig.businessName} serving ${siteConfig.city}, ${siteConfig.state}.`,
  keywords: [
    "home inspection FAQ",
    "home inspection questions",
    "how long does a home inspection take",
    "home inspection report timeline",
    `${siteConfig.city} home inspection FAQ`,
  ],
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        <section className="relative z-10 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-xl text-gray-200">
                Everything you need to know about our home inspection services
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {siteConfig.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <summary className="flex justify-between items-start cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                    <ChevronDown className="h-6 w-6 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-gray-800 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're here to help! Don't hesitate to reach out with any questions about our services,
            pricing, or the inspection process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={getPhoneLink(siteConfig.phone)}>
              <Button size="lg" className="bg-black hover:bg-gray-800">
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Schedule Your Inspection?</h2>
          <p className="mt-4 text-xl text-gray-200">
            Let's get started today
          </p>
          <div className="mt-8">
            <Link href="/book">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Request Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: siteConfig.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
