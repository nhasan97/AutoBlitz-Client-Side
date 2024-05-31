import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api/carsAPIs";

const useGetCars = (brandName) => {
  const {
    isLoading: loadingBrandBasedCars,
    data: brandBasedCars,
    refetch: refetchCars,
  } = useQuery({
    queryKey: ["getCars"],
    queryFn: () => getCars(brandName),
  });

  return [loadingBrandBasedCars, brandBasedCars, refetchCars];
};

export default useGetCars;
