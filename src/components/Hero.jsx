import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ===============================
// DESTINATION SLIDER DATA
// ===============================
const destinations = [
  {
    name: "Statue of Unity, Kevadia",
    slug: "statue-of-unity-kevadia",
    description:
      "Explore the iconic Statue of Unity, beautiful gardens, Narmada River views, and the major attractions of Kevadia.",
    image: "/images/slider/Statue_destination.png",
    duration: "3 Days / 2 Nights",
  },

  {
    name: "Rann of Kutch",
    slug: "rann-of-kutch",
    description:
      "Experience the magical white desert, colorful culture, traditional handicrafts, villages, and unforgettable sunsets.",
    image: "/images/slider/kutch_destination.png",
    duration: "4 Days / 3 Nights",
  },

  {
    name: "Somnath + Gir National Park",
    slug: "somnath-gir",
    description:
      "Enjoy a memorable combination of the sacred Somnath Temple and the wildlife-rich forests of Gir National Park.",
    image: "/images/slider/somnath_destination.png",
    duration: "3 Days / 2 Nights",
  },

  {
    name: "Udaipur",
    slug: "udaipur",
    description:
      "Discover magnificent palaces, beautiful lakes, historic landmarks, and the royal heritage of Udaipur.",
    image: "/images/slider/udaipur_destination.webp",
    duration: "3 Days / 2 Nights",
  },

  {
    name: "Diu",
    slug: "diu",
    description:
      "Enjoy beautiful beaches, historic forts, Portuguese heritage, and peaceful Arabian Sea views.",
    image: "/images/slider/diu_destination.png",
    duration: "2 Days / 1 Night",
  },
];

// ===============================
// HERO SLIDER IMAGES
// ===============================
const heroImages = [
  "/images/hero/statue.webp",
  "/images/hero/kutch.webp",
  "/images/hero/waterfall.webp",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // ===============================
  // AUTO HERO SLIDE
  // Changes image every 3 seconds
  // ===============================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-cover bg-center sm:min-h-[700px] lg:min-h-[760px]"
    >
      {/* ===============================
          MOBILE HERO IMAGE
      =============================== */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{
          backgroundImage: "url('/images/statuehero.webp')",
        }}
      />

      {/* ===============================
          HERO BACKGROUND SLIDES
      =============================== */}
      <div className="hidden sm:block">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage
                ? "opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        ))}
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Slight gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      {/* ===============================
          HERO CONTENT
      =============================== */}
      <div className="relative z-10 flex min-h-[600px] items-center justify-center px-5 pb-32 pt-28 sm:pb-36 lg:min-h-[650px]">
        <div className="w-full max-w-4xl text-center text-white">

          {/* Small heading */}
          <p className="hero-animate mb-4 text-[12px] font-medium uppercase tracking-[0.12em] sm:text-xs">
            Gujarat Adventures
          </p>

          {/* Main heading */}
          <h1
            className="hero-animate mx-auto max-w-4xl text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[76px]"
            style={{ animationDelay: "150ms" }}
          >
            Explore with
            <br />
            ND Tours and Travels
          </h1>

          {/* Buttons */}
          <div
            className="hero-animate mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >

            {/* Book Now */}
            <Link
              to="/contact"
              className="w-full rounded-full bg-orange-500 px-7 py-3 text-xs font-semibold text-white shadow-lg transition duration-200 hover:bg-orange-600 sm:w-auto"
            >
              Book Now
            </Link>

            {/* Explore Destinations */}
            <Link
              to="/destinations"
              className="w-full rounded-full bg-white px-7 py-3 text-xs font-semibold text-orange-500 shadow-lg transition duration-200 hover:bg-orange-50 sm:w-auto"
            >
              Explore Destinations
            </Link>

          </div>
        </div>
      </div>

      {/* ===============================
          DESTINATION CARDS
      =============================== */}
      <div className="absolute bottom-14 left-0 z-20 w-full overflow-hidden sm:bottom-16 lg:bottom-[72px]">

        <div className="destination-marquee flex w-max">

          {/* ===============================
              FIRST SET
          =============================== */}
          <div className="flex gap-3 px-2">

            {destinations.map((destination) => (

              <Link
                key={`first-${destination.slug}`}
                to={`/destinations/${destination.slug}`}
                className="flex h-[112px] w-[300px] shrink-0 rounded-xl border-4 border-white bg-white p-0.5 shadow-xl transition duration-300 hover:-translate-y-1 sm:w-[330px]"
              >

                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-[88px] shrink-0 rounded-lg object-cover sm:w-[105px]"
                />

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-center px-3">

                  <h2 className="truncate text-sm font-medium text-slate-800">
                    {destination.name}
                  </h2>

                  <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-500 sm:text-[12px]">
                    {destination.description}
                  </p>

                  {/* Duration */}
                  <div className="mt-2 flex items-center gap-1 text-[11px]">
                    <span className="text-orange-500">
                      ●
                    </span>

                    <span className="text-slate-700">
                      {destination.duration}
                    </span>
                  </div>

                </div>

              </Link>

            ))}

          </div>

          {/* ===============================
              DUPLICATE SET FOR SEAMLESS LOOP
          =============================== */}
          <div className="flex gap-3 px-2">

            {destinations.map((destination) => (

              <Link
                key={`second-${destination.slug}`}
                to={`/destinations/${destination.slug}`}
                className="flex h-[112px] w-[300px] shrink-0 rounded-xl border-4 border-white bg-white p-0.5 shadow-xl transition duration-300 hover:-translate-y-1 sm:w-[330px]"
              >

                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-[88px] shrink-0 rounded-lg object-cover sm:w-[105px]"
                />

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-center px-3">

                  <h2 className="truncate text-sm font-medium text-slate-800">
                    {destination.name}
                  </h2>

                  <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-500 sm:text-[12px]">
                    {destination.description}
                  </p>

                  {/* Duration */}
                  <div className="mt-2 flex items-center gap-1 text-[11px]">
                    <span className="text-orange-500">
                      ●
                    </span>

                    <span className="text-slate-700">
                      {destination.duration}
                    </span>
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </div>

      {/* ===============================
          SLIDER DOTS
      =============================== */}
      <div className="absolute bottom-4 left-0 z-30 hidden w-full justify-center gap-2 sm:flex">

        {heroImages.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "w-6 bg-white"
                : "w-2 bg-white/50"
            }`}
          />

        ))}

      </div>

    </section>
  );
}

export default Hero;