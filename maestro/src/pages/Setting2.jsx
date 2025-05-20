import React from 'react';
import { Link } from 'react-router-dom';
import passport from '../assets/images/passport.png';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

const Setting2 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-2 flex flex-col items-center">
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
      <div>
      <h2 className="text-sm font-medium text-gray-500 mb-4">Edit Account Details</h2>
      </div>
      {/* Profile Image Section */}
      <div className="flex flex-col items-start mb-6 w-full">
        <img
          src={passport}
          alt="Profile"
          className="w-20 h-20 rounded-lg border-2 border-yellow-500 object-cover mb-2"
        />
        <button className="text-blue-500 text-sm font-medium">Change</button>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value="Edward Yeboah"
          className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
          readOnly
        />
        <input
          type="text"
          value="0202024965"
          className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
          readOnly
        />
        <div className="relative">
          <input
            type="password"
            value="********************"
            className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
            readOnly
          />
          <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
        </div>
        <div className="relative">
          <input
            type="password"
            value="********************"
            className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
            readOnly
          />
          <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
        </div>
      </div>

      {/* Save Button */}
      <Link to="/setting3" className="bg-black text-white text-base font-medium py-2 px-42 mt-50 w-full ">
        Save
      </Link>
    </div>
  );
};

export default Setting2;