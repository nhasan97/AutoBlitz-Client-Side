import Title from "../../../components/Title";
import BrandCard from "./BrandCard";
import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../../api/brandAPIs";
import Loading from "../../../components/Loading";
import NoData from "../../../components/NoData";

const Brands = () => {
  const title = {
    mainTitle: "Brands",
    subTitle: "Brands we deal with",
  };

  //fetching brands data
  const { isLoading: loadingBrands, data: brands } = useQuery({
    queryKey: ["getBrands"],
    queryFn: getBrands,
  });

  if (loadingBrands) {
    return <Loading />;
  }

  if (brands.length > 0) {
    return (
      <div className="max-w-screen-xl mx-auto my-10 px-28 py-10 bg-[url('/public/smoke.png')] bg-no-repeat bg-contain bg-left bg-fixed">
        <Title title={title}></Title>
        <div className="flex items-center justify-center flex-wrap gap-6 mx-auto py-12 border-dotted border-r-4 border-[#df454596]">
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </div>
    );
  } else {
    return <NoData text="No Survey Found"></NoData>;
  }
};

export default Brands;
