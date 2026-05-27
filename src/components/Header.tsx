import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { ArrowIcon } from "./icons";
import { VINN_URL } from "../lib/site";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
            <div className="site-header__inner">
                <a className="site-header__brand" href="/" aria-label="Lucky Labs – forside">
                    <Wordmark compact />
                </a>

                <nav className="site-header__nav" aria-label="Hovedmeny">
                    <a href="#produkt">Produkt</a>
                    <a href="#selskap">Selskap</a>
                    <a href="#kontakt">Kontakt</a>
                </nav>

                <a className="btn btn--primary btn--sm" href={VINN_URL} target="_blank" rel="noreferrer">
                    Se Vinn
                    <ArrowIcon className="btn__icon" />
                </a>
            </div>
        </header>
    );
}
