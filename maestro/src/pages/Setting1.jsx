import React from 'react';
import { Link } from 'react-router-dom';
import passport from '../assets/images/passport.png';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

const Setting1 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-4">
      {/* Navbar */}
      <div className="bg-black text-white text-lg font-bold px-4 py-3 flex items-center justify-between relative">
        <h1 className="text-center flex-1">Settings</h1>
        {/* Top-Right Icons */}
        <div className="flex items-center space-x-2 absolute top-1 right-4">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
        {/* Notification Bell Icon */}
        <button className="text-lg absolute bottom-1 right-12">
          🔔
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
        </button>
      </div>

      {/* Account Section */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Account</h2>
        <div className="bg-white shadow-md p-4 flex items-center">
          <img
            src={passport}
            alt="Profile"
            className="w-16 h-16 rounded-lg border-2 border-yellow-500 object-cover mr-4"
          />
          <div className="flex-1">
            <p className="text-base font-medium">Bella Armoo</p>
            <p className="text-sm text-gray-500">0202024965</p>
          </div>
          <span className="text-gray-400 text-lg">&gt;</span>
        </div>
      </div>

      {/* Favourite Destinations Section */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-2">Favourite Destinations</h2>
        <div className="bg-white shadow-md p-4">
          <button className="text-blue-500 text-sm font-medium mb-4">+ Add location</button>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <Link to="/setting2" className="text-base">Olebu Ablekuma Kingdom hall</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting1;