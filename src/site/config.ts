export interface Service {
  name: string;
  description: string;
  startingPrice?: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface SiteConfig {
  // Business info
  businessName: string;
  legalName: string;
  tagline: string;
  
  // Contact
  phone: string;
  email: string;
  address?: string;
  city: string;
  state: string;
  zip: string;
  
  // Service details
  serviceArea: string[];
  hours: string;
  licenseNumber?: string;
  insured: boolean;
  bonded: boolean;
  
  // Branding
  primaryColor: string;
  accentColor: string;
  
  // Social
  socialLinks: SocialLinks;
  
  // Services
  services: Service[];
  
  // Content
  testimonials: Testimonial[];
  faqs: FAQ[];
  
  // Features
  inspectionReportSameDay: boolean;
  bookingLink?: string;
  
  // Images
  images: {
    logo: string;
    logoAlt: string;
    hero: string;
    ogImage: string;
  };
  
  // Site
  siteUrl: string;

  // SEO
  seoKeywords: string[];
  
  // Optional features
  showAnnouncementBanner: boolean;
  announcementText?: string;
}

export const siteConfig: SiteConfig = {
  // Business info
  businessName: "AP Inspections",
  legalName: "AP Inspections LLC",
  tagline: "Thorough, Professional, Trusted",
  
  // Contact
  phone: "(260) 665-6568",
  email: "info@ap-inspections.com",
  address: "1335 N 170 W",
  city: "Angola",
  state: "IN",
  zip: "46703",
  
  // Service details
  serviceArea: [
    "Angola",
    "Auburn",
    "Hamilton",
    "Fremont",
    "Noble County",
    "Lagrange County",
    "Steuben County",
    "Dekalb County",
  ],
  hours: "Monday - Friday: 7:00 AM - 500 PM",
  licenseNumber: "Coming Soon",
  insured: true,
  bonded: true,
  
  // Branding
  primaryColor: "black",
  accentColor: "white",
  
  // Social
  socialLinks: {
    facebook: "https://facebook.com/ap-inspections",
    instagram: "https://instagram.com/ap-inspections",
  },
  
  // Services
  services: [
    {
      name: "Pre-Purchase Inspection",
      description: "Comprehensive evaluation of the property before you buy, covering structure, systems, and safety concerns.",
      startingPrice: "$350",
      icon: "home",
    },
    {
      name: "Pre-Listing Inspection",
      description: "Get ahead of potential issues before listing your home for sale. Identify and address problems early.",
      startingPrice: "$325",
      icon: "clipboard-check",
    },
    {
      name: "New Construction Inspection",
      description: "Phase inspections during construction and final walk-through to ensure quality and code compliance.",
      startingPrice: "$400",
      icon: "hammer",
    },
    //{
      //name: "Radon Testing",
      //description: "Professional radon testing to detect dangerous levels of this invisible, odorless gas in your home.",
      //startingPrice: "$150",
      //icon: "wind",
    //},
    {
      name: "Mold Inspection",
      description: "Visual inspection and air quality testing to identify mold growth and moisture issues.",
      startingPrice: "$275",
      icon: "droplet",
    },
    //{
      //name: "Termite & Pest Inspection",
      //description: "Thorough inspection for wood-destroying insects and other pest damage.",
      //startingPrice: "$125",
      //icon: "bug",
    //},
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "David Nester",
      location: "Fremont, IN",
      text: "Premier Home Inspections was incredibly thorough and professional. The same-day report was detailed and easy to understand. Highly recommend!",
      rating: 5,
    },
  ],
  
  // FAQs
  faqs: [
    {
      question: "How long does a typical home inspection take?",
      answer: "Most inspections take 2-4 hours depending on the size and age of the home. Larger or older homes may take longer. We encourage buyers to attend so we can walk through findings together.",
    },
    {
      question: "When will I receive my inspection report?",
      answer: "We provide same-day digital reports. You'll typically receive your comprehensive report within 24 hours of the inspection, often the same evening.",
    },
    {
      question: "What does a home inspection cover?",
      answer: "We inspect the structure, roof, exterior, electrical, plumbing, HVAC, interior, insulation, ventilation, and built-in appliances. We'll identify safety issues, needed repairs, and maintenance recommendations.",
    },
    {
      question: "How much does a home inspection cost?",
      answer: "Inspection costs vary based on home size, age, and services requested. Most standard inspections range from $325-$500. Contact us for a specific quote for your property.",
    },
    {
      question: "Should I be present during the inspection?",
      answer: "We strongly encourage it! Being present allows you to ask questions, learn about your potential home, and see any issues firsthand. We'll walk through our findings with you.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed, insured, and bonded. Our license number is IN-#####, and we carry both general liability and errors & omissions insurance.",
    },
    {
      question: "Do you offer additional services like radon or mold testing?",
      answer: "We do not currently offer Radon or Mold testing. These services can often be arranged through third-party providers during the same visit.",
    },
    {
      question: "What if you find major problems?",
      answer: "We'll document all issues in detail with photos and descriptions. Our report helps you make informed decisions - whether to negotiate repairs, request credits, or walk away from the deal.",
    },
  ],
  
  // Features
  inspectionReportSameDay: true,
  bookingLink: undefined, // Can add scheduling link like "https://calendly.com/..."
  
  // Images
  images: {
    logo: "/brand/logo.png",
    logoAlt: "AP Inspections Logo",
    hero: "/brand/hero.png",
    ogImage: "/brand/og.png",
  },
  
  // Site
  siteUrl: process.env.SITE_URL || "https://ap-inspections.com",

  // SEO
  seoKeywords: [
    "home inspection",
    "home inspector",
    "property inspection",
    "real estate inspection",
    "pre-purchase inspection",
    "pre-listing inspection",
    "new construction inspection",
    "mold inspection",
    "same-day inspection report",
    "licensed home inspector",
    "insured home inspector",
    "home inspection Angola IN",
    "home inspector Steuben County",
    "home inspector Dekalb County",
  ],
  
  // Optional features
  showAnnouncementBanner: true,
  announcementText: "Now scheduling inspections for next week! Call today to reserve your spot.",
};
