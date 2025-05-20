import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

const Setting4 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-2 flex flex-col items-center mt-6">
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
      <h2 className="text-sm font-medium text-gray-500 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          value="Olebu Ablekuma Kingdom hall"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
          readOnly
        />
      </div>

      {/* Add Location Button */}
      <button className="text-blue-500 text-sm font-medium mb-4">+ Add location</button>

      {/* Selected Location */}
      <div className="flex items-center w-full max-w-md mb-6">
        <span className="text-black text-lg mr-2">■</span>
        <p className="text-base">Olebu Ablekuma Kingdom hall</p>
      </div>

      {/* Save Button */}
      <Link to="/setting5" className="bg-black text-white text-base font-medium py-3 px-6 w-full mt-96 flex justify-center">
        Save
      </Link>
    </div>
  );
};

export default Setting4;