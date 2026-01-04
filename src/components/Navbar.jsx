import { useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ngreenlogo from "../assets/ngreenlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(
    () => ["home", "subsidiaries", "about", "contact"],
    []
  );

  //  Scroll to section AND close menu
  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // closes menu after click
  };
  //Detect Active Section
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  //Prevention of Bacground Scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={ngreenlogo}
            alt="Nicolas Green Limited logo"
            className="h-16 w-auto"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`relative capitalize transition-colors duration-300 ${
                activeSection === item
                  ? "text-green-600 font-semibold after:scale-x-100"
                  : "hover:text-green-600 hover:font-semibold after:scale-x-0 hover:after:scale-x-100"
              } after:content-['']
               after:absolute
               after:left-0
               after:-bottom-1
               after:h-[2px]
               after:w-full
               after:bg-green-600
               after:origin-left
               after:transition-transform
               after:duration-300
               `}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-start gap-6 p-6">
            {sections.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`relative text-lg capitalize transition-colors dration-300 ${
                    activeSection === item
                      ? "text-green-600 font-semibold after:scale-x-100"
                      : "hover:text-green-600 hover:font-semibold after:scale-x-0 hover:after:scale-x-100"
                  } after:content-['']
               after:absolute
               after:left-0
               after:-bottom-1
               after:h-[2px]
               after:w-full
               after:bg-green-600
               after:origin-left
               after:transition-transform
               after:duration-300`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
