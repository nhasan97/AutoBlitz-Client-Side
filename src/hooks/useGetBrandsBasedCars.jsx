import { useQuery } from "@tanstack/react-query";
import { getBrandBasedCars } from "../api/carsAPIs";

const useGetBrandsBasedCars = (brandName) => {
  const {
    isLoading: loadingBrandBasedCars,
    data: brandBasedCars,
    refetch: refetchCars,
  } = useQuery({
    queryKey: ["getBrandBasedCars"],
    queryFn: () => getBrandBasedCars(brandName),
  });

  return [loadingBrandBasedCars, brandBasedCars, refetchCars];
};

export default useGetBrandsBasedCars;
