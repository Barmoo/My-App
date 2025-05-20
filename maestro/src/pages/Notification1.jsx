import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
// import mapImage from '../assets/images/map.png'; // Ensure the path is correct

const Notification1 = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{
          // backgroundImage: `url(${mapImage})`,
        }}
      >
        {/* Notifications Section */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4  shadow-md w-11/12 md:w-3/4 lg:w-1/2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <button className="text-blue-500 text-sm">Mark all as read</button>
          </div>
          <div className="flex items-center">
            <img
              src="/path-to-maestro-logo.png"
              alt="Notification Icon"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold">Invoice accepted</h3>
              <p className="text-gray-600 text-sm">Invoice accepted from shipper</p>
              <p className="text-gray-400 text-xs mt-1">20 mins ago</p>
            </div>
          </div>
        </div>

        {/* Pickup Section */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white p-2 shadow-md flex items-center w-11/12 md:w-3/4 lg:w-1/2">
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

        {/* Request for Pickup Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-1/2">
          <Link
            to="/notification3"
            className="block bg-yellow-500 text-center py-3 text-black font-semibold text-lg shadow-md"
          >
            Request for Pickup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Notification1;