import {
  ArrowPathIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const JoinUs = () => {
  return (
    <div class="flex flex-col items-center bg-primary-700 py-12 px-4 sm:px-6 lg:px-8 justify-center">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white">WHY PARTNER WITH US</h2>
        <p class="mt-4 text-lg text-gray-100 text-justify max-w-6xl">
          At OY Exports Pvt Ltd, we bring a unique combination of expertise,
          innovation, and dedication to every project. With years of experience
          in the garment manufacturing industry, we have built a reputation for
          delivering high-quality products that meet our clients’ specific
          needs. Our commitment to craftsmanship, attention to detail, and
          sustainable practices set us apart as a trusted partner. We offer
          end-to-end solutions, from design and product sourcing to
          manufacturing and logistics, ensuring a seamless and efficient
          process.
        </p>
        <p class="mt-4 text-lg text-gray-200 text-justify max-w-6xl">
          When you choose us, you gain a reliable partner who is dedicated to
          your success, helping you bring your vision to life while maintaining
          the highest standards of quality and compliance. Let’s work together
          to create exceptional garments that make an impact.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div class="bg-primary-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center drop-shadow-sm shadow-primary-300">
          <MagnifyingGlassIcon className="h-16 w-16 text-green-500 mb-4" />
          <h3 class="text-lg font-semibold text-primary-200">
            Expertise in Private Label Production
          </h3>
          <p class="mt-2 text-white text-center">
            We know what it takes to create a strong brand identity, and we
            handle the production process with the utmost attention to quality
            and detail.
          </p>
        </div>

        <div class="bg-primary-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center drop-shadow-sm shadow-primary-300">
          <GlobeAltIcon className="h-16 w-16 text-blue-500 mb-4" />

          <h3 class="text-lg font-semibold text-primary-200">Global Reach</h3>
          <p class="mt-2 text-white text-center">
            Our extensive supplier network spans Sri Lanka, Bangladesh, China,
            and India enabling us to offer competitive pricing and high-quality
            products in every category.
          </p>
        </div>

        <div class="bg-primary-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center drop-shadow-sm shadow-primary-300">
          <ArrowPathIcon className="h-16 w-16 text-yellow-500 mb-4" />

          <h3 class="text-lg font-semibold text-primary-200">
            Commitment to Sustainability
          </h3>
          <p class="mt-2 text-white text-center">
            We prioritize ethical sourcing and sustainable production practices,
            ensuring our processes align with today’s standards for
            environmental and social responsibility.
          </p>
        </div>

        <div class="bg-primary-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center drop-shadow-sm shadow-primary-300">
          <DocumentTextIcon className="h-16 w-16 text-purple-500 mb-4" />

          <h3 class="text-lg font-semibold text-primary-200 ">
            Complete Transparency
          </h3>
          <p class="mt-2 text-white text-center">
            We believe in transparent communication and partnership, keeping you
            informed at each step and tailoring our approach to meet your unique
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
