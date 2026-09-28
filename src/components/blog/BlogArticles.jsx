
function BlogArticles() {
  const articles = [
    {
      title: "Best Places to Visit in Gujarat",
      category: "Gujarat Travel",
      image:
        "/images/Blog/card 1.webp",
      description:
        "From the white salt desert of Kutch to the Asiatic lions of Gir, here are 7 Gujarat destinations worth adding to your itinerary: Ahmedabad, Dwarka, Somnath, Statue of Unity and Saputara.",
      date: "September 5, 2026",
    },
    {
      title: "Rann of Kutch Travel Guide: Best Time, Places & Things to Do",
      category: "Travel Guide",
      image:
        "/images/Blog/card 2.webp",
      description:
        "Visit the White Rann between November and February, when the salt flats shine under the full moon and Rann Utsav tents open at Dhordo. Covers Kalo Dungar, Bhujodi craft villages and entry permits.",
      date: "September 3, 2026",
    },
    {
      title: "Dwarka Somnath Tour: Complete Travel Guide",
      category: "Pilgrimage Travel",
      image:
        "/images/Blog/card 3.webp",
      description:
        "A 3 to 4 day pilgrimage route linking Dwarkadhish Temple, Nageshwar Jyotirlinga and Bet Dwarka with the seaside Somnath Jyotirlinga, with road distances and darshan tips.",
      date: "August 30, 2026",
    },
    {
      title: "Somnath and Gir Trip: Places to Visit & Travel Guide",
      category: "Gujarat Travel",
      image:
        "/images/Blog/card 4.webp",
      description:
        "Pair the evening aarti at Somnath Temple with a lion safari in Sasan Gir, about 45 km away. Learn how to book Gir safari permits, when the park is open and where to stay.",
      date: "August 27, 2026",
    },
    {
      title: "Statue of Unity Travel Guide: Places to Visit & Best Time",
      category: "Places to Visit",
      image:
        "/images/Blog/card 5.webp",
      description:
        "See the world's tallest statue at Kevadia, with its viewing gallery, laser light show, Valley of Flowers, Jungle Safari and Sardar Sarovar Dam, plus how to reach from Vadodara.",
      date: "August 24, 2026",
    },
    {
      title: "Saputara Travel Guide: Best Time, Attractions & Things to Do",
      category: "Hill Station",
      image:
        "/images/Blog/card 6.webp",
      description:
        "Escape the summer heat in Gujarat's favourite hill station in the Sahyadri ranges of Dang: boating on Saputara Lake, ropeway rides, sunset points and Gira Falls in the monsoon.",
      date: "August 20, 2026",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="reveal reveal-up mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
            Gujarat Travel Guide
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#0d2d55] md:text-4xl">
            Travel Tips & Destination Guides
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Explore helpful Gujarat travel guides, destination information,
            itineraries and tips to plan your next trip with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="reveal reveal-up group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-semibold text-white">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-gray-400">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug text-[#0d2d55] transition group-hover:text-orange-500">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogArticles;
