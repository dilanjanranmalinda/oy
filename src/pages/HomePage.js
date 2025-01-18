import React from "react";
import ImageSlider from "../components/ImageSlider";

import { Button, Typography } from "@material-tailwind/react";
import { sections, sliderImages } from "./home/home.constant";

const HomePage = () => {
  return (
    <div>
      <ImageSlider images={sliderImages} />

      {sections.map((section, index) => {
        if (section.type === "text") {
          return (
            <section key={index} className="py-20 flex flex-col gap-8 px-4">
              <Typography
                variant="lead"
                className="max-w-8xl mx-2  text-justify text-primary-200 "
              >
                {section.description}
              </Typography>
              <div className=" flex justify-end">
                <Button
                  color="gray"
                  className="bg-primary rounded-none max-w-40"
                >
                  {section.title}
                </Button>
              </div>
            </section>
          );
        }

        if (section.type === "image") {
          return <ImageSlider images={[section]} />;
        }

        return null;
      })}
    </div>
  );
};

export default HomePage;
