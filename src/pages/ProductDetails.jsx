import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import eng from "../../public/engine.jpg";
import tire from "../../public/tire.jpg";

const ProductDetails = () => {
  const loadedCar = useLoaderData();
  const [loadedSpecs, setLoadedSpecs] = useState([]);

  console.log(loadedCar.name);

  useEffect(() => {
    fetch(`http://localhost:5000/car-specs/${loadedCar.name}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadedSpecs(data);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-28 py-10">
      <div className="my-16">
        <div className="relative">
          <img
            src={loadedCar.imageUrl}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full h-[550px]"
          />
          <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 translate-x-[0%] translate-y-[50%]">
            <h1 className="font-rac text-black text-7xl">{loadedCar.name}</h1>
            <div className="grid grid-cols-3 justify-center items-center gap-6">
              <div className="p-8 bg-gray-600 text-white rounded text-2xl font-bold">
                {loadedSpecs.body}
              </div>
              <div className="p-8 bg-gray-600 text-white rounded text-2xl font-bold">
                {loadedSpecs.seg}
              </div>
              <div className="p-8 bg-gray-600 text-white rounded text-2xl font-bold">
                {loadedSpecs.py}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-base text-white mt-32">{loadedCar.description}</p>
      </div>
      <div className="py-10 mt-20">
        <div className="text-[rgba(255,255,255,.65)] text-left ">
          <h2 className="text-3xl font-medium font-rac">
            Engine /// {loadedSpecs.eng}
          </h2>
          <p className="text-xl">Power | {loadedSpecs.pow}</p>
          <p className="text-xl">Fuel | {loadedSpecs.fuel}</p>
          <p className="text-xl">Fuel Capacity | {loadedSpecs.fuelc}</p>
        </div>
        <div>
          <img src={eng} alt="" className="w-3/4 mx-auto" />
        </div>
      </div>

      <div className="py-10 mt-32">
        <div className="text-[rgba(255,255,255,.65)] text-right ">
          <h2 className="text-3xl font-medium font-rac">
            Tire /// {loadedSpecs.ts}
          </h2>
        </div>
        <div>
          <img src={tire} alt="" className="w-3/4 mx-auto" />
        </div>
      </div>

      <div className="">
        <div className="text-[rgba(255,255,255,.65)] text-left mb-16">
          <h2 className="text-3xl font-medium font-rac">Other Specs ///</h2>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="p-8 bg-[rgba(255,255,255,.65)] rounded text-2xl font-bold">
            {loadedSpecs.ps}
          </div>
          <div className="p-8 bg-[rgba(255,255,255,.65)] rounded text-2xl font-bold">
            {loadedSpecs.d}
          </div>
          <div className="p-8 bg-[rgba(255,255,255,.65)] rounded text-2xl font-bold">
            {loadedSpecs.gw}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
