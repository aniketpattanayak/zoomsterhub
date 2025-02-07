import React, { useEffect } from "react";

const HeroBanner = () => {
  useEffect(() => {
    // Load the DotLottie Player script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0B1A2A] flex items-center px-8 md:px-16" id="home">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#00B6B6]">Expert</span> For Your <br /> Growing Business!
        </h1>

        <div className="text-lg mt-8 max-w-xs sm:max-w-lg">
          <p className="sm:hidden text-justify">
            Zoomster Hub OPC provides end-to-end solutions for entertainment, career growth, business development, and digital services. The company offers exclusive content available in 193 countries.
          </p>

          <p className="hidden sm:block text-justify">
            Zoomster Hub OPC Private Limited is a one-stop solution for entertainment, career growth, business development, website and application development, pre- to post-production services, and event or celebrity management. The company offers exclusive content available in 193 countries.
          </p>
        </div>
      </div>

      {/* Right: DotLottie Animation */}
      <div className="hidden md:flex justify-center items-center w-1/2">
        <dotlottie-player 
          src="https://lottie.host/550f146f-03c7-498c-a202-7bc6208d2ebe/iRCAFml78j.lottie"
          background="transparent" 
          speed="1" 
          style={{ width: "80%", maxWidth: "400px", height: "auto" }} 
          loop 
          autoplay>
        </dotlottie-player>
      </div>
    </section>
  );
};

export default HeroBanner;

// import React from "react";

// const ImageContent = () => {
//   return (
//     <div className="relative w-3/4 h-3/4 flex items-center justify-center bg-gray-200">
      
//       <img
//         src="/Desktop - 1.png"
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />

      
//       <img
//         src="/Girl.png"
//         alt="Girl Working"
//         className="relative z-10 w-[50%] object-contain drop-shadow-lg"
//       />
//     </div>
//   );
// };

// export default ImageContent;