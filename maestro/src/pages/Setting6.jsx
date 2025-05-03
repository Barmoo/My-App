import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Setting6 = () => {
  const navigate = useNavigate();
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Edit Account Details</h2>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="c:/Users/Bella/OneDrive/Desktop/Maestro/settings/iOS- Maestro- Settings- Upload photot@3x.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-yellow-500 object-cover mb-2"
        />
        <button className="text-blue-500 text-sm font-medium mt-2">Change</button>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md space-y-4 mb-6">
        <input
          type="text"
          value="Edward Yeboah"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
          readOnly
        />
        <input
          type="text"
          value="0202024965"
          className="w-full bg-gray-200 text-base p-3 focus:outline-none"
          readOnly
        />
        <div className="relative">
          <input
            type="password"
            value="********************"
            className="w-full bg-gray-200 text-base p-3 focus:outline-none"
            readOnly
          />
          <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
        </div>
      </div>

      {/* Modal Section */}
      <div className="bg-white w-full max-w-md p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-medium">Select a Photo</h3>
          <button className="text-gray-500 text-lg font-medium">×</button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button className="w-full bg-black text-white text-base font-medium px-4 py-2">
            Choose from gallery
          </button>
          <button className="w-full bg-black text-white text-base font-medium px-4 py-2">
            Take photo
          </button>
          <button
            onClick={() => navigate('/setting7')} // Replace '/next-page' with the actual route
            className="mt-8 flex items-center justify-center text-blue-500 text-lg font-medium">
            Next <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting6;