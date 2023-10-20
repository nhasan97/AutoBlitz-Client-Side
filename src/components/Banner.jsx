import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

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
        <div data-src="/public/gridfiti.jpg" />
        <div data-src="/public/bmw.webp" />
        <div data-src="/public/lamborghini.jpg" />
      </AutoplaySlider>
    </div>
  );
};
export default Banner;
