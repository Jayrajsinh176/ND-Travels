import {
  FiMapPin,
  FiBriefcase,
  FiCreditCard,
  FiGlobe,
} from "react-icons/fi";

function QuickSteps() {
  const steps = [
    {
      number: "01",
      title: "Find Your Destination",
      description:
        "Start your journey by exploring destinations that match your dreams, style, and travel goals.",
      icon: FiMapPin,
    },
    {
      number: "02",
      title: "Book Your Trip",
      description:
        "Choose the best flights, hotels, and packages with ease through our seamless booking experience.",
      icon: FiBriefcase,
    },
    {
      number: "03",
      title: "Secure Your Booking",
      description:
        "Make fast and secure payments with flexible options designed for your convenience and peace of mind.",
      icon: FiCreditCard,
    },
    {
      number: "04",
      title: "Enjoy Your Journey",
      description:
        "Relax and explore while ND Tours and Travels handles every detail, ensuring a smooth and unforgettable journey.",
      icon: FiGlobe,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-10"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="reveal reveal-left">

            {/* Badge */}
            <div className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-1.5">
              <span className="text-[11px] font-medium uppercase tracking-wide text-slate-700">
                How It Works
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-[#06264d] sm:text-5xl">
              Quick Steps to Your Trip
            </h2>

            {/* Steps */}
            <div className="mt-8 space-y-2.5">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`reveal reveal-up group flex gap-4 rounded-2xl p-4 transition duration-300 ${
                      index === 0
                        ? "border border-slate-200 bg-[#f7f7f7]"
                        : "border border-transparent hover:border-slate-200 hover:bg-[#f7f7f7]"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >

                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#06264d] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">

                      <h3 className="text-base font-medium text-[#06264d] sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 max-w-md text-xs leading-5 text-slate-500 sm:text-[13px]">
                        {step.description}
                      </p>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="reveal reveal-right">

            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl">

              <img
                src="/images/quick.webp"
                alt="Traveler exploring a destination"
                className="aspect-[4/4.2] w-full object-cover"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default QuickSteps;
