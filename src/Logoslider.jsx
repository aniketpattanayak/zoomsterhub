import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LogoSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".logo-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0C1A2A] py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Market Leaders Choose Us
      </h2>

      <div className="container mx-auto px-2 py-4 max-w-3xl">
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
              <img src="/S.png" alt="Logo 5" className="h-16" />
            </div>
            <div className="logo-item p-4">
              <img src="/youthedesigner.png" alt="Logo 6" className="h-16" />
            </div>
            <div className="logo-item p-4">
              <img src="/thumbrio.png" alt="Logo 7" className="h-16" />
            </div>
            <div className="logo-item p-4">
              <img src="/codrops.png" alt="Logo 8" className="h-16" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;