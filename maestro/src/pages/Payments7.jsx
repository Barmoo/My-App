import React from 'react';
import { Link } from 'react-router-dom';

const Payments7 = () => {
  return (
    <div className="h-screen w-full bg-white">
      {/* Title */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-black">Pay for cargo pickup</h2>
      </div>

      {/* Select Account */}
      <div className="mt-8 px-4">
        <label className="block text-gray-700 text-sm mb-2">Select account to pay with</label>
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Mtn-logo.jpg" // Replace with the actual MTN logo
              alt="MTN"
              className="w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-semibold">MTN - 0244567896</span>
          </div>
          <span className="text-gray-500">&#9662;</span> {/* Downward arrow */}
        </div>
      </div>

      {/* Pay Button */}
      <div className="absolute bottom-8 left-4 right-4">
        <Link to="/pickup1" className=" block w-full bg-yellow-400 text-black font-semibold py-3 text-center shadow-md">
          Pay GHS 4,500
        </Link>
      </div>
    </div>
  );
};

export default Payments7;