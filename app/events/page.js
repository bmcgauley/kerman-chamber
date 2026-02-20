"use client";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import { siteConfig } from "@/config/site";

const CATEGORIES = ["All", "Networking", "Community", "Business Education", "Annual"];

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered =
        activeCategory === "All"
            ? siteConfig.events
            : siteConfig.events.filter((e) => e.category === activeCategory);

    const featured = filtered.find((e) => e.featured);
    const regular = filtered.filter((e) => !e.featured);

    return (
        <>
            {/* Page Hero */}
            <section className="relative bg-primary py-16 md:py-20">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')" }}
                />
                <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Upcoming Events
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
                        Stay connected with the {siteConfig.city} business community through
                        networking, workshops, and celebrations.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 bg-bg-light/95 backdrop-blur-md border-b border-gray-200 py-4">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar min-w-max">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-medium text-sm transition-all flex-shrink-0 ${activeCategory === cat
                                        ? "bg-accent text-primary font-bold shadow-md"
                                        : "bg-primary text-white hover:bg-primary/80"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Events Grid */}
            <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
                {filtered.length === 0 ? (
                    <div className="text-center py-24 text-slate-500">
                        <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">
                            event_busy
                        </span>
                        No events found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featured && <EventCard event={featured} />}
                        {regular.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}

                {/* Submit Event Banner */}
                <div className="rounded-2xl bg-bg-light p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-accent/20">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-primary">
                            Have an event to share?
                        </h3>
                        <p className="text-slate-600 max-w-lg">
                            Member events can be featured on our community calendar. Submit your
                            event details for review by our team.
                        </p>
                    </div>
                    <button className="flex-shrink-0 px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                        Submit Event
                    </button>
                </div>
            </main>
        </>
    );
}
