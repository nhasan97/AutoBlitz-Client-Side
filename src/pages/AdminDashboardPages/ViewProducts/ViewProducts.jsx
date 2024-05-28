import useGetBrandsBasedCars from "../../../hooks/useGetBrandsBasedCars";
import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { deleteCarData } from "../../../api/carsAPIs";
import { ToastContainer } from "react-toastify";
import MobileView from "./MobileView";
import TabPCView from "./TabPCView";
import Loading from "../../../components/shared/Loading";
import NoData from "../../../components/shared/NoData";

const ViewProducts = () => {
  //fetching brand based data
  const [loadingBrandBasedCars, brandBasedCars, refetchCars] =
    useGetBrandsBasedCars("");

  //setting the title
  //   const title = {
  //     mainTitle: "Surveys",
  //     subTitle: "",
  //   };

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
      <div className="h-screen">
        <DashboardContainer>
          {/* <Helmet>
            <title>PanaPoll | Dashboard | Manage Surveys</title>
          </Helmet> */}

          {/* <Title title={title}></Title> */}

          <TabPCView
            brandBasedCars={brandBasedCars}
            handleDeleteCar={handleDeleteCar}
          ></TabPCView>

          <MobileView
            brandBasedCars={brandBasedCars}
            handleDeleteCar={handleDeleteCar}
          ></MobileView>
        </DashboardContainer>

        <ToastContainer></ToastContainer>
      </div>
    );
  } else {
    return (
      <div className="h-screen">
        <DashboardContainer>
          <NoData text="No Survey Found"></NoData>
        </DashboardContainer>
      </div>
    );
  }
};

export default ViewProducts;
