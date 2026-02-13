import Link from "next/link";
import { Shield, Award, Clock, Users, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.businessName}, your trusted home inspection service in ${siteConfig.city}, ${siteConfig.state}. Licensed, insured, and committed to excellence.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
            <p className="mt-4 text-xl text-blue-100">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white-900 mb-6">
              Your Trusted Home Inspection Partner
            </h2>
            <p className="text-white-800 mb-4">
              Welcome to {siteConfig.businessName}, your trusted partner for comprehensive home
              inspection services in {siteConfig.city}, {siteConfig.state} and surrounding areas.
              We understand that buying or selling a home is one of the most significant financial
              decisions you'll make, and we're here to provide you with the information you need to
              make confident, informed choices.
            </p>
            <p className="text-white-800 mb-4">
              Our mission is simple: to provide thorough, professional, and unbiased home
              inspections that help you understand the true condition of your property. We believe
              in transparency, attention to detail, and exceptional customer service.
            </p>
            <h3 className="text-2xl font-bold text-white-900 mt-8 mb-4">
              Why Choose {siteConfig.businessName}?
            </h3>
            <p className="text-white-800 mb-4">
              With years of experience in the home inspection industry, we've built our reputation
              on reliability, expertise, and a commitment to our clients. Every inspection is
              performed with the same level of care and professionalism, whether you're a first-time
              homebuyer or a seasoned real estate investor.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Licensed & Insured</h3>
              <p className="text-blue-700">
                {siteConfig.licenseNumber && `License #${siteConfig.licenseNumber}. `}
                Fully insured and bonded for your protection
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Experienced</h3>
              <p className="text-blue-700">
                Years of experience inspecting homes throughout {siteConfig.state}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Fast Reports</h3>
              <p className="text-blue-700">
                {siteConfig.inspectionReportSameDay
                  ? "Same-day delivery of comprehensive inspection reports"
                  : "Quick turnaround on detailed inspection reports"}
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Client-Focused</h3>
              <p className="text-blue-700">
                We're available to answer your questions before, during, and after the inspection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Commitment</h2>
          <div className="space-y-6 text-gray-800">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Thorough Inspections</h3>
              <p>
                We inspect every accessible area of the home, from foundation to roof. Our
                inspections typically take 2-4 hours, and we encourage you to be present so we can
                walk through our findings together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
              <p>
                We believe in plain language, not technical jargon. Our reports are easy to
                understand, with photos and clear descriptions of any issues found.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Unbiased Reporting</h3>
              <p>
                We work for you, not the buyer, seller, or real estate agent. Our job is to provide
                you with accurate, unbiased information about the property's condition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Continued Support</h3>
              <p>
                After the inspection, we're available to answer questions about your report. We want
                you to feel confident and informed about your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Area</h2>
          <p className="text-lg text-gray-600 mb-8">
            We proudly serve {siteConfig.city} and surrounding communities including:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {siteConfig.serviceArea.map((area) => (
              <span
                key={area}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
          <Link href="/areas-served">
            <Button variant="link" className="text-blue-600">
              View detailed coverage area →
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Schedule your inspection today
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Request Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={getPhoneLink(siteConfig.phone)}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
