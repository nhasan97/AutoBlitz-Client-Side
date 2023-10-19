import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadedCar = useLoaderData();
  console.log(loadedCar.name);

  useEffect(() => {
    fetch(`http://localhost:5000/car-features/${loadedCar.name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-6xl">{loadedCar.description}</h1>
      <img src={loadedCar.imageUrl} alt="" />
    </div>
  );
};

export default ProductDetails;
