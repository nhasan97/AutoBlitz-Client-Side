import Banner from "../components/Banner";
import Brands from "../components/Brands";
import OfferSection from "../components/OfferSection";
import PopularMakesSection from "../components/PopularMakesSection";
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
