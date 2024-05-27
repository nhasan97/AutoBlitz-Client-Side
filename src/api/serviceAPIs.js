import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import axiosPublic from "./axiosPublic";
import axiosSecure from "./axiosSecure";

export const saveService = async (service) => {
  const response = await axiosSecure.post("/services", service);
  if (response.data.insertedId) {
    showToastOnSuccess("Added!");
  } else {
    showToastOnError("Error! Not Added");
  }
  return response.data;
};

export const getAllServices = async () => {
  const response = await axiosPublic.get("/services");
  return response.data;
};

export const getSingleServiceData = async (id) => {
  const response = await axiosPublic.get(`/services/${id}`);
  return response.data;
};

export const saveServiceBooking = async (order) => {
  const response = await axiosSecure.post("/service-bookings", order);
  if (response.data.insertedId) {
    showToastOnSuccess("Service booked successfully!");
  } else {
    showToastOnError("Something went wrong");
  }
  return response.data;
};
