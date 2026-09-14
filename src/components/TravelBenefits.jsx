import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiHome,
  FiTruck,
} from "react-icons/fi";

function TravelBenefits() {
  const benefits = [
    {
      title: "Travel Planning & Packages",
      description:
        "Explore customized travel packages, sightseeing experiences, complete itineraries, and carefully planned journeys designed around your destination and preferences.",
      icon: FiMapPin,
    },
    {
      title: "Taxi & Cab Services",
      description:
        "Reliable transportation for airport transfers, local sightseeing, outstation trips, corporate travel, and comfortable point-to-point journeys.",
      icon: FiTruck,
    },
    {
      title: "24/7 Travel Support",
      description:
        "Our dedicated support team is available whenever you need assistance, helping make your journey smooth, comfortable, and stress-free.",
      icon: FiClock,
    },
  ];

  return (
    <section
      id="benefits"
      className="bg-white px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-28 lg:pt-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="reveal reveal-up mb-10 text-center sm:mb-12">

          {/* Badge */}
          <div className="mb-3 inline-flex rounded-full bg-slate-100 px-4 py-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-700">
              Why Choose ND Tours and Travels
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-lg text-3xl font-medium leading-[1.08] tracking-tight text-[#06264d] sm:text-4xl">
            Complete Travel Solutions
            <br />
            For Every Journey
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            From planning your trip to reaching your destination, ND Tours and
            Travels provides reliable travel services, comfortable
            transportation, and dedicated support for a smooth journey.
          </p>
        </div>

        {/* ================= BENEFITS GRID ================= */}
        <div className="grid gap-4 lg:grid-cols-2">

          {/* ================= LEFT LARGE IMAGE ================= */}
          <div className="reveal reveal-scale relative min-h-[420px] overflow-hidden rounded-2xl sm:min-h-[500px] lg:row-span-2">

            <img
              src="/images/eartiga_benefit.png"
              alt="Comfortable travel and transportation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            {/* Icon */}
            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#06264d] shadow-lg">
              <FiTruck className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-7 sm:left-6 sm:right-6">

              <h3 className="text-xl font-medium sm:text-2xl">
                Your Journey, Our Ride
              </h3>

              <p className="mt-2 max-w-md text-xs leading-5 text-white/80">
                From airport transfers to sightseeing and outstation
                journeys, enjoy comfortable and reliable transportation
                with ND Tours and Travels.
              </p>

            </div>
          </div>

          {/* ================= RIGHT CARD 1 ================= */}
          <div
            className="reveal reveal-up flex min-h-[180px] flex-col justify-between rounded-2xl border border-slate-200 bg-[#f7f7f7] p-5 sm:p-6"
            style={{ transitionDelay: "100ms" }}
          >

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#06264d] shadow-sm">
              <FiMapPin className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="mt-8">

              <h3 className="text-xl font-medium text-[#06264d] sm:text-2xl">
                {benefits[0].title}
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
                {benefits[0].description}
              </p>

            </div>
          </div>

          {/* ================= RIGHT CARD 2 ================= */}
          <div
            className="reveal reveal-up flex min-h-[180px] flex-col justify-between rounded-2xl border border-slate-200 bg-[#f7f7f7] p-5 sm:p-6"
            style={{ transitionDelay: "200ms" }}
          >

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#06264d] shadow-sm">
              <FiTruck className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="mt-8">

              <h3 className="text-xl font-medium text-[#06264d] sm:text-2xl">
                {benefits[1].title}
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
                {benefits[1].description}
              </p>

            </div>
          </div>

          {/* ================= BOTTOM LEFT CARD ================= */}
          <div
            className="reveal reveal-up flex min-h-[180px] flex-col justify-between rounded-2xl border border-slate-200 bg-[#f7f7f7] p-5 sm:p-6"
            style={{ transitionDelay: "300ms" }}
          >

            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#06264d] shadow-sm">
              <FiClock className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="mt-8">

              <h3 className="text-xl font-medium text-[#06264d] sm:text-2xl">
                {benefits[2].title}
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
                {benefits[2].description}
              </p>

            </div>
          </div>

          {/* ================= BOTTOM RIGHT IMAGE ================= */}
          <div
            className="reveal reveal-scale relative min-h-[180px] overflow-hidden rounded-2xl"
            style={{ transitionDelay: "150ms" }}
          >

            <img
              src="/images/stay_benefit.png"
              alt="Comfortable hotel accommodation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Icon */}
            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#06264d] shadow-lg">
              <FiHome className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="absolute bottom-5 left-5 right-5 text-white sm:left-6 sm:right-6">

              <h3 className="text-xl font-medium sm:text-2xl">
                Comfortable Accommodation
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/80">
                Find comfortable hotels, resorts, and stays selected
                for quality, convenience, and a pleasant travel
                experience.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TravelBenefits;
