"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Members", href: "/members" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-primary border-b border-white/10 shadow-lg">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex-shrink-0 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span className="material-symbols-outlined text-accent text-4xl">
                            account_balance
                        </span>
                        <div className="flex flex-col">
                            <span className="text-white font-display font-bold text-xl tracking-wide leading-none">
                                {siteConfig.city.toUpperCase()}
                            </span>
                            <span className="text-accent font-body text-[10px] uppercase tracking-[0.2em] leading-none mt-1">
                                Chamber of Commerce
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
                        {navLinks.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 ${isActive
                                            ? "text-accent border-b-2 border-accent pb-0.5"
                                            : "text-white/90 hover:text-accent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Join CTA — Desktop */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/members"
                            className="bg-accent hover:bg-accent-hover text-primary font-bold py-2.5 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            Join Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white hover:text-accent p-2 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            type="button"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMobileOpen((prev) => !prev)}
                        >
                            <span className="material-symbols-outlined">
                                {mobileOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                aria-hidden={!mobileOpen}
            >
                <nav
                    className="bg-primary border-t border-white/10 px-4 py-4 flex flex-col gap-1"
                    aria-label="Mobile navigation"
                >
                    {navLinks.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isActive
                                        ? "text-accent bg-white/10"
                                        : "text-white/90 hover:text-accent hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="pt-2 border-t border-white/10 mt-2">
                        <Link
                            href="/members"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-center bg-accent hover:bg-accent-hover text-primary font-bold py-3 px-6 rounded-lg transition-all text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            Join Us
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
