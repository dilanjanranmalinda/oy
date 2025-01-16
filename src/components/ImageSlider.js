import React from "react";
import { Carousel } from "@material-tailwind/react";
import image1 from '../assets/image/a1.jpg';
import image2 from '../assets/image/a2.jpg';
import image3 from '../assets/image/a3.jpg';

const images = [
  {
    src: image1 ,
    alt: "Earth-Friendly Fabrics for a Better Tomorrow.",
  },
  {
    src: image2,
    alt: "From City Streets to Mountain Peaks—We've Got You Covered.",
  },
  {
    src: image3,
    alt: "Indulge in the Luxury of a Perfect Night's Sleep.",
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
