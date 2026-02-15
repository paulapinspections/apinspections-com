import { Calendar, CheckCircle, Phone } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Inspection",
  description: `Schedule your home inspection with ${siteConfig.businessName}. Fast, professional service in ${siteConfig.city}, ${siteConfig.state}.`,
  keywords: [
    "book home inspection",
    "schedule home inspection online",
    `${siteConfig.city} home inspection booking`,
    `${siteConfig.businessName} schedule inspection`,
  ],
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Schedule Your Inspection
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Fast, easy scheduling with {siteConfig.inspectionReportSameDay ? "same-day" : "quick"} reports
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">What to Expect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-bold text-xl mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Submit Request</h3>
              <p className="text-sm text-gray-700">
                Fill out the form below or call us directly
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-bold text-xl mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Confirmation</h3>
              <p className="text-sm text-gray-600">
                We'll confirm your appointment within 2-4 hours
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-bold text-xl mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Inspection Day</h3>
              <p className="text-sm text-gray-600">
                Thorough inspection with {siteConfig.inspectionReportSameDay ? "same-day" : "fast"} report delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Why Choose Us sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800">Licensed professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">
                      {siteConfig.inspectionReportSameDay ? "Same-day" : "Fast"} detailed reports
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Comprehensive inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Expert, friendly service</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Prefer to call?</p>
                  <a href={getPhoneLink(siteConfig.phone)}>
                    <Button className="w-full bg-black hover:bg-gray-800">
                      <Phone className="h-4 w-4 mr-2" />
                      {siteConfig.phone}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {siteConfig.bookingLink ? (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    <Calendar className="inline h-6 w-6 mr-2 text-black" />
                    Schedule Online
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Use our online scheduling tool to pick a time that works for you.
                  </p>
                  <a href={siteConfig.bookingLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-black hover:bg-gray-800 mb-6">
                      Open Scheduling Tool
                    </Button>
                  </a>
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-4 text-gray-500">Or request via form</span>
                    </div>
                  </div>
                  <ContactForm
                    subject="Inspection Booking Request"
                    showAddressField={true}
                  />
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Request an Inspection
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll contact you to confirm your appointment.
                  </p>
                  <ContactForm
                    subject="Inspection Booking Request"
                    showAddressField={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Before Your Inspection
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-black mr-3">•</span>
                <span>Ensure all utilities (water, gas, electric) are turned on</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3">•</span>
                <span>Make sure we have access to all areas (unlock gates, sheds, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3">•</span>
                <span>Clear access to electrical panels, water heater, and HVAC systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3">•</span>
                <span>Plan to attend so we can review findings with you</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
