import Link from "next/link";

/**
 * CTASection — reusable navy call-to-action banner.
 * Props: headline, subtext, buttonLabel, href
 */
export default function CTASection({ headline, subtext, buttonLabel, href = "/members" }) {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    {headline}
                </h2>
                {subtext && (
                    <p className="text-xl text-white/80 mb-10 font-light">{subtext}</p>
                )}
                <Link
                    href={href}
                    className="bg-accent hover:bg-accent-hover text-primary font-bold text-lg py-4 px-10 rounded-lg shadow-lg transition-transform hover:scale-105 inline-block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                    {buttonLabel}
                </Link>
            </div>
        </section>
    );
}
