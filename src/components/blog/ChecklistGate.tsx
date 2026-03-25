"use client";

import { useState } from "react";
import { FileText, Download, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistOption {
  id: string;
  label: string;
  description: string;
  pdfUrl: string;
}

const checklists: ChecklistOption[] = [
  {
    id: "pre-purchase",
    label: "Pre-Purchase Inspection Checklist",
    description: "Every item we evaluate when you are buying a home",
    pdfUrl: "/PrePurchase Inspection checklist.pdf",
  },
  {
    id: "pre-listing",
    label: "Pre-Listing Inspection Checklist",
    description: "What we check when sellers inspect before listing",
    pdfUrl: "/Pre Listing Inspection checklist.pdf",
  },
];

interface ChecklistGateProps {
  showOnly?: "pre-purchase" | "pre-listing";
}

export function ChecklistGate({ showOnly }: ChecklistGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [timestamp] = useState(() => String(Date.now()));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const visibleChecklists = showOnly
    ? checklists.filter((c) => c.id === showOnly)
    : checklists;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/checklist-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          checklist: showOnly || "both",
          honeypot,
          timestamp,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsUnlocked(true);
      setIsSubmitting(false);

      // Auto-trigger download(s)
      for (const checklist of visibleChecklists) {
        const link = document.createElement("a");
        link.href = checklist.pdfUrl;
        link.download = "";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch {
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <div id="checklist-download" className="my-10 rounded-lg border-2 border-gray-200 bg-gray-50 p-6 sm:p-8">
      {!isUnlocked ? (
        <>
          <div className="flex items-start gap-3 mb-4">
            <FileText className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Download {visibleChecklists.length > 1 ? "Our Inspection Checklists" : `the ${visibleChecklists[0].label}`}
              </h3>
              <p className="text-gray-600 mt-1">
                See exactly what a professional inspector evaluates. Enter your name and email to download.
              </p>
            </div>
          </div>

          {/* Checklist previews */}
          <div className="space-y-2 mb-6">
            {visibleChecklists.map((c) => (
              <div key={c.id} className="flex items-center gap-2 text-sm text-gray-700">
                <Download className="h-4 w-4 text-gray-400" />
                <span><strong>{c.label}</strong> — {c.description}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-black hover:bg-gray-800"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download {visibleChecklists.length > 1 ? "Checklists" : "Checklist"}
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500">
              We will never share your email. You may receive a follow-up about our inspection services.
            </p>
          </form>
        </>
      ) : (
        <div className="text-center">
          <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Download Started</h3>
          <p className="text-gray-600 mb-4">
            Your {visibleChecklists.length > 1 ? "checklists are" : "checklist is"} downloading now.
            If the download did not start, use the links below.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {visibleChecklists.map((c) => (
              <a
                key={c.id}
                href={c.pdfUrl}
                download
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
