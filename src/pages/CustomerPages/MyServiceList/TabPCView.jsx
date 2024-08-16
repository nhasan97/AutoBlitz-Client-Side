import PropTypes from "prop-types";

const TabPCView = ({ serviceList, handleItemFromList }) => {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Service List</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead>
            <tr className="text-lg text-black font-semibold text-center">
              <th>Name</th>
              <th>Facilities</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {serviceList.map((service) => (
              <tr key={service._id} className="text-black text-center">
                <td className="capitalize">{service.serviceName}</td>

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

                <td>${service.servicePrice}</td>

                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleItemFromList(service._id)}
                  >
                    X
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
  serviceList: PropTypes.array.isRequired,
  handleItemFromList: PropTypes.func.isRequired,
};

export default TabPCView;
