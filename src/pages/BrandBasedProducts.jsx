import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import useGetCars from "../hooks/useGetCars";
import CarCards from "../components/CarCards";
import Loading from "../components/shared/Loading";
import NoData from "../components/shared/NoData";
import Container from "../components/shared/Container";
import { useQuery } from "@tanstack/react-query";
import { getSingleBrand } from "../api/brandAPIs";

const BrandBasedProducts = () => {
  const loadedBrandName = useParams();

  //fetching brand based data
  const [loadingBrandBasedCars, brandBasedCars] = useGetCars(
    loadedBrandName.name
  );

  //fetching brand it self
  const { isLoading: loadingBrand, data: brand } = useQuery({
    queryKey: ["getSingleBrand"],
    queryFn: () => getSingleBrand(loadedBrandName.name),
  });

  if (loadingBrandBasedCars || loadingBrand) {
    return <Loading />;
  }

  if (brandBasedCars.length > 0) {
    return (
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          <div
            // style={style}
            className={`w-full h-full flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 border-b`}
          >
            <img
              src={brand.image}
              className="w-[50%] sm:w-[20%] animate-pulse"
              alt=""
            />
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[rgba(255,255,255,.65)] animate-pulse">
              | {brand.name}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-12 bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
            {brandBasedCars.map((car) => (
              <CarCards
                key={car._id}
                car={car}
                caller={"BrandBasedProducts"}
              ></CarCards>
            ))}
          </div>
          {/* <ToastContainer /> */}
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <NoData text="Sorry no autos found"></NoData>
      </Container>
      // <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
      //   <h1 className="font-rac text-7xl font-bold text-white">
      //     Sorry no autos found
      //   </h1>
      // </div>
    );
  }
};

export default BrandBasedProducts;
