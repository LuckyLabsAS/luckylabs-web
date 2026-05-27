import type { SVGProps } from "react";

/** Bold Vinn "V" wedge — the product mark behind luckylabs-web. */
export function VinnMark(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 120 132" fill="currentColor" aria-hidden {...props}>
            <path
                d="M3 8 Q3 4 7 4 L33 4 Q37 4 38 8 L59 80 Q60 83 61 80 L82 8 Q83 4 87 4 L113 4 Q117 4 116 8 L72 126 Q71 128 69 128 L51 128 Q49 128 48 126 Z"
            />
        </svg>
    );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
    );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden {...props}>
            <path d="M3.6 2.4 13 12 3.6 21.6c-.37-.2-.6-.6-.6-1.06V3.46c0-.46.23-.86.6-1.06z" fill="#5BC9F5" />
            <path d="M16.9 8.5 13 12l3.9 3.5 3.2-1.83c.92-.53.92-1.81 0-2.34L16.9 8.5z" fill="#FFD400" />
            <path d="M3.6 2.4c.28-.16.62-.18.95 0L17.3 9.7 16.9 8.5 13 12 3.6 2.4z" fill="#00EF76" />
            <path d="M3.6 21.6c.28.16.62.18.95 0l12.75-7.3-.4-1.2L13 12l-9.4 9.6z" fill="#FF3A44" />
        </svg>
    );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden {...props}>
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
            <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2z" />
        </svg>
    );
}
