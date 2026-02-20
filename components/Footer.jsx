import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-accent text-3xl">
                                account_balance
                            </span>
                            <div className="flex flex-col">
                                <span className="text-white font-display font-bold text-lg tracking-wide leading-none">
                                    {siteConfig.city.toUpperCase()}
                                </span>
                                <span className="text-accent font-body text-[8px] uppercase tracking-[0.2em] leading-none mt-1">
                                    Chamber of Commerce
                                </span>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Serving the {siteConfig.city} business community with pride and
                            dedication since {siteConfig.founded}.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href={siteConfig.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-display font-bold text-lg mb-6">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/80 text-sm">
                                <span className="material-symbols-outlined text-accent shrink-0">
                                    location_on
                                </span>
                                <span>
                                    {siteConfig.address}
                                    <br />
                                    {siteConfig.cityStateZip}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-white/80 text-sm">
                                <span className="material-symbols-outlined text-accent shrink-0">
                                    call
                                </span>
                                <a
                                    href={`tel:${siteConfig.phoneRaw}`}
                                    className="hover:text-accent transition-colors"
                                >
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-white/80 text-sm">
                                <span className="material-symbols-outlined text-accent shrink-0">
                                    mail
                                </span>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="hover:text-accent transition-colors break-all"
                                >
                                    {siteConfig.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display font-bold text-lg mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About the Chamber", href: "/about" },
                                { label: "Membership Directory", href: "/members" },
                                { label: "Events Calendar", href: "/events" },
                                { label: "Join Now", href: "/members#join" },
                                { label: "Contact Us", href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-accent text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-display font-bold text-lg mb-6">
                            Stay Informed
                        </h4>
                        <p className="text-white/70 text-sm mb-4">
                            Subscribe for the latest business news and events.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/5 border border-white/20 rounded px-4 py-2 text-white text-sm focus:outline-none focus:border-accent"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-primary font-bold text-sm py-2 px-4 rounded hover:bg-accent-hover transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">
                        © {year} {siteConfig.orgName}. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs flex items-center gap-1">
                        Designed with{" "}
                        <span className="material-symbols-outlined text-[10px] text-red-500">
                            favorite
                        </span>{" "}
                        in {siteConfig.city}
                    </p>
                </div>
            </div>
        </footer>
    );
}
