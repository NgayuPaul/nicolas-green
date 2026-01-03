const About = () => {
  return (
    <section className="bg-lightGreen py-20 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Sec Title */}
        <h2 className="mb-12 text-center text-3xl font-bold text-green-900">
          About Nicolas Green Limited
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Description */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Nicolas Green Limited</strong> is a diversified holding
              company focused on building sustainable, technology-driven
              solutions across multiple sectors. Our mission is to create
              long-term value by combining innovation, environmental
              responsibility, and operational excellence.
            </p>
            <p>
              Through our subsidiaries, we operate in technology, renewable
              energy, agriculture, logistics, and digital education systems —
              addressing real-world challenges with scalable and impactful
              solutions.
            </p>

            <p>
              We believe in a future where businesses grow responsibly, empower
              communities, and contribute positively to the environment.
            </p>
          </div>
          {/* RIGHT CORE VAL */}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-lightGreen p-6 border-2 border-green-300">
              <h3 className="mb-2 font-semibold text-green-800">Innovation</h3>
              <p className="text-gray-600">
                Leveraging modern technology to build efficient and scalable
                systems.
              </p>
            </div>
            <div className="rounded-xl bg-lightGreen p-6 border-2 border-green-300">
              <h3 className="mb-2 font-semibold text-green-800">
                Sustainability
              </h3>
              <p className="text-gray-600">
                {" "}
                Committed to environmentally responsible solutions across all
                sectors.
              </p>
            </div>
            <div className="rounded-xl bg-lightGreen p-6 border-2 border-green-300">
              <h3 className="mb-2 font-semibold text-green-800">Integrity</h3>
              <p className="text-gray-600">
                {" "}
                Operating with transparency, ethics, and accountability.
              </p>
            </div>
            <div className="rounded-xl bg-lightGreen p-6 border-2 border-green-300">
              <h3 className="mb-2 font-semibold text-green-800">Impact</h3>
              <p className="text-gray-600">
                Creating meaningful value for businesses, communities, and
                partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
