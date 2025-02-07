import React from 'react';

const Features = () => {
  return (
    <section className="p-6 bg-[#0C1A2A] text-white text-center">
      <h5 className="text-3xl font-semibold mb-4">Packed with Thousands of Features</h5>
      <div className="flex flex-col md:flex-row justify-center items-center mt-2 space-y-4 md:space-y-0 md:space-x-8">
       
        <div>
          <h1 className="text-6xl font-bold lg:pr-20">100%</h1>
        </div>

       
        <div>
          <ul className="space-y-2 text-gray-200 text-lg md:text-left lg:pl-20 pt-5">
            <li>Designed for Creators</li>
            <li>User-Friendly Design</li>
            <li>Affordable Pricing</li>
            <li>Customizable Themes</li>
            <li>24/7 Support</li>
            <li>Risk-Free Trial</li>
            <li>Endless Possibilities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
