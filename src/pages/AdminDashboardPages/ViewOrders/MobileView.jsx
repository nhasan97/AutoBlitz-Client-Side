import PropTypes from "prop-types";
import timeStampToDateConverter from "../../../utilities/timeStampToDateConverter";
import OrderItemsCard from "./OrderItemsCard";

const MobileView = ({ orders, search, handleUpdateOrderStatus }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {orders
        .filter((order) => {
          return search.toLowerCase() === ""
            ? order
            : order.name.toLowerCase().includes(search.toLowerCase()) ||
                order.email.toLowerCase().includes(search.toLowerCase()) ||
                order.status.toLowerCase().includes(search.toLowerCase()) ||
                order.orderId.toLowerCase().includes(search.toLowerCase()) ||
                timeStampToDateConverter(order.timeStamp)
                  .toLowerCase()
                  .includes(search.toLowerCase());
        })
        .map((order) => (
          <div key={order._id} className="h-fit card bg-[#f4f3f081] shadow-xl">
            <div className="card-body flex-row justify-between items-center p-5 space-y-3">
              <div className="flex flex-col  gap-3">
                <h2 className="card-title text-white text-xl md:text-2xl lg:text-2xl">
                  Order# {order.orderId}
                </h2>
                <div>
                  <p>
                    <span className="font-medium">Customer: </span>
                    {order.name}
                  </p>
                  <p>
                    <span className="font-medium">Date: </span>
                    {timeStampToDateConverter(order.timeStamp)}
                  </p>
                </div>
              </div>

              <div className="card-actions justify-between">
                <button
                  className="btn btn-circle hover:bg-red-600 group"
                  onClick={() => document.getElementById(order._id).showModal()}
                >
                  <i className="fa-solid fa-circle-info group-hover:text-white"></i>
                </button>
                <dialog id={order._id} className="modal">
                  <div className="modal-box text-left space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-xl">
                          Order# {order.orderId}
                        </p>
                        <button
                          className="flex items-center gap-2"
                          onClick={() =>
                            document
                              .getElementById("mobstatus" + order._id)
                              .showModal()
                          }
                        >
                          <div
                            className={`badge badge-outline ${
                              order.status === "Processing"
                                ? "text-orange-400 border-orange-400"
                                : order.status === "Delivered"
                                ? "text-green-400 border-green-400"
                                : order.status === "Canceled"
                                ? "text-red-500 border-red-500"
                                : " text-gray-400 border-gray-400"
                            }`}
                          >
                            {order.status}
                          </div>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <dialog
                          id={"mobstatus" + order._id}
                          className="modal z-30"
                        >
                          <div className="modal-box text-left">
                            <div className="text-base space-y-3">
                              <form
                                action=""
                                onSubmit={(e) =>
                                  handleUpdateOrderStatus(e, order._id)
                                }
                              >
                                <select
                                  name="status"
                                  placeholder="Status"
                                  className="input w-full capitalize border-orange-600 focus:border-red-600"
                                  defaultValue={order.status}
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Processing">Processing</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Canceled">Canceled</option>
                                </select>

                                <button
                                  type="submit"
                                  className="btn mt-10 bg-red-600 text-lg font-medium text-white hover:text-red-600 normal-case rounded-lg"
                                >
                                  Save Changes
                                </button>
                              </form>
                            </div>

                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </div>

                      <p>
                        <span className="font-semibold">Date: </span>
                        {timeStampToDateConverter(order.timeStamp)}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">Customer Details</h4>
                      <p>
                        <span className="font-semibold">Name: </span>
                        {order.name}
                      </p>
                      <p>
                        <span className="font-semibold">Email: </span>
                        {order.email}
                      </p>
                      <p>
                        <span className="font-semibold">Cell: </span>
                        {order.cell}
                      </p>
                      <p>
                        <span className="font-semibold">Address: </span>
                        {order.address}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">Items</h4>
                      <table className="table rounded-lg text-left">
                        {/* head */}
                        <thead className="text-base">
                          <tr>
                            <th>Car</th>
                            <th>Type</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {/* row  */}
                          {order.items.map((item) => (
                            <OrderItemsCard
                              key={item._id}
                              item={item}
                            ></OrderItemsCard>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">Payment Details</h4>
                      <p>
                        <span className="font-semibold">Total Price: </span>$
                        {order.price}
                      </p>
                      <p>
                        <span className="font-semibold">Paid Amount: </span>$
                        {order.price}
                      </p>
                      <p>
                        <span className="font-semibold">Transaction ID: </span>
                        {order.transactionID}
                      </p>
                    </div>

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
  orders: PropTypes.array.isRequired,
  handleUpdateOrderStatus: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default MobileView;
