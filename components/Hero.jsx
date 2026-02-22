"use client";

import { siteConfig } from "@/config/site";
import { KCCButton } from "@/components/KCCButton";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function Hero() {
    const { hero } = siteConfig;
    return (
        <section className="relative min-h-[500px] sm:h-[90vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image + Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
            >
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">

                {/* Static headline line */}
                <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight max-w-4xl mx-auto drop-shadow-lg">
                    <span>{hero.headline}</span>
                </div>

                {/* 2.6-B: GooeyText morphing accent — separated below, with explicit min-height */}
                <div className="relative min-h-[1.4em] flex items-center justify-center my-2">
                    <GooeyText
                        texts={hero.heroMorphPhrases}
                        morphTime={1.5}
                        cooldownTime={2.5}
                        className="w-full"
                        textClassName="text-accent font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight"
                    />
                    {/* Invisible spacer to hold height */}
                    <span
                        className="invisible text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
                        aria-hidden="true"
                    >
                        {hero.headlineAccent}
                    </span>
                </div>

                <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto tracking-wide mt-4">
                    {hero.subheadline}
                </p>

                {/* 2.6-A: KCCButton CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <KCCButton variant="primary" href={hero.ctaPrimary.href}>
                        {hero.ctaPrimary.label}
                    </KCCButton>
                    <KCCButton variant="outline" href={hero.ctaSecondary.href}>
                        {hero.ctaSecondary.label}
                    </KCCButton>
                </div>
            </div>
        </section>
    );
}
