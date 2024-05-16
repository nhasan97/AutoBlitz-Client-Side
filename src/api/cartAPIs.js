import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import axiosSecure from "./axiosSecure";

export const insertItemInCart = async (item) => {
  const response = await axiosSecure.post("/cart", item);

  if (response.data.insertedId) {
    showToastOnSuccess("Added to cart successfully!");
  } else {
    showToastOnError("Error! Not Added");
  }
  return response.data;
};

export const getCartItemsFromDB = async (email) => {
  const response = await axiosSecure.get(`/cart/${email}`);
  return response.data;
};

export const deleteItemFromCart = async (id) => {
  const response = await axiosSecure.delete(`/delete-cart-item/${id}`);
  return response.data;
};
