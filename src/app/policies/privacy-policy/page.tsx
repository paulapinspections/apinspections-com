import Link from "next/link";
import { siteConfig } from "@/site/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.businessName}. Learn how we collect, use, and protect your information.`,
  alternates: {
    canonical: "/policies/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-800">
              {siteConfig.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects
              your privacy and is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-800 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and
                property address when you request services or contact us
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including
                IP address, browser type, and pages visited
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking technologies to
                improve your experience on our site
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-800 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>Provide and improve our home inspection services</li>
              <li>Respond to your inquiries and schedule appointments</li>
              <li>Send you service-related communications</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-800">
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Service providers who help us operate our business</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-800">
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700">
              We use cookies to enhance your browsing experience. You can control cookies through
              your browser settings. For more information, see our{" "}
              <Link href="/policies/cookie-policy" className="text-black hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>{siteConfig.legalName}</strong>
              <br />
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-black hover:underline">
                {siteConfig.email}
              </a>
              <br />
              Phone:{" "}
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-black hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
