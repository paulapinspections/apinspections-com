import { siteConfig } from "@/site/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  alternates: { canonical: "/policies/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p>{siteConfig.businessName} is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Measures</h2>
            <p>We take the following measures to ensure accessibility:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include accessibility as part of our mission statement</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conformance Status</h2>
            <p>We strive to conform to WCAG 2.1 level AA standards. We welcome feedback on how we can improve accessibility.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback</h2>
            <p>If you encounter accessibility barriers, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>Phone: <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-blue-600 hover:underline">{siteConfig.phone}</a></li>
              <li>Email: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
