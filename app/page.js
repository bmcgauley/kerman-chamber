import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import EventCard from "@/components/EventCard";
import MemberCard from "@/components/MemberCard";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: `${siteConfig.orgName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
};

export default function HomePage() {
    const previewEvents = siteConfig.events.slice(0, 3);

    return (
        <>
            <Hero />
            <StatsBar />

            {/* About Snippet — 2.5-B1/B2: font-display h2, 2.5-C3: mobile image constrained, 2.5-E2: next/image, 2.5-D6: ARIA */}
            <section className="py-24 bg-bg-light" aria-labelledby="about-heading">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-1 bg-accent" />
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                                    Our Mission
                                </span>
                            </div>
                            <h2
                                id="about-heading"
                                className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight"
                            >
                                {siteConfig.aboutSnippet.headline}
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
                                {siteConfig.aboutSnippet.body1}
                            </p>
                            <p className="text-text-muted text-lg leading-relaxed mb-8 font-light">
                                {siteConfig.aboutSnippet.body2}
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                            >
                                Learn More About Us
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full z-0" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full z-0" />
                                {/* 2.5-E2 next/image; 2.5-C3 mobile max-h constraint */}
                                <Image
                                    src={siteConfig.aboutSnippet.image}
                                    alt={siteConfig.aboutSnippet.imageAlt}
                                    width={800}
                                    height={500}
                                    className="relative z-10 w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Preview — 2.5-B1/B2: heading scale, 2.5-D6: ARIA */}
            <section className="py-24 bg-white relative" aria-labelledby="events-heading">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2
                                id="events-heading"
                                className="text-4xl md:text-5xl font-display font-bold text-primary mb-2"
                            >
                                Upcoming Events
                            </h2>
                            <p className="text-text-muted">
                                Connect, learn, and grow with the community.
                            </p>
                        </div>
                        <Link
                            href="/events"
                            className="hidden sm:inline-block text-primary font-bold hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                        >
                            View All Calendar →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {previewEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            href="/events"
                            className="inline-block text-primary font-bold hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                        >
                            View All Calendar →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Member Spotlight — 2.5-B1/B2: heading, 2.5-D6: ARIA */}
            <section className="py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="spotlight-heading">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2
                            id="spotlight-heading"
                            className="text-4xl md:text-5xl font-display font-bold text-primary mb-4"
                        >
                            Member Spotlight
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {siteConfig.memberSpotlight.map((member) => (
                            <MemberCard key={member.name} member={member} variant="spotlight" />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <CTASection
                headline="Ready to Grow Your Business?"
                subtext={`Join over ${siteConfig.memberCount} local businesses that trust the ${siteConfig.orgShortName} to advocate for their success.`}
                buttonLabel="Become a Member Today"
                href="/members"
            />
        </>
    );
}
