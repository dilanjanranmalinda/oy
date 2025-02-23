import React from "react";
import image5 from "../../assets/image/p.jpg";

function ReachUs() {
  return (
    <div className="background-color: #143954; text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={image5} // Use the imported image
          alt="Crafting quality, empowering brands worldwide"
          className="w-full h-65 object-cover brightness-75"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
          REACH US
        </h1>
      </div>

      {/* Contact Details in Cards */}
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Osanda Pathirana */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Osanda Pathirana</h2>
          <p className="text-lg">Managing Director</p>
          <p className="text-lg">📞 +94 77 300 1616</p>
          <p className="text-lg">📧 osanda.pathirana@oyexports.com</p>
        </div>

        {/* Card 2 - Roshini Hettihewa */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Roshini Hettihewa</h2>
          <p className="text-lg">Senior Merchandiser - Marketing</p>
          <p className="text-lg">📞 +94 77 800 8230</p>
          <p className="text-lg">📧 roshi.hettihewa@oyexports.com</p>
        </div>

        {/* Card 3 - Sri Lanka Office */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Sri Lanka Office</h2>
          <p className="text-lg">
            📍 258, Udaya Mawatha, 9th Lane, Pittugala, Malabe, 10115, Sri
            Lanka.
          </p>
        </div>

        {/* Card 4 - Bangladesh Office */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Bangladesh Office</h2>
          <p className="text-lg">🏢 Unison Apparel Sourcing BD</p>
          <p className="text-lg">
            📍 Bahidrara Dohs, Road No: 8/C, House No: 489/B, Dhaka:1206,
            Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReachUs;
