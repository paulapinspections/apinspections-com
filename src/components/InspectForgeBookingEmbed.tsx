"use client";

import Script from "next/script";

export function InspectForgeBookingEmbed() {
  return (
    <div className="min-h-[400px]">
      <div data-inspectforge-widget="ap-inspections-llc-in" />
      <Script
        src="https://app.inspectforge.com/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
