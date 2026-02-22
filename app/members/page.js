"use client";
import { useState } from "react";
import MemberCard from "@/components/MemberCard";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/config/site";
import { KCCButton } from "@/components/KCCButton";

export default function MembersPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(siteConfig.members.map((m) => m.category))];

    const filtered = siteConfig.members.filter((m) => {
        const matchesSearch =
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.category.toLowerCase().includes(search.toLowerCase());
        const matchesCat = activeCategory === "All" || m.category === activeCategory;
        return matchesSearch && matchesCat;
    });

    return (
        <>
            {/* Page Hero */}
            <section className="relative bg-primary py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')" }}
                />
                <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Our Members
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
                        Discover the businesses powering {siteConfig.city}&apos;s economy.
                    </p>
                </div>
            </section>

            {/* Search + Filter */}
            <div className="bg-bg-light border-b border-gray-200 py-6 sticky top-20 z-40 backdrop-blur-md">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Search businesses..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-accent bg-white text-sm"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 transition-all ${activeCategory === cat
                                    ? "bg-primary text-white font-bold"
                                    : "bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Members Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    {filtered.length === 0 ? (
                        <div className="text-center py-24 text-slate-500">
                            <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">
                                search_off
                            </span>
                            No members match your search.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((member) => (
                                <MemberCard key={member.name} member={member} variant="directory" />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Membership Tiers */}
            <section id="join" className="py-20 bg-bg-light border-t border-slate-200">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                            Join the Community
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-4" />
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choose the membership tier that fits your business. All members gain
                            access to our network, events, and advocacy.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {siteConfig.membershipTiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`relative flex flex-col rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${tier.highlight
                                    ? "border-accent bg-primary text-white shadow-accent-glow"
                                    : "border-slate-200 bg-white"
                                    }`}
                            >
                                {tier.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-accent text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <h3
                                    className={`text-2xl font-display font-bold mb-1 ${tier.highlight ? "text-accent" : "text-primary"
                                        }`}
                                >
                                    {tier.name}
                                </h3>
                                <div className="flex items-end gap-1 mb-6">
                                    <span
                                        className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-primary"
                                            }`}
                                    >
                                        ${tier.price}
                                    </span>
                                    <span
                                        className={`text-sm mb-1 ${tier.highlight ? "text-white/70" : "text-slate-500"
                                            }`}
                                    >
                                        {tier.period}
                                    </span>
                                </div>
                                <ul className="space-y-3 flex-1 mb-8">
                                    {tier.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm">
                                            <span
                                                className={`material-symbols-outlined text-base mt-0.5 flex-shrink-0 ${tier.highlight ? "text-accent" : "text-accent"
                                                    }`}
                                            >
                                                check_circle
                                            </span>
                                            <span className={tier.highlight ? "text-white/90" : "text-slate-600"}>
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <KCCButton
                                    variant={tier.highlight ? "primary" : "outline-dark"}
                                    href="/contact"
                                    className="w-full"
                                >
                                    {tier.cta}
                                </KCCButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                headline="Ready to Join?"
                subtext={`Become part of the ${siteConfig.orgShortName} and start growing with us today.`}
                buttonLabel="Contact Us to Join"
                href="/contact"
            />
        </>
    );
}
