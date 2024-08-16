import PropTypes from "prop-types";

const MobileView = ({ serviceList, handleItemFromList }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {serviceList.map((service) => (
        <div key={service._id} className="h-fit card bg-[#f4f3f081] shadow-xl">
          <div className="card-body  p-5 space-y-3">
            <p className="font-medium">{service.serviceName}</p>

            <div className="card-actions justify-between">
              <button
                className="btn flex-1 hover:bg-red-600 group"
                onClick={() => document.getElementById(service._id).showModal()}
              >
                <i className="fa-solid fa-circle-info group-hover:text-white"></i>
              </button>
              <dialog id={service._id} className="modal">
                <div className="modal-box text-left space-y-6">
                  <div className="space-y-6">
                    <h1 className="text-lg font-bold">Facilities</h1>

                    {service.facilities.map((facility) => (
                      <div key={facility.facilityName}>
                        <h3 className="text-base font-semibold mt-6">
                          {facility.facilityName}
                        </h3>

                        <p className="text-sm">{facility.facilityDetails}</p>
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

              <button
                className="btn flex-1 hover:bg-red-600 group"
                onClick={() => handleItemFromList(service._id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

MobileView.propTypes = {
  serviceList: PropTypes.array.isRequired,
  handleItemFromList: PropTypes.func.isRequired,
};

export default MobileView;
