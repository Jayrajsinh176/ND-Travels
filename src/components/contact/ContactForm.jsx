import { useState } from "react";

function ContactForm() {
  const [serviceType, setServiceType] = useState("Travel Enquiry");
  const [errors, setErrors] = useState({});

  // ND Tours and Travels WhatsApp number
  const whatsappNumber = "917069013142";

  const validateForm = (formData) => {
    const newErrors = {};

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const destination = formData.get("destination")?.trim();
    const vehicle = formData.get("vehicle");
    const pickupLocation = formData.get("pickupLocation")?.trim();
    const dropLocation = formData.get("dropLocation")?.trim();
    const pickupDate = formData.get("pickupDate");
    const pickupTime = formData.get("pickupTime");
    const message = formData.get("message")?.trim();

    // Full Name
    if (!name) {
      newErrors.name = "Please enter your full name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    // Email
    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone
    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    // Travel Enquiry
    if (serviceType === "Travel Enquiry") {
      if (!destination) {
        newErrors.destination = "Please enter your travel destination.";
      } else if (destination.length < 2) {
        newErrors.destination =
          "Please enter a valid travel destination.";
      }
    }

    // Private Taxi
    if (serviceType === "Private Taxi") {
      if (!vehicle) {
        newErrors.vehicle = "Please select a vehicle type.";
      }

      if (!pickupLocation) {
        newErrors.pickupLocation = "Please enter the pickup location.";
      } else if (pickupLocation.length < 2) {
        newErrors.pickupLocation =
          "Please enter a valid pickup location.";
      }

      if (!dropLocation) {
        newErrors.dropLocation = "Please enter the drop location.";
      } else if (dropLocation.length < 2) {
        newErrors.dropLocation =
          "Please enter a valid drop location.";
      }

      if (!pickupDate) {
        newErrors.pickupDate = "Please select the pickup date.";
      } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = new Date(`${pickupDate}T00:00:00`);

        if (selectedDate < today) {
          newErrors.pickupDate =
            "Pickup date cannot be in the past.";
        }
      }

      if (!pickupTime) {
        newErrors.pickupTime = "Please select the pickup time.";
      }
    }

    // Message
    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    return newErrors;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const newErrors = validateForm(formData);

  setErrors(newErrors);

  // Stop if validation fails
  if (Object.keys(newErrors).length > 0) {
    return;
  }

  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const phone = formData.get("phone").trim();
  const destination = formData.get("destination")?.trim();
  const vehicle = formData.get("vehicle");
  const pickupLocation = formData.get("pickupLocation")?.trim();
  const dropLocation = formData.get("dropLocation")?.trim();
  const pickupDate = formData.get("pickupDate");
  const pickupTime = formData.get("pickupTime");
  const message = formData.get("message").trim();

  let whatsappMessage = `Hello ND Tours and Travels,

I would like to make an enquiry.

Service: ${serviceType}

Full Name: ${name}
Email: ${email}
Phone Number: ${phone}`;

  if (serviceType === "Travel Enquiry") {
    whatsappMessage += `

Travel Destination: ${destination}`;
  }

  if (serviceType === "Private Taxi") {
    whatsappMessage += `

Vehicle Type: ${vehicle}
Pickup Location: ${pickupLocation}
Drop Location: ${dropLocation}
Pickup Date: ${pickupDate}
Pickup Time: ${pickupTime}`;
  }

  whatsappMessage += `

Message:
${message}

Thank you.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Open WhatsApp
  window.open(whatsappUrl, "_blank");

  // Reset the form
  form.reset();

  // Reset service type
  setServiceType("Travel Enquiry");

  // Clear validation errors
  setErrors({});

  // Reload the page after a short delay
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((previousErrors) => {
        const updatedErrors = { ...previousErrors };
        delete updatedErrors[field];
        return updatedErrors;
      });
    }
  };

  const inputClass = (field) =>
    `w-full rounded-lg border bg-white px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-slate-200 focus:border-[#0d2d55]"
    }`;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="reveal reveal-left">
            <h2 className="max-w-lg text-4xl font-normal leading-tight tracking-tight text-[#0d2d55] md:text-5xl">
              Let’s Plan Your Next
              <br />
              Journey Together
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-6 text-slate-600">
              Let’s plan your next journey together with personalized travel
              experiences designed around your dreams.
            </p>

            {/* Visit Us */}
            <div className="mt-28">
              <h3 className="text-2xl font-normal text-[#0d2d55]">
                Visit Us
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
                Shop No. 9, Avadhut Avenue Complex, Near Kalaghoda Circle,
                Rajpipla, Gujarat 393145, India
              </p>
            </div>

            {/* Call or Email */}
            <div className="mt-7">
              <h3 className="text-2xl font-normal text-[#0d2d55]">
                Call or Email Us
              </h3>

              <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600">
                <p>+91 9586995291</p>
                <p>Mon–Sat: 10:00 AM – 6:00 PM</p>
                <p>info@ndtoursandtravels.com</p>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="reveal reveal-right rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >

              {/* Service Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                  How can we help you?
                </label>

                <select
                  name="serviceType"
                  value={serviceType}
                  onChange={(e) => {
                    setServiceType(e.target.value);
                    setErrors({});
                  }}
                  className={inputClass("serviceType")}
                >
                  <option value="Travel Enquiry">
                    Travel / Destination Enquiry
                  </option>

                  <option value="Private Taxi">
                    Private Taxi Booking
                  </option>
                </select>
              </div>

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={inputClass("name")}
                    onInput={() => clearError("name")}
                  />

                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className={inputClass("email")}
                    onInput={() => clearError("email")}
                  />

                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Destination / Vehicle */}
              <div className="grid gap-5 md:grid-cols-2">

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10-digit mobile number"
                    inputMode="numeric"
                    maxLength="10"
                    autoComplete="tel"
                    className={inputClass("phone")}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                      clearError("phone");
                    }}
                  />

                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Travel Destination */}
                {serviceType === "Travel Enquiry" ? (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                      Travel Destination
                    </label>

                    <input
                      type="text"
                      name="destination"
                      placeholder="Enter your destination"
                      className={inputClass("destination")}
                      onInput={() => clearError("destination")}
                    />

                    {errors.destination && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.destination}
                      </p>
                    )}
                  </div>
                ) : (
                  /* Vehicle Type */
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                      Vehicle Type
                    </label>

                    <select
                      name="vehicle"
                      defaultValue=""
                      className={inputClass("vehicle")}
                      onChange={() => clearError("vehicle")}
                    >
                      <option value="" disabled>
                        Select vehicle type
                      </option>

                      <option value="Sedan">
                        Sedan
                      </option>

                      <option value="SUV">
                        SUV
                      </option>

                      <option value="Luxury Car">
                        Luxury Car
                      </option>

                      <option value="Tempo Traveller">
                        Tempo Traveller
                      </option>
                    </select>

                    {errors.vehicle && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.vehicle}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ================= TAXI FIELDS ================= */}
              {serviceType === "Private Taxi" && (
                <>
                  {/* Pickup + Drop */}
                  <div className="grid gap-5 md:grid-cols-2">

                    {/* Pickup */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                        Pickup Location
                      </label>

                      <input
                        type="text"
                        name="pickupLocation"
                        placeholder="Enter pickup location"
                        className={inputClass("pickupLocation")}
                        onInput={() => clearError("pickupLocation")}
                      />

                      {errors.pickupLocation && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.pickupLocation}
                        </p>
                      )}
                    </div>

                    {/* Drop */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                        Drop Location
                      </label>

                      <input
                        type="text"
                        name="dropLocation"
                        placeholder="Enter drop location"
                        className={inputClass("dropLocation")}
                        onInput={() => clearError("dropLocation")}
                      />

                      {errors.dropLocation && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.dropLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date + Time */}
                  <div className="grid gap-5 md:grid-cols-2">

                    {/* Pickup Date */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                        Pickup Date
                      </label>

                      <input
                        type="date"
                        name="pickupDate"
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass("pickupDate")}
                        onChange={() => clearError("pickupDate")}
                      />

                      {errors.pickupDate && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.pickupDate}
                        </p>
                      )}
                    </div>

                    {/* Pickup Time */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                        Pickup Time
                      </label>

                      <input
                        type="time"
                        name="pickupTime"
                        className={inputClass("pickupTime")}
                        onChange={() => clearError("pickupTime")}
                      />

                      {errors.pickupTime && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.pickupTime}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0d2d55]">
                  Message
                </label>

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Type your message here"
                  className={inputClass("message")}
                  onInput={() => clearError("message")}
                ></textarea>

                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="rounded-full bg-orange-500 px-12 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-orange-600 hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* ================= LOCATION MAP ================= */}
        <div className="reveal reveal-up mt-16 overflow-hidden rounded-xl border border-slate-200">
          <div className="h-[380px] w-full md:h-[450px]">
            <iframe
              title="ND Tours and Travels Location"
              src="https://www.google.com/maps?q=Avadhut+Avenue+Complex,+Kalaghoda+Circle,+Rajpipla,+Gujarat+393145,+India&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
