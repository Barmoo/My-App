import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Location4 = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full relative">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/768x1024" // Replace with the actual map image
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Location Input */}
      <div className="absolute top-16 left-4 right-4 bg-white rounded-lg shadow-md p-4 max-w-lg mx-auto">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-lg mr-2">●</span>
          <input
            type="text"
            placeholder="Enter pickup location"
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          />
        </div>
        <div className="flex items-center">
          <span className="text-black text-lg mr-2">■</span>
          <input
            type="text"
            placeholder="Enter drop-off location"
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700"
          />
        </div>
      </div>

      {/* Dropdown List */}
      <div className="absolute top-48 left-4 right-4 bg-white rounded-lg shadow-md p-4 max-w-lg mx-auto">
        <div className="flex items-center mb-4">
          <span className="text-black text-lg mr-2">■</span>
          <div>
            <p className="text-gray-700 font-semibold">Olebu Ablekuma Kingdom hall</p>
            <p className="text-gray-500 text-sm">Ablekuma, Accra</p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-center my-4">
          <span className="text-black text-lg mr-2">■</span>
          <div>
            <p className="text-gray-700 font-semibold">Frankies</p>
            <p className="text-gray-500 text-sm">Osu, Accra</p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-center my-4">
          <span className="text-black text-lg mr-2">■</span>
          <div>
            <p className="text-gray-700 font-semibold">New Jericho, Ebenezer School</p>
            <p className="text-gray-500 text-sm">Ashaiman, Accra</p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-center my-4">
          <span className="text-black text-lg mr-2">■</span>
          <div>
            <p className="text-gray-700 font-semibold">New Jericho, Ebenezer School</p>
            <p className="text-gray-500 text-sm">Ashaiman, Accra</p>
          </div>
          
        </div>
        <button
        onClick={() => navigate('/payments1')} // Replace '/next-page' with the actual route
        className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium"
        > 
        Next <FiArrowRight className="ml-2" />
      </button>
      </div>
    </div>
  );
};

export default Location4;