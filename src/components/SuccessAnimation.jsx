import { FaCheckCircle } from "react-icons/fa";

export default function SuccessAnimation() {
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
        <FaCheckCircle className="text-2xl" />
        <span className="font-medium">Message sent successfully!</span>
      </div>
    </div>
  );
}
