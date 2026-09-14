import TaxiHero from "../components/taxi/TaxiHero";
import TaxiFare from "../components/taxi/TaxiFare";
import TaxiServices from "../components/taxi/TaxiServices";

function TaxiService() {
  return (
    <>
      <TaxiHero />
      <TaxiFare />
      <TaxiServices/>
    </>
  );
}

export default TaxiService;