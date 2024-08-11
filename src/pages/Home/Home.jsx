import { ToastContainer } from "react-toastify";
import Banner from "./Banner";
import Brands from "./Brands/Brands";
import OfferSection from "./OfferSection/OfferSection";
import PopularMakesSection from "./PopularMakesSection";
import Services from "./Services/Services";

//bg-black
const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Brands></Brands>
      <OfferSection></OfferSection>
      <PopularMakesSection></PopularMakesSection>
      <Services></Services>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Home;
