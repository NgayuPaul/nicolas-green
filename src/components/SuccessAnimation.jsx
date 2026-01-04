import { FaCheckCircle } from "react-icons/fa";

export default function Test({ fadeOut }) {
  return (
    <div className={`success-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="success-box">
        <FaCheckCircle className="text-6xl text-green-500 animate-bounce mx-auto" />
        <h2 className="font-medium">Message sent successfully!</h2>
        <p>We’ll get back to you shortly.</p>
      </div>
    </div>
  );
}
