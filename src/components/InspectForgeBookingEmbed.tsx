"use client";

import Script from "next/script";

export function InspectForgeBookingEmbed() {
  return (
    <div id="inspectforge-booking" className="min-h-[400px]">
      <Script
        src="https://app.inspectforge.com/widget.js"
        data-slug="ap-inspections-llc-in"
        strategy="afterInteractive"
      />
    </div>
  );
}
