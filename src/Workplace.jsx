import React from "react";

const Workplace = () => (
  <section className="bg-[#0C1A2A] p-10">
    <h2 className="text-3xl text-white font-bold text-center">Our Workplace</h2>
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-4 lg:space-y-0 p-6">
      <p className="mt-4 text-center lg:text-left text-white leading-relaxed max-w-lg">
        Zoomster Hub thrives on a culture of innovation, creativity, and collaboration. Our workplace is designed to nurture an environment where employees can grow professionally, contribute fresh ideas, and work together to develop cutting-edge solutions for businesses across various industries.
        We believe in the power of teamwork and continuous learning, encouraging our team members to share their best ideas. At Zoomster Hub, everyone plays an integral role in our mission to help businesses succeed in the digital era.
      </p>
      <img 
        src="./ourStory.webp" 
        alt="Img" 
        className="w-full sm:max-w-lg lg:max-w-sm rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      />
    </div>
    <div className="flex justify-center lg:justify-start mt-6">
    
    </div>
  </section>
);

export default Workplace;
