import { useQuery } from "@tanstack/react-query";
import { getSingleCarData, getSingleCarSpecs } from "../api/carsAPIs";

const useGetSingleCarDataAndSpecs = (id) => {
  //fetching single car data
  const { isLoading: loadingCar, data: loadedCar } = useQuery({
    queryKey: ["getSingleCarData"],
    queryFn: () => getSingleCarData(id),
  });

  //fetching single car specs
  const { isLoading: loadingCarSpecs, data: loadedSpecs } = useQuery({
    queryKey: ["getSingleCarSpecs"],
    queryFn: () => getSingleCarSpecs(loadedCar.name),
  });

  return [loadingCar, loadedCar, loadingCarSpecs, loadedSpecs];
};

export default useGetSingleCarDataAndSpecs;
