import { useRef } from "react";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function Testimonials() {
  const testimonialRef = useRef(null);

  const testimonials = [
    {
      rating: "4.0",
      name: "Amit Mehta",
      role: "Corporate Travel Consultant",
      text:
        "ND Tours and Travels handles all our company's business trips between Ahmedabad and Vadodara. Cars are always on time, drivers are professional, and billing is transparent every single time.",
    },
    {
      rating: "5.0",
      name: "Neha Sharma",
      role: "Luxury Vacation Traveler",
      text:
        "Our Udaipur trip with ND Tours and Travels was beautifully planned. From the City Palace visit to the Lake Pichola boat ride to Jag Mandir, every detail was taken care of.",
    },
    {
      rating: "3.0",
      name: "Kavita Desai",
      role: "Marketing Manager",
      text:
        "Booked the Rann of Kutch package with the team. The White Rann and Rann Utsav arrangements were great, though I wish the hotel check-in had been a bit faster.",
    },
    {
      rating: "5.0",
      name: "Vikram Joshi",
      role: "Business Traveler",
      text:
        "Everything was perfectly organized from the beginning. ND Tours and Travels made our entire journey comfortable, simple, and completely stress-free.",
    },
    {
      rating: "4.0",
      name: "Pooja Trivedi",
      role: "Family Traveler",
      text:
        "We took the kids to Saputara for a short family break and ND Tours and Travels planned it perfectly. The lake, the ropeway, and the gardens kept everyone happy.",
    },
    {
      rating: "5.0",
      name: "Rohan Chauhan",
      role: "Adventure Traveler",
      text:
        "The Somnath and Gir package was fantastic. The jeep safari inside Gir National Park was the highlight of the trip, and the whole schedule was handled smoothly.",
    },
    {
      rating: "5.0",
      name: "Rajesh Patel",
      role: "Outstation Taxi Customer",
      text:
        "Took an outstation cab from Vadodara to the Statue of Unity through ND Tours and Travels. The car was clean, the driver knew the route well, and the fare matched exactly what was quoted.",
    },
    {
      rating: "4.0",
      name: "Priya Shah",
      role: "Airport Transfer Customer",
      text:
        "Used their airport transfer service from Rajpipla to Ahmedabad Airport for an early morning flight. The driver arrived well before time and the ride was comfortable throughout.",
    },
  ];

  // ================= SCROLL LEFT =================
  const scrollLeft = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  // ================= SCROLL RIGHT =================
  const scrollRight = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
     className="bg-white px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8 lg:px-8 lg:pb-12 lg:pt-10"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= MAIN CONTAINER ================= */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#f7f7f7] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12">

          {/* ================= HEADER ================= */}
          <div className="relative grid gap-6 lg:grid-cols-2 lg:items-start">

            {/* Left Heading */}
            <div className="reveal reveal-left">

              <div className="mb-3 inline-flex rounded-full bg-slate-200/70 px-4 py-1.5">
                <span className="text-[11px] font-medium uppercase tracking-wide text-slate-700">
                  Happy Client Stories
                </span>
              </div>

              <h2 className="max-w-lg text-3xl font-medium leading-[1.08] tracking-tight text-[#06264d] sm:text-4xl">
                Why Thousands of
                <br />
                Travelers Choose ND Tours and Travels
              </h2>

            </div>

            {/* Right Description */}
            <div className="reveal reveal-right flex items-end lg:justify-end">

              <p className="max-w-sm text-xs leading-5 text-slate-500 lg:mt-12">
                From personalized travel planning to seamless bookings,
                we make every journey smooth, memorable, and
                truly unforgettable.
              </p>

            </div>

          </div>

          {/* ================= TESTIMONIAL SCROLL ================= */}
          <div
            ref={testimonialRef}
            className="mt-10 flex gap-3 overflow-x-auto scroll-smooth sm:overflow-x-hidden pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >

            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="reveal reveal-up w-[280px] shrink-0 snap-start rounded-xl bg-white p-4 shadow-sm transition duration-300 sm:w-[calc((100%-24px)/3)] sm:p-5"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >

                {/* ================= RATING ================= */}
                <div className="flex items-center gap-1">

                  <span className="text-xs font-medium text-[#06264d]">
                    ({testimonial.rating})
                  </span>

                  <div className="flex items-center gap-0.5">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        className={`h-3.5 w-3.5 ${
                          star <= Number(testimonial.rating)
                            ? "fill-orange-500 text-orange-500"
                            : "text-slate-300"
                        }`}
                      />
                    ))}

                  </div>

                </div>

                {/* ================= REVIEW ================= */}
                <p className="mt-4 min-h-[90px] text-[12px] leading-5 text-slate-600 sm:text-[12px]">
                  "{testimonial.text}"
                </p>

                {/* ================= USER ================= */}
                <div className="mt-5 flex items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[11px] font-semibold uppercase text-white">
                    {testimonial.name
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <div className="min-w-0">

                    <h3 className="truncate text-[12px] font-medium text-[#06264d] sm:text-[12px]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-0.5 truncate text-[11px] text-slate-400 sm:text-[11px]">
                      {testimonial.role}
                    </p>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* ================= SCROLL BUTTONS ================= */}
          <div className="mt-7 flex items-center justify-center gap-3">

            {/* Previous */}
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm transition duration-200 hover:bg-[#06264d] active:scale-95"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm transition duration-200 hover:bg-[#06264d] active:scale-95"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
