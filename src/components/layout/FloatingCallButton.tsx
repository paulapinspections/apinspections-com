"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";

export function FloatingCallButton() {
  return (
    <a
      href={getPhoneLink(siteConfig.phone)}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110 md:hidden"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
