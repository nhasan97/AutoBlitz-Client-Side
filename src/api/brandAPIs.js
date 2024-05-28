import axiosPublic from "./axiosPublic";

export const getBrands = async () => {
  const response = await axiosPublic.get("/brands");
  return response.data;
};

export const getSingleBrand = async (brandName) => {
  const response = await axiosPublic.get(`/single-brand/${brandName}`);
  return response.data;
};
