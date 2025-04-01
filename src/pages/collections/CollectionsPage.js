import { Card, CardBody, Typography } from "@material-tailwind/react";
import { collections } from "./collections.constant";
import { motion } from "framer-motion";
import { ArrowPathIcon, DocumentTextIcon } from "@heroicons/react/16/solid";
import Collection from "./Collection";

const CollectionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 w-full">
      {collections.map((collection, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="mb-12 p-6 shadow-lg rounded-2xl bg-primary-100">
            <CardBody>
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typography
                  variant="h2"
                  className="text-gray-900 font-bold uppercase text-center"
                >
                  {collection.title}
                </Typography>
                <Typography className="text-primary-900 text-justify mt-2">
                  {collection.description}
                </Typography>
              </motion.div>

              <Collection collection={collection} key={index} />
            </CardBody>
          </Card>
        </motion.div>
      ))}
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div class="bg-primary-800  rounded-lg p-6 flex flex-col items-center justify-center text-center drop-shadow-sm shadow-primary-300">
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

        <div class="bg-primary-800  rounded-lg p-6 flex flex-col items-center justify-center text-center drop-shadow-sm shadow-primary-300">
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

export default CollectionPage;
