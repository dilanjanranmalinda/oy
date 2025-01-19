import { Typography } from "@material-tailwind/react";
import React from "react";

const ImageWithText = ({ image }) => {
  return (
    <div className=" ">
      <div
        className={image?.bgColor + " relative h-full w-full overflow-hidden"}
      >
        <img
          src={image?.src}
          alt={image?.alt}
          className={
            image?.side === "end" ? ` lg:-ml-0 -ml-14  ` : `lg:ml-0 ml-16 `
          }
        />
        <div
          className={`absolute inset-0 flex justify-${image?.side} items-center`}
        >
          <div className="md:mx-20 mx-0 max-w-xl flex flex-col lg:gap-10 gap-1 items-center">
            <div className=" flex lg:items-center items-start md:w-full w-56 mx-2 ">
              <Typography
                className={
                  image?.textColor +
                  " lg:text-lg font-extrabold text-xs uppercase "
                }
              >
                {image?.title}
              </Typography>
            </div>
            <div className="md:flex items-center md:w-full w-56 mx-2 ">
              <Typography
                className={
                  image?.textColor +
                  " md:text-sm text-[8px]  uppercase text-justify"
                }
              >
                {image?.alt}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
