import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import ServicesSlider from "./ServicesSlider";
import Features from "./Features";
import OurStory from "./OurStory";
import Innovations from "./Innovations";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import CompanyUmberalla from "./CompanyUmberalla";
import Team from "./Team";
import AboutDirector from "./AboutDirector";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Workplace from "./Workplace";
import Companyapps from "./Companyapps";
import LogoSlider from "./Logoslider";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";
import Clientele from "./Clientele";
import WhatsAppButton from "./WhatsAppButton";
import AppDevelopment from "./AppDevelopment";
import WebDesigning from "./WebDesigning";
import OttTv from "./OttTv";
import DigitalMedia from "./DigitalMedia";
import PrePost from "./PrePost";
import EventManagement from "./EventManagement";
import Disclaimer from "./Disclaimer";
import Feedback from "./Feedback";
import AboutDirectorE from "./AboutDirectorE";

// ✅ Loading Screen Component with Lottie Animation
const LoadingScreen = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#F2F2F2]">
      {/* Lottie Animation */}
      <dotlottie-player
        src="https://lottie.host/d743eaab-e650-441e-8699-fc02c073c841/95tdIIEnJU.lottie"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showClientele, setShowClientele] = useState(false);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  const handleClienteleClick = () => {
    setShowClientele(true);
  };

  return (
    <Router>
      <div className="max-w-screen overflow-x-hidden">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroBanner />
                    <Companyapps />
                    <LogoSlider />
                    <ServicesSlider />
                    <Features />
                    <OurStory />
                    <Innovations />
                    <Workplace />
                    <Testimonials />
                    <AboutDirector />
                    <Team />
                    <FAQ />
                    <ContactUs />
                    <ContactForm />
                    <WhatsAppButton />
                    {showClientele && <Clientele />}
                  </>
                }
              />
              <Route path="/company-umbrella" element={<CompanyUmberalla />} />
              <Route path="/ourservices" element={<ServicesSlider />} />
              <Route exact path="/ourteam" element={<Team />} />
              <Route exact path="/about-director" element={<AboutDirector />} />
              <Route exact path="/contact-us" element={<ContactForm />} />
              <Route exact path="/aboutdirector" element={<AboutDirectorE />} />
              <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route exact path="/cookies" element={<CookiesPolicy />} />
              <Route exact path="/ourcollaborations" element={<Clientele />} />
              <Route exact path="/AppDevelopment" element={<AppDevelopment />} />
              <Route exact path="/EventManagement" element={<EventManagement />} />
              <Route exact path="/WebDesigning" element={<WebDesigning />} />
              <Route exact path="/OttTv" element={<OttTv />} />
              <Route exact path="/DigitalMedia" element={<DigitalMedia />} />
              <Route exact path="/PrePro" element={<PrePost />} />
              <Route exact path="/disclaimer" element={<Disclaimer />} />
              <Route exact path="/feedback" element={<Feedback />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
