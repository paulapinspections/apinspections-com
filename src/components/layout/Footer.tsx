import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink, getEmailLink } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
    youtube: Youtube,
  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="inline-block bg-white rounded-md p-2 mb-4">
              <Image
                src={siteConfig.images.logo}
                alt={siteConfig.images.logoAlt}
                width={170}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm mb-4 text-gray-400">{siteConfig.tagline}</p>
            {siteConfig.licenseNumber && (
              <p className="text-sm text-gray-400">License: {siteConfig.licenseNumber}</p>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors text-gray-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors text-gray-300">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors text-gray-300">About</Link></li>
              <li><Link href="/areas-served" className="hover:text-white transition-colors text-gray-300">Areas Served</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors text-gray-300">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors text-gray-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-gray-300">Contact</Link></li>
              {siteConfig.sampleReportUrl && (
                <li>
                  <a
                    href={siteConfig.sampleReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-gray-300"
                  >
                    Sample Report
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/policies/privacy-policy" className="hover:text-white transition-colors text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/policies/terms-of-service" className="hover:text-white transition-colors text-gray-300">Terms of Service</Link></li>
              <li><Link href="/policies/disclaimer" className="hover:text-white transition-colors text-gray-300">Disclaimer</Link></li>
              <li><Link href="/policies/accessibility" className="hover:text-white transition-colors text-gray-300">Accessibility</Link></li>
              <li><Link href="/policies/cookie-policy" className="hover:text-white transition-colors text-gray-300">Cookie Policy</Link></li>
              <li><Link href="/policies/refund-policy" className="hover:text-white transition-colors text-gray-300">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                <a href={getPhoneLink(siteConfig.phone)} className="hover:text-white transition-colors text-gray-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                <a href={getEmailLink(siteConfig.email)} className="hover:text-white transition-colors break-all text-gray-300">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.address && (
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                  <div className="text-gray-300">
                    {siteConfig.address}<br />
                    {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                  </div>
                </li>
              )}
            </ul>

            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {siteConfig.socialLinks && Object.entries(siteConfig.socialLinks).map(([platform, url]) => {
                if (!url) return null;
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return Icon ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
