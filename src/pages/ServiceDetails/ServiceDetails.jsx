import { Link, useNavigate, useParams } from "react-router-dom";
import FacilityCard from "./FacilityCard";
import useGetSingleServiceDetails from "../../hooks/useGetSingleServiceDetails";
import Loading from "../../components/shared/Loading";
import Container from "../../components/shared/Container";
import useUserRole from "../../hooks/useUserRole";
import usePerformMutation from "../../hooks/usePerformMutation";
import Swal from "sweetalert2";
import { insertServiceInList } from "../../api/serviceListAPIs";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const navigate = useNavigate();

  const [user, loading, role] = useUserRole();

  const loadedServiceId = useParams();

  const [loadingServiceDetails, loadedService] = useGetSingleServiceDetails(
    loadedServiceId.id
  );

  const mutation = usePerformMutation(
    "insertServiceInList",
    insertServiceInList
  );

  const handleAddToServiceList = () => {
    if (user && user.email) {
      const productInList = {
        user_name: user?.displayName,
        user_email: user?.email,
        serviceId: loadedService?._id,
        serviceName: loadedService?.serviceName,
        servicePrice: loadedService?.servicePrice,
        facilities: loadedService?.facilities,
      };

      mutation.mutate(productInList);
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add items to list",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  if (loading || loadingServiceDetails) {
    return <Loading></Loading>;
  } else {
    return (
      <Container>
        <div>
          <Helmet>
            <title>AutoBlitz | Service Details</title>
          </Helmet>

          <div className="w-full min-h-[calc(100vh-160px)] flex flex-col gap-6 ">
            <h1 className="text-[rgba(255,255,255,.65)] font-rac text-2xl md:text-3xl lg:text-4xl font-bold">
              {loadedService?.serviceName}
            </h1>
            <div className="lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <img
                    src={loadedService?.servicePhoto}
                    alt=""
                    className="w-full h-[400px] object-cover rounded-lg"
                  />

                  <p className="font-int text-[#737373] text-sm md:text-base text-justify leading-7">
                    {loadedService?.serviceDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {loadedService?.facilities.map((facility) => (
                      <FacilityCard
                        key={facility.facilityName}
                        facility={facility}
                      ></FacilityCard>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-white col-span-1 space-y-6 lg:px-6 mt-6 lg:mt-0 lg:border-l lg:border-[#363636]">
                <p className="text-lg md:text-2xl font-bold">
                  Service Charge: $<span>{loadedService?.servicePrice}</span>
                </p>

                <button
                  className="btn w-full bg-red-600 text-white"
                  onClick={handleAddToServiceList}
                  disabled={role === "admin"}
                >
                  Add to list
                </button>

                <Link
                  to={`/service-booking`}
                  className="btn w-full bg-red-600 text-white"
                >
                  Proceed Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </Container>
    );
  }
};

export default ServiceDetails;
