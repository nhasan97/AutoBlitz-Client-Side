import useGetBrandsBasedCars from "../../../hooks/useGetBrandsBasedCars";
import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { deleteCarData } from "../../../api/carsAPIs";
import { ToastContainer } from "react-toastify";
import MobileView from "./MobileView";
import TabPCView from "./TabPCView";
import Loading from "../../../components/shared/Loading";
import NoData from "../../../components/shared/NoData";
import { useState } from "react";
import Searcher from "../../../components/shared/Searcher/Searcher";

const ViewProducts = () => {
  //fetching brand based data
  const [loadingBrandBasedCars, brandBasedCars, refetchCars] =
    useGetBrandsBasedCars("");

  const [search, setSearch] = useState("");
  const [value, setValue] = useState([56456, 4000000]);
  const [rating, setRating] = useState([1, 5]);

  //performing mutation for deleting car data
  const mutation = usePerformMutation("deleteCar", deleteCarData);

  //delete button handler
  const handleDeleteCar = (_id, name) => {
    mutation.mutate({ _id, name });
    refetchCars();
  };

  if (loadingBrandBasedCars) {
    return <Loading />;
  }

  if (brandBasedCars.length > 0) {
    return (
      <div className="h-screen bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <DashboardContainer>
          {/* <Helmet>
            <title>PanaPoll | Dashboard | Manage Surveys</title>
          </Helmet> */}

          <div className="w-full h-[10%] mb-4">
            <Searcher
              setSearch={setSearch}
              setValue={setValue}
              value={value}
              setRating={setRating}
              rating={rating}
            ></Searcher>
          </div>

          <TabPCView
            brandBasedCars={brandBasedCars}
            handleDeleteCar={handleDeleteCar}
            search={search}
            range={value}
            rating={rating}
          ></TabPCView>

          <MobileView
            brandBasedCars={brandBasedCars}
            handleDeleteCar={handleDeleteCar}
            search={search}
            range={value}
            rating={rating}
          ></MobileView>
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
