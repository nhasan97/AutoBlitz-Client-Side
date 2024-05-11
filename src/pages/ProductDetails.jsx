import { useParams } from "react-router-dom";
import eng from "../../public/engine.jpg";
import tire from "../../public/tire.jpg";
import speedometer from "../../public/speedometer.jpg";
import Loading from "../components/Loading";
import useGetSingleCarDataAndSpecs from "../hooks/useGetSingleCarDataAndSpecs";

const ProductDetails = () => {
  const loadedCarId = useParams();

  //fetching single car data and specs
  const [loadingCar, loadedCar, loadingCarSpecs, loadedSpecs] =
    useGetSingleCarDataAndSpecs(loadedCarId.id);

  if (loadingCar || loadingCarSpecs) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="max-w-screen-xl mx-auto px-28 py-10">
        <div className="my-16 h-[calc(100vh-200px)] flex justify-center items-center">
          <div className="w-[80%] relative pr-5 mr-5 border-dashed border-r-2 border-red-500 ">
            <img
              src={loadedCar.imageUrl}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1000"
              className="w-full h-[490px]"
            />
            <h1
              // data-aos="fade-right"
              // data-aos-duration="1000"
              className="text-left font-rac text-[rgb(155,36,30)] text-9xl capitalize absolute bottom-0 translate-x-[-10%] translate-y-[50%]"
            >
              {loadedCar.name}
            </h1>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="w-[20%] h-full flex flex-col justify-center items-center gap-4 text-[rgba(255,255,255,.85)] text-lg"
          >
            <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm capitalize">
              <p>
                <span className="font-medium text-xl">Body Style | </span>
                {loadedSpecs.body}
              </p>
            </div>
            <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
              <p>
                <span className="font-medium text-xl">Segment | </span>
                {loadedSpecs.seg}
              </p>
            </div>
            <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
              <p>
                <span className="font-medium text-xl">Production | </span>
                {loadedSpecs.py}
              </p>
            </div>
            <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
              <p>
                <span className="font-medium text-xl">Dimension | </span>
                {loadedSpecs.d}
              </p>
            </div>
            <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
              <p>
                <span className="font-medium text-xl">Gross Weight | </span>
                {loadedSpecs.gw}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base text-center text-white pt-36  my-16">
            {loadedCar.description}
          </p>
        </div>

        <div className="py-10 my-16">
          <div
            className="text-[rgba(255,255,255,.65)] text-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="text-3xl font-medium font-rac">
              Engine /// {loadedSpecs.eng}
            </h2>
            <p className="text-xl">Power | {loadedSpecs.pow}</p>
            <p className="text-xl">Fuel | {loadedSpecs.fuel}</p>
            <p className="text-xl">Fuel Capacity | {loadedSpecs.fuelc}</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="800">
            <img src={eng} alt="" className="w-3/4 mx-auto" />
          </div>
        </div>

        <div className="py-10 my-16">
          <div
            className="text-[rgba(255,255,255,.65)] text-right"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <h2 className="text-3xl font-medium font-rac">
              Top Speed /// {loadedSpecs.ps}
            </h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <img src={speedometer} alt="" className="w-3/4 mx-auto" />
          </div>
        </div>

        <div className="py-10 mt-16">
          <div
            className="text-[rgba(255,255,255,.65)] text-left "
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <h2 className="text-3xl font-medium font-rac">
              Tire /// {loadedSpecs.ts}
            </h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <img src={tire} alt="" className="w-3/4 mx-auto" />
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
