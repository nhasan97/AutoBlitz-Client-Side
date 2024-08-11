import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, servicePhoto, servicePrice } = service;

  return (
    <div className="card bg-[rgba(255,255,255,.3)] text-white text-lg shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={servicePhoto}
          alt="Service photo"
          className="rounded-xl w-full h-[200px]"
        />
      </figure>
      <div className="card-body p-0 px-6 py-6">
        <h2 className="card-title capitalize text-xl md:text-2xl text-black font-semibold">
          {serviceName}
        </h2>

        <div className="card-actions justify-between items-center">
          <p className="text-sm md:text-base text-red-600">
            Price : $<span>{servicePrice}</span>
          </p>
          <Link to={`/service-details/${_id}`} className="btn bg-transparent">
            <i className="fa-solid fa-arrow-right text-red-600 text-lg "></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
