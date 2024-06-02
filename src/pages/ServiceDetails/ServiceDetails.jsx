import { Link, useParams } from "react-router-dom";
import FacilityCard from "./FacilityCard";
import useGetSingleServiceDetails from "../../hooks/useGetSingleServiceDetails";
import Loading from "../../components/shared/Loading";
import Container from "../../components/shared/Container";

const ServiceDetails = () => {
  const loadedServiceId = useParams();

  const [loadingServiceDetails, loadedService] = useGetSingleServiceDetails(
    loadedServiceId.id
  );

  if (loadingServiceDetails) {
    return <Loading></Loading>;
  } else {
    return (
      <Container>
        <div>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-6 py-12">
            <div className="lg:col-span-2">
              <h1 className="text-[rgba(255,255,255,.65)] font-rac text-2xl md:text-3xl lg:text-4xl font-bold">
                {loadedService.serviceName}
              </h1>

              <div className="py-10 space-y-6">
                <img
                  src={loadedService.servicePhoto}
                  alt=""
                  className="w-full rounded-lg"
                />

                <p className="font-int text-[#737373] text-sm md:text-base text-justify leading-7">
                  {loadedService.serviceDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {loadedService.facilities.map((facility) => (
                    <FacilityCard
                      key={facility.facilityName}
                      facility={facility}
                    ></FacilityCard>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-6">
              <p className="text-[#151515] text-4xl font-bold">
                Price $<span>{loadedService.servicePrice}</span>
              </p>

              <button className="btn w-full bg-red-600 text-white">
                Add to list
              </button>

              <Link
                to={`/service-booking/${loadedService._id}`}
                className="btn w-full bg-red-600 text-white"
              >
                Proceed Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  }
};

export default ServiceDetails;
