import React from 'react';
import { Link } from 'react-router-dom';
import { IoWifi } from "react-icons/io5";
import { BsBattery } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import mastercard from '../assets/images/mastercard.png';
const EditCard10 = () => {
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

        {/* Payment Options */}
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 mb-4">
          <label className="flex items-center mb-2 md:mb-0">
            <input type="radio" name="paymentMethod" className="mr-2" defaultChecked />
            <span className="text-gray-700 text-sm">Card Payment</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" />
            <span className="text-gray-700 text-sm">Mobile money</span>
          </label>
        </div>

        {/* Card Details */}
        <div className="bg-gray-100 p-4">
          <p className="text-gray-700 text-sm font-semibold mb-2">Enter your card details</p>
          <input
            type="text"
            placeholder="Edward Yeboah"
            className="w-full p-3 border border-gray-300 mb-4"
            value="Edward Yeboah"
            readOnly
          />
          <div className="relative">
            <input
              type="text"
              placeholder="5467 4657 3747 2354"
              className="w-full p-3 border border-gray-300 mb-4"
              value="5467 4657 3747 2354"
              readOnly
            />
            <img
              src={mastercard}
              alt="Mastercard"
              className="absolute right-4 top-3 w-8 h-8"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="08"
              className="w-1/2 p-3 border border-gray-300"
              value="08"
              readOnly
            />
            <input
              type="text"
              placeholder="20"
              className="w-1/2 p-3 border border-gray-300"
              value="20"
              readOnly
            />
          </div>
          <label className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" checked readOnly />
            <span className="text-gray-700 text-sm">Set this as default payment account</span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-4 py-4">
        <Link to="/editcard11" className="block w-full bg-black text-white font-semibold py-3 text-center">
          Save
        </Link>
      </div>
    </div>
  );
};

export default EditCard10;