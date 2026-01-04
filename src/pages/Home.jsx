import { useEffect, useState } from "react";
import useReveal from "../components/hooks/useReveal";

import Hero from "../components/Hero";
import Subsidiaries from "../components/Subsidiaries";
import About from "../components/About";
import SuccessAnimation from "../components/SuccessAnimation";
import Contact from "../components/Contact";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (window.location.hash.includes("success")) {
      setShowSuccess(true);
      setFadeOut(false);

      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 3400);

      const hideTimer = setTimeout(() => {
        setShowSuccess(false);

        // Clean URL without reload
        window.history.replaceState(null, "", window.location.pathname);
      }, 5000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  useReveal();

  return (
    <>
      {/* Success overlay ABOVE hero */}
      {showSuccess && <SuccessAnimation fadeOut={fadeOut} />}

      <section id="home" className="fade-section">
        <Hero />
      </section>

      <section id="subsidiaries" className="fade-section">
        <Subsidiaries />
      </section>

      <section id="about" className="fade-section">
        <About />
      </section>
      <section id="contact" className="fade-section">
        <Contact />
      </section>
    </>
  );
}
