import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface HeaderBottomProps {}

const HeaderBottom: React.FC<HeaderBottomProps> = () => {
  return (
    <div className="headerbottom">
      <nav>
        <header className="flex flex-col md:flex-row md:space-x-4 bg-white top-0 z-[20] w-full h-28 md:h-20 items-center justify-between border-b border-gray-500 py-4 px-4">
          <a href="">
            <img className="w-48 ml-0 md:ml-16" src="logo.png" alt="" />
          </a>
          <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-14 font-medium text-xl mt-4 md:mt-0">
            <a href="#" className="text-black hover:text-customBackgroundButton">Home</a>
            <a href="#" className="text-black hover:text-customBackgroundButton">About us</a>
            <a href="#" className="text-black hover:text-customBackgroundButton">Team</a>
            <a href="#" className="text-black hover:text-customBackgroundButton">Services</a>
            <a href="#" className="text-black hover:text-customBackgroundButton">Process</a>
            <a href="#" className="text-black hover:text-customBackgroundButton">Clients</a>
            <a href="#" className="text-black hover:text-customBackgroundButton">Works</a>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black text-lg pr-0 md:pr-5 cursor-pointer hover:text-customBackgroundButton" />
          </div>
        </header>
      </nav>
    </div>
  );
};

export default HeaderBottom;
