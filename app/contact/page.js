"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual form handling (e.g. Resend, Formspree, etc.)
        setSubmitted(true);
    };

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
                        Get In Touch
                    </h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Our team is ready to answer all your
                        questions about membership, events, or anything else.
                    </p>
                </div>
            </section>

            {/* Form + Details */}
            <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 sm:p-10">
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-slate-500 mb-8">
                                Fill out the form below and we&apos;ll get back to you shortly.
                            </p>

                            {submitted ? (
                                <div className="flex flex-col items-center text-center py-12 gap-4">
                                    <span className="material-symbols-outlined text-6xl text-accent">
                                        check_circle
                                    </span>
                                    <h3 className="text-2xl font-display font-bold text-primary">
                                        Message Sent!
                                    </h3>
                                    <p className="text-slate-600">
                                        Thank you for reaching out. We&apos;ll get back to you within one business day.
                                    </p>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <label className="block">
                                            <span className="text-sm font-semibold text-slate-700 mb-1 block">
                                                Full Name
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Jane Smith"
                                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-accent focus:outline-none focus:bg-white transition-colors placeholder:text-slate-400"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-sm font-semibold text-slate-700 mb-1 block">
                                                Email Address
                                            </span>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="jane@example.com"
                                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-accent focus:outline-none focus:bg-white transition-colors placeholder:text-slate-400"
                                            />
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <label className="block">
                                            <span className="text-sm font-semibold text-slate-700 mb-1 block">
                                                Phone Number
                                            </span>
                                            <input
                                                type="tel"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                placeholder="(555) 123-4567"
                                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-accent focus:outline-none focus:bg-white transition-colors placeholder:text-slate-400"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-sm font-semibold text-slate-700 mb-1 block">
                                                Subject
                                            </span>
                                            <select
                                                value={form.subject}
                                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-accent focus:outline-none focus:bg-white transition-colors"
                                            >
                                                <option>General Inquiry</option>
                                                <option>Membership</option>
                                                <option>Events &amp; Sponsorship</option>
                                                <option>Press &amp; Media</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-slate-700 mb-1 block">
                                            Message
                                        </span>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="How can we help you?"
                                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-accent focus:outline-none focus:bg-white transition-colors placeholder:text-slate-400 resize-none"
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center items-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-primary font-bold rounded-lg transition-all active:scale-95 shadow-md"
                                    >
                                        Send Message
                                        <span className="material-symbols-outlined text-xl">send</span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right: Contact Details */}
                    <div className="lg:col-span-5">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: "location_on", label: "Our Office", value: `${siteConfig.address}, ${siteConfig.cityStateZip}`, href: siteConfig.mapEmbedUrl },
                                        { icon: "call", label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
                                        { icon: "mail", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                                        { icon: "schedule", label: "Office Hours", value: siteConfig.hours, href: null },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                                    {item.label}
                                                </p>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="mt-1 text-base font-medium text-slate-900 hover:text-accent transition-colors block"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="mt-1 text-base font-medium text-slate-900">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social */}
                            <div className="pt-8 border-t border-slate-200">
                                <h4 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h4>
                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={siteConfig.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-accent hover:text-accent transition-all shadow-sm group"
                                    >
                                        <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
                                        </svg>
                                        <span className="font-medium text-slate-700 group-hover:text-accent text-sm">Facebook</span>
                                    </a>
                                    <a
                                        href={siteConfig.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-accent hover:text-accent transition-all shadow-sm group"
                                    >
                                        <svg className="w-5 h-5 text-slate-600 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd" />
                                        </svg>
                                        <span className="font-medium text-slate-700 group-hover:text-accent text-sm">Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Map Section */}
            <section className="w-full">
                <div className="bg-primary py-6 px-4 text-center">
                    <h2 className="text-white font-display text-2xl font-bold tracking-wide">
                        Find Us In {siteConfig.city}
                    </h2>
                </div>
                <div className="w-full h-80 relative bg-slate-200">
                    <div
                        className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
                        style={{ backgroundImage: `url('${siteConfig.mapImageUrl}')` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-200 flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent">pin_drop</span>
                            <span className="font-bold text-primary">
                                {siteConfig.address}, {siteConfig.city}, CA
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership CTA */}
            <section className="bg-white py-16 border-t border-slate-100">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-bg-light rounded-2xl p-8 md:p-12 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
                                Interested in joining?
                            </h2>
                            <p className="text-slate-600 max-w-xl">
                                Become a member of the {siteConfig.orgName} today and start growing your business with our community support.
                            </p>
                        </div>
                        <a
                            href="/members#join"
                            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-lg shadow-lg transition-all"
                        >
                            Membership Info
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
