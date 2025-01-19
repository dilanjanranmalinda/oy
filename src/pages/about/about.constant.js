import ab1 from "../../assets/image/about/ab1b.png";
import ab2 from "../../assets/image/about/ab2b.png";
import ab3 from "../../assets/image/about/ab3b.jpg";

export const sections = [
  {
    type: "image",
    title: "We Define fashion",
    src: ab1,
    side: "start",
    alt: `OY Exports Pvt Ltd is a dedicated
          buying office specialized in manufacturing garments for private
          labels, with our headquarters located in Sri Lanka, we are proud to
          serve clients around the world. We also have an office in Bangladesh,
          partnered with Unison Apparel Sourcing BD, enabling us to better
          connect with buyers / suppliers around the world.`,

    textColor: "text-white",
  },

  {
    type: "image",
    title: "Care with Professionalism",
    side: "end",

    src: ab2,
    alt: `With expertise in end-to-end product development, we work closely with
          businesses to bring their unique product visions to life. Whether you
          are launching a new brand or expanding your product line, our
          experienced team is here to support every step of the way.`,
    textColor: "text-white",
  },

  {
    type: "story",
    titleStart: "Our",
    titleEnd: "Story",
    src: ab3,
    alt: `Our journey began with a vision to redefine the fashion industry through innovative designs and sustainable practices. Today, we stand as a testament to how style and responsibility can go hand-in-hand. From sourcing eco-friendly materials to ensuring ethical labor, we take pride in every step of our process.`,
    textColor: "text-white",

    bgColor: "bg-primary-500",
  },
];
