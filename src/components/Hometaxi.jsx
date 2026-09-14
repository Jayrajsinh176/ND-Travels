import {
  FiUsers,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function HomeTaxi() {
  const cars = [
    {
      name: "Dzire",
      subtitle: "Comfort Sedan",
      image: "/images/Swiftdizer.png",
      seats: "4+1",
      type: "Sedan",
      features: ["AC", "Comfortable", "Economical"],
    },
    {
      name: "Ertiga",
      subtitle: "Family Car",
      image: "/images/Ertiga.png",
      seats: "6+1",
      type: "MUV",
      features: ["AC", "Spacious", "Family Friendly"],
    },
    {
      name: "Innova Crysta",
      subtitle: "Premium Travel",
      image: "/images/Innova.png",
      seats: "7+1",
      type: "Premium",
      features: ["AC", "Luxury", "Long Distance"],
    },
  ];

  // =========================================================
  // WHATSAPP BOOKING
  // =========================================================
  const handleBooking = (car) => {
    const whatsappNumber = "917069013142";

    const message = `Hello ND Tours and Travels,

I would like to enquire about booking a taxi through your website.

Vehicle: ${car.name} (${car.subtitle})
Category: ${car.type}
Seating Capacity: ${car.seats} Seater

Could you please share the current fare, vehicle availability, pickup and drop details, and the complete booking process?

Kindly also let me know about any packages for outstation or full-day trips.

Thank you.
I look forward to your response.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="taxi-services"
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =================================================
            SECTION HEADER
        ================================================== */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">

          <div className="reveal reveal-left">
            {/* Small Label */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-500">
                Our Taxi Fleet
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-medium leading-[1.08] tracking-tight text-[#06264d] sm:text-4xl lg:text-5xl">
              Choose Your Ride.
              <br />
              <span className="text-slate-400">
                Travel With Comfort.
              </span>
            </h2>
          </div>

          {/* CTA */}
          <div className="reveal reveal-right lg:pb-1">
            <Link
              to="/taxi-services"
              className="inline-flex items-center gap-2 rounded-full bg-[#06264d] px-6 py-3 text-sm font-medium text-white transition duration-200 hover:bg-orange-500"
            >
              View All Taxi Services
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* =================================================
            FLEET SHOWCASE
        ================================================== */}
        <div className="grid gap-5 lg:grid-cols-3">

          {cars.map((car, index) => (
            <article
              key={car.name}
              className="reveal reveal-up group relative overflow-hidden rounded-[24px] bg-[#06264d]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >

              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden bg-slate-100">

                <img
                  src={car.image}
                  alt={`${car.name} taxi`}
                  className="aspect-[1.45/1] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06264d]/70 to-transparent" />


                {/* Car Type */}
                <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  {car.type}
                </div>
              </div>

              {/* ================= INFORMATION ================= */}
              <div className="p-5 sm:p-6">

                {/* Car Name */}
                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {car.name}
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      {car.subtitle}
                    </p>
                  </div>

                  {/* Seats */}
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] text-white/80">
                    <FiUsers className="h-3.5 w-3.5" />
                    {car.seats} Seats
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Booking */}
                <div className="flex items-center justify-between gap-3">

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40">
                      Available For
                    </p>

                    <p className="mt-1 text-xs font-medium text-white/80">
                      Local & Outstation
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBooking(car)}
                    className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-[11px] font-medium text-white transition duration-300 hover:bg-orange-600"
                  >
                    <FiMessageCircle className="h-3.5 w-3.5" />
                    Book Now
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =================================================
            BOTTOM SERVICE STRIP
        ================================================== */}
        <div className="reveal reveal-up mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row">

          <div>
            <p className="text-sm font-medium text-[#06264d]">
              Need a taxi for your next journey?
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Airport • Local • Outstation • One Way • Round Trip
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              handleBooking({
                name: "Any Available Car",
                type: "Taxi Service",
                seats: "As Required",
              })
            }
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#06264d] px-6 py-3 text-[11px] font-medium text-white transition duration-300 hover:bg-orange-500"
          >
            Get Taxi Quote
            <FiArrowRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  );
}

export default HomeTaxi;
