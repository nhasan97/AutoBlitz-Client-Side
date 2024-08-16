import { useState } from "react";
import useGetOrders from "../../../hooks/useGetOrders";
import useUserRole from "../../../hooks/useUserRole";
import Loading from "../../../components/shared/Loading";
import { ToastContainer } from "react-toastify";
import NoData from "../../../components/shared/NoData";
import OrderSearcher from "../../../components/shared/Searcher/OrderSearcher";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { updateOrderStatus } from "../../../api/ordersAPIs";
import TabPCView from "./TabPCView";
import MobileView from "./MobileView";
import Container from "../../../components/shared/Container";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyOrders = () => {
  const [user, loading] = useUserRole();
  const [loadingOrders, orders, refetchOrders] = useGetOrders(user?.email);
  const [search, setSearch] = useState("");

  //performing mutation for updating order status
  const mutation = usePerformMutation("updateOrder", updateOrderStatus);

  const handleUpdateOrderStatus = (_id) => {
    Swal.fire({
      title: "Are you sure to cancel the order?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#67BF6B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedStatus = {
          status: "Canceled",
        };

        mutation.mutate({ _id, updatedStatus });
        refetchOrders();
      }
    });
  };

  if (loading || loadingOrders) {
    return <Loading />;
  }

  if (orders.length > 0) {
    return (
      <div className="bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <Container>
          <div className="w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center gap-6">
            <Helmet>
              <title>AutoBlitz | Order History</title>
            </Helmet>

            <OrderSearcher setSearch={setSearch}></OrderSearcher>

            <TabPCView
              orders={orders}
              handleUpdateOrderStatus={handleUpdateOrderStatus}
              search={search}
            ></TabPCView>

            <MobileView
              orders={orders}
              handleUpdateOrderStatus={handleUpdateOrderStatus}
              search={search}
            ></MobileView>

            <ToastContainer></ToastContainer>
          </div>
        </Container>
      </div>
    );
  } else {
    return <NoData text="No Orders Found"></NoData>;
  }
};

export default MyOrders;
