import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";


const Editcard2 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="w-full text-center py-4 border border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Payment</h2>
      
      <div className="absolute top-2 right-2 flex space-x-2">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
        </div>
      {/* Tabs */}
      <div className="flex justify-center mt-4 ">
        <button className="w-1/2 px-6 py-2 bg-black text-white font- semibold rounded-sm">
          Edit details
        </button>
        <button className="w-1/2 px-6 py-2 border border-gray-300 font-semibold rounded-sm">
          History
        </button>
      </div>

      {/* Add Payment Method */}
      <div className="px-4 mt-6">
        <p className="text-gray-700 text-sm mb-4">Add payment method</p>

        {/* Add New Card */}
        <button className="w-full border border-blue-500 text-blue-500 py-3 bg-blue-50">
          + Add new card
        </button>
      </div>

      {/* Save Button */}
      <div className="absolute bottom-8  left-0 right-0 ">
        <Link to="/editcard3" className=" block w-full bg-black text-white font-semibold py-3 text-center">
          Save
        </Link>
      </div>
    </div>
  );
};

export default Editcard2;