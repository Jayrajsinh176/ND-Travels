import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Upfooter from "./components/upfooter";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";

import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import TaxiService from "./pages/TaxiService";

import DestinationDetailHero from "./components/destination/DestinationDetailHero";
import DestinationDetail from "./components/destination/DestinationDetail";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollReveal />

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Destinations */}
        <Route path="/destinations" element={<Destination />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Taxi Services */}
        <Route path="/taxi-services" element={<TaxiService />} />


        {/* Destination Detail */}
        <Route
          path="/destinations/:slug"
          element={
            <>
              <DestinationDetailHero />
              <DestinationDetail />
            </>
          }
        />
        
        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Legal */}
        <Route path="/legal" element={<Legal />} />

      </Routes>

      <Upfooter />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;