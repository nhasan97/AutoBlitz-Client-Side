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

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-28 py-10">
      <Title title={title}></Title>
      <div className="flex items-center justify-center flex-wrap gap-6 mx-auto py-12 border-l border-[#df454596]">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
