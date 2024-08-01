import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Main2: React.FC = () => {
  return (
    <div className="relative">
      <img src="custom-bg-parallax.png" alt="Custom Background" className="w-full h-auto" />

      <p className="absolute inset-0 flex justify-center text-xl text-black font-medium opacity-60 mt-8 md:mt-20 text-center">
        WE ARE THE BEST AGENCY FOR YOU
      </p>
      <hr className="absolute top-20 md:top-[125px] left-1/2 transform -translate-x-1/2 w-48 md:w-80 border-t-4" />

      <h2 className="absolute top-[160px] ml-[365px] text-5xl font-bold font-sans justify-center text-center">
                Take your business soaring high... <br />
                Reach for us
            </h2>

      <p className="absolute top-48 md:top-[300px] left-1/2 transform -translate-x-1/2 text-sm md:text-xl font-extralight text-center max-w-lg md:max-w-2xl">
        When you objectively analyze your business, you are likely to get a new perspective. These new perspectives <br /> propel your business up by infusing fresh strategy. We can support whenever new strategy is needed.
      </p>

      <div className="group">
        <div className="absolute top-[415px] md:top-[415px] left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-customBackgroundCircle rounded-full group-hover:bg-customBackgroundDark">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="hidden group-hover:block text-white text-2xl md:text-4xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <hr className="absolute top-[485px] md:top-[573px] left-1/2 transform -translate-x-1/2 w-24 md:w-48 border-t-2 rotate-90" />

        <button className="absolute top-[520px] md:top-[600px] left-1/2 transform -translate-x-1/2 text-xl md:text-5xl font-bold rounded px-4 py-2 md:px-11 md:py-4 border-customBackgroundDark group-hover:bg-customBackgroundDark group-hover:text-customBackground border-x-4 md:border-x-8 border-y-4 md:border-y-8">
          Hire us
        </button>
      </div>
    </div>
  );
}

export default Main2;
