import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/ordersAPIs";

const useGetOrders = (email) => {
  const {
    isLoading: loadingOrders,
    data: orders,
    refetch: refetchOrders,
  } = useQuery({
    queryKey: ["getOrders"],
    queryFn: () => getOrders(email),
  });

  return [loadingOrders, orders, refetchOrders];
};

export default useGetOrders;
