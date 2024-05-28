import Title from "../../../components/shared/Title";
import car from "../../../assets/offer.jpg";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney, GiTrade } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import Container from "../../../components/shared/Container";
import OfferCards from "./OfferCards";

const OfferSection = () => {
  const title = {
    mainTitle: "Offers",
    subTitle: "Always ready at your service",
  };
  //  border-l border-[#df454596]
  return (
    <Container>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div
          className="w-full lg:w-2/3 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <img src={car} alt="" className="w-full" />
        </div>

        <div
          className="w-full lg:w-1/3"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <Title title={title}></Title>
          <div className="py-12 space-y-6">
            {/* offer1 */}
            <OfferCards
              icon={
                <AiFillSafetyCertificate className="text-5xl text-red-500 "></AiFillSafetyCertificate>
              }
              offerCardTitle={"Safe Purchase"}
              offerCardDescription={
                "Puchase high quality product with out worry"
              }
            ></OfferCards>

            {/* offer2 */}
            <OfferCards
              icon={
                <GiReceiveMoney className="text-5xl text-red-500 "></GiReceiveMoney>
              }
              offerCardTitle={"Financing"}
              offerCardDescription={"Get your dream car at an attractive price"}
            ></OfferCards>

            {/* offer3 */}
            <OfferCards
              icon={<GiTrade className="text-5xl text-red-500 "></GiTrade>}
              offerCardTitle={"Trade in Service"}
              offerCardDescription={
                "Exchange your old car to get up to 50% discount"
              }
            ></OfferCards>

            {/* offer4 */}
            <OfferCards
              icon={
                <MdMiscellaneousServices className="text-5xl text-red-500 "></MdMiscellaneousServices>
              }
              offerCardTitle={"1 year warranty"}
              offerCardDescription={
                "Warranty covers repairs, replacements and refund"
              }
            ></OfferCards>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default OfferSection;
