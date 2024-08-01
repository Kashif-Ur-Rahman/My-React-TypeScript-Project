import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Blog: React.FC = () => {
  return (
    <div className="relative flex flex-col mt-10 py-10 px-4">
      <p className="font-medium opacity-60 text-lg mb-5 tracking-widest text-center">OUR NEWS & STORIES</p>
      <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold mb-10 text-center">From The Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-12 w-full">
        {/* Box 1 */}
        <div className="flex flex-col items-center w-full mx-auto">
          <img src="blog1.jpg" alt="Blog Image 1" className="w-full h-auto transform hover:scale-105 transition-transform duration-300 mb-4" />
          <p className="font-normal opacity-60 mb-4 text-center">Posted on 18 Jun 2015 <span>/</span> 
            <span><FontAwesomeIcon icon={faComments} /> </span> 0
            &nbsp; <a href="">Comments</a> <span>/</span>
            <FontAwesomeIcon icon={faUserTie} />
            &nbsp; <a href="">admin</a>
          </p>
          <a href="#" className="text-xl md:text-2xl font-sans opacity-70 mb-2 hover:text-customBackgroundButton text-center">Planning on the strategy from figures</a>
          <p className="text-base md:text-lg font-normal opacity-60 mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id...</p>
          <button className="mr-44 mt-4 font-normal tracking-widest opacity-80 hover:bg-customBackgroundButton hover:text-white px-6 py-3">CONTINUE READING</button>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center w-full mx-auto">
          <img src="blog2-1.jpg" alt="Blog Image 2" className="w-full h-auto transform hover:scale-105 transition-transform duration-300 mb-4" />
          <p className="font-normal opacity-60 mb-4 text-center">Posted on 18 Jun 2015 <span>/</span> 
            <span><FontAwesomeIcon icon={faComments} /> </span> 0
            &nbsp; <a href="">Comments</a> <span>/</span>
            <FontAwesomeIcon icon={faUserTie} />
            &nbsp; <a href="">admin</a>
          </p>
          <a href="#" className="text-xl md:text-2xl font-sans opacity-70 mb-2 hover:text-customBackgroundButton ml-6 ">Brainstorming is our routine methodology</a>
          <p className="text-base md:text-lg font-normal opacity-60 mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id...</p>
          <button className=" mr-40  font-normal tracking-widest opacity-80 hover:bg-customBackgroundButton hover:text-white px-6 py-3">CONTINUE READING</button>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center w-full mx-auto">
          <img src="blog3.jpg" alt="Blog Image 3" className="w-full h-auto transform hover:scale-105 transition-transform duration-300 mb-4" />
          <p className="font-normal opacity-60 mb-4 text-center">Posted on 18 Jun 2015 <span>/</span> 
            <span><FontAwesomeIcon icon={faComments} /> </span> 0
            &nbsp; <a href="">Comments</a> <span>/</span>
            <FontAwesomeIcon icon={faUserTie} />
            &nbsp; <a href="">admin</a>
          </p>
          <a href="#" className="text-xl md:text-2xl font-sans opacity-70 mb-2 hover:text-customBackgroundButton text-center">Tête-à-tête over a coffee with clients</a>
          <p className="text-base md:text-lg font-normal opacity-60 mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id...</p>
          <button className=" mr-36 mt-4 font-normal tracking-widest opacity-80 hover:bg-customBackgroundButton hover:text-white px-6 py-3">CONTINUE READING</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
