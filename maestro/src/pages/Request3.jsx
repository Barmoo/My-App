import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import map from '../assets/images/map.png'; 

const Request3 = () => {
  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col">
      {/* Header */}
      <div className="bg-black text-white flex items-center justify-between px-4 py-3 relative">
        <button className="text-lg">←</button>
        <h2 className="text-lg font-semibold"></h2>Trip Details
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

      {/* Map Section */}
      <div className="mb-4 h-40 bg-gray-200 overflow-hidden">
        <img
          src={map}
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Trip Details */}
      <div className="mb-6 bg-gray-200 p-4">
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-lg mr-2">●</span>
          <span className="text-base">
            From: <strong>Industrial area</strong>
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-black text-lg mr-2">■</span>
          <span className="text-base">
            To: <strong>Olebu Ablekuma Kingdom hall</strong>
          </span>
        </div>
      </div>

      {/* Cargo Details */}
      <div className="mb-6 px-4">
        <p className="text-base mb-2">
          <strong>Cargo Type:</strong> Iron rods
        </p>
        <p className="text-base mb-2">
          <strong>Weight:</strong> 567 lbs
        </p>
        <p className="text-base mb-2">
          <strong>Pickup date:</strong> 12-Aug-2020
        </p>
        <p className="text-base mb-2">
          <strong>Dropoff date:</strong> 13-Aug-2020
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between px-4">
        <button className="text-blue-500 text-base">Edit Booking</button>
        <Link to="/request4" className="text-red-500 text-base">Cancel Booking</Link>
      </div>
    </div>
  );
};

export default Request3;