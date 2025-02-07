import React, { useEffect, useState } from "react";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const members = [
    {
      name: "Shilpa Parida",
      role: "Operations Project Coordinator",
      description:
        "Ensuring that the day-to-day operations run smoothly and efficiently",
      image: "/Shilpa.jpeg",
    },
    {
      name: "Nensi Gadhiya",
      role: "Creative Head",
      description:
        "Creative Head at Zoomster Hub, leading innovative projects in E-commerce, Media, and Design.",
      image: "/Nancy.JPG",
    },
    {
      name: "Rupa Sanaboyina",
      role: "Developer",
      description:
        "Expert IT developers delivering innovative solutions with quality and efficiency.",
      image: "/Rupa.JPG",
    },
    {
      name: "Aniket Pattanayak",
      role: "Developer",
      description:
        "Expert IT developers delivering innovative solutions with quality and efficiency.",
      image: "/Aniket.jpeg",
    },
   
    {
      name: "Puja Patra",
      role: "Event & Media PRO",
      description:
        "Event and Media PRO at Zoomster Hub, excelling in event management, media relations, and strategy.",
      image: "/Pooja.JPG",
    },
  ];

  const groupSize = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + groupSize) % members.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [members.length]);

  const visibleMembers = members
    .slice(activeIndex, activeIndex + groupSize)
    .concat(members.slice(0, Math.max(0, activeIndex + groupSize - members.length)));

  return (
    <section className="bg-[#0C1A2A] p-10 pt-28" id="team">
      <h2 className="text-3xl text-white font-bold text-center md:text-4xl">
        Meet Our Team
      </h2>
      <p className="text-center text-white mt-4 md:text-lg">
        This is the team of creative professionals who are passionate about
        their work and always ready to collaborate with you.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 text-center rounded shadow-md p-6 overflow-hidden bg-white transition-transform duration-300 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-gray-200 shadow-md mx-auto"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4 md:text-2xl">
              {member.name}
            </h3>
            <p className="text-gray-600 font-semibold md:text-lg">
              {member.role}
            </p>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              {member.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-2xl text-white font-semibold md:text-3xl">
          Connect with us to Grow!
        </p>
        <p className="mt-2 text-gray-400 md:text-lg">
          Delivering excellence through Web & App Development, innovative Media
          PR, engaging OTT streaming, seamless Event & Celebrity Management, and
          Pro Max—a platform creating opportunities and driving success for
          businesses and individuals globally.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/officialzoomsterhub" target="_blank"  className="text-blue-500 hover:underline ">
            Facebook
          </a>
          <a href="https://www.instagram.com/zoomsterhubofficial" target="_blank"  className="text-pink-500 hover:underline">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/official-zoomster-hub-opc-private-limited/?viewAsMember=true" target="_blank"  className="text-blue-700 hover:underline ">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
