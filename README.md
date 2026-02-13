# Home Inspector Website Template

A modern, fast, SEO-friendly website template for home inspection businesses. Built with Next.js, TypeScript, and Tailwind CSS. Designed to be easily customized per client by editing a single config file.

## 🚀 Features

- **Single Source of Truth**: All business details in one config file (`src/site/config.ts`)
- **Modern Tech Stack**: Next.js 15+ with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Metadata API, OpenGraph tags, JSON-LD schema, sitemap, robots.txt
- **Contact Forms**: Integrated with Resend API with spam protection and fallback
- **Responsive Design**: Mobile-first, fast, accessible
- **Production Ready**: Optimized for Vercel deployment with Cloudflare
- **Zero Database**: Static site with API routes - no database needed

## 📋 Pages Included

- Home (with hero, services, testimonials, value props)
- Services
- About
- Areas Served
- FAQ
- Contact
- Book/Request Inspection
- Privacy Policy
- Terms of Service
- Disclaimer
- Cookie Policy
- Accessibility Statement
- Refund Policy
- SMS Policy

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Resend
- **Deployment**: Vercel
- **CDN**: Cloudflare (optional)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git

### Setup

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/homeinspector-template.git
   cd homeinspector-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create environment file**:
   ```bash
   cp .env.example .env.local
   ```

4. **Edit `.env.local`** with your values:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_TO_EMAIL=your-email@example.com
   SITE_URL=https://yourdomain.com
   ```

5. **Run development server**:
   ```bash
   npm run dev
   ```

6. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customizing for a Client

### Step 1: Edit the Config File

Open `src/site/config.ts` and update all values:

```typescript
export const siteConfig: SiteConfig = {
  businessName: "Your Client's Business Name",
  legalName: "Your Client's Legal Name LLC",
  tagline: "Professional, Reliable, Trusted",
  phone: "(555) 123-4567",
  email: "info@clientdomain.com",
  // ... update all fields
};
```

### Step 2: Replace Logo and Images

1. **Logo**: Replace `public/brand/logo.svg` with the client's logo
2. **Hero Image**: Add a hero image to `public/images/hero.jpg`
3. **OG Image**: Add OpenGraph image to `public/brand/og.png` (1200x630px)

### Step 3: Update Environment Variables

Update `.env.local` with client-specific values:
```env
RESEND_API_KEY=re_client_api_key
CONTACT_TO_EMAIL=client@example.com
SITE_URL=https://clientdomain.com
```

### Step 4: Test Locally

```bash
npm run dev
```

Verify all pages, forms, and content are correct.

### Step 5: Build and Deploy

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Customize for [Client Name]"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables in Vercel dashboard
   - Deploy

3. **Set Environment Variables in Vercel**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `SITE_URL`

### Cloudflare DNS Setup

1. **Add Domain to Cloudflare**:
   - Add your domain in Cloudflare dashboard
   - Update nameservers at your registrar

2. **Configure DNS**:
   - Add CNAME record: `@` → `cname.vercel-dns.com`
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Enable Cloudflare proxy (orange cloud)

3. **SSL/TLS Settings**:
   - Set SSL/TLS to "Full" (not Flexible)
   - Enable "Always Use HTTPS"

4. **Performance**:
   - Enable Auto Minify (CSS, JS, HTML)
   - Enable Brotli compression
   - Consider Page Rules for caching

## 🔄 Per-Client Workflow

### Option 1: Branch Strategy (Recommended)

```bash
# Create a new branch for each client
git checkout -b client/acme-inspections
# Customize config and assets
# Commit and push
git push origin client/acme-inspections
# Deploy this branch to Vercel
```

### Option 2: Separate Repositories

```bash
# Create a new repo for each client
gh repo create acme-inspections --private
git remote set-url origin https://github.com/yourusername/acme-inspections.git
git push -u origin main
```

## ✅ Client Demo Checklist

Before showing to client:

- [ ] Updated all config fields in `src/site/config.ts`
- [ ] Replaced logo (`public/brand/logo.svg`)
- [ ] Added hero image (`public/images/hero.jpg`)
- [ ] Added OG image (`public/brand/og.png`)
- [ ] Tested contact form submission
- [ ] Verified all phone numbers are clickable
- [ ] Verified all email links work
- [ ] Checked all service descriptions
- [ ] Reviewed all policy pages
- [ ] Tested mobile responsiveness
- [ ] Verified areas served list
- [ ] Checked testimonials (if provided)
- [ ] Tested FAQ accordion
- [ ] Previewed OpenGraph tags (use [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Ran `npm run build` successfully
- [ ] Tested site in production environment

## 🧪 Testing

### Run Tests Locally

```bash
# Lint check
npm run lint

# Type check
npx tsc --noEmit

# Build check
npm run build
```

### Test Contact Form

1. Set up Resend account and API key
2. Test form submission on `/contact` and `/book`
3. Verify email delivery
4. Test spam protection (try submitting too fast)
5. Test without Resend API key (fallback mode)

## 🔧 Customization Tips

### Changing Colors

Update Tailwind classes in `src/site/config.ts`:
```typescript
primaryColor: "blue-600",   // Change to "green-600", "purple-600", etc.
accentColor: "orange-500",
```

### Adding Services

Add to the `services` array in `src/site/config.ts`:
```typescript
services: [
  {
    name: "New Service",
    description: "Service description",
    startingPrice: "$500",
    icon: "home", // Lucide icon name
  },
  // ...
]
```

### Modifying Layout

- **Header**: Edit `src/components/layout/Header.tsx`
- **Footer**: Edit `src/components/layout/Footer.tsx`
- **Global Styles**: Edit `src/app/globals.css`

### Adding Pages

```bash
# Create new page
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

## 📧 Email Setup with Resend

1. **Sign up** at [resend.com](https://resend.com)
2. **Get API Key** from dashboard
3. **Add to** `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_TO_EMAIL=your-email@example.com
   ```
4. **Verify domain** (optional, for custom from address)

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Type Errors

```bash
# Check TypeScript errors
npx tsc --noEmit
```

### Contact Form Not Working

1. Check environment variables are set
2. Verify Resend API key is valid
3. Check browser console for errors
4. Check Vercel function logs

### Images Not Showing

1. Ensure images are in `public/` directory
2. Check image paths in config
3. Verify image formats (SVG, JPG, PNG)

## 📝 License

This template is provided as-is for use in home inspection business websites. Customize and deploy as needed for your clients.

## 🤝 Support

For issues or questions:
- Check the documentation above
- Review the code comments
- Contact the template maintainer

## 🎯 Future Enhancements

Consider adding:
- Blog functionality
- Online payment integration
- Appointment scheduling (Calendly integration)
- Customer portal
- Gallery/portfolio section
- Video testimonials
- Live chat widget
- Multi-language support

---

**Built with ❤️ for home inspection professionals**
