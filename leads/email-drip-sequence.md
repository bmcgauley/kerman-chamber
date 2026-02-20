# KCC Email Drip Sequence
**Purpose:** Automated 5-touch email sequence sent to each lead after their preview site is deployed.
**Personalization var:** `{{PREVIEW_URL}}`, `{{ORG_NAME}}`, `{{CONTACT_NAME}}`, `{{CITY}}`

---

## Day 1 — Lead With the Site

**Subject:** I built {{ORG_NAME}} a new website — here's the preview

**Body:**
```
Hi {{CONTACT_NAME}},

My name is [YOUR NAME] — I'm a web developer based in the Central Valley.

I built a free website preview for {{ORG_NAME}} as part of a local business project:

→ {{PREVIEW_URL}}

No strings attached. The site is live, mobile-friendly, and built on modern technology. I'd love to hear what you think.

[YOUR NAME]
[PHONE]
```

---

## Day 3 — Soft Follow-Up

**Subject:** Quick question about {{ORG_NAME}}'s online presence

**Body:**
```
Hi {{CONTACT_NAME}},

Did you get a chance to see the preview site I put together for {{ORG_NAME}}?

{{PREVIEW_URL}}

I've been working with a few civic organizations in the Central Valley and noticed a lot of chambers don't yet have a site that really reflects the work they do. Would love 10 minutes to hear your thoughts.

[YOUR NAME]
```

---

## Day 7 — Benchmark Comparison

**Subject:** What Fresno Chamber is doing online that {{CITY}} isn't yet

**Body:**
```
Hi {{CONTACT_NAME}},

The Fresno Chamber gets dozens of new membership inquiries online every month — primarily because their website makes it dead simple to learn about membership and join.

I built {{ORG_NAME}} a similar experience:

{{PREVIEW_URL}}

Main features:
• Mobile-optimized (60%+ of your visitors are on phones)
• Events calendar with category filtering
• Member directory and tiered membership display
• Contact form with instant notifications

Happy to walk you through it on a quick call — no commitment needed.

[YOUR NAME]
```

---

## Day 14 — Urgency / Expiry Framing

**Subject:** Still available — {{ORG_NAME}} site preview

**Body:**
```
Hi {{CONTACT_NAME}},

Just a quick follow-up. The preview site I built for {{ORG_NAME}} is still live:

{{PREVIEW_URL}}

I'm taking on a couple of new clients this month and wanted to give local organizations first priority before I open it up more broadly.

If you're interested in taking this live with your real content (events, members, board bios), I can have it done within the week.

[YOUR NAME]
```

---

## Day 30 — Breakup Email

**Subject:** Last follow-up on this

**Body:**
```
Hi {{CONTACT_NAME}},

I've reached out a few times about the website preview I built for {{ORG_NAME}}. I won't keep filling your inbox — this is my last message on this.

The preview will stay live a little longer if you want to revisit it:

{{PREVIEW_URL}}

If the timing isn't right, no worries at all. And if you ever want to chat about your online presence down the road, I'm always happy to help.

Best,
[YOUR NAME]
```

---

## Implementation Notes

- **Sending tool:** Apollo.io sequences (preferred) or Resend API + GitHub Actions
- **UTM params:** Append `?utm_source=email&utm_campaign=day{{N}}&utm_medium=cold` to all preview URLs
- **Tracking:** Monitor open rate, click rate, reply rate in Apollo / email tool dashboard
- **CSV status updates:**
  - After Day 1 send → set `status = sent_d1`
  - On open → set `status = opened`
  - On click → set `status = clicked`
  - On reply → set `status = replied` + move to manual follow-up
  - After Day 30 → set `status = closed_no_response`
