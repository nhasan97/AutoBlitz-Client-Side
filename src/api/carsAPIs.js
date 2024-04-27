import axiosPublic from "./axiosPublic";

export const getPopularCars = async () => {
  const response = await axiosPublic.get("/popular-makes");
  return response.data;
};
