import React from 'react';
import SliderComponent from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: "1st-img.jpg",
    title: "WE HAVE THE TALENT",
    subtitle: "A TEAM WITH BEST ORGANIZATIONAL SKILLS",
    phone: "(01) 114 336 321",
    button1: "Our Service",
    button2: "Get a Quote"
  },
  {
    image: "2nd-img.jpg",
    title: "CREATIVE SERVICES\nFOR YOUR MIND",
    subtitle: "DESIGNING THE FUTURE",
    phone: "(02) 225 447 632",
    button1: "TALK TO US",
    button2: "GET A QUOTE"
  },
  {
    image: "3rd-img.jpg",
    subtitle: "#1 MOST LOVED BY EVERYONE",
    title: "SIMPLY THE BEST",
    phone: "(03) 336 558 743",
    button1: "PURCHASE THEME",
  }
];

const Slider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider relative w-full h-screen overflow-hidden">
      <SliderComponent {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            <img className="w-full h-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 bg-black bg-opacity-30 p-4 sm:p-8 md:space-y-8">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-sans">{slide.subtitle}</h3>
              <h1 className={`text-white font-bold whitespace-pre-line ${index === 1 ? "text-4xl sm:text-5xl md:text-6xl" : "text-6xl sm:text-7xl md:text-8xl"}`}>
                {slide.title}
              </h1>
              <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-white text-xl sm:text-2xl md:text-3xl">
                <FontAwesomeIcon icon={faPhone} /> <span>{slide.phone}</span>
              </div>
              <div className="space-x-4 sm:space-x-8 mt-4 sm:mt-8">
                <button className={`font-medium text-lg sm:text-xl text-white rounded px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 ${index === 2 ? 'bg-transparent border-2 border-white hover:bg-customBackgroundPurple' : 'bg-indigo-900 hover:bg-white hover:text-black'}`}>
                  {slide.button1}
                </button>
                {slide.button2 && (
                  <button className="font-medium text-lg sm:text-xl text-white border border-solid border-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 hover:bg-white hover:text-black">
                    {slide.button2}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </SliderComponent>
    </div>
  );
};

export default Slider;
