import { useQuery } from "@tanstack/react-query";
import { getAllServiceBookings } from "../api/serviceAPIs";

const useGetServiceBookings = (email) => {
  console.log(email);
  const {
    isLoading: loadingServiceBookings,
    data: serviceBookings,
    refetch: refetchServiceBookings,
  } = useQuery({
    queryKey: ["getAllServiceBookings"],
    queryFn: () => getAllServiceBookings(email),
  });

  return [loadingServiceBookings, serviceBookings, refetchServiceBookings];
};

export default useGetServiceBookings;
