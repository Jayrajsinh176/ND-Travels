
function BlogArticles() {
  const articles = [
    {
      title: "Best Places to Visit in Gujarat",
      category: "Gujarat Travel",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      description:
        "Discover the best places to visit in Gujarat, including Ahmedabad, Dwarka, Somnath, Gir, Rann of Kutch, Statue of Unity and Saputara.",
      date: "September 5, 2026",
    },
    {
      title: "Rann of Kutch Travel Guide: Best Time, Places & Things to Do",
      category: "Travel Guide",
      image:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=80",
      description:
        "Plan your Rann of Kutch trip with information about the best time to visit, White Desert, nearby attractions, activities and travel tips.",
      date: "September 3, 2026",
    },
    {
      title: "Dwarka Somnath Tour: Complete Travel Guide",
      category: "Pilgrimage Travel",
      image:
        "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80",
      description:
        "Plan a Dwarka and Somnath pilgrimage with a practical guide covering temples, nearby attractions, ideal duration and travel planning.",
      date: "August 30, 2026",
    },
    {
      title: "Somnath and Gir Trip: Places to Visit & Travel Guide",
      category: "Gujarat Travel",
      image:
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
      description:
        "Combine the spiritual experience of Somnath with a Gir wildlife trip and discover the best attractions, routes and travel tips.",
      date: "August 27, 2026",
    },
    {
      title: "Statue of Unity Travel Guide: Places to Visit & Best Time",
      category: "Places to Visit",
      image:
        "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
      description:
        "Everything you need to plan a Statue of Unity trip, including the best time to visit, attractions, activities and nearby places.",
      date: "August 24, 2026",
    },
    {
      title: "Saputara Travel Guide: Best Time, Attractions & Things to Do",
      category: "Hill Station",
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      description:
        "Explore Saputara with useful information about the best time to visit, popular attractions, sightseeing and things to do.",
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
