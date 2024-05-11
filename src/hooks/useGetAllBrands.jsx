import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../api/brandAPIs";

const useGetAllBrands = () => {
  const { isLoading: loadingBrands, data: brands } = useQuery({
    queryKey: ["getBrands"],
    queryFn: getBrands,
  });
  return [loadingBrands, brands];
};

export default useGetAllBrands;
