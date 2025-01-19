import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

const ImageSlider = ({ images, single }) => {
  return (
    <Carousel
      navigation={() => <></>}
      prevArrow={() => <></>}
      nextArrow={() => <></>}
      autoplay
      loop
      transition={{ duration: 2 }}
      className="h-screen"
    >
      {images.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex justify-start">
            <div
              className={`lg:ml-20 ml-10 max-w-md flex lg:items-center ${
                single ? "items-end pb-10" : "items-start"
              } lg:pt-0 pt-10`}
            >
              <Typography
                className={
                  image?.textColor +
                  " lg:text-3xl  text-xl uppercase font-extrabold"
                }
              >
                {image.alt}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
