import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  FileText, 
  Phone,
  Star,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home Inspector in ${siteConfig.city}, ${siteConfig.state} — ${siteConfig.businessName}`,
  description: `${siteConfig.businessName} provides certified, professional home inspection services in ${siteConfig.city}, ${siteConfig.state} and surrounding counties. Same-day detailed reports. AHI certified. Call ${siteConfig.phone}.`,
  keywords: [
    ...siteConfig.seoKeywords,
    `${siteConfig.businessName} home inspection`,
    `${siteConfig.city} home inspector`,
    `best home inspector ${siteConfig.city} ${siteConfig.state}`,
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        {/* Hero Section */}
        <section className="relative z-10 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Certified Home Inspections in Indiana surrounding Angola
              </h1>
              <p className="mt-3 text-lg font-medium text-gray-300 tracking-wide">
                {siteConfig.tagline}
              </p>
              <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-200">
                Professional home inspection services serving northeast Indiana.
                {siteConfig.inspectionReportSameDay && " Same-day detailed reports."}
              </p>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Licensed Professionals</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Professional, standards-based inspections you can trust
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Thorough Inspections</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Comprehensive evaluation of all major systems and components
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Fast Scheduling</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Quick turnaround times to keep your transaction on track
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {siteConfig.inspectionReportSameDay ? "Same-Day Reports" : "Detailed Reports"}
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {siteConfig.inspectionReportSameDay
                    ? "Receive your comprehensive report the same day"
                    : "Easy-to-read reports with photos and recommendations"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-700">
              Comprehensive inspection services for every need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.slice(0, 6).map((service) => (
              <div key={service.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-3 text-gray-700">{service.description}</p>
                <p className="mt-4 text-lg font-semibold text-black">
                  Contact me for Pricing
                </p>
              </div>
            ))}
          </div>
          <div className="text-center text-black mt-10">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Your Inspector */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Your Inspector</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Paul Wickerr Co-Founder.jpeg"
                alt="Paul Wicker, Owner of AP Inspections LLC"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Paul Wicker</h3>
              <p className="mt-1 text-sm font-medium text-gray-500 uppercase tracking-wide">Owner, AP Inspections LLC</p>
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  Paul Wicker is a serial entrepreneur, certified home inspector, and public safety leader based in Steuben County, Indiana. As the owner of AP Inspections LLC, Paul helps homebuyers and sellers make informed decisions with thorough, honest property inspections. He is also the Deputy Director of Emergency Management for Steuben County, bringing decades of crisis response experience to his community.
                </p>
                <p>
                  Paul retired from the fire service after 27 years of dedicated service, a career that shaped his commitment to protecting others. Beyond emergency response, he brings 20 years of fabrication experience and nine years of concrete work to the table—hands-on skills that give him a uniquely practical eye during inspections.
                </p>
                <p>
                  As co-founder of Inspect Forge, Paul is helping shape the future of the inspection industry. He holds multiple certifications including a CDL, and when he&apos;s not working or volunteering, he&apos;s hunting, spending time with family, or cranking up his favorite 80s music. For Paul, it&apos;s always about helping people—on the job and off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Areas We Serve</h2>
            <p className="mt-4 text-lg text-gray-700">
              Proudly serving {siteConfig.city} and surrounding communities
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.serviceArea.map((area) => (
              <span
                key={area}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-800 font-medium border border-gray-300"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/areas-served">
              <Button variant="link" className="text-black">
                See full coverage area →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {siteConfig.testimonials.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {siteConfig.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-black fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-700">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Schedule Your Inspection?</h2>
          <p className="mt-4 text-xl text-gray-200">
            Call us today or request an inspection online
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Request Inspection
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

      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": siteConfig.siteUrl,
            name: siteConfig.businessName,
            legalName: siteConfig.legalName,
            description: `Certified home inspection services in ${siteConfig.city}, ${siteConfig.state}. Pre-purchase, pre-listing, and new construction inspections with same-day reports.`,
            url: siteConfig.siteUrl,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            ...(siteConfig.googleBusinessProfile && {
              sameAs: [siteConfig.googleBusinessProfile],
            }),
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address,
              addressLocality: siteConfig.city,
              addressRegion: siteConfig.state,
              postalCode: siteConfig.zip,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 41.6348,
              longitude: -84.9994,
            },
            areaServed: siteConfig.serviceArea.map(area => ({
              "@type": "AdministrativeArea",
              name: area,
            })),
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
              },
            ],
            priceRange: "$$",
            image: `${siteConfig.siteUrl}${siteConfig.images.ogImage}`,
            logo: `${siteConfig.siteUrl}${siteConfig.images.logo}`,
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Professional Certification",
              name: "AHI Certified Home Inspector",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Home Inspection Services",
              itemListElement: siteConfig.services.map(service => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />

      {/* JSON-LD Review Schema */}
      {siteConfig.testimonials.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": siteConfig.siteUrl,
              name: siteConfig.businessName,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: (siteConfig.testimonials.reduce((sum, t) => sum + t.rating, 0) / siteConfig.testimonials.length).toFixed(1),
                reviewCount: siteConfig.testimonials.length,
                bestRating: "5",
                worstRating: "1",
              },
              review: siteConfig.testimonials.map(testimonial => ({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: testimonial.rating,
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: testimonial.name,
                },
                reviewBody: testimonial.text,
              })),
            }),
          }}
        />
      )}
    </div>
  );
}
