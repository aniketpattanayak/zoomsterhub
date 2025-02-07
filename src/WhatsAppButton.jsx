import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const WhatsAppButton = () => {
  useEffect(() => {
   
    gsap.fromTo(
      '.whatsapp-btn',
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.whatsapp-btn',
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/+917702827739"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-16 h-16"
        />
      </a>
    </div>
  );
};


export default WhatsAppButton;