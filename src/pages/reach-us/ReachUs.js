import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import reachusimg from "../../assets/image/reachus2de.png";

function ReachUs() {
  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <motion.img
          src={reachusimg}
          alt="Crafting quality, empowering brands worldwide"
          className="w-full h-screen object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-primary-700 via-primary-700/20 to-transparent"
        ></motion.div>
        <motion.h1
          style={{ textShadow: "4px 4px 2px rgba(0, 0, 0, 0.8)" }}
          className="absolute pl-3 pt-10 top-1/2 left-1/3 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          REACH US
        </motion.h1>
      </div>

      {/* Contact People Section */}
      <div className="mx-auto p-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            {
              name: "Osanda Pathirana",
              title: "Managing Director",
              phone: "+94 77 300 1616",
              email: "osanda.pathirana@oyexports.com",
            },
            {
              name: "Roshini Hettihewa",
              title: "Senior Merchandiser - Marketing",
              phone: "+94 77 800 8230",
              email: "roshi.hettihewa@oyexports.com",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              className="p-6 my-2 rounded-2xl border-t-2 border-l-2 border-r-2 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} // Triggers when in viewport
              viewport={{ once: true }} // Triggers only once
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold">{person.name}</h2>
              <p className="text-lg text-gray-300">{person.title}</p>
              <p className="text-lg mt-3 flex items-center justify-center gap-2">
                <PhoneIcon className="w-5 h-5 text-primary-300" />{" "}
                <a href={`tel:${person.phone}`} className="hover:underline">
                  {person.phone}
                </a>
              </p>
              <p className="text-sm md:text-lg flex items-center justify-center gap-2 mt-2">
                <EnvelopeIcon className="w-5 h-5 text-primary-300" />{" "}
                <a href={`mailto:${person.email}`} className="hover:underline">
                  {person.email}
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Office Locations Section */}
      <div className="py-8">
        <div className="mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sri Lanka Office",
                address:
                  "258, Udaya Mawatha, 9th Lane, Pittugala, Malabe, 10115, Sri Lanka.",
                mapUrl:
                  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3960.8353788760496!2d79.96643227473453!3d6.9102785185483935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s258%2C%20Udaya%20Mawatha%2C%209th%20Lane%2C%20Pittugala%2C%20Malabe%2C%2010115%2C%20Sri%20Lanka.!5e0!3m2!1sen!2slk!4v1740309899699!5m2!1sen!2slk",
              },
              {
                title: "Bangladesh Office",
                address:
                  "Unison Apparel Sourcing BD, Bahidrara Dohs, Road No: 8/C, House No: 489/B, Dhaka:1206, Bangladesh.",
                mapUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.9533672328002!2d90.41206801038028!3d23.8135564059324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6556f8d0183%3A0xaad698adc3e0f420!2sDOHS%20Baridhara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2slk!4v1740310183148!5m2!1sen!2slk",
              },
            ].map((office, i) => (
              <motion.div
                key={i}
                className="bg-primary-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} // Triggers when in viewport
                viewport={{ once: true }} // Triggers only once
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-3 flex gap-2">
                  <MapPinIcon className="w-6 h-6 text-primary-300" />
                  {office.title}
                </h2>
                <p className="text-md md:text-lg">{office.address}</p>
                <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    title={office.title}
                    className="w-full h-64"
                    src={office.mapUrl}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReachUs;
