import React from "react";
import { FaInstagram, FaGoogle, FaLinkedin, FaFacebook } from "react-icons/fa";

const AboutDirectorE = () => {
  return (
    <section id="aboutdirector">
      <div>
        <div className="relative w-full bg-[gray-100] py-16 px-6 flex justify-center">
          <div className="max-w-6xl w-full grid md:grid-cols-2 items-end relative">
            
            
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10 w-full md:w-1/2 hidden sm:block">
              <h1
                className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide text-black uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                I ENJOY <br /> CONNECTING WITH <br /> PEOPLE & UNDERSTAND <br /> THEIR VIEWS
              </h1>
              <p className="font-signature text-2xl mt-6 text-black">Abinash Rout</p>
            </div>

           
            <div className="relative md:col-span-2 flex justify-center md:justify-end mt-16 md:mt-20 md:ml-[-60px] md:mr-[20px]">
              <img
                src="/Abinash.jpg"
                alt="Director"
                className="w-4/5 sm:w-3/5 md:w-2/3 h-auto object-cover"
              />
            </div>

           
            <div className="pt-6 px-6 sm:px-8 relative z-20 md:col-span-2 flex flex-col md:flex-row justify-center gap-8 md:gap-12">
              
              
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h3 className="text-lg font-semibold text-black hidden sm:block">Follow Us</h3>
                <div className="mt-2 flex flex-row md:flex-col space-x-6 md:space-x-0 justify-center md:justify-start">
                  <a href="https://www.instagram.com/iamabinash_rout" className="flex items-center text-gray-700 hover:text-black transition duration-200 md:mb-4">
                    <FaInstagram className="text-2xl" />
                    <span className="hidden md:inline ml-2">Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/in/abinash-rout-269376264/" className="flex items-center text-gray-700 hover:text-black transition duration-200 md:mb-4">
                    <FaLinkedin className="text-2xl" />
                    <span className="hidden md:inline ml-2">LinkedIn</span>
                  </a>
                  <a href="https://www.imdb.com/name/nm12226141/" className="flex items-center text-gray-700 hover:text-black transition duration-200 md:mb-4">
                    <FaGoogle className="text-2xl" />
                    <span className="hidden md:inline ml-2">Google</span>
                  </a>
                  <a href="https://www.facebook.com/directorabinashrout?mibextid=wwXIfr&rdid=iuVHBUIyp2ZvATzK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F163P5KMStB%2F%3Fmibextid%3DwwXIfr" className="flex items-center text-gray-700 hover:text-black transition duration-200 md:mb-4">
                    <FaFacebook className="text-2xl" />
                    <span className="hidden md:inline ml-2">Facebook</span>
                  </a>
                </div>
              </div>

              
              <div className="w-full md:w-3/4 text-center md:text-left">
                <p className="text-gray-700 text-lg leading-relaxed text-justify md:text-justify">
                  <strong className="text-black text-2xl">A</strong>binash Rout, a native of Kendujhar, Odisha, has emerged as a dynamic force in the Indian entertainment industry. Based in Mumbai and Hyderabad, he has carved a niche as a multifaceted filmmaker, producer, and visionary entrepreneur. With a career spanning numerous domains, Abinash has directed over 100 TV commercials, web series, music videos, and serials, earning accolades such as Best Entrepreneur, Best Director, and Best Debut Assistant Director. His journey from a budding director to a trailblazer exemplifies perseverance and innovation, making him a respected figure in the competitive film circuits of Mumbai and Hyderabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full mt-8 md:mt-0 md:flex md:justify-center">
        <p className="text-gray-700 text-lg leading-relaxed text-justify  md:text-justify md:w-3/4 md:ml-16">
          As the CEO of Zoomster Hub OPC Private Limited, Abinash leads an enterprise that has diversified into OTT platforms, film production, e-commerce, and digital media. He spearheads Zoomaax TV, an OTT platform set to launch in over 190 countries, revolutionizing global entertainment consumption. His production house, Zoomaax Studio, focuses on nurturing fresh talent, offering opportunities for newcomers in the industry. Abinash’s visionary approach has expanded Zoomster Hub’s reach beyond India to countries like South Korea and Dubai, with plans to go global, ensuring the brand becomes a household name worldwide.
        </p>
      </div>
      <br/><br/>
      
      <div className="w-full mt-8 md:mt-0 md:flex md:justify-center">
        <p className="text-gray-700 text-lg leading-relaxed text-justify md:text-justify md:w-3/4 md:ml-16">
          Abinash's journey has been one of resilience and innovation. Despite facing challenges early in his career, he founded Zoom Bollywood and consolidated all platforms under Zoomster Hub OPC Pvt Ltd. His dedication to empowering emerging talent and creating high-quality content reflects his commitment to excellence. His latest endeavor, ZoomaaR, an e-commerce platform, further showcases his entrepreneurial spirit and versatility. Abinash's ability to combine creativity with business acumen has redefined standards in the entertainment and e-commerce industries, inspiring future generations to dream big and work hard.
        </p>
      </div>
    </section>
  );
};

export default AboutDirectorE;
