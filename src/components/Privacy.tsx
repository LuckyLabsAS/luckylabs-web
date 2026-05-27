import { Wordmark } from "./Wordmark";
import { ArrowIcon } from "./icons";
import { CONTACT_EMAIL, ORG_NR } from "../lib/site";

/** Privacy policy — legal text kept verbatim, restyled to match the site. */
export function Privacy() {
    return (
        <main className="legal">
            <div className="legal__aurora" aria-hidden>
                <span className="aurora aurora--1" />
                <span className="aurora aurora--2" />
            </div>

            <div className="legal__content">
                <header className="legal__hero">
                    <a className="legal__brand" href="/" aria-label="Lucky Labs – forside">
                        <Wordmark compact />
                    </a>
                    <span className="chip">Lucky Labs AS</span>
                    <h1>Personvernerklæring</h1>
                    <p className="legal__updated">Sist oppdatert: 27. februar 2026</p>
                </header>

                <section className="legal__section">
                    <h2>1. Behandlingsansvarlig</h2>
                    <p>
                        Lucky Labs AS
                        <br />
                        Org.nr: {ORG_NR}
                        <br />
                        E-post: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                        <br />
                        Norge
                    </p>
                    <p>
                        Lucky Labs AS er behandlingsansvarlig for personopplysninger som behandles i
                        forbindelse med vår virksomhet og nettside.
                    </p>
                </section>

                <section className="legal__section">
                    <h2>2. Hvilke opplysninger vi behandler</h2>
                    <p>Per i dag samler vi ikke inn personopplysninger via nettsiden utover:</p>
                    <ul>
                        <li>Informasjon du selv sender oss via e-post</li>
                        <li>
                            Tekniske serverlogger (IP-adresse, tidspunkt, nettleser) som genereres
                            automatisk av hosting-leverandør
                        </li>
                    </ul>
                    <p>Vi bruker ikke kontaktskjema eller brukerregistrering på nettsiden.</p>
                </section>

                <section className="legal__section">
                    <h2>3. Formål med behandlingen</h2>
                    <p>Opplysninger behandles kun for:</p>
                    <ul>
                        <li>Å besvare henvendelser</li>
                        <li>Drift, vedlikehold og sikkerhet av nettsiden</li>
                        <li>Dokumentasjon av kommunikasjon</li>
                    </ul>
                </section>

                <section className="legal__section">
                    <h2>4. Lagring og sletting</h2>
                    <p>
                        Personopplysninger lagres kun så lenge det er nødvendig for formålet de ble samlet
                        inn for, eller så lenge vi er rettslig forpliktet til å oppbevare dem.
                    </p>
                </section>

                <section className="legal__section">
                    <h2>5. Deling av opplysninger</h2>
                    <p>Vi deler ikke personopplysninger med tredjeparter, med mindre:</p>
                    <ul>
                        <li>Det er nødvendig for teknisk drift (f.eks. hosting-leverandør)</li>
                        <li>Det foreligger lovpålagt plikt</li>
                    </ul>
                </section>

                <section className="legal__section">
                    <h2>6. Dine rettigheter</h2>
                    <p>Du har rett til:</p>
                    <ul>
                        <li>Innsyn i hvilke opplysninger vi har om deg</li>
                        <li>Retting av feilaktige opplysninger</li>
                        <li>Sletting av opplysninger der loven tillater det</li>
                        <li>Å klage til Datatilsynet</li>
                    </ul>
                    <p>
                        Henvendelser kan sendes til: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </p>
                </section>

                <section className="legal__section">
                    <h2>7. Fremtidige tjenester</h2>
                    <p>
                        Lucky Labs AS utvikler digitale produkter. Ved lansering av applikasjoner eller
                        tjenester som innebærer behandling av personopplysninger, vil egne
                        personvernerklæringer publiseres og oppdateres i henhold til gjeldende regelverk.
                    </p>
                </section>

                <p className="legal__back">
                    <a href="/">
                        <ArrowIcon className="legal__back-icon" />
                        Tilbake til forsiden
                    </a>
                </p>
            </div>
        </main>
    );
}
