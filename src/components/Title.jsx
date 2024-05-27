import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="w-full text-[rgba(255,255,255,.65)] text-center space-y-4">
      <h2 className="font-rac text-2xl md:text-3xl lg:text-4xl">
        {title.mainTitle}
      </h2>
      <p className="font-int text-base md:text-xl">{title.subTitle}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.object.isRequired,
};

export default Title;
