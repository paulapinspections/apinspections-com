import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas Served",
  description: `${siteConfig.businessName} provides home inspection services throughout ${siteConfig.city}, ${siteConfig.state} and surrounding areas including ${siteConfig.serviceArea.slice(0, 3).join(", ")}.`,
  keywords: [
    "home inspection areas served",
    `${siteConfig.city} home inspector`,
    ...siteConfig.serviceArea.map((area) => `home inspection ${area}`),
  ],
  alternates: {
    canonical: "/areas-served",
  },
};

export default function AreasServedPage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        {/* Header */}
        <section className="relative z-10 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Areas We Serve</h1>
              <p className="mt-4 text-xl text-gray-200">
                Professional home inspection services throughout {siteConfig.city} and beyond
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <MapPin className="h-16 w-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Serving {siteConfig.city}, {siteConfig.state} and Surrounding Communities
              </h2>
              <p className="text-xl font-bold text-gray-200 mb-4">
                We're proud to serve homeowners, buyers, and sellers throughout the region. If your
                area isn't listed below, please call us - we may still be able to help!
              </p>
            </div>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {siteConfig.serviceArea.map((area) => (
                <div
                  key={area}
                  className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <MapPin className="h-6 w-6 text-black mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-white/90 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-black-900 mb-4">
                  Don't See Your Area Listed?
                </h3>
                <p className="text-gray-700 mb-6">
                  We regularly expand our service area and may be able to accommodate locations not
                  listed above. Give us a call at{" "}
                  <a href={getPhoneLink(siteConfig.phone)} className="text-black font-semibold hover:underline">
                    {siteConfig.phone}
                  </a>{" "}
                  to discuss your needs. We're happy to work with you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Coverage Details */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What to Expect
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Same Service Quality Everywhere</h3>
                <p className="text-gray-800">
                  No matter where you're located in our service area, you'll receive the same
                  thorough, professional inspection and detailed reporting.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Flexible Scheduling</h3>
                <p className="text-gray-700">
                  We work around your schedule and can typically accommodate inspections within a
                  few days of your request.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Knowledge</h3>
                <p className="text-gray-700">
                  We're familiar with the unique characteristics of homes throughout the region,
                  from older historic properties to new construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Schedule?</h2>
          <p className="mt-4 text-xl text-gray-200">
            Contact us today to book your inspection
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
    </div>
  );
}
