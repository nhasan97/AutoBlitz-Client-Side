import { useQuery } from "@tanstack/react-query";
import { getCartItemsFromDB } from "../api/cartAPIs";

const useGetItemsFromCart = (email) => {
  const {
    isLoading: loadingCartItems,
    data: cartItems,
    refetch: refetchCartItems,
  } = useQuery({
    queryKey: ["getCartItemsFromDB"],
    queryFn: () => getCartItemsFromDB(email),
  });

  return [loadingCartItems, cartItems, refetchCartItems];
};

export default useGetItemsFromCart;
