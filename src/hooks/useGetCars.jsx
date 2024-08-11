import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api/carsAPIs";

const useGetCars = (brandName) => {
  const {
    isLoading: loadingCars,
    data: carInfo,
    refetch: refetchCars,
  } = useQuery({
    queryKey: ["getCars"],
    queryFn: () => getCars(brandName),
  });

  let cars, maxPrice, minPrice;

  if (!loadingCars) {
    cars = carInfo?.cars;
    maxPrice = carInfo?.maxPrice;
    minPrice = carInfo?.minPrice;
  }

  return [loadingCars, cars, maxPrice, minPrice, refetchCars];
};

export default useGetCars;
