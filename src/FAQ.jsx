import React from "react";

const FAQ = () => (
  <section className="bg-[#0C1A2A] p-10 text-white">
    <h2 className="text-2xl font-bold text-center md:text-4xl">Common Questions & Answers</h2>
    <p className="text-center mt-4 text-lg md:text-xl">
      Find out all the essential details about Zoomster Hub and how it can help your business grow in the digital world.
    </p>
    <div className="mt-8 space-y-6">
      <details className="mb-4 border-t-2 border-white pt-4">
        <summary
          className="cursor-pointer font-bold text-lg md:text-xl hover:text-[#00B6B6] transition-colors duration-300"
          aria-expanded="false"
          aria-controls="faq1"
        >
          What is Zoomster Hub?
        </summary>
        <p className="mt-2" id="faq1">
          Zoomster Hub is a dynamic platform offering a wide range of digital tools and services designed to help businesses optimize their operations, boost productivity, and strengthen their online presence. As a one-stop solution, Zoomster Hub provides innovative solutions across various sectors, including e-commerce, OTT platforms, digital media PR, and more. By combining advanced technology with user-friendly features, Zoomster Hub enables businesses to thrive in the digital age. Whether you’re a small startup or an established enterprise, Zoomster Hub equips you with everything you need to succeed and stay ahead of the competition.
        </p>
      </details>
      <details className="mb-4 border-t-2 border-white pt-4">
        <summary
          className="cursor-pointer font-bold text-lg md:text-xl hover:text-[#00B6B6]  transition-colors duration-300"
          aria-expanded="false"
          aria-controls="faq2"
        >
          Why Should I Use Zoomster Hub?
        </summary>
        <p className="mt-2" id="faq2">
          Zoomster Hub offers businesses powerful tools that simplify and optimize your digital ecosystem, making it easier, faster, and more efficient to manage. From creating professional proposals to providing advanced analytics, it helps you stay competitive in the digital world and ensures your business runs smoothly across various platforms. With a comprehensive suite of services, Zoomster Hub empowers businesses to scale, grow, and succeed in today’s fast-paced digital landscape.
        </p>
      </details>
      <details className="mb-4 border-t-2 border-white pt-4">
        <summary
          className="cursor-pointer font-bold text-lg md:text-xl hover:text-[#00B6B6]  transition-colors duration-300"
          aria-expanded="false"
          aria-controls="faq3"
        >
          How Do I Get Started with Zoomster Hub?
        </summary>
        <p className="mt-2" id="faq3">
          Getting started with Zoomster Hub is easy! Simply sign up for an account, explore the available features, and select the tools that best suit your business needs. You can begin using the platform immediately with a free trial to experience all that it has to offer.
        </p>
      </details>
      <details className="mb-4 border-t-2 border-white pt-4">
        <summary
          className="cursor-pointer font-bold text-lg md:text-xl hover:text-[#00B6B6]  transition-colors duration-300"
          aria-expanded="false"
          aria-controls="faq4"
        >
          What Features Does Zoomster Hub Offer?
        </summary>
        <p className="mt-2" id="faq4">
          Zoomster Hub provides a wide range of tools designed to assist businesses with customer engagement, proposal creation, project management, team collaboration, and much more. All features are seamlessly integrated to work together, ensuring a smooth and efficient experience for users.
        </p>
      </details>
      <details className="mb-4 border-t-2 border-white pt-4">
        <summary
          className="cursor-pointer font-bold text-lg md:text-xl hover:text-[#00B6B6] "
          aria-expanded="false"
          aria-controls="faq5"
        >
          Can I Integrate Zoomster Hub with My Existing Tools?
        </summary>
        <p className="mt-2" id="faq5">
          Yes! Zoomster Hub is designed to integrate with many popular third-party tools, including CRM systems, project management platforms, and marketing tools, allowing you to continue using the tools that work best for your business.
        </p>
      </details>
      <details className="mb-4 border-t-2 border-white pt-4">
        <summary
          className="cursor-pointer font-bold text-lg md:text-xl hover:text-[#00B6B6]  transition-colors duration-300"
          aria-expanded="false"
          aria-controls="faq6"
        >
          Is Customer Support Available?
        </summary>
        <p className="mt-2" id="faq6">
          Yes, Zoomster Hub offers comprehensive customer support, including live chat, email assistance, and an extensive help center. We're here to assist you at every step of your journey with us.
        </p>
      </details>
    </div>
  </section>
);

export default FAQ;
