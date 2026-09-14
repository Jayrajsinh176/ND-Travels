import {
  FaCar,
  FaRoute,
  FaPlane,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

function TaxiServices() {
  const services = [
    {
      icon: FaCar,
      title: "Local Taxi",
      subtitle: "Local Sightseeing",
    },
    {
      icon: FaRoute,
      title: "Outstation Taxi",
      subtitle: "One Way / Round Trip",
    },
    {
      icon: FaPlane,
      title: "Airport Transfers",
      subtitle: "Pickup & Drop",
    },
    {
      icon: FaBriefcase,
      title: "Corporate Travel",
      subtitle: "Business Travel",
    },
  ];

  const routes = [
    {
      from: "Vadodara to",
      destination: "Statue of Unity",
      distance: "5 Hrs",
    },
    {
      from: "Ahmedabad to",
      destination: "Statue of Unity",
      distance: "6 Hrs",
    },
    {
      from: "Surat to",
      destination: "Statue of Unity",
      distance: "5 Hrs",
    },
    {
      from: "Rajpipla Local",
      destination: "Sightseeing",
      distance: "5 Hrs",
    },
    {
      from: "Rajpipla to",
      destination: "Mumbai Airport",
      distance: "Airport Transfer",
    },
    {
      from: "Mumbai Airport to",
      destination: "Rajpipla",
      distance: "Airport Transfer",
    },
    {
      from: "Rajpipla to",
      destination: "Ahmedabad Airport",
      distance: "Airport Transfer",
    },
    {
      from: "Ahmedabad Airport to",
      destination: "Rajpipla",
      distance: "Airport Transfer",
    },
  ];

  const handleRouteRequest = (route) => {
  // ND Tours and Travels WhatsApp number
  const whatsappNumber = "917069013142";

  const message = `Hello ND Tours and Travels,

I would like to enquire about your taxi service for the following route:

Route: ${route.from} ${route.destination}
Service: ${route.distance}
Kindly share the current fare, vehicle options, availability, and other booking details for this journey.
Please let me know the next steps to proceed with the booking.

Thank you.
I look forward to hearing from you.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= OUR TAXI SERVICES ================= */}
        <div>
          <h2 className="text-center text-2xl font-semibold text-[#0d2d55] md:text-3xl">
            Our Taxi Services
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#ff6900]"></div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="reveal reveal-up group rounded-lg border border-slate-200 bg-white px-4 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8] text-[#ff6900] transition duration-300 group-hover:bg-[#ff6900] group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[#0d2d55]">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {service.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= POPULAR ROUTES ================= */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-[#0d2d55] md:text-3xl">
            Popular Routes
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-16 bg-[#ff6900]"></div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((route, index) => (
              <div
                key={index}
                className="reveal reveal-up flex flex-col items-center rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                {/* Location Icon */}
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3e8] text-[#ff6900]">
                  <FaMapMarkerAlt className="text-base" />
                </div>

                {/* Route */}
                <p className="mt-4 text-xs font-medium text-slate-500">
                  {route.from}
                </p>

                <h3 className="mt-1 text-base font-bold text-[#0d2d55]">
                  {route.destination}
                </h3>

                {/* Distance / Type */}
                <p className="mt-2 text-xs text-slate-500">
                  {route.distance}
                </p>

                {/* Request Button */}
                <button
                  type="button"
                  onClick={() => handleRouteRequest(route)}
                  className="mt-5 rounded-full bg-[#ff6900] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#e85d00] hover:shadow-lg"
                >
                  Request
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TaxiServices;