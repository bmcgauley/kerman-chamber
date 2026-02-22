/**
 * KCCButton — KCC-branded wrapper around the 21st.dev InteractiveHoverButton.
 *
 * Variants:
 *   primary      — gold bg, navy text → on hover: navy blob, gold text
 *   outline      — transparent, white border/text → on hover: white blob, navy text
 *   outline-dark — transparent, navy border/text → on hover: navy blob, white text
 *
 * Uses data-variant + CSS in globals for hover text inversion (Tailwind v4 safe).
 * Uses group/btn named group so card-level hover does NOT trigger button animation.
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

const variantWrapper: Record<KCCButtonVariant, string> = {
    primary:        "border-accent bg-accent",
    outline:        "border-white bg-transparent",
    "outline-dark": "border-primary bg-transparent",
};

const variantBlob: Record<KCCButtonVariant, string> = {
    primary:        "bg-primary",
    outline:        "bg-white",
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
            data-variant={variant}
            className={cn(
                "kcc-btn group/btn relative flex items-center justify-center cursor-pointer",
                "overflow-hidden rounded-lg border-2 font-bold",
                "px-8 py-4 text-lg",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                variantWrapper[variant],
                className
            )}
        >
            {/* Resting label */}
            <span className="kcc-btn__label relative z-10 inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0 whitespace-nowrap">
                {children}
            </span>

            {/* Hover label + arrow */}
            <span className="kcc-btn__label absolute z-10 flex items-center gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover/btn:-translate-x-0 group-hover/btn:opacity-100 whitespace-nowrap">
                {children}
                <ArrowRight size={18} />
            </span>

            {/* Blob */}
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
