import React from "react";
import img1 from "./images/WebSite-02.png";
const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="bg-gradient-to-r from-blue-100 to-blue-50 flex h-[70vh] relative top-[80px]  px-10">
      <div className="max-w-lg w-full flex flex-col md:flex-row items-center justify-between gap-8 p-6 relative left-[300px]">
        {/* Left Content */}
        <div className="text-left w-full scale-200 flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenu dans Yakin!</h1>
          <p className="text-md text-gray-700 mt-2">
            The all-in-one Islamic education app for children
          </p>
        </div>

        {/* Right Image */}
        <div className="w-40 h-40  flex items-center justify-center rounded-lg flex-1 relative left-[300px] scale-200">
        <img
              src={img1}
              alt="Learning Kid"
            />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;