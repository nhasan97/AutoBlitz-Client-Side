import Loading from "../components/shared/Loading";
import CarCards from "../components/CarCards";
import NoData from "../components/shared/NoData";
import useGetCars from "../hooks/useGetCars";
import Container from "../components/shared/Container";
import { useState } from "react";
import CarSearcher from "../components/shared/Searcher/CarSearcher";

const AllCars = () => {
  //fetching data
  const [loadingBrandBasedCars, brandBasedCars] = useGetCars("");

  const [search, setSearch] = useState("");
  const [value, setValue] = useState([56456, 4000000]);
  const [rating, setRating] = useState([1, 5]);

  if (loadingBrandBasedCars) {
    return <Loading />;
  }

  if (brandBasedCars.length > 0) {
    return (
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          <CarSearcher
            setSearch={setSearch}
            setValue={setValue}
            value={value}
            setRating={setRating}
            rating={rating}
          ></CarSearcher>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-12 bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
            {brandBasedCars
              .filter((car) => {
                return search.toLowerCase() === ""
                  ? car
                  : car.name.toLowerCase().includes(search.toLowerCase()) ||
                      car.brandName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      car.type.toLowerCase().includes(search.toLowerCase());
              })
              .filter((car) => {
                return value[0] === 0 && value[1] === 100
                  ? car
                  : car.price >= value[0] && car.price <= value[1];
              })
              .filter((car) => {
                return rating[0] === 0 && rating[1] === 100
                  ? car
                  : car.rating >= rating[0] && car.rating <= rating[1];
              })
              .map((car) => (
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

export default AllCars;
