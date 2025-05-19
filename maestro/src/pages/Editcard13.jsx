import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { GiNetworkBars } from 'react-icons/gi';
import { IoWifi } from 'react-icons/io5';
import { BsBattery } from 'react-icons/bs';

const Editcard13 = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="text-center py-4 border-b border-gray-300 bg-black text-white relative">
        <h2 className="text-lg font-semibold">Transaction details</h2>
        <div className="absolute top-2 right-2 flex space-x-2">
          <GiNetworkBars />
          <IoWifi />
          <BsBattery />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex justify-between mt-4 space-x-2">
            <button className="flex-1 py-2 border border-black text-sm font-medium">
              Edit details
            </button>
            <button className="flex-1 py-2 border border-black text-sm font-medium bg-black text-white">
              History
            </button>
          </div>

          {/* Transaction Amount */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">GHS 145.00</h2>
          </div>

          {/* Transaction Details */}
          <div className="mb-6">
            <div className="flex justify-between py-2">
              <span className="font-medium">Shipment</span>
              <span className="text-gray-600">Container of Ironrods</span>
            </div>
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

          {/* Sent To Section */}
          <div className="mb-6 border-t pt-4">
            <h3 className="text-base text-gray-400 mb-2">Sent to</h3>
            <div className="flex justify-between py-2">
              <span className="font-medium">Account Name</span>
              <span className="text-gray-600">Yaw Ofosu</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium">Number</span>
              <span className="text-gray-600">0244567897</span>
            </div>
            <div className="py-2">
              <span className="font-medium">MTN Mobile Money</span>
            </div>
          </div>

          {/* Sent From Section */}
          <div className="border-t pt-4">
            <h3 className="text-base text-gray-400 mb-2">Sent from</h3>
            <div className="flex justify-between py-2">
              <span className="font-medium">MasterCard</span>
              <span className="text-gray-600">**** **** **** 6545</span>
            </div>
            <button
              onClick={() => navigate('/editcard14')} // Replace '/editcard14' with the actual route
              className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium"
            >
              Next <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcard13;