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
  
  // Optional features
  showAnnouncementBanner: boolean;
  announcementText?: string;
}

export const siteConfig: SiteConfig = {
  // Business info
  businessName: "Premier Home Inspections",
  legalName: "Premier Home Inspections LLC",
  tagline: "Thorough, Professional, Trusted",
  
  // Contact
  phone: "(555) 123-4567",
  email: "info@premierhomeinspections.com",
  address: "123 Main Street",
  city: "Springfield",
  state: "IL",
  zip: "62701",
  
  // Service details
  serviceArea: [
    "Springfield",
    "Decatur",
    "Champaign",
    "Bloomington",
    "Peoria",
    "Sangamon County",
    "Macon County",
    "McLean County",
  ],
  hours: "Monday - Saturday: 7:00 AM - 7:00 PM",
  licenseNumber: "IL-12345",
  insured: true,
  bonded: true,
  
  // Branding
  primaryColor: "blue-600",
  accentColor: "orange-500",
  
  // Social
  socialLinks: {
    facebook: "https://facebook.com/premierhomeinspections",
    instagram: "https://instagram.com/premierhomeinspections",
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
    {
      name: "Radon Testing",
      description: "Professional radon testing to detect dangerous levels of this invisible, odorless gas in your home.",
      startingPrice: "$150",
      icon: "wind",
    },
    {
      name: "Mold Inspection",
      description: "Visual inspection and air quality testing to identify mold growth and moisture issues.",
      startingPrice: "$275",
      icon: "droplet",
    },
    {
      name: "Termite & Pest Inspection",
      description: "Thorough inspection for wood-destroying insects and other pest damage.",
      startingPrice: "$125",
      icon: "bug",
    },
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      location: "Springfield, IL",
      text: "Premier Home Inspections was incredibly thorough and professional. The same-day report was detailed and easy to understand. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      location: "Decatur, IL",
      text: "Best home inspector I've worked with. Found issues that could have cost me thousands. Worth every penny!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      location: "Champaign, IL",
      text: "Very knowledgeable and took the time to explain everything. The report helped us negotiate a better deal on our home.",
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
      answer: "Yes, we are fully licensed, insured, and bonded. Our license number is IL-12345, and we carry both general liability and errors & omissions insurance.",
    },
    {
      question: "Do you offer additional services like radon or mold testing?",
      answer: "Yes! In addition to standard home inspections, we offer radon testing, mold inspections, termite inspections, and more. These can often be done during the same visit.",
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
    logo: "/brand/logo.svg",
    logoAlt: "Premier Home Inspections Logo",
    hero: "/images/hero.jpg",
    ogImage: "/brand/og.png",
  },
  
  // Site
  siteUrl: process.env.SITE_URL || "https://premierhomeinspections.com",
  
  // Optional features
  showAnnouncementBanner: true,
  announcementText: "Now scheduling inspections for next week! Call today to reserve your spot.",
};
