import Title from "./Title";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopularCarCards from "./PopularCarCards";

const PopularMakesSection = () => {
  const title = {
    mainTitle: "Popular Makes",
    subTitle: "Autos that are high in demand",
  };

  const [popularCars, setPopularCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular-makes")
      .then((res) => res.json())
      .then((data) => {
        setPopularCars(data);
      });
  }, []);

  console.log(popularCars);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10 px-28 py-10 bg-[url('/public/home-bg.png')] bg-no-repeat bg-contain bg-right bg-fixed">
      <Title title={title}></Title>
      <div className="py-12">
        <Slider {...settings}>
          {popularCars.map((car) => (
            <PopularCarCards key={car._id} car={car}></PopularCarCards>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularMakesSection;
