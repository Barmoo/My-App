import React from 'react';
import { BsDot } from "react-icons/bs";
import { GoSquareFill } from "react-icons/go";
import { BsGeoAltFill } from "react-icons/bs";
import Map from "../assets/images/map.png"; // Ensure the import is correct
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Pickup1 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Map})` }} // Set the Map image as the background
    >
      <div className="bg-white h-[70%] w-full max-w-lg mx-auto mt-8 p-4 shadow-md">
        <div>
          <div className="flex flex-row items-center mt-2 gap-4">
            <p className="text-amber-400 text-[15px]"><BsDot /></p>
            <div className="bg-gray-200 px-4 py-2 w-full">
              <p className="text-blue-500">Enter pickup location</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 mt-2">
            <GoSquareFill />
            <div className="bg-gray-200 px-4 py-2 w-full">
              <p className="text-gray-700">Enter drop off location here</p>
            </div>
          </div>
        </div>
        {/* Adjusted Drop Location Pin */}
        <div className="flex flex-row items-center text-blue-500 mt-4 gap-4">
          <BsGeoAltFill />
          <p>Drop Location pin</p>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-row items-center my-4 gap-4">
          <GoSquareFill />
          <p>Frankies</p>
          <p>Osu, Accra</p>
        </div>
        <div className="flex flex-row items-center mt-2 gap-4">
          <GoSquareFill />
          <div className="flex flex-col">
            <p>New Jericho, Ebenezer School</p>
            <p className="text-gray-600">Ashaiman, Accra</p>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-row items-center mt-2 gap-4">
          <GoSquareFill />
          <div className="flex flex-col">
            <p>New Jericho, Ebenezer School</p>
            <p className="text-gray-600">Ashaiman, Accra</p>
            <button
              onClick={() => navigate('/pickup2')} // Replace '/next-page' with the actual route
              className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium"
              > 
              Next <FiArrowRight className="ml-2" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickup1;