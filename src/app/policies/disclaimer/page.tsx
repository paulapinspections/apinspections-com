import { siteConfig } from "@/site/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  alternates: { canonical: "/policies/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
            <p className="font-semibold">IMPORTANT NOTICE</p>
            <p className="mt-2">A home inspection is a visual examination of accessible areas and systems. It is not a guarantee, warranty, or insurance policy.</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of Inspection</h2>
            <p>Our inspections are limited to visible and accessible components. We do not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Move furniture, stored items, or personal belongings</li>
              <li>Perform any destructive or invasive testing</li>
              <li>Inspect areas that are not accessible or visible</li>
              <li>Predict future conditions or failures</li>
              <li>Determine the presence of hazardous materials (unless specifically contracted)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not a Guarantee</h2>
            <p>This inspection is not a guarantee or warranty of any kind. Components that are functioning at the time of inspection may fail at any time. We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conditions that were not visible or accessible during the inspection</li>
              <li>Defects that develop after the inspection date</li>
              <li>The cost of repairing or replacing any items</li>
              <li>Estimates on the remaining life of any component or system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommendations</h2>
            <p>When we recommend further evaluation by a specialist, we strongly encourage you to do so before closing. Specialists may identify additional issues or provide cost estimates for repairs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety</h2>
            <p>If we identify safety concerns, they should be addressed immediately by qualified professionals. Safety issues take priority over other repairs or improvements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Report</h2>
            <p>Our inspection report is prepared for the exclusive use of our client. Others may not rely on this report without our written permission. The report should not be considered a substitute for warranties, insurance, or specialized inspections.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions</h2>
            <p>Contact {siteConfig.businessName} at {siteConfig.phone} or <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a> with questions about this disclaimer.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
