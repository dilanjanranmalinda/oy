import { Typography } from "@material-tailwind/react";
import React from "react";

const StoryImage = ({ image }) => {
  return (
    <div className="md:my-20 my-5">
      <div className={image?.bgColor + " relative h-full w-full"}>
        <img src={image?.src} alt={image?.alt} />
        <div className={`absolute inset-0 md:ml-10 ml-5 md:mr-0 mr-2`}>
          <div className="mx-auto my-auto h-full md:w-full md:max-w-6xl w-md flex items-center">
            <div className="flex justify-between  w-full">
              <Typography
                className={
                  image?.textColor +
                  " lg:text-9xl font-extrabold text-3xl uppercase "
                }
              >
                {image?.titleStart}
              </Typography>

              <Typography
                className={
                  image?.textColor +
                  " lg:text-9xl font-extrabold text-3xl uppercase "
                }
              >
                {image?.titleEnd}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex mx-auto items-center md:max-w-4xl md:w-full w-72  ">
        <Typography
          className={
            image?.textColor + " md:text-sm text-[8px]  uppercase text-center"
          }
        >
          {image?.alt}
        </Typography>
      </div>
    </div>
  );
};

export default StoryImage;