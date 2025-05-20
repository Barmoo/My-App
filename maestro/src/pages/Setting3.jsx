import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

const Setting3 = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col">
      
      <div className="bg-black text-white text-lg font-bold px-4 py-3 flex items-center justify-between relative w-full">
            <h1 className="text-center flex-1">Settings</h1>
            <div className="flex items-center space-x-2 absolute top-1 right-4">
              <GiNetworkBars />
              <IoWifi />
              <BsBattery />
            </div>
            <button className="text-lg absolute bottom-2 right-2">
                🔔
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
            </button>
            </div>

            <h2 className="text-sm font-medium text-gray-500 mb-4 mt-10">Add favourite locations</h2>
      {/* Input Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter location"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
        />
      </div>

      {/* Locations List */}
      <div className="w-full max-w-md space-y-4">
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">Olebu Ablekuma Kingdom hall</p>
              <p className="text-sm text-gray-500">Ablekuma, Accra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">Frankies</p>
              <p className="text-sm text-gray-500">Osu, Accra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">New Jericho, Ebenezer School</p>
              <p className="text-sm text-gray-500">Ashaiman, Accra</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <div>
              <p className="text-base font-medium">New Jericho, Ebenezer School</p>
              <p className="text-sm text-gray-500">Ashaiman, Accra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow to Next Page */}
      <button
        onClick={() => navigate('/setting4')} // Replace '/next-page' with the actual route
        className="mt-50 flex items-center justify-center text-blue-500 text-lg font-medium"
      >
        Next <FiArrowRight className="ml-2" />
      </button>
      
    </div>
  );
};

export default Setting3;