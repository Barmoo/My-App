import React from 'react';
import Map from "../assets/images/map.png";
import { BsDot } from "react-icons/bs";
import { GoSquareFill } from "react-icons/go"; // Ensure the import is correct
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Pickup3 = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Map})` }} // Main background image
    >
      <div className="bg-white h-auto w-full max-w-lg mx-auto mt-8 p-4 rounded-lg shadow-md">
        {/* Pickup Location */}
        <div className="flex flex-row items-center mt-2 gap-4">
          <p className="text-amber-400 text-[15px]"><BsDot /></p>
          <div className="bg-gray-200 px-4 py-2 w-full">
            <p className="text-blue-500">Enter pickup location</p>
          </div>
        </div>

        {/* Drop-off Location */}
        <div className="flex flex-row items-center gap-4 mt-2">
          <GoSquareFill />
          <div className="bg-gray-200 px-4 py-2 w-full">
            <p className="text-gray-700">Enter drop off location here</p>
          </div>
        </div>

        {/* Done Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-amber-400 px-4 py-2 w-full ml-8 text-gray-700 font-semibold">
            Done
          </button>
        </div>
        <button
          onClick={() => navigate('/describe1')} // Replace '/next-page' with the actual route
          className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium"
          > 
          Next <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Pickup3;