import { Card, CardBody, Typography } from "@material-tailwind/react";
import { collections } from "./collections.constant";
import { motion } from "framer-motion";

const CollectionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
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
                <Typography className="text-primary-900 text-center mt-2">
                  {collection.description}
                </Typography>
              </motion.div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
                {collection.photos
                  .sort(() => Math.random() - 0.5) // Randomize image order
                  .map((photo, i) => {
                    const isLastOdd =
                      collection?.photos?.length % 2 !== 0 &&
                      i === collection?.photos?.length - 1;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className={`relative overflow-hidden rounded-lg shadow-md 
                          ${
                            isLastOdd
                              ? "col-span-2 md:col-span-4 row-span-1"
                              : i % 6 === 0
                              ? "col-span-2 row-span-2"
                              : i % 4 === 0
                              ? "row-span-2"
                              : "col-span-1"
                          }`}
                      >
                        <motion.img
                          src={photo}
                          alt={`collection-${i}`}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    );
                  })}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CollectionPage;
