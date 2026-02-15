import { siteConfig } from "@/site/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/policies/terms-of-service" },
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p>By accessing or using the services of {siteConfig.legalName}, you agree to be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
            <p>We provide professional home inspection services. Our inspections are visual examinations of accessible areas and systems. We do not perform destructive testing or move furniture/belongings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
            <p>Our inspections are not guarantees or warranties. We report on the condition of the property at the time of inspection. We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conditions that develop after the inspection</li>
              <li>Hidden or concealed defects</li>
              <li>Items specifically excluded from the inspection</li>
              <li>Code compliance (unless specifically requested and agreed upon)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p>Payment is due at the time of inspection unless other arrangements have been made in advance. We accept various payment methods.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
            <p>Cancellations must be made at least 24 hours in advance. Late cancellations may be subject to a fee.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
            <p>Our liability is limited to the fee paid for our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>Questions about these terms? Contact us at <a href={`mailto:${siteConfig.email}`} className="text-black hover:underline">{siteConfig.email}</a> or {siteConfig.phone}.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
