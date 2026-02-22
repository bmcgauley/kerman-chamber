# Kerman Chamber of Commerce — Brand Guide
**Client:** Kerman Chamber of Commerce (KCC)
**Prepared by:** Imaginarii Labs
**Status:** `DRAFT` — Pending client questionnaire confirmation
**Last Updated:** 2026-02-21

> **⚠️ Important:** All answers below marked *"Brian's Interpretation"* reflect Brian's research and inference — **they have NOT yet been posed to or confirmed by the KCC Executive Director.** Open items must be validated at the next client meeting before any design is locked.

---

## Phase 2.7 Status Tracker

| Item | Status | Notes |
|------|--------|-------|
| 2.7-A Questionnaire | 🟡 In Progress | Brian interpretations flagged; open items for next meeting |
| 2.7-B Brand Foundation | 🟡 Draft | Color + voice established; logo, photo TBD |
| Tagline | 🟡 Candidate selected | Confirm with client |
| Color Tokens | 🟡 Draft | Royal blue from shirt confirmed; gold TBD |
| Font Pairing | 🟡 Proposed | Playfair Display + Inter — confirm |
| Logo | 🔴 Blocked | Must obtain file at next meeting |
| Photography | 🔴 Blocked | Source/style TBD at next meeting |
| Voice Guidelines | 🟢 Draft complete | See below |
| `brand.md` → Approved | 🔴 Pending | Requires client sign-off |

---

## 2.7-A Questionnaire

### Q1 — Brand Personality

**Sourced:** Warm, established, and community-centric. The Chamber focuses heavily on "agricultural heritage preservation" and community traditions. Kerman is described as a city that places "a great emphasis on quality of life, while still keeping a small-town flavor." The Chamber blends this warm, small-town identity with a professional mission to support "a healthy and vibrant local economy."

**Brian's Interpretation:** Warm + Established + Professional. This is a small Central Valley agricultural community. The brand should feel like a trusted neighbor with institutional credibility — not a startup, not a corporation. Think: *community anchor*, not *sleek tech company*.

> **Confirm at next meeting:** Does KCC want to lean more established-traditional or are they open to a moderately modern refresh?

---

### Q2 — What Kerman Wants to Be Known For

**Sourced:** Kerman wants to be known as a rapidly growing city that successfully balances economic expansion with a high quality of life and a "small-town flavor." The Chamber highlights the region's agricultural roots (e.g., Kerman Almond Festival) and positions as a community in action that believes *"Community Comes First."*

**Brian's Interpretation:** Being the connective tissue between Kerman's businesses and its broader community. "Community Comes First" is already their actual answer — it's baked into their old site's identity.

> **Confirm at next meeting:** Is "Community Comes First" an official slogan they want to carry forward, or is it informal history?

---

### Q3 — Primary Website Audience

**Sourced:** Two groups — (1) local business community seeking B2B networking, grant info, and capacity-building (e.g., social media workshops), and (2) the general public and tourists seeking local events, agricultural festivals, and civic engagement.

**Brian's Interpretation:** Three roughly equal audiences:
1. **Existing members** — seeking events, resources, board info
2. **Prospective business members** — evaluating whether to join
3. **General community** — finding local businesses, events, and news

Navigation and content hierarchy should serve all three without sacrificing clarity for any.

---

### Q4 — Logo

**Status: 🔴 BLOCKER — Must obtain at next meeting.**

**Sourced:** An official brand presence exists (Facebook, kermanchamber.org), but high-res/vector file status is unconfirmed. The City of Kerman has a distinct logo (clock tower, palm trees, ribbon) — the Chamber's own mark is separate.

**Brian's Interpretation:** Old site appears to use a text-based wordmark or minimal seal. Must ask at next meeting.

**Action items at next meeting:**
- [ ] Request original logo file (AI, SVG, or EPS preferred)
- [ ] If no file exists → confirm scratch start and discuss options (Midjourney concepts, commissioned designer)
- [ ] Any brand colors or usage restrictions on existing mark

---

### Q5 — Color

