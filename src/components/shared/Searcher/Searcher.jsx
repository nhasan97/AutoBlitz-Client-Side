import PropTypes from "prop-types";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./Searcher.css";

const Searcher = ({ setSearch, setValue, value, setRating, rating }) => {
  return (
    <div className="w-full h-full">
      {/* ------------------------------TabPCView------------------------------ */}

      <div className="hidden h-full lg:flex justify-between items-center">
        <input
          type="text"
          name="searchText"
          placeholder="Search by name, brand and type"
          className="input w-[30%]"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        {/* filter by price range */}
        <div className="w-[30%] flex flex-col justify-center items-center gap-2">
          <RangeSlider
            className="range-slider-gradient"
            min={56456}
            max={4000000}
            value={value}
            onInput={setValue}
          />
          <p className="text-base text-white">
            Price Range | ${value[0]} - ${value[1]}
          </p>
        </div>

        {/* filter by rating range */}
        <div className="w-[30%] flex flex-col items-center gap-2">
          <RangeSlider
            className="range-slider-gradient"
            min={1}
            max={5}
            value={rating}
            onInput={setRating}
          />
          <p className="text-base text-white">
            Rating | {rating[0]} - {rating[1]}
          </p>
        </div>
      </div>

      {/* ------------------------------MobileView------------------------------ */}

      <div tabIndex={0} className="lg:hidden collapse bg-base-200 z-20">
        <div className="w-10 collapse-title text-xl font-medium">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="collapse-content">
          <input
            tabIndex={0}
            type="text"
            name="searchText"
            placeholder="Search by name, brand and type"
            className="input w-full"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          {/* filter by price range */}
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <RangeSlider
              className="range-slider-gradient"
              min={56456}
              max={4000000}
              value={value}
              onInput={setValue}
            />
            <p className="text-base text-white">
              Price Range | ${value[0]} - ${value[1]}
            </p>
          </div>

          {/* filter by rating range */}
          <div className="w-full flex flex-col items-center gap-2">
            <RangeSlider
              className="range-slider-gradient"
              min={1}
              max={5}
              value={rating}
              onInput={setRating}
            />
            <p className="text-base text-white">
              Rating | {rating[0]} - {rating[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Searcher.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  setRating: PropTypes.func.isRequired,
  rating: PropTypes.array.isRequired,
};

export default Searcher;
