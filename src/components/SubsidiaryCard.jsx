import { useEffect, useRef, useState } from "react";

const SubsidiaryCard = ({ name, description, url }) => {
  const cardRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      // Only apply on mobile
      if (window.innerWidth >= 768) return;

      const rect = cardRef.current.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;

      const distance = Math.abs(screenCenter - cardCenter);

      // Threshold for scaling
      setIsCentered(distance < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      ref={cardRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer transform rounded-2xl bg-white p-6 shadow-md transition-all duration-300
        border-t-4 border-orange-200 hover:border-orange-300
        ${isCentered ? "scale-110" : "scale-100"}
        md:scale-100
        hover:-translate-y-2 hover:shadow-xl
      `}
    >
      <h3 className="mb-3 text-xl font-semibold text-green-800">{name}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      {/* CTA Button */}
      <div className="mt-4 flex justify-center md:justify-center">
        <span className="inline-block rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800">
          Visit {name}
        </span>
      </div>
    </a>
  );
};

export default SubsidiaryCard;
