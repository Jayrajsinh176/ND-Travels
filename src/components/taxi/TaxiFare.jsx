import React from "react";
import {
  FiUsers,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

function TaxiFare() {
  const cars = [
    {
      name: "Swift Dzire",
      subtitle: "Comfort Sedan",
      image: "/images/Swiftdizer.png",
      description: "4 Person",
      seats: "4+1",
      type: "Sedan",
      features: ["AC", "Comfortable", "Economical"],
    },
    {
      name: "Ertiga",
      subtitle: "Family Car",
      image: "/images/Ertiga.png",
      description: "6 to 7 Person",
      seats: "6+1",
      type: "MUV",
      features: ["AC", "Spacious", "Family Friendly"],
    },
    {
      name: "Innova",
      subtitle: "Premium Travel",
      image: "/images/Innova.png",
      description: "7 to 8 Person",
      seats: "7+1",
      type: "Premium",
      features: ["AC", "Luxury", "Long Distance"],
    },
    {
      name: "Tavera",
      subtitle: "Group Travel",
      image: "/images/Tavera.png",
      description: "7 Person",
      seats: "7",
      type: "MUV",
      features: ["AC", "Spacious", "Group Travel"],
    },
    {
      name: "Urbania",
      subtitle: "Premium Group Travel",
      image: "/images/Urbania.png",
      description: "12 to 17 Person",
      seats: "12-17",
      type: "Luxury",
      features: ["AC", "Premium", "Group Travel"],
    },
    {
      name: "Tempo Traveller",
      subtitle: "Large Group Travel",
      image: "/images/TempoTraveller.png",
      description: "12 to 17 Person",
      seats: "12-17",
      type: "Traveller",
      features: ["AC", "Spacious", "Group Travel"],
    },
  ];

  const handleBooking = (carName) => {
    // ND Tours and Travels WhatsApp number
    const whatsappNumber = "917069013142";

    const message = `Hello ND Tours and Travels,

I would like to enquire about booking the following vehicle through your website:

Vehicle: ${carName}

Kindly share the current fare, availability, and booking details for this vehicle.

Please let me know the next steps to proceed with the booking.

Thank you.
I look forward to hearing from you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="reveal reveal-up text-center">
          <h2 className="text-4xl font-normal tracking-[0.12em] text-[#0d2d55] md:text-5xl">
            OUR CARS
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-red-500"></div>
        </div>

        {/* Cars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <article
              key={index}
              className="reveal reveal-up group relative overflow-hidden rounded-[24px] bg-[#06264d]"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
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
                    onClick={() => handleBooking(car.name)}
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

      </div>
    </section>
  );
}

export default TaxiFare;