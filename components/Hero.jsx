import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
    const { hero } = siteConfig;
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
                    {hero.headline}{" "}
                    <br />
                    <span className="text-accent">{hero.headlineAccent}</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto tracking-wide">
                    {hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href={hero.ctaPrimary.href}
                        className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-primary font-bold text-lg py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-accent-glow"
                    >
                        {hero.ctaPrimary.label}
                    </Link>
                    <Link
                        href={hero.ctaSecondary.href}
                        className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold text-lg py-4 px-8 rounded-lg transition-all"
                    >
                        {hero.ctaSecondary.label}
                    </Link>
                </div>
            </div>
        </section>
    );
}
