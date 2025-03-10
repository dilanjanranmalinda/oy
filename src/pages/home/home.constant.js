import s1 from "../../assets/image/s5.jpg";
import s2 from "../../assets/image/s7.jpg";
import s3 from "../../assets/image/s10.png";

import v1 from "../../assets/video/hp1.mp4";
import image2 from "../../assets/image/si5.jpg";
import image3 from "../../assets/image/si3.jpg";
import image4 from "../../assets/image/b2.jpg";
import image5 from "../../assets/image/si6.jpg";

export const sections = [
  {
    type: "text",
    title: "Know Us",
    path: "know-us",
    description:
      "OY Exports Pvt Ltd specializes in manufacturing premium garments for private labels, proudly serving clients worldwide from our headquarters in Sri Lanka. With a branch in Bangladesh and a strategic partnership with Unison Apparel Sourcing BD, we connect seamlessly with global buyers and suppliers. Our expertise spans end-to-end product development, helping businesses bring their unique visions to life. Whether launching a new brand or expanding your product line, our dedicated team ensures exceptional support every step of the way..",
  },
  {
    type: "video",
    src: v1,
    alt: "Crafted for Comfort, Designed for Style",
    textColor: "text-white",
  },
  {
    type: "text",
    title: "What we do",
    path: "what-we-do",
    description:
      "We specialize in turning ideas into quality garments, globally sourcing premium materials, and partnering with ethical suppliers to ensure responsible production. With a focus on quality assurance, we maintain the highest standards at every stage and provide seamless, on-time delivery with hassle-free logistics",
  },
  {
    type: "image",
    src: image2,
    alt: "Sustainably Made, Timelessly Worn",
    textColor: "text-white",
  },
  {
    type: "text",
    title: "Why Join US",
    path: "join-us",
    description:
      "We bring expertise in private label production, leveraging a global network to deliver high-quality products at competitive prices. Our commitment to sustainability ensures ethical sourcing and environmentally responsible practices, all while maintaining complete transparency to meet your unique goals.",
  },

  {
    type: "image",
    src: image4,
    alt: "Crafting quality, empowering brands worldwide",
    textColor: "text-white",
  },
  {
    type: "text",
    title: "Collections",
    path: "collections",
    description:
      "Explore our exclusive collections designed to complement every season and occasion. Whether you're looking for effortless casual wear, sophisticated business attire, or head-turning high fashion pieces, we have something for everyone. Our carefully curated styles blend quality, comfort, and trendsetting designs to ensure you always look and feel your best. Elevate your wardrobe with us and embrace fashion that speaks to your unique style.",
  },
  {
    type: "image",
    src: image5,
    alt: "Partner with us for innovation, quality, and trust—your success is our priority",
    textColor: "text-white",
  },
  {
    type: "text",
    title: "Reach Us",
    path: "reach-us",
    description:
      "Have questions about our collections or want to learn more about our styles and designs? We’re here to help! Whether you're looking for the perfect outfit, need assistance with sizing, or have inquiries about custom orders, our team is ready to assist you. Get in touch with us today, and let’s create something amazing together—because great fashion starts with a great conversation!",
  },
  {
    type: "image",
    src: image3,
    textColor: "text-white",

    alt: "Passion and dedication drive us towards achieving remarkable results",
  },
];

export const sliderImages = [
  {
    posision:"lg:object-top",

    src: s1,
    side:"start",

    alt: `WELCOME to </br> OY EXPORTS PVT LTD`,
    textColor: "text-white",
    extraCss:"ml-7"

  },
  {
    posision:"lg:object-top object-[10%_45%]",

    src: s2,
    side:"end",

    alt: "From City Streets <br/>to Mountain Peaks <br/>We've Got You Covered",
    textColor: "text-white",
    extraCss:""

  },
  {
    posision:"lg:object-bottom object-[65%_5%]",
    src: s3,
    side:"start",
    alt: "Indulge in the Luxury of a Perfect Night's Sleep",
    textColor: "text-white",
    extraCss:""
  },
];
