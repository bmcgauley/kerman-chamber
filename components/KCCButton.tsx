/**
 * KCCButton — KCC-branded wrapper around the 21st.dev InteractiveHoverButton.
 *
 * Variants:
 *   primary      — gold background, navy text, navy hover-fill blob
 *   outline      — transparent bg, white border (for dark bg usage)
 *   outline-dark — transparent bg, navy border (for light bg usage)
 *
 * IMPORTANT: Uses Tailwind named group `group/btn` so hover animation only
 * fires when the BUTTON itself is hovered — not when a parent card is hovered.
 *
 * Usage:
 *   <KCCButton href="/members">Join Us</KCCButton>
 *   <KCCButton variant="outline" href="/events">View Events</KCCButton>
 *   <KCCButton onClick={handleClick}>Submit</KCCButton>
 */

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type KCCButtonVariant = "primary" | "outline" | "outline-dark";

interface KCCButtonBaseProps {
    variant?: KCCButtonVariant;
    children: React.ReactNode;
    className?: string;
}

type KCCButtonProps =
    | (KCCButtonBaseProps & { href: string; onClick?: never } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
    | (KCCButtonBaseProps & { href?: never; onClick?: React.MouseEventHandler<HTMLButtonElement> } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">);

// blob and text values must NOT use group-hover — those are set inline with named group
const variantWrapper: Record<KCCButtonVariant, string> = {
    primary: "border-accent bg-accent text-primary",
    outline: "border-white bg-transparent text-white",
    "outline-dark": "border-primary bg-transparent text-primary",
};

const variantBlob: Record<KCCButtonVariant, string> = {
    primary: "bg-primary",
    outline: "bg-white",
    "outline-dark": "bg-primary",
};

export function KCCButton({
    variant = "primary",
    children,
    className,
    href,
    ...props
}: KCCButtonProps) {
    const inner = (
        <span
            className={cn(
                // Named group "btn" — hover only fires for THIS element, not parent cards
                "group/btn relative flex items-center justify-center cursor-pointer overflow-hidden rounded-lg border-2 font-bold transition-colors duration-300",
                "px-8 py-4 text-lg",
                variantWrapper[variant],
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                className
            )}
        >
            {/* Resting label — slides right on hover */}
            <span className="relative z-10 inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0 whitespace-nowrap">
                {children}
            </span>

            {/* Hover state — arrow + label slides in from right */}
            <span className="absolute z-10 flex items-center gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover/btn:-translate-x-0 group-hover/btn:opacity-100 whitespace-nowrap">
                {children}
                <ArrowRight size={18} />
            </span>

            {/* Blob fill — starts bottom-left corner, expands to fill on hover */}
            <span
                className={cn(
                    "absolute left-1 bottom-1 h-2 w-2 rounded-full transition-all duration-300 pointer-events-none",
                    "group-hover/btn:left-0 group-hover/btn:bottom-0 group-hover/btn:h-full group-hover/btn:w-full group-hover/btn:rounded-lg group-hover/btn:scale-[1.1]",
                    variantBlob[variant]
                )}
            />
        </span>
    );

    if (href) {
        return (
            <Link href={href} className="block w-full sm:w-auto" {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {inner}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className="w-full sm:w-auto block"
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {inner}
        </button>
    );
}
