import Title from "./Title";
import car from "../assets/offer.jpg";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney, GiTrade } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";

const OfferSection = () => {
  const title = {
    mainTitle: "Offers",
    subTitle: "Always ready at your service",
  };
  //  border-l border-[#df454596]
  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-28 py-10">
      <div className="flex justify-center items-center">
        <div
          className="w-2/3 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img src={car} alt="" className="w-full" />
        </div>

        <div
          className="w-1/3"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <Title title={title}></Title>
          <div className="my-10 space-y-6">
            {/* offer1 */}
            <div className="flex justify-center items-start gap-3">
              <AiFillSafetyCertificate className="text-5xl text-red-500 "></AiFillSafetyCertificate>
              <div className="border-l border-red-500 pl-5">
                <h1 className="text-xl text-[rgba(255,255,255,0.9)] font-semibold">
                  Safe Purchase
                </h1>
                <p className="text-[rgba(255,255,255,0.75)]">
                  Puchase high quality product with out worry
                </p>
              </div>
            </div>

            {/* offer2 */}
            <div className="flex justify-center items-start gap-3">
              <GiReceiveMoney className="text-5xl text-red-500 "></GiReceiveMoney>
              <div className="border-l border-red-500 pl-5">
                <h1 className="text-xl text-[rgba(255,255,255,0.9)] font-semibold">
                  Financing
                </h1>
                <p className="text-[rgba(255,255,255,0.75)]">
                  Get your dream car at an attractive price
                </p>
              </div>
            </div>

            {/* offer3 */}
            <div className="flex justify-center items-start gap-3">
              <GiTrade className="text-5xl text-red-500 "></GiTrade>
              <div className="border-l border-red-500 pl-5">
                <h1 className="text-xl text-[rgba(255,255,255,0.9)] font-semibold">
                  Trade in Service
                </h1>
                <p className="text-[rgba(255,255,255,0.75)]">
                  Exchange your old car to get up to 50% discount
                </p>
              </div>
            </div>

            {/* offer4 */}
            <div className="flex justify-center items-start gap-3">
              <MdMiscellaneousServices className="text-5xl text-red-500 "></MdMiscellaneousServices>
              <div className="border-l border-red-500 pl-5">
                <h1 className="text-xl text-[rgba(255,255,255,0.9)] font-semibold">
                  1 year warranty
                </h1>
                <p className="text-[rgba(255,255,255,0.75)]">
                  Warranty covers repairs, replacements and refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
