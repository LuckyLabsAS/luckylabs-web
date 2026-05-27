import { VinnMark } from "./icons";

type Draw = {
    tag: string;
    title: string;
    prize: string;
    deadline: string;
    tone: "a" | "b" | "c";
};

const draws: Draw[] = [
    { tag: "Reise", title: "Weekendtur til Lofoten", prize: "Verdi 18 000 kr", deadline: "Avsluttes om 3 dager", tone: "a" },
    { tag: "Elektronikk", title: "Komplett hjemmekontor", prize: "Verdi 24 000 kr", deadline: "Avsluttes om 6 dager", tone: "b" },
    { tag: "Opplevelse", title: "Middag for to på Maaemo", prize: "Verdi 5 000 kr", deadline: "Ny i dag", tone: "c" },
];

/** Pure-CSS iPhone frame showing a stylised Vinn feed. No real screenshots needed. */
export function PhoneMockup() {
    return (
        <div className="phone" aria-hidden>
            <div className="phone__glow" />
            <div className="phone__frame">
                <div className="phone__notch" />
                <div className="phone__screen">
                    <div className="appbar">
                        <span className="appbar__brand">
                            <VinnMark className="appbar__mark" />
                            Vinn
                        </span>
                        <span className="appbar__avatar" />
                    </div>

                    <div className="appfilters">
                        <span className="pill pill--active">For deg</span>
                        <span className="pill">Reise</span>
                        <span className="pill">Tech</span>
                        <span className="pill">Mat</span>
                    </div>

                    <div className="appfeed">
                        {draws.map((d) => (
                            <article key={d.title} className={`drawcard drawcard--${d.tone}`}>
                                <div className="drawcard__media">
                                    <span className="drawcard__tag">{d.tag}</span>
                                </div>
                                <div className="drawcard__body">
                                    <h4>{d.title}</h4>
                                    <div className="drawcard__meta">
                                        <span className="drawcard__prize">{d.prize}</span>
                                        <span className="drawcard__deadline">{d.deadline}</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="apptabs">
                        <span className="apptab apptab--active" />
                        <span className="apptab" />
                        <span className="apptab" />
                        <span className="apptab" />
                    </div>
                </div>
            </div>
        </div>
    );
}
