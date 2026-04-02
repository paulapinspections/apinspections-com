"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/site/config";
import { getPhoneLink } from "@/lib/utils";

export function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      <Link
        href="/book"
        className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110"
        aria-label="Book online"
      >
        <CalendarCheck className="h-6 w-6" />
      </Link>
      <a
        href={getPhoneLink(siteConfig.phone)}
        className="flex items-center justify-center w-14 h-14 bg-white text-black border-2 border-black rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
