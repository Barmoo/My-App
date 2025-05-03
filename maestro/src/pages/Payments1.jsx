import React from 'react';
import { FaChevronLeft, FaBell } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Payments1 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      {/* <div className="flex items-center justify-between bg-black text-white px-4 py-3">
        <button>
          <FaChevronLeft className="text-white text-lg" />
        </button>
        <h1 className="text-lg font-semibold">maestro</h1>
        <div className="relative">
          <FaBell className="text-yellow-500 text-lg" />
          <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>
      </div> */}

      {/* Title */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-black">Pay for cargo pickup</h2>
      </div>

      {/* Select Account */}
      <div className="mt-8 px-4 w-full max-w-md mx-auto">
        <label className="block text-gray-700 text-sm mb-2">Select account to pay with</label>
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3 rounded-md">
          <div className="flex items-center">
            <FaCcMastercard className="text-black text-2xl mr-3" />
            <span className="text-gray-700 font-semibold">Ecobank - **** 2354</span>
          </div>
          <FaChevronLeft className="text-gray-500 rotate-90" />
        </div>
      </div>

      {/* Pay Button */}
      <div className="mt-auto px-4 w-full max-w-md mx-auto">
        <Link to="/payments2" className=" block w-full bg-yellow-400 text-black font-semibold py-3 shadow-md text-center">
          Pay GHS 4,500
        </Link>
      </div>
    </div>
  );
};

export default Payments1;