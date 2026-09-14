function DestinationHero() {
  return (
    <section className="bg-[#0d2d55] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 pt-4 text-center">
        <h1 className="hero-animate text-4xl font-normal tracking-tight text-white md:text-5xl">
          Explore Destinations
        </h1>

        <p
          className="hero-animate mx-auto mt-4 max-w-2xl text-[13px] font-medium leading-5 text-white/85 md:text-sm"
          style={{ animationDelay: "150ms" }}
        >
          From breathtaking beaches and vibrant cities to cultural landmarks and
          <br className="hidden sm:block" />
          hidden gems, ND Tours and Travels helps you explore.
        </p>
      </div>
    </section>
  );
}

export default DestinationHero;