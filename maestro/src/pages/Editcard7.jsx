import React from 'react';
import { Link } from 'react-router-dom';

const Editcard7 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white">
        <h2 className="text-lg font-semibold">Payment</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4 px-4">
        <button className="px-14 py-2 bg-black text-white font-semibold">
          Edit details
        </button>
        <button className="px-14 py-2 border border-gray-300 font-semibold">
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

        {/* Existing Cards */}
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3 mb-4">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" // Replace with Mastercard logo
              alt="Mastercard"
              className="w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-semibold">Ecobank - **** 2354</span>
          </div>
          <button className="text-blue-500 font-semibold">Edit</button>
        </div>

        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Vodafone-icon.png" // Replace with Vodafone logo
              alt="Vodafone"
              className="w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-semibold">Voda - 0203435678</span>
          </div>
          <button className="text-blue-500 font-semibold">Edit</button>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-4 py-4">
        <Link to="/editcard8" className="block w-full bg-black text-white font-semibold py-3 text-center">
          Save
        </Link>
      </div>
    </div>
  );
};

export default Editcard7;