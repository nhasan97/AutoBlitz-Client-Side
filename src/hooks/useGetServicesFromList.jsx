import { useQuery } from "@tanstack/react-query";
import { getServiceList } from "../api/serviceListAPIs";

const useGetServicesFromList = (email) => {
  const {
    isLoading: loadingServiceList,
    data: serviceList,
    refetch: refetchServiceList,
  } = useQuery({
    queryKey: ["getServiceList"],
    queryFn: () => getServiceList(email),
  });

  let totalPrice = 0;
  if (!loadingServiceList) {
    totalPrice = serviceList.reduce(
      (accumulator, currentItem) => accumulator + currentItem.servicePrice,
      0
    );
  }

  return [loadingServiceList, serviceList, refetchServiceList, totalPrice];
};

export default useGetServicesFromList;
