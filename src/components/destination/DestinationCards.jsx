
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function DestinationCards() {
  const destinations = [
    {
      name: "Statue of Unity, Kevadia",
      slug: "statue-of-unity-kevadia",
      image:
        "/images/Destination/statue.webp",
      description:
        "Explore the world's tallest statue, beautiful river views, Valley of Flowers, and nearby attractions in Kevadia.",
      duration: "3 Days / 2 Nights",
    },

    {
      name: "Rann of Kutch",
      slug: "rann-of-kutch",
      image:
        "/images/Destination/kutch.webp",
      description:
        "Experience the magical white salt desert, colorful culture, stunning sunsets, and traditional Gujarati hospitality.",
      duration: "4 Days / 3 Nights",
    },

    {
      name: "Somnath + Gir National Park",
      slug: "somnath-gir",
      image:
        "/images/Destination/gir.webp",
      description:
        "Experience the spiritual beauty of Somnath Temple along with an exciting wildlife adventure in Gir National Park.",
      duration: "3 Days / 2 Nights",
    },

    {
      name: "Dwarkadhish Temple",
      slug: "dwarkadhish-temple",
      image:
        "/images/Destination/dwarka.webp",
      description:
        "Discover the sacred city of Dwarka, visit the famous Dwarkadhish Temple, and experience its spiritual heritage.",
      duration: "2 Days / 1 Night",
    },

    {
      name: "Saputara Hill Station",
      slug: "saputara-hill-station",
      image:
        "/images/Destination/saputara.webp",
      description:
        "Relax among lush green hills, beautiful lakes, waterfalls, scenic viewpoints, and peaceful natural landscapes.",
      duration: "2 Days / 1 Night",
    },

    {
      name: "Udaipur",
      slug: "udaipur",
      image:
        "/images/Destination/udaipur.webp",
      description:
        "Discover the City of Lakes with magnificent palaces, beautiful lakes, historic landmarks, and royal Rajasthani culture.",
      duration: "3 Days / 2 Nights",
    },
    {
  name: "Diu",
  slug: "diu",
  image:
    "/images/Destination/diu.webp",
  description:
    "Enjoy beautiful beaches, historic forts, Portuguese heritage, coastal views, and relaxing seaside experiences in Diu.",
  duration: "2 Days / 1 Night",
},
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="reveal reveal-up mb-10 text-center">
          <h2 className="text-3xl font-normal tracking-tight text-[#0d2d55] md:text-4xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Discover beautiful destinations and memorable travel experiences
            with ND Tours and Travels.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Link
              key={destination.slug}
              to={`/destinations/${destination.slug}`}
              className="reveal reveal-up group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="p-2">
                <div className="h-48 overflow-hidden rounded-lg sm:h-52">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-3 pb-3">

                {/* Name */}
                <h3 className="text-sm font-semibold text-[#0d2d55]">
                  {destination.name}
                </h3>

                {/* Description */}
                <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-gray-500">
                  {destination.description}
                </p>

                {/* Bottom */}
                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2">
                  <span className="text-[12px] font-medium text-gray-500">
                    {destination.duration}
                  </span>

                  <span className="flex items-center gap-1 text-[12px] font-medium text-[#0d2d55] transition group-hover:text-orange-500">
                    Book Now
                    <FiArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DestinationCards;
