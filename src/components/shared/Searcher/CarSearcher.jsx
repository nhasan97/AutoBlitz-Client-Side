import PropTypes from "prop-types";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./CarSearcher.css";
import { IoMdSearch } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const CarSearcher = ({
  maxPrice,
  minPrice,
  setSearch,
  setValue,
  value,
  setRating,
  rating,
}) => {
  const [searchIconVisibility, setSearchIconVisibility] = useState(true);

  return (
    <div className="w-full h-full">
      {/* ------------------------------TabPCView------------------------------ */}

      <div className="hidden h-full lg:flex justify-between items-center">
        {/* filter by price range */}
        <div className="w-[30%] flex flex-col justify-center items-center gap-2">
          <RangeSlider
            className="range-slider-gradient"
            min={minPrice}
            max={maxPrice}
            value={value}
            onInput={setValue}
          />
          <p className="text-base text-white">
            Price Range | ${value[0]} - ${value[1]}
          </p>
        </div>

        <input
          type="text"
          name="searchText"
          placeholder="Search by name, brand and type"
          className="input w-[30%] bg-transparent border border-orange-600 focus:border-red-600 text-white"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

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

      <details className="lg:hidden collapse bg-transparent z-10 border">
        <summary
          className="collapse-title text-xl font-medium text-white"
          onClick={() => setSearchIconVisibility(!searchIconVisibility)}
        >
          {searchIconVisibility ? (
            <div>
              <IoMdSearch />
            </div>
          ) : (
            <HiMiniXMark />
          )}
        </summary>
        <div className="collapse-content bg-base-200 flex flex-col justify-center items-center gap-4 text-black rounded-t-xl">
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
              min={minPrice}
              max={maxPrice}
              value={value}
              onInput={setValue}
            />
            <p className="text-base">
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
            <p className="text-base">
              Rating | {rating[0]} - {rating[1]}
            </p>
          </div>
        </div>
      </details>
    </div>
  );
};

CarSearcher.propTypes = {
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  setSearch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  setRating: PropTypes.func.isRequired,
  rating: PropTypes.array.isRequired,
};

export default CarSearcher;
