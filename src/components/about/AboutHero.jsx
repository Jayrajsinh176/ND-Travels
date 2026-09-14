function AboutHero() {
  return (
    <section className="bg-[#0d2d55] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 pt-4 text-center">
        <h1 className="hero-animate text-4xl font-normal tracking-tight text-white md:text-5xl">
          About ND Tours and Travels
        </h1>

        <p
          className="hero-animate mx-auto mt-4 max-w-md text-[13px] font-medium leading-5 text-white/85"
          style={{ animationDelay: "150ms" }}
        >
          ND Tours and Travels is dedicated to helping travelers discover the
          <br className="hidden sm:block" />
          world with confidence, comfort, and ease.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;