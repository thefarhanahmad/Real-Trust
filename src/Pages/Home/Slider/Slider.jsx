import React, { useState, useEffect } from "react";
import slider1 from "../../../assets/Images/Home-img/slider1.jpeg";
import slider2 from "../../../assets/Images/Home-img/slider2.jpeg";
import slider3 from "../../../assets/Images/Home-img/slider3.jpeg";
import slider4 from "../../../assets/Images/Home-img/slider4.jpeg";
import FindHomeButton from "../../../Components/FindHomeBtn";

const images = [slider1, slider2, slider3, slider4];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-20">
      <FindHomeButton />
      <div className="relative w-full overflow-hidden">
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-[500px] object-cover"
        />
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
