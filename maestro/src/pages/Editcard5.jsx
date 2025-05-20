import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import mastercard from '../assets/images/mastercard.png'; // Replace with your Mastercard logo path

const Editcard5 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Payment</h2>
        <div className="absolute top-2 right-2 flex space-x-2">
          <GiNetworkBars className="text-white" />
          <IoWifi className="text-white" />
          <BsBattery className="text-white" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4 px-4">
        <button className="w-1/2 px-2 py-2 bg-black text-white font-semibold rounded-sm">
          Edit details
        </button>
        <button className="w-1/2 px-2 py-2 border border-gray-300 font-semibold rounded-sm">
          History
        </button>
      </div>

      {/* Add Payment Method */}
      <div className="px-4 mt-6 flex-grow">
        <p className="text-gray-700 text-sm mb-4">Add payment method</p>

        {/* Add New Card */}
        <button className="w-full border border-blue-500 text-blue-500 py-3 bg-blue-50 mb-4">
          + Add new card
        </button>

        {/* Existing Card */}
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3">
          <div className="flex items-center">
            <img
              src={mastercard}
              alt="Mastercard"
              className="w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-semibold">Ecobank - **** 2354</span>
          </div>
          <button className="text-blue-500 font-semibold">Edit</button>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-4 py-4">
        <Link to="/editcard6" className=" block w-full bg-black text-white font-semibold py-3 text-center">
          Save
        </Link>
      </div>
    </div>
  );
};

export default Editcard5;