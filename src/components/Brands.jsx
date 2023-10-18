import { useLoaderData } from "react-router-dom";
import Title from "./Title";
import { useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
  const title = {
    mainTitle: "Brands",
    subTitle: "Brands we deal with",
  };

  const loadedBrands = useLoaderData();
  const [brands, setBrands] = useState(loadedBrands);

  //   console.log(brands);

  return (
    <div className="max-w-screen-lg mx-auto border">
      <Title title={title}></Title>
      <div className="grid grid-cols-6 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
