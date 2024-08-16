import Loading from "../components/shared/Loading";
import CarCards from "../components/CarCards";
import NoData from "../components/shared/NoData";
import useGetCars from "../hooks/useGetCars";
import Container from "../components/shared/Container";
import { useEffect, useState } from "react";
import CarSearcher from "../components/shared/Searcher/CarSearcher";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AllCars = () => {
  //fetching data
  const [loadingCars, cars, maxPrice, minPrice] = useGetCars("");

  const [search, setSearch] = useState("");
  const [value, setValue] = useState([0, 0]);
  const [rating, setRating] = useState([1, 5]);

  useEffect(() => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      setValue([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  if (loadingCars) {
    return <Loading />;
  }

  if (cars.length > 0) {
    return (
      <div className="bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <Container>
          <div className="w-full flex flex-col justify-center items-center">
            <Helmet>
              <title>AutoBlitz | All Cars</title>
            </Helmet>

            <CarSearcher
              maxPrice={maxPrice}
              minPrice={minPrice}
              setSearch={setSearch}
              setValue={setValue}
              value={value}
              setRating={setRating}
              rating={rating}
            ></CarSearcher>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-12">
              {cars
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
            <ToastContainer></ToastContainer>
          </div>
        </Container>
      </div>
    );
  } else {
    return <NoData text="Sorry no autos found"></NoData>;
  }
};

export default AllCars;
