import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../../public/gridfiti.png";
import bn2 from "../../public/bmw.png";
import bn3 from "../../public/lamborghini.jpg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="">
      <AutoplaySlider
        className="h-screen w-full"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1500}
      >
        <div data-src={bn1} />
        <div data-src={bn2} />
        <div data-src={bn3} />
      </AutoplaySlider>
    </div>
  );
};
export default Banner;
