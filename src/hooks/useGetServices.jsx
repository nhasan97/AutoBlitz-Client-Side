import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "../api/serviceAPIs";

const useGetServices = () => {
  const {
    isLoading: loadingServices,
    data: services,
    refetch: refetchServices,
  } = useQuery({
    queryKey: ["getAllServices"],
    queryFn: getAllServices,
  });

  return [loadingServices, services, refetchServices];
};

export default useGetServices;
