"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "@/site/config";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (!dismissed && siteConfig.showAnnouncementBanner && siteConfig.announcementText) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement-dismissed", "true");
  };

  if (!isVisible || !siteConfig.showAnnouncementBanner || !siteConfig.announcementText) {
    return null;
  }

  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <p className="text-sm font-medium flex-1 text-center sm:text-left">
            {siteConfig.announcementText}
          </p>
          <button
            onClick={handleDismiss}
            className="ml-3 flex-shrink-0 rounded-md p-1 hover:bg-gray-800 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
