import React from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Describe4 = () => {
  return (
    <div className="h-auto w-full max-w-3xl p-6">
      {/* Step Header */}
      <div className="text-gray-500 text-sm mb-4">Step 2 of 2</div>
      <div className="text-black text-lg font-semibold mb-6">Set pickup date and time</div>

      {/* Pickup Date and Time */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-5"></label>
        <div className="w-full bg-gray-300 border border-gray-300 px-4 py-2 text-gray-700">
          Pickup date and time
        </div>
        <div className="mt-2">
          <div className="flex items-center px-4 py-3 bg-gray-300 hover:bg-gray-400 cursor-pointer">
            <FaClock className="text-gray-500 mr-4" />
            <span className="text-gray-700">Any moment from now</span>
          </div>
          <hr className="border-gray-400" />
          <div className="flex items-center px-4 py-3 bg-gray-300 hover:bg-gray-400 cursor-pointer">
            <FaCalendarAlt className="text-gray-500 mr-4" />
            <span className="text-gray-700">Set custom date and time</span>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mb-6">
        <label className="block text-gray-500 text-sm mb-2">Additional notes</label>
        {/* <textarea
          placeholder="Additional notes"
          className="w-full bg-gray-300 border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          rows="3"
        ></textarea> */}
      </div>

      {/* Back and Continue Buttons */}
      <div className="flex items-center justify-between">
        <button className="text-gray-700 text-sm">Back</button>
        <Link to="/describe5" className="bg-yellow-400 text-black font-semibold py-3 px-12 shadow-md">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Describe4;