import { Link, useParams } from "react-router-dom";
// import SharedBanner from "../shared/SharedBanner";
import FacilityCard from "./FacilityCard";
import useGetSingleServiceDetails from "../../hooks/useGetSingleServiceDetails";
import Loading from "../../components/shared/Loading";

const ServiceDetails = () => {
  const loadedServiceId = useParams();

  const [loadingServiceDetails, loadedService] = useGetSingleServiceDetails(
    loadedServiceId.id
  );

  const title = {
    mainTitle: "Service Details",
    subTitle: "Home/Service Details",
  };

  if (loadingServiceDetails) {
    return <Loading></Loading>;
  } else {
    return (
      <div>
        {/* <SharedBanner title={title}></SharedBanner> */}

        <div className="grid grid-cols-3 gap-6 py-12">
          <div className="col-span-2  border">
            <img
              src={loadedService.img}
              alt=""
              className="w-full h-[400px] rounded-lg"
            />

            <div className="py-10 space-y-6">
              <h1 className="text-[#151515] text-4xl font-bold">
                {loadedService.title}
              </h1>

              <p className="text-[#737373] text-base text-justify leading-7">
                {loadedService.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {loadedService.facility.map((facility) => (
                  <FacilityCard
                    key={facility.name}
                    facility={facility}
                  ></FacilityCard>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-6 border">
            <p className="text-[#151515] text-4xl font-bold">
              Price $<span>{loadedService.price}</span>
            </p>
            <Link
              to={`/service-booking/${loadedService.id}`}
              className="btn w-full bg-[#FF3811] text-white"
            >
              Proceed Checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ServiceDetails;
