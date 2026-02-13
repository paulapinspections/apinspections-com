import { siteConfig } from "@/site/config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: { canonical: "/policies/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More Information</h2>
            <p>For more details on how we handle your data, see our <Link href="/policies/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
            <p className="mt-4">Questions? Contact us at <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
