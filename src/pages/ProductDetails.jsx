import { useParams } from "react-router-dom";
import eng from "../../public/engine.jpg";
import tire from "../../public/tire.jpg";
import speedometer from "../../public/speedometer.jpg";
import Loading from "../components/shared/Loading";
import useGetSingleCarDataAndSpecs from "../hooks/useGetSingleCarDataAndSpecs";
import Container from "../components/shared/Container";

const ProductDetails = () => {
  const loadedCarId = useParams();

  //fetching single car data and specs
  const [loadingCar, loadedCar] = useGetSingleCarDataAndSpecs(loadedCarId.id);

  console.log(loadedCar);

  if (loadingCar) {
    return <Loading></Loading>;
  } else {
    return (
      <Container>
        <div className="w-full flex flex-col lg:justify-center lg:items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-[80%] relative lg:pr-5 lg:mr-5 lg:border-dashed lg:border-r-2 border-red-500 ">
              <img
                src={loadedCar.imageUrl}
                alt=""
                // data-aos="fade-left"
                // data-aos-duration="1000"
                className="w-full h-[250px] md:h-[400px] lg:h-[490px]"
              />
              <h1
                // data-aos="fade-right"
                // data-aos-duration="1000"
                className="text-left font-rac text-[rgb(155,36,30)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl capitalize absolute bottom-0 translate-y-[50%]"
              >
                {loadedCar.name}
              </h1>
            </div>

            <div
              // data-aos="fade-down"
              // data-aos-duration="1000"
              className="w-full lg:w-[20%] h-full flex flex-col justify-center items-center gap-4 text-[rgba(255,255,255,.85)] text-lg mt-12"
            >
              <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm capitalize">
                <p>
                  <span className="font-medium text-base">Body Style | </span>
                  {loadedCar.body}
                </p>
              </div>
              <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
                <p>
                  <span className="font-medium text-base">Segment | </span>
                  {loadedCar.seg}
                </p>
              </div>
              <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
                <p>
                  <span className="font-medium text-base">Production | </span>
                  {loadedCar.py}
                </p>
              </div>
              <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
                <p>
                  <span className="font-medium text-base">Dimension | </span>
                  {loadedCar.d}
                </p>
              </div>
              <div className="w-full p-3 bg-[rgb(48,48,48)]  rounded backdrop-blur-sm">
                <p>
                  <span className="font-medium text-base">Gross Weight | </span>
                  {loadedCar.gw}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base text-center text-white mt-12 md:my-16 lg:pt-16 lg:my-16">
              {loadedCar.description}
            </p>
          </div>

          <div className="w-full mt-12 md:my-16 lg:my-16">
            <div
              className="text-[rgba(255,255,255,.65)] text-left"
              // data-aos="fade-right"
              // data-aos-duration="800"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium font-rac">
                Engine /// {loadedCar.eng}
              </h2>
              <p className="text-base lg:text-xl">Power | {loadedCar.pow}</p>
              <p className="text-base lg:text-xl">Fuel | {loadedCar.fuel}</p>
              <p className="text-base lg:text-xl">
                Fuel Capacity | {loadedCar.fuelc}
              </p>
            </div>

            <div
            // data-aos="fade-left" data-aos-duration="800"
            >
              <img src={eng} alt="" className="w-3/4 sm:w-1/2 mx-auto" />
            </div>
          </div>

          <div className="w-full mt-12 md:my-16 lg:my-16">
            <div
              className="text-[rgba(255,255,255,.65)] text-right"
              // data-aos="fade-right"
              // data-aos-duration="800"
              // data-aos-delay="500"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium font-rac">
                Top Speed /// {loadedCar.ps}
              </h2>
            </div>
            <div
            // data-aos="fade-left"
            // data-aos-duration="800"
            // data-aos-delay="500"
            >
              <img
                src={speedometer}
                alt=""
                className="w-3/4 sm:w-1/2 mx-auto"
              />
            </div>
          </div>

          <div className="w-full mt-12 md:my-16 lg:my-16">
            <div
              className="text-[rgba(255,255,255,.65)] text-left "
              // data-aos="fade-right"
              // data-aos-duration="800"
              // data-aos-delay="1000"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium font-rac">
                Tire /// {loadedCar.ts}
              </h2>
            </div>
            <div
            // data-aos="fade-left"
            // data-aos-duration="800"
            // data-aos-delay="1000"
            >
              <img src={tire} alt="" className="w-3/4 sm:w-1/2 mx-auto" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
};

export default ProductDetails;