**Sourced:** No color information available from official sources.

**Brian's Interpretation:** The circled swatch on the reference image is **Fabric Creations Royal Blue** — the color used on KCC shirts and their preferred brand primary. Estimated hex: `#3944BC` / Pantone 2728 C or 286 C territory. Pair with gold/amber for classic chamber aesthetic. Confirm if navy stays as a secondary or is retired entirely.

| Token | Name | Hex (Estimated) | Notes |
|-------|------|----------------|-------|
| `--color-primary` | KCC Royal Blue | `#3944BC` | Fabric Creations Royal Blue — verify exact Pantone |
| `--color-primary-dark` | Royal Blue Dark | `#2A3396` | Hover/active states |
| `--color-primary-light` | Royal Blue Light | `#5A6AD4` | Backgrounds, tints |
| `--color-accent` | KCC Gold | `#C9A227` | Classic chamber gold — *confirm with client* |
| `--color-accent-light` | Gold Tint | `#F0D878` | Backgrounds |
| `--color-neutral-dark` | Charcoal | `#1A1A2E` | Body text |
| `--color-neutral-mid` | Warm Gray | `#6B7280` | Secondary text |
| `--color-neutral-light` | Off-White | `#F9F8F6` | Page backgrounds |

> **⚠️ Hex Estimate Note:** `#3944BC` is best visual estimate. Request exact Pantone from KCC's shirt supplier for print accuracy. Pantone 286 C or 2728 C are likely candidates.

> **Confirm at next meeting:** Keep gold accent or adjust? Does any navy remain as secondary?

---

### Q6 — Photography Style & Source

**Sourced:** Own photos are highly recommended. The Chamber's materials explicitly note: *"Kerman is a community in action. Check out our photos from past events right here!"* Authentic event photography (Harvest Festival, Almond Festival, business mixers) is already a core part of their brand strategy.

**Brian's Interpretation:** Unknown source/access. Kerman is ag country — wheat fields, community events, main street storefronts all fit. Likely needs AI generation to fill gaps initially.

**Brand-appropriate photography categories:**
- Main street storefronts and downtown Kerman
- Community events (harvest festival, parades, ribbon cuttings)
- Local business owners at work
- Ag landscape shots (wheat, almonds, etc.)
- Chamber networking and member events

> **Confirm at next meeting:** Does KCC have an existing photo library? Who holds the rights? Will they provide photos, or does Imaginarii Labs need to source/generate?

If no library exists: propose AI generation (Midjourney/Flux) with community-approval step before use.

---

### Q7 — Voice & Tone / Tagline

**Sourced:** Tone should be supportive, advocating, and community-driven. Current phrases in use:
- *"Advocating and Supporting Local Businesses"*
- *"Community Comes First"* — most prominent unifying motto
- *"We are Kerman."*

**Brian's Interpretation:** Warm, direct, community-proud. Not bureaucratic. "We are Kerman" is the right energy. "Community Comes First" (their own phrase) may be stronger as primary tagline over "Where Kerman Business Grows."

#### Tagline Candidates

| Candidate | Source | Recommendation |
|-----------|--------|---------------|
| "Community Comes First" | Their own old site | ⭐ Primary — most authentic, already their stated identity |
| "Where Kerman Business Grows" | Brian's draft site | Secondary sub-tagline — addresses business audience |
| "The Voice of Kerman Business" | Generic chamber language | Accurate but expected |
| "We are Kerman." | Old site | Powerful as a section anchor, not as a tagline |

**Brian's Recommendation:** Lead with *"Community Comes First"* as primary tagline, use *"Where Kerman Business Grows"* as secondary on homepage to address both audiences.

#### Voice Guidelines

- **Write to real people**, not to organizations.
  ✅ "Join businesses who call Kerman home."
  ❌ "Become a valued chamber stakeholder."

- **Lead with community**, follow with business.
  ✅ "Kerman's business community has thrived for over 75 years because we take care of each other."
  ❌ "The Chamber provides networking, advocacy, and resources."

