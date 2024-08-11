import axiosSecure from "./axiosSecure";

export const savePaymentData = async (data) => {
  const response = await axiosSecure.post("/payments", data);
  return response.data;
};
