import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';


const Setting5 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      <h2 className="text-sm font-medium text-gray-700 mb-4">Add favourite locations</h2>

      {/* Input Section */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter location"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
        />
        <button
          onClick={() => navigate('/setting6')} // Replace '/next-page' with the actual route
          className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium">
          Next <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Setting5;