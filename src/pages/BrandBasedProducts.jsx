import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCarCards from "../components/BrandCarCards";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../../public/gridfiti.png";
import bn2 from "../../public/bmw.png";
import bn3 from "../../public/lamborghini1.jpg";

const BrandBasedProducts = () => {
  const loadedCars = useLoaderData();
  const [brandBasedCars, setBrandBasedCars] = useState(loadedCars);
  console.log(brandBasedCars);

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  if (loadedCars.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
        <h1 className="font-rac text-7xl font-bold text-white">
          Sorry no autos found
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="">
          <AutoplaySlider
            className="h-screen w-full"
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={1500}
          >
            <div data-src={bn1} />
            <div data-src={bn2} />
            <div data-src={bn3} />
          </AutoplaySlider>
        </div>
        <div className="max-w-screen-xl mx-auto px-28 py-20 grid grid-cols-3 gap-6 bg-[url('/public/prod-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
          {brandBasedCars.map((car) => (
            <BrandCarCards key={car._id} car={car}></BrandCarCards>
          ))}
        </div>
      </div>
    );
  }
};

export default BrandBasedProducts;
