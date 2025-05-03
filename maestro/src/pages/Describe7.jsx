import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Describe5 = () => {
  return (
    <div className="h-auto w-full max-w-3xl bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-black text-lg font-semibold">Request Summary</h2>
          <hr className="border-gray-300 mt-4" />
        </div>

        {/* Icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src="https://via.placeholder.com/50" // Replace with the actual cargo image
            alt="Cargo"
            className="w-12 h-12"
          />
          <HiOutlineArrowNarrowRight className="text-green-500 text-2xl" />
          <FaMapMarkerAlt className="text-red-500 text-2xl" />
        </div>

        {/* Locations */}
        <div className="mb-6 bg-gray-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">●</span>
            <span className="text-gray-700 text-sm">From: Industrial Area</span>
          </div>
          <hr className="border-gray-400" />
          <div className="flex items-center gap-2 mb-2">
            <span className="text-black">■</span>
            <span className="text-gray-700 text-sm">To: Olebu Ablekuma Kingdom hall</span>
          </div>
          <hr className="border-gray-400" />
          <div className="flex items-center gap-2">
            <span className="text-black">■</span>
            <span className="text-gray-700 text-sm">Stop: Teshie Ebenezer</span>
          </div>
        </div>

        {/* Distance */}
        <div className="text-center text-black text-2xl font-semibold mb-6">234 km</div>

        {/* Details */}
        <div className="text-sm text-gray-700 mb-6">
          <p>
            <span className="font-semibold">Pickup date:</span> 24th Sep 2020 / 13:30 GMT
          </p>
          <p>
            <span className="font-semibold">Drop off date:</span> 25th Sep 2020 / 16:00 GMT
          </p>
          <p>
            <span className="font-semibold">Cargo Type:</span> Iron rods, Non-hazardous
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <Link to="/describe8" className="block w-full bg-yellow-400 text-black font-semibold py-3 text-center shadow-md">
            Send Pickup Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Describe5;