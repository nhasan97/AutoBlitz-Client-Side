import PropTypes from "prop-types";
import timeStampToDateConverter from "../../../utilities/timeStampToDateConverter";
import BookingItemsCard from "../../AdminDashboardPages/ViewServiceBookings/BookingItemsCard";

const MobileView = ({ serviceBookings, search, handleUpdateBookingStatus }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {serviceBookings
        .filter((booking) => {
          return search.toLowerCase() === ""
            ? booking
            : booking.name.toLowerCase().includes(search.toLowerCase()) ||
                booking.email.toLowerCase().includes(search.toLowerCase()) ||
                booking.status.toLowerCase().includes(search.toLowerCase()) ||
                booking.bookingId
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                timeStampToDateConverter(booking.timeStamp)
                  .toLowerCase()
                  .includes(search.toLowerCase());
        })
        .map((booking) => (
          <div
            key={booking._id}
            className="h-fit card bg-[#f4f3f081] shadow-xl"
          >
            <div className="card-body flex-row justify-between items-center p-5 space-y-3">
              <div className="flex flex-col  gap-3">
                <h2 className="card-title text-white text-xl md:text-2xl lg:text-2xl">
                  Booking# {booking.bookingId}
                </h2>
                <div>
                  <p>
                    <span className="font-medium">Customer: </span>
                    {booking.name}
                  </p>
                  <p>
                    <span className="font-medium">Date: </span>
                    {timeStampToDateConverter(booking.timeStamp)}
                  </p>
                </div>
              </div>

              <div className="card-actions justify-between">
                <button
                  className="btn btn-circle hover:bg-red-600 group"
                  onClick={() =>
                    document.getElementById(booking._id).showModal()
                  }
                >
                  <i className="fa-solid fa-circle-info group-hover:text-white"></i>
                </button>
                <dialog id={booking._id} className="modal">
                  <div className="modal-box text-left space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">
                          Booking# {booking.bookingId}
                        </p>

                        <div
                          className={`badge badge-outline ${
                            booking.status === "Done"
                              ? "text-green-400 border-green-400"
                              : booking.status === "Canceled"
                              ? "text-red-500 border-red-500"
                              : " text-gray-400 border-gray-400"
                          }`}
                        >
                          {booking.status}
                        </div>
                      </div>

                      <p>
                        <span className="font-semibold">Date: </span>
                        {timeStampToDateConverter(booking.timeStamp)}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">Customer Details</h4>
                      <p>
                        <span className="font-semibold">Name: </span>
                        {booking.name}
                      </p>
                      <p>
                        <span className="font-semibold">Email: </span>
                        {booking.email}
                      </p>
                      <p>
                        <span className="font-semibold">Cell: </span>
                        {booking.cell}
                      </p>
                      <p>
                        <span className="font-semibold">Note: </span>
                        {booking.note}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">Items</h4>
                      <table className="table rounded-lg text-left">
                        {/* head */}
                        <thead className="text-base">
                          <tr>
                            <th>Service Name</th>
                            <th>Service Price</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {/* row  */}
                          {booking.items.map((item) => (
                            <BookingItemsCard
                              key={item._id}
                              item={item}
                            ></BookingItemsCard>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">Payment Details</h4>
                      <p>
                        <span className="font-semibold">Total Bill: </span>$
                        {booking.price}
                      </p>
                    </div>
                    <button
                      className="btn  hover:text-red-500"
                      onClick={() => handleUpdateBookingStatus(booking._id)}
                      disabled={
                        booking.status === "Done" ||
                        booking.status === "Canceled"
                      }
                    >
                      <i className="fa-solid fa-xmark"></i> Cancel Booking
                    </button>

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
  serviceBookings: PropTypes.array.isRequired,
  handleUpdateBookingStatus: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default MobileView;
