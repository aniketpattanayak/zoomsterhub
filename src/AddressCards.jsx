import React from "react";
import Marquee from "react-fast-marquee";

const AddressCards = () => {
  const addresses = [
    { title: "Telangana", address: "Miyapur, Hyderabad, 500032", bgColor: "bg-blue-100" },
    { title: "Tamil Nadu", address: "Anna Nagar, Chennai, 600040", bgColor: "bg-green-100" },
    { title: "Kerala", address: "MG Road, Kochi, 682016", bgColor: "bg-yellow-100" },
    { title: "Gujarat", address: "Gandhinagar, near highway, Ahmedabad, 382002", bgColor: "bg-red-100" },
    { title: "Haryana", address: "Huda City Centre, Gurugram, 122009", bgColor: "bg-purple-100" },
    { title: "Dubai", address: "Downtown Standard Chartered Tower, Level 5, Emaar Square, Dubai, UAE, 500001", bgColor: "bg-pink-100" },
    { title: "South Korea", address: "Busan, Gangnam, 06000", bgColor: "bg-teal-100" },
  ];

  return (
    <div className="bg-[#0C1A2A] py-8">
      <h2 className="text-3xl text-white text-center mb-6">Our Locations</h2>

      {/* First Marquee (Left Direction, Slower Speed) */}
      <Marquee gradient={false} speed={25} direction="left">
        <div className="flex space-x-6 sm:space-x-8 px-4">
          {addresses.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} w-72 sm:w-80 md:w-96 h-40 p-4 sm:p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-center`}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-700">{item.address}</p>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Second Marquee (Right Direction, Faster Speed) */}
      <Marquee gradient={false} speed={40} direction="right" className="mt-6">
        <div className="flex space-x-6 sm:space-x-8 px-4">
          {addresses.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} w-72 sm:w-80 md:w-96 h-40 p-4 sm:p-6 rounded-lg shadow-md text-gray-800 flex flex-col justify-center`}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-700">{item.address}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AddressCards;
