import {
  FiMapPin,
  FiTruck,
  FiHome,
  FiGlobe,
  FiCompass,
  FiBriefcase,
} from "react-icons/fi";

function AboutServices() {
  const services = [
    {
      icon: FiTruck,
      title: "Taxi & Transportation",
      description:
        "Comfortable and reliable taxi services for local travel, airport transfers, and convenient transportation.",
    },
    {
      icon: FiMapPin,
      title: "Airport Transfers",
      description:
        "Hassle-free pickup and drop-off services between airports, hotels, and destinations.",
    },
    {
      icon: FiCompass,
      title: "Sightseeing & Tours",
      description:
        "Explore popular attractions and local experiences with convenient transportation and planned tours.",
    },
    {
      icon: FiGlobe,
      title: "Travel Packages",
      description:
        "Customized domestic and international travel packages designed around your preferences and budget.",
    },
    {
      icon: FiHome,
      title: "Hotel & Stay Assistance",
      description:
        "Support with suitable accommodations and transportation for a smooth and comfortable trip.",
    },
    {
      icon: FiBriefcase,
      title: "Corporate Travel",
      description:
        "Reliable travel and transportation solutions for business trips, meetings, and corporate requirements.",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="reveal reveal-up mx-auto max-w-[900px] text-center">

          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-orange-500">
            What We Provide
          </p>

          <h2 className="mt-4 text-[34px] font-normal leading-tight tracking-[-0.03em] text-[#0d2d55] md:text-[46px]">
            Our Travel & Transportation Services
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-[13px] leading-7 text-[#365273] md:text-[15px]">
            From everyday transportation to complete travel experiences,
            ND Tours and Travels provides convenient and reliable services for
            individuals, families, and businesses.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="reveal reveal-up rounded-[18px] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={21} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[17px] font-medium text-[#0d2d55]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[13px] leading-6 text-gray-600">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default AboutServices;
