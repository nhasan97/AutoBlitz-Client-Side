import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../../public/lamborghini1.jpg";
import bn2 from "../../public/bn2.png";
import bn3 from "../../public/lamborghini2.jpg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="relative">
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
      <h1 className="text-[rgba(255,255,255,.6)] text-7xl font-rac font-bold absolute left-0 bottom-0 z-10 translate-x-[25%] translate-y-[-40%]">
        Let your dream car be yours
      </h1>
    </div>
  );
};
export default Banner;
