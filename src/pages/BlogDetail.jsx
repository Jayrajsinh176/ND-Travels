import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiMapPin,
  FiSun,
  FiNavigation,
} from "react-icons/fi";

import blogPosts from "../data/blogPosts";

const SITE_NAME = "Rudransh Travels";

// Turns a heading into a URL-friendly id for "In this article" jump links
const toAnchor = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// =========================================================
// SEO HELPERS
// Each setter returns a function that restores the tag's previous state.
// =========================================================
function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  const previous = tag?.getAttribute("content");

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);

  return () =>
    previous == null ? tag.remove() : tag.setAttribute("content", previous);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  const previous = link?.getAttribute("href");

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);

  return () =>
    previous == null ? link.remove() : link.setAttribute("href", previous);
}

function useBlogSeo(post) {
  useEffect(() => {
    if (!post) return;

    const origin = window.location.origin;
    const previousTitle = document.title;
    const url = `${origin}/blog/${post.slug}`;
    const imageUrl = `${origin}${encodeURI(post.image)}`;

    document.title = post.metaTitle;

    const restorers = [
      setMeta("name", "description", post.metaDescription),
      setMeta("name", "keywords", post.keywords.join(", ")),
      setMeta("property", "og:type", "article"),
      setMeta("property", "og:title", post.metaTitle),
      setMeta("property", "og:description", post.metaDescription),
      setMeta("property", "og:url", url),
      setMeta("property", "og:image", imageUrl),
      setMeta("name", "twitter:card", "summary_large_image"),
      setMeta("name", "twitter:title", post.metaTitle),
      setMeta("name", "twitter:description", post.metaDescription),
      setMeta("name", "twitter:image", imageUrl),
      setCanonical(url),
    ];

    // Structured data so search engines understand this is an article
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "blog-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: imageUrl,
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      contentLocation: { "@type": "Place", name: post.location },
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: SITE_NAME, url: origin },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: `${origin}/images/logo.png` },
      },
    });

    document.getElementById("blog-schema")?.remove();
    document.head.appendChild(schema);

    return () => {
      document.title = previousTitle;
      schema.remove();
      restorers.reverse().forEach((restore) => restore());
    };
  }, [post]);
}

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  useBlogSeo(post);

  // =========================================================
  // NOT FOUND
  // =========================================================
  if (!post) {
    return (
      <section className="bg-white py-32 text-center">
        <h1 className="text-3xl font-semibold text-[#0d2d55]">
          Article not found
        </h1>

        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
        >
          <FiArrowLeft /> Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="bg-white">
      {/* =================================================
          TITLE (navy band sits behind the transparent navbar)
      ================================================== */}
      <header className="bg-[#0d2d55] px-5 pb-12 pt-32 sm:px-8 md:pb-14 md:pt-36">
        <div className="mx-auto w-full max-w-7xl">
          <span className="hero-animate inline-block rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-semibold text-white">
            {post.category}
          </span>

          <h1
            className="hero-animate mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            {post.title}
          </h1>

          <div
            className="hero-animate mt-5 flex flex-wrap items-center gap-5 text-sm text-white/80"
            style={{ animationDelay: "200ms" }}
          >
            <span className="flex items-center gap-2">
              <FiCalendar className="text-orange-400" />
              <time dateTime={post.isoDate}>{post.date}</time>
            </span>

            <span className="flex items-center gap-2">
              <FiClock className="text-orange-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* =================================================
          COVER IMAGE (same width as the upfooter)
      ================================================== */}
      <div className="px-5 pt-10 sm:px-8 md:pt-12">
        <figure className="mx-auto w-full max-w-7xl overflow-hidden rounded-[22px] shadow-lg">
          <img
            src={post.detailImage || post.image}
            alt={post.title}
            className="h-65 w-full object-cover sm:h-95 lg:h-130"
            fetchPriority="high"
          />
        </figure>
      </div>

      {/* =================================================
          KEY FACTS
      ================================================== */}
      <div className="px-5 pt-8 sm:px-8">
        <dl className="mx-auto grid w-full max-w-7xl gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: FiMapPin, label: "Location", value: post.location },
            { icon: FiSun, label: "Best Time to Visit", value: post.bestTime },
            { icon: FiNavigation, label: "Nearest Airport", value: post.airport },
            { icon: FiClock, label: "Ideal Duration", value: post.duration },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <Icon className="h-5 w-5" />
              </span>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#0d2d55]">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* =================================================
          ARTICLE BODY
      ================================================== */}
      <div className="px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto w-full max-w-7xl">
          <p className="reveal reveal-up text-lg leading-8 text-gray-600">
            {post.intro}
          </p>

          {/* In this article */}
          <nav
            aria-label="In this article"
            className="reveal reveal-up mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50/60 p-6"
          >
            <h2 className="text-lg font-semibold text-[#0d2d55]">
              In this article
            </h2>

            <ol className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {post.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#${toAnchor(section.heading)}`}
                    className="text-gray-600 transition hover:text-orange-500"
                  >
                    {index + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {post.sections.map((section) => (
            <section
              key={section.heading}
              id={toAnchor(section.heading)}
              className="reveal reveal-up mt-12 scroll-mt-28"
            >
              <h2 className="text-2xl font-semibold text-[#0d2d55] md:text-3xl">
                {section.heading}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-4 text-base leading-7 text-gray-600">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="mt-5 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-gray-600">
                      <FiCheckCircle className="mt-1.5 h-4 w-4 shrink-0 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Closing line with an internal link to the matching package */}
          <p className="reveal reveal-up mt-12 text-base leading-7 text-gray-600">
            Want to plan this trip without the hassle? Take a look at our{" "}
            <Link
              to={`/destinations/${post.packageSlug}`}
              className="font-semibold text-orange-500 underline-offset-4 hover:underline"
            >
              {post.packageName}
            </Link>{" "}
            package, with a private taxi and an experienced driver from {SITE_NAME}.
          </p>

          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            <FiArrowLeft /> Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogDetail;
