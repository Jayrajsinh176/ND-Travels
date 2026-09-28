const COMPANY = "ND Tours and Travels";
const EMAIL = "info@ndtoursandtravels.com";
const PHONE = "+91 9586995291";
const ADDRESS =
  "Shop No. 9, Avadhut Avenue Complex, Near Kalaghoda Circle, Rajpipla, Gujarat 393145, India";

const policies = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    intro: `This Privacy Policy explains how ${COMPANY} ("we", "us", "our") collects, uses and protects your personal information when you use this website or book our services. It is published in accordance with the Information Technology Act, 2000, the rules made under it, and the Digital Personal Data Protection Act, 2023.`,
    sections: [
      {
        heading: "Information We Collect",
        points: [
          "Details you submit through our enquiry form or share with us directly: your name, email address, mobile number, travel destination, pickup and drop locations, travel date and time, vehicle preference and any message you write.",
          "Details needed to complete a booking, such as the number of travellers, their names and ages, and ID proof where required by hotels, permits or law.",
          "We do not collect payment card details on this website, and we do not use cookies or analytics tools to track you.",
        ],
      },
      {
        heading: "How Your Enquiry Is Sent",
        points: [
          "When you submit the enquiry form, the website does not store your details. It opens WhatsApp with your enquiry pre-filled, and your message reaches us only when you choose to send it.",
          "Messages sent through WhatsApp are also subject to WhatsApp's own privacy policy.",
        ],
      },
      {
        heading: "How We Use Your Information",
        points: [
          "To respond to your enquiry and share quotes, itineraries and availability.",
          "To confirm and manage bookings, including sharing trip details with drivers, hotels and other service providers involved in your trip.",
          "To contact you about your trip, including changes, reminders and support.",
          "To meet legal, tax and regulatory requirements.",
        ],
      },
      {
        heading: "Sharing of Information",
        points: [
          "We share only the details needed to deliver your booking with drivers, hotels, transport operators and other travel partners.",
          "We may disclose information when required by law, court order or a government authority.",
          "We do not sell or rent your personal information to anyone.",
        ],
      },
      {
        heading: "Third-Party Services",
        points: [
          "This website uses Google Maps to show our office location and Google Fonts for text display. These services may collect technical data such as your IP address under Google's privacy policy.",
          "Links to WhatsApp, social media and other websites are governed by their own policies. We are not responsible for their content or practices.",
        ],
      },
      {
        heading: "Data Retention and Security",
        points: [
          "We keep your information only as long as needed to provide our services, resolve disputes and meet legal obligations, after which it is deleted.",
          "We take reasonable steps to protect your information, but no method of transmission or storage over the internet is completely secure.",
        ],
      },
      {
        heading: "Your Rights",
        points: [
          "You may ask us to access, correct, update or delete the personal information we hold about you, or withdraw your consent to its use, by contacting us at the details below.",
          "Withdrawing consent may mean we cannot complete a booking that depends on that information.",
        ],
      },
    ],
  },
  {
    id: "terms-and-conditions",
    title: "Terms & Conditions",
    intro: `By using this website or booking any service with ${COMPANY}, you agree to the following terms. Please read them carefully before making a booking.`,
    sections: [
      {
        heading: "Our Services",
        points: [
          "We arrange tour packages, private taxi services and travel bookings. Hotels, transport and activities included in a package may be provided by independent third-party suppliers.",
          "Information on this website, including destinations, vehicle details and itineraries, is for general guidance and may change without notice.",
        ],
      },
      {
        heading: "Bookings and Payments",
        points: [
          "Submitting an enquiry does not confirm a booking. A booking is confirmed only after we confirm it to you in writing (WhatsApp, SMS or email) and receive the agreed advance payment.",
          "Fares and package prices are shared on enquiry and depend on season, availability, distance and vehicle type. Prices quoted are valid only for the period stated in the quote.",
          "The balance amount must be paid as agreed before or during the trip. Applicable taxes are charged as per government rules.",
        ],
      },
      {
        heading: "Taxi Services",
        points: [
          "Toll charges, state entry taxes, parking fees and driver allowance are charged extra unless clearly included in your quote.",
          "Extra kilometres or hours beyond the agreed package are charged at the rates shared at the time of booking.",
          "Night driving charges may apply for travel between 10:00 PM and 6:00 AM.",
          "Smoking, alcohol consumption and carrying illegal or hazardous items are not allowed in our vehicles. The driver may end the trip without refund if these rules are broken or if passengers behave unsafely.",
          "Passengers are responsible for their luggage and belongings. Any damage caused to the vehicle by passengers will be charged.",
        ],
      },
      {
        heading: "Traveller Responsibilities",
        points: [
          "Please provide accurate details and carry valid government-issued photo ID for all travellers.",
          "Please be ready at the agreed pickup time and place. Waiting time beyond a reasonable limit may be charged.",
          "Follow local laws, hotel rules and the instructions of drivers and guides during the trip.",
        ],
      },
      {
        heading: "Changes to Your Trip",
        points: [
          "Itineraries may change due to weather, road conditions, traffic, strikes, government orders or other reasons beyond our control. We will try to offer a suitable alternative.",
          "Any extra cost arising from such changes, such as additional hotel nights or longer routes, is payable by the traveller.",
        ],
      },
      {
        heading: "Limitation of Liability",
        points: [
          "We act with reasonable care in arranging your travel, but we are not liable for loss, injury, delay, damage or expense caused by third-party suppliers, accidents, natural events or circumstances beyond our control.",
          "Our total liability for any claim is limited to the amount paid to us for the booking concerned.",
          "We recommend that travellers take suitable travel insurance.",
        ],
      },
      {
        heading: "Governing Law",
        points: [
          "These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts at Rajpipla, Narmada District, Gujarat.",
        ],
      },
    ],
  },
  {
    id: "cancellation-refund-policy",
    title: "Cancellation & Refund Policy",
    intro:
      "Cancellations must be requested through WhatsApp, phone or email. The date and time we receive your request is used to calculate charges.",
    sections: [
      {
        heading: "Taxi Bookings",
        points: [
          "More than 24 hours before pickup: full refund of the advance, less any transaction charges.",
          "Between 6 and 24 hours before pickup: 50% of the advance is refunded.",
          "Less than 6 hours before pickup, or no-show: no refund.",
        ],
      },
      {
        heading: "Tour Packages",
        points: [
          "More than 15 days before departure: 10% of the package cost is charged.",
          "Between 7 and 15 days before departure: 25% of the package cost is charged.",
          "Between 3 and 7 days before departure: 50% of the package cost is charged.",
          "Less than 3 days before departure, or no-show: no refund.",
          "Where hotels, trains, flights or other suppliers apply their own cancellation charges, those charges also apply and are deducted from the refund.",
        ],
      },
      {
        heading: "Refunds",
        points: [
          "Approved refunds are processed within 7–10 working days to the original payment method or a bank account you provide.",
          "No refund is given for unused services, or for any part of a trip missed after it has started.",
          "If we cancel a booking for reasons within our control, you will receive a full refund of the amount paid to us.",
          "If a trip is cancelled due to natural disasters, government orders or other events beyond our control, we will refund the amount remaining after deducting non-refundable supplier charges, or offer to reschedule.",
        ],
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    intro:
      "The content on this website is provided for general information only.",
    sections: [
      {
        heading: "Website Content",
        points: [
          "We try to keep the information on this website accurate and up to date, but we do not guarantee that destination details, timings, vehicle availability or other information are complete or current. Please confirm details with us before booking.",
          "Photos of destinations and vehicles are for illustration and the actual vehicle or view may differ.",
          "All content on this website, including text, logos and images, belongs to its respective owners and may not be copied or reused without permission.",
        ],
      },
      {
        heading: "Changes to These Policies",
        points: [
          "We may update these policies from time to time. The updated version will be posted on this page and applies to bookings made after that date.",
        ],
      },
    ],
  },
];

function Legal() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="bg-[#0d2d55] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 pt-4 text-center">
          <h1 className="hero-animate text-4xl font-normal tracking-tight text-white md:text-5xl">
            Legal & Policies
          </h1>

          <p
            className="hero-animate mx-auto mt-4 max-w-md text-[13px] font-medium leading-5 text-white/85"
            style={{ animationDelay: "150ms" }}
          >
            Our privacy policy, booking terms, cancellation rules
            <br className="hidden sm:block" />
            and disclaimer, all in one place.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[240px_1fr]">

          {/* Table of Contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              On this page
            </p>

            <ul className="mt-4 space-y-3 border-l border-slate-200">
              {policies.map((policy) => (
                <li key={policy.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(policy.id)}
                    className="-ml-px border-l-2 border-transparent pl-4 text-left text-sm text-slate-600 transition hover:border-orange-500 hover:text-[#0d2d55]"
                  >
                    {policy.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("contact-us")}
                  className="-ml-px border-l-2 border-transparent pl-4 text-left text-sm text-slate-600 transition hover:border-orange-500 hover:text-[#0d2d55]"
                >
                  Contact & Grievances
                </button>
              </li>
            </ul>
          </aside>

          {/* Policies */}
          <div className="min-w-0 space-y-16">
            {policies.map((policy) => (
              <article
                key={policy.id}
                id={policy.id}
                className="scroll-mt-28"
              >
                <h2 className="text-3xl font-normal tracking-tight text-[#0d2d55] md:text-4xl">
                  {policy.title}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                  {policy.intro}
                </p>

                <div className="mt-8 space-y-8">
                  {policy.sections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-lg font-medium text-[#0d2d55]">
                        {section.heading}
                      </h3>

                      <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-orange-500">
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            {/* Contact & Grievance Officer */}
            <article
              id="contact-us"
              className="scroll-mt-28 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8"
            >
              <h2 className="text-2xl font-normal tracking-tight text-[#0d2d55] md:text-3xl">
                Contact & Grievances
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                For questions about these policies, requests about your
                personal data, or any complaint, contact our grievance officer.
                We will acknowledge your complaint within 48 hours and aim to
                resolve it within 15 days.
              </p>

              <div className="mt-6 space-y-1 text-sm leading-6 text-slate-600">
                <p className="font-medium text-[#0d2d55]">{COMPANY}</p>
                <p>{ADDRESS}</p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+919586995291"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    {PHONE}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-orange-500 hover:text-orange-600"
                  >
                    {EMAIL}
                  </a>
                </p>
                <p>Mon–Sat: 10:00 AM – 6:00 PM</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Legal;
