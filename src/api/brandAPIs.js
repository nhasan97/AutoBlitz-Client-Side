import axiosPublic from "./axiosPublic";

export const getBrands = async () => {
  const response = await axiosPublic.get("/brands");
  return response.data;
};
