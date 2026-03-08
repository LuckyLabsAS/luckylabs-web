import { useEffect } from "react";

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

function App() {
    const year = new Date().getFullYear();
    const baseUrl = "/";
    const privacyPath = normalizePath("/privacy");
    const privacyHref = "/privacy";
    const currentPath = normalizePath(window.location.pathname);
    const isPrivacyView = currentPath === privacyPath;

    useEffect(() => {
        document.documentElement.classList.toggle("privacy-view", isPrivacyView);
        document.body.classList.toggle("privacy-view", isPrivacyView);

        return () => {
            document.documentElement.classList.remove("privacy-view");
            document.body.classList.remove("privacy-view");
        };
    }, [isPrivacyView]);

    if (isPrivacyView) {
        return (
            <main className="legal-page">
                <div className="legal-content">
                    <header className="legal-hero">
                        <p className="legal-chip">Lucky Labs AS</p>
                        <h1>Personvernerklæring</h1>
                        <p className="legal-updated">Sist oppdatert: 27. februar 2026</p>
                    </header>

                    <section className="legal-section">
                        <h2>1. Behandlingsansvarlig</h2>
                        <p>
                            Lucky Labs AS
                            <br />
                            Org.nr: 937146639
                            <br />
                            E-post:{" "}
                            <a href="mailto:dag@luckylabs.no">dag@luckylabs.no</a>
                            <br />
                            Norge
                        </p>
                        <p>
                            Lucky Labs AS er behandlingsansvarlig for personopplysninger som
                            behandles i forbindelse med vår virksomhet og nettside.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Hvilke opplysninger vi behandler</h2>
                        <p>Per i dag samler vi ikke inn personopplysninger via nettsiden utover:</p>
                        <ul>
                            <li>Informasjon du selv sender oss via e-post</li>
                            <li>
                                Tekniske serverlogger (IP-adresse, tidspunkt, nettleser) som
                                genereres automatisk av hosting-leverandør
                            </li>
                        </ul>
                        <p>Vi bruker ikke kontaktskjema eller brukerregistrering på nettsiden.</p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Formål med behandlingen</h2>
                        <p>Opplysninger behandles kun for:</p>
                        <ul>
                            <li>Å besvare henvendelser</li>
                            <li>Drift, vedlikehold og sikkerhet av nettsiden</li>
                            <li>Dokumentasjon av kommunikasjon</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Lagring og sletting</h2>
                        <p>
                            Personopplysninger lagres kun så lenge det er nødvendig for formålet de
                            ble samlet inn for, eller så lenge vi er rettslig forpliktet til å
                            oppbevare dem.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Deling av opplysninger</h2>
                        <p>Vi deler ikke personopplysninger med tredjeparter, med mindre:</p>
                        <ul>
                            <li>Det er nødvendig for teknisk drift (f.eks. hosting-leverandør)</li>
                            <li>Det foreligger lovpålagt plikt</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>6. Dine rettigheter</h2>
                        <p>Du har rett til:</p>
                        <ul>
                            <li>Innsyn i hvilke opplysninger vi har om deg</li>
                            <li>Retting av feilaktige opplysninger</li>
                            <li>Sletting av opplysninger der loven tillater det</li>
                            <li>Å klage til Datatilsynet</li>
                        </ul>
                        <p>
                            Henvendelser kan sendes til:{" "}
                            <a href="mailto:dag@luckylabs.no">dag@luckylabs.no</a>
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Fremtidige tjenester</h2>
                        <p>
                            Lucky Labs AS utvikler digitale produkter. Ved lansering av
                            applikasjoner eller tjenester som innebærer behandling av
                            personopplysninger, vil egne personvernerklæringer publiseres og
                            oppdateres i henhold til gjeldende regelverk.
                        </p>
                    </section>

                    <p className="legal-back-link">
                        <a href={baseUrl}>Tilbake til forsiden</a>
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="page">
            <section className="panel hero">
                <div className="content">
                    <img className="hero-logo" src="/luckylabs-logo-oneline.svg" alt="Lucky Labs" />
                </div>
            </section>

            <section className="panel company-panel">
                <div className="content company-content">
                    <h2>Om Lucky Labs AS</h2>
                    <p>
                        Lucky Labs AS er et norsk produktselskap som utvikler digitale tjenester
                        og mobilapper.
                    </p>
                    <p>
                        Vi utvikler for tiden appen <strong>Vinn</strong>, som lanseres på App
                        Store og Google Play.
                    </p>
                    <div className="company-grid">
                        <article className="company-card">
                            <h3>Hva vi gjør</h3>
                            <p>
                                Vi utvikler og drifter egne digitale produkter, med fokus på
                                enkle, brukervennlige opplevelser for mobil.
                            </p>
                        </article>
                        <article className="company-card">
                            <h3>Produkter</h3>
                            <p>
                                Vinn (under utvikling) er vår første app og bygges for iOS og
                                Android.
                            </p>
                        </article>
                        <article className="company-card">
                            <h3>Kontakt</h3>
                            <p>
                                For henvendelser:{" "}
                                <a href="mailto:dag@luckylabs.no">dag@luckylabs.no</a>
                            </p>
                            <p>
                                <a href={privacyHref}>Personvern</a>
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="panel how-panel">
                <div className="content how-content">
                    <h2>Fra Idé Til Løsning</h2>
                    <div className="how-sections">
                        <article className="how-card">
                            <h3>Hvordan vi jobber</h3>
                            <p>
                                Vi gjør ideer om til virkelighet. Teamet vårt har lang erfaring
                                fra IT-bransjen og har levert i store og komplekse IT-prosjekter.
                            </p>
                            <p>
                                Grunnlegger Dag Brede Ihle har jobbet som programmerer, teknisk
                                arkitekt og løsningsarkitekt i over 8 år.
                            </p>
                        </article>
                        <article className="how-card">
                            <h3>Hvorfor nå</h3>
                            <p>
                                Med AI bryter vi ned barrierer og senker terskelen for å få gode
                                ideer ut i live, samtidig som vi sikrer gode, trygge og skalerbare
                                løsninger som kommer brukerne til gode.
                            </p>
                            <p>
                                Vi tror at <strong>AIs inntog</strong> gjør digital
                                produktutvikling stadig mer avhengig av én ting:{" "}
                                <strong>dyp forståelse for mennesket</strong> som skal bruke
                                løsningen.
                            </p>
                            <p>
                                Vi <strong>tar hånden på rattet</strong> og realiserer ideer som
                                tidligere ble stående på vent på grunn av teknisk kompleksitet,
                                barrierer som nå i stor grad er{" "}
                                <strong>i ferd med å forsvinne</strong>.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="panel footer-panel">
                <footer className="content footer-content">
                    <p>
                        Lucky Labs lager digitale produkter med fokus på enkle,
                        lekne opplevelser.
                    </p>
                    <p>
                        Kontakt:{" "}
                        <a href="mailto:dag@luckylabs.no">dag@luckylabs.no</a>
                    </p>
                    <p>
                        <a href={privacyHref}>Personvernerklæring</a>
                    </p>
                    <small>
                        © {year} Lucky Labs AS (Org.nr: 937146639). Alle rettigheter
                        forbeholdt.
                    </small>
                </footer>
            </section>
        </main>
    );
}

export default App;
