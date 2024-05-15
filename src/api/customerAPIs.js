import axiosSecure from "./axiosSecure";

export const getCustomers = async () => {
  const response = await axiosSecure.get("/all-customers");
  return response.data;
};
