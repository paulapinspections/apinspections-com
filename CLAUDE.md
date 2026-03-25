# AP Inspections Website

## Marketing Skills

This project has 33 marketing skills installed at `.agents/marketingskills/skills/`. When a user request matches a skill's trigger, read the full `SKILL.md` from the skill directory before responding. Also check for `.agents/product-marketing-context.md` before using any skill.

### How to use skills

1. Match the user's request to the most relevant skill below
2. Read `.agents/marketingskills/skills/{skill-name}/SKILL.md`
3. If the skill has a `references/` directory, read relevant reference files as needed
4. Follow the skill's instructions to complete the task

### Available Skills

#### Conversion Rate Optimization (CRO)
- **page-cro** — Optimize conversions on any marketing page. Triggers: "CRO," "conversion rate," "this page isn't converting," "landing page," "bounce rate"
- **signup-flow-cro** — Optimize signup/registration flows. Triggers: "signup conversions," "registration friction," "nobody completes registration"
- **onboarding-cro** — Post-signup activation and onboarding. Triggers: "onboarding," "activation rate," "users sign up but don't use the product"
- **form-cro** — Optimize non-signup forms (lead capture, contact, demo request). Triggers: "form optimization," "form abandonment," "too many fields"
- **popup-cro** — Create/optimize popups, modals, banners. Triggers: "exit intent," "popup," "modal," "email popup"
- **paywall-upgrade-cro** — In-app paywalls and upgrade screens. Triggers: "paywall," "upgrade screen," "freemium conversion," "free users won't upgrade"
- **ab-test-setup** — Plan and design A/B tests. Triggers: "A/B test," "split test," "experiment," "which version is better"

#### Copywriting & Content
- **copywriting** — Write marketing copy for any page. Triggers: "write copy," "headline," "CTA," "value proposition," "tagline," "hero section"
- **copy-editing** — Edit and improve existing copy. Triggers: "edit this copy," "review my copy," "proofread," "tighten this up"
- **content-strategy** — Plan what content to create. Triggers: "content strategy," "what should I write about," "blog strategy," "editorial calendar"
- **social-content** — Social media content for any platform. Triggers: "LinkedIn post," "Twitter thread," "social media," "what should I post"
- **cold-email** — B2B cold outreach emails. Triggers: "cold email," "prospecting," "outbound email," "nobody's replying"
- **email-sequence** — Automated email sequences and drip campaigns. Triggers: "email sequence," "drip campaign," "welcome series," "lifecycle emails"

#### SEO
- **seo-audit** — Audit and diagnose SEO issues. Triggers: "SEO audit," "technical SEO," "why am I not ranking," "traffic dropped"
- **ai-seo** — Optimize for AI search engines and LLM citations. Triggers: "AI SEO," "answer engine optimization," "optimize for ChatGPT/Perplexity"
- **schema-markup** — Add/fix structured data and JSON-LD. Triggers: "schema markup," "structured data," "JSON-LD," "rich snippets"
- **programmatic-seo** — Create SEO pages at scale with templates. Triggers: "programmatic SEO," "template pages," "pages at scale," "location pages"
- **site-architecture** — Plan site structure, navigation, URL hierarchy. Triggers: "sitemap," "site structure," "information architecture," "what pages do I need"

#### Paid Advertising
- **paid-ads** — Campaign strategy for Google, Meta, LinkedIn ads. Triggers: "PPC," "paid media," "ROAS," "ad campaign," "retargeting"
- **ad-creative** — Generate ad copy variations at scale. Triggers: "ad copy," "ad creative," "RSA headlines," "bulk ad copy"

#### Growth & Strategy
- **marketing-ideas** — Brainstorm marketing strategies and tactics. Triggers: "marketing ideas," "how to market," "growth ideas," "what else can I try"
- **marketing-psychology** — Apply behavioral science to marketing. Triggers: "psychology," "cognitive bias," "persuasion," "why people buy"
- **launch-strategy** — Plan product launches and announcements. Triggers: "launch," "Product Hunt," "go-to-market," "GTM plan"
- **pricing-strategy** — Pricing decisions and packaging. Triggers: "pricing," "pricing tiers," "freemium," "how much should I charge"
- **lead-magnets** — Plan lead magnets for email capture. Triggers: "lead magnet," "gated content," "ebook," "checklist," "template download"
- **free-tool-strategy** — Build free tools for marketing. Triggers: "engineering as marketing," "free tool," "calculator," "ROI calculator"
- **referral-program** — Design referral and affiliate programs. Triggers: "referral," "affiliate," "ambassador," "word of mouth"
- **churn-prevention** — Reduce churn with cancel flows and retention. Triggers: "churn," "cancel flow," "dunning," "customers are leaving"
- **competitor-alternatives** — Create competitor comparison pages. Triggers: "alternative page," "vs page," "competitor comparison"

#### Operations & Enablement
- **revops** — Revenue operations, lead scoring, handoff processes. Triggers: "RevOps," "lead scoring," "MQL," "SQL," "pipeline"
- **sales-enablement** — Sales decks, one-pagers, objection handling. Triggers: "sales deck," "pitch deck," "demo script," "sales materials"
- **analytics-tracking** — Set up and audit analytics tracking. Triggers: "set up tracking," "GA4," "conversion tracking," "UTM parameters"
- **product-marketing-context** — Create foundational product/audience context. Triggers: "product context," "positioning," "ICP," "target audience"
