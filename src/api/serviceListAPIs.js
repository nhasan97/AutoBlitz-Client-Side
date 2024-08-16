import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import axiosSecure from "./axiosSecure";

export const insertServiceInList = async (item) => {
  const response = await axiosSecure.post("/serviceList", item);

  if (response.data.insertedId) {
    showToastOnSuccess("Added to list successfully!");
  } else {
    showToastOnError("Error! Not Added");
  }
  return response.data;
};

export const getServiceList = async (email) => {
  const response = await axiosSecure.get(`/serviceList/${email}`);
  return response.data;
};

export const deleteItemFromList = async (id) => {
  const response = await axiosSecure.delete(`/delete-serviceList-item/${id}`);
  return response.data;
};
