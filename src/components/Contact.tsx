import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";
import { CONTACT_EMAIL, ORG_NR, PRIVACY_HREF } from "../lib/site";

export function Contact() {
    return (
        <section className="section contact" id="kontakt">
            <div className="container">
                <Reveal as="article" className="contact__panel">
                    <span className="aurora aurora--contact" aria-hidden />
                    <div className="contact__inner">
                        <span className="eyebrow">Kontakt</span>
                        <h2 className="section__title">La oss ta en prat</h2>
                        <p className="section__lead section__lead--center">
                            Har du en idé, et samarbeid eller bare et spørsmål? Vi svarer gjerne.
                        </p>
                        <a className="btn btn--primary btn--lg" href={`mailto:${CONTACT_EMAIL}`}>
                            {CONTACT_EMAIL}
                            <ArrowIcon className="btn__icon" />
                        </a>
                        <p className="contact__meta">
                            Lucky Labs AS · Org.nr {ORG_NR} ·{" "}
                            <a href={PRIVACY_HREF}>Personvern</a>
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
