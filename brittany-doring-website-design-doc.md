
# Website Design Doc + Claude Code Prompt — Brittany Doring Counseling

## 1. Reference Site Analysis

### gigiwoodallmft.com (Gigi Woodall, LMFT — Denver)
- Recurring scrolling tagline ("DISCOVERY・HEALING・GROWTH") as a calming motif
- One consistent CTA repeated throughout: "Book a consult call"
- 3-step "How it Works" strip: Book a consult → Schedule session → Attend session
- Warm, muted photography (soft interiors, plants, natural light) — no stock-photo feel
- Single testimonial as social proof, styled as a large pull-quote
- Long-form About section that folds in credentials/training as a simple list, not a resume dump
- FAQ as an accordion (fees/insurance, frequency, how to start, modalities used)
- Nav has a dropdown for "Types of Therapy" — each specialty gets its own anchor/page
- Footer: email, phone (call or text), address, privacy + Good Faith Estimate links

### celynna-romero-therapy (Beachy Feels Therapy — San Clemente)
- True one-pager with anchor nav: Home / About / Services / Location
- Trust badge strip right under the hero: "Offers Telehealth" · "Accepts Online Payments" · "Accepting New Clients"
- Services section is a clean scannable tag list (concerns, then approaches, then fees) rather than long paragraphs
- Sticky header CTA: "Request appointment" + Client Portal login
- Embedded map + address in the Location section
- Legally-required footer notices (No Surprises Act / Good Faith Estimate)

### Shared themes to carry into the build
- One clear, repeated call-to-action (book a free consult), not competing CTAs
- Soft, neutral/nature palette, generous white space, serif headers + clean sans body
- Trust/credibility signals placed early: license, years of experience, insurance accepted, "accepting new clients"
- About section humanizes the therapist — first person, warm, not clinical
- FAQ accordion is standard in this space and doubles as SEO content
- Specialties/approaches presented as scannable lists, not walls of text
- Footer carries licensing, crisis resources, and legal notices (Good Faith Estimate / No Surprises Act)

## 2. Content Extracted From Brittany's Existing Profiles

