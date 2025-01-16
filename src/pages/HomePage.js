import React from "react";
import ImageSlider from "../components/ImageSlider";

const sections = [
  {
    type: "text",
    title: "About Us",
    description:
      "Welcome to StyleCo, where innovation meets fashion. We craft timeless designs that blend comfort and elegance, setting new trends in sustainable apparel.",
  },
  {
    type: "image",
    imageUrl: "https://via.assets.so/album.jpg?w=1280&h=720&id=1",

    alt: "Clothing Store",
    overlayText: "Crafted for Comfort, Designed for Style",
  },
  {
    type: "text",
    title: "Our Collections",
    description:
      "Discover our exclusive collections for every season. From casual wear to high fashion, we cater to all your style needs.",
  },
  {
    type: "image",
    imageUrl: "https://via.assets.so/album.jpg?w=1280&h=720",
    alt: "Sustainable Fashion",
    overlayText: "Sustainably Made, Timelessly Worn",
  },
  {
    type: "text",
    title: "Contact Us",
    description:
      "Have questions or want to learn more? Get in touch with us, and let's create something amazing together.",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Image Slider */}
      <ImageSlider />

      {/* Dynamic Sections */}
      {sections.map((section, index) => {
        if (section.type === "text") {
          return (
            <section key={index} className="py-16 bg-gray-100 text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700">
                {section.description}
              </p>
            </section>
          );
        }

        if (section.type === "image") {
          return (
            <section
              key={index}
              className="relative w-full h-[400px] md:h-[600px]"
              style={{
                backgroundImage: `url(${section.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
                  {section.overlayText}
                </h2>
              </div>
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};

export default HomePage;
