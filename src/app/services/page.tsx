import Link from "next/link";
import { 
  Home, 
  ClipboardCheck, 
  Hammer, 
  Wind, 
  Droplet, 
  Bug,
  Phone,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home Inspection Services in ${siteConfig.city}, ${siteConfig.state}`,
  description: `Professional home inspection services in ${siteConfig.city}, ${siteConfig.state}. Pre-purchase, pre-listing, and new construction inspections with same-day reports. Contact us for pricing. Call ${siteConfig.phone}.`,
  keywords: [
    "home inspection services",
    "pre-purchase home inspection",
    "pre-listing home inspection",
    "new construction inspection",
    `${siteConfig.city} inspection services`,
    `home inspection cost ${siteConfig.city}`,
  ],
  alternates: {
    canonical: "/services",
  },
};

const iconMap: { [key: string]: any } = {
  home: Home,
  "clipboard-check": ClipboardCheck,
  hammer: Hammer,
  wind: Wind,
  droplet: Droplet,
  bug: Bug,
};

export default function ServicesPage() {
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Home Inspection Services in {siteConfig.city}, {siteConfig.state}
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive home inspection services to protect your investment
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {siteConfig.services.map((service) => {
                const Icon = service.icon ? iconMap[service.icon] : Home;
                return (
                  <div
                    key={service.name}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 mb-6">
                      {Icon && <Icon className="h-8 w-8 text-black" />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <p className="text-xl font-bold text-black">
                      Contact me for Pricing
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What's Included in Every Inspection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Structural components (foundation, framing, roof structure)",
              "Exterior (siding, windows, doors, drainage)",
              "Roofing system and attic",
              "Plumbing system and fixtures",
              "Electrical system and panels",
              "HVAC system (heating and cooling)",
              "Interior (walls, floors, ceilings, doors, windows)",
              "Insulation and ventilation",
              "Built-in appliances",
              "Garage and detached structures",
              "Safety concerns and code violations",
              "Detailed photo documentation",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <ClipboardCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white font-bold text-2xl mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Schedule</h3>
              <p className="text-gray-700">Call or book online to schedule your inspection</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white font-bold text-2xl mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Inspect</h3>
              <p className="text-gray-700">We thoroughly inspect the property (2-4 hours)</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white font-bold text-2xl mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Report</h3>
              <p className="text-gray-700">
                Receive {siteConfig.inspectionReportSameDay ? "same-day" : "next-day"} detailed report with photos
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white font-bold text-2xl mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Support</h3>
              <p className="text-gray-700">We're available to answer questions about your report</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-gray-200">
            Schedule your inspection today
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