**Credentials:** Licensed Professional Counselor (NJ, #37PC00813800), Licensed Mental Health Counselor (NY, #008626). MSEd in Counseling, Hunter College (2016). DBT Intensive Training, Behavioral Tech (2018). 10 years in practice.

**Location/format:** Based in Mahwah, NJ 07430. Sees clients via telehealth across NJ and NY. Free 15-minute phone consultation offered.

**Top specialties:** Anxiety, maternal mental health (pregnancy, prenatal, postpartum, infertility), stress management, relationship issues, burnout.

**Additional focus areas:** People-pleasing, perfectionism, codependency, life transitions, grief, women's issues, LGBTQ+-affirming care, family conflict, mood disorders, neurodivergence.

**Modalities:** CBT, DBT, ACT (Acceptance & Commitment Therapy), Compassion-Focused, Person-Centered, Relational, Motivational Interviewing, Strength-Based, Culturally Sensitive.

**Fee:** $175/session. In-network with Aetna, Anthem BCBS, Carelon Behavioral Health, Cigna/Evernorth, Horizon BCBS NJ. Superbills available for out-of-network reimbursement.

**Voice/tone (pull directly from her own words):**
> "Living a meaningful life can be difficult in society's fast-paced, hustle culture. If you struggle with saying no, expressing your needs, or putting yourself first, let's work together to better understand and challenge underlying patterns that are impacting your ability to find balance — with a little bit of tears (or a lot, totally optional) and hopefully some laughter too."

> "Therapy, to me, feels like a genuine conversation between two people. I show up as myself — curious, engaged, and thoughtful."

Practice pillars from her Headway bio: **Mindfulness & Grounding**, **Boundaries & Communication**, **Self-Compassion**. Her stated style: inquisitive, participatory, affirming.

## 3. Site Structure (One-Page, Anchor Nav)

Sticky header: logo/name + anchor nav (About · Specialties · Approach · FAQ · Contact) + persistent "Book a Free Consult" button.

1. **Hero** — name, credentials, one-line value prop, primary CTA, trust badge row (Telehealth · Accepting New Clients · Insurance Accepted)
2. **About** — first-person bio (blended from her PT/Headway language), headshot, credential list
3. **Who I Work With** — specialty cards/tags (anxiety, maternal mental health, burnout, perfectionism, relationships, women's issues, LGBTQ+-affirming, life transitions)
4. **Types of Therapy** — modality list in plain language (CBT, DBT, ACT, Compassion-Focused, etc.), each with a one-sentence explainer
5. **How It Works** — 3-step: free consult call → schedule first session → begin your work together
6. **Fees & Insurance** — rate, accepted plans, superbill note, Good Faith Estimate notice
7. **FAQ accordion** — What happens in a free consult? Do you take insurance? How often do we meet? Is telehealth as effective as in-person? What's your cancellation policy?
8. **Find Me Elsewhere** — outbound cards linking to her Psychology Today and Headway profiles (adds trust + SEO backlinks)
9. **Contact** — form (name, email, phone, best time to reach, message) + click-to-call phone + service-area note
10. **Footer** — license numbers, crisis line (988 / Crisis Text Line: text HOME to 741741), privacy note, Good Faith Estimate / No Surprises Act link, copyright

## 4. SEO Plan (target: Mahwah / Bergen County NJ, 07430)

- Title tag: `Brittany Doring, LPC | Anxiety & Maternal Mental Health Therapist in Mahwah, NJ 07430`
- Meta description built around: anxiety therapy, postpartum/maternal mental health, Mahwah NJ, telehealth NJ & NY
- `LocalBusiness`/`MedicalBusiness` + `Person` + `FAQPage` schema.org JSON-LD
- H1 = her name + credential; H2s = section names with local + specialty keywords ("Anxiety Therapist in Mahwah, NJ," "Postpartum Therapy NJ")
- NAP (name/address/phone) consistent with her Psychology Today and Headway listings
- Google Business Profile mention (recommend she claim one) and embedded map
- Descriptive alt text on all images; fast-loading, mobile-first, semantic HTML
- Internal anchor links count as on-page navigation signals; outbound links to PT/Headway are legitimate authority signals

## 5. Open Items to Fill In Before Building

- Contact form delivery email (Brittany's practice inbox — not yet provided)
- Final practice name (used "Brittany Doring Counseling" as a placeholder below)
- Headshot/photography and any real interior photos
- Final color hex values (a sage/moss/cream nature palette is specified below as a starting point)

---

## 6. The Claude Code Prompt

Copy everything below into Claude Code.

```
Build a clean, modern, one-page website for a solo private-practice therapist. This needs to be production-quality, not a template dump — pay close attention to typography, spacing, and restraint.

CLIENT / CONTENT
Practice: Brittany Doring Counseling
Therapist: Brittany Doring, LPC (NJ), LMHC (NY) — 10 years of experience
Location: Mahwah, NJ 07430. Sees clients via telehealth across New Jersey and New York.
Phone: (551) 367-0439
Contact email: [INSERT PRACTICE EMAIL]

Voice: warm, genuine, a little playful, never clinical-sounding. Pull directly from this language for hero/about copy:
"Living a meaningful life can be difficult in society's fast-paced, hustle culture. If you struggle with saying no, expressing your needs, or putting yourself first, let's work together to better understand and challenge underlying patterns that are impacting your ability to find balance — with a little bit of tears (or a lot, totally optional) and hopefully some laughter too."
"Therapy, to me, feels like a genuine conversation between two people. I show up as myself — curious, engaged, and thoughtful. I'll ask questions, offer new perspectives, and help you build insight and practical tools so you can feel more like yourself again."
Her practice pillars: Mindfulness & Grounding, Boundaries & Communication, Self-Compassion.

Specialties: Anxiety, maternal mental health (pregnancy, prenatal, postpartum, infertility), stress management, burnout, relationship issues, perfectionism, people-pleasing, codependency, life transitions, grief, women's issues, LGBTQ+-affirming care.

Modalities: CBT, DBT, ACT (Acceptance & Commitment Therapy), Compassion-Focused Therapy, Person-Centered, Relational, Motivational Interviewing, Strength-Based, Culturally Sensitive.

Credentials: MSEd in Counseling, Hunter College (2016). DBT Intensive Training, Behavioral Tech (2018). Licensed Professional Counselor, NJ #37PC00813800. Licensed Mental Health Counselor, NY #008626.

Fees & insurance: $175/session. In-network with Aetna, Anthem BCBS, Carelon Behavioral Health, Cigna/Evernorth, Horizon BCBS NJ. Superbills provided for out-of-network reimbursement. Free 15-minute phone consultation before the first session.

External profile links (use as real outbound links, not placeholders):
- https://www.psychologytoday.com/us/therapists/brittany-doring-mahwah-nj/941594
- https://care.headway.co/providers/brittany-doring

DESIGN DIRECTION
Clean, modern, soft, nature-inspired. Palette: sage/moss green (#5B7561 or similar), warm cream/off-white background (#F7F5F0), a deeper forest green for text/accents (#2F3E33), and one warm neutral accent (soft terracotta or sand) used sparingly for CTA buttons. Generous white space. Pair a warm serif for headings (e.g., "Fraunces," "Cormorant," or "Lora") with a clean sans for body text (e.g., "Inter" or "Public Sans") — load from Google Fonts. Rounded corners, soft shadows, no harsh lines. Subtle organic/botanical accents (line-art leaf motifs, not clipart) are welcome but should stay minimal. Avoid anything cold, corporate, or clinical-looking. Fully responsive, mobile-first.

STRUCTURE — single page, anchor-linked nav, sticky header
1. Header: practice name/logo mark, anchor nav (About, Specialties, Approach, FAQ, Contact), persistent "Book a Free Consult" button that scrolls to contact.
2. Hero: name + credentials, one-line value proposition drawn from her voice above, primary CTA button, trust-badge row (Telehealth Available · Accepting New Clients · Insurance Accepted).
3. About: first-person bio blending the quotes above, professional headshot placeholder (use a clean placeholder image/div, not a stock photo URL), credentials list.
4. Who I Work With: specialty cards/tags for each item in the specialties list.
5. Types of Therapy: each modality as a short card with a one-sentence plain-language explainer (write original, accurate, non-clinical-jargon descriptions).
6. How It Works: 3-step visual (Free Consult Call → Schedule Your First Session → Begin Your Work Together).
7. Fees & Insurance: rate, accepted insurance list, superbill note, and a brief Good Faith Estimate / No Surprises Act notice (standard boilerplate: patients have the right to receive a Good Faith Estimate of expected charges, link to https://www.cms.gov/nosurprises).
8. FAQ: accordion component (expand/collapse, accessible via keyboard) covering: What happens on the free consult call? Do you accept insurance? How often will we meet? Is telehealth as effective as in-person therapy? What's your cancellation policy?
9. Find Me Elsewhere: two link-out cards to her Psychology Today and Headway profiles.
10. Contact: a real working contact form (Name, Email, Phone, Best time to reach you, Message) plus click-to-call phone link. Since this will likely be a static site, wire the form using Formspree (or a similar no-backend form service — add a clear TODO comment showing where to drop in the form endpoint/ID) so submissions land in the practice email without needing a server. Also show the phone number and note the NJ/NY telehealth service area.
11. Footer: license numbers, crisis resources (988 Suicide & Crisis Lifeline; Crisis Text Line — text HOME to 741741; note "if this is an emergency, call 911"), Good Faith Estimate link, privacy note, copyright.

TECHNICAL REQUIREMENTS
- Build as a single static site: index.html, styles.css, script.js (vanilla JS — no framework needed for a page this size). Keep it dependency-light so it's trivial to host anywhere or paste into a WordPress "Custom HTML" page/block later if needed.
- Semantic HTML5 (header/nav/main/section/footer, proper heading hierarchy starting at one H1).
- Accessible: proper labels on form fields, sufficient color contrast, keyboard-navigable accordion and nav, alt text on all images.
- SEO: descriptive <title> and meta description targeting "therapist in Mahwah, NJ 07430" and her core specialties; Open Graph tags; JSON-LD structured data using schema.org types Person + MedicalBusiness/LocalBusiness (name, address, phone, areaServed: NJ/NY) and FAQPage (mirroring the FAQ section content).
- Mobile-first responsive layout; test breakpoints at ~375px, 768px, 1200px.
- Fast-loading: no heavy JS libraries, optimized image sizing/lazy-loading.
- Include an XML sitemap and robots.txt.
- Add HTML comments marking where real photography should replace placeholders.

Build the full working site now.
```
