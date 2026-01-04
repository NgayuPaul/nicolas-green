// This represents the top section of the home page
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
export default function Hero() {
  return (
    <section className="bg-green-400 pt-16 px-4 md:p-14">
      <div className="max-w-7xl mx-auto  py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* LEFT TEXT CONTENT*/}
        <div className="px-2">
          <p className="text-primary font-normal md:font-semibold mb-4">
            Nicolas Green Limited
          </p>
          <h1 className="text-3xl md:text-5xl font-medium md:font-bold text-gray-900 leading-tight mb-6">
            Building Sustainable Solutions across Technology, Energy,
            Infrastructure, and Logistics
          </h1>
          <p className="text-gray-700 mb-8">
            Nicolas Green Limited is a diversified holding company committed to
            innovaton, Sustainability, and long-term impact accross multiple
            industries
          </p>
          {/* Call to Action */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("subsidiaries")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primaryDark transition "
            >
              Explore Our Companies
            </button>

            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition "
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* RIGTH VISUAL PLACE HOLDER */}
        <div className="w-full h-60 md:h-80 bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
          <span className="text-gray-400 w-full">
            <img
              src={hero}
              alt="home-hero-image"
              className="w-full h-60 md:h-80"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
