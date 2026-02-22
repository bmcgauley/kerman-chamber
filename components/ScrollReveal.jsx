"use client";
import { useEffect, useRef } from "react";

/**
 * ScrollReveal — wraps children and triggers a .reveal.visible CSS animation
 * when the element enters the viewport. Respects prefers-reduced-motion.
 * 
 * Usage: <ScrollReveal delay={0}><YourComponent /></ScrollReveal>
 */
export default function ScrollReveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Skip if reduced motion is preferred
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            el.classList.remove("reveal");
            return;
        }

        el.classList.add("reveal");
        if (delay) el.style.animationDelay = `${delay}ms`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
