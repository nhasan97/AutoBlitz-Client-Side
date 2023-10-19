import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCarCards from "../components/BrandCarCards";

const BrandBasedProducts = () => {
  const loadedCars = useLoaderData();
  const [brandBasedCars, setBrandBasedCars] = useState(loadedCars);
  console.log(brandBasedCars);
  if (loadedCars.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
        <h1 className="font-rac text-7xl font-bold">Sorry no autos found</h1>
      </div>
    );
  } else {
    return (
      <div className="max-w-screen-xl mx-auto pt-32 grid grid-cols-4 gap-6 border border-red-600">
        {brandBasedCars.map((car) => (
          <BrandCarCards key={car._id} car={car}></BrandCarCards>
        ))}
      </div>
    );
  }
};

export default BrandBasedProducts;
