import React from 'react';
import { GiNetworkBars } from 'react-icons/gi';
import { IoWifi } from 'react-icons/io5';
import { BsBattery } from 'react-icons/bs';
import mastercard from '../assets/images/mastercard.png';

const Editcard14 = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      <div className="bg-white w-full  p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="relative bg-black text-white px-4 py-4">
          {/* Icons at the top */}
          <div className="absolute top-2 right-2 flex space-x-2">
            <GiNetworkBars className="text-lg" />
            <IoWifi className="text-lg" />
            <BsBattery className="text-lg" />
          </div>

          {/* Title and Bell Icon */}
          <div className="text-center justify-between text-white relative">
            <h2 className="text-lg font-semibold">Transaction details</h2>
            <button className=" top-6 right-2">🔔</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4 space-x-2">
          <button className="w-1/2 py-2 border border-black text-sm font-medium rounded-sm">
            Edit details
          </button>
          <button className="w-1/2 py-2 border border-black text-sm font-medium bg-black text-white rounded-sm">
            History
          </button>
        </div>

        {/* Amount */}
        <div className="text-center my-6">
          <h2 className="text-2xl font-bold">GHS 145.00</h2>
        </div>

        {/* Transaction Details */}
        <div className="mb-6">
          <div className="flex justify-between py-2">
            <span className="font-medium">Amount</span>
            <span className="text-gray-600">GHS 145.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Date</span>
            <span className="text-gray-600">21st Sep 2020</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Status</span>
            <span className="text-green-600 font-medium">Success</span>
          </div>
        </div>

        {/* Sent To */}
        <div className="mb-6 border-t pt-4">
          <h3 className="text-sm text-gray-400 mb-2">Sent to</h3>
          <div className="flex justify-between py-2">
            <span className="font-medium">Account Name</span>
            <span className="text-gray-600">Yaw Ofosu</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Number</span>
            <span className="text-gray-600">0244567897</span>
          </div>
          <div className="flex items-center py-2">
            <span className="font-medium">MTN Mobile Money</span>
            <img
              src="/path-to-mtn-logo.png"
              alt="MTN Logo"
              className="w-6 h-6 ml-2"
            />
          </div>
        </div>

        {/* Sent From */}
        <div className="border-t pt-4">
          <h3 className="text-sm text-gray-400 mb-2">Sent from</h3>
          <div className="flex justify-between items-center py-2">
            <img
              src={mastercard}
              alt="GH Logo"
              className="w-6 h-6"
            />
            <span className="text-gray-600">0244345677</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcard14;