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
