import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

const ImageSlider = ({ images, single }) => {
  return single? (
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
                style={
                  single
                    ? { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }
                    : { textShadow: "4px 4px 2px rgba(0, 0, 0, 0.8)" }
                }
              >
                <span dangerouslySetInnerHTML={{ __html: image.alt }}></span>
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  ): (
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
            className={`h-full w-full object-cover ${image.posision}`}
          />
          <div className={`absolute inset-0 flex justify-${image.side}`}>
            <div
              className={`${image.extraCss} lg:ml-10 lg:mr-20 max-w-2xl  flex lg:items-center items-end lg:pb-0 pb-40`}
            >
              <Typography
                className={
                  image?.textColor +
                  " lg:text-6xl  text-4xl  text-center uppercase font-extrabold"
                }
                style={
                  { textShadow: "4px 4px 2px rgba(0, 0, 0, 0.8)" }
                }
              >
                <span dangerouslySetInnerHTML={{ __html: image.alt }}></span>
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>);
};

export default ImageSlider;
