import React, { useEffect, useRef, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TextSection = ({ section, index }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          setTimeout(() => setIsButtonVisible(true), 200); // Delay button animation
        } else {
          setIsTextVisible(false);
          setIsButtonVisible(false);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section key={index} ref={sectionRef} className="py-20  px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {index === 0 ? (
          <Typography
            variant="lead"
            className={` min-h-32 text-primary-200 transform transition duration-500 ease-in-out ${
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <strong className=" uppercase text-bold">OY Exports Pvt Ltd</strong>{" "}
            specializes in manufacturing premium garments for private labels,
            proudly serving clients worldwide from our headquarters in Sri
            Lanka. With a branch in Bangladesh and a strategic partnership with
            Unison Apparel Sourcing BD, we connect seamlessly with global buyers
            and suppliers. Our expertise spans end-to-end product development,
            helping businesses bring their unique visions to life. Whether
            launching a new brand or expanding your product line, our dedicated
            team ensures exceptional support every step of the way.
          </Typography>
        ) : (
          <Typography
            variant="lead"
            className={` min-h-32 text-primary-200 transform transition duration-500 ease-in-out text-justify ${
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {section.description}
          </Typography>
        )}

        <div
          className={`flex  transform transition duration-500 ease-in-out ${
            isButtonVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Link to={section.path}>
            <Button
              as
              color="gray"
              className="bg-primary-900 rounded-none max-w-40 "
            >
              {section.title}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
