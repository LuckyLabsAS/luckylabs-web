import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VinnShowcase } from "./components/VinnShowcase";
import { Company } from "./components/Company";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Privacy } from "./components/Privacy";

const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

function App() {
    const isPrivacyView = normalizePath(window.location.pathname) === "/privacy";

    useEffect(() => {
        document.documentElement.classList.toggle("privacy-view", isPrivacyView);
        return () => document.documentElement.classList.remove("privacy-view");
    }, [isPrivacyView]);

    if (isPrivacyView) {
        return <Privacy />;
    }

    return (
        <>
            <Header />
            <main>
                <Hero />
                <VinnShowcase />
                <Company />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
