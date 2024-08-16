import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import Loading from "../../../components/shared/Loading";
import ServiceSearcher from "../../../components/shared/Searcher/ServiceSearcher";
import useGetServices from "../../../hooks/useGetServices";
import TabPCView from "./TabPCView";
import MobileView from "./MobileView";
import { ToastContainer } from "react-toastify";
import NoData from "../../../components/shared/NoData";
import { useState } from "react";
import Swal from "sweetalert2";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { deleteServiceData } from "../../../api/serviceAPIs";
import { Helmet } from "react-helmet-async";

const ViewServices = () => {
  //fetching Service data
  const [loadingServices, services, refetchServices] = useGetServices();

  const [search, setSearch] = useState("");

  const mutation = usePerformMutation("deleteService", deleteServiceData);

  //delete button handler
  const handleDeleteService = (_id) => {
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
        refetchServices();
      }
    });
  };

  if (loadingServices) {
    return <Loading />;
  }

  if (services.length > 0) {
    return (
      <div className="h-screen bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <DashboardContainer>
          <Helmet>
            <title>AutoBlitz | Services</title>
          </Helmet>

          <div className="w-full h-[calc(100vh-60px)] md:h-full flex flex-col md:justify-center gap-2 md:gap-4 mt-[60px] md:mt-0 ">
            <div className="w-full h-[10%] 2xl:h-[5%]">
              <ServiceSearcher setSearch={setSearch}></ServiceSearcher>
            </div>

            <TabPCView
              services={services}
              handleDeleteService={handleDeleteService}
              search={search}
            ></TabPCView>

            <MobileView
              services={services}
              handleDeleteService={handleDeleteService}
              search={search}
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
          <NoData text="No Service Found"></NoData>
        </DashboardContainer>
      </div>
    );
  }
};

export default ViewServices;
