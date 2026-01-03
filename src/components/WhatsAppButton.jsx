import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348038921330?text=Hello%20Nicolas%20Green%20Limited"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 text-white
        p-4 rounded-full shadow-lg
        hover:bg-green-600 transition
        animate-pulse
      "
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
