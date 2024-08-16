import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { PiListPlusBold } from "react-icons/pi";
import useUserRole from "../hooks/useUserRole";
import usePerformMutation from "../hooks/usePerformMutation";
import { insertServiceInList } from "../api/serviceListAPIs";
import Swal from "sweetalert2";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const [user, , role] = useUserRole();

  const { _id, serviceName, servicePhoto, servicePrice, facilities } = service;

  const mutation = usePerformMutation(
    "insertServiceInList",
    insertServiceInList
  );

  const handleAddToServiceList = () => {
    if (user && user.email) {
      const productInList = {
        user_name: user?.displayName,
        user_email: user?.email,
        serviceId: _id,
        serviceName: serviceName,
        servicePrice: servicePrice,
        facilities: facilities,
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

  return (
    <div className="card bg-[rgba(255,255,255,.3)] text-white text-lg shadow-xl">
      <figure className="p-1">
        <img
          src={servicePhoto}
          alt="Service photo"
          className="rounded-xl w-full h-[200px]"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title capitalize text-xl md:text-2xl text-black font-semibold">
          {serviceName}
        </h2>

        <div className="card-actions justify-between items-center">
          <p>${servicePrice}</p>

          <div className="flex gap-1">
            <button
              className="btn btn-circle bg-transparent text-white hover:text-red-600 border-none"
              onClick={handleAddToServiceList}
              disabled={role === "admin"}
            >
              <PiListPlusBold className=" text-xl" />
            </button>

            <Link
              to={`/service-details/${_id}`}
              className="btn btn-circle bg-transparent text-white hover:text-red-600 border-none"
            >
              <i className="fa-solid fa-arrow-right text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
