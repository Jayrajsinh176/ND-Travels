function Upfooter() {
  return (
    <section
      id="booking"
      className="bg-white px-5 pb-8 pt-2 sm:px-8 sm:pb-10 sm:pt-3 lg:px-8 lg:pb-12 lg:pt-4"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= CTA CONTAINER ================= */}
        <div className="reveal reveal-scale relative min-h-[400px] overflow-hidden rounded-[22px] sm:min-h-[450px]">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
            alt="Travel adventure in the desert"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Stronger center overlay for readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 flex min-h-[400px] items-center justify-center px-5 text-center sm:min-h-[450px]">

            <div className="max-w-xl text-white">

              {/* Badge */}
              <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1.5 backdrop-blur-sm">
                <span className="text-[11px] font-medium uppercase tracking-wide text-white">
                  Global Adventures
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Ready to Explore the
                <br />
                World with ND Tours and Travels?
              </h2>

              {/* Button */}
              <a
                href="#booking"
                className="mt-7 inline-flex rounded-full bg-orange-500 px-7 py-3 text-xs font-medium text-white shadow-lg transition duration-200 hover:bg-orange-600 hover:shadow-xl active:scale-95"
              >
                Book Now
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Upfooter;
