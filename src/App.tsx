function App() {
    const year = new Date().getFullYear();

    return (
        <main className="page">
            <section className="panel hero">
                <div className="content">
                    <img className="hero-logo" src="/luckylabs-logo-oneline.svg" alt="Lucky Labs" />
                </div>
            </section>

            <section className="panel teaser">
                <div className="content">
                    <h2>Vinn</h2>
                    <p>Kommer snart på App Store og Google Play.</p>
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
                    <small>© {year} Lucky Labs. Alle rettigheter forbeholdt.</small>
                </footer>
            </section>
        </main>
    );
}

export default App;
