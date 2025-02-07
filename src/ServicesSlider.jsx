import React, { useState, useEffect } from 'react';

const ServicesSlider = () => {
  const services = [
    {
      name: "App Development",
      imageUrl: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
      text: "App development crafts tailored solutions for e-commerce, gaming, and cosmetics industries, emphasizing user-friendly design, seamless functionality, and innovative features to boost engagement, enhance experiences, and drive business growth.",
      id: "AppDevelopment"
    },
    {
      name: "Web Designing",
      imageUrl: "https://www.slaconsultantsindia.com/wp_files/wp-content/uploads/2018/06/Web-Designing-Courses-for-Beginners.jpg",
      text: "Web designing combines creativity and functionality to craft visually appealing, responsive websites. It focuses on layout, color schemes, and usability, ensuring seamless navigation and an engaging user experience across all devices.",
      id: "WebDesigning"
    },
    {
      name: "OTT TV Platform",
      imageUrl: "https://externlabs.com/blogs/wp-content/uploads/2022/02/best-ott-1-1.png",
      text: "We are launching a cutting-edge OTT TV platform that will deliver seamless streaming of movies, series, live sports, news, and exclusive content in over 193 countries and 30+ languages, offering a premium entertainment experience globally.",
      id: "OttTv"
    },
    {
      name: "Digital Media PR",
      imageUrl: "https://www.differencebetween.net/wp-content/uploads/2019/08/Difference-between-Social-Media-and-Digital-Marketing.png",
      text: "We specialize in enhancing brand visibility and credibility through strategic digital campaigns, impactful storytelling, media coverage, and influencer collaborations, connecting brands with their audience effectively in the digital landscape.",
      id: "DigitalMedia"
    },
    {
      name: "Pre-Post Production",
      imageUrl: "https://anakle.com/wp-content/uploads/2021/07/Anakle-blog-2-2.jpg",
      text: "We offer end-to-end solutions for pre and post-production, including planning, scripting, casting, filming, editing, sound design, visual effects, and color grading, ensuring high-quality, impactful content creation.",
      id: "PrePro"
    },
    {
      name: "Event & Celebrity Management",
      imageUrl: "https://3.imimg.com/data3/SM/UP/MY-14611198/red3-red_carpet_lights_large_0-500x500.jpg",
      text: "Event and Celebrity Management ensures seamless event execution, strategic planning, and impactful celebrity appearances, enhancing brand visibility, audience engagement, and meaningful connections for memorable and successful experiences.",
      id: "EventManagement"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Adjust itemsPerPage based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3); // 1 card on small screens, 3 cards on medium & large screens
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage); // Listen for window resize
    return () => window.removeEventListener("resize", updateItemsPerPage); // Cleanup event listener
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < services.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <section id="services" className="py-16 px-8 bg-[#0C1A2A] pt-40">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white pb-5">Our Services at Zoomster Hub</h2>
        <p className="text-white">
          At Zoomster Hub, we provide AI-powered tools designed to streamline workflows, automate tasks, and boost productivity for your business.<br />
          Simplify your operations and achieve effortless growth with our intelligent solutions.
        </p>
      </div>

      <div className="relative mt-8 flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-[#00B6B6] disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(currentIndex, currentIndex + itemsPerPage).map((service, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <a href="#">
                <img
                  className="rounded-t-lg object-cover w-full h-40"
                  src={service.imageUrl}
                  alt={service.name}
                />
              </a>
              <div className="p-4">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.name}
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                  {service.text}
                </p>
                <a
                  href={`/${service.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-cyan rounded-lg hover:bg-[#00B6B6] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Show more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 disabled:opacity-50"
          disabled={currentIndex + itemsPerPage >= services.length}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ServicesSlider;