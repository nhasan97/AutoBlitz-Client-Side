import useGetCars from "../../../hooks/useGetCars";
import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { deleteCarData } from "../../../api/carsAPIs";
import { ToastContainer } from "react-toastify";
import MobileView from "./MobileView";
import TabPCView from "./TabPCView";
import Loading from "../../../components/shared/Loading";
import NoData from "../../../components/shared/NoData";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CarSearcher from "../../../components/shared/Searcher/CarSearcher";
import { Helmet } from "react-helmet-async";

const ViewProducts = () => {
  //fetching brand based data
  //fetching data
  const [loadingCars, cars, maxPrice, minPrice, refetchCars] = useGetCars("");

  const [search, setSearch] = useState("");
  const [value, setValue] = useState([0, 0]);
  const [rating, setRating] = useState([1, 5]);

  useEffect(() => {
    if (minPrice !== undefined && maxPrice !== undefined) {
      setValue([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  //performing mutation for deleting car data
  const mutation = usePerformMutation("deleteCar", deleteCarData);

  //delete button handler
  const handleDeleteCar = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C45E",
      cancelButtonColor: "#DC2626",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(_id);
        refetchCars();
      }
    });
  };

  if (loadingCars) {
    return <Loading />;
  }

  if (cars.length > 0) {
    return (
      <div className="h-screen bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <DashboardContainer>
          <Helmet>
            <title>AutoBlitz | Cars</title>
          </Helmet>

          <div className="w-full h-[calc(100vh-60px)] md:h-full flex flex-col md:justify-center gap-2 md:gap-4 mt-[60px] md:mt-0 ">
            <div className="w-full h-[10%] 2xl:h-[5%] relative">
              <CarSearcher
                maxPrice={maxPrice}
                minPrice={minPrice}
                setSearch={setSearch}
                setValue={setValue}
                value={value}
                setRating={setRating}
                rating={rating}
              ></CarSearcher>
            </div>

            <TabPCView
              cars={cars}
              handleDeleteCar={handleDeleteCar}
              search={search}
              range={value}
              rating={rating}
            ></TabPCView>

            <MobileView
              cars={cars}
              handleDeleteCar={handleDeleteCar}
              search={search}
              range={value}
              rating={rating}
            ></MobileView>
          </div>
        </DashboardContainer>

        <ToastContainer></ToastContainer>
      </div>
    );
  } else {
    return (
      <div className="h-screen">
        <DashboardContainer>
          <NoData text="No Car Found"></NoData>
        </DashboardContainer>
      </div>
    );
  }
};

export default ViewProducts;
