import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, MapPin, Clock, Shield, CheckCircle, FileText } from "lucide-react";
import { siteConfig } from "@/site/config";
import { serviceAreaCities } from "@/site/service-areas";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceAreaCities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = serviceAreaCities.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `Home Inspector in ${city.name}, ${city.stateAbbr} — ${siteConfig.businessName}`,
    description: `Professional home inspection services in ${city.name}, ${city.stateAbbr} (${city.county}). AHI certified inspector. Same-day reports. Serving ${city.name} and surrounding areas. Call ${siteConfig.phone}.`,
    keywords: [
      `home inspector ${city.name} ${city.stateAbbr}`,
      `home inspection ${city.name} ${city.stateAbbr}`,
      `home inspector ${city.county}`,
      `home inspection near ${city.name}`,
      `property inspection ${city.name}`,
      `pre-purchase inspection ${city.name}`,
      `${city.name} home inspector`,
    ],
    alternates: {
      canonical: `/areas-served/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = serviceAreaCities.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearbyCities = serviceAreaCities
    .filter((c) => c.slug !== city.slug && c.county === city.county)
    .slice(0, 4);

  const otherCountyCities = serviceAreaCities
    .filter((c) => c.slug !== city.slug && c.county !== city.county && c.tier <= 2)
    .slice(0, 4);

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
                Home Inspector in {city.name}, {city.stateAbbr}
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
                Certified, professional home inspections serving {city.name} and {city.county}.
                {siteConfig.inspectionReportSameDay && " Same-day detailed reports."}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Schedule Inspection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={getPhoneLink(siteConfig.phone)}>
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                    <Phone className="mr-2 h-5 w-5" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About This Area */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Home Inspections in {city.name}, {city.stateAbbr}
              </h2>
              <p className="text-gray-800 mb-4">
                {city.description}
              </p>
              <p className="text-gray-800 mb-4">
                {siteConfig.businessName} provides comprehensive home inspection services to buyers
                and sellers in {city.name}. Based in nearby Angola, {city.stateAbbr} — just{" "}
                {city.driveTimeMinutes} minutes away — we offer the same thorough, professional
                inspections with same-day detailed reports.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Common Homes in {city.name}
              </h3>
              <p className="text-gray-800 mb-4">{city.commonHomes}</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Local Inspection Considerations
              </h3>
              <p className="text-gray-800 mb-4">{city.localContext}</p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span>{city.county}, {city.state}</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span>~{city.driveTimeMinutes} min from Angola</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span>Licensed &amp; AHI Certified</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                    <span>Same-day detailed reports</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <a href={getPhoneLink(siteConfig.phone)}>
                    <Button className="w-full bg-black hover:bg-gray-800">
                      <Phone className="h-4 w-4 mr-2" />
                      {siteConfig.phone}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Inspection Services Available in {city.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteConfig.services.map((service) => (
              <div
                key={service.name}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-lg font-bold text-black">
                  Contact me for Pricing
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="link" className="text-black">
                View all services and details →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why {city.name} Homebuyers Choose {siteConfig.businessName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">AHI Certified Inspector</h3>
                <p className="text-gray-700 text-sm">
                  AHI certified — trained to identify issues others miss.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Same-Day Reports</h3>
                <p className="text-gray-700 text-sm">
                  Detailed inspection report delivered the same day — don't lose negotiating time.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Just {city.driveTimeMinutes} Minutes Away</h3>
                <p className="text-gray-700 text-sm">
                  Based in Angola — close enough for fast scheduling and local knowledge.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Thorough &amp; Unbiased</h3>
                <p className="text-gray-700 text-sm">
                  We work for you, not the seller or agent. Every system inspected, every issue documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {(nearbyCities.length > 0 || otherCountyCities.length > 0) && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[...nearbyCities, ...otherCountyCities].map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/areas-served/${nearby.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-800 font-medium border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors"
                >
                  {nearby.name}, {nearby.stateAbbr}
                </Link>
              ))}
              <Link
                href="/areas-served"
                className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                View All Areas →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Schedule Your {city.name} Home Inspection
          </h2>
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

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${siteConfig.businessName} — ${city.name}, ${city.stateAbbr}`,
            url: `${siteConfig.siteUrl}/areas-served/${city.slug}`,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address,
              addressLocality: siteConfig.city,
              addressRegion: siteConfig.state,
              postalCode: siteConfig.zip,
              addressCountry: "US",
            },
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: `${city.county}, ${city.state}`,
              },
            },
            priceRange: "$$",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Home Inspection Services",
              itemListElement: siteConfig.services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  description: service.description,
                  areaServed: {
                    "@type": "City",
                    name: city.name,
                  },
                },
              })),
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteConfig.siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Areas Served",
                  item: `${siteConfig.siteUrl}/areas-served`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: `${city.name}, ${city.stateAbbr}`,
                  item: `${siteConfig.siteUrl}/areas-served/${city.slug}`,
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
