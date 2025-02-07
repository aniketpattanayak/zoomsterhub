import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroBanner = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    // Load the DotLottie Player script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      lottieRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lottieRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0B1A2A] flex items-center px-8 md:px-16" id="home">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-white">
        <h1 ref={textRef} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#00B6B6]">Expert</span> For Your <br /> Growing Business!
        </h1>

        <div ref={paraRef} className="text-lg mt-8 max-w-xs sm:max-w-lg">
          <p className="sm:hidden text-justify">
            Zoomster Hub OPC provides end-to-end solutions for entertainment, career growth, business development, and digital services. The company offers exclusive content available in 193 countries.
          </p>

          <p className="hidden sm:block text-justify">
            Zoomster Hub OPC Private Limited is a one-stop solution for entertainment, career growth, business development, website and application development, pre- to post-production services, and event or celebrity management. The company offers exclusive content available in 193 countries.
          </p>
        </div>
      </div>

      {/* Right: DotLottie Animation */}
      <div ref={lottieRef} className="hidden md:flex justify-center items-center w-1/2">
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
