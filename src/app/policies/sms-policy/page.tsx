import { siteConfig } from "@/site/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Policy",
  alternates: { canonical: "/policies/sms-policy" },
};

export default function SMSPolicyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">SMS/Text Messaging Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Communications</h2>
            <p>By providing your mobile phone number, you consent to receive text messages from {siteConfig.businessName} regarding:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointment confirmations and reminders</li>
              <li>Inspection updates and status</li>
              <li>Report delivery notifications</li>
              <li>Service-related communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequency</h2>
            <p>Message frequency varies based on your scheduled services. You may receive up to 5 messages per scheduled inspection.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opt-Out</h2>
            <p>You may opt out of SMS messages at any time by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Replying STOP to any text message</li>
              <li>Contacting us at {siteConfig.phone}</li>
              <li>Emailing us at <a href={`mailto:${siteConfig.email}`} className="text-black hover:underline">{siteConfig.email}</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Message and Data Rates</h2>
            <p>Message and data rates may apply. Contact your mobile carrier for details about your plan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <p>We will not share your mobile number with third parties for marketing purposes. See our Privacy Policy for more information on how we protect your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Support</h2>
            <p>For help or questions about text messages, text HELP or contact us at {siteConfig.phone}.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
