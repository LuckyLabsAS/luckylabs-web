import { Reveal } from "./Reveal";
import { PhoneMockup } from "./PhoneMockup";
import { StoreBadges } from "./StoreBadges";
import { ArrowIcon } from "./icons";
import { VINN_URL } from "../lib/site";

const features = [
    { title: "Håndplukket", body: "Trekninger fra hele Norge, kvalitetssjekket og samlet ett sted." },
    { title: "Personlig", body: "Anbefalinger tilpasset deg, så du ser det som er verdt tiden din." },
    { title: "I tide", body: "Påminnelser før fristen, så du aldri går glipp av en trekning." },
];

export function VinnShowcase() {
    return (
        <section className="section showcase" id="produkt">
            <div className="container showcase__grid">
                <div className="showcase__text">
                    <Reveal>
                        <span className="eyebrow">Vårt produkt</span>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="section__title">
                            Alle trekninger i Norge
                            <br />
                            <span className="text-accent">– i én app.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="section__lead">
                            Vinn er vår første app. Vi samler konkurranser og trekninger fra hele landet,
                            anbefaler det som passer deg, og minner deg på før fristen går ut.
                        </p>
                    </Reveal>

                    <Reveal delay={200}>
                        <ul className="feature-list">
                            {features.map((f) => (
                                <li key={f.title}>
                                    <span className="feature-list__dot" aria-hidden />
                                    <div>
                                        <strong>{f.title}.</strong> {f.body}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={260}>
                        <StoreBadges />
                    </Reveal>

                    <Reveal delay={320}>
                        <a className="text-link" href={VINN_URL} target="_blank" rel="noreferrer">
                            Utforsk vunnet.no
                            <ArrowIcon className="text-link__icon" />
                        </a>
                    </Reveal>
                </div>

                <Reveal className="showcase__visual" delay={120}>
                    <PhoneMockup />
                </Reveal>
            </div>
        </section>
    );
}
