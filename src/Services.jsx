import React from "react";
const Services = () => (
  <section className="bg-gray-100 pt-20 mt-10">
    <h2 className="text-2xl font-bold text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {["Digital Media PR", "Pre-Post Production", "Web Designing", "App Development", "OTT TV Platform", "Event & Celebrity Management", "Ecommerce"].map((service) => (
        <div key={service} className="bg-white p-4 rounded shadow">
          {service}
        </div>
      ))}
    </div>
  </section>
);
export default Services;