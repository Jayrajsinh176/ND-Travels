import { FiCheck } from "react-icons/fi";

function AboutCompany() {
  const values = [
    "Personalized travel experiences",
    "Trusted global travel partnerships",
    "Transparent and reliable service",
    "Support from planning to arrival",
  ];

  const stats = [
    {
      number: "5000+",
      label: "Happy Travelers",
    },
    {
      number: "10+",
      label: "Destinations",
    },
    {
      number: "2+",
      label: "Years of Experience",
    },
    {
      number: "24/7",
      label: "Travel Assistance",
    },
  ];

  return (
    <section className="bg-white">

      {/* ================= COMPANY DETAILS ================= */}
      <div className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[500px_1fr] md:gap-16">

          {/* Company Image */}
          <div className="reveal reveal-left overflow-hidden rounded-[20px]">
            <img
              src="/images/about.webp"
              alt="ND Tours and Travels travel experience"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Company Details */}
          <div className="reveal reveal-right">

            {/* Label */}
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-orange-500">
              Who We Are
            </p>

            {/* Heading */}
            <h2 className="mt-3 max-w-[500px] text-[34px] font-normal leading-[1.15] tracking-[-0.03em] text-[#0d2d55] md:text-[38px]">
              More Than a Travel
              <br />
              Company
            </h2>

            {/* Intro */}
            <p className="mt-5 max-w-[500px] text-[13px] leading-6 text-gray-600">
              ND Tours and Travels is a travel and transportation company
              dedicated to making every journey simple, comfortable,
              and memorable. From planning your trip to getting you
              where you need to go, we provide reliable travel
              solutions designed around your needs.
            </p>

            {/* Our Story */}
            <div className="mt-7">
              <h3 className="text-[17px] font-medium text-[#0d2d55]">
                Our Story
              </h3>

              <p className="mt-2 max-w-[500px] text-[13px] leading-6 text-gray-600">
                Built from a passion for travel and exceptional
                service, ND Tours and Travels brings together travel planning,
                transportation, and destination assistance under
                one trusted name. Whether you are planning a holiday,
                a business trip, or simply need a comfortable taxi,
                our goal is to make your journey easier.
              </p>
            </div>

            {/* Our Approach */}
            <div className="mt-6">
              <h3 className="text-[17px] font-medium text-[#0d2d55]">
                Our Approach
              </h3>

              <p className="mt-2 max-w-[500px] text-[13px] leading-6 text-gray-600">
                We believe great travel starts with understanding
                what our customers need. Our team combines
                personalized planning, reliable transportation,
                destination knowledge, and trusted partnerships to
                deliver a smooth experience from start to finish.
              </p>
            </div>

            {/* Values */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <FiCheck size={9} strokeWidth={3} />
                  </span>

                  <span className="text-[12px] font-medium text-[#17375f]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= STATISTICS ================= */}
      <div className="bg-white py-10 md:py-11">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 md:grid-cols-4 md:gap-0">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal reveal-up text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[40px] font-normal leading-none tracking-[-0.03em] text-[#0d2d55] md:text-[46px]">
                {stat.number}
              </div>

              <p className="mt-2 text-[12px] font-medium text-gray-600 md:text-[13px]">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default AboutCompany;
