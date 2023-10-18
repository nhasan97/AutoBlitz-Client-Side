const Title = ({ title }) => {
  return (
    <div className="w-full text-center space-y-4">
      <h2 className="font-rac text-4xl">{title.mainTitle}</h2>
      <p className="font-int text-base">{title.subTitle}</p>
    </div>
  );
};

export default Title;
