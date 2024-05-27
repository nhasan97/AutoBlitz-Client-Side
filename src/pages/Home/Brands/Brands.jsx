import Title from "../../../components/Title";
import BrandCard from "./BrandCard";
import Loading from "../../../components/Loading";
import NoData from "../../../components/NoData";
import { useNavigate } from "react-router-dom";
import useGetAllBrands from "../../../hooks/useGetAllBrands";
import Container from "../../../components/shared/Container";

const Brands = () => {
  const title = {
    mainTitle: "Brands",
    subTitle: "Brands we deal with",
  };

  const navigate = useNavigate();
  const handleBrandCardClick = (name) => {
    navigate(`/branded-car/${name}`);
  };

  //fetching brands data
  const [loadingBrands, brands] = useGetAllBrands();

  if (loadingBrands) {
    return <Loading />;
  }

  if (brands.length > 0) {
    return (
      <Container>
        <div className="w-full flex flex-col justify-center items-center bg-[url('/public/smoke.png')] bg-no-repeat bg-contain bg-left bg-fixed border">
          <Title title={title}></Title>

          {/* <div className="max-w-screen-xl mx-auto my-10 px-28 py-10 bg-[url('/public/smoke.png')] bg-no-repeat bg-contain bg-left bg-fixed"> */}
          {/* <Title title={title}></Title> */}
          <div className="flex items-center justify-center flex-wrap gap-6 mx-auto py-12 border-dotted border-r-4 border-[#df454596]">
            {brands.map((brand) => (
              <BrandCard
                key={brand._id}
                brand={brand}
                handleBrandCardClick={handleBrandCardClick}
              ></BrandCard>
            ))}
          </div>
        </div>
      </Container>
    );
  } else {
    return <NoData text="No Brand Found"></NoData>;
  }
};

export default Brands;
