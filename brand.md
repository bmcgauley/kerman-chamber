# Kerman Chamber of Commerce — Brand Guidelines
**Status:** 🟡 Draft — Pending answers to branding questions below
**Last updated:** 2026-02-21

---

## ⚠️ Branding Questions — Action Required

Before finalizing this guide, we need answers to the following.
Mark `[x]` on the answers that apply, or fill in blanks.

---

### 1. What feeling should the brand evoke?

> *What's the first impression you want visitors to have?*

- [ ] **Established & Trustworthy** — "We've been here for decades, we are the backbone of Kerman"
- [ ] **Modern & Ambitious** — "Kerman is growing, and we're driving that growth"
- [ ] **Warm & Community-first** — "This is your town, your neighbors, your chamber"
- [ ] **Professional & Business-focused** — "We get deals done and advocate hard"
- [ ] Other: ________________________

---

### 2. What does Kerman want to be known for?

> *This shapes hero headline, About copy, and elevator pitch.*

- [ ] Agriculture & farming heritage
- [ ] Small business support & advocacy
- [ ] Young / growing city with momentum
- [ ] Community events & local pride
- [ ] Gateway to the Central Valley (location / logistics)
- [ ] Other: ________________________

---

### 3. Who is the primary audience for this website?

- [ ] Local business owners (existing members)
- [ ] Prospective new businesses considering Kerman
- [ ] Residents looking for local resources
- [ ] City officials / partners / sponsors
- [ ] Other: ________________________

---

### 4. Logo & Visual Identity

> *Do you have existing brand assets we should honor or replace?*

- [ ] Yes — we have an official logo (please share the file)
- [ ] Yes — but it's outdated and we want a refresh
- [ ] No — we're starting from scratch
- Logo file location: ________________________
- Brand colors in use today: ________________________
- Fonts in use today (if known): ________________________

---

### 5. Colors

> *Our current dev palette is `navy #1A2E4A` + `gold #C8971A`. Does this feel right?*

- [ ] Yes — perfect, keep it
- [ ] Adjust navy (direction): ________________________
- [ ] Adjust gold (direction): ________________________
- [ ] Completely different — preferred palette: ________________________

---

### 6. Photography & Imagery Style

> *What kinds of images represent Kerman best?*

- [ ] Aerial/drone shots of the city
- [ ] Real people — business owners, families, events
- [ ] Agriculture — orchards, produce, farmland
- [ ] Architecture — downtown, city hall, storefronts
- [ ] Stock photography is fine as placeholder
- Do you have existing photos we can use? [ ] Yes [ ] No
- Photo storage location (Google Drive, Dropbox, etc.): ________________________

---

### 7. Voice & Tone

> *How should the website "talk" to visitors?*

- [ ] **Formal** — professional, authoritative, civic
- [ ] **Conversational** — friendly, approachable, neighborly
- [ ] **Energetic** — bold, punchy, we-mean-business
- Tagline options to react to:
  - "Where Kerman Business Grows" (current)
  - "Kerman's Voice for Business"
  - "Building Kerman, Together"
  - "Stronger Business. Stronger Kerman."
  - Your preferred tagline: ________________________

---

### 8. Competitor Reference

> *Are there any Chamber websites — locally or nationally — that you love or hate?*

- Love: ________________________ (what you like about it)
- Hate: ________________________ (what to avoid)

---

## Current Brand Tokens (Dev Baseline)

```css
/* globals.css @theme */
--color-primary:      #1A2E4A;  /* Navy — authority, civic trust */
--color-primary-dark: #0f1d2e;  /* Deep navy — hover states */
--color-accent:       #C8971A;  /* Gold — energy, prestige, CTA */
--color-accent-hover: #b07f10;  /* Gold-dark — hover */
--color-bg-light:     #F8F4EE;  /* Warm white — inviting, not sterile */

/* Typography */
--font-display: Playfair Display  /* Serif — civic authority, elegance */
--font-body:    Inter             /* Sans-serif — clean, legible, modern */
```

### Rationale
- **Navy** is used by legal, hospitality, and civic organizations to convey reliability and longevity
- **Gold** signals prestige and energy — differentiates from a plain navy government site
- **Warm white** (not pure `#fff`) makes the site feel approachable rather than clinical
- **Playfair Display** for headings references print editorial heritage — newspapers, official seals
- **Inter** for body has near-universal readability scores

---

## Brand Voice Examples

### Headlines (draft)
- "Where Kerman Business Grows"
- "Advocating for Every Business in Kerman"
- "Your Partner in Kerman's Growth"
- "The Voice of Kerman Commerce Since [year]"

### Boilerplate (draft)
> The Kerman Chamber of Commerce connects local businesses with resources, relationships, and a collective voice. From sole proprietors to major employers, we advocate for a thriving Kerman economy.

---

## Pending Decisions (Locked After Answers)

| Item | Status |
|------|--------|
| Primary tagline | ⬜ Pending Q7 |
| Logo file | ⬜ Pending Q4 |
| Photography source | ⬜ Pending Q6 |
| Color confirmation | ⬜ Pending Q5 |
| Target audience focus | ⬜ Pending Q3 |

---

## Next Steps After Questionnaire

1. Finalize color tokens in `globals.css`
2. Source or generate hero imagery matching Q6 answers
3. Lock tagline and update `config/site.js`
4. Apply brand voice to all page copy
5. Consider commissioning a logo if none exists (Q4)
