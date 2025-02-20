import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

const cards = [
  {
    title: "GARMENT PRODUCTION",
    description:
      "With years of industry experience, we specialize in producing high-quality garments that meet the diverse needs of our clients. From fabric sourcing and pattern making to final production, we manage every aspect of the manufacturing process with precision and care. Our state-of-the-art facilities and skilled team ensure that each piece is crafted with attention to detail, comfort, and durability. Whether you're looking to create a new fashion line, bulk production, or custom designs, we are your trusted partner in bringing your garment ideas to life.",
  },
  {
    title: "PRODUCT SOURCING",
    description:
      "At OY Exports Pvt Ltd, product sourcing is a key element of our garment manufacturing process. We work closely with trusted suppliers around the world to source the finest fabrics, trims, and materials that align with both your design vision and quality standards. Our team ensures that every component of your garment is carefully selected, ethically sourced, and of the highest quality. Whether you're looking for sustainable options, unique textures, or specific color palettes, we leverage our extensive network to provide you with the best materials that enhance your product’s overall appeal and functionality. With our expertise in sourcing, we bring your designs to life with the perfect fabrics and finishes.",
  },
  {
    title: "SUPPLIER VETTING AND COMPLIANCE",
    description:
      "At OY Exports Pvt Ltd, we take supplier vetting and compliance seriously to ensure that every garment we produce meets the highest standards of quality, ethics, and sustainability. Our rigorous supplier selection process focuses on partnering with trusted, responsible suppliers who adhere to industry best practices. We thoroughly assess potential suppliers for their adherence to labor laws, environmental regulations, and product safety standards, ensuring they align with our commitment to ethical and sustainable manufacturing. By maintaining strong, transparent relationships with our suppliers, we ensure that every garment we produce is crafted under fair working conditions and with respect for the planet. Your brand’s reputation is as important to us as it is to you, which is why we prioritize compliance at every step of the process.",
  },
  {
    title: "QUALITUY ASSURANCE",
    description:
      "At OY Exports Pvt Ltd, quality assurance is at the heart of everything we do. We are committed to delivering garments that not only meet but exceed our clients’ expectations. Our dedicated quality control team conducts thorough inspections at every stage of the production process—from raw material selection to the final product—ensuring that each garment is crafted to the highest standards. We use advanced technology and strict testing procedures to check for consistency, durability, and precision in every piece we produce. By prioritizing quality at every level, we guarantee that our garments deliver exceptional fit, finish, and performance, providing our clients with products they can trust and their customers will love.",
  },
  {
    title: "END-TO-END LOGISTICS",
    description:
      "At OY Exports Pvt Ltd, we offer end-to-end logistics solutions to ensure a seamless and efficient experience from production to delivery. Our comprehensive logistics service covers every aspect of the supply chain, including inventory management, packaging, and timely transportation. With our extensive network of trusted partners, we ensure that your garments are delivered on schedule, regardless of destination. From the moment your order is placed to the final delivery, we manage each step with precision and care, minimizing delays and optimizing cost-efficiency. Whether you're shipping locally or globally, our reliable logistics team is dedicated to providing smooth, hassle-free solutions that support your business every step of the way.",
  },
];

const PinBoard = () => {
  return (
    <div className="p-6 bg-primary-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-white">
        WHAT WE DO
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="bg-primary-700 shadow-lg p-4 border-l-4 border-white flex flex-col h-full"
          >
            <CardBody className="flex flex-col flex-grow">
              <h2 className="text-lg font-bold uppercase text-primary-100">
                {card.title}
              </h2>
              <p className="text-gray-100 mt-2 flex-grow">{card.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PinBoard;
