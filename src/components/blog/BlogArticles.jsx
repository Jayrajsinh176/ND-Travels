import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

import articles from "../../data/blogPosts";

function BlogArticles() {
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
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="reveal reveal-up group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-4 text-xs font-medium text-gray-400">
                  <span className="flex items-center gap-1.5"><FiCalendar className="text-orange-500" />{article.date}</span>
                  <span className="flex items-center gap-1.5"><FiClock className="text-orange-500" />{article.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug text-[#0d2d55] transition group-hover:text-orange-500">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {article.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-orange-500">
                  Read More
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogArticles;
