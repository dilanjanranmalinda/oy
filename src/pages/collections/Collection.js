import React from "react";
import { motion } from "framer-motion";

const Collection = ({ collection }) => {
  const photos = collection.photos.sort(() => Math.random() - 0.5);
  const numPhotos = photos.length;

  const getSpans = (index, remainingPhotos, remainingColumns) => {
    if (remainingPhotos === 1) {
      return { colSpan: remainingColumns, rowSpan: 1 };
    }

    if (remainingColumns === 1) {
      return { colSpan: 1, rowSpan: Math.min(2, remainingPhotos) };
    }

    if (remainingPhotos > 2 && remainingColumns > 2 && index % 3 === 0) {
      return { colSpan: 2, rowSpan: 2 };
    }

    return { colSpan: 1, rowSpan: 1 };
  };

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {photos.map((photo, i) => {
        const remainingPhotos = numPhotos - i;
        const remainingColumns = 4 - (i % 4);
        const { colSpan, rowSpan } = getSpans(
          i,
          remainingPhotos,
          remainingColumns
        );

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className={`relative overflow-hidden rounded-lg shadow-md col-span-${colSpan} row-span-${rowSpan}`}
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
  );
};

export default Collection;
