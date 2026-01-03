import ngreenlogo from "../assets/ngreenlogo.png";
const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 ">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <img
                src={ngreenlogo}
                alt="Nicolas Green Limited logo"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-sm leading-relaxed">
              A diversified holding company focused on sustainable,
              technology-driven solutions across multiple sectors.
            </p>
          </div>

          {/* Subsidiaries */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Subsidiaries
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://tarklish.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300"
                >
                  Tarklish
                </a>
              </li>
              <li>MoveIt</li>
              <li>Xenon</li>
            </ul>
          </div>

          {/* Contact / Placeholder */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Get in Touch
            </h3>
            <p className="text-sm">
              For partnerships, inquiries, or collaborations, please reach out
              through the following channels: +2348038921330
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-green-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Nicolas Green Limited. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
