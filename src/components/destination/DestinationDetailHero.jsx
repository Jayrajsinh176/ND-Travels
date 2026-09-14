import { FiCalendar, FiClock } from "react-icons/fi";
import { useParams } from "react-router-dom";

function DestinationDetailHero() {
  const { slug } = useParams();

  const destinations = {
    // =====================================================
    // STATUE OF UNITY
    // =====================================================
    "statue-of-unity-kevadia": {
      name: "Statue of Unity, Kevadia",
      duration: "3 Days / 2 Nights",
      bestTime: "October to March",
      description:
        "Discover the iconic Statue of Unity and explore the beautiful attractions of Kevadia, including gardens, the Narmada River, scenic viewpoints, and family-friendly experiences.",
    },

    // =====================================================
    // RANN OF KUTCH
    // =====================================================
    "rann-of-kutch": {
      name: "Rann of Kutch",
      duration: "4 Days / 3 Nights",
      bestTime: "November to February",
      description:
        "Experience the magical white desert of Kutch, vibrant Gujarati culture, traditional handicrafts, colorful villages, spectacular sunsets, and the unique beauty of the Great Rann.",
    },

    // =====================================================
    // SOMNATH + GIR
    // =====================================================
    "somnath-gir": {
      name: "Somnath + Gir National Park",
      duration: "3 Days / 2 Nights",
      bestTime: "October to March",
      description:
        "Experience the perfect combination of spirituality and wildlife with a visit to the sacred Somnath Temple and the natural wilderness of Gir National Park, home of the Asiatic lion.",
    },

    // =====================================================
    // DWARKADHISH TEMPLE
    // =====================================================
    "dwarkadhish-temple": {
      name: "Dwarkadhish Temple",
      duration: "2 Days / 1 Night",
      bestTime: "October to March",
      description:
        "Explore the sacred city of Dwarka and visit the famous Dwarkadhish Temple, Gomti Ghat, nearby temples, and other important spiritual and cultural attractions.",
    },

    // =====================================================
    // SAPUTARA
    // =====================================================
    "saputara-hill-station": {
      name: "Saputara Hill Station",
      duration: "2 Days / 1 Night",
      bestTime: "July to February",
      description:
        "Enjoy a refreshing escape to Gujarat's beautiful hill station, surrounded by green hills, peaceful lakes, scenic viewpoints, waterfalls, gardens, and natural landscapes.",
    },

    // =====================================================
    // UDAIPUR
    // =====================================================
    udaipur: {
      name: "Udaipur",
      duration: "3 Days / 2 Nights",
      bestTime: "October to March",
      description:
        "Discover the royal charm of Udaipur with its magnificent palaces, beautiful lakes, historic landmarks, scenic surroundings, colorful markets, and rich Rajasthani heritage.",
    },

    // =====================================================
    // DIU
    // =====================================================
    diu: {
      name: "Diu",
      duration: "2 Days / 1 Night",
      bestTime: "October to March",
      description:
        "Enjoy a peaceful coastal getaway in Diu with beautiful beaches, historic forts, Portuguese heritage, scenic Arabian Sea views, and a relaxed seaside atmosphere.",
    },
  };

  const destination = destinations[slug];

  // =====================================================
  // INVALID URL
  // =====================================================
  if (!destination) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-semibold text-[#0d2d55]">
          Destination Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-[#0d2d55] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 pt-4 text-center">

        {/* Info Row */}
        <div className="hero-animate flex items-center justify-center gap-6 text-sm text-white/90">

          {/* Duration */}
          <div className="flex items-center gap-2">
            <FiCalendar className="h-4 w-4" />

            <span>{destination.duration}</span>
          </div>

          {/* Best Time */}
          <div className="hidden items-center gap-2 sm:flex">
            <FiClock className="h-4 w-4" />

            <span>
              Best Time: {destination.bestTime}
            </span>
          </div>

        </div>

        {/* Title */}
        <h1
          className="hero-animate mt-4 text-4xl font-normal tracking-tight text-white md:text-6xl"
          style={{ animationDelay: "150ms" }}
        >
          {destination.name}
        </h1>

        {/* Description */}
        <p
          className="hero-animate mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-white/85 md:text-base"
          style={{ animationDelay: "300ms" }}
        >
          {destination.description}
        </p>

      </div>
    </section>
  );
}

export default DestinationDetailHero;