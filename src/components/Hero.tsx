import { Reveal } from "./Reveal";
import { Wordmark } from "./Wordmark";
import { ArrowIcon, ChevronDown, SparkIcon } from "./icons";
import { VINN_URL } from "../lib/site";

export function Hero() {
    return (
        <section className="hero" id="topp">
            <div className="hero__aurora" aria-hidden>
                <span className="aurora aurora--1" />
                <span className="aurora aurora--2" />
                <span className="aurora aurora--3" />
            </div>
            <div className="hero__grid" aria-hidden />

            <div className="hero__content">
                <Reveal>
                    <span className="chip">
                        <SparkIcon className="chip__icon" />
                        Norsk produktstudio
                    </span>
                </Reveal>

                <Reveal delay={80}>
                    <h1 className="hero__title">
                        Vi bygger digitale produkter
                        <br />
                        folk <span className="hero__title-accent">faktisk bruker</span>.
                    </h1>
                </Reveal>

                <Reveal delay={160}>
                    <p className="hero__lead">
                        <Wordmark compact /> er et norsk produktselskap. Akkurat nå bygger vi{" "}
                        <strong>Vinn</strong> – alle trekninger og konkurranser i Norge, håndplukket og
                        samlet i én app.
                    </p>
                </Reveal>

                <Reveal delay={240}>
                    <div className="hero__actions">
                        <a className="btn btn--primary" href={VINN_URL} target="_blank" rel="noreferrer">
                            Se Vinn
                            <ArrowIcon className="btn__icon" />
                        </a>
                        <a className="btn btn--ghost" href="#kontakt">
                            Kontakt oss
                        </a>
                    </div>
                </Reveal>
            </div>

            <a className="hero__scroll" href="#produkt" aria-label="Bla videre">
                <ChevronDown />
            </a>
        </section>
    );
}
