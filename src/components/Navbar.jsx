import { Link, useLocation } from "react-router-dom";
import ngreenlogo from "../assets/ngreenlogo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // If not on home page, disable scroll spy
    if (location.pathname !== "/") {
      setActive("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");

    const updateActiveFromScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    // If URL has a hash, use it immediately
    if (location.hash) {
      setActive(location.hash.replace("#", ""));
    }

    window.addEventListener("scroll", updateActiveFromScroll);
    updateActiveFromScroll();

    return () => window.removeEventListener("scroll", updateActiveFromScroll);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/*Logo */}
          <Link to="/#home" className="flex items-center gap-2">
            <img
              src={ngreenlogo}
              alt="Nicolas Green Limited logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden space-x-8 md:flex">
            <Link
              to="/#home"
              className={`relative transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-orange-700 after:transition-all
                ${
                  active === "home"
                    ? "text-green-700 font-semibold after:w-full"
                    : "text-gray-700 hover:text-green-700 after:w-0 hover:after:w-full"
                }
                `}
            >
              Home
            </Link>
            <Link
              to="/#subsidiaries"
              className={`relative transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-orange-700 after:transition-all
                ${
                  active === "subsidiaries"
                    ? "text-green-700 font-semibold after:w-full"
                    : "text-gray-700 hover:text-green-700 after:w-0 hover:after:w-full"
                }
                `}
            >
              Subsidiaries
            </Link>
            <Link
              to="/#about"
              className={`relative transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-orange-700 after:transition-all
                ${
                  active === "about"
                    ? "text-green-700 font-semibold after:w-full"
                    : "text-gray-700 hover:text-green-700 after:w-0 hover:after:w-full"
                }
                `}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`relative transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-orange-700 after:transition-all
                ${
                  location.pathname === "/contact"
                    ? "text-green-700 font-semibold after:w-full"
                    : "text-gray-700 hover:text-green-700 after:w-0 hover:after:w-full"
                }
              `}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-green-800"></span>
              <span className="block h-0.5 w-6 bg-green-800"></span>
              <span className="block h-0.5 w-6 bg-green-800"></span>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}

      {isOpen && (
        <div className="bg-white md:hidden">
          <nav className="space-y-4 px-4 py-6">
            <a href="#home" className="block text-gray-700">
              Home
            </a>
            <a href="#subsidiaries" className="block text-gray-700">
              Subsidiaries
            </a>
            <a href="#about" className="block text-gray-700">
              About
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
