import { Link } from "react-router-dom";

function PopularDestinations() {
  const destinations = [
    {
      name: "Statue of Unity, Kevadia",
      slug: "statue-of-unity-kevadia",
      image:
        "/images/popstatue.png",
      description:
        "Explore the iconic Statue of Unity, beautiful gardens, Narmada River views, and the major attractions of Kevadia.",
      duration: "3 Days / 2 Nights",
    },

    {
      name: "Rann of Kutch",
      slug: "rann-of-kutch",
      image:
        "/images/popkutch.png",
      description:
        "Experience the magical white desert, colorful culture, traditional handicrafts, villages, and unforgettable sunsets.",
      duration: "4 Days / 3 Nights",
    },

    {
      name: "Somnath + Gir National Park",
      slug: "somnath-gir",
      image:
        "/images/popgir.png",
      description:
        "Enjoy a memorable combination of the sacred Somnath Temple and the wildlife-rich forests of Gir National Park.",
      duration: "3 Days / 2 Nights",
    },
  ];

  // =========================================================
  // WHATSAPP BOOKING
  // =========================================================
  const handleBooking = (destination) => {
    // Your WhatsApp number
    const whatsappNumber = "917069013142";

    const message = `Hello ND Tours and Travels,

I would like to enquire about booking the following destination through your website:

Destination: ${destination.name}

Duration: ${destination.duration}

Kindly share the current availability, package details, inclusions, itinerary, and booking information for this destination.

Please let me know the next steps to proceed with the booking.

Thank you.
I look forward to hearing from you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="destinations"
      className="bg-white px-4 pb-8 pt-2 sm:px-6 sm:pb-10 sm:pt-4 lg:px-8 lg:pb-12 lg:pt-6"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="relative w-full overflow-hidden rounded-[22px] bg-[#f7f7f7] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

          {/* Header */}
          <div className="reveal reveal-up mb-9 text-center sm:mb-11">
            <div className="mb-4 inline-flex rounded-full bg-slate-200/70 px-4 py-1.5">
              <span className="text-[11px] font-medium uppercase tracking-wide text-slate-700">
                Gujarat Tourism
              </span>
            </div>

            <h2 className="mx-auto max-w-md text-3xl font-medium leading-[1.08] tracking-tight text-[#06264d] sm:text-4xl">
              Discover the Best
              <br />
              Places Across Gujarat
            </h2>
          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <article
                key={destination.slug}
                className="reveal reveal-up group overflow-hidden rounded-xl border border-slate-200 bg-white p-2 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* =================================================
                    CLICKABLE DESTINATION AREA
                    Opens destination detail page
                ================================================== */}
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="block"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="aspect-[1.5/1] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-1 pb-1 pt-3">

                    {/* Destination Name */}
                    <h3 className="text-[13px] font-medium text-[#06264d] sm:text-[13px]">
                      {destination.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-slate-500 sm:text-[11px]">
                      {destination.description}
                    </p>

                    {/* Duration */}
                    <div className="mt-4">
                      <span className="text-[12px] font-medium text-[#06264d] sm:text-[12px]">
                        {destination.duration}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* =================================================
                    BOOK NOW + WHATSAPP
                    Separate from Link so it does NOT open detail page
                ================================================== */}
                <div className="px-1 pb-1 pt-3">
                  <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">

                    {/* Duration */}
                    <span className="text-[11px] text-slate-400 sm:text-[11px]">
                      Package Tour
                    </span>

                    {/* WhatsApp Book Now */}
                    <button
                      type="button"
                      onClick={() => handleBooking(destination)}
                      className="flex shrink-0 items-center gap-1 border-b border-[#06264d] pb-0.5 text-[11px] font-medium text-[#06264d] transition duration-200 hover:border-orange-500 hover:text-orange-500 sm:text-[11px]"
                    >
                      Book Now
                      <span className="text-[12px]">
                        →
                      </span>
                    </button>

                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Explore All Destinations */}
          <div className="mt-8 flex justify-center sm:mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full bg-[#06264d] px-7 py-3 text-[12px] font-medium text-white shadow-md transition duration-200 hover:bg-orange-500"
            >
              Explore All Destinations
              <span className="text-sm">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
