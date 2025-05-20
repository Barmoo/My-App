import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

const Setting5 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col">
      <div className="bg-black text-white text-lg font-bold px-4 py-3 flex  justify-between relative w-full">
        <h1 className="text-center flex-1">Settings</h1>
        <div className="flex items-center space-x-2 absolute top-1 right-4">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
      </div>

        <button className="text-lg absolute top-8 right-4">
          🔔
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
        </button> 
      <h2 className="text-sm font-medium text-gray-700 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter location"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
        />
        <button
          onClick={() => navigate('/setting6')} // Replace '/next-page' with the actual route
          className="mt-96 flex items-center justify-center text-blue-500 text-lg font-medium">
          Next <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Setting5;