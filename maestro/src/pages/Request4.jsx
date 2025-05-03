import React from 'react';
import { Link } from 'react-router-dom';

const Request4 = () => {
  return (
    <div className="font-sans bg-gray-300 bg-opacity-50 min-h-screen w-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4">
        <h2 className="text-md font-medium text-center mb-4">Cancel Booking</h2>
        <hr className="mb-2 border-gray-300" />
        <p className="text-center text-base text-gray-500">
          Are you sure you want to
        </p>
        <p className="text-center text-base mb-6 text-gray-500">cancel this booking?</p>
        <div className="flex flex-col space-y-4">
          <button className="bg-yellow-500 text-black font-medium py-2 shadow-md hover:bg-yellow-600">
            Yes, Delete
          </button>
          <Link to="/request1" className="text-gray-500 font-medium hover:underline">
            No, go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Request4;