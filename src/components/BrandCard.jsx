import { useNavigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { _id, name, image } = brand;
  const navigate = useNavigate();
  const handleBrandCardClick = () => {
    navigate(`/${name}`);
  };
  return (
    <div className="border border-red-500" onClick={handleBrandCardClick}>
      <img src={image} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default BrandCard;
