"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Areas Served", href: "/areas-served" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1 border border-gray-200">
                <Image
                  src={siteConfig.images.logo}
                  alt={siteConfig.images.logoAlt}
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <span className="text-lg font-bold text-black hidden sm:inline">
                {siteConfig.businessName}
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a href={getPhoneLink(siteConfig.phone)} className="ml-4">
              <Button size="sm" className="bg-black hover:bg-gray-800">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <a href={getPhoneLink(siteConfig.phone)} className="block">
                  <Button className="w-full bg-black hover:bg-gray-800">
                    <Phone className="h-4 w-4 mr-2" />
                    Call {siteConfig.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
