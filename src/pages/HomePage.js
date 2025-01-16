import React from "react";
import ImageSlider from "../components/ImageSlider";
import image1 from '../assets/image/b7.jpg';
import image2 from '../assets/image/b5.jpg';
import image3 from '../assets/image/c3.jpg';
import image4 from '../assets/image/b2.jpg';


const sections = [
  {
    type: "text",
    title: "About Us",
    description:
      "OY Exports Pvt Ltd specializes in manufacturing premium garments for private labels, proudly serving clients worldwide from our headquarters in Sri Lanka. With a branch in Bangladesh and a strategic partnership with Unison Apparel Sourcing BD, we connect seamlessly with global buyers and suppliers. Our expertise spans end-to-end product development, helping businesses bring their unique visions to life. Whether launching a new brand or expanding your product line, our dedicated team ensures exceptional support every step of the way..",
  },
  {
    type: "image",
    imageUrl: image1,

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
    imageUrl: image2,
    alt: "Sustainable Fashion",
    overlayText: "Sustainably Made, Timelessly Worn",
    
  },
  {
    type: "text",
    title: "What we do",
    description:
      "We specialize in turning ideas into quality garments, globally sourcing premium materials, and partnering with ethical suppliers to ensure responsible production. With a focus on quality assurance, we maintain the highest standards at every stage and provide seamless, on-time delivery with hassle-free logistics",
  },
  {
    type: "image",
    imageUrl: image4,
    alt: "Get Set",
    overlayText: "acive in target without dought.",
  },
  {
    type: "text",
    title: "Why partner with us",
    description:
      "We specialize in turning ideas into quality garments, globally sourcing premium materials, and partnering with ethical suppliers to ensure responsible production. With a focus on quality assurance, we maintain the highest standards at every stage and provide seamless, on-time delivery with hassle-free logistics",
  },
  {
    type: "image",
    imageUrl: image4,
    alt: "Get Set",
    overlayText: "acive in target without dought.",
  },
  {
    type: "text",
    title: "Contact Us",
    description:
      "Have questions or want to learn more? Get in touch with us, and let's create something amazing together.",
  },
  {
    type: "image",
    imageUrl: image3,
    alt: "Get Set",
    overlayText: "Passion and dedication drive us towards achieving remarkable results.",
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
