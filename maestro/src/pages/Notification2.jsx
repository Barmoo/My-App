import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import passport from '../assets/images/passport.png'; // Ensure the path is correct

const Notification2 = () => {
  return (
    <>
    <Navbar />

    <div className="bg-gray-100 h-screen w-full flex flex-col">
      {/* Notifications Section */}
      <div className="bg-white mx-4 mt-4 p-4 shadow-md w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-blue-500 text-sm">Mark all as read</button>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={passport}
            alt="User"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold">New quotation received</h3>
            <p className="text-gray-600 text-sm">
              Bella Armoo has sent a quote for your request
            </p>
            <p className="text-gray-400 text-xs mt-1">20 mins ago</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded-md">
            Decline
          </button>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-md">
            View
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative flex-1 mt-4 max-w-lg mx-auto">
        <img
          src=""
          alt="Map"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-md flex items-center">
          <img
            src="/path-to-pickup-icon.png"
            alt="Pickup Icon"
            className="w-6 h-6 mr-2"
          />
          <div>
            <h4 className="font-semibold text-sm">Pickup</h4>
            <p className="text-gray-600 text-xs">Industrial Area</p>
          </div>
        </div>
      </div>

      {/* Request for Pickup Button */}
      <Link to="/notification3" className="bg-yellow-500 text-center py-3 text-black font-semibold text-lg cursor-pointer">
        Request for Pickup
      </Link>
    </div></>
  );
};

export default Notification2;