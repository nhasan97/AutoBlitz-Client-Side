import axiosSecure from "./axiosSecure";

export const getOrders = async (email = "") => {
  const response = await axiosSecure.get(`/payments?email=${email}`);
  return response.data;
};

export const updateOrderStatus = async (obj) => {
  const response = await axiosSecure.patch(
    `/orders/update-status/${obj?._id}`,
    obj?.updatedStatus
  );
  console.log(response);
  return response.data;
};
