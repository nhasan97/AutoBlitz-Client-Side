import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { _id, name, image } = brand;
  const navigate = useNavigate();
  const handleBrandCardClick = () => {
    navigate(`/${name}`);
  };
  return (
    <div
      className="w-[200px] h-[200px] flex flex-col justify-center items-center gap-4 text-[rgba(255,255,255,.65)] border-2 border-[rgba(255,255,255,.65)] transition ease-out delay-100 hover:text-red-600 hover:border-red-500 hover:shadow-md hover:shadow-red-500 rounded-full"
      onClick={handleBrandCardClick}
    >
      <img src={image} alt="" className="w-16 h-16" />
      <h1 className="text-xl font-medium">{name}</h1>
    </div>
  );
};

export default BrandCard;
