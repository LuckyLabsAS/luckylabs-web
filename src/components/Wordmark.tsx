type Props = {
    /** Smaller variant used in the header / footer. */
    compact?: boolean;
    className?: string;
};

/** "Lucky Labs" wordmark with a glowing accent dot — the brand lockup. */
export function Wordmark({ compact = false, className = "" }: Props) {
    return (
        <span className={`wordmark ${compact ? "wordmark--compact" : ""} ${className}`.trim()}>
            Lucky&nbsp;Labs<span className="wordmark__dot" aria-hidden>.</span>
        </span>
    );
}
