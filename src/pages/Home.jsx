import useReveal from "../components/hooks/useReveal";

import Hero from "../components/Hero";
import Subsidiaries from "../components/Subsidiaries";
import About from "../components/About";

export default function Home() {
  useReveal();
  return (
    <>
      <section id="home" className="fade-section">
        <Hero />
      </section>
      <section id="subsidiaries" className="fade-section">
        <Subsidiaries />
      </section>
      <section id="about" className="fade-section">
        <About />
      </section>
    </>
  );
}
