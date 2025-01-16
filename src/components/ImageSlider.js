import React from "react";
import { Carousel } from "@material-tailwind/react";

const images = [
  {
    src: "https://picsum.photos/1920/1080?modern",
    alt: "Nature Image 1",
  },
  {
    src: "https://picsum.photos/1920/1080?nature",
    alt: "City Image 2",
  },
  {
    src: "https://picsum.photos/1920/1080?clothes",
    alt: "Technology Image 3",
  },
];

const ImageSlider = () => {
  return (
    <Carousel autoplay loop className="h-screen">
      {images.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">{image.alt}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
