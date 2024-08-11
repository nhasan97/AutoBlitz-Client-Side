import PropTypes from "prop-types";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import OrderItemsCard from "./OrderItemsCard";
import timeStampToDateConverter from "../../../utilities/timeStampToDateConverter";
import Loading from "../../../components/shared/Loading";

const TabPCView = ({
  orders,
  loadingOrders,
  search,
  handleUpdateOrderStatus,
}) => {
  // if (loadingOrders) {
  //   return <Loading></Loading>;
  // } else {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Orders</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead>
            <tr className="text-lg text-black font-semibold text-center">
              <th>Order ID</th>
              <th>Customer Details</th>
              <th>Ordered Car(s)</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {orders
              .filter((order) => {
                return search.toLowerCase() === ""
                  ? order
                  : order.name.toLowerCase().includes(search.toLowerCase()) ||
                      order.email
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      order.status
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      order.orderId
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      timeStampToDateConverter(order.timeStamp)
                        .toLowerCase()
                        .includes(search.toLowerCase());
              })
              .map((order) => (
                <tr key={order._id} className="text-black text-center">
                  <td>
                    <p>{order.orderId}</p>
                  </td>

                  <td className="flex justify-center items-center gap-3">
                    <p>{order.name}</p>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document
                          .getElementById("Customer" + order._id)
                          .showModal()
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>

                    <dialog id={"Customer" + order._id} className="modal">
                      <div className="modal-box text-left">
                        <div className="text-base space-y-3">
                          <p>
                            <span className="font-bold">Email: </span>
                            {order.email}
                          </p>
                          <p>
                            <span className="font-bold">Cell: </span>
                            {order.cell}
                          </p>
                          <p>
                            <span className="font-bold">Address: </span>
                            {order.address}
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
                          .getElementById("cartItems" + order._id)
                          .showModal()
                      }
                    >
                      <i className="fa-solid fa-car"></i>
                    </button>

                    <dialog id={"cartItems" + order._id} className="modal">
                      <div className="modal-box text-left">
                        <div className="">
                          <table className="table rounded-lg text-base text-left">
                            {/* head */}
                            <thead className="text-lg ">
                              <tr>
                                <th>Car</th>
                                <th>Type</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
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

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>

                  <td>${order.price}</td>

                  <td>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document
                          .getElementById("Payment" + order._id)
                          .showModal()
                      }
                    >
                      <FaMoneyBillTransfer className="text-xl" />
                    </button>

                    <dialog id={"Payment" + order._id} className="modal">
                      <div className="modal-box text-left">
                        <div className="text-base space-y-3">
                          <h3>
                            <span className="font-bold">Paid Amount: </span>$
                            {order.price}
                          </h3>
                          <p>
                            <span className="font-bold">TransactionID: </span>
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
                  </td>

                  <td className="flex justify-center items-center gap-3">
                    <p>{order.status}</p>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document
                          .getElementById("status" + order._id)
                          .showModal()
                      }
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>

                    <dialog id={"status" + order._id} className="modal">
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
                  </td>

                  <td>{timeStampToDateConverter(order.timeStamp)}</td>
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
  orders: PropTypes.array.isRequired,
  handleUpdateOrderStatus: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default TabPCView;
