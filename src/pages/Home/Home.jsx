import Banner from "./Banner";
import Brands from "./Brands/Brands";
import OfferSection from "./OfferSection";
import PopularMakesSection from "./PopularMakes/PopularMakesSection";

//bg-black
const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Brands></Brands>
      <OfferSection></OfferSection>
      <PopularMakesSection></PopularMakesSection>
    </div>
  );
};

export default Home;
