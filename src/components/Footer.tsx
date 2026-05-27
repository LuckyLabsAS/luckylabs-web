import { Wordmark } from "./Wordmark";
import { CONTACT_EMAIL, ORG_NR, PRIVACY_HREF, VINN_URL } from "../lib/site";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <div className="site-footer__brand">
                    <Wordmark />
                    <p>Digitale produkter med fokus på enkle, lekne opplevelser.</p>
                </div>

                <nav className="site-footer__nav" aria-label="Bunnmeny">
                    <div>
                        <span className="site-footer__heading">Produkt</span>
                        <a href={VINN_URL} target="_blank" rel="noreferrer">Vinn</a>
                        <a href={VINN_URL} target="_blank" rel="noreferrer">vunnet.no</a>
                    </div>
                    <div>
                        <span className="site-footer__heading">Selskap</span>
                        <a href="#selskap">Om oss</a>
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                        <a href={PRIVACY_HREF}>Personvern</a>
                    </div>
                </nav>
            </div>

            <div className="container site-footer__legal">
                <small>© {year} Lucky Labs AS · Org.nr {ORG_NR} · Alle rettigheter forbeholdt.</small>
            </div>
        </footer>
    );
}
