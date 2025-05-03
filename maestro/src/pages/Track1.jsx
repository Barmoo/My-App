import React from 'react';
import { Link } from 'react-router-dom';

const Track1 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full flex flex-col">
      {/* ETA and Actions */}
      <div className="bg-white p-4 shadow-md">
        <p className="text-gray-700 text-sm mb-4">ETA to dropoff 1hr, 45mins</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-green-500 text-white text-sm font-medium px-6 py-2">
            Call
          </button>
          <button className="bg-black text-white text-sm font-medium px-6 py-2">
            Send message
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative flex-1 mt-4">
        <img
          src="c:/Users/Bella/OneDrive/Desktop/Maestro/track cargo/iOS- Maestro- Track cargo@3x.png"
          alt="Map"
          className="w-full h-full object-cover"
        />

        {/* Dropoff Info */}
        <div className="absolute top-4 left-4 bg-white shadow-md p-2">
          <p className="text-blue-500 text-sm font-medium">Drop off</p>
          <p className="text-gray-700 text-sm">Olebu Ablekuma, kingd...</p>
        </div>

        {/* Driver Info */}
        <div className="absolute top-20 left-10 bg-white shadow-md p-2 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Driver"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-blue-500 text-sm font-medium">3mins away</p>
            <p className="text-gray-700 text-sm">Yaw Ofosu</p>
          </div>
        </div>

        {/* Pickup Info */}
        <div className="absolute bottom-10 left-4 bg-white shadow-md  p-2 flex items-center">
          <img
            src="https://via.placeholder.com/20"
            alt="Pickup Icon"
            className="w-6 h-6 mr-2"
          />
          <div>
            <p className="text-yellow-500 text-sm font-medium">Pickup</p>
            <p className="text-gray-700 text-sm">Industrial Area</p>
          </div>
        </div>
      </div>

      {/* Request for Pickup Button */}
      <Link to="/track2" className="bg-yellow-500 text-black text-lg font-medium py-4 w-full mt-4 text-center">
        Request for Pickup
      </Link>
    </div>
  );
};

export default Track1;