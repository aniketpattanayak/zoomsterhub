import React from "react";

const ImageContent = () => {
  return (
    <div className="relative w-full h-3/4 flex items-center justify-center bg-gray-200">
      {/* Background Image */}
      <img
        src="/Desktop - 1.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Foreground Image (Girl working) */}
      <img
        src="/Girl.png"
        alt="Girl Working"
        className="relative z-10 w-[50%] object-contain drop-shadow-lg"
      />
    </div>
  );
};

export default ImageContent;