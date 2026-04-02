"use client";

import Script from "next/script";

export function InspectForgeWidget() {
  return (
    <Script
      src="https://app.inspectforge.com/widget.js"
      data-slug="ap-inspections-llc-in"
      strategy="afterInteractive"
    />
  );
}
