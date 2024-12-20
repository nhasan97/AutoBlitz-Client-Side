import useGetServices from "../../../hooks/useGetServices";
import Loading from "../../../components/shared/Loading";
import NoData from "../../../components/shared/NoData";
import Container from "../../../components/shared/Container";
import Title from "../../../components/shared/Title";
import ServiceCard from "../../../components/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const title = {
    mainTitle: "Services",
    subTitle: "Our Service Area",
  };

  const [loadingServices, services] = useGetServices();

  if (loadingServices) {
    return <Loading></Loading>;
  }

  if (services.length > 0) {
    return (
      <Container>
        <div className="w-full flex flex-col justify-center items-center bg-[url('/public/home-bg.png')] bg-no-repeat bg-contain bg-right bg-fixed">
          <Title title={title}></Title>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-12">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/all-servicing"
              className="btn bg-transparent border border-red-600 text-red-600"
            >
              More Services
            </Link>
          </div>
        </div>
      </Container>
    );
  } else {
    return <NoData text="No services found"></NoData>;
  }
};

export default Services;
