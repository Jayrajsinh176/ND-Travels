function TaxiHero() {
  return (
    <section className="bg-[#0d2d55] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 pt-4 text-center">
        <h1 className="hero-animate text-4xl font-normal tracking-tight text-white md:text-5xl">
          Taxi Services
        </h1>

        <p
          className="hero-animate mx-auto mt-4 max-w-2xl text-[13px] font-medium leading-5 text-white/85 md:text-sm"
          style={{ animationDelay: "150ms" }}
        >
          Enjoy safe, reliable, and comfortable taxi services for
          <br className="hidden sm:block" />
          local travel, airport transfers, and outstation journeys.
        </p>
      </div>
    </section>
  );
}

export default TaxiHero;