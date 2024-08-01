import React from "react";
import './../../index.css';

const Main: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-customBackground min-h-[496px] py-12 px-4 md:flex-row md:py-16 md:px-8 md:h-[496px] md:justify-between md:items-start">
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/4 md:mb-0 mb-8">
        <h4 className="text-2xl md:text-3xl font-bold mb-4">
          The Best Agency for your <br className="hidden md:block" /> Business
        </h4>
        <p className="text-lg md:text-xl opacity-60 mb-6 max-w-md">
          Our strategy is dependent on your <br className="hidden md:block" /> world and your goals. Moving towards <br className="hidden md:block" /> your goal empowers us too!
        </p>
        <button className="relative bg-customBackgroundButton text-white px-10 py-4 rounded overflow-hidden hover:bg-indigo-900 button-border-hover">
          Consult Now
        </button>
      </div>

      <div className="flex flex-col items-center text-center md:items-center md:text-center md:w-1/4 md:mb-0 mb-8">
        <img className="w-20 h-20 mb-4" src="icon-arrow-board.png" alt="Arrow Board" />
        <h4 className="text-xl md:text-2xl font-semibold mb-2">
          Engrossing content
        </h4>
        <p className="text-lg md:text-xl opacity-60 max-w-md">
          The content delivery needs to be <br className="hidden md:block" /> original & engrossing to hold the <br className="hidden md:block" /> attention of the visitors.
        </p>
      </div>

      <div className="flex flex-col items-center text-center md:items-center md:text-center md:w-1/4 md:mb-0 mb-8">
        <img className="w-20 h-20 mb-4" src="icon-mount-flag.png" alt="Mount Flag" />
        <h4 className="text-xl md:text-2xl font-semibold mb-2">
          Engaging copy nails!
        </h4>
        <p className="text-lg md:text-xl opacity-60 max-w-md">
          When the visitor is impressed with <br className="hidden md:block" /> the content, the retention is likely <br className="hidden md:block" /> to be longer in the site.
        </p>
      </div>

      <div className="flex flex-col items-center text-center md:items-center md:text-center md:w-1/4 md:mb-0 mb-8">
        <img className="w-20 h-20 mb-4" src="icon-fire-torch.png" alt="Fire Torch" />
        <h4 className="text-xl md:text-2xl font-semibold mb-2">
          Retaining the visitor
        </h4>
        <p className="text-lg md:text-xl opacity-60 max-w-md">
          When the copy nails it, the call to <br className="hidden md:block" /> action appears like a shadow <br className="hidden md:block" /> intending to trigger a move.
        </p>
      </div>
    </div>
  );
}

export default Main;
