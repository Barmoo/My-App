import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";


const Request1 = () => {
  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col">
      {/* Header */}
      <div className="bg-black text-white flex items-center justify-between px-4 py-3">
        <button className="text-lg">←</button>
        <h2 className="text-lg font-semibold">Your Requests</h2>
        <button className="text-lg relative">
          🔔
          <span className="absolute top-2 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
        </button>
        <div className="absolute top-0 right-2 flex space-x-2">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between mt-4 mx-4">
        <button className="flex-1 py-2 bg-black text-white rounded-l-md text-center">
          Requests Sent
        </button>
        <button className="flex-1 py-2 border border-black text-black rounded-r-md text-center">
          Pending Payment
        </button>
      </div>

      {/* Request Cards */}
      <div className="bg-white mx-4 mt-4 p-4 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex items-center mb-4 bg-gray-200 py-2 border-b border-gray-300">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-gray-600">From:</span>
          </div>
          <span className="font-semibold">Current location</span>
        </div>
        <div className="flex items-center mb-4 bg-gray-200 py-2">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-black rounded-full mr-2"></span>
            <span className="text-gray-600">To:</span>
          </div>
          <span className="font-semibold">Olebu Ablekuma Kingdom hall</span>
        </div>
        <div className="mb-4">
          <p>
            <span className="font-semibold">Cargo Type:</span> Iron rods
          </p>
          <p>
            <span className="font-semibold">Weight:</span> 567 lbs
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">12th August 2020</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full">
            12 responses
          </button>
        </div>
      </div>

      <div className="bg-white mx-4 mt-4 p-4 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex items-center mb-4 bg-gray-200 py-2 border-b border-gray-300">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-gray-600">From:</span>
          </div>
          <span className="font-semibold">Ashaiman Ebenezer School</span>
        </div>
        <div className="flex items-center mb-4 bg-gray-200 py-2">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-black rounded-full mr-2"></span>
            <span className="text-gray-600">To:</span>
          </div>
          <span className="font-semibold">Frankies, Osu-Accra</span>
        </div>
        <div className="mb-4">
          <p>
            <span className="font-semibold">Cargo Type:</span> Iron rods
          </p>
          <p>
            <span className="font-semibold">Weight:</span> 567 lbs
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">12th August 2020</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            No response
          </button>
        </div>
      </div>

      <div className="bg-white mx-4 mt-4 p-4 rounded-lg shadow-md w-full max-w-lg">
        <div className="flex items-center mb-4 bg-gray-200 py-2 border-b border-gray-300">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-gray-600">From:</span>
          </div>
          <span className="font-semibold">Fitrip Gym, Dwowulu</span>
        </div>
        <div className="flex items-center mb-4 bg-gray-200 py-2">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-black rounded-full mr-2"></span>
            <span className="text-gray-600">To:</span>
          </div>
          <span className="font-semibold">Achimota Retail Centre</span>
        </div>
        <div className="mb-4">
          <p>
            <span className="font-semibold">Cargo Type:</span> Iron rods
          </p>
          <p>
            <span className="font-semibold">Weight:</span> 567 lbs
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">12th August 2020</p>
          <Link to="/request3" className="bg-red-500 text-white px-6 py-2 rounded-full">
            No response
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Request1;