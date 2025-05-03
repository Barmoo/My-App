import React from 'react';
import { Link } from 'react-router-dom';

const Setting2 = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen w-full p-6 flex flex-col items-center">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Edit Account Details</h2>

      {/* Profile Image Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="c:/Users/Bella/OneDrive/Desktop/Maestro/settings/iOS- Maestro- Settings- Edit account details@3x.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-yellow-500 object-cover mb-2"
        />
        <button className="text-blue-500 text-sm font-medium">Change</button>
      </div>

      {/* Input Fields */}
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value="Edward Yeboah"
          className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
          readOnly
        />
        <input
          type="text"
          value="0202024965"
          className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
          readOnly
        />
        <div className="relative">
          <input
            type="password"
            value="********************"
            className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
            readOnly
          />
          <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
        </div>
        <div className="relative">
          <input
            type="password"
            value="********************"
            className="w-full bg-gray-200 text-gray-400 p-3 focus:outline-none"
            readOnly
          />
          <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">👁</span>
        </div>
      </div>

      {/* Save Button */}
      <Link to="/setting3" className="bg-black text-white text-base font-medium py-2 px-42 mt-6 ">
        Save
      </Link>
    </div>
  );
};

export default Setting2;