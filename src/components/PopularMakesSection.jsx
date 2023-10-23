import Title from "./Title";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopularCarCards from "./PopularCarCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const displayToast = (msg) => {
    if (msg === "success") {
      toast.success("Added to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error! Not Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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

  return (
    <div className="max-w-screen-xl mx-auto my-10 px-28 py-10 bg-[url('/public/home-bg.png')] bg-no-repeat bg-contain bg-right bg-fixed">
      <Title title={title}></Title>
      <div className="py-12">
        <Slider {...settings}>
          {popularCars.map((car) => (
            <PopularCarCards
              key={car._id}
              car={car}
              displayToast={displayToast}
            ></PopularCarCards>
          ))}
        </Slider>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PopularMakesSection;
