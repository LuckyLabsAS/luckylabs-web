import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
    children: ReactNode;
    /** Stagger delay in ms before the reveal transition starts. */
    delay?: number;
    /** Render as a different element (default div). */
    as?: "div" | "section" | "li" | "article";
    className?: string;
};

/**
 * Fades/slides children in the first time they scroll into view.
 * Honors prefers-reduced-motion by rendering immediately visible.
 */
export function Reveal({ children, delay = 0, as = "div", className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setVisible(true);
            return;
        }

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const Tag = as;
    return (
        <Tag
            ref={ref as never}
            className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
}
