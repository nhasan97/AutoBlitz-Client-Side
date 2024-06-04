import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";

const MobileView = ({ services, handleDeleteService, search }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {services
        .filter((service) => {
          return search.toLowerCase() === ""
            ? service
            : service.serviceName
                .toLowerCase()
                .includes(search.toLowerCase()) ||
                service.serviceDescription
                  .toLowerCase()
                  .includes(search.toLowerCase());
        })
        .map((service) => (
          <div
            key={service._id}
            className="h-fit card bg-[#f4f3f081] shadow-xl"
          >
            <div className="card-body p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={service.servicePhoto}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>

                <h2 className="card-title text-white text-xl md:text-2xl lg:text-2xl">
                  {service.serviceName}
                </h2>
              </div>

              <div className="card-actions justify-between">
                <button
                  className="btn btn-circle hover:bg-red-600 group"
                  onClick={() =>
                    document.getElementById("md" + service._id).showModal()
                  }
                >
                  <i className="fa-solid fa-circle-info group-hover:text-white"></i>
                </button>
                <dialog id={"md" + service._id} className="modal">
                  <div className="modal-box text-left">
                    {/* <img
                          src={service.servicePhoto}
                          className="w-1/4 rounded-lg"
                        ></img> */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mt-6">
                        {service.serviceName}
                      </h3>

                      <p>{service.serviceDescription}</p>
                    </div>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>

                <button
                  className="btn btn-circle hover:text-red-500"
                  onClick={() =>
                    document.getElementById("mf" + service._id).showModal()
                  }
                >
                  <i className="fa-solid fa-circle-info"></i>
                </button>
                <dialog id={"mf" + service._id} className="modal">
                  <div className="modal-box text-left">
                    <div className="space-y-6">
                      {service.facilities.map((facility) => (
                        <div key={facility.facilityName}>
                          <h3 className="text-lg font-bold mt-6">
                            {facility.facilityName}
                          </h3>

                          <p>{facility.facilityDetails}</p>
                        </div>
                      ))}
                    </div>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>

                <Link
                  className="btn btn-square text-lg hover:text-green-500"
                  to={`/dashboard/update-service/${service._id}`}
                >
                  <AiTwotoneEdit></AiTwotoneEdit>
                </Link>

                <button
                  className="btn btn-square hover:text-red-500"
                  onClick={() => {
                    handleDeleteService(service._id);
                  }}
                >
                  <i className="fa-solid fa-trash group-hover:text-white "></i>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

MobileView.propTypes = {
  services: PropTypes.array.isRequired,
  handleDeleteService: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default MobileView;
