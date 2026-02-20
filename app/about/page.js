import CTASection from "@/components/CTASection";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "About Us",
    description: `Learn about the ${siteConfig.orgName} — our history, mission, values, and leadership.`,
};

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative bg-primary py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')" }}
                />
                <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-accent" />
                        <span className="text-accent font-bold uppercase tracking-widest text-sm">
                            Our Story
                        </span>
                        <div className="w-12 h-1 bg-accent" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                        Who We Are
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
                        For over {parseInt(new Date().getFullYear()) - parseInt(siteConfig.founded)} years, the {siteConfig.orgName} has
                        championed local business and community vitality in the Central Valley.
                    </p>
                </div>
            </section>

            {/* History Timeline */}
            <section className="py-24 bg-bg-light">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                            Our Journey
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto" />
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />
                        <div className="space-y-12">
                            {siteConfig.timeline.map((item, i) => (
                                <div
                                    key={item.year}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className="flex-1 md:text-right">
                                        {i % 2 === 0 ? (
                                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
                                                <span className="text-accent font-bold text-sm uppercase tracking-wider">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl font-display font-bold text-primary mt-1 mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="md:invisible" />
                                        )}
                                    </div>
                                    {/* Center dot */}
                                    <div className="hidden md:flex w-12 h-12 rounded-full bg-accent text-primary items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-lg">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1">
                                        {i % 2 !== 0 ? (
                                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
                                                <span className="text-accent font-bold text-sm uppercase tracking-wider">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-xl font-display font-bold text-primary mt-1 mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="md:invisible" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                            Core Values
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {siteConfig.coreValues.map((val) => (
                            <div
                                key={val.title}
                                className="group flex flex-col items-center text-center p-8 rounded-xl bg-bg-light border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                                    <span className="material-symbols-outlined text-white text-3xl group-hover:text-primary transition-colors">
                                        {val.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-display font-bold text-primary mb-3">
                                    {val.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                            Board of Directors
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {siteConfig.boardMembers.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        person
                                    </span>
                                </div>
                                <h4 className="font-bold text-primary text-sm font-display leading-tight">
                                    {member.name}
                                </h4>
                                <p className="text-slate-500 text-xs mt-1">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-white border-t border-slate-200">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: siteConfig.yearsServing, label: "Years of Service" },
                            { value: siteConfig.memberCount, label: "Active Members" },
                            { value: siteConfig.eventCount, label: "Events per Year" },
                            { value: "$1M+", label: "Local Economic Impact" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center">
                                <span className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                headline="Become Part of Something Bigger"
                subtext="Join the Chamber and connect with hundreds of local businesses driving Kerman forward."
                buttonLabel="Explore Membership"
                href="/members"
            />
        </>
    );
}
