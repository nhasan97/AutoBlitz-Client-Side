import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import axiosPublic from "./axiosPublic";

export const getPopularCars = async () => {
  const response = await axiosPublic.get("/popular-makes");
  return response.data;
};

export const getBrandBasedCars = async (name) => {
  let response;
  if (name === "") {
    response = await axiosPublic.get(`/cars`);
  } else {
    response = await axiosPublic.get(`/cars?brandName=${name}`);
  }

  return response.data;
};

export const getSingleCarData = async (id) => {
  const response = await axiosPublic.get(`/all-cars/${id}`);
  return response.data;
};

export const getSingleCarSpecs = async (name) => {
  const response = await axiosPublic.get(`/car-specs/${name}`);
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

export const saveCarSpecs = async (data) => {
  const response = await axiosPublic.post("/car-details", data);
  if (response.data.insertedId) {
    showToastOnSuccess("Added!");
  } else {
    showToastOnError("Error! Not Added");
  }
  return response.data;
};

export const updateCarSpecs = async (obj) => {
  const response = await axiosPublic.patch(
    `/car-specs/${obj.name}`,
    obj.updatedCarInfo
  );

  if (response.data.modifiedCount === 1) {
    showToastOnSuccess("Updated!");
  } else {
    showToastOnError("Error! Not Updated");
  }

  return response.data;
};

export const deleteCarData = async (obj) => {
  const response1 = await axiosPublic.delete(`/delete-car/${obj._id}`);
  const response2 = await axiosPublic.delete(`/delete-car-specs/${obj.name}`);

  if (response1.data.deletedCount && response2.data.deletedCount) {
    showToastOnSuccess("Deleted!");
  } else {
    showToastOnError("Something went wrong!");
  }
  return response1.data;
};
