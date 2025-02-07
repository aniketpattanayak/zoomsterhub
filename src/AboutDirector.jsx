import React from "react";
import { Link } from 'react-router-dom';

const AboutDirector = () => (
  <section className="bg-[#0C1A2A] text-white pt-20 flex flex-col items-center text-center" id="about-director">
    <h2 className="text-2xl font-bold md:text-4xl">About Our Director</h2>
    <div className="flex flex-col md:flex-row items-center mt-6">
      <img
        src="./Abinash.jpg"
        alt="Abinash Rout"
        className="w-full max-w-[200px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px] rounded-lg shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      />
      <p className="mt-0 md:mt-0 md:ml-6 max-w-xl text-center md:text-left">
        Abinash Rout, CEO of Zoomster Hub, is a visionary leader driving
        innovation and success through technology and creativity.<br/> Abinash Rout, a
        native of Kendujhar, Odisha, is a multifaceted Indian film director
        <Link to="/aboutdirector">...</Link> 
      </p>
    </div>
  </section>
);

export default AboutDirector;
