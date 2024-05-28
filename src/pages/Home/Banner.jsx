import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import bn1 from "../../../public/lamborghini1.jpg";
import bn2 from "../../../public/bn2.png";
import bn3 from "../../../public/lamborghini2.jpg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="flex justify-center relative ">
      <AutoplaySlider
        className="xl:h-screen w-full"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1500}
      >
        <div data-src={bn1} />
        <div data-src={bn2} />
        <div data-src={bn3} />
      </AutoplaySlider>
      <h1 className="text-center text-[rgba(255,255,255,.6)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-rac font-bold absolute bottom-0 z-10  translate-y-[-40%]">
        Let your dream car be yours
      </h1>
    </div>
  );
};
export default Banner;
