import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Location3 = () => {
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
      <div className="absolute top-16 left-4 right-4 bg-white shadow-md p-4 max-w-lg mx-auto">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-lg mr-2">●</span>
          <span className="text-blue-500 text-sm font-semibold">Industrial Area</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-black text-lg mr-2">■</span>
          <span className="text-gray-700 text-sm">Olebu Ablekuma Kingdom hall</span>
        </div>
        <div className="mt-2">
          <a href="#" className="text-blue-500 text-sm">Add a stop</a>
        </div>
      </div>

      {/* Pickup Marker */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 opacity-50 rounded-full animate-ping"></div>
          <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">⬤</span>
          </div>
        </div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-md px-4 py-2 max-w-xs">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/24" // Replace with the actual cargo icon
              alt="Cargo"
              className="w-6 h-6 mr-2"
            />
            <div>
              <p className="text-blue-500 font-semibold text-sm">Pickup</p>
              <p className="text-gray-700 text-sm">Industrial Area</p>
            </div>
            <button
              onClick={() => navigate('/location4')} // Replace '/next-page' with the actual route
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

export default Location3;