- **Be direct and warm, not formal.**
  ✅ "We're here for you."
  ❌ "The Chamber of Commerce stands ready to assist member businesses."

- **Use "we" and "our" freely.** The Chamber is part of the community, not a service provider above it.

- **Avoid generic chamber-speak:** "advocacy," "robust," "vibrant economy," "stakeholder." Say what you mean plainly.

> **Confirm at next meeting:** Which tagline resonates most with KCC leadership?

---

### Q8 — Reference Sites

**Status: 🔴 Must ask at next meeting.**

Ask: *"Can you show us a Chamber or business association website you admire — and one you don't?"* This typically reveals more about design preferences than any questionnaire.

---

## 2.7-B Brand Foundation

### Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display / Headlines | Playfair Display | 700, 900 | Hero text, section headers, pull quotes |
| Body / UI | Inter | 400, 500, 600 | Navigation, body copy, buttons, captions |

**Reasoning:** Playfair Display brings established gravitas and warmth. Inter provides clean readability at all sizes. Strong contrast pairing. Well-supported on Google Fonts.

> **Confirm at next meeting:** Does this feel right, or prefer more traditional (Georgia/Merriweather) or more modern?

---

### Color Usage Rules

- **Royal Blue** is primary — CTAs, nav active states, section headers, key UI elements
- **Gold** is accent — use sparingly for highlights, icons, hover states; never compete with blue
- **Off-White** is the default page background, not pure white (warmer, less clinical)
- **Never use Royal Blue text on Gold background or vice versa** — contrast is insufficient
- Royal Blue + White is the primary button treatment

---

### Messaging Hierarchy (from site scrape)

The official current site (kermanchamberofcommerce.com) is nearly empty — only four nav items. The old site (kermanchamber.org) is the source of truth for existing voice and content.

**Key messaging from official sources to preserve:**
- *"Advocating and Supporting Local Businesses"* — functional description, keep for About section
- *"Community Comes First"* — core brand promise, elevate to tagline
- *"We are Kerman."* — powerful section anchor on About or homepage
- *"It takes a robust business community to support a healthy and vibrant local economy"* — rephrase to avoid clichés, preserve sentiment

**From Brian's draft — validate stats with client:**
- 75+ Years Serving Kerman *(verify year founded)*
- 200+ Member Businesses *(verify current count)*
- 20+ Annual Events *(verify)*
- "One Strong Community" *(good — keep)*

---

## Open Items for Next Client Meeting

| # | Question | Priority |
|---|----------|----------|
| 1 | Logo file — does one exist in vector format? | 🔴 Critical |
| 2 | Confirm "Community Comes First" as primary tagline | 🔴 Critical |
| 3 | Confirm Royal Blue hex / Pantone from shirt supplier | 🟡 High |
| 4 | Gold accent — keep, replace, or remove? | 🟡 High |
| 5 | Verify stats (years, member count, event count) | 🟡 High |
| 6 | Photography — existing library? Who holds rights? | 🟡 High |
| 7 | Brand personality direction — traditional vs. modern | 🟡 High |
| 8 | Reference sites — love/hate examples | 🟡 High |
| 9 | Font pairing approval — Playfair Display + Inter | 🟢 Medium |
| 10 | Voice tone approval — confirm writing sample | 🟢 Medium |

---

## Appendix A — Competitive Context

Kerman Chamber operates in a small-city chamber context. Comparable reference sites:
- Selma Chamber of Commerce
- Reedley Chamber of Commerce
- Clovis Chamber of Commerce (larger, geographically adjacent)

These serve as benchmarks for website structure and membership offering depth.

---

## Appendix B — Color Reference Image

Client indicated preferred brand blue via a color chart image, selecting **"Fabric Creations Royal Blue"** (circled in red). This is a medium-weight royal blue — clearly distinct from navy variants on the same chart, and not as light as periwinkle/pastel variants.

Best Pantone candidates: **Pantone 286 C** or **Pantone 2728 C**.
Obtain exact manufacturer reference for print production.

---

*Document maintained by Imaginarii Labs. Do not distribute without client approval.*
