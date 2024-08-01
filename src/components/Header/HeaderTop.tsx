import React from 'react';

const HeaderTop: React.FC = () => {
  return (
    <div className="relative">
      <header className="bg-customBackgroundHeader sticky top-0 z-20 flex w-full items-center justify-between border-b border-gray-500 px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 h-16 md:h-20 lg:h-16">
        <img 
          src="envato-market.svg" 
          alt="Envato Market" 
          className="w-8 h-8 md:w-10 md:h-10 lg:w-40 lg:h-32 cursor-pointer" 
        />
        <button className="text-white bg-customBackgroundRGB hover:bg-lime-600 px-4 py-2 md:px-6 md:py-3 rounded">
          Buy now
        </button>
      </header>
    </div>
  );
}

export default HeaderTop;
