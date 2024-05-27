import PropTypes from "prop-types";

const SharedBanner = ({ title }) => {
  const { mainTitle, subTitle } = title;
  return (
    <div className="bg-[url(../public/checkout.png)] bg-no-repeat bg-cover bg-center rounded-lg relative">
      <div className="p-28 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
        <h1 className="text-white text-5xl font-bold">{mainTitle}</h1>
        <div className="flex justify-center items-center absolute left-0 bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="296"
            height="50"
            viewBox="0 0 296 50"
            fill="none"
          >
            <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
          </svg>
          <p className="text-white text-xl font-medium absolute">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

SharedBanner.propTypes = {
  title: PropTypes.object.isRequired,
};

export default SharedBanner;
