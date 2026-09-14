import AboutHero from "../components/about/AboutHero";
import AboutServices from "../components/about/AboutServices";
import AboutCompany from "../components/about/AboutCompany";
import QuickSteps from "../components/QuickSteps";

function About() {
  return (
    <main>
      <AboutHero />
      <AboutCompany />
        <AboutServices />
        <QuickSteps />

    </main>
  );
}

export default About;