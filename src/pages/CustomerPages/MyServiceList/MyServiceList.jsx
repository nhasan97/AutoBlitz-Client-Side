import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Container from "../../../components/shared/Container";
import Loading from "../../../components/shared/Loading";
import useUserRole from "../../../hooks/useUserRole";
import NoData from "../../../components/shared/NoData";
import useGetServicesFromList from "../../../hooks/useGetServicesFromList";
import TabPCView from "./TabPCView";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { deleteItemFromList } from "../../../api/serviceListAPIs";
import Swal from "sweetalert2";
import MobileView from "./MobileView";
import { Helmet } from "react-helmet-async";

const MyServiceList = () => {
  const [user, loading] = useUserRole();
  const [loadingServiceList, serviceList, refetchServiceList, totalPrice] =
    useGetServicesFromList(user?.email);

  const mutation = usePerformMutation("deleteItemFromList", deleteItemFromList);

  const handleItemFromList = (id) => {
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
        mutation.mutate(id);
        refetchServiceList();
      }
    });
  };

  if (loading || loadingServiceList) {
    return <Loading></Loading>;
  }

  if (serviceList.length > 0) {
    return (
      <div className="bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <Container>
          <div className="w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center gap-6">
            <Helmet>
              <title>AutoBlitz | Service List</title>
            </Helmet>

            <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-white text-lg">
              <p>Items : {serviceList.length}</p>
              <p>Total : ${totalPrice}</p>
              <Link to="/service-booking">
                <button className="btn" disabled={!serviceList.length}>
                  Place Booking
                </button>
              </Link>
            </div>

            <TabPCView
              serviceList={serviceList}
              handleItemFromList={handleItemFromList}
            ></TabPCView>

            <MobileView
              serviceList={serviceList}
              handleItemFromList={handleItemFromList}
            ></MobileView>

            <ToastContainer></ToastContainer>
          </div>
        </Container>
      </div>
    );
  } else {
    return <NoData text="No Items Found"></NoData>;
  }
};

export default MyServiceList;
