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
  const response = await axiosPublic.get(`/cars/${name}`);
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
  console.log(response);
  if (response.data.insertedId) {
    showToastOnSuccess("Added!");
  } else {
    showToastOnError("Error! Not Added");
  }
  return response.data;
};

export const updateCarSpecs = async (obj) => {
  console.log(obj);
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
