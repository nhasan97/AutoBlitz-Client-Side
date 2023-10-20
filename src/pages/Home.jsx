import Banner from "../components/Banner";
import Brands from "../components/Brands";
import OfferSection from "../components/OfferSection";
import PopularMakesSection from "../components/PopularMakesSection";

const Home = () => {
  return (
    <div className="bg-black">
      <Banner></Banner>
      <Brands></Brands>
      {/* <PopularMakesSection></PopularMakesSection> */}
      <OfferSection></OfferSection>
    </div>
  );
};

export default Home;
