import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`nav-animate fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled
        ? "bg-[#0d2d55]/95 shadow-lg backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* ================= NAVBAR ================= */}
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[82px]" : "h-[96px]"
            }`}
        >
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center"
          >
            <img
              src="/images/logo.png"
              alt="ND Tours and Travels"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-16 sm:h-[72px]" : "h-[72px] sm:h-[82px]"
                }`}
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center gap-7 md:flex lg:gap-9">
            {/* About */}
            <Link
              to="/about"
              className="text-sm text-white transition duration-200 hover:text-orange-400"
            >
              About
            </Link>

            {/* Destinations */}
            <Link
              to="/destinations"
              className="text-sm text-white transition duration-200 hover:text-orange-400"
            >
              Destinations
            </Link>

  {/* Taxi Services */}
            <Link
              to="/taxi-services"
              className="text-sm text-white transition duration-200 hover:text-orange-400"
            >
              Taxi Services
            </Link>
            
            {/* Contact */}
            <Link
              to="/contact"
              className="text-sm text-white transition duration-200 hover:text-orange-400"
            >
              Contact
            </Link>
            {/* Blog */}
            <Link
              to="/blog"
              className="text-sm text-white transition duration-200 hover:text-orange-400"
            >
              Blog
            </Link>
          </div>

          {/* ================= DESKTOP BOOK NOW ================= */}
          <a
            href="#booking"
            className="hidden rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-900 shadow-sm transition duration-200 hover:bg-orange-500 hover:text-white md:block"
          >
            Book Now
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white transition duration-200 hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${mobileMenuOpen
            ? "max-h-[500px] pb-5 opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <div className="rounded-xl border border-white/15 bg-[#0d2d55]/95 p-3 shadow-2xl backdrop-blur-xl">
            {/* About */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10 hover:text-orange-400"
            >
              About
            </Link>

            {/* Destinations */}
            <Link
              to="/destinations"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10 hover:text-orange-400"
            >
              Destinations
            </Link>

            {/* Taxi Services */}
            <Link
              to="/taxi-services"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10 hover:text-orange-400"
            >
              Taxi Services
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10 hover:text-orange-400"
            >
              Contact
            </Link>

            {/* Blog */}
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10 hover:text-orange-400"
            >
              Blog
            </Link>

            {/* Mobile Book Now */}
            <a
              href="#booking"
              onClick={closeMobileMenu}
              className="mt-3 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition duration-200 hover:bg-orange-500 hover:text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;