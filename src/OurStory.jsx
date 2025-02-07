import React from "react";
const OurStory = () => (
  <section className="bg-[#0C1A2A]  p-10">
    <h2 className="text-3xl text-white font-bold text-center">Our Story</h2>
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-4 lg:space-y-0 p-6">
  <p className="mt-4 text-center lg:text-left text-white leading-relaxed max-w-lg">
    At Zoomster Hub, we began with a vision to simplify and streamline how businesses manage their digital needs. Our mission is to offer advanced tools and solutions that empower businesses to grow, scale, and stay ahead in today’s fast-paced digital landscape.
    From humble beginnings to becoming a leading platform in the digital space, we have always embraced the power of innovation and collaboration. Today, we continue to adapt to our clients' needs, delivering tailored solutions that boost productivity, drive success, and enable businesses to thrive.
  </p>
  <img 
  src="./story.webp" 
  alt="Img" 
  className="w-full max-w-sm rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
/>

</div>

  </section>
);
export default OurStory;