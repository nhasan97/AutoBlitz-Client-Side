import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import bn1 from "../../public/Picture1.png";
import bn2 from "../../public/gridfiti.png";
import bn3 from "../../public/bmw.png";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useGetBrandsBasedCars from "../hooks/useGetBrandsBasedCars";
import CarCards from "../components/CarCards";
import Loading from "../components/shared/Loading";
import NoData from "../components/shared/NoData";
import Container from "../components/shared/Container";
import { useQuery } from "@tanstack/react-query";
import { getSingleBrand } from "../api/brandAPIs";

const BrandBasedProducts = () => {
  const loadedBrandName = useParams();

  //fetching brand based data
  const [loadingBrandBasedCars, brandBasedCars] = useGetBrandsBasedCars(
    loadedBrandName.name
  );

  //fetching brand it self
  const { isLoading: loadingBrand, data: brand } = useQuery({
    queryKey: ["getSingleBrand"],
    queryFn: () => getSingleBrand(loadedBrandName.name),
  });

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 4000,
  //   autoplaySpeed: 4000,
  //   cssEase: "linear",
  // };

  // const style = {
  //   background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)),url('${brand.image}');`,
  // };

  if (loadingBrandBasedCars || loadingBrand) {
    return <Loading />;
  }

  if (brandBasedCars.length > 0) {
    return (
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          {/* <div className="max-w-screen-xl mx-auto px-28 pt-20">
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

          <div
            // style={style}
            className={`w-full h-full flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 border-b`}
          >
            <img
              src={brand.image}
              className="w-[50%] sm:w-[20%] animate-pulse"
              alt=""
            />
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[rgba(255,255,255,.65)] animate-pulse">
              | {brand.name}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-12 bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
            {brandBasedCars.map((car) => (
              <CarCards
                key={car._id}
                car={car}
                caller={"BrandBasedProducts"}
              ></CarCards>
            ))}
          </div>
          {/* <ToastContainer /> */}
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <NoData text="Sorry no autos found"></NoData>
      </Container>
      // <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
      //   <h1 className="font-rac text-7xl font-bold text-white">
      //     Sorry no autos found
      //   </h1>
      // </div>
    );
  }
};

export default BrandBasedProducts;
