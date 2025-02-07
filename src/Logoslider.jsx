
import React from "react";
import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  const logos = [
    "/logo1.png",
    "/logo2.png",

    "/logo4.png",
  ];

  return (
    <div className="bg-[#0C1A2A] py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Market Leaders Choose Us
      </h2>

      <div className="container mx-auto px-2 py-4  max-w-3xl">
      <div className="overflow-hidden border-2 border-gray-300 bg-white rounded-xl">
        <Marquee speed={50} gradient={false} loop={0}>
          <div className="logo-item p-4">
            <img src="/logo1.png" alt="Logo 1" className="h-16" />
          </div>
          <div className="logo-item p-4">
            <img src="/logo2.png" alt="Logo 2" className="h-16" />
          </div>
          <div className="logo-item p-4">
            <img src="/brand_logo.png" alt="Logo 3" className="h-16" />
          </div>
          <div className="logo-item p-4">
            <img src="/logo4.png" alt="Logo 4" className="h-16" />
          </div>
          
          <div className="logo-item p-4">
            <img src="/S.png" alt="Logo 4" className="h-16" />
          </div>
          <div className="logo-item p-4">
            <img src="/youthedesigner.png" alt="Logo 4" className="h-16" />
          </div>
          <div className="logo-item p-4">
            <img src="/thumbrio.png" alt="Logo 4" className="h-16" />
          </div>
          <div className="logo-item p-4">
            <img src="/codrops.png" alt="Logo 4" className="h-16" />
          </div>
          {/* Add more logos as needed */}
        </Marquee>
      </div>
    </div>
    </div>
  );
};

export default LogoSlider;





