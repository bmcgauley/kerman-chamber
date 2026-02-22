/**
 * KCCButton — KCC-branded wrapper around the 21st.dev InteractiveHoverButton.
 *
 * Variants:
 *   primary  — gold background (#C8971A), navy text, navy hover-fill blob
 *   outline  — transparent bg, white border, white hover-fill blob (for dark bg usage)
 *   outline-dark — transparent bg, navy border, navy hover-fill blob (for light bg usage)
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

const variantStyles: Record<KCCButtonVariant, { wrapper: string; blob: string; text: string }> = {
    primary: {
        wrapper: "border-accent bg-accent text-primary hover:text-white",
        blob: "bg-primary group-hover:bg-primary",
        text: "text-primary group-hover:text-white",
    },
    outline: {
        wrapper: "border-white bg-transparent text-white hover:text-primary",
        blob: "bg-white group-hover:bg-white",
        text: "text-white group-hover:text-primary",
    },
    "outline-dark": {
        wrapper: "border-primary bg-transparent text-primary hover:text-white",
        blob: "bg-primary group-hover:bg-primary",
        text: "text-primary group-hover:text-white",
    },
};

export function KCCButton({
    variant = "primary",
    children,
    className,
    href,
    ...props
}: KCCButtonProps) {
    const styles = variantStyles[variant];

    const inner = (
        <span
            className={cn(
                "group relative flex items-center justify-center cursor-pointer overflow-hidden rounded-lg border font-bold transition-colors duration-300",
                "px-8 py-4 text-lg",
                styles.wrapper,
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                className
            )}
        >
            {/* Resting label — slides right on hover */}
            <span className="relative z-10 inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 whitespace-nowrap">
                {children}
            </span>

            {/* Hover state — arrow + label slides in from right */}
            <span className="absolute z-10 flex items-center gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100 whitespace-nowrap">
                {children}
                <ArrowRight size={18} />
            </span>

            {/* Blob fill */}
            <span
                className={cn(
                    "absolute left-[20%] top-[40%] h-2 w-2 rounded-lg transition-all duration-300",
                    "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
                    styles.blob
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
