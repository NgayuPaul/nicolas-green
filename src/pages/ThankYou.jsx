import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        {/* Animated check icon */}
        <FaCheckCircle className="mx-auto text-green-500 text-6xl animate-bounce" />
        <h1 className="text-2xl font-bold mt-6">Message Sent Successfully!</h1>
        <p className="text-gray-600 mt-3">
          Thank you for contacting Nicolas Green Limited. We’ll get back to you
          shortly.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
