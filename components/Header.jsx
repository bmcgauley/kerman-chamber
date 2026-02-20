"use client";
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

    return (
        <header className="sticky top-0 z-50 w-full bg-primary border-b border-white/10 shadow-lg">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3">
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
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${isActive
                                            ? "text-accent border-b-2 border-accent pb-0.5"
                                            : "text-white/90 hover:text-accent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Join CTA */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/members"
                            className="bg-accent hover:bg-accent-hover text-primary font-bold py-2.5 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md text-sm"
                        >
                            Join Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white hover:text-accent p-2"
                            type="button"
                            aria-label="Open menu"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
