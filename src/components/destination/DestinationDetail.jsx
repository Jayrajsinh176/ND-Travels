import {
  FiMapPin,
  FiCalendar,
  FiNavigation,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { useParams } from "react-router-dom";
import { useState } from "react";

function DestinationDetail() {
  const { slug } = useParams();

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const destinations = {
    // =========================================================
    // 1. STATUE OF UNITY
    // =========================================================
    "statue-of-unity-kevadia": {
      name: "Statue of Unity, Kevadia",

      image:
        "/images/Placedetails/statuemain.webp",

      gallery: [
        "/images/Placedetails/statueG1.webp",
        "/images/Placedetails/statueG2.webp",
        "/images/Placedetails/statueG3.webp",
        "/images/Placedetails/statueG4.webp",
        "/images/Placedetails/statueG5.webp",
      ],

      intro:
        "Discover Kevadia on a memorable 3 Days / 2 Nights journey featuring the Statue of Unity, Narmada River, beautiful gardens, scenic attractions, and family-friendly experiences.",

      heading: "A Landmark of Pride and Inspiration",

      description:
        "Kevadia, officially renamed Ekta Nagar, lies on the banks of the Narmada River in the Narmada district of Gujarat and is surrounded by the Satpura and Vindhya hill ranges. It is best known as the home of the Statue of Unity, the 182-metre tribute to Sardar Vallabhbhai Patel and the tallest statue in the world. Once a quiet cluster of villages near the Sardar Sarovar Dam, the area has been developed into a planned destination with riverfront promenades, wide roads, and landscaped attractions such as the Valley of Flowers, Arogya Van, and the Cactus Garden. The dramatic river-and-hill setting, pleasant climate for most of the year, and family-friendly layout have made it one of the most visited places in western India.",

      whyVisit: [
        {
          title: "Statue of Unity",
          description:
            "Visit the world's tallest statue and experience one of Gujarat's most iconic landmarks.",
        },
        {
          title: "Valley of Flowers",
          description:
            "Explore colorful gardens and beautifully landscaped areas surrounded by the natural beauty of Kevadia.",
        },
        {
          title: "Narmada River",
          description:
            "Enjoy scenic river views and peaceful surroundings near the Narmada River.",
        },
        {
          title: "Kevadia Attractions",
          description:
            "Discover gardens, viewpoints, nature attractions, and family-friendly experiences around Kevadia.",
        },
      ],

      tourName: "Statue of Unity & Kevadia Tour",

      tourDescription:
        "This 3 Days / 2 Nights package is planned to cover the major highlights of Kevadia at a comfortable pace. Travelers visit the Statue of Unity and its viewing gallery, walk through the Valley of Flowers along the Narmada canal, and explore themed gardens such as Arogya Van and the Cactus Garden. The itinerary also includes the Jungle Safari park, the Sardar Sarovar Dam viewpoint, and the evening laser and light show at the statue. Time is set aside for the riverfront, local markets, and leisure. The trip suits families, couples, and groups looking for a relaxed mix of sightseeing and nature.",

      tourSummary:
        "A 3 Days / 2 Nights trip covering the Statue of Unity, the Valley of Flowers, themed gardens, and the major attractions along the Narmada River.",

      location: "Kevadia, Gujarat, India",
      bestTime: "October to March",
      airport: "Vadodara Airport (BDQ)",

      duration: "3 Days / 2 Nights",
    },

    // =========================================================
    // 2. RANN OF KUTCH
    // =========================================================
    "rann-of-kutch": {
      name: "Rann of Kutch",

      image:
        "/images/Placedetails/kutchmain.webp",

      gallery: [
        "/images/Placedetails/kutchG1.webp",
        "/images/Placedetails/kutchG2.webp",
        "/images/Placedetails/kutchG3.webp",
        "/images/Placedetails/kutchG4.webp",
        "/images/Placedetails/kutchG5.webp",
      ],

      intro:
        "Experience the spectacular white desert of Kutch on a 4 Days / 3 Nights journey filled with desert landscapes, traditional culture, handicrafts, local experiences, and unforgettable sunsets.",

      heading: "The Magical White Desert of Gujarat",

      description:
        "The Rann of Kutch is a vast seasonal salt marsh spread across the Thar Desert region of the Kutch district in western Gujarat, close to the border with Pakistan. The Great Rann is famous for its endless white salt flats that shimmer under the sun by day and glow under the full moon at night, creating one of the most striking landscapes in India. The region is also rich in living culture, with villages such as Hodka, Nirona, and Ajrakhpur known for their embroidery, Rogan art, bell-making, and mud-mirror craftwork. Wildlife thrives here too, from flamingos and pelicans at the wetlands to the wild ass sanctuary in the Little Rann. Winter is the season when the desert truly comes alive, drawing photographers, artists, and travelers to its sunsets, handicrafts, and cultural celebrations.",

      whyVisit: [
        {
          title: "White Rann",
          description:
            "Walk across the spectacular white salt desert and experience its extraordinary landscape.",
        },
        {
          title: "Rann Utsav",
          description:
            "Experience Gujarat's vibrant traditions through folk music, dance, food, crafts, and cultural activities.",
        },
        {
          title: "Kutch Handicrafts",
          description:
            "Discover traditional embroidery, textiles, crafts, artwork, and local products.",
        },
        {
          title: "Sunset & Desert Views",
          description:
            "Enjoy breathtaking sunset and evening views across the endless white landscape.",
        },
      ],

      tourName: "Rann of Kutch Discovery",

      tourDescription:
        "This 4 Days / 3 Nights package gives travelers enough time to experience both the scenery and the culture of Kutch. The trip includes sunset and moonlight visits to the white salt desert at Dhordo, along with stops at Kala Dungar, the highest point in Kutch, and the India Bridge viewpoint. Days are spent exploring craft villages for embroidery, Rogan painting, copper bells, and pottery, with visits to Bhuj landmarks such as the Aina Mahal and Prag Mahal. During the season, the itinerary also covers the Rann Utsav cultural grounds with folk music, dance, and food. The pace leaves room for photography, shopping, and relaxed evenings, making it ideal for culture lovers and first-time visitors alike.",

      tourSummary:
        "A 4 Days / 3 Nights trip through the white salt desert, craft villages, and the cultural highlights of Kutch, timed for sunset and moonlight views.",

      location: "Kutch, Gujarat, India",
      bestTime: "November to February",
      airport: "Bhuj Airport (BHJ)",

      duration: "4 Days / 3 Nights",
    },

    // =========================================================
    // 3. SOMNATH + GIR
    // =========================================================
    "somnath-gir": {
      name: "Somnath + Gir National Park",

      image:
        "/images/Placedetails/girmain.webp",

      gallery: [
        "/images/Placedetails/girG1.webp",
        "/images/Placedetails/girG2.webp",
        "/images/Placedetails/girG3.webp",
        "/images/Placedetails/girG4.webp",
        "/images/Placedetails/girG5.webp",
      ],

      intro:
        "Combine spirituality and wildlife on a 3 Days / 2 Nights journey covering the sacred Somnath Temple and the natural wilderness of Gir National Park.",

      heading: "A Perfect Blend of Spirituality and Wildlife",

      description:
        "This region of Saurashtra pairs two of Gujarat's most visited places: the temple town of Somnath on the Arabian Sea coast and the forested wildlife reserve of Gir. Somnath is home to one of the twelve Jyotirlinga shrines of Lord Shiva, a temple rebuilt many times over the centuries and set dramatically on the shoreline where the land meets the sea. About two hours inland lies Gir National Park, the last natural home of the Asiatic lion, along with leopards, spotted deer, nilgai, crocodiles, and more than 300 species of birds across its dry deciduous forest and grasslands. Together the two destinations offer a rare combination of pilgrimage, coastal calm, and genuine wilderness within a short driving distance, set against the warm, dry climate of southern Gujarat.",

      whyVisit: [
        {
          title: "Somnath Temple",
          description:
            "Visit the famous Somnath Temple, one of the most revered pilgrimage destinations in India.",
        },
        {
          title: "Gir National Park",
          description:
            "Explore the wilderness of Gir and experience the natural habitat of the Asiatic lion.",
        },
        {
          title: "Wildlife Safari",
          description:
            "Enjoy an exciting safari experience and discover the forests and wildlife of Gir.",
        },
        {
          title: "Arabian Sea",
          description:
            "Relax near the coast and enjoy the beautiful surroundings of Somnath along the Arabian Sea.",
        },
      ],

      tourName: "Somnath & Gir Tour",

      tourDescription:
        "This 3 Days / 2 Nights package is built around the contrast between temple town and forest. In Somnath, travelers visit the seaside Jyotirlinga temple, attend the evening aarti and light-and-sound show, and see nearby sites such as Bhalka Tirth and the Triveni Sangam. The journey then moves to Sasan Gir for a jeep safari through the lion reserve, with time at the interpretation zone and Devaliya Safari Park for those who want a shorter option. The itinerary allows for coastal walks, local dining, and unhurried travel between the two bases. It suits pilgrims, families, and wildlife enthusiasts who want to see both sides of Gujarat in one trip.",

      tourSummary:
        "A 3 Days / 2 Nights trip combining darshan at the Somnath Jyotirlinga with a jeep safari through the Asiatic lion reserve at Gir.",

      location: "Somnath & Sasan Gir, Gujarat, India",
      bestTime: "October to March",
      airport: "Diu Airport (DIU)",

      duration: "3 Days / 2 Nights",
    },

    // =========================================================
    // 4. DWARKADHISH TEMPLE
    // =========================================================
    "dwarkadhish-temple": {
      name: "Dwarkadhish Temple",

      image:
        "/images/Placedetails/dwarkamain.webp",

      gallery: [
        "/images/Placedetails/dwarkaG1.webp",
        "/images/Placedetails/dwarkaG2.webp",
        "/images/Placedetails/dwarkaG3.webp",
        "/images/Placedetails/dwarkaG4.webp",
        "/images/Placedetails/dwarkaG5.webp",
      ],

      intro:
        "Experience the spiritual charm of Dwarka on a 2 Days / 1 Night pilgrimage journey featuring the famous Dwarkadhish Temple, sacred ghats, temples, and important religious attractions.",

      heading: "The Sacred City of Lord Krishna",

      description:
        "Dwarka sits at the far western tip of the Kathiawar peninsula, where the Gomti River meets the Arabian Sea, and is counted among the four sacred Char Dham pilgrimage sites of India. According to tradition it was the kingdom founded by Lord Krishna, and the towering Dwarkadhish Temple, also called Jagat Mandir, has stood in some form for well over a thousand years, its five-storey spire rising above the old town on a base of carved pillars. Beyond the main temple the area includes Bet Dwarka island, the Nageshwar Jyotirlinga, the Rukmini Devi Temple, and the long line of ghats along the Gomti. The town has a distinct coastal-pilgrim atmosphere, busy with rituals and boat rides yet open to sea breezes and wide sunset views.",

      whyVisit: [
        {
          title: "Dwarkadhish Temple",
          description:
            "Visit the famous temple dedicated to Lord Krishna and experience its spiritual atmosphere.",
        },
        {
          title: "Gomti Ghat",
          description:
            "Spend peaceful moments near the sacred Gomti River and explore the surrounding ghats.",
        },
        {
          title: "Bet Dwarka",
          description:
            "Explore Bet Dwarka and experience its religious and cultural significance.",
        },
        {
          title: "Dwarka Heritage",
          description:
            "Discover the temples, traditions, history, and coastal beauty of this sacred city.",
        },
      ],

      tourName: "Dwarka Spiritual Tour",

      tourDescription:
        "This 2 Days / 1 Night pilgrimage package covers the key spiritual sites of Dwarka in a short, focused trip. Travelers attend darshan and aarti at the Dwarkadhish Temple, spend time at Gomti Ghat, and take the boat crossing to Bet Dwarka, believed to be Krishna's residence. The itinerary also includes the Nageshwar Jyotirlinga and the Rukmini Devi Temple on the outskirts of town. Time is kept for the seaside promenade, local prasad, and handicraft stalls, along with an unhurried sunset by the Arabian Sea. The plan works well for pilgrims, families, and travelers who have limited days but want to cover the essential Dwarka circuit.",

      tourSummary:
        "A 2 Days / 1 Night pilgrimage covering the Dwarkadhish Temple, Gomti Ghat, Bet Dwarka, and the Nageshwar Jyotirlinga.",

      location: "Dwarka, Gujarat, India",
      bestTime: "October to March",
      airport: "Jamnagar Airport (JGA)",

      duration: "2 Days / 1 Night",
    },

    // =========================================================
    // 5. SAPUTARA
    // =========================================================
    "saputara-hill-station": {
      name: "Saputara Hill Station",

      image:
        "/images/Placedetails/saputaramain.webp",

      gallery: [

        "/images/Placedetails/saputaraG1.webp",
        "/images/Placedetails/saputaraG2.webp",
        "/images/Placedetails/saputaraG3.webp",
      ],

      intro:
        "Escape into the peaceful hills of Saputara on a refreshing 2 Days / 1 Night getaway surrounded by greenery, lakes, viewpoints, waterfalls, and scenic natural landscapes.",

      heading: "Gujarat's Beautiful Hill Escape",

      description:
        "Saputara is the only hill station in Gujarat, set at around 1,000 metres in the Dang district close to the Maharashtra border, within the forested Sahyadri range of the Western Ghats. Its name means 'abode of serpents', drawn from local tribal tradition, and the town is laid out around a crescent-shaped lake with gardens, viewpoints, and walking trails along the ridgeline. The surrounding hills stay green for much of the year and are especially lush during and after the monsoon, when waterfalls such as Gira and Girmal are at their best. Cool air, tribal Dang culture, a small museum, a ropeway to Sunset Point, and easy access to the Purna wildlife sanctuary give Saputara an unhurried, nature-first character that sets it apart from the rest of Gujarat.",

      whyVisit: [
        {
          title: "Saputara Lake",
          description:
            "Relax beside the scenic lake and enjoy the peaceful surroundings of the hill station.",
        },
        {
          title: "Sunset Point",
          description:
            "Enjoy beautiful sunset views over the surrounding hills and valleys.",
        },
        {
          title: "Saputara Hills",
          description:
            "Explore green landscapes, scenic roads, viewpoints, and refreshing mountain surroundings.",
        },
        {
          title: "Nature & Adventure",
          description:
            "Enjoy boating, sightseeing, trekking, and other outdoor experiences.",
        },
      ],

      tourName: "Saputara Hill Escape",

      tourDescription:
        "This 2 Days / 1 Night package is designed as a relaxed break in the hills. Travelers spend time at Saputara Lake with boating, ride the ropeway to Sunset Point, and visit viewpoints such as Governor's Hill, Table Point, and Echo Point. The itinerary includes the Tribal Museum, the Rose Garden, and the Step Garden, and, depending on the season, a drive to the Gira waterfall. Evenings are free for the lakeside market and local Dang cuisine. The short, easy pace makes it a good fit for families, couples, and groups looking for cool weather and greenery without a long journey.",

      tourSummary:
        "A 2 Days / 1 Night hill getaway covering Saputara Lake, the ropeway to Sunset Point, scenic viewpoints, gardens, and nearby waterfalls.",

      location: "Saputara, Gujarat, India",
      bestTime: "July to February",
      airport: "Surat Airport (STV)",

      duration: "2 Days / 1 Night",
    },

    // =========================================================
    // 6. UDAIPUR
    // =========================================================
    udaipur: {
      name: "Udaipur",

      image:
        "/images/Placedetails/udaipurmain.webp",

      gallery: [
        "/images/Placedetails/udaipurG1.webp",
        "/images/Placedetails/udaipurG2.webp",
        "/images/Placedetails/udaipurG3.webp",
        "/images/Placedetails/udaipurG4.webp",
        "/images/Placedetails/udaipurG5.webp",
        "/images/Placedetails/udaipurG6.webp",
      ],

      intro:
        "Discover the royal charm of Udaipur on a 3 Days / 2 Nights journey through magnificent palaces, beautiful lakes, historic landmarks, colorful markets, and Rajasthan's rich heritage.",

      heading: "The Romantic City of Lakes",

      description:
        "Udaipur was founded in 1559 by Maharana Udai Singh II as the new capital of the kingdom of Mewar, set in a valley ringed by the Aravalli hills and built around a chain of interconnected lakes. It is often called the City of Lakes or the Venice of the East, with Lake Pichola and Fateh Sagar at its heart and grand structures such as the City Palace, Jag Niwas, and Jag Mandir rising straight from the water. The old city is a maze of narrow lanes, painted havelis, temples, and markets selling miniature paintings, silver, and textiles. With its palace hotels, garden retreats like Saheliyon Ki Bari, and a backdrop of hills and stepwells, Udaipur is widely regarded as one of the most romantic and photogenic cities in Rajasthan.",

      whyVisit: [
        {
          title: "City Palace",
          description:
            "Explore the magnificent palace complex and discover the royal history and architecture of Mewar.",
        },
        {
          title: "Lake Pichola",
          description:
            "Enjoy beautiful lake views and experience the romantic charm of Udaipur's waterfront.",
        },
        {
          title: "Jag Mandir",
          description:
            "Discover the historic island palace located on the scenic waters of Lake Pichola.",
        },
        {
          title: "Rajasthani Culture",
          description:
            "Experience traditional architecture, local markets, cuisine, crafts, and the vibrant culture of Rajasthan.",
        },
      ],

      tourName: "Udaipur Royal Escape",

      tourDescription:
        "This 3 Days / 2 Nights package covers Udaipur's palaces, lakes, and heritage lanes at a comfortable pace. Travelers explore the sprawling City Palace complex, take a boat ride on Lake Pichola with a stop at Jag Mandir, and visit Jagdish Temple, Saheliyon Ki Bari, and the Vintage Car Museum. The itinerary includes a sunset viewpoint over the lakes, such as Karni Mata reached by ropeway, and time in the old-city bazaars for paintings and handicrafts. An optional evening cultural show at Bagore Ki Haveli rounds out the trip. It suits couples, families, and heritage lovers who want a mix of sightseeing, shopping, and leisure.",

      tourSummary:
        "A 3 Days / 2 Nights trip covering the City Palace, a Lake Pichola boat ride to Jag Mandir, heritage sites, and the old-city bazaars.",

      location: "Udaipur, Rajasthan, India",
      bestTime: "October to March",
      airport: "Maharana Pratap Airport (UDR)",

      duration: "3 Days / 2 Nights",
    },

    // =========================================================
    // 7. DIU
    // =========================================================
    diu: {
      name: "Diu",

      image:
        "/images/Placedetails/diumain.webp",

      gallery: [
        "/images/Placedetails/diuG1.webp",
        "/images/Placedetails/diuG2.webp",
        "/images/Placedetails/diuG3.webp",
        "/images/Placedetails/diuG4.webp",
      ],

      intro:
        "Enjoy a relaxing 2 Days / 1 Night coastal getaway in Diu featuring beautiful beaches, historic landmarks, Portuguese heritage, scenic coastal views, and peaceful seaside experiences.",

      heading: "A Peaceful Coastal Escape",

      description:
        "Diu is a small island town off the southern coast of the Kathiawar peninsula, connected to the mainland by bridges and administered as part of the union territory of Dadra and Nagar Haveli and Daman and Diu. It was a Portuguese colony for more than 400 years, until 1961, and that history is still visible in its sea-facing fort, whitewashed churches, colonial villas, and quiet, orderly streets. The island is fringed by beaches such as Nagoa and Ghoghla, edged by limestone cliffs and hoka palm groves that grow almost nowhere else in India. With a mild coastal climate, light traffic, fresh seafood, and a slow, uncrowded pace, Diu has a very different feel from the rest of the region and is popular as a restful seaside escape.",

      whyVisit: [
        {
          title: "Diu Fort",
          description:
            "Explore the historic fort and enjoy impressive views overlooking the Arabian Sea.",
        },
        {
          title: "Nagoa Beach",
          description:
            "Relax along the beautiful coastline and enjoy a peaceful beach experience.",
        },
        {
          title: "Portuguese Heritage",
          description:
            "Discover the unique architecture, history, and cultural influence found throughout Diu.",
        },
        {
          title: "Coastal Experience",
          description:
            "Enjoy scenic seaside views, relaxed evenings, and a refreshing break from busy city life.",
        },
      ],

      tourName: "Diu Coastal Escape",

      tourDescription:
        "This 2 Days / 1 Night package covers the main sights of Diu in a short, easy trip. Travelers explore the seventeenth-century Diu Fort and the Panikotha sea fort, visit St Paul's Church and the Diu Museum housed in a former church, and spend time at Nagoa and Ghoghla beaches. The itinerary also includes the INS Khukri memorial, the Naida Caves, and the Gangeshwar shrine set among the rocks by the sea. Evenings are kept free for the seafront, local seafood, and a relaxed sunset. The gentle pace suits families, couples, and anyone wanting a quiet coastal break rather than a packed sightseeing schedule.",

      tourSummary:
        "A 2 Days / 1 Night coastal break covering Diu Fort, Nagoa and Ghoghla beaches, Portuguese-era churches, and seaside viewpoints.",

      location: "Diu, India",
      bestTime: "October to March",
      airport: "Diu Airport (DIU)",

      duration: "2 Days / 1 Night",
    },
  };

  const destination = destinations[slug];

  // =========================================================
  // DESTINATION NOT FOUND
  // =========================================================
  if (!destination) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center">
        <h1 className="text-2xl font-semibold text-[#0d2d55]">
          Destination Not Found
        </h1>
      </section>
    );
  }

  // =========================================================
  // WHATSAPP BOOKING
  // =========================================================
  const handleBooking = () => {
    // Replace this number with your actual WhatsApp number
    const whatsappNumber = "917069013142";

    const message = `Hello ND Tours and Travels,

I would like to enquire about booking the following tour package through your website:

Destination: ${destination.name}

Tour Package: ${destination.tourName}

Duration: ${destination.duration}

Please share the current package price, availability, inclusions, itinerary, and complete booking details.

Thank you.
I look forward to hearing from you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // =========================================================
  // GALLERY CONTROLS
  // =========================================================
  const handlePrevious = () => {
    setGalleryIndex(
      (galleryIndex - 1 + destination.gallery.length) %
      destination.gallery.length
    );
  };

  const handleNext = () => {
    setGalleryIndex(
      (galleryIndex + 1) % destination.gallery.length
    );
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const swipeDistance = touchStartX - event.changedTouches[0].clientX;
    const swipeThreshold = 40;

    if (swipeDistance > swipeThreshold) {
      handleNext();
    } else if (swipeDistance < -swipeThreshold) {
      handlePrevious();
    }

    setTouchStartX(null);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN CONTENT GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <div>

            {/* Main Image */}
            <div className="reveal reveal-scale overflow-hidden rounded-2xl">
              <img
                src={destination.image}
                alt={destination.name}
                className="h-[320px] w-full object-cover sm:h-[380px] md:h-[450px]"
              />
            </div>

            {/* Intro */}
            <p className="mt-8 text-sm font-medium leading-6 text-gray-600 md:text-[15px]">
              {destination.intro}
            </p>

            {/* Main Heading */}
            <h2 className="mt-6 text-2xl font-medium leading-tight text-[#0d2d55] md:text-3xl">
              {destination.heading}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
              {destination.description}
            </p>

            {/* =================================================
                WHY VISIT
            ================================================== */}
            <h2 className="mt-10 text-2xl font-medium text-[#0d2d55] md:text-3xl">
              Why Visit {destination.name.split(",")[0]}?
            </h2>

            <div className="mt-6 space-y-5">
              {destination.whyVisit.map((item, index) => (
                <div
                  key={index}
                  className="reveal reveal-up"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >

                  <h3 className="flex items-center gap-2 text-[15px] font-semibold text-[#0d2d55]">
                    <span className="text-base text-orange-500">
                      ✦
                    </span>

                    {item.title}
                  </h3>

                  <p className="mt-1.5 pl-6 text-[13px] leading-6 text-gray-600 md:text-sm">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

            {/* =================================================
                TOUR OVERVIEW
            ================================================== */}
            <h2 className="mt-12 text-2xl font-medium text-[#0d2d55] md:text-3xl">
              Tour Overview
            </h2>

            <div className="reveal reveal-up mt-6 space-y-5 text-sm leading-6 text-gray-600 md:text-[15px]">

              <p>
                <span className="font-semibold text-gray-800">
                  Tour Name:
                </span>{" "}
                {destination.tourName}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Duration:
                </span>{" "}
                {destination.duration}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Destination:
                </span>{" "}
                {destination.location}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Best Time to Visit:
                </span>{" "}
                {destination.bestTime}
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Brief Description:
                </span>{" "}
                {destination.tourDescription}
              </p>

            </div>

            {/* =================================================
                GALLERY
            ================================================== */}
            <div className="reveal reveal-up mt-14">

              <h2 className="text-3xl font-medium text-[#0d2d55]">
                Gallery
              </h2>

              <div className="mt-7 flex items-center gap-2 sm:gap-4">

                {/* Previous */}
                {destination.gallery.length > 2 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Previous gallery images"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2d55] shadow-lg ring-1 ring-gray-200 transition hover:scale-105 sm:h-11 sm:w-11"
                  >
                    <FiChevronLeft className="h-6 w-6" />
                  </button>
                )}

                <div
                  className="grid min-w-0 flex-1 grid-cols-1 gap-6 md:grid-cols-2"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >

                  {[0, 1].map((offset) => {
                    const imageIndex =
                      (galleryIndex + offset) %
                      destination.gallery.length;

                    return (
                      <div
                        key={imageIndex}
                        className={`group overflow-hidden rounded-2xl ${offset === 1 ? "hidden md:block" : ""
                          }`}
                      >
                        <img
                          src={destination.gallery[imageIndex]}
                          alt={`${destination.name} gallery ${imageIndex + 1
                            }`}
                          className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[360px]"
                        />
                      </div>
                    );
                  })}

                </div>

                {/* Next */}
                {destination.gallery.length > 2 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next gallery images"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0d2d55] shadow-lg ring-1 ring-gray-200 transition hover:scale-105 sm:h-11 sm:w-11"
                  >
                    <FiChevronRight className="h-6 w-6" />
                  </button>
                )}

              </div>

              {/* Gallery Dots */}
              <div className="mt-5 flex justify-center gap-2">
                {destination.gallery.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setGalleryIndex(index)}
                    aria-label={`Go to gallery slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${galleryIndex === index
                      ? "w-7 bg-orange-500"
                      : "w-2.5 bg-gray-300"
                      }`}
                  />
                ))}
              </div>

            </div>

          </div>

          {/* ===================================================
              RIGHT TOUR CARD
          ==================================================== */}
          <aside className="reveal reveal-right h-fit rounded-xl bg-[#0d2d55] p-7 text-white shadow-sm lg:sticky lg:top-24">

            <h2 className="text-xl font-semibold md:text-2xl">
              Tour Overview
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/80">
              {destination.tourSummary}
            </p>

            <div className="mt-7 space-y-5 text-sm">

              {/* Duration */}
              <div className="flex gap-3">
                <FiCalendar className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <span className="font-semibold">
                    Package Duration:
                  </span>

                  <p className="mt-1 text-white/80">
                    {destination.duration}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3">
                <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <span className="font-semibold">
                    Location:
                  </span>

                  <p className="mt-1 text-white/80">
                    {destination.location}
                  </p>
                </div>
              </div>

              {/* Best Time */}
              <div className="flex gap-3">
                <FiCalendar className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <span className="font-semibold">
                    Best Time to Visit:
                  </span>

                  <p className="mt-1 text-white/80">
                    {destination.bestTime}
                  </p>
                </div>
              </div>

              {/* Airport */}
              <div className="flex gap-3">
                <FiNavigation className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <span className="font-semibold">
                    Nearest Airport:
                  </span>

                  <p className="mt-1 text-white/80">
                    {destination.airport}
                  </p>
                </div>
              </div>

            </div>

            {/* =================================================
                CENTERED BOOK NOW BUTTON
            ================================================== */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleBooking}
                className="inline-flex rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 hover:shadow-lg"
              >
                Book Now
              </button>
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}

export default DestinationDetail;