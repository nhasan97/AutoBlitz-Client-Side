import useGetOrders from "../../../hooks/useGetOrders";
import Loading from "../../../components/shared/Loading";
import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import NoData from "../../../components/shared/NoData";
import OrderSearcher from "../../../components/shared/Searcher/OrderSearcher";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import TabPCView from "./TabPCView";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { updateOrderStatus } from "../../../api/ordersAPIs";
import MobileView from "./MobileView";
import { Helmet } from "react-helmet-async";

const ViewOrders = () => {
  const [loadingOrders, orders, refetchOrders] = useGetOrders("");
  const [search, setSearch] = useState("");

  //performing mutation for updating order status
  const mutation = usePerformMutation("updateOrder", updateOrderStatus);

  const handleUpdateOrderStatus = (e, _id) => {
    e.preventDefault();

    const form = e.target;
    const status = form.status.value || "Not Found";

    const updatedStatus = {
      status,
    };

    mutation.mutate({ _id, updatedStatus });
    refetchOrders();
    form.reset();
  };

  if (loadingOrders) {
    return <Loading />;
  }
  if (orders.length > 0) {
    return (
      <div className="h-screen bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <DashboardContainer>
          <Helmet>
            <title>AutoBlitz | Orders</title>
          </Helmet>

          <div className="w-full h-[calc(100vh-60px)] md:h-full flex flex-col md:justify-center gap-2 md:gap-4 mt-[60px] md:mt-0 ">
            <div className="w-full h-[10%] 2xl:h-[5%]">
              <OrderSearcher setSearch={setSearch}></OrderSearcher>
            </div>

            <TabPCView
              orders={orders}
              loadingOrders={loadingOrders}
              handleUpdateOrderStatus={handleUpdateOrderStatus}
              search={search}
            ></TabPCView>

            <MobileView
              orders={orders}
              handleUpdateOrderStatus={handleUpdateOrderStatus}
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

export default ViewOrders;
