import React from "react";

const Innovations = () => (
  <section className="bg-[#0C1A2A] p-10">
    <h2 className="text-3xl text-white font-bold text-center mb-6">Zoomster Hub's Future Innovations</h2>
    <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start lg:space-x-8 space-y-6 lg:space-y-0 p-6">
    <p className="text-center lg:text-left pl-4 text-white leading-relaxed max-w-lg">
        Zoomster Hub OPC Private Limited is a corporate company offering comprehensive solutions across various sectors. In addition to its existing services, the company is set to launch its own network, Zoomster 5G, across India. This exciting development will revolutionize connectivity, providing high-speed internet and seamless communication. Furthermore, Zoomster Hub will introduce Zoomaax TV, an OTT TV platform, enhancing entertainment experiences for users. With a commitment to innovation and growth.
      </p>

      <img 
        src="./in.webp" 
        alt="Future Innovations" 
        className="w-full max-w-sm rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        />
        
    </div>
  </section>
);

export default Innovations;
