"use client";

import Script from "next/script";

export function InspectForgeWidget() {
  return (
    <>
      <div data-inspectforge-widget="ap-inspections-llc-in" />
      <Script
        src="https://app.inspectforge.com/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
