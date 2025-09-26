import React from "react";
import { Check } from "lucide-react";
import '../.././index.css'
const  Section4 = () => {
  return (
    <div className="w-full max-m-lg container m-auto min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full    lg:w-1/2 bg-[#22776f] text-white flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-12 gap-8">
        {/* Heading */}
        <div>
          <h1 className="text-4xl sm:text-4xl lg:text-6xl lg:leading-14 font-bold leading-snug">
            The Most Comfortable Way To Make Online Payment
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 lg:pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4 ">
          <div>
            <div className=" flex gap-46 md:gap-28  font-medium">
              <span className="text-lg"> Saving You Time</span>
              <span className="text-lg">90%</span>
            </div>
            <div className="w-[100%] md:w-[40%] h-2 bg-black mt-1 rounded">
              <div className="w-[90%] h-2 bg-white rounded"></div>
            </div>
          </div>

          <div>
            <div className="flex gap-44 lg:gap-28 text-sm font-medium">
              <span className="text-lg">Trusted Company</span>
              <span className="text-lg">94%</span>
            </div>
            <div className="w-[100%] h-2 bg-black mt-1 rounded">
              <div className="w-[94%] h-2 bg-white rounded"></div>
            </div>
          </div>
        </div>

        {/* Features + Small Card */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Feature List */}
          <ul className="space-y-3 text-xl sm:text-base ">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5  text-white" /> Constant Improvement
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" /> Commitment to Customers
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" /> Best Quality You Can Get
            </li>
          </ul>

          {/* Small Card */}
          <div className="bg-white text-black rounded-lg p-6 flex items-center justify-center w-full sm:w-1/2">
            <p className="text-lg font-semibold ab">
              Keep Every Money Save in Your Online Wallet
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-fit bg-white text-[#22776f] px-6 py-4 rounded-full font-medium shadow hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/10/09/23/payment-terminal-6400998_1280.png" // replace with your actual card image path
          alt="credit cards"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default  Section4;

