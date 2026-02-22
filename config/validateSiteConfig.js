/**
 * validateSiteConfig — Build-time validation for siteConfig.
 * Called from app/layout.js (server component), so it runs during `next build`.
 * Throws a descriptive error if any required field is missing or malformed.
 *
 * 2.5-F2
 */

const REQUIRED_STRINGS = [
    "orgName",
    "orgShortName",
    "city",
    "state",
    "tagline",
    "description",
    "address",
    "cityStateZip",
    "phone",
    "phoneRaw",
    "email",
    "hours",
    "mapEmbedUrl",
];

const REQUIRED_HERO_STRINGS = [
    "headline",
    "headlineAccent",
    "subheadline",
    "backgroundImage",
];

/**
 * @param {import('./site.js').siteConfig} config
 */
export function validateSiteConfig(config) {
    const errors = [];

    // ── Top-level required strings ──────────────────────────────────────────────
    for (const key of REQUIRED_STRINGS) {
        const val = config[key];
        if (!val || typeof val !== "string" || val.trim() === "") {
            errors.push(`siteConfig.${key} is missing or empty`);
        }
    }

    // ── Email format ────────────────────────────────────────────────────────────
    if (config.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
        errors.push(`siteConfig.email is not a valid email address: "${config.email}"`);
    }

    // ── Phone (raw digits) ──────────────────────────────────────────────────────
    if (config.phoneRaw && !/^\d{10}$/.test(config.phoneRaw)) {
        errors.push(`siteConfig.phoneRaw must be exactly 10 digits, got: "${config.phoneRaw}"`);
    }

    // ── Hero block ──────────────────────────────────────────────────────────────
    if (!config.hero || typeof config.hero !== "object") {
        errors.push("siteConfig.hero block is missing");
    } else {
        for (const key of REQUIRED_HERO_STRINGS) {
            const val = config.hero[key];
            if (!val || typeof val !== "string" || val.trim() === "") {
                errors.push(`siteConfig.hero.${key} is missing or empty`);
            }
        }
        if (!config.hero.ctaPrimary?.label || !config.hero.ctaPrimary?.href) {
            errors.push("siteConfig.hero.ctaPrimary must have { label, href }");
        }
        if (!config.hero.ctaSecondary?.label || !config.hero.ctaSecondary?.href) {
            errors.push("siteConfig.hero.ctaSecondary must have { label, href }");
        }
        if (!Array.isArray(config.hero.heroMorphPhrases) || config.hero.heroMorphPhrases.length < 2) {
            errors.push("siteConfig.hero.heroMorphPhrases must be an array of at least 2 strings");
        }
    }

    // ── Social block ────────────────────────────────────────────────────────────
    if (!config.social || typeof config.social !== "object") {
        errors.push("siteConfig.social block is missing");
    } else {
        if (!config.social.facebook) errors.push("siteConfig.social.facebook is missing");
        if (!config.social.instagram) errors.push("siteConfig.social.instagram is missing");
    }

    // ── Throw if any errors ─────────────────────────────────────────────────────
    if (errors.length > 0) {
        const msg = [
            "",
            "╔══════════════════════════════════════════════════╗",
            "║        siteConfig VALIDATION FAILED              ║",
            "╚══════════════════════════════════════════════════╝",
            "",
            ...errors.map((e) => `  ✗ ${e}`),
            "",
            "  Fix the above in config/site.js before deploying.",
            "",
        ].join("\n");
        throw new Error(msg);
    }
}
