import Title from "./Title";
import { useEffect, useState } from "react";
import ScrollCarousel from "scroll-carousel-react";
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
  return (
    <div>
      <Title title={title}></Title>

      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log("I am ready")}
      >
        {popularCars.map((car) => (
          <PopularCarCards key={car._id} car={car}></PopularCarCards>
        ))}

        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div
            key={item}
            className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48"
          >
            rerg
          </div>
        ))} */}
      </ScrollCarousel>
    </div>
  );
};

export default PopularMakesSection;
