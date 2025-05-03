import React from 'react';
import { Link } from 'react-router-dom';

const Request3 = () => {
  return (
    <div className="font-sans p-5 bg-gray-100 min-h-screen w-full flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
        <h2 className="text-lg font-bold mb-6">Trip Details</h2>

        {/* Map Section */}
        <div className="mb-4 h-40 bg-gray-200 overflow-hidden">
          {/* Placeholder for the map */}
          <img
            src="c:/Users/Bella/OneDrive/Desktop/Maestro/requests/iOS- Maestro- Trips 2@3x.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Trip Details */}
        <div className="mb-6 bg-gray-200 p-4">
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg mr-2">●</span>
            <span className="text-base">
              From: <strong>Industrial area</strong>
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-black text-lg mr-2">■</span>
            <span className="text-base">
              To: <strong>Olebu Ablekuma Kingdom hall</strong>
            </span>
          </div>
        </div>

        {/* Cargo Details */}
        <div className="mb-6">
          <p className="text-base mb-2">
            <strong>Cargo Type:</strong> Iron rods
          </p>
          <p className="text-base mb-2">
            <strong>Weight:</strong> 567 lbs
          </p>
          <p className="text-base mb-2">
            <strong>Pickup date:</strong> 12-Aug-2020
          </p>
          <p className="text-base mb-2">
            <strong>Dropoff date:</strong> 13-Aug-2020
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button className="text-blue-500 text-base">Edit Booking</button>
          <Link to="/request4" className="text-red-500 text-base">Cancel Booking</Link>
        </div>
      </div>
    </div>
  );
};

export default Request3;