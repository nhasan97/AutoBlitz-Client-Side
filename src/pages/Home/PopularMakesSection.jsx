import Title from "../../components/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "@tanstack/react-query";
import { getPopularCars } from "../../api/carsAPIs";
import NoData from "../../components/NoData";
import Loading from "../../components/Loading";
import CarCards from "../../components/CarCards";

const PopularMakesSection = () => {
  const title = {
    mainTitle: "Popular Makes",
    subTitle: "Autos that are high in demand",
  };

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  //fetching popular cars data
  const { isLoading: loadingPopularCars, data: popularCars } = useQuery({
    queryKey: ["getPopularCars"],
    queryFn: getPopularCars,
  });

  if (loadingPopularCars) {
    return <Loading />;
  }

  if (popularCars.length > 0) {
    return (
      <div className="max-w-screen-xl mx-auto my-10 px-28 py-10 bg-[url('/public/home-bg.png')] bg-no-repeat bg-contain bg-right bg-fixed">
        <Title title={title}></Title>
        <div className="py-12">
          <Slider {...settings}>
            {popularCars.map((car) => (
              <CarCards
                key={car._id}
                car={car}
                caller={"PopularMakesSection"}
              ></CarCards>
            ))}
          </Slider>
        </div>
      </div>
    );
  } else {
    return <NoData text="No Cars Found"></NoData>;
  }
};

export default PopularMakesSection;
