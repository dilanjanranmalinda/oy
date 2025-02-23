import { Card, CardBody, Typography } from "@material-tailwind/react";
import { collections } from "./collections.constant";

const CollectionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {collections.map((collection, index) => (
        <Card
          key={index}
          className="mb-12 p-6 shadow-lg rounded-2xl bg-primary-100"
        >
          <CardBody>
            <Typography
              variant="h4"
              className="text-gray-900 font-bold uppercase text-center"
            >
              {collection.title}
            </Typography>
            <Typography className="text-primary-900 text-center mt-2">
              {collection.description}
            </Typography>
            <div className="mt-6">
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {collection.photos
                  .sort(() => Math.random() - 0.5) // Randomize image order
                  .map((photo, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden rounded-lg shadow-md ${
                        i % 3 === 0 ? "row-span-2" : "col-span-1"
                      }`}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={photo}
                        alt={`collection-${i}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CollectionPage;
