import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../../api/customerAPIs";
import Loading from "../../../components/shared/Loading";
import NoData from "../../../components/shared/NoData";
import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import TabPCView from "./TabPCView";
import MobileView from "./MobileView";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ViewCustomers = () => {
  //fetching customers data
  const { isLoading: loadingCustomers, data: customers } = useQuery({
    queryKey: ["getCustomers"],
    queryFn: getCustomers,
  });

  const [search, setSearch] = useState("");

  if (loadingCustomers) {
    return <Loading />;
  }

  if (customers.length > 0) {
    return (
      <div className="h-screen bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <DashboardContainer>
          <Helmet>
            <title>AutoBlitz | Customers</title>
          </Helmet>

          <div className="w-full h-[calc(100vh-60px)] md:h-full flex flex-col md:justify-center gap-2 md:gap-4 mt-[60px] md:mt-0 ">
            <div className="w-full h-[10%] 2xl:h-[5%]">
              <input
                type="text"
                name="searchText"
                placeholder="Search by name"
                className="input w-full lg:w-[30%] bg-transparent border border-orange-600 focus:border-red-600 text-white"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>

            <TabPCView customers={customers} search={search}></TabPCView>

            <MobileView customers={customers} search={search}></MobileView>
          </div>
        </DashboardContainer>

        <ToastContainer></ToastContainer>
      </div>
    );
  } else {
    return (
      <div className="h-screen">
        <DashboardContainer>
          <NoData text="No Customer Found"></NoData>
        </DashboardContainer>
      </div>
    );
  }
};

export default ViewCustomers;
