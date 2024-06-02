import { useQuery } from "@tanstack/react-query";
import { getSingleCarData } from "../api/carsAPIs";

const useGetSingleCarDataAndSpecs = (id) => {
  //fetching single car data
  const { isLoading: loadingCar, data: loadedCar } = useQuery({
    queryKey: ["getSingleCarData"],
    queryFn: () => getSingleCarData(id),
  });

  return [loadingCar, loadedCar];
};

export default useGetSingleCarDataAndSpecs;
