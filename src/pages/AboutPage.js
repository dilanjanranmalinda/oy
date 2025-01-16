import asweet from "../assets/image/about/asweet.png";
import apink from "../assets/image/about/2.png";
import astyle from "../assets/image/about/1.png";
import { Typography } from "@material-tailwind/react";

const AboutPage = () => {
  return (
    <div>
      <figure className="relative">
        <img
          className="w-full rounded-lg object-cover object-center"
          src={astyle}
          alt="Fashion"
        />
        <div className="absolute inset-0  flex items-center pl-6 justify-center pr-6">
          <Typography
            as="caption"
            variant="h1"
            className="text-primary text-9xl font-bold uppercase text-center"
          >
            FASHION IS YOU
          </Typography>
        </div>
      </figure>

      <section className="py-16  bg-primary text-white">
        <Typography
          as="h2"
          variant="h2"
          className="max-w-7xl mx-auto font-bold uppercase "
        >
          About Us
        </Typography>
        <Typography
          as="p"
          variant="lead"
          className="mt-4 max-w-7xl mx-auto text-justify"
        >
          Here is the text from the image: OY Exports Pvt Ltd is a dedicated
          buying office specialized in manufacturing garments for private
          labels, with our headquarters located in Sri Lanka, we are proud to
          serve clients around the world. We also have an office in Bangladesh,
          partnered with Unison Apparel Sourcing BD, enabling us to better
          connect with buyers / suppliers around the world.
        </Typography>
        <Typography
          as="p"
          variant="lead"
          className="mt-4 max-w-7xl mx-auto text-justify"
        >
          With expertise in end-to-end product development, we work closely with
          businesses to bring their unique product visions to life. Whether you
          are launching a new brand or expanding your product line, our
          experienced team is here to support every step of the way.
        </Typography>
      </section>

      <figure className="relative">
        <img
          className="w-full rounded-lg object-cover object-center"
          src={apink}
          alt="Fashion"
        />
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <Typography
            as="h1"
            variant="h1"
            className=" text-primary-300 text-8xl pl-20 font-bold uppercase text-left"
          >
            Our Story
          </Typography>
          <div className="max-w-xl text-gray-600 ">
            <Typography
              as="p"
              variant="paragraph"
              className="text-left text-2xl "
            >
              Our journey began with a vision to redefine the fashion industry
              through innovative designs and sustainable practices. Today, we
              stand as a testament to how style and responsibility can go
              hand-in-hand. From sourcing eco-friendly materials to ensuring
              ethical labor, we take pride in every step of our process.
            </Typography>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default AboutPage;
