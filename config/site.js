/**
 * SITE CONFIG — Kerman Chamber of Commerce
 * ==========================================
 * To clone this site for a new client, only edit THIS file.
 * Every variable used across components and pages is sourced here.
 */

export const siteConfig = {
    // ─── Identity ────────────────────────────────────────────────────────────────
    orgName: "Kerman Chamber of Commerce",
    orgShortName: "Kerman Chamber",
    city: "Kerman",
    state: "CA",
    tagline: "Where Business Grows",
    founded: "1950",
    memberCount: "200+",
    eventCount: "20+",
    yearsServing: "75+",
    description:
        "Advocating for local businesses and fostering community prosperity in the Central Valley since 1950.",

    // ─── Contact ─────────────────────────────────────────────────────────────────
    address: "875 S. Madera Ave",
    cityStateZip: "Kerman, CA 93630",
    phone: "(559) 846-6352",
    phoneRaw: "5598466352",
    email: "executive.director@kermanchamber.org",
    hours: "Mon – Fri: 9:00 AM – 5:00 PM",
    mapEmbedUrl:
        "https://www.google.com/maps?q=875+S+Madera+Ave+Kerman+CA+93630",
    mapImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoDWkYRq6qIGAU9sRjGK-trNU5MNgg9GHUglElKH5DaWONcLeoAHIHaZ8RQXxjcmIeFargzx_K_aCQeuEr9JokjmMCK1nEMbWUl9tCW8XVRamTbtaaW3eWyz5Xf4Y-2mIr6NBE4gnfMBoJYQiSTN-nJoXemUvGltfQzKDv0Ra9y0k5vcaiZwCmG2awCp1mdA70fZyatfblpXVmWSaw_3BfUo4usIR_YSZxn1DUdN65XCyFT3xySx-o7_sEW6CfEINmF1ghvCpwzqeN",

    // ─── Social ──────────────────────────────────────────────────────────────────
    social: {
        facebook: "https://www.facebook.com/KERMANCHAMBEROFCOMMERCE",
        instagram: "https://www.instagram.com/kermanchamber",
        twitter: "#",
    },

    // ─── Brand ───────────────────────────────────────────────────────────────────
    // Mirror these in tailwind.config.js → theme.extend.colors
    colors: {
        primary: "#1A2E4A", // Deep Navy
        accent: "#C8971A",  // Gold
        bg: "#F8F4EE",      // Warm White
    },

    // ─── Hero ────────────────────────────────────────────────────────────────────
    hero: {
        headline: "Kerman. Where...",
        headlineAccent: "Business Grows",
        // 2.6-B: phrases that morph in the hero headline (edit freely for new clients)
        heroMorphPhrases: [
            "Business Grows",
            "Community Thrives",
            "Future Shines",
            "Vision Lives",
        ],
        subheadline:
            "Advocating for local businesses and fostering community prosperity since 1950.",
        ctaPrimary: { label: "Join the Chamber", href: "/members" },
        ctaSecondary: { label: "View Events", href: "/events" },
        backgroundImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB9D91MNvnhn57EtBTgDL745iQwR5POEi8JL1oIagJ8-41foHPc7leBLMoQfw7lE1kkBkTPnc_B2vXOocl42_BywniZbPmNo4Dni9xlai2pz9EyQ8ZMcdPzqzb95KPVLO-wrOwnrKkSXzc2kaM_aJaGhf1W9FP41vhNfGHu7DMMVST4bomnMeVDVIJM9i1GI9vIKKgiWZzXjQfjzGQz9s7WmlyzpDSNa5CTGjoqrcFOLlqVSCq8PI4C954wfONFnaryOPVNvk5SYJWR",
    },

    // ─── About Snippet (Home page) ───────────────────────────────────────────────
    aboutSnippet: {
        headline: "Building a Stronger Kerman Together",
        body1:
            "Since 1950, the Kerman Chamber of Commerce has been the distinctive voice of local business, fostering a vibrant economy and community through advocacy, promotion, and partnership.",
        body2:
            "We believe that a thriving business community is the backbone of a successful city. Our dedicated team works tirelessly to provide resources, networking opportunities, and legislative support to help your business flourish in the Central Valley.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBy1RhT8JZnOtRLT62-uzJuga-9d4l7IrMWGvs7Jj73b4GJ8Gnyh2ZLInPYrlTbiirCC89z6Sd9dv9ZlGnXdTXFRdyk4ngHt_0kWgFjgxYaYvzKnFEj3sRXbxVr2UtBNBKDsZye2ye6Y0bsucvf8QwfGtgMFv0Zt_OzQ6QD5j9GwU-YuZSh9HrU3m759I0u7GW_RqJpN0VzlEUBpVUEYlbVqkHCCTm3ot45i_BZHCiYdZcMaRrLAJjsCUA1qN_xYSTnqtdPnWeumlhD",
        imageAlt: "Diverse group of Kerman community business members meeting",
    },

    // ─── Events Data ─────────────────────────────────────────────────────────────
    events: [
        {
            id: 1,
            title: "Annual Business Awards Luncheon",
            date: "March 15, 2026",
            month: "Mar",
            day: "15",
            time: "6:00 PM – 9:00 PM",
            location: "Kerman Community Center",
            category: "Annual",
            featured: true,
            description:
                "Join us for an evening of celebration honoring the best of Kerman business. This prestigious event features a keynote speaker, gourmet dinner, and the presentation of the Business of the Year awards.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAbK0KBs1k2TVDMDRG3ut6EfeNXpB5259Qs6MU7YP4mfnZaYYyX7NhTr4CqwlTvqwaY0rEaYe4m9OziF1KVZIsNhPs7RWIe0HaoByQCE6_gUKVasVx7hy3SgUQeyneTWVn7Ub1TR_i3499Jsi97rN1LgsWOkess-8KSn6sfIjR5ISAAq6o-Q4gkevKflxu-oab21UdfRqXp0dV1QLGIYVur2qsxZ9Gk1hZAZdXTaC1_lrCEK5BvJvRAqeU_JF9GRBhD8fzcNk_pVmJT",
        },
        {
            id: 2,
            title: "Spring Networking Mixer",
            date: "April 12, 2026",
            month: "Apr",
            day: "12",
            time: "5:30 PM – 7:30 PM",
            location: "The Vault Coffee Shop",
            category: "Networking",
            featured: false,
            description:
                "Connect with local professionals over refreshments and light appetizers at our seasonal mixer.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDgjD9cY-DqkEwf0UAPgWX35C3SH6sBIpFg20DL4_Kw9Kp7I6vJE3cGBrEYqNOHOPGAoY5lmMORE9exhhgDZL0RI9J3UDdCx2R2EyMQmgY9xro579nwEkACkCHTlDpfsStIbYCBf0qTq2bheR7Fssp47MjVfSvjo9HL58NQZL6p4lN2D9TP4Sj6C77t2Rnfqzs1zp3TXieMDlzlT3sj-qBmdiZcLyfJl--5cwr7IOO09fZzRAQnxPd5LPUePjDouQ-wGMfSuKtjBtQj",
        },
        {
            id: 3,
            title: "Small Business Workshop",
            date: "May 5, 2026",
            month: "May",
            day: "05",
            time: "9:00 AM – 12:00 PM",
            location: "Chamber Conference Room",
            category: "Business Education",
            featured: false,
            description:
                "Learn essential digital marketing strategies to grow your local business in 2026.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAGpuWG4_yEeExAtYgxFWDiqkPX_IPcaM7bzNmeYzaC18lsreplVW_N0-etse8I8XJL4Ne-iJbQKw3zAu9g18y65c_xqhwg_Q0G_BX_JrZA3Okf1pFzTjP-EjCUDCiSHMyoL3jfNOR-7KBjZ3UvICcgYMtkrvqYS7CSABSxNS7PiPCbKqEAou1yNI1nJziKptu7cERTsbdqtw-wn60nOMYC7iDjVOxMFAq-4jelj4X_ZO3i6cjDWN2WU2zkzdTg5pw48JMmCaBqcuYB",
        },
        {
            id: 4,
            title: "4th of July Parade",
            date: "July 4, 2026",
            month: "Jul",
            day: "04",
            time: "10:00 AM – 1:00 PM",
            location: "Downtown Kerman",
            category: "Community",
            featured: false,
            description:
                "Celebrate Independence Day with our annual parade featuring floats, bands, and community groups.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAZesWva12WPojPdKykmqfnWmPCmsuN8ejk9nRu0ZcqKiCx7NwQPAYFOIGaleOG8FDLHd2ts5mEbufSvw7U_Zb-mwil566I5YkdTccPdaFJrORDiwgU-JhkSQuNZxYgk9xwyoSxcqLZ0yxAZZ2ZfYgmIAcxIHD8Ns8z60uQIfi0nNkvV3gOq_04Yc-vJaMuqmX0REMj0HDtVq_7Ffbq6vEhjFJrikT5Ufx7X0raAQHCrpBV6YOdpEdBABEXVzFbkY4D5agkuXa_CkmP",
        },
        {
            id: 5,
            title: "Harvest Festival",
            date: "October 21, 2026",
            month: "Oct",
            day: "21",
            time: "12:00 PM – 8:00 PM",
            location: "Kerckhoff Park",
            category: "Community",
            featured: false,
            description:
                "A family-friendly event celebrating the rich agricultural heritage of our region with food and music.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAQPQHQGV2mrUIjPItr6t7DazX88_GXGhCNpq33p2vVed2bGJzcmnaNzDyfx1BrVynrYxO7t0deMTCysSMfHvPbg-5iu-IJY44PihlkEUMfkM0IJka53EHx8hozcz0RLeShquN6EYSNBKERA5fk8SDE7hwvssiDxmU8c7L1Lxb3Wnj6Lx2rFB7XKOw9zcRucIz36phfbthAVAzMA1z6uzWgVhYCPHYO8kKpF9thNg_oWavkKe9pmF9EzGQ19bQim8yKB50SHQrzloHe",
        },
        {
            id: 6,
            title: "Holiday Business Showcase",
            date: "December 7, 2026",
            month: "Dec",
            day: "07",
            time: "4:00 PM – 8:00 PM",
            location: "Community Center",
            category: "Annual",
            featured: false,
            description:
                "Support local businesses during the holiday season. Exhibitor booths available for members.",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAh5_JgcSaWG1v058KuVWVTjEuAsO7lOJQAdkkATvmgwcNiezDUom2zbCnPYvTjVhodp3J2XmQriEAt7IcSgAtfxILDAeBeRj9ZnHnhM8QNkDiwh5BFDMM0POViOpJkiLZMRF-8lkE9WR1gbKtoTfAjJohU05PwHYlXnQuRiaxZBhpSF83B0p1CE0eLPS0LUKDbwr5mTS7aXv5vy2olJz3StoGGUGPaBVgCzg-Jomao910rHiXQj3wbs6aaXm3jJgN64oy9nYML1wb4",
        },
    ],

    // ─── Member Spotlight ─────────────────────────────────────────────────────────
    memberSpotlight: [
        {
            name: "Valley Grind Coffee",
            category: "Food & Beverage",
            description: "Proudly serving organic, locally roasted coffee to Kerman since 2015.",
            icon: "local_cafe",
        },
        {
            name: "Golden State Ag Supplies",
            category: "Agriculture",
            description: "Your partner in sustainable farming solutions for over three decades.",
            icon: "agriculture",
        },
        {
            name: "Kerman Community Bank",
            category: "Finance",
            description: "Local banking with a personal touch. Helping businesses grow.",
            icon: "savings",
        },
    ],

    // ─── Member Directory ─────────────────────────────────────────────────────────
    members: [
        { name: "Kerman Feed & Supply", category: "Agriculture", tier: "Premier", phone: "(559) 846-0001", description: "Full-service feed and agricultural supply serving the valley.", icon: "agriculture" },
        { name: "Los Compadres Restaurant", category: "Food & Beverage", tier: "Business Builder", phone: "(559) 846-0002", description: "Authentic Mexican cuisine with a taste of home.", icon: "restaurant" },
        { name: "Valley Insurance Group", category: "Insurance", tier: "Premier", phone: "(559) 846-0003", description: "Protecting families and businesses across the Central Valley.", icon: "security" },
        { name: "Main Street Boutique", category: "Retail", tier: "Basic", phone: "(559) 846-0004", description: "Fashion-forward styles for every occasion.", icon: "storefront" },
        { name: "Kerman Auto Repair", category: "Automotive", tier: "Basic", phone: "(559) 846-0005", description: "Honest, reliable auto repair since 1988.", icon: "build" },
        { name: "Modern Living Furniture", category: "Home & Garden", tier: "Business Builder", phone: "(559) 846-0006", description: "Quality furniture for the Central Valley home.", icon: "chair" },
        { name: "Valley Grind Coffee", category: "Food & Beverage", tier: "Business Builder", phone: "(559) 846-0007", description: "Organic, locally roasted coffee since 2015.", icon: "local_cafe" },
        { name: "Golden State Ag Supplies", category: "Agriculture", tier: "Premier", phone: "(559) 846-0008", description: "Sustainable farming solutions for over 30 years.", icon: "grass" },
        { name: "Kerman Community Bank", category: "Finance", tier: "Premier", phone: "(559) 846-0009", description: "Local banking with a personal touch.", icon: "savings" },
    ],

    // ─── Membership Tiers ─────────────────────────────────────────────────────────
    membershipTiers: [
        {
            name: "Basic",
            price: 150,
            period: "/year",
            features: [
                "Business listing in directory",
                "Monthly newsletter",
                "Member-only events access",
                "Chamber referrals",
            ],
            cta: "Get Started",
            highlight: false,
        },
        {
            name: "Business Builder",
            price: 300,
            period: "/year",
            features: [
                "Everything in Basic",
                "Discounted event registration",
                "Social media feature (quarterly)",
                "Ribbon cutting ceremony",
                "Voting rights on Chamber matters",
            ],
            cta: "Most Popular",
            highlight: true,
        },
        {
            name: "Premier",
            price: 600,
            period: "/year",
            features: [
                "Everything in Business Builder",
                "Speaking opportunities at events",
                "Chairman's Circle recognition",
                "Logo on Chamber website",
                "Sponsored newsletter inclusion",
                "Priority event booth placement",
            ],
            cta: "Join Premier",
            highlight: false,
        },
    ],

    // ─── About Page ──────────────────────────────────────────────────────────────
    timeline: [
        { year: "1950", title: "Founded", description: "A group of Kerman business leaders established the Chamber to advocate for local commerce." },
        { year: "1965", title: "First Annual Event", description: "The inaugural Business Awards Dinner set a tradition still celebrated today." },
        { year: "1998", title: "Growth to 200 Members", description: "Membership surpassed 200 businesses, reflecting Kerman's economic expansion." },
        { year: "Today", title: "Present Day", description: "Serving over 200 businesses with advocacy, networking, and community investment." },
    ],
    coreValues: [
        { icon: "campaign", title: "Advocacy", description: "We champion policies that protect and grow local businesses at every level of government." },
        { icon: "school", title: "Education", description: "Workshops, seminars, and mentorship programs equip members with tools to succeed." },
        { icon: "groups", title: "Community", description: "A strong community is built one relationship at a time. We create those connections." },
    ],
    boardMembers: [
        { name: "James Sterling", title: "President & CEO", image: "" },
        { name: "Elena Rodriguez", title: "VP of Membership", image: "" },
        { name: "David Chen", title: "VP of Programs", image: "" },
        { name: "Sarah Miller", title: "Treasurer", image: "" },
        { name: "Robert Thorne", title: "Secretary", image: "" },
        { name: "Anita Patel", title: "Director at Large", image: "" },
    ],
};
