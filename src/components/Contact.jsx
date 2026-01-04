import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  // Controls visibility of the success modal

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* ========== CONTACT FORM ========== */}
          <div>
            <form
              action="https://formsubmit.co/info@nicolasgreen.ng"
              method="post"
              className="bg-green-600 py-8 px-6 sm:px-10 rounded-xl shadow w-full"
            >
              <p className="text-center text-xl text-white">Leave a message</p>

              <h2 className="text-center text-2xl font-semibold text-white mt-2 mb-6">
                We would love to hear from you
              </h2>

              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="hidden"
                name="_next"
                value="https://nicolasgreen.ng/#success"
              />

              {/* INPUTS */}
              {[
                { label: "Full Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Subject", name: "subject", type: "text" },
              ].map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block text-sm mb-1 text-white">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              ))}

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block text-sm mb-1 text-white">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-green-400 text-white py-3 rounded-lg font-medium hover:bg-green-300 hover:text-gray-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ========== CONTACT INFO ========== */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl text-center pb-3 font-bold">
              Contact Nicolas Green Limited
            </h2>

            <div className="flex flex-col px-6 py-4 rounded-xl border-2 border-green-200">
              <div className="py-2 flex gap-3">
                <FaEnvelope className="text-orange-600 text-xl" />
                <span>info@nicolasgreen.ng</span>
              </div>

              <div className="py-2 flex gap-3">
                <FaPhoneAlt className="text-orange-600 text-xl" />
                <span>+234803892330</span>
              </div>

              <div className="py-2 flex gap-3">
                <FaMapMarkerAlt className="text-orange-600 text-xl" />
                <span>72, Ibadan St, Lagos, Nigeria</span>
              </div>
            </div>
            {/* ======= LOCATION MAP ======= */}
            <div className="mt-10 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                Our Location
              </h3>

              {/* Responsive map container */}
              <div className="w-full h-64 rounded-xl border-2 overflow-hidden shadow">
                <iframe
                  title="Nicolas Green Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2696961808397!2d3.384999409798252!3d6.487492223555245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d3a4558e1fb%3A0xd1c36d110bbd535d!2s72%20Ibadan%20St%2C%20Adekunle%2C%20Lagos!5e0!3m2!1sen!2sng!4v1767268120666!5m2!1sen!2sng"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Get directions button */}
              <a
                href="https://www.google.com/maps?q=72+Ibadan+Street,+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 px-6 py-3
      bg-green-600 text-white rounded-lg font-medium
      hover:bg-orange-500 transition"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
