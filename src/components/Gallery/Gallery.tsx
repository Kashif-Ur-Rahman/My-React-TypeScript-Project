import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-48 py-10">
      <p className="font-bold opacity-60 text-lg mb-5 tracking-widest">THE BEST PICKS</p>
      <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold mb-10">Our Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        {[
          "gallery3.jpg",
          "gallery8.jpg",
          "gallery6.jpg",
          "gallery1.jpg",
          "gallery2.jpg",
          "gallery7.jpg",
          "gallery10.jpg",
          "gallery5.jpg",
        ].map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-auto transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
            <div className="absolute inset-0 bg-customBackgroundAnimation bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300"></div>
          </motion.div>
            
        ))}
      </div>
    </div>
  );
};

export default Gallery;
