import subsidiaries from "../data/subsidiaries";
import SubsidiaryCard from "./SubsidiaryCard";
const Subsidiaries = () => {
  return (
    <section className="bg-lightGreen py-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-900">
          Our Subsidiaries
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {subsidiaries.map((subsidiary, index) => (
            <SubsidiaryCard key={index} {...subsidiary} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
