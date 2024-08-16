import PropTypes from "prop-types";
import timeStampToDateConverter from "../../../utilities/timeStampToDateConverter";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import BookingItemsCard from "../../AdminDashboardPages/ViewServiceBookings/BookingItemsCard";

const TabPCView = ({ serviceBookings, search, handleUpdateBookingStatus }) => {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Bookings</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead>
            <tr className="text-lg text-black font-semibold text-center">
              <th>Booking ID</th>
              <th>Customer Details</th>
              <th>Booked Services</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {serviceBookings
              .filter((booking) => {
                return search.toLowerCase() === ""
                  ? booking
                  : booking.name.toLowerCase().includes(search.toLowerCase()) ||
                      booking.email
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      booking.status
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      booking.bookingId
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      timeStampToDateConverter(booking.timeStamp)
                        .toLowerCase()
                        .includes(search.toLowerCase());
              })
              .map((booking) => (
                <tr key={booking._id} className="text-black text-center">
                  <td>
                    <p>{booking.bookingId}</p>
                  </td>

                  <td className="flex justify-center items-center gap-3">
                    <p>{booking.name}</p>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document
                          .getElementById("Customer" + booking._id)
                          .showModal()
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>

                    <dialog id={"Customer" + booking._id} className="modal">
                      <div className="modal-box text-left">
                        <div className="text-base space-y-3">
                          <p>
                            <span className="font-bold">Email: </span>
                            {booking.email}
                          </p>
                          <p>
                            <span className="font-bold">Cell: </span>
                            {booking.cell}
                          </p>
                          <p>
                            <span className="font-bold">Note: </span>
                            {booking.note}
                          </p>
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
                        document
                          .getElementById("cartItems" + booking._id)
                          .showModal()
                      }
                    >
                      <MdOutlineMiscellaneousServices className="text-2xl" />
                    </button>

                    <dialog id={"cartItems" + booking._id} className="modal">
                      <div className="modal-box text-left">
                        <div className="">
                          <table className="table rounded-lg text-base text-left">
                            {/* head */}
                            <thead className="text-lg ">
                              <tr>
                                <th>Service Name</th>
                                <th>Service Price</th>
                              </tr>
                            </thead>
                            <tbody>
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

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>

                  <td>${booking.price}</td>

                  <td className="flex justify-center items-center gap-3">
                    <p>{booking.status}</p>
                  </td>

                  <td>{timeStampToDateConverter(booking.timeStamp)}</td>

                  <td>
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// };

TabPCView.propTypes = {
  serviceBookings: PropTypes.array.isRequired,
  handleUpdateBookingStatus: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default TabPCView;
