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

export const getAllServiceBookings = async (email = "") => {
  const response = await axiosPublic.get(`/service-bookings?email=${email}`);
  return response.data;
};

export const saveServiceBooking = async (data) => {
  const response = await axiosSecure.post("/service-bookings", data);
  if (response.data.insertedId) {
    showToastOnSuccess("Service booked successfully!");
  } else {
    showToastOnError("Something went wrong");
  }
  return response.data;
};

export const updateService = async (obj) => {
  const response = await axiosPublic.patch(
    `/services/${obj.id}`,
    obj.updatedService
  );
  if (response.data.modifiedCount === 1) {
    showToastOnSuccess("Updated!");
  } else {
    showToastOnError("Error! Not Updated");
  }

  return response.data;
};

export const updateBookingStatus = async (obj) => {
  const response = await axiosSecure.patch(
    `/bookings/update-status/${obj?._id}`,
    obj?.updatedStatus
  );
  console.log(response);
  return response.data;
};

export const deleteServiceData = async (_id) => {
  const response = await axiosSecure.delete(`/delete-service/${_id}`);
  if (response.data.deletedCount) {
    showToastOnSuccess("Deleted!");
  } else {
    showToastOnError("Something went wrong!");
  }
  return response.data;
};
