import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "917069013142"; // Your actual WhatsApp number

  const message =
    "Hello ND Tours and Travels, I’m interested in your travel packages and would like to know more about the available options. Could you please assist me?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ND Tours and Travels on WhatsApp"
      className="hero-animate fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      style={{ animationDelay: "600ms" }}
    >
      <FaWhatsapp className="text-[40px]" />
    </a>
  );
}

export default WhatsAppButton;