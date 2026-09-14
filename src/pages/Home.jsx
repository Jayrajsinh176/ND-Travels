import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import PopularDestinations from "../components/PopularDestinations";
import QuickSteps from "../components/QuickSteps";
import Hometaxi from "../components/Hometaxi";
import TravelBenefits from "../components/TravelBenefits";
import Testimonials from "../components/Testimonials";


function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <PopularDestinations />
      <QuickSteps />
      <Hometaxi />  
      <TravelBenefits />
      <Testimonials />
    </>
  );
}

export default Home;