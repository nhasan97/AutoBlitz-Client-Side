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
import Container from "../../components/shared/Container";

const PopularMakesSection = () => {
  const title = {
    mainTitle: "Popular Makes",
    subTitle: "Autos that are high in demand",
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <Container>
        <div className="w-full bg-[url('/public/home-bg.png')] bg-no-repeat bg-contain bg-right bg-fixed">
          <Title title={title}></Title>

          <div className="w-[90%] md:w-full mx-auto py-12">
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
      </Container>
    );
  } else {
    return <NoData text="No Cars Found"></NoData>;
  }
};

export default PopularMakesSection;
