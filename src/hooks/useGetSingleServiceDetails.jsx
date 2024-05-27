import { useQuery } from "@tanstack/react-query";
import { getSingleServiceData } from "../api/serviceAPIs";

const useGetSingleServiceDetails = (id) => {
  const {
    isLoading: loadingServiceDetails,
    data: loadedService,
    refetch: refetchServiceDetails,
  } = useQuery({
    queryKey: ["getSingleServiceData"],
    queryFn: () => getSingleServiceData(id),
  });

  return [loadingServiceDetails, loadedService, refetchServiceDetails];
};

export default useGetSingleServiceDetails;
