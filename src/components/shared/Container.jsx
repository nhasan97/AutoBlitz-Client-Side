import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-10 py-5 md:py-8 lg:py-10">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
//  my-5 md:my-8 lg:my-10
