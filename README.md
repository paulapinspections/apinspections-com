# AP Inspections Website

This is the live website for **AP Inspections LLC** — built with Next.js and deployed automatically to the web whenever changes are pushed to GitHub.

---

## Making Updates

Most content changes are made by editing one or two files. You don't need to understand code to make the common updates described below — just find the right spot, change the words, save, and push to GitHub.

---

### Swapping Out Your Bio Photo

Your photo is stored at:

```
public/Paul Wickerr Co-Founder.png
```

To replace it:

1. Take your new photo and name the file exactly: `Paul Wickerr Co-Founder.png`
2. Drop it into the `public/` folder, replacing the old one
3. Commit and push to GitHub (the site will redeploy automatically)

The photo is displayed in the "Meet Your Inspector" section on the home page. It crops to a portrait ratio (taller than wide), so a head-and-shoulders or full-body photo works best.

---

### Updating Your Bio Text

Your bio lives in the home page file:

```
src/app/page.tsx
```

Search for `Meet Your Inspector` in that file. Just below it you'll find three `<p>` paragraphs — those are the three bio paragraphs shown on the site. Edit the text between the `<p>` and `</p>` tags. Don't change the tags themselves, just the words inside.

```tsx
<p>
  Paul Wicker is a serial entrepreneur...   ← change this text
</p>
<p>
  Paul retired from the fire service...     ← and this
</p>
<p>
  As co-founder of Inspect Forge...         ← and this
</p>
```

---

### Updating Business Info, Services, or FAQs

Almost everything else — phone number, email, service descriptions, FAQ answers, testimonials, service area counties — lives in one place:

```
src/site/config.ts
```

Common things to update in that file:

| What | Where to look in the file |
|------|---------------------------|
| Phone number | `phone:` |
| Email address | `email:` |
| Tagline | `tagline:` |
| Service names & descriptions | `services:` array |
| FAQ questions & answers | `faqs:` array |
| Testimonials | `testimonials:` array |
| Counties you serve | `serviceArea:` array |

---

### Updating the Hero Headline

The big text at the top of the home page ("Certified Home Inspections in Indiana surrounding Angola") is in:

```
src/app/page.tsx
```

Search for `Certified Home Inspections` and edit the text inside the `<h1>` tag.

---

## How the Site Deploys

This site is connected to GitHub. Every time a change is pushed to the `main` branch, the site automatically rebuilds and goes live — usually within 2–3 minutes. You don't need to do anything extra after pushing.

---

## Running Locally (Optional)

If you want to preview changes before pushing:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To check for errors before deploying:

```bash
npm run build
```

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (auto-deploys from GitHub)
- **Booking**: InspectForge widget

---

## File Map (Quick Reference)

```
public/
  Paul Wickerr Co-Founder.png   ← your bio photo
  brand/
    logo.png                    ← site logo
    hero.png                    ← hero background image

src/
  site/
    config.ts                   ← business info, services, FAQs, testimonials
  app/
    page.tsx                    ← home page (hero headline, bio section)
    services/page.tsx           ← services page
    about/page.tsx              ← about page
    contact/page.tsx            ← contact page
    book/page.tsx               ← booking page
  components/
    layout/Header.tsx           ← navigation bar
    layout/Footer.tsx           ← footer
```
