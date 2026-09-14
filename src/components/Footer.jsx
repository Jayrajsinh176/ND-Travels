import {
  FiFacebook,
  FiInstagram,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0d2d55] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="reveal reveal-up">
            <Link
              to="/"
              className="inline-flex items-center"
            >
              <img
                src="/images/logo.png"
                alt="ND Tours and Travels"
                className="h-20 w-auto object-contain sm:h-24"
              />
            </Link>

            <p className="mt-5 max-w-sm text-xs font-normal leading-6 text-white/65 sm:text-[13px]">
              ND Tours and Travels is your trusted travel partner,
              offering personalized travel planning, seamless
              bookings, and unforgettable journeys.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-white/50 transition hover:text-orange-400"
              >
                <FiFacebook className="h-4 w-4" />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="text-white/50 transition hover:text-orange-400"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div
            className="reveal reveal-up"
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {/* Home */}
              <li>
                <Link
                  to="/"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <Link
                  to="/about"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  About Us
                </Link>
              </li>

              {/* Destinations */}
              <li>
                <Link
                  to="/destinations"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Destinations
                </Link>
              </li>

              {/* Taxi Services */}
              <li>
                <Link
                  to="/taxi-services"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Taxi Services
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Contact
                </Link>
              </li>
              {/* Blog */}
              <li>
                <Link
                  to="/blog"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Blog
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= TRAVEL SERVICES ================= */}
          <div
            className="reveal reveal-up"
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white">
              Travel Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/destinations"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Holiday Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/taxi-services"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Taxi Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-xs text-white/65 transition hover:text-orange-400 sm:text-[13px]"
                >
                  Travel Booking
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div
            className="reveal reveal-up"
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white">
              Do You Need Help?
            </h3>

            {/* Phone */}
            <div className="mt-6 flex gap-3">
              <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-white/65" />

              <div>
                <p className="text-xs text-white/65 sm:text-[13px]">
                  Sunday-Friday: 08am-9pm
                </p>

                <a
                  href="tel:+18005553456"
                  className="mt-1 block text-xs font-medium text-orange-400 transition hover:text-orange-300 sm:text-[13px]"
                >
                  +1 (800) 555-3456
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mt-6 flex gap-3">
              <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-white/65" />

              <div>
                <p className="text-xs text-white/65 sm:text-[13px]">
                  Need help with your booking?
                </p>

                <a
                  href="mailto:info@rudranshtravels.com"
                  className="mt-1 block text-xs font-medium text-orange-400 transition hover:text-orange-300 sm:text-[13px]"
                >
                  info@rudranshtravels.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p className="text-xs text-white/50 sm:text-[13px]">
              © {new Date().getFullYear()} ND Tours and Travels. All Rights Reserved.
            </p>

            {/* Credit */}
            <p className="text-xs text-white/40 sm:text-[13px]">
              Design and Develop by Jayrajsinh Ravalji
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
