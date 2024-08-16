import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import axiosPublic from "./axiosPublic";

export const getPopularCars = async () => {
  const response = await axiosPublic.get("/popular-makes");
  return response.data;
};

export const getCars = async (name) => {
  const response = await axiosPublic.get(`/cars?brandName=${name}`);
  return response.data;
};

export const getSingleCarData = async (id) => {
  const response = await axiosPublic.get(`/all-cars/${id}`);
  return response.data;
};

export const saveCarData = async (data) => {
  const response = await axiosPublic.post("/cars", data);
  if (response.data.insertedId) {
    showToastOnSuccess("Added!");
  } else {
    showToastOnError("Error! Not Added");
  }
  return response.data;
};

export const updateCarInfo = async (obj) => {
  const response = await axiosPublic.patch(
    `/all-cars/${obj.id}`,
    obj.updatedCarInfo
  );
  if (response.data.modifiedCount === 1) {
    showToastOnSuccess("Updated!");
  } else {
    showToastOnError("Error! Not Updated");
  }

  return response.data;
};

export const deleteCarData = async (_id) => {
  const response = await axiosPublic.delete(`/delete-car/${_id}`);

  if (response.data.deletedCount) {
    showToastOnSuccess("Deleted!");
  } else {
    showToastOnError("Something went wrong!");
  }
  return response.data;
};
