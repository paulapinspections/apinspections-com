import { siteConfig } from "@/site/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  alternates: { canonical: "/policies/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p>Payment for inspection services is due at the time of service unless other arrangements have been made in advance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
            <p>If you need to cancel or reschedule your inspection:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>24+ hours notice:</strong> Full refund or reschedule with no penalty</li>
              <li><strong>Less than 24 hours:</strong> May be subject to a cancellation fee</li>
              <li><strong>No-show:</strong> Full payment may be required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Guarantee</h2>
            <p>We stand behind our work. If you're not satisfied with our service, please contact us within 48 hours and we'll work to resolve the issue.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deposits</h2>
            <p>If a deposit is required for your inspection:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deposits are typically non-refundable unless we cancel</li>
              <li>Deposits are applied to the total inspection fee</li>
              <li>Rescheduling with proper notice will not forfeit your deposit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Weather and Emergencies</h2>
            <p>If we must cancel due to weather or emergencies, you will receive a full refund or the option to reschedule at no additional charge.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions</h2>
            <p>For questions about our refund policy, contact us at <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-black hover:underline">{siteConfig.phone}</a> or <a href={`mailto:${siteConfig.email}`} className="text-black hover:underline">{siteConfig.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
