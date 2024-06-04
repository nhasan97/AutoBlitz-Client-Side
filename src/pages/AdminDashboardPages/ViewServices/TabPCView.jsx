import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";

const TabPCView = ({ services, handleDeleteService, search }) => {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Services</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead className="text-base text-black font-normal text-left">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Details</th>
              <th>Facilities</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
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
                <tr key={service._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={service.servicePhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="text-black text-left">
                    {service.serviceName}
                  </td>

                  <td>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document.getElementById("d" + service._id).showModal()
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>

                    <dialog id={"d" + service._id} className="modal">
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
                  </td>

                  <td>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document.getElementById("f" + service._id).showModal()
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>

                    <dialog id={"f" + service._id} className="modal">
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
                  </td>

                  <td className="text-black text-left">
                    ${service.servicePrice}
                  </td>

                  <td className="flex items-center gap-3">
                    <Link
                      className="btn btn-square text-lg hover:text-green-500"
                      to={`/dashboard/update-service/${service._id}`}
                    >
                      <AiTwotoneEdit></AiTwotoneEdit>
                    </Link>

                    <button
                      className="btn btn-square hover:text-red-600"
                      onClick={() => {
                        handleDeleteService(service._id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TabPCView.propTypes = {
  services: PropTypes.array.isRequired,
  handleDeleteService: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default TabPCView;
