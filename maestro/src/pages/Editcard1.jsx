import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import mtn from '../assets/images/mtn.jpg';
import vodafone from '../assets/images/voda.png';

const Editcard1 = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col relative">
      {/* Header */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white relative">
        <h2 className="text-lg font-semibold">Payment</h2>

        {/* Icons at the top-left corner */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4 space-x-4">
        <button className="w-1/2 px-6 py-2 bg-black text-white font-semibold rounded-sm">
          Edit details
        </button>
        <button className="w-1/2 px-6 py-2 border border-gray-300 font-semibold rounded-sm">
          History
        </button>
      </div>

      {/* Saved Accounts */}
      <div className="px-4 mt-6 flex-grow">
        <p className="text-gray-700 text-sm mb-4">Your saved mobile money accounts</p>

        {/* Add New Account */}
        <button className="w-full border border-blue-500 text-blue-500 py-3 mb-4 bg-blue-100">
          + Add new account
        </button>

        {/* Account List */}
        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3 mb-4">
          <div className="flex items-center">
            <input type="radio" name="account" className="mr-4" />
            <img
              src={mtn}
              alt="MTN"
              className="w-8 h-8 mr-3"
            />
            <span className="text-gray-700 font-semibold">MTN - 0244567896</span>
          </div>
          <button className="text-blue-500 font-semibold">Edit</button>
        </div>

        <div className="flex items-center justify-between bg-gray-100 border border-gray-300 px-4 py-3">
          <div className="flex items-center">
            <input type="radio" name="account" className="mr-4" />
            <img
              src={vodafone} // Replace with Vodafone logo
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
        <Link to="/editcard2" className="block w-full bg-black text-white font-semibold py-3 text-center">
          Save
        </Link>
      </div>
    </div>
  );
};

export default Editcard1;