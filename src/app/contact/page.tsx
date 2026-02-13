import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink, getEmailLink } from "@/lib/utils";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.businessName} for home inspection services in ${siteConfig.city}, ${siteConfig.state}. Call ${siteConfig.phone} or use our online form.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-xl text-blue-100">
              Get in touch - we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-800 mb-8">
                Have questions or ready to schedule an inspection? We'd love to hear from you.
                Fill out the form or give us a call.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href={getPhoneLink(siteConfig.phone)}
                    className="text-blue-600 text-lg hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Email</h3>
                  <a
                    href={getEmailLink(siteConfig.email)}
                    className="text-blue-600 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {siteConfig.address && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Address</h3>
                    <p className="text-gray-600">
                      {siteConfig.address}
                      <br />
                      {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Hours</h3>
                  <p className="text-gray-600">{siteConfig.hours}</p>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Phone className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-sm text-gray-600">Speak with us directly</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Mail className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
