import { Reveal } from "./Reveal";

const cards = [
    {
        title: "Hvordan vi jobber",
        body: [
            "Vi gjør ideer om til virkelighet. Teamet har lang erfaring fra IT-bransjen og har levert i store og komplekse prosjekter.",
            "Vi tar hånden på rattet og realiserer ideer som tidligere ble stående på vent på grunn av teknisk kompleksitet – barrierer som nå er i ferd med å forsvinne.",
        ],
    },
    {
        title: "Hvorfor nå",
        body: [
            "Med AI bryter vi ned barrierer og senker terskelen for å få gode ideer ut i live, samtidig som vi sikrer trygge og skalerbare løsninger som kommer brukerne til gode.",
            "AIs inntog gjør digital produktutvikling stadig mer avhengig av én ting: dyp forståelse for mennesket som skal bruke løsningen.",
        ],
    },
];

export function Company() {
    return (
        <section className="section company" id="selskap">
            <div className="container">
                <div className="section__head">
                    <Reveal>
                        <span className="eyebrow">Selskapet</span>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="section__title">Fra idé til løsning</h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="section__lead section__lead--center">
                            Lucky Labs AS er et norsk produktselskap som utvikler og drifter egne digitale
                            tjenester og mobilapper – med fokus på enkle, brukervennlige opplevelser.
                        </p>
                    </Reveal>
                </div>

                <div className="company__grid">
                    {cards.map((card, i) => (
                        <Reveal as="article" className="card" key={card.title} delay={i * 90}>
                            <h3>{card.title}</h3>
                            {card.body.map((p) => (
                                <p key={p}>{p}</p>
                            ))}
                        </Reveal>
                    ))}
                </div>

                <Reveal as="article" className="founder" delay={120}>
                    <div className="founder__avatar" aria-hidden>
                        DBI
                    </div>
                    <div className="founder__body">
                        <p className="founder__quote">
                            «Vi bygger produkter vi selv vil bruke – og lar mennesket, ikke teknologien,
                            sette premissene.»
                        </p>
                        <p className="founder__name">Dag Brede Ihle</p>
                        <p className="founder__role">
                            Grunnlegger · programmerer, teknisk arkitekt og løsningsarkitekt med over 8 års
                            erfaring.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
