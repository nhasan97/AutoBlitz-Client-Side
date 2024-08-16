import Container from "../components/shared/Container";
import ServiceSearcher from "../components/shared/Searcher/ServiceSearcher";
import useGetServices from "../hooks/useGetServices";
import { useState } from "react";
import NoData from "../components/shared/NoData";
import Loading from "../components/shared/Loading";
import ServiceCard from "../components/ServiceCard";
import { Helmet } from "react-helmet-async";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import bn1 from "../../public/Picture1.png";
// import bn2 from "../../public/gridfiti.png";
// import bn3 from "../../public/bmw.png";

const AllServices = () => {
  //fetching Service data
  const [loadingServices, services] = useGetServices();

  const [search, setSearch] = useState("");

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 4000,
  //     autoplaySpeed: 4000,
  //     cssEase: "linear",
  //   };

  if (loadingServices) {
    return <Loading />;
  }

  if (services.length > 0) {
    return (
      <div className="bg-[url('/public/car-care.webp')] bg-[rgba(0,0,0,0.96)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <Container>
          <div className="w-full flex flex-col justify-center items-center">
            <Helmet>
              <title>AutoBlitz | All Services</title>
            </Helmet>

            {/* <div className="w-full">
             <Slider {...settings}>
              <div>
                <img src={bn1} alt="" className="w-full h-[530px]" />
              </div>
              <div>
                <img src={bn2} alt="" className="w-full h-[530px]" />
              </div>
              <div>
                <img src={bn3} alt="" className="w-full h-[530px]" />
              </div>
              <div>
                <img src={bn1} alt="" className="w-full h-[530px]" />
              </div>
              <div>
                <img src={bn2} alt="" className="w-full h-[530px]" />
              </div>
              <div>
                <img src={bn3} alt="" className="w-full h-[530px]" />
              </div>
            </Slider> 
          </div> */}

            <ServiceSearcher setSearch={setSearch}></ServiceSearcher>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-12">
              {services
                .filter((service) => {
                  return search.toLowerCase() === ""
                    ? service
                    : service.serviceName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                        service.serviceDescription
                          .toLowerCase()
                          .includes(search.toLowerCase());
                })
                .map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))}
            </div>
            {/* <ToastContainer /> */}
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <Container>
        <NoData text="Sorry no autos found"></NoData>
      </Container>
    );
  }
};

export default AllServices;
