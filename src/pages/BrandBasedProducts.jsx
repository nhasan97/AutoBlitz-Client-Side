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

const BrandBasedProducts = () => {
  const loadedBrandName = useParams();

  //fetching brand based data
  const [loadingBrandBasedCars, brandBasedCars] = useGetBrandsBasedCars(
    loadedBrandName.name
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  if (loadingBrandBasedCars) {
    return <Loading />;
  }

  if (brandBasedCars.length > 0) {
    return (
      <div>
        <div className="max-w-screen-xl mx-auto px-28 pt-20">
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
            {/* <div>
              <img src={bn1} alt="" className="w-full h-[530px]" />
            </div>
            <div>
              <img src={bn2} alt="" className="w-full h-[530px]" />
            </div>
            <div>
              <img src={bn3} alt="" className="w-full h-[530px]" />
            </div> */}
          </Slider>
        </div>
        <div className="max-w-screen-xl mx-auto px-28 py-12 grid grid-cols-3 gap-6 bg-[url('/public/prod-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
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
    );
  } else {
    return (
      <NoData text="Sorry no autos found"></NoData>
      // <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
      //   <h1 className="font-rac text-7xl font-bold text-white">
      //     Sorry no autos found
      //   </h1>
      // </div>
    );
  }
};

export default BrandBasedProducts;
