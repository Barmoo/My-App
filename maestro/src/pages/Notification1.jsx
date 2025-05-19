import React from 'react';
import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

const Notification1 = () => {
  return (
    <><Navbar />
    <div className="bg-gray-100 h-screen w-full flex flex-col">
      {/* Header */}
      {/* <div className="bg-black text-white flex items-center justify-between px-4 py-3">
      <button className="text-lg">☰</button>
      <div className="flex items-center">
        <img
          src="/path-to-maestro-logo.png"
          alt="Maestro Logo"
          className="h-6 mr-2"
        />
        <span className="text-lg font-semibold">maestro</span>
      </div>
      <button className="text-lg relative">
        🔔
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
      </button>
    </div> */}

      {/* Notifications Section */}
      <div className="bg-white mt-4 p-4 rounded-lg shadow-md max-w-lg mx-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-blue-500 text-sm">Mark all as read</button>
        </div>
        <div className="flex items-center">
          <img
            src="/path-to-maestro-logo.png"
            alt="Notification Icon"
            className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h3 className="font-semibold">Invoice accepted</h3>
            <p className="text-gray-600 text-sm">Invoice accepted from shipper</p>
            <p className="text-gray-400 text-xs mt-1">20 mins ago</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative flex-1 mt-4 max-w-lg mx-4">
        <img
          src="/path-to-map-image.png"
          alt="Map"
          className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-md flex items-center">
          <img
            src="/path-to-pickup-icon.png"
            alt="Pickup Icon"
            className="w-6 h-6 mr-2" />
          <div>
            <h4 className="font-semibold text-sm">Pickup</h4>
            <p className="text-gray-600 text-xs">Industrial Area</p>
          </div>
        </div>
      </div>

      {/* Request for Pickup Button */}
      {/* <Link to="/notification2" className="bg-yellow-500 text-center py-3 text-black font-semibold text-lg cursor-pointer">
      Request for Pickup
    </Link> */}
    </div></>
  );
};

export default Notification1;