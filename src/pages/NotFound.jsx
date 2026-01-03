import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primaryDark transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
