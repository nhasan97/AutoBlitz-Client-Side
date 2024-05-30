import PropTypes from "prop-types";
import timeStampToDateConverter from "../../../utilities/timeStampToDateConverter";

const MobileView = ({ customers, search }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {customers
        .filter((customer) => {
          return search.toLowerCase() === ""
            ? customer
            : customer.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((customer) => (
          <div
            key={customer._id}
            className="h-fit card bg-[#f4f3f081] shadow-xl"
          >
            <div className="card-body flex-row justify-between items-center p-5 space-y-3">
              <div className="flex flex-col  gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={customer.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>

                <h2 className="card-title text-white text-xl md:text-2xl lg:text-2xl">
                  {customer.name}
                </h2>
              </div>

              <div className="card-actions justify-between">
                <button
                  className="btn btn-circle hover:bg-red-600 group"
                  onClick={() =>
                    document.getElementById(customer._id).showModal()
                  }
                >
                  <i className="fa-solid fa-circle-info group-hover:text-white"></i>
                </button>
                <dialog id={customer._id} className="modal">
                  <div className="modal-box text-left space-y-3">
                    <img src={customer.imageUrl} className="rounded-lg"></img>
                    <h3 className="font-bold text-xl">{customer.name}</h3>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      {customer.email}
                    </p>
                    {/* <p>{customer.phone}</p> */}
                    <p>
                      <span className="font-semibold">Joined:</span>{" "}
                      {timeStampToDateConverter(customer.timeStamp)}
                    </p>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

MobileView.propTypes = {
  customers: PropTypes.array.isRequired,
  search: PropTypes.string,
};

export default MobileView;
