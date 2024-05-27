import { Link } from "react-router-dom";
// import HomeSectionHeading from "./HomeSectionHeading";
import ServiceCard from "./ServiceCard";
import useGetServices from "../../../hooks/useGetServices";
import Loading from "../../../components/Loading";
import NoData from "../../../components/NoData";

const Services = () => {
  const mainTitle = "Service";
  const subTitle = "Our Service Area";
  const paragraph =
    "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";

  const heading = { mainTitle, subTitle, paragraph };

  const [loadingServices, services] = useGetServices();

  if (loadingServices) {
    return <Loading></Loading>;
  }

  if (services.length > 0) {
    return (
      <div className="min-h-screen">
        {/* <HomeSectionHeading heading={heading}></HomeSectionHeading> */}
        <div className="grid grid-cols-3 gap-6 py-12">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6">
          <button className="btn bg-transparent border border-[#FF3811] text-[#FF3811]">
            More Services
          </button>
        </div>
      </div>
    );
  } else {
    return <NoData text="No services found"></NoData>;
  }
};

export default Services;